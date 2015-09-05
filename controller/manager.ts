///<reference path="../declaration/node.d.ts"/>
///<reference path="../declaration/boom.d.ts"/>
///<reference path='../model/universe/galaxy.ts'/>

import Boom = require('boom');

import Universe = require('../model/universe');
import Galaxy = require('../model/universe/galaxy');
import System = require('../model/universe/system');
var ObjectId = require('mongodb').ObjectID;

import structure = require('../controller/structure');

class Manager {
    universeManager(request, reply){
        var db = request.server.plugins['hapi-mongodb'].db;
        var universe_id = request.params.universe_id;

        switch(request.method){
            case 'post':
                var name = request.payload.name;
                var universe = structure.createUniverse(name);
                db.collection('universe').insertOne(universe);
                reply(universe);
                break;
            case 'get':
                var find = {};
                if( universe_id != undefined ){
                    find = {_id: ObjectId(universe_id)}
                }
                var list = db.collection('universe').find(find).toArray();
                reply(list);
                break;
            default:
                reply('not defined').code(404);
                break;
        }

    }
    galaxyManager(request, reply){
        var db = request.server.plugins['hapi-mongodb'].db;
        var galaxy_id = request.params.galaxy_id;

        switch(request.method){
            case 'post':
                var name = request.payload.name;
                var universe_id = request.payload.universe_id;
                if( !universe_id){
                    reply(Boom.badRequest('missing universe_id'));
                } else {
                    var galaxy = new Galaxy(universe_id, name);

                    db.collection('galaxy').insertOne(galaxy);
                    reply(galaxy);
                }
                break;
            case 'get':
                var find = {};
                if( galaxy_id != undefined ){
                    find = {_id: ObjectId(galaxy_id)}
                }
                var list = db.collection('galaxy').find(find).toArray();
                reply(list);
                break;
            default:
                reply('not defined').code(404);
                break;
        }

    }
}

export = Manager;
///<reference path="../declaration/node.d.ts"/>
///<reference path="../declaration/hapi.d.ts"/>

import parameters = require('./parameters');

import Hapi = require('hapi');
import Good = require('good');
import routes = require('./route');

class Server {
    start(){
        var uri = parameters.server.hapi();
        var server = new Hapi.Server();
        server.connection(uri);

        server.route(routes);

        var opt = parameters.database.mongo()
        server.register({
            register: require('hapi-mongodb'),
            options: opt

        }, function (err) {
            if (err) {
                console.error(err);
                throw err;
            }
        });
        //server.register({ register: require('lout') }, function(err) {});

        server.register({
            register: Good,
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    events: {
                        response: '*',
                        log: '*'
                    }
                }]
            }
        }, function (err) {
            if (err) {
                throw err; // something bad happened loading the plugin
            }

        });

        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
        return server;
    }
}


export = new Server().start();
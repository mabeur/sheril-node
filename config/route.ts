///<reference path="../declaration/joi.d.ts"/>
///<reference path="../declaration/mongodb.d.ts"/>
///<reference path='../controller/manager.ts'/>

import Manager = require('../controller/manager');
import server = require('./server');
import Joi = require('joi');

var manager = new Manager();

export = [
    {
        method: ['GET','POST','PATCH','DELETE'],
        path:'/api/universe/{univers_id?}',
        handler: manager.universeManager,
        config: {
            description: 'Manage universe',
            notes: "Manage universe",
            tags: ['api', 'structure','admin']
        }
    },
    {
        method: ['GET','POST','PATCH','DELETE'],
        path:'/api/galaxy/{galaxy_id?}',
        handler: manager.galaxyManager,
        config: {
            description: 'Manage universe',
            notes: "Manage universe",
            tags: ['api', 'structure','admin']
        }
    }
];
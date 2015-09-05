///<reference path="../declaration/node.d.ts"/>
///<reference path='../model/universe/galaxy.ts'/>

import Universe = require('../model/universe');
import Galaxy = require('../model/universe/galaxy');
import System = require('../model/universe/system');

class StructureManager {
    static createUniverse(name:string){
        var universe:Universe = new Universe(name);
        return universe;
    }
}

export = StructureManager;
///<reference path="../../declaration/node.d.ts"/>
///<reference path='system.ts'/>

import System = require('system');
import Universe = require('universe');

class Galaxy {
    public name:string;
    public universe_id;
    public systems:Array<System> = [];
    constructor(universe_id,name:string){
        this.universe_id = universe_id;
        this.name = name;
    }
}

export = Galaxy;
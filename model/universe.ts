///<reference path="../declaration/node.d.ts"/>
///<reference path='./universe/galaxy.ts'/>

import Galaxy = require('./universe/galaxy');

class Universe {
    public name:string;
    public galaxies:Array<Galaxy> = [];
    constructor(name:string){
        this.name = name;
    }
}

export = Universe;
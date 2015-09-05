///<reference path="../../declaration/node.d.ts"/>
///<reference path='../behavior/positionnable.ts'/>

class System implements Positionnable {
    posX:number;
    posY:number;
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

export = System;
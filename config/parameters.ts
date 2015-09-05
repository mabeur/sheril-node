///<reference path="../declaration/node.d.ts"/>

var config = {
    server: {
        host: 'localhost',
        port: 8200,
        hapi: function(){
            return {host:this.host, port:this.port};
        }
    },
    database: {
        host: 'localhost',
        port: 27017,
        db: 'Sheril',
        username:'',
        password:'',
        mongo: function(){
            return {
                url: 'mongodb://' + this.host + ':'+this.port+'/' + this.db,
                settings: {
                    db: {
                        'native_parser' : false
                    }
                }
            }
        }
    }
}

export = config;
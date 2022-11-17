"use strict";
var http = require("http");
var op = require("./operaciones");

var server = http.createServer(
    function (req, res){

        res.writeHead(200, {"content-type": "text/plain"});
        res.end("hola mundo");

    }
);

//server.listen(8080);
console.log("Resultado de 5 +3: "+ op.suma(5, 3));
console.log("El nombre es: "+ op.getNombre());
const http = require('http');

var server = http.createServer((request, response) =>{

response.writeHead(200, {'content-Type': 'text/plain'});
response.write('Hola mundo con http');
response.end();

});

server.listen(3000);

console.log('Servidor funcionando en el puerto 3000');


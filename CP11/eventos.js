var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('Hola', number => {

    console.log(`Iniciado en ${number}`);


});

emitter.on('start', number => {

    console.log(`evento start con parametro ${number}`);


});

emitter.emit('start', 23);
emitter.emit('Hola', 58);
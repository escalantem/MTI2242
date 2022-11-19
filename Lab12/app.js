const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => { res.send('hola mundo con Express');});


app.get('/contactenos', (peticion, resultado) => {

    resultado.send('Esta es la pagina de contactenos.');


});

app.get('*', (request, response) => {

    //response.send('404 | Pagina no encontrada.');
    response.sendFile( __dirname + '/public/404.html');

});

app.listen(3000);

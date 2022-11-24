const express = require('express');
const app = express();
const port = 3001;


app.get('/', (peticion, respuesta)=>{

    respuesta.send("Hola mundo");

});

app.listen(port, () =>{

    
console.log(`Servidor iniciado en el puerto ${port}`);

});



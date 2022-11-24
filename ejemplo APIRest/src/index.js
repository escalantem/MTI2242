var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 3000;

var libros = [

    {id: 101, titulo: "El olor de la guayaba", autor:"Garcia Marquez", year: 1980},
    {id: 102, titulo: "Otro libro", autor:"Luis Perez", year: 1990},
    {id: 103, titulo: "Libro de la vida", autor:"Varios", year: 1999},
];

nuevoLibro = {id: 104, titulo: "politica de Colombia", autor:"Juan Gomez", year: 2004};

libros.push(nuevoLibro);

console.log("Cantidad de libros: "+ libros.length);


app.get('/', (req, res) =>{

    res.send('ruta inicial');

});


app.get('/libros', (req, res) =>{

    res.send(libros);

});



app.get('/libros/:id', (req, res) =>{

    console.log(req.params.id);

    libroEncontrado = libros.filter((libro)=>{

        if(libro.id == req.params.id){
            return true;
        }

    });


    if(libroEncontrado.length == 1)
    {
        res.json(libroEncontrado);
    }
    else
    {
        res.status = (404);
        res.json({message: "Libro no encontrado."});
    }

});


app.post('/libros', (req, res)=>
{

    libros.push(
        {
            id: libros[libros.length-1].id+1,
            titulo: req.body.titulo,
            autor: req.body.autor,
            year: req.body.year
        }
    );


    res.json({status: "200", totalLibros: libros.length});

});



app.listen(port, ()=>{
    console.log('Servidor arriba en puerto: ' + port);
});
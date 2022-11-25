require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouters=require('./routes/users');

const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', userRouters);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conectado a la BD.'))
.catch((error) => console.log(error));

app.get('/',
(req, res) => {

    res.send("Welcome to my API. !!!");
});

app.listen(
    port, ()=>{
        console.log('server listening on port', port);
    });




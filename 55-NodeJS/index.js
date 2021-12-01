/* Forma de CommonJS
const express = require('express'); */
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app =  express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual. req: lo que se envia la servidor. res: lo que el servidor devuelve 
app.use((req, res, next) => {
    const year = new Date();

    res.locals.nombreSitio = 'Agencia de Viajes';

    res.locals.actualYear = year.getFullYear();

    // Next: va al siguiente middleware
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpet a 'public'
app.use(express.static('public'));

// Agregar Router . 'use' soporta get, post, put, patch y delete
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})

/*
    // Envio de una petición. 'req' es lo que enviamos y 'res' es la respuesta de express
    app.get('/', (req, res) => {

        // .send es un metodo utilizado para mostrar algo en pantalla
        res.send('Hola mundo');

        // .json es un metodo utilizado para retornar un objeto de json
        res.json({
            id: 1
        })

        // .render es un metodo utilizado para mostrar una vista
        res.render();
    })
*/
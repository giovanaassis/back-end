require('dotenv').config();
const express = require('express');
const db = require('./db');

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {

    res.status(200).json({
        message: 'Está funcionando!'
    });
})


app.listen(port, () => console.log('Servidor rodando...'));
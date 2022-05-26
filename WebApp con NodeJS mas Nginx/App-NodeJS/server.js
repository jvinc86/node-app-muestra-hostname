'use strict';

const express = require('express');
const os = require('os');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
const el_hostname = os.hostname();

app.get('/', (req, res) => {
    res.send(`VERSION 4: Hola Londres, desde el servidor llamado ${el_hostname}`);
});

app.get('/miwebnginx', async (req, res) => {
    const url = 'http://miwebnginx';
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
});


app.listen(PORT, HOST);
console.log(`🚀 Accede a la SUPER APP ingresando a 📲 http://localhost:${PORT}`);
'use strict';

const express = require('express');
const os = require('os');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
const el_hostname = os.hostname();

app.get('/', (req, res) => {
    res.send(`VERSION 3: Hola Caracas, desde el servidor llamado ${el_hostname}`);
});

app.listen(PORT, HOST);
console.log(`🚀 Accede a la SUPER APP ingresando a 📲 http://localhost:${PORT}`);

'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
const el_hostname = os.hostname();
app.get('/', (req, res) => {
    res.send(`Hola Paris, desde el servidor llamado ${el_hostname}`);
});

app.listen(PORT, HOST);
console.log(`🚀 Accede a la SUPER APP ingresando a 📲 http://localhost:${PORT}`);

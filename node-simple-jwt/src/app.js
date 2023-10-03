const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

//---------Los estilos y demas archivos en la carpeta public------
app.use(express.static(__dirname + '/public'));
// -------------------------------------------------------------------
module.exports = app;
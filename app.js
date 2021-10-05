var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//rotas para variaveis
var prediosRouter = require('./routes/prediosRoutes');
var apartamentosRouter = require('./routes/apartamentosRoutes');

var app = express();


//inicia tabelas do banco e algumas entradas para testes
const initSQL = require('./DB/init');
app.use(cors()); //permite cross-origin
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//serve os arquivos estaticos
app.use(express.static(path.join(__dirname, 'public', 'build')));

//aponta rotas
app.use('/api/predios', prediosRouter);
app.use('/api/apartamentos', apartamentosRouter);

//entrega paginas
var indexPath = __dirname + "/public/build/index.html";
app.get("*", function(req, res) {
   res.sendFile(indexPath);
 });

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//rotas para variaveis
var prediosRouter = require('./routes/prediosRoutes');
var apartamentosRouter = require('./routes/apartamentosRoutes');

var indexRouter = require('./routes/index');

var app = express();


//inicia tabelas do banco e algumas entradas para testes
const initSQL = require('./DB/init');
app.use(cors()); //permite cross-origin
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//serve os arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//aponta rotas
app.use('/api/predios', prediosRouter);
app.use('/api/apartamentos', apartamentosRouter);

app.use('/', indexRouter);

module.exports = app;

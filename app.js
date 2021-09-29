var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//rotas para variaveis
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


//inicia tabelas do banco e algumas entradas para testes
const initSQL = require('./DB/init');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//serve os arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//aponta rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

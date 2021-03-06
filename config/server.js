const express = require('express');
const path = require('path')

const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(express.static(path.join(__dirname, '../app/public')));
//app.use(express.static('app/public'));

app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));

consign().include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


module.exports = app;


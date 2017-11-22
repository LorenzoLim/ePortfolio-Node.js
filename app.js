const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', require('./routes'))

app.listen(port)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', api);

app.listen(port)

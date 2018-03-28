/**
 * App configuration
 */

const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');
// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;

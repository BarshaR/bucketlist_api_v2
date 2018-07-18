/**
 * App configuration
 */

const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
// Mount all routes
app.use('/', routes);

export default app;

const express = require('express');
const serverless = require('serverless-http');
const routerModule = require('./components/router');

const api = express();

api.use('/api/', routerModule);

api.use(express.static('dist'));

const handler = serverless(api);

module.exports = { handler };
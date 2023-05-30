const express = require('express');
const serverless = require('serverless-http');
const routerModule = require('./components/router');

const api = express();

api.use('/api/', routerModule);

const handler = serverless(api);

module.exports = { handler };
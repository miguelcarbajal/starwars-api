const serverless = require("serverless-http");
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./starwars.yml')

const app = express();

app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(swaggerDocument))

module.exports = {
  app,
  handler: serverless(app)
};

const serverless = require("serverless-http");
const express = require("express");
const { registerStarship } = require('./service')

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const registeredStarship = await registerStarship(req.body)

    return res.status(201).json({
      message: `${registerStarship.nombre} successfuly registered`,
      id: registeredStarship.id
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Cannot register starship'
    });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = {
  app,
  handler: serverless(app)
};

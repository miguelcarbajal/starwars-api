const serverless = require("serverless-http");
const express = require("express");
const { getStarshipsFromSwapi, getStarshipsFromDatabase } = require('./service')

const app = express();

app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    // Retrieving starships from Swapi and DynamoDB
    const starshipsFromSwapi = await getStarshipsFromSwapi();
    const starshipsFromDatabase = await getStarshipsFromDatabase();

    // Joining results
    let starships = starshipsFromSwapi;
    if (!!starshipsFromDatabase) {
      starships = starships.concat(starshipsFromDatabase);
    }

    return res.status(200).json({
      starships
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
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

const AWS = require('aws-sdk');
const axios = require('axios');
const { Starship } = require('../schemas/starship');

const STARSHIPS_TABLE = process.env.STARSHIPS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

/**
 * Retrieve starships from Swapi
 * @returns starships
 */
const getStarshipsFromSwapi = async () => {
  try {
    const { data } = await axios.get('https://swapi.py4e.com/api/starships/');
    return data.results.map(rawStarship => Starship.fromApiResponse(rawStarship));
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Retrieve starships from DynamoDB
 * @returns starships
 */
const getStarshipsFromDatabase = async () => {
  try {
    const { Item: starships } = await dynamoDbClient.scan({ TableName: STARSHIPS_TABLE}).promise();
  
    return starships;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getStarshipsFromSwapi,
  getStarshipsFromDatabase
}

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { Starship } = require('./schemas/starship');

const STARSHIPS_TABLE = process.env.STARSHIPS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

/**
 * Register new starship on DynamoDB
 * @param {Starship} starship 
 * @returns {string} id - Starship ID
 * @returns {string} nombre - Starship name
 */
const registerStarship = async (starship) => {
  try {
    const newStarship = {
      id: uuidv4(),
      fechaDeCreacion: new Date(),
      fechaDeEdicion: new Date(),
      ...starship
    };

    const params = {
      TableName: STARSHIPS_TABLE,
      Item: newStarship
    };

    await dynamoDbClient.put(params).promise();
    
    return {
      id: newStarship.id,
      nombre: newStarship.nombre
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  registerStarship
}

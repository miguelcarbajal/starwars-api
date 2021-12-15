const request = require('supertest');
const { app } = require('../../../src/functions/getStarships/controller')

describe('Test GET starships function', () => {
  const response = await request(app).get('/');

  test('It should response OK http status', async () => {
    expect(response.statusCode).toBe(200);
  });

  test('It should return an array', () => {
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('It should not to be an empty array', () => {
    expect(response.body.length).toBeGreaterThan(0);
  });
});

const request = require('supertest');
const { Starship } = require('../../../src/functions/schemas/starship');
const { app } = require('../../../src/functions/registerStarship/controller');

describe('Test POST starship function', () => {
  const response = await request(app).post('/').send(newStarship());

  test('It should response created http status', async () => {
    expect(response.statusCode).toBe(201);
  });

  test('It should response the created starship id and success message', async () => {
    expect.assertions(4)
    
    expect(response.body).toHaveProterty('id');
    expect(response.body).toHaveProterty('message');
    
    expect(typeof response.body.id).toBe('string');
    expect(typeof response.body.message).toBe('string');
  });

  test('It should return an expected success message', () => {
    expect(response.body.message).toBe(`${newStarship().nombre} successfuly registered`);
  });
});

const newStarship = () => {
  const newStarship = new Starship()
  newStarship.nombre = 'Testing Starship'
  newStarship.mglt = '5 MGLT'
  newStarship.capacidadDeCarga = '100000'
  newStarship.consumibles = '1 year'
  newStarship.costoEnCreditos = '100000'
  newStarship.tripulacion = '3213'
  newStarship.calificacionDeHyperdrive = '5.0'
  newStarship.longitud = '3400'
  newStarship.fabricante = 'Imperial Department of Military Research'
  newStarship.maximaVelocidadAtmosferica = 'n/a'
  newStarship.modelo = 'MAC-1 Super Blue Surfer'
  newStarship.pasajeros = '32131'
  newStarship.peliculas = []
  newStarship.pilotos = []
  newStarship.clase = 'Transporter'
  newStarship.enlace = ''

  return newStarship
}

class Starship {
  id;
  mglt;
  capacidadDeCarga;
  consumibles;
  costoEnCreditos;
  tripulacion;
  calificacionDeHyperdrive;
  longitud;
  fabricante;
  maximaVelocidadAtmosferica;
  modelo;
  nombre;
  pasajeros;
  peliculas;
  pilotos;
  clase;
  enlace;
  fechaDeCreacion;
  fechaDeEdicion;

  static fromApiResponse(rawStarship) {
    const starship = new Starship();

    starship.mglt                       = rawStarship.MGLT;
    starship.capacidadDeCarga           = rawStarship.cargo_capacity;
    starship.consumibles                = rawStarship.consumables;
    starship.costoEnCreditos            = rawStarship.cost_in_credits;
    starship.fechaDeCreacion            = rawStarship.created;
    starship.tripulacion                = rawStarship.crew;
    starship.fechaDeEdicion             = rawStarship.edited;
    starship.calificacionDeHyperdrive   = rawStarship.hyperdrive_rating;
    starship.longitud                   = rawStarship.length;
    starship.fabricante                 = rawStarship.manufacturer;
    starship.maximaVelocidadAtmosferica = rawStarship.max_atmosphering_speed;
    starship.modelo                     = rawStarship.model;
    starship.nombre                     = rawStarship.name;
    starship.pasajeros                  = rawStarship.passengers;
    starship.peliculas                  = rawStarship.films;
    starship.pilotos                    = rawStarship.pilots;
    starship.clase                      = rawStarship.starship_class;
    starship.enlace                     = rawStarship.url;

    return starship;
  } 
}

module.exports = {
  Starship
}

const City = require('../models/city.js')

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});

test('Can create a city object', () => {
    let city = City.createCity(['São Paulo','Sao Paulo',-23.5587,-46.625,'Brazil','BR','BRA','São Paulo','admin',18845000,1076532519]);
    expect(city).toBeInstanceOf(City);
});

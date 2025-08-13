module.exports = (app) => {
    const pelicula = require('../controllers/pelicula.controller');
    var router = require('express').Router();

    router.post('/', pelicula.create);
    router.get('/', pelicula.findAll);
    router.get('/:id', pelicula.findOne);
    router.put('/:id', pelicula.update);
    router.delete('/:id', pelicula.delete);

    app.use('/api/peliculas', router)
}
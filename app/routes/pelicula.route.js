module.exports = (app) => {
    const pelicula = require('../controllers/pelicula.controller');
    var router = require('express').Router();

    router.post('/', pelicula.create);
    app.use('/api/peliculas', router)
}
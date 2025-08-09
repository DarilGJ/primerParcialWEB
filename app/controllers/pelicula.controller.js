const db = require('../models');
const Pelicula = db.pelicula;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const pelicula = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        anio_lanzamiento: req.body.anio_lanzamiento,
        genero: req.body.genero,
    };
    Pelicula.create(pelicula)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Libro."
            });
        });
};
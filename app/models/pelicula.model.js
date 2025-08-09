module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define('pelicula', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sinopsis: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        actores: {
            type: Sequelize.STRING,
            allowNull: false,
        } ,
        duracion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tipo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        categoria: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        anio_lanzamiento: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
        {
            underscored: true,
        });
    return Pelicula;
}
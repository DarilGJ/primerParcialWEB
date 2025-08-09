const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Cambia esto según tus necesidades de seguridad
        }
    },

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.pelicula = require('./pelicula.model.js')(sequelize, Sequelize)

module.exports = db;
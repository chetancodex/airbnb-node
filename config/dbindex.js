const dbConfig = require('./dbconfig');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});
const db = {} ;
db.User = require('../models/users') (sequelize,Sequelize);
db.Place = require('../models/places') (sequelize,Sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
module.exports = db


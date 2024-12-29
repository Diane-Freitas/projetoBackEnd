const { Sequelize } = require('sequelize');  

const connection = new Sequelize({
    dialect: 'mysql',
    database:'projeto',
    host: 'localhost',
    username:'root',
    password:'root',
    port: 3306
    });

module.exports = connection;


const Sequelize =require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Akshubham8@', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
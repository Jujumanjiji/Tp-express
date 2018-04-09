const Sequelize = require('sequelize');
const sequelize = require('./Sequelize')


//Création de la table Users
const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    pseudo_utilisateur: {
        type: Sequelize.STRING,
    }
});

Users.sync()
module.exports = Users;

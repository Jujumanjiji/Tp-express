const Sequelize = require('sequelize');
const sequelize = require('./Sequelize')

//Création de la table "todos"
const todos = sequelize.define('todos', {
id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
message:{
    type : Sequelize.STRING,
},
completion:{
    type: Sequelize.BOOLEAN,
}
});

Todo.sync();
module.exports = todos;

//sexy
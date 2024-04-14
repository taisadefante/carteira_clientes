import db from '../db';
import Sequelize from 'sequelize';

export default db.define('client', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cargo: {
        type: Sequelize.STRING,
    },

    email: {
        type: Sequelize.STRING,
    },

    telefone: {
        type: Sequelize.STRING,
    },

    linkedin: {
        type: Sequelize.STRING,
    },

    aniversario: {
        type: Sequelize.STRING,
    },

    endereco: {
        type: Sequelize.STRING,
    },

    importante: {
        type: Sequelize.STRING,
    }


  
});
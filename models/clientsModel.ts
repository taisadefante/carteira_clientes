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
        allowNull: true
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },

    linkedin: {
        type: Sequelize.STRING,
        allowNull: true
    },

    aniversario: {
        type: Sequelize.STRING,
        allowNull: true
    },

    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },

    importante: {
        type: Sequelize.STRING,
        allowNull: true
    }


  
});
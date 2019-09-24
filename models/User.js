const Sequelize = require('sequelize');
const db = require('../database/db');

const User = db.sequelize.define(
    'user',
    {
        email : {
            type : Sequelize.STRING,
            primaryKey : true,
        },
        PASSWORD: {
            type: Sequelize.STRING,
        },
        name : {
            type: Sequelize.STRING,   
        },
        phoneNumber : {
            type : Sequelize.STRING
        },
        birth : {
            type : Sequelize.DATE,
        },
        coin : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        }
    },
    {
        timestamps: false
    }
)

module.exports = User;
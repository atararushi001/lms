const { DataTypes } = require('sequelize');
const sequelize = require('../config');

'use strict';


const User = sequelize.define("user", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

User.beforeCreate(async (user) => {
    const existingUser = await User.findOne({ where: { email: user.email } });
    if (existingUser) {
        throw new Error('Email already exists');
    }
});

module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config');

'use strict';


const addCourse = sequelize.define("Courses", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Images: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});



module.exports = addCourse;

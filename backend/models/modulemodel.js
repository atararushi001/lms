const { DataTypes } = require('sequelize');
const sequelize = require('../config');

'use strict';


const addchapter = sequelize.define("chapter", {
    module_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    module_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    module_video: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Course_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});


module.exports = addchapter;

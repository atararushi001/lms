const { DataTypes } = require('sequelize');
const sequelize = require('../config');

'use strict';


const Purchase = sequelize.define("Purchases", {
    Course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = (Courses) => {
    const Purchase = sequelize.define("Purchase", {
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // define other fields here
    }, {
        timestamps: true
    });
  
    Purchase.associate = function() {
      Purchase.belongsTo(Courses, { foreignKey: 'courseId' });
    };
  
}
module.exports = Purchase;

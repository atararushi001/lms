const Courses = require('./coursesModel');
const Purchase = require('./Purchasemodel');

const Module = require('./modulemodel');
Courses.hasMany(Purchase, { foreignKey: 'Course_id' });
Purchase.belongsTo(Courses, { foreignKey: 'id' });

Courses.hasMany(Module, { foreignKey: 'Course_id' });
Module.belongsTo(Courses, { foreignKey: 'id' });


module.exports = {
  Courses,
  Purchase,
  Module
};
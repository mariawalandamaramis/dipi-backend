'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.hasMany(models.Inovation, {
        foreignKey: 'city_id',
        as: 'city',
      });
    }
  }
  City.init({
    name: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
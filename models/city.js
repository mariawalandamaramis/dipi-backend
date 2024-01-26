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
      City.belongsTo(models.Province, {
        foreignKey: 'province_id',
        as: 'prov',
      });
    }
  }
  City.init({
    name: DataTypes.STRING,
    province_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
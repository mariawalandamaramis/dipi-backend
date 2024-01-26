'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    static associate(models) {
      Province.hasMany(models.Inovation, {
        foreignKey: 'province_id',
        as: 'province',
      });
      Province.hasMany(models.City, {
        foreignKey: 'province_id',
        as: 'prov',
      });
    }
  }
  Province.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Province',
  });
  return Province;
};
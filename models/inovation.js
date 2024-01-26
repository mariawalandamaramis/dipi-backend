'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inovation extends Model {
    static associate(models) {
      Inovation.hasMany(models.Article, {
        foreignKey: 'inovation_id',
        as: 'inovation',
      });
      Inovation.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      Inovation.hasMany(models.Support, {
        foreignKey: 'inovation_id',
        as: 'Support',
      });
      Inovation.hasMany(models.DonationPackage, {
        foreignKey: 'inovation_id',
        as: 'package',
      });
      Inovation.hasMany(models.Faq, {
        foreignKey: 'inovation_id',
        as: 'faq',
      });
      Inovation.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
      });
      Inovation.belongsTo(models.Province, {
        foreignKey: 'province_id',
        as: 'province',
      });
      Inovation.belongsTo(models.City, {
        foreignKey: 'city_id',
        as: 'city',
      });
    }
  }
  Inovation.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    inovation_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    city_id: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    flag_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Inovation',
  });
  return Inovation;
};
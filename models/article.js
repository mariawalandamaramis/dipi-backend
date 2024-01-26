'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsTo(models.Inovation, {
        foreignKey: 'inovation_id',
        as: 'inovation',
      });
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inovation_id:{
      type: DataTypes.INTEGER
    },
    description: DataTypes.TEXT,
    flag_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    article_image: DataTypes.STRING,
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
    modelName: 'Article',
  });
  return Article;
};
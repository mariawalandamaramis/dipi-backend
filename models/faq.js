'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    static associate(models) {
      Faq.belongsTo(models.Inovation, {
        foreignKey: 'inovation_id',
        as: 'faq',
      });
    }
  }
  Faq.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inovation_id:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Faq',
  });
  return Faq;
};

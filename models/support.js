'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    static associate(models) {
      Support.belongsTo(models.User, {
        foreignKey: 'giver_id',
        as: 'giver',
      });
      Support.belongsTo(models.Inovation, {
        foreignKey: 'inovation_id',
        as: 'supports',
      });
      Support.belongsTo(models.DonationPackage, {
        foreignKey: 'package_id',
        as: 'packageDonate',
      });
    }
    
  }
  Support.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nominal: DataTypes.INTEGER,
    inovation_id : DataTypes.INTEGER,
    giver_id : DataTypes.INTEGER,
    package_id : DataTypes.INTEGER,
    fee : DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Support',
  });
  return Support;
};
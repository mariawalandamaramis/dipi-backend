'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Inovation, { 
        foreignKey: 'user_id', 
        as: 'user' 
      });
      User.hasMany(models.Support, { 
        foreignKey: 'giver_id', 
        as: 'giver' 
      });  
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: DataTypes.STRING,
    bio: DataTypes.TEXT,
    profile: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

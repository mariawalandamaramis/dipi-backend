'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaketDonasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaketDonasi.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_paket: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    link: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'PaketDonasi',
  });
  return PaketDonasi;
};
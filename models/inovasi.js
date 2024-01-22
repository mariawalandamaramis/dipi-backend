'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inovasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inovasi.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_inovasi: DataTypes.STRING,
    deskripsi_singkat: DataTypes.TEXT,
    kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    foto_pendukung: DataTypes.STRING,
    video_pendukung: DataTypes.STRING,
    jumlah_pendanaan: DataTypes.INTEGER,
    durasi: DataTypes.INTEGER,
    latar_belakang: DataTypes.TEXT,
    foto_latar_belakang: DataTypes.STRING,
    misi_pendanaan: DataTypes.TEXT,
    foto_misi: DataTypes.STRING,
    tantangan_pendanaan: DataTypes.TEXT,
    foto_tantangan: DataTypes.STRING,
    resiko_pendanaan: DataTypes.TEXT,
    foto_resiko: DataTypes.STRING,
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
    modelName: 'Inovasi',
  });
  return Inovasi;
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inovasi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_inovasi: {
        type: Sequelize.STRING
      },
      deskripsi_singkat: {
        type: Sequelize.TEXT
      },
      kota: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      foto_pendukung: {
        type: Sequelize.STRING
      },
      video_pendukung: {
        type: Sequelize.STRING
      },
      jumlah_pendanaan: {
        type: Sequelize.INTEGER
      },
      durasi: {
        type: Sequelize.INTEGER
      },
      latar_belakang: {
        type: Sequelize.TEXT
      },
      foto_latar_belakang: {
        type: Sequelize.STRING
      },
      misi_pendanaan: {
        type: Sequelize.TEXT
      },
      foto_misi: {
        type: Sequelize.STRING
      },
      tantangan_pendanaan: {
        type: Sequelize.TEXT
      },
      foto_tantangan: {
        type: Sequelize.STRING
      },
      resiko_pendanaan: {
        type: Sequelize.TEXT
      },
      foto_resiko: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      kategori_id: {
        type: Sequelize.INTEGER
      },
      flag_active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inovasi');
  }
};
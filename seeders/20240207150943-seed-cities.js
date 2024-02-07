'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [
      { name: 'Kabupaten Aceh Barat', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Barat Daya', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Besar', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Jaya', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Selatan', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Singkil', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Tamiang', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Tengah', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Tenggara', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Timur', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Aceh Utara', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Bener Meriah', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Bireuen', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Gayo Lues', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Nagan Raya', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Pidie', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Pidie Jaya', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabupaten Simeulue', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kota Banda Aceh', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kota Langsa', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kota Lhokseumawe', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kota Sabang', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kota Subulussalam', province: 'Aceh', createdAt: new Date(), updatedAt: new Date() },
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};

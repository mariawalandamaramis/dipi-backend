'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      { category_name: 'Kerajinan', createdAt: new Date(), updatedAt: new Date() },
      { category_name: 'Makanan & Minuman', createdAt: new Date(), updatedAt: new Date() },
      { category_name: 'Acara', createdAt: new Date(), updatedAt: new Date() },
      { category_name: 'Digital', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};

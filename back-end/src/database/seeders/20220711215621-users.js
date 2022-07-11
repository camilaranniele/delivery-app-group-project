'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin123',
      role: 'admin',
    }, {
      name: 'Seller',
      email: 'seller@seller.com',
      password: 'seller123',
      role: 'seller',
    }, {
      name: 'User',
      email: 'user@user.com',
      password: 'user123',
      role: 'user',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

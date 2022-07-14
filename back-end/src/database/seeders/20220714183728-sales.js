'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      id: 1,
      user_id: 3,
      seller_id: 2,
      total_price: 34.40,
      delivery_address: 'Rua dos Bobos',
      delivery_number: '123F',
      sale_date: new Date(),
      status: 'Pendente',
    }], {});

    await queryInterface.bulkInsert('salesProducts', [{
      sale_id: 1,
      product_id: 1,
      quantity: 2,
    }, {
      sale_id: 1,
      product_id: 4,
      quantity: 4,
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

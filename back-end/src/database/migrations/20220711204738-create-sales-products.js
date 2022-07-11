'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sales',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    }, {
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};
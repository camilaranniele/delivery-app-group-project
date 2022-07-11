'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
    }, {
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};
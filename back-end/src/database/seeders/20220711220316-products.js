'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [{
      name: 'Coca Cola 2l',
      price: 10.00,
      urlImage: 'https://www.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/c/o/coca_2l.png'
    }, {
      name: 'Absolut Vodka',
      price: 60.00,
      urlImage: 'https://superadega.vteximg.com.br/arquivos/ids/170982-1000-1000/Vodka-Absolut-Natural-1L.jpg?v=637775923203930000',
    }, {
      name: 'Colorado',
      price: 9.99,
      urlImage: 'https://courier-images-prod.imgix.net/produc_variant/00010136_823bc8b9-ada4-4b74-a12e-494ad621766c.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

const { products } = require('../../database/models');

async function getProducts() {
    const getAllProducts = await products.findAll();
    return getAllProducts;
}

async function getProductById(id) {
    const product = await products.findByPk(id);
    return product;
}

// async function createProduct({ name, price, urlImage }) {
//    const product = await model.createProduct({ name, price , urlImage});
//    return product;
// }

// async function updateProduct({ id, name, price, urlImage }) {
//   const product = await model.updateProduct({ id, name, price, urlImage});
//   return product;
// }

// async function deleteProduct(id) {
//   await model.deleteProduct(id);
//   return true;
// } 

module.exports = {
  getProducts,
  getProductById,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};
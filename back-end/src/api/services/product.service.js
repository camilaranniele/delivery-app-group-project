const model = require('../../database/models/products');

async function getProducts() {
    const products = await model.getProducts();
    return products;
}

async function getProductById(id) {
    const product = await model.getProductById(id);
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
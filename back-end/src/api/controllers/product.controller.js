const service = require('../services/product.service');

const getProducts = async (_req, res) => {
  try {
    const products = await service.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.getProductById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send('');
  }
};

// async function createProduct(req, res) {
//   try {
//     const { name, price, urlImage  } = req.body;
//     const product = await service.createProduct({ name,  price, urlImage });
//     return res.status(201).json(product);
//   } catch (error) {
//     return res.status(500).end();
//   }
// }

// async function updateProduct(req, res) {
//   try {
//     const { id } = req.params;
//     const { name,  price, urlImage  } = req.body;
//     const product = await service.getProductById((id));
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     const productUpd = await service.updateProduct({ id, name,  price, urlImage });
//     if (productUpd) return res.status(200).json(productUpd);
//   } catch (error) {
//     return res.status(500).end();
//   }
// }

// async function deleteProduct(req, res) {
//   try {
//     const { id } = req.params;
//     const product = await productService.getProductById((id));
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     const productDel = await service.deleteProduct(id);
//     if (productDel) return res.status(204).send('');
//   } catch (error) {
//     return res.status(500).end();
//   }
// }

module.exports = {
  getProducts,
  getProductById,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};
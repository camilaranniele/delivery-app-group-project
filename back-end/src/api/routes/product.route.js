const { Router } = require('express');

const ProductRoutes = Router();

const controller = require('../controllers/product.controller');
// const middleware = require('../middlewares/product.middleware');

ProductRoutes.get('/',
controller.getProducts);

ProductRoutes.get('/:id',
controller.getProductById);

// router.post('/products',
// middleware.checkName, 
// middleware.checkPrice,
// middleware.checkExistName,
// middleware.createProduct);

// router.put('/products/:id',
// middleware.checkName,
// middleware.checkPrice,
// middleware.checkExistName,
// controller.updateProduct);

// router.delete('/products/:id',
// controller.deleteProduct);

module.exports = ProductRoutes;
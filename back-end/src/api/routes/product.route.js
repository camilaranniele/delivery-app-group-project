const express = require('express');

const router = express.Router();

const controller = require('../controllers/product.controller');
const middleware = require('../middlewares/product.middleware');

router.get('/products',
controller.getProducts);

router.get('/products/:id',
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

module.exports = router;
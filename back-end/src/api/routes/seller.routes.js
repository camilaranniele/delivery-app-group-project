const { Router } = require('express');
const SellerController = require('../controllers/seller.controller');

const SellerRoutes = Router();

SellerRoutes.get('/', SellerController.read);

module.exports = SellerRoutes;

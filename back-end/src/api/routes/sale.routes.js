const { Router } = require('express');
const SalesController = require('../controllers/sales.controller');
const tokenMiddleware = require('../middlewares/token.middleware');

const SalesRoutes = Router();

SalesRoutes.use(tokenMiddleware.validateToken);

SalesRoutes.get('/', SalesController.readSales);
SalesRoutes.get('/details/:id', SalesController.readSalesDetails);

module.exports = SalesRoutes;

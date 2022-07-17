const { Router } = require('express');
const SalesController = require('../controllers/sales.controller');
const tokenMiddleware = require('../middlewares/token.middleware');
const schemaValidator = require('../middlewares/schemaValidator.middleware');
const { saleSchema } = require('../middlewares/schemas/sale.schema');

const SalesRoutes = Router();
const validateNewSale = schemaValidator(saleSchema);

SalesRoutes.use(tokenMiddleware.validateToken);

SalesRoutes.get('/', SalesController.readSales);
SalesRoutes.get('/details/:id', SalesController.readSalesDetails);
SalesRoutes.post('/', validateNewSale, SalesController.create);

module.exports = SalesRoutes;

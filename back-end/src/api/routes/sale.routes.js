const { Router } = require('express');
const SalesController = require('../controllers/sales.controller');
const tokenMiddleware = require('../middlewares/token.middleware');
const schemaValidator = require('../middlewares/schemaValidator.middleware');
const { saleSchema } = require('../middlewares/schemas/sale.schema');
const { saleStatusSchema } = require('../middlewares/schemas/saleStatus.schema');

const SalesRoutes = Router();
const validateNewSale = schemaValidator(saleSchema);
const validateSaleStatus = schemaValidator(saleStatusSchema);

SalesRoutes.use(tokenMiddleware.validateToken);

SalesRoutes.get('/', SalesController.readSales);
SalesRoutes.get('/details/:id', SalesController.readSalesDetails);
SalesRoutes.post('/', validateNewSale, SalesController.create);
SalesRoutes.patch('/status/:id', validateSaleStatus, SalesController.updateStatus);

module.exports = SalesRoutes;

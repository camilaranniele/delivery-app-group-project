const { Router } = require('express');
const ProductRoutes = require('./product.route');
const UserRoutes = require('./user.routes');

const rootRouter = Router();

rootRouter.use('/users', UserRoutes);
rootRouter.use('/products', ProductRoutes);

module.exports = rootRouter; 

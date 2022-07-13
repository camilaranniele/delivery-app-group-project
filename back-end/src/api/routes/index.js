const { Router } = require('express');
const imagesRouter = require('./image.route');
const ProductRoutes = require('./product.route');
const UserRoutes = require('./user.routes');

const rootRouter = Router();

rootRouter.use('/users', UserRoutes);
rootRouter.use('/products', ProductRoutes);
rootRouter.use('/images', imagesRouter);

module.exports = rootRouter; 

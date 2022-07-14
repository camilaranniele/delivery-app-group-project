const { Router } = require('express');
const imagesRouter = require('./image.route');
const ProductRoutes = require('./product.route');
const UserRoutes = require('./user.routes');
const AdminRoutes = require('./admin.routes');
const SalesRoutes = require('./sale.routes');

const rootRouter = Router();

rootRouter.use('/users', UserRoutes);
rootRouter.use('/products', ProductRoutes);
rootRouter.use('/admin', AdminRoutes);
rootRouter.use('/images', imagesRouter);
rootRouter.use('/sales', SalesRoutes);

module.exports = rootRouter; 

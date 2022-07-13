const { Router } = require('express');
const ProductRoutes = require('./product.route');
const UserRoutes = require('./user.routes');
const AdminRoutes = require('./admin.routes');

const rootRouter = Router();

rootRouter.use('/users', UserRoutes);
rootRouter.use('/products', ProductRoutes);
rootRouter.use('/admin', AdminRoutes);

module.exports = rootRouter; 

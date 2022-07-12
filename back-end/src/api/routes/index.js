const { Router } = require('express');
const UserRoutes = require('./user.routes');

const rootRouter = Router();

rootRouter.use('/users', UserRoutes);

module.exports = rootRouter; 

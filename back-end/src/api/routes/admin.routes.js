const { Router } = require('express');

const UserController = require('../controllers/user.controller');
const UserMiddleware = require('../middlewares/user.middleware');
const TokenMiddleware = require('../middlewares/token.middleware');
const { userSchema } = require('../middlewares/schemas/user.schema');

const adminRouter = Router();

adminRouter.post('/register',
  (req, res, next) => TokenMiddleware.validateToken(req, res, next),
  (req, res, next) => UserMiddleware.userValidation(req, res, next, userSchema),
  UserController.createUserByAdmin);

module.exports = adminRouter;

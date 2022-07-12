const express = require('express');

const UserController = require('../controllers/user.controller');
const UserMiddleware = require('../middlewares/user.middleware');
const { userSchema } = require('../middlewares/schemas/user.schema');

const routes = express.Router();

routes.post('/register', (req, res, next) => UserMiddleware.userValidation(req, res, next, userSchema), UserController.createUser);

module.exports = routes;

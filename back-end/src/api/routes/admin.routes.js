const { Router } = require('express');

const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/register', UserController.createUserByAdmin);

module.exports = userRouter;

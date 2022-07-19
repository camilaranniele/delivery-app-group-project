const { Router } = require('express');

const UserController = require('../controllers/user.controller');
const UserMiddleware = require('../middlewares/user.middleware');
const { userSchema } = require('../middlewares/schemas/user.schema');
const userLoginValidation = require('../middlewares/userLogin.middleware');

const userRouter = Router();

userRouter.post('/register', 
(req, res, next) => UserMiddleware.userValidation(req, res, next, userSchema),
 UserController.createUser);
userRouter.post('/login', userLoginValidation, UserController.login);
userRouter.get('/', UserController.getUsers);
userRouter.delete('/:id', UserController.deleteUser);

module.exports = userRouter;

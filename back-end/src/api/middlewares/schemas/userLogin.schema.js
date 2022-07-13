const Joi = require('joi');

const UserLoginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  UserLoginSchema,
};

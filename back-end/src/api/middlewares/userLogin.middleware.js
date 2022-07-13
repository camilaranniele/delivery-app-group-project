const { UserLoginSchema } = require('./schemas/userLogin.schema');

const userLoginValidation = (req, res, next) => {
  const { error } = UserLoginSchema.validate(req.body);
  if (error) {
    return res.status(401).json({ message: error.details[0].message });
  }
  next();
};

module.exports = userLoginValidation;

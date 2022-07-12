const userValidation = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(401).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  userValidation,
};

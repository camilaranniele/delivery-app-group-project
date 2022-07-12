const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};

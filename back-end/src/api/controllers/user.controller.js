const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    
    if (user.error) {
      return res.status(user.code).json({ error: user.error });
    }
  
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUserByAdmin = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const newUser = await UserService.createUserByAdmin(req.body, token);
    if (newUser.error) {
      return res.status(newUser.code).json({ error: newUser.error });
    }
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const allUsers = await UserService.getUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUser(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  login,
  createUserByAdmin,
  getUsers,
  deleteUser,
};

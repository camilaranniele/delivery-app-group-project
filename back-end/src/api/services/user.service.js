const { users } = require('../../database/models');

const { hash, verify } = require('../utils/md5');

const { sign, decode } = require('../utils/jwt');

const createUser = async ({ name, email, password }) => {
  const hashedPassword = hash(password);

  const findUser = await users.findOne({ where: { email } });
  if (findUser) throw new Error('User already exists');

  const newUser = await users.create({ name, email, password: hashedPassword, role: 'customer' });

  const token = sign({ email, role: newUser.role });

  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  };
};

const login = async (email, password) => {
  const user = await users.findOne({ where: { email } });

  if (!user) {
    return { code: 404, error: '"user" not found' };
  }

  if (!verify(password, user.password)) {
    return { code: 400, error: '"email" or "password" is incorrect' };
  }

  const token = sign({ email: user.email, role: user.role });

  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
};

const createUserByAdmin = async ({ name, email, password, role }, token) => {
  const decodedToken = decode(token);

  if (decodedToken.role !== 'administrator') {
    return { code: 401, error: 'You are not administrator' };
  }

  const hashedPassword = hash(password);

  const findUser = await users.findOne({ where: { email } });

  if (findUser) {
    return { code: 409, error: 'User already exists' };
  }

  const newUser = await users.create({ name, email, password: hashedPassword, role });

  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
};

module.exports = {
  createUser,
  login,
  createUserByAdmin,
};

const { Users } = require('../../database/models');
const { hash, verify } = require('../utils/md5');
const { sign } = require('../utils/jwt');

const createUser = async ({ name, email, password }) => {
  const hashedPassword = hash(password);

  const findUser = await Users.findOne({ where: { email } });

  if (findUser) throw new Error('User already exists');

  const newUser = await Users.create({ name, email, password: hashedPassword, role: 'customer' });

  const token = sign({ email, role: newUser.role });
  
  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  };
};

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

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

module.exports = {
  createUser,
  login,
};

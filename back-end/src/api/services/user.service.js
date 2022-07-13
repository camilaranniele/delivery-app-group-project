const { users } = require('../../database/models');
const { hash } = require('../utils/md5');
const { sign } = require('../utils/jwt');

const createUser = async ({ name, email, password }) => {
  const hashedPassword = hash(password);

  const findUser = await users.findOne({ where: { email } });
  if (findUser) throw new Error('User already exists');

  const newUser = await users.create({ name, email, password: hashedPassword, role: 'customer' });
  console.log(newUser);
  const token = sign({ email, role: newUser.role });
  
  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  };
};

module.exports = {
  createUser,
};

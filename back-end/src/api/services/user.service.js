const { Users } = require('../../database/models');
const { hash } = require('../utils/md5');
const { sign } = require('../utils/jwt');

const createUser = async({ name, email, password }) => {
  const hashedPassword = hash(password);

  const findUser = await Users.findOne({ where: { email }});

  if (findUser) throw new Error('User already exists');

  const newUser = await Users.create({ name, email, password: hashedPassword, role: 'customer'});

  const token = sign({email, role: newUser.role});
  
  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  }
}

module.exports = {
  createUser,
};

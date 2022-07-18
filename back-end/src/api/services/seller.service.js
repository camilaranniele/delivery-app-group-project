const { users } = require('../../database/models');

const read = async () => users.findAll({
  where: {
    role: 'seller',
  },
  attributes: ['id', 'name'],
});

module.exports = {
  read,
};

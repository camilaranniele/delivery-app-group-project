const { sales } = require('../../database/models');

const create = async (userId, sale) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;

  const currSale = await sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  await Promise.all(products.map(async (product) => {
    const { id, quantity } = product;
    return currSale.addProduct(id, { through: { quantity } });
  }));

  return currSale.id;
};

const updateStatus = async (saleId, user, status) => {
  if (user.role === 'seller') {
    await sales.update({ status }, { where: { id: saleId, sellerId: user.id } });
  } else if (user.role === 'customer') {
    await sales.update({ status }, { where: { id: saleId, userId: user.id } });
  } else {
    throw new Error('Invalid user role');
  }
};

module.exports = {
  create,
  updateStatus,
};

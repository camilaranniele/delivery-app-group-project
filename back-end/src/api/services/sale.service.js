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

const updateStatus = async (saleId, userId, status) => {
  await sales.update({ status }, { where: { id: saleId, userId } });
};

module.exports = {
  create,
  updateStatus,
};

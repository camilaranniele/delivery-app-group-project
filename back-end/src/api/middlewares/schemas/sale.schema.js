const Joi = require('joi');

const saleSchema = Joi.object().keys({
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date(),
  status: Joi.string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue'),
  products: Joi.array().items(Joi.object().keys({
    id: Joi.number().required(),
    quantity: Joi.number().required(),
    name: Joi.string(),
  })).required(),
});

module.exports = {
  saleSchema,
};

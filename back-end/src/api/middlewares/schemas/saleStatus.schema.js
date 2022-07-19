const Joi = require('joi');

const saleStatusSchema = Joi.object().keys({
  status: Joi.string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue'),
});

module.exports = {
  saleStatusSchema,
};

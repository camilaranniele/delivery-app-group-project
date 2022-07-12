const model = require('../../database/models/products');

function checkName(req, res, next) {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (name.length < 5) { 
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    next();
  }
  
  function checkPrice(req, res, next) {
    const { price } = req.body;
    if (price === undefined) return res.status(400).json({ message: '"price" is required' });
    if (price <= 0) { 
      return res.status(422).json({ message: '"price" must be greater than or equal to 1' });
    }
    next();
  }
  
  async function checkExistName(req, res, next) {
    const { name } = req.body;
    const products = await model.getProducts();
    const returnProduct = products.some((product) => product.name === name);
      if (returnProduct) return res.status(409).json({ message: 'Product already exists' });
      next();
  }
  
  module.exports = {
    checkName,
    checkPrice,
    checkExistName,
  };
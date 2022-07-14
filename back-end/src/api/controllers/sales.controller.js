const UserService = require('../services/user.service');

const readSales = async (req, res) => {
  try {
    const { id, role } = req.user;
  
    if (role === 'administrator') {
      return res.status(401).json({ error: '"administrator" don\'t have sales' });
    }
  
    const sales = await UserService.readSales(id, role === 'seller');
    res.status(200).json(sales);
  } catch (_err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const readSalesDetails = async (req, res) => {
  try {
    const { id: userId, role } = req.user;
    const { id: saleId } = req.params;
  
    if (role === 'administrator') {
      return res.status(401).json({ error: '"administrator" don\'t have sales' });
    }
  
    const sales = await UserService.readSalesDetails(saleId, userId, role === 'seller');
    res.status(200).json(sales);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  readSales,
  readSalesDetails,
};

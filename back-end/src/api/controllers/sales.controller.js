const UserService = require('../services/user.service');
const SaleService = require('../services/sale.service');

const internalServerError = 'Internal server error';

const readSales = async (req, res) => {
  try {
    const { id, role } = req.user;
  
    if (role === 'administrator') {
      return res.status(401).json({ error: '"administrator" don\'t have sales' });
    }
  
    const sales = await UserService.readSales(id, role === 'seller');
    res.status(200).json(sales);
  } catch (_err) {
    res.status(500).json({ error: internalServerError });
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
    res.status(500).json({ error: internalServerError });
  }
};

const create = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const saleId = await SaleService.create(userId, req.body);
    res.status(201).json({ id: saleId });
  } catch (err) {
    res.status(500).json({ error: internalServerError });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { id: saleId } = req.params;
    const { status } = req.body;

    await SaleService.updateStatus(saleId, userId, status);
    
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  readSales,
  readSalesDetails,
  create,
  updateStatus,
};

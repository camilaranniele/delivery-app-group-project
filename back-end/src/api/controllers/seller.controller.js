const SellerService = require('../services/seller.service');

const read = async (req, res) => {
  try {
    const sellers = await SellerService.read();
    res.status(200).json(sellers);
  } catch (_err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  read,
};

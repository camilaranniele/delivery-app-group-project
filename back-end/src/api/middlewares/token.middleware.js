const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const validateToken = (req, res, next) => {
  const SECRET = fs.readFileSync(path.join(__dirname, '../../../jwt.evaluation.key'),
    { encoding: 'utf8' });

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  let isInvalidOrExpired = false;
  jwt.verify(token, SECRET, (err) => {
    if (err) isInvalidOrExpired = true;
  });
  if (isInvalidOrExpired) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};

module.exports = { validateToken };

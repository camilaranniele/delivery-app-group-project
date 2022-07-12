const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const secret = fs.readFileSync(path.join(__dirname, '../../../jwt.evaluation.key'),
{ encoding: 'utf8' });

const sign = (payload) => jwt.sign(payload, secret, { expiresIn: '15d', algorithm: 'HS256' });

const decode = (token) => jwt.verify(token, secret);

module.exports = {
  sign,
  decode,
};

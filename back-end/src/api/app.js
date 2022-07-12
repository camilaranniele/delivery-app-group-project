const express = require('express');

const ProductRoutes = require('/.routes/products.routes');

const cors = require(cors);

const app = express();


app.get('/coffee', (_req, res) => res.status(418).end());
app.use(ProductRoutes);

module.exports = app;

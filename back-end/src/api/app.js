const express = require('express');

const rootRouter = require('./routes');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(rootRouter);

module.exports = app;

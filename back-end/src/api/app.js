const express = require('express');
const cors = require('cors');

const rootRouter = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(rootRouter);

module.exports = app;

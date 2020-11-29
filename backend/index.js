const express = require('express');
const cors = require('cors');

const dates = require('./demo-responses/dates.json');
const log20201125 = require('./demo-responses/2020-11-25.json');
const log20201126 = require('./demo-responses/2020-11-26.json');
const log20201127 = require('./demo-responses/2020-11-27.json');

const app = express();
const port = 4201;

app.use(cors());

app.get('/', (req, res) => res.send('Logs API'));
app.get('/dates', (req, res) => res.send(dates));
app.get('/logs/2020-11-25', (req, res) => res.send(log20201125));
app.get('/logs/2020-11-26', (req, res) => res.send(log20201126));
app.get('/logs/2020-11-27', (req, res) => res.send(log20201127));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

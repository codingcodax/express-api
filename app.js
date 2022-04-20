const express = require('express');

const app = express();
const port = 3000;

app.get('/v1/explorers', (_req, res) => {
  console.log(`Api Explorers GET ALL requests ${new Date()}`);

  const explorer1 = { id: 1, name: 'Jhon Doe' };
  const explorer2 = { id: 2, name: 'Jimmy Choo' };
  const explorer3 = { id: 3, name: 'Alexis Guzman' };
  const explorer4 = { id: 4, name: 'German Roblez' };
  const explorer5 = { id: 5, name: 'Diego Ortiz' };
  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5];

  res.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`Api Explorers GET request ${new Date()}`);
  console.log(`Getting explorer with id ${req.params.id}`);
  const explorer = { id: 1, name: 'Diego Ortiz' };

  res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
  console.log(`Api Explorers POST request ${new Date()}`);

  const requestBody = req.body;

  res.status(201).json({ message: 'Created', data: requestBody });
});

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`Api Explorers POST request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);
  const requestBody = req.body;

  res.status(200).json({ message: 'Updated', date: requestBody });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

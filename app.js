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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

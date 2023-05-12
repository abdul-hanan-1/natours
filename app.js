const express = require('express');

const app = express();
const port = '3000';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
});

app.listen(port, () => {
  console.log('App running on port 3000');
});

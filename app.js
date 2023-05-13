const express = require('express');

const app = express();
const port = '3000';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can send post request to this url.');
});

app.listen(port, () => {
  console.log('App running on port 3000');
});

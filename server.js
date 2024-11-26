const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
  res.send('Hello Namma')
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
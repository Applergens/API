// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Server instance
const app = express();

// Global variables
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// ENDPOINTS START
app.get('/', (req, res) => {
  res.send('API working successful!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
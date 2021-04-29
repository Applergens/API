// Imports
const express = require('express')

// Server instance
const app = express()

// Global variables
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API working successful!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
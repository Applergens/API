// Imports
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const { Db } = require('mongodb')
const CryptoJS = require('crypto-js')

// Server instance
const app = express()

// Global variables
const port = process.env.PORT || 5000
const mongoURL = 'mongodb+srv://admin:admin@cluster0.hub2f.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = 'Applergens'

app.get('/', (req, res) => {
  res.send('API working successful!')
})

app.get('/login', (req, res) => {
  
  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').find({}).toArray(function(err, result) {

      if (err) throw err

      if (result != null) {

          res.send(result)

      } else {

        res.send('Users not found')

      }

      client.close()

    });

  });

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Imports
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const { Db } = require('mongodb')
const CryptoJS = require('crypto-js')
const bodyParser = require('body-parser')
const cors = require('cors');

// Server instance
const app = express()

// Global variables
const port = process.env.PORT || 5000
const mongoURL = 'mongodb+srv://admin:admin@cluster0.hub2f.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = 'Applergens'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// ENDPOINTS START
app.get('/', (req, res) => {

  res.send('API working successful!')

})

app.post('/login', (req, res) => {

  userData = req.body.user
  userData.password = CryptoJS.SHA256(userData.password).toString(CryptoJS.enc.Hex)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userData.email, password: userData.password}, function(err, user) {

      if (err) throw err

      if (user != null) {

          res.send(user)

      } else {

          res.send('Invalid credentials')

      }

      client.close()

    });

  });

});

app.post('/register', (req, res) => {

  userData = req.body.user

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userData.email}, function(err, user) {

      if (err) throw err

      if (user != null) {

        res.send('There is an user registered already')

      } else {

        userData.password = CryptoJS.SHA256(userData.password).toString(CryptoJS.enc.Hex)

        db.collection('Users').insertOne(userData, function(err) {
  
          if (err) throw err
  
          res.send('User registered successfully')
  
          client.close()
  
        });

      }

    });  

  });

});



app.listen(port, () => {

  console.log(`API listening at http://localhost:${port}`)

});
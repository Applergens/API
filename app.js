// Imports
const express = require('express')
const { Db } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const CryptoJS = require('crypto-js')
const bodyParser = require('body-parser')
const cors = require('cors');

// Server instance
const app = express();

// Global variables
const port = process.env.PORT || 5000
const mongoURL = 'mongodb+srv://admin:admin@cluster0.hub2f.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = 'Applergens'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, access-token, Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// ENDPOINTS START
app.get('/', (req, res) => {

  res.send('API working successful!')

})

// LOGIN

// Login - User

app.post('/login/user', (req, res) => {

  userData = req.body.user
  userData.password = CryptoJS.SHA256(userData.password).toString(CryptoJS.enc.Hex)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userData.email, password: userData.password}, function(err, user) {

      if (err) throw err

      if (user != null) {

        res.status(200).send(user)

      } else {

        res.status(400).send('Invalid credentials')

      }

      client.close()

    });

  });

});

// Login - Restaurant

app.post('/login/restaurant', (req, res) => {

  restaurantData = req.body.restaurant
  restaurantData.password = CryptoJS.SHA256(restaurantData.password).toString(CryptoJS.enc.Hex)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: restaurantData.code, password: restaurantData.password} , {projection:{_id:0}}, function(err, restaurant) {

      if (err) throw err

      if (restaurant != null) {

        res.status(200).send(restaurant)

      } else {

        res.status(400).send('Invalid credentials')

      }

      client.close()

    });

  });

});

// REGISTER USER

// Register - User

app.post('/register/user', (req, res) => {

  userData = req.body.user

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userData.email}, function(err, user) {

      if (err) throw err

      if (user != null) {

        res.status(400).send('There is an user registered already')

      } else {

        userData.password = CryptoJS.SHA256(userData.password).toString(CryptoJS.enc.Hex)

        db.collection('Users').insertOne(userData, function(err) {
  
          if (err) throw err
          
          res.status(200).send('User registered successfully')
  
          client.close()
  
        });

      }

    });  

  });

});

// CRUD USERS

// GetByEmail

app.get('/users/getByEmail', (req, res) => {

  userEmail = req.query.email

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userEmail},{projection:{password:0, dni:0}}, function(err, user) {

      if (err) throw err

      if (user != null) {

        res.status(200).send(user)

      } else {

        res.status(404).send('User not found')

      }

    });

  });
  
});

// CRUD RESTAURANTS

// Get by code

app.get('/restaurants/getByCode', (req, res) => {

  restaurantCode = req.query.code

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: restaurantCode},{projection:{password:0}}, function(err, restaurant) {

      if (err) throw err
  
      if (restaurant != null) {
  
        res.status(200).send(restaurant)
  
      } else {

        res.status(404).send("There is no restaurant with that code")
  
      }
  
    });

  });

});

app.listen(port, () => {

  console.log(`API listening at http://localhost:${port}`)

});
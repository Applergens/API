// Imports
const express = require('express')
const { Db } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require("mongodb").ObjectID;
const CryptoJS = require('crypto-js')
const bodyParser = require('body-parser')
const cors = require('cors')

// Server instance
const app = express()

// Global variables
const port = process.env.PORT || 5000
const mongoURL = 'mongodb+srv://admin:admin@cluster0.hub2f.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = 'Applergens'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, access-token, Access-Control-Allow-Origin')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()

});

// ENDPOINTS START
app.get('/', (req, res) => {

  res.send('API working successfully!')

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

    db.collection('Restaurants').findOne({code: restaurantData.code, password: restaurantData.password} , function(err, restaurant) {

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

  userData.favourites = []
  userData.allergies = []

  console.log(userData)

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

// Register - Restaurant

app.post('/register/restaurant', (req, res) => {

  restaurantData = req.body.restaurant

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').find().toArray(function(err, rest) {

      if (err) throw err

      restaurantData.code = rest[rest.length-1].code + 1

    });

    db.collection('Restaurants').insertOne(restaurantData, function(err) {
  
      if (err) throw err
          
      res.status(200).send('Restaurant registered successfully')
  
      client.close()
  
    });

  });

});

// CRUD USERS

// Change Password

app.post('/users/changePassword', (req, res) => {

  userEmail = req.body.email
  password1 = CryptoJS.SHA256(req.body.password1).toString(CryptoJS.enc.Hex)
  password2 = CryptoJS.SHA256(req.body.password2).toString(CryptoJS.enc.Hex)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userEmail, password: password1},{projection: {_id: 0, password: 1} }, function(err, user) {

      if (err) throw err

      if (user != null) {

        if (user.password == password1) {
          
          db.collection('Users').updateOne({email: userEmail}, { $set: {password: password2} }, function(err) {

            if (err) throw err

            res.status(200).send("Password changed")

          });

        }

      } else {

        res.status(404).send('Invalid credentials')

      }

    });

  });
  
});

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

// Add or remove restaurant to favourites list
app.post('/user/setFavourite', (req, res) => {

  userEmail = req.body.email,
  restaurantId = req.body.restaurantId

  //Checking if its already on the list or not

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userEmail},{projection:{favourites:1}}, function(err, user) {

      if (err) throw err

      if (user != null) {

        newFavourites = user.favourites

        found = false

        if(newFavourites != null){

          for (i = 0; i < newFavourites.length; i++) {
          
            if (newFavourites[i] == restaurantId) {
  
              found = true
  
              newFavourites.splice(i, 1)
  
              break
  
            }
            
          }
        } else {
          newFavourites = [];
        }

        if (!found) {

          newFavourites.push(ObjectId(restaurantId))

        }

        db.collection('Users').updateOne({email: userEmail}, { $set: {favourites: newFavourites} }, function(err) {

          if (err) throw err
    
          res.status(200).send(newFavourites)
    
        });

      } else {

        res.status(404).send('User not found')

      }

    });    

  });

});

// Add or remove allergens
app.post('/user/setAllergens', (req, res) => {

  userEmail = req.body.email
  allergensList = req.body.allergens
  allergensListId = []

  for (i = 0; i < allergensList.length; i++) {

    allergensListId.push(ObjectId(allergensList[i]))

  }


  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Users').findOne({email: userEmail},function(err, user) {

      if (err) throw err

      if (user != null) {

        db.collection('Users').updateOne({email: userEmail}, { $set: {allergies: allergensListId} }, function(err) {

          if (err) throw err
   
          res.status(200).send(allergensListId)
   
        });

      } else {

        res.status(404).send('User not found')

      }

    });    

  });

});

// CRUD RESTAURANTS

// Get by code

app.post('/restaurants/getById', (req, res) => {

  restaurantIds = req.body.favourites

  objectsIdList = []

  for (i = 0; i < restaurantIds.length; i++) {

    objectsIdList.push(ObjectId(restaurantIds[i]))
    
  }
  
  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').find({"_id" : {"$in" : objectsIdList}}).toArray(function(err, favourites) {

      if (err) throw err

      if (favourites != null) {

        res.status(200).send(favourites)

      }

    });

  });

});

// Get by code

app.get('/restaurants/getByCode', (req, res) => {

  restaurantCode = req.query.code

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: parseInt(restaurantCode, 10)},{projection:{password:0}}, function(err, restaurant) {

      if (err) throw err
  
      if (restaurant != null) {
  
        res.status(200).send(restaurant)
  
      } else {

        res.status(404).send("There is no restaurant with that code")
  
      }
  
    });

  });

});

app.post('/restaurants/getByListId', (req, res) => {

  restaurantId = req.body.favourites

  objectsIdList = []

  for (i = 0; i < restaurantId.length; i++) {

    objectsIdList.push(ObjectId(restaurantId[i]))

  }

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').find({"_id" : {"$in" : objectsIdList}}, {projection: {password:0} }).toArray(function(err, favourites) {

      if (err) throw err

      if (favourites != null) {

        res.status(200).send(favourites)

      }

    });

  });

});

// Update Restaurant Info

app.post('/restaurants/updateData', (req, res) => {

  restaurantCode = req.body.code
  newPassword = req.body.password
  newPhone = req.body.phone
  newAddress = req.body.address

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').updateOne({code: restaurantCode}, { $set: {password: newPassword, phone: newPhone, address: newAddress} }, function(err) {

      if (err) throw err

      res.status(200).send("Restaurant updated successfully!")

    });

  });

});

// Create Dish

app.post('/restaurants/createDish', (req, res) => {

  restaurantCode = req.body.code
  newDish = req.body.dish

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: restaurantCode},{projection:{dishes: 1}}, function(err, restData) {

      if (err) throw err

      if (restData != null) {

        newDishes = restData.dishes

        for (i = 0; i < newDishes.length; i++) {

          if (newDishes[i].name == newDish.name) {

            res.status(400).send("There is already a dish with that name.")

            return

          }
          
        }

        newDishes.push(newDish)

        db.collection('Restaurants').updateOne({code: restaurantCode}, { $set: {dishes: newDishes} }, function(err) {

          if (err) throw err
    
          res.status(200).send("Dish added successfully!")
    
        });
       
      } else {

        res.status(400).send("Error finding the restaurant.")

      }

    });   

  });

});

// Delete Dish

app.post('/restaurants/deleteDish', (req, res) => {

  restaurantCode = req.body.code
  dishName = req.body.name

   g('Dish name = ' + dishName)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: restaurantCode},{projection:{dishes: 1}}, function(err, restData) {

      if (err) throw err

      if (restData != null) {

        found = false

        newDishes = restData.dishes

        for (i = 0; i < newDishes.length; i++) {

           g(newDishes[i].name)

          if (newDishes[i].name == dishName) {

            newDishes.splice(i,1)

            found = true

            break

          }
          
        }

        if (found) {

          db.collection('Restaurants').updateOne({code: restaurantCode}, { $set: {dishes: newDishes} }, function(err) {

            if (err) throw err
      
            res.status(200).send("Dish removed successfully!")
      
          });

        } else {

          res.status(400).send('Dish not found')

        }

      }

    });

    

  });

});

// Update dish

app.post('/restaurants/updateDish', (req, res) => {

  restaurantCode = req.body.code
  newDish = req.body.dish
  oldDishName = req.body.oldName

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Restaurants').findOne({code: restaurantCode},{projection:{dishes: 1}}, function(err, restData) {

      if (err) throw err

      if (restData != null) {

        newDishes = restData.dishes

        for (i = 0; i < newDishes.length; i++) {

          if (newDishes[i].name == oldDishName) {

            newDishes[i] = newDish

          }
          
        }

        db.collection('Restaurants').updateOne({code: restaurantCode}, { $set: {dishes: newDishes} }, function(err) {

          if (err) throw err
    
          res.status(200).send("Dish updated successfully!")
    
        });
       
      } else {

        res.status(400).send("Error finding the restaurant.")

      }

    });   

  });

});

// CRUD INGREDIENTS

// GetAll 

app.get('/ingredients/getAll', (req, res) => {

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Ingredients').find().toArray((err, ingredients) => {

      if (err) throw err
  
      if (ingredients != null) {
  
        res.status(200).send(ingredients)
  
      } else {

        res.status(404).send("Collection ingredients is empty!")
  
      }
    });

  });

});

// Get by ID

app.get('/ingredients/getById', (req, res) => {

  ingredientId = ObjectId(req.query.id)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Ingredients').findOne({_id: ingredientId}, function(err, ingredient) {

      if (err) throw err
  
      if (ingredient != null) {
  
        res.status(200).send(ingredient)
  
      } else {

        res.status(404).send("There is no ingredient with that ID")
  
      }
  
    });

  });

});

// Get all by id list

app.post('/ingredients/getByListId', (req, res) => {

  ingredientsId = req.body.ingredients

  objectsIdList = []

  for (i = 0; i < ingredientsId.length; i++) {

    objectsIdList.push(ObjectId(ingredientsId[i]))
    
  }

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Ingredients').find({"_id" : {"$in" : objectsIdList}}).toArray(function(err, ingredients) {

        if (err) throw err

        if (ingredients != null) {

          res.status(200).send(ingredients)

        }

      });
      
    });

});

// CRUD Allergens

// GetAll 

app.get('/allergens/getAll', (req, res) => {

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Allergens').find({}).toArray((err, allergens) => {

      if (err) throw err
  
      if (allergens != null) {
  
        res.status(200).send(allergens)
  
      } else {

        res.status(404).send("Collection allergens is empty!")
  
      }
    });

  });

});

// Get by ID

app.get('/allergens/getById', (req, res) => {

  allergenId = ObjectId(req.query.id)

  MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {

    if (err) throw err

    const db = client.db(mongoDB)

    db.collection('Allergens').findOne({_id: allergenId}, function(err, allergen) {

      if (err) throw err
  
      if (allergen != null) {
  
        res.status(200).send(allergen)
  
      } else {

        res.status(404).send("There is no allergen with that ID")
  
      }
  
    });

  });

});


app.listen(port, () => {

  console.log(`API listening at http://localhost:${port}`)

});



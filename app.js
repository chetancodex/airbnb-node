//Imports 
const express = require('express');
const cors = require('cors');
const db = require('./config/dbindex');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

// Routes 
const UserRoutes = require('./routes/userroutes');
const PlacesRoutes = require('./routes/placesroute');

// App using
app.use(cors());
app.use(bodyParser.json());


//Using APP routes
app.use('/user',UserRoutes);
app.use('/place',PlacesRoutes);





// Database connectivity
db.sequelize
  .sync()
  .then(() => {
    console.log("db sync to airbnb");
  })
  .catch((err) => {
    console.log("Failed to sync: " + err.message);
  });


module.exports = app;
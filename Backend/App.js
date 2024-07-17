const express = require("express");
const dotenv = require("dotenv");
// configuration of dotenv
dotenv.config();

// Initiating PORT
const PORT = process.env.PORT || 4000;

//initiating app
const app = express();
app.use(express.json());

// importing routes
const authRoute = require('./routes/auth');
const homeRoute = require('./routes/homepage');
const locationRoute = require('./routes/getlocation');
const propertiesRoute = require('./routes/properties');
const profileRoute = require('./routes/profile');

// using routes
app.use('/',authRoute);
app.use('/',homeRoute);
app.use('/',locationRoute);
app.use('/',propertiesRoute);
app.use('/',profileRoute);

// Listening
app.listen(PORT, "localhost", () => {
  console.log(`Server listening on PORT ${PORT}`);
});

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

// using routes
app.use('/auth',authRoute);
app.use('/',homeRoute);
app.use('/',locationRoute);

// Listening
app.listen(PORT, "localhost", () => {
  console.log(`Server listening on PORT ${PORT}`);
});

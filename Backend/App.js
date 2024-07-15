const express = require("express");
const dotenv = require("dotenv");
// configuration of dotenv
dotenv.config();

// Initiating PORT
const PORT = process.env.PORT || 4000;

//initiating app
const app = express();
app.use(express.json());

// Listening
app.listen(PORT, "localhost", () => {
  console.log(`Server listening on PORT ${PORT}`);
});

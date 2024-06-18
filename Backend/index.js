const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");

app.use(bodyParser.json());

db.sequelize.sync().then((req) => {
  app.listen(3000, "localhost", () => {
    console.log(`Server started on port 3000`);
  });
});

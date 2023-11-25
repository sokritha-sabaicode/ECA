const express = require("express");

const app = express();

// Global Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Reqest: ", req.method);
  next();
});

// Global API
require("./route")(app);

module.exports = app;

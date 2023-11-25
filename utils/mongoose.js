const mongoose = require("mongoose");
const config = require("../config");

const dbconnect = () => {
  mongoose.connect(config.MONGO_DB_URL).then(() => console.log("Connected!"));
};

module.exports = dbconnect;

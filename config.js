require("dotenv").config();

const config = {
  MONGO_DB_URL: process.env.MONGO_DB,
};

module.exports = config;

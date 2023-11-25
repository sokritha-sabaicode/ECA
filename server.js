const app = require("./app");
const dbconnect = require("./utils/mongoose");

dbconnect();

app.listen(8000, () => {
  console.log("server is running on port: ", 8000);
});

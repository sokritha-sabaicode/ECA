const productRouter = require("./../src/product/route");

module.exports = (app) => {
  app.use("/api/v1/product", productRouter);
};

const createNewProductService = require("../service/createNewProduct");

module.exports = (req, res, next) => {
  const products = req.data;
  const body = req.body;

  const newProduct = createNewProductService(body, products);

  products.push(newProduct);

  res.status(201).json({
    status: "success",
    data: products,
  });
};

function getAllProducts(req, res, next) {
  const products = req.data;
  
  res.status(200).json({
    status: "success",
    data: products,
  });
}

module.exports = getAllProducts;

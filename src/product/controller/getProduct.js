module.exports = (req, res, next) => {
  const products = req.data;
  const params = req.params;

  const productExist = products.filter(
    (product) => product.id === params.id * 1
  );

  if (productExist.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: `Product with id ${params.id} not exist`,
    });
  }

  res.status(200).json({
    status: "success",
    data: productExist[0],
  });
};

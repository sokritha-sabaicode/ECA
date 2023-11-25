module.exports = (body, products) => {
  const productId = products.length + 1;
  const newProduct = Object.assign({ id: productId }, body);

  return newProduct;
};

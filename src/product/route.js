const express = require("express");
const productController = require("./controller");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "apple",
  },
];

const dbMiddleware = (req, res, next) => {
  req.data = products;
  next();
};

// Get All Products
router.get("/", dbMiddleware, productController.getAllProducts);

// Get Single Product
router.get("/:id", dbMiddleware, productController.getProduct);

// Create new Product
router.post("/", dbMiddleware, productController.createNewProduct);

module.exports = router;

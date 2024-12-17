const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");

router.post("/products", productController.create);
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);

module.exports = router;

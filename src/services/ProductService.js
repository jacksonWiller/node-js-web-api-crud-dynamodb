const Product = require("../models/Product");
const productRepository = require("../repositories/ProductRepository");

class ProductService {
  createProduct(productData) {
    const product = new Product(
      null,
      productData.name,
      productData.price,
      productData.description
    );

    return productRepository.create(product);
  }

  getAllProducts() {
    return productRepository.findAll();
  }

  getProductById(id) {
    return productRepository.findById(Number(id));
  }
}

module.exports = new ProductService();

const Product = require("../models/Product");
const productRepository = require("../repositories/ProductRepository");

class ProductService {
  async createProduct(productData) {
    const product = new Product(null, productData.name, productData.price);
    return productRepository.create(product);
  }

  async getAllProducts() {
    return productRepository.getAll();
  }

  async getProductById(id) {
    return productRepository.findById(id);
  }
}

module.exports = new ProductService();

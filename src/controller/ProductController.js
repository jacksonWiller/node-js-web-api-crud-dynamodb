const productService = require("../services/ProductService");

class ProductController {
  async create(req, res) {
    try {
      console.log(req.body);
      const product = await productService.createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await productService.getAllProducts();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();

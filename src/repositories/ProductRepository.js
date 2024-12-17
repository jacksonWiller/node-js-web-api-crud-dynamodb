class ProductRepository {
  constructor() {
    this.products = [];
  }

  create(product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findById(id) {
    return this.products.find((product) => product.id === id);
  }
}

module.exports = new ProductRepository();

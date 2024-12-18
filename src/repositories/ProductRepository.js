const {
  PutCommand,
  ScanCommand,
  GetCommand,
} = require("@aws-sdk/lib-dynamodb");
const docClient = require("../config/dynamodb");

class ProductRepository {
  constructor() {
    this.products = [];
  }

  async create(product) {
    const command = new PutCommand({
      TableName: this.tableName,
      Item: {
        id: Date.now().toString(),
        name: product.name,
        price: product.price,
        createdAt: new Date().toISOString(),
      },
    });

    await docClient.send(command);
    return product;
  }

  async findAll() {
    const command = new ScanCommand({
      TableName: this.tableName,
    });

    const response = await docClient.send(command);
    return response.Items;
  }

  async findById(id) {
    const command = new GetCommand({
      TableName: this.tableName,
      Key: { id: id.toString() },
    });

    const response = await docClient.send(command);
    return response.Item;
  }
}

module.exports = new ProductRepository();

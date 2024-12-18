const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  endpoint: "http://localhost:4566",
  region: "us-east-1",
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
});

const docClient = DynamoDBDocumentClient.from(client);

class ProductRepository {
  constructor() {
    this.tableName = "Products";
  }

  async create(product) {
    const command = new PutCommand({
      TableName: "Products",
      Item: {
        id: Date.now().toString(),
        name: product.name,
        price: product.price,
        description: product.description,
        createdAt: new Date().toISOString(),
      },
    });

    try {
      const result = await docClient.send(command);
      return result;
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  }

  async getAll() {
    const command = new ScanCommand({
      TableName: this.tableName,
    });

    const response = await docClient.send(command);
    return response.Items;
  }

  async getById(id) {
    const command = new GetCommand({
      TableName: this.tableName,
      Key: { id: id.toString() },
    });

    const response = await docClient.send(command);
    return response.Item;
  }
}

module.exports = new ProductRepository();

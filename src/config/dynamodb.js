const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  endpoint: "http://localhost:4566", // LocalStack endpoint
  region: "us-east-1", // região padrão
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
  forcePathStyle: true,
});

const docClient = DynamoDBDocumentClient.from(client);

module.exports = docClient;

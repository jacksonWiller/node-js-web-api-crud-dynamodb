const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  region: "sua-região",
  credentials: {
    accessKeyId: "sua-access-key",
    secretAccessKey: "sua-secret-key",
  },
});

const docClient = DynamoDBDocumentClient.from(client);

module.exports = docClient;

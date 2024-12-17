Collecting workspace information

Para adicionar o DynamoDB à sua aplicação Node.js, vou guiar você através do processo passo a passo:

1. Primeiro, instale o SDK da AWS:

```sh
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
```

2. Crie um arquivo de configuração para o DynamoDB em `src/config/dynamodb.js`:

```javascript
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
```

3. Modifique o

ProductRepository

para usar DynamoDB:

```javascript
const {
  PutCommand,
  ScanCommand,
  GetCommand,
} = require("@aws-sdk/lib-dynamodb");
const docClient = require("../config/dynamodb");

class ProductRepository {
  constructor() {
    this.tableName = "Products";
  }

  async create(product) {
    const command = new PutCommand({
      TableName: this.tableName,
      Item: {
        id: Date.now().toString(), // Usar timestamp como ID
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
```

4. Crie a tabela no DynamoDB usando o AWS CLI ou console:

```sh
aws dynamodb create-table \
  --table-name Products \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

5. Crie um arquivo `.env` na raiz do projeto:

```sh
AWS_REGION=sua-região
AWS_ACCESS_KEY_ID=sua-access-key
AWS_SECRET_ACCESS_KEY=sua-secret-key
DYNAMODB_TABLE_NAME=Products
```

6. Instale e configure o dotenv:

```sh
npm install dotenv
```

7. Atualize o

server.js

para carregar as variáveis de ambiente:

```javascript
require("dotenv").config();
const express = require("express");
// ... resto do código
```

Principais alterações:

- Substituição do array em memória por operações no DynamoDB
- Uso de credenciais AWS seguras via variáveis de ambiente
- Manipulação assíncrona das operações do banco de dados
- IDs únicos gerados com timestamp

Lembre-se de:

- Nunca commitar credenciais AWS no controle de versão
- Configurar permissões IAM adequadas
- Tratar erros específicos do DynamoDB
- Considerar índices secundários para consultas mais complexas

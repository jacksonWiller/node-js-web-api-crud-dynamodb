Collecting workspace information

Vou ajudar você a estruturar uma aplicação em camadas para cadastro de produtos usando boas práticas do Node.js.

### Estrutura de Pastas Sugerida

```
src/
  ├── controllers/
  │   └── ProductController.js
  ├── models/
  │   └── Product.js
  ├── repositories/
  │   └── ProductRepository.js
  ├── services/
  │   └── ProductService.js
  ├── routes/
  │   └── productRoutes.js
  └── server.js
```

### Implementação

1. **Model (src/models/Product.js)**

```javascript
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.createdAt = new Date();
  }
}

module.exports = Product;
```

2. **Repository (src/repositories/ProductRepository.js)**

```javascript
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
```

3. **Service (src/services/ProductService.js)**

```javascript
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
```

4. **Controller (src/controllers/ProductController.js)**

```javascript
const productService = require("../services/ProductService");

class ProductController {
  async create(req, res) {
    try {
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
```

5. **Routes (src/routes/productRoutes.js)**

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.post("/products", productController.create);
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);

module.exports = router;
```

6. **Server (src/server.js)**

```javascript
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### Explicação das Camadas:

- **Models**: Define a estrutura dos dados
- **Repositories**: Responsável pelo acesso aos dados
- **Services**: Contém a lógica de negócios
- **Controllers**: Gerencia as requisições e respostas
- **Routes**: Define os endpoints da API

### Uso da API:

```sh
# Criar um produto
POST http://localhost:3000/api/products
{
  "name": "Produto Teste",
  "price": 99.99,
  "description": "Descrição do produto"
}

# Listar produtos
GET http://localhost:3000/api/products

# Buscar produto por ID
GET http://localhost:3000/api/products/1
```

Esta estrutura segue princípios importantes como:

- Separação de Responsabilidades (SRP)
- Inversão de Dependência (DIP)
- Princípio da Responsabilidade Única
- Código limpo e organizado
- Facilidade de manutenção e teste

Para melhorar ainda mais, você pode:

1. Adicionar validações
2. Implementar tratamento de erros global
3. Adicionar um banco de dados real
4. Implementar testes unitários
5. Adicionar documentação com Swagger
6. Implementar autenticação e autorização

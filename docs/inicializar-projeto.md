# Plano para criar uma Web API em Node.js

1. Inicializar projeto Node.js
2. Instalar dependências (Express, Cors)
3. Criar estrutura básica de pastas
4. Configurar servidor Express
5. Criar rotas básicas

### Passo a passo da implementação:

```bash
mkdir minha-api
cd minha-api
npm init -y
npm install express cors
```

```javascript
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rota de exemplo
app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando!" });
});

// Rota com parâmetros
app.get("/usuarios/:id", (req, res) => {
  res.json({
    id: req.params.id,
    nome: "Usuário Exemplo",
  });
});

// Rota POST
app.post("/usuarios", (req, res) => {
  const dadosUsuario = req.body;
  res.status(201).json({
    mensagem: "Usuário criado com sucesso",
    usuario: dadosUsuario,
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

```json
{
  "name": "minha-api",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

Para executar:

```bash
npm start
```

Esta é uma API básica com:

- Servidor Express configurado
- CORS habilitado
- Rotas GET e POST
- Processamento de JSON
- Endpoints de exemplo

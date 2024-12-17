# Explicação da diferença entre NPX e NPM

### NPM (Node Package Manager)

- Gerenciador de pacotes do Node.js
- Instala dependências listadas no

package.json

- Executa scripts definidos no

package.json

- Usa pacotes instalados globalmente ou localmente no projeto

### NPX (Node Package Execute)

- Executa pacotes sem necessidade de instalação
- Ideal para comandos únicos/temporários
- Executa binários de pacotes da node_modules
- Baixa temporariamente ferramentas CLI

### Exemplo prático:

1. **Com NPM** - precisa instalar globalmente:

```bash
npm install -g eslint
eslint --init
```

2. **Com NPX** - executa diretamente:

```bash
npx eslint --init
```

### Quando usar cada um:

- **Use NPX quando**:

  - Precisar executar um comando único (como eslint --init)
  - Quiser testar uma ferramenta sem instalar
  - Executar geradores (create-react-app, etc)

- **Use NPM quando**:
  - Instalar dependências do projeto
  - Executar scripts do

package.json

- Gerenciar pacotes do projeto

No caso do `eslint --init`, usamos NPX porque é um comando que só precisa ser executado uma vez na configuração do projeto.

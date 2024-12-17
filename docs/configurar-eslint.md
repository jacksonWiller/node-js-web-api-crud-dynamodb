# Plano para configurar ESLint

1. Instalar dependências necessárias
2. Inicializar ESLint
3. Configurar regras básicas

### 1. Instalar ESLint como dependência de desenvolvimento

```bash
npm install eslint --save-dev
```

### 2. Inicializar ESLint (execute no terminal)

```bash
npx eslint --init
```

Responda às perguntas:

- How would you like to use ESLint?
  → To check syntax, find problems, and enforce code style
- What type of modules does your project use?
  → CommonJS (require/exports)
- Which framework does your project use?
  → None of these
- Does your project use TypeScript?
  → No
- Where does your code run?
  → Node
- What format do you want your config file to be in?
  → JSON

### 3. Criar arquivo de configuração ESLint

```javascript


json
{
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

### 4. Atualizar

package.json

com script de lint

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "lint": "eslint . --ext .js",
    "lint:fix": "eslint . --ext .js --fix"
  }
}
```

Agora você pode executar:

```bash
npm run lint
```

Similar code found with 1 license type

1. Remover configurações React (não necessárias)
2. Adicionar regras específicas para Node.js
3. Configurar regras de estilo de código

```javascript
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "off",
      "comma-dangle": ["error", "never"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];
```

Similar code found with 1 license type

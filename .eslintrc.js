// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser do TypeScript
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Regras recomendadas do TypeScript
    'plugin:react/recommended', // Regras para React
    'plugin:react-hooks/recommended', // Regras para hooks
    'plugin:prettier/recommended', // Integração com Prettier, se usar
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2021, // Suporte para sintaxe moderna
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Habilitar JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'], // Apenas um warning para variáveis não usadas
    'react/react-in-jsx-scope': 'off', // Desnecessário em novos projetos React
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ], // Erros para inconsistências de estilo, se usar Prettier
  },
};

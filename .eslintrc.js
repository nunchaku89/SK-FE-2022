module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: 'react',
    ReactDOM: 'react-dom',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
  },
};

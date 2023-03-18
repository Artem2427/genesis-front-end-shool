module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['vite.config.ts'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['off'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [0, { extensions: ['*.test{.ts,.tsx}'] }],
  },
};

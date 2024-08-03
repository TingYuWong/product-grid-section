module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: 'tsconfig.app.json',
      },
    },
  },
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'simple-import-sort', 'import', 'react', 'promise', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/extensions': 'off',
    'import/order': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'promise/always-return': ['error', { ignoreLastCallback: true }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  overrides: [
    {
      files: ['src/redux/slices/*Slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
    {
      files: ['src/enums/*.ts', 'src/api/services/*.ts'],
      rules: { 'import/prefer-default-export': 'off' },
    },
  ],
};

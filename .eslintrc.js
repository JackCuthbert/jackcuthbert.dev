module.exports = {
  extends: [
    'next',
    'standard-with-typescript',
    'standard-jsx',
    'standard-react',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  parserOptions: {
    project: ['./tsconfig.json']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

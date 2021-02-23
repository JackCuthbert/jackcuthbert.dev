module.exports = {
  extends: [
    'standard-with-typescript',
    'standard-react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
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

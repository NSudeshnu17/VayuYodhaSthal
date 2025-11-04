// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // <-- your React entry

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // so imports can omit extensions
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',          // or babel-loader if you prefer
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    port: 8080,
  },
};

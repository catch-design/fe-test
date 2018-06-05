const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devServer: {
      contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',       
          {
          loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')({
                        'browsers': ['> 1%', 'last 4 versions']
                    })],
                }
              },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader'
            ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css'
    })
  ]
};
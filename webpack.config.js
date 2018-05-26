const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'to-string-loader'
                    },
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            minimize: true,
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            minimize: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebPackPlugin(['public'], { root: path.resolve(__dirname) }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: false
        }),
        new CopyWebpackPlugin([
            {
                context: './src/images',
                from: '**/*',
                to: './images'
            }
        ])
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};

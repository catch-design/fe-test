const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
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
    include: path.resolve(__dirname, "../"),
    exclude: /node_modules/
  }, {
    test: /\.(jpe?g|png|svg)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        }
    ]
  });

  // Return the altered config
  return storybookBaseConfig;
};

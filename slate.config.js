/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  'webpack.extend': {
    resolve: {
      alias: {
        jQuery: path.resolve('./node_modules/jquery'),
        $: path.resolve('./node_modules/jquery'),
        vue: 'vue/dist/vue.js',
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
            use: [
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  importLoaders: 1,
                  plugins: [
                    require('postcss-import')(),
                    require('tailwindcss')('./tailwind.config.js'),
                    require('autoprefixer')(),
                  ],
                },
              },
            ],
          include: path.resolve(__dirname, './src/styles/theme.scss'),
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  },
};

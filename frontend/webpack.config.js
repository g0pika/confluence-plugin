const WrmPlugin = require('atlassian-webresource-webpack-plugin');
var path = require('path');


module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          }
        ]
    },
    entry: {
            'form': './src/form.js',
            'dynamictable': './src/dynamictable.js'
    },

    plugins: [
        new WrmPlugin({
            pluginKey: 'com.view26.pageview',
            locationPrefix: 'frontend/',
            xmlDescriptors: path.resolve('../backend/src/main/resources', 'META-INF', 'plugin-descriptors', 'wr-defs.xml'),
        }),
    ],
    output: {
        filename: 'bundled.[name].js',
        path: path.resolve("./dist")
    }
};
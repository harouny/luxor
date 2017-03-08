var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: { 
        'dist/formGeneratorHost': './src/componentHosts/formGenerator.js',
        'dist/formGeneratorDefinition': './src/xcomponents/formGenerator.js'
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
    new HtmlWebpackPlugin(
        {
            template: './src/componentHosts/formGenerator.html',
            inject: 'body',
            chunks: ['dist/common','dist/formGeneratorHost']
        }
    ),
    new webpack.optimize.CommonsChunkPlugin('dist/common'),
    ],
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env','react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: { 
        'dist/formGenerator/page': './src/pages/formGenerator/formGenerator.js',
        'dist/formGenerator/definition': './src/xcomponents/formGenerator.js'
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
    new HtmlWebpackPlugin(
        {
            template: './src/pages/formGenerator/formGenerator.html',
            inject: 'body',
            chunks: ['dist/common','dist/formGenerator/page'],
            filename: 'dist/formGenerator/page.html',
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
    },
    devServer: {
        headers: { 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    }
};
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: { 
        'dist/formGenerator/page': './src/pages/formGenerator/page.js',
        'dist/formGenerator/xcomponent': './src/xcomponents/formGenerator.js'
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
    new HtmlWebpackPlugin(
        {
            template: './src/pages/formGenerator/page.html',
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
            {test: /\.css?$/, exclude: /node_modules/, loader: "style-loader!css-loader"},
        ]
    },
    devServer: {
        headers: { 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    }
};
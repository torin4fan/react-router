'use strict';

const webpack = require('webpack');

module.exports = {

    entry: {
        entry: "./app/app.js"
    },

    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },

    devtool: '#source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};

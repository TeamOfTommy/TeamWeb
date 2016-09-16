var webpack = require('webpack');

module.exports = {
    entry: {
    },
    output: {
        path: __dirname + '/js/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                "presets": ["es2015", "react"],
                "plugins": [
                    ["antd", {
                        "style": "css",
                        "libraryDirectory": "lib",
                        "libraryName": "antd"
                    }]
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            },

        })
    ]
}

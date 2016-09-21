var webpack = require('webpack');

module.exports = {
    entry: {
        'home/index': './assest/js/home/index.js'
    },
    output: {
        path: __dirname + '/js/',
        filename: '[name].bundle.js',
        publicPath: '/Public/image/'
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
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            loader: 'url-loader?limit=8192&name=../image/[hash].[ext]'
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

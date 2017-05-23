var webpack = require('webpack');

module.exports = {
    entry: {
        AppDOM: './src/index.ts',
        echo: './src/example/echo.ts',
        list: './src/example/list.ts'
    },
    output: {
        library: "AppDOM",
        filename: './dist/[name].js',
        path: __dirname
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            }, {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                keep_fnames: true
            },
            mangle: {
                keep_fnames: true
            },
            sourceMap: true
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map'
};

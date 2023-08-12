const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    target: 'web',
    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2009
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS Strings
                { loader: 'style-loader' },

                // Translates CSS into CommonJS
                { loader: 'css-loader' },

                // Compiles Sass to CSS
                { loader: 'sass-loader' }
            ]
        },
        // Start here for the URL Loader
        {
            test: /\.(png|jpg)$/,
            use: [
                { loader: 'url-loader' }
            ]
        },
        {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
            use: 'url-loader?limit=10000',
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader',
        }
        ]
    },
    plugins: [
        // Favicon
        new FaviconsWebpackPlugin({
            logo: './src/images/S-FaviconBackgroundColor@4x.png'
        })
    ]
};
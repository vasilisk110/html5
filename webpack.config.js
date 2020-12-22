const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');

const config = {
    entry: ['babel-polyfill', './src/index.js'],
    devtool: 'inline-source-map',
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        liveReload: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/pg',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src',
                },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'src',
            openAnalyzer: false,
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new CssMinimizer(),
    ],
};

// eslint-disable-next-line no-undef
module.exports = config;
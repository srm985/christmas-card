
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = () => {
    const {
        env: {
            NODE_ENV
        }
    } = process;

    const plugins = [
        new CleanWebpackPlugin()
    ];

    const entry = './src/index.js';

    plugins.push(
        new HtmlWebpackPlugin({
            favicon: './src/assets/favicon.ico',
            filename: 'index.html',
            path: path.join(__dirname, '../dist/'),
            template: './src/index.html'
        })
    );

    return ({
        devServer: {
            contentBase: path.join(__dirname, '../dist/'),
            historyApiFallback: true,
            hot: true
        },
        entry,
        mode: NODE_ENV,
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.(js|jsx)$/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    loader: 'file-loader',
                    test: /\.(gif|png|jpe?g|svg)$/i
                }
            ]
        },
        output: {
            filename: 'index.[hash].js',
            path: `${__dirname}/dist`,
            publicPath: '/'
        },
        plugins,
        resolve: {
            extensions: [
                '*',
                '.js',
                '.jsx'
            ]
        }
    });
};

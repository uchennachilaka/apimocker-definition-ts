const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const {
    TsConfigPathsPlugin
} = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(process.cwd(), 'test'),
    entry: ['./src/main.ts', './src/config.ts'],
    // entry: [path.resolve(process.cwd(), 'test/src')],
    // entry: './src/main.ts',
    output: {
        path: path.resolve(process.cwd(), './test/dist'),
        filename: '[name].js'
    },
    target: 'node',
    externals: [NodeExternals()],
    plugins: [
        // new TsConfigPathsPlugin({
        //     configFileName: path.resolve(process.cwd(), 'test/src/tsconfig.test.json'),
        // }),
        new CopyPlugin([{
            from: 'src/mocks',
            to: 'mocks'
        }], {
            context: path.resolve(process.cwd(), 'test')
        }),
    ],
    // serve: {
    //     port: process.env.PORT || 7800,
    //     content: './dist'
    // },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'test/src')
        ],
    },
    devServer: {
        hot: true,
        compress: true
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.tsx?$/,
            use: [
                'awesome-typescript-loader',
            ]
        }]
    }
}
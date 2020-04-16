const path = require('path');

module.exports = {
    entry: './src/fillo.js',
    mode: 'production',
    target: 'node',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs2',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        sqlite3: 'commonjs sqlite3'
    }
};
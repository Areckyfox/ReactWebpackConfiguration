const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: "./src/index.js",
    output: {
        path: '',
        filename: 'bundle.js',
        publickPath: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extension: ['js', 'jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use: [
                    
                ]
            }
        ]
    }
};

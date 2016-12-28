var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WatchIgnorePlugin = require('watch-ignore-webpack-plugin');

var config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/public'
    },
    module: {
        loaders: [
        
            // JS & JXS Loader: Babel
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            // CSS Loader: style-loader, css-loader, sass-loader
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader') },
            // Other Loaders
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
    externals: {
        'react': 'React' //don't bundle the 'react' npm package with our bundle.js, instead get it from a global 'React' variable
    },
    resolveLoader: { 
        root: path.join(__dirname, 'node_modules')
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            configuration: path.join(__dirname, 'configuration', 'default')
        }
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new WatchIgnorePlugin([
            path.resolve(__dirname, './node_modules/'),
            path.resolve(__dirname, './images/'),
            path.resolve(__dirname, './bundle.js'),
            path.resolve(__dirname, './style.css')
        ])
    ]
};

module.exports = config;
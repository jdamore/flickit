module.exports = {
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
            // CSS Loader: style-loader & css-loader
            { test: /.css$/, loader: 'style-loader!css-loader',exclude: /node_modules/ },
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
    externals: {
        'react': 'React' //don't bundle the 'react' npm package with our bundle.js, instead get it from a global 'React' variable
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
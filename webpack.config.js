var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry:'./index.js',
    output:{
        filename:'./index.min.js'
    },
    plugins:[
        new UglifyJsPlugin
    ]
};
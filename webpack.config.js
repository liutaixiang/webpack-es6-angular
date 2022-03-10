const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		openPage: '#!', //默认就打开 “/home”
		hot: true, // 热加载
		open: true, //打开默认浏览器
		port: 8888 //端口号
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader']
				})
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				use: ['url-loader']
			},
			{
				test: /\.html$/,
				use: ['raw-loader']
			}
		]
	},
	resolve: {
		//import 文件默认先从src目录找，没有再去node_modules，减少import src目录文件层级
	    modules: [path.resolve(__dirname, './src'), 'node_modules'],
	    extensions: ['.js', '.css']  // import js和css 文件时不需要写文件后缀名
	},
	plugins: [
		new ExtractTextPlugin({
			filename: `[name]_[contenthash:8].css`
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
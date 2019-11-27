var path = require('path');
//引入插件
var HtmlWebpackPlugin = require("html-webpack-plugin")
// var webpack = require('webpack');
// var {UglifyJsPlugin} = webpack.optimize;
//定义
module.exports ={
	//解决vue
	resolve:{
		alias:{
			vue$:'vue/dist/vue.js'
		},
		//定义拓展名
		extensions:['.es','.vue','.js']
	},
	//入口文件
	entry:'./src/main.es',
	//发布
	output:{
		//相对路径
		path: path.join(process.cwd(),'../'),
		filename:'./admin/dist/pc.js'
	},
	//定义模块
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
// 				options:{
// 					loaders:{
// 						js:['babel-loader?presets[]=es2015']
// 					}
// 				}
				// vue-loader 只能编译vue文件
				// 不会将script标签中的es6语法
				//es5 es3.1的语法
			},
			{
				test:/\.es$/,
				loader:'babel-loader',
				query:{
					presets:['es2015']
				}
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.scss!/,
				loader:'style-loader!css-loader!sacc-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(ttf|woff)$/,
				loader:'url-loader'
			}
		]
	},
	//功能
	plugins:[
		new HtmlWebpackPlugin({
			//模板
			template:'./public/index.html',
			filename:'./views/admin_pc.html',
			hash:true
		}),
		// new .UglifyJsPlugin()
	]
	
	
}
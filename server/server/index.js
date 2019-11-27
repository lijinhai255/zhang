//5.2 引入http协议
var http =require("http");
//6.2 引入https
var https =require("https");
//引入端口号
var conf = require('../conf');
// 引入fs 模块 读取 文件
var fs =require("fs");
//获取端口号
// var HTTP_PORT = conf.HTTP_PORT;
// var HTTPS_PORT = conf.HTTP_PORTS;
//6.3 引入协议文件 引入fs模块 读取文件
var key = fs.readFileSync('./ssl/private.pem');
var cert = fs.readFileSync('./ssl/file.crt');

module.exports= function(app){
	//指令执行过程中  传递的参数
	//第T三个参数 是http端口号
	var HTTP_PORT = process.argv[2]|| conf.HTTP_PORT
	//第四个参数 是https端口号
	//传递了第四个参数 使用第四个参数 
	var HTTPS_PORT = process.argv[3]|| (process.argv[2]? +process.argv[2]+1: HTTPS_PORT)
	//5.2 创建http协议
	http.createServer(app)
		//监听端口号
		.listen(HTTP_PORT,()=>console.log('http server start at 3000'))
	
	//第六步创建https模块 也要首先引入https模块 
	https.createServer({key, cert},app)
		//监听端口号
		.listen(HTTPS_PORT,()=>console.log('https srever start at 3001'))	
}
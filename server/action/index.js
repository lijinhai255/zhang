//第二步 打包接口
//首页请求接口
let lessonHome = require("./lesson/home.js");
let lessonType =require('./lesson/type.js');
let lessonSearch = require('./lesson/search.js');
//获取移动端数据
let PageGoods = require('./page/goods');
let PageRating = require('./page/ratings');
let PageSeller = require('./page/seller');
//引入创建数据端口
let CreateData = require('./create/data')
//暴露接口
module.exports ={
	lessonHome,
	lessonType,
	lessonSearch,
	PageGoods,
	PageRating,
	PageSeller,
	CreateData
}
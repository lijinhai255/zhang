//引入express
var  express = require('express');
//引入接口
var mobile = require ('../mobile/index.js');
//创建路由实例化对象
var router  = new express.Router();
//配置路由 并返回接口
module.exports = router
	.get('/mobile/home',mobile.home)

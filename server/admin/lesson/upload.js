// 上传文件模块
var formidable = require('formidable');
// 引入path模块
var path = require('path');
// 引入文件读写模块
var fs = require('fs');
// 引入路径
var { UPLOAD_LESSON_CACHE_DIR, UPLOAD_LESSON_SAVE_DIR, ERRORS } = require('../../conf');
// 上传课程图片接口
//上传文件
module.exports = (req, res) => {
	//创建文件上传对象
	let form = new formidable.IncomingForm();
	//设置上传目录
	form.uploadDir=path.join(process.cwd(),UPLOAD_LESSON_CACHE_DIR);
	//解析请求
	form.parse(req,(err,field,files)=>{
		//如果有错误
		if(err){
			//提示用户
			return	res.join(ERRORS.uploadError);
		}
		//将图片名称 由二十个数字组成 存储在static/upload目录中
		//创建图片名称 + 文件的后缀名称
		var filePath =
		UPLOAD_LESSON_SAVE_DIR+
		 String(Math.random()).slice(2,12)+
		 String(Math.random()).slice(2,12)+
		//获取文件后缀名称
		path.extname(files.file.name);
		console.log(path.join(process.cwd(),filePath))
		//移动文件
		fs.rename(files.file.path,path.join(process.cwd(),filePath),
		(err)=>{
			if(err){
				return res.json(ERRORS.moveFileError)
			}
			//通知前端
			res.json({
				errno:0,
				data:{
					img:filePath
				}
			})
		})
	})
	// console.log(form.uploadDir)
	// res.json('success')
}
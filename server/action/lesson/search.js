var { collection , end} = require('../../db');
//引入配置
var num= require('../../conf').HOME_SHOW_LESSON_NUM;
//第一步定义方法的实现
module.exports= (req,res)=>{
	var search = req.query.world;
	//操作数据库
	collection('lesson', res, (collection, db) => {
		// 集合查找数据
		collection
			// 查找
			.find({ title: new RegExp(search,'i') })
			// 倒序
			.sort({ _id: -1 })
			// 截取
			.limit(num)
			// 转换成数组
			.toArray((err, data) => {
				// 如果有错误
				if (err) {
					// 终止执行，提示用户，关闭数据库
					return end('collectionFindError', res, db)
				}
				// 如果没有结果
				if (data.length === 0) {
					// 终止执行，提示用户，关闭数据库
					return end('noResult', res, db);
				}
				// 返回数据，关闭数据库
				end({ errno: 0, data }, res, db);
			})
	})
	
}
// module.exports = (req,res)=>{
// 	res.json("success")
// }
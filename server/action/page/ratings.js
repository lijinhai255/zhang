// 引入数据库模块
var { collection, end } = require('../../db');
var num = require('../../conf').HOME_SHOE_LESSON_NUM;

// 第一步 实现接口
module.exports = (req, res) => {
	// 获取分类id
	var type = req.query.id;
	// 链接数据库，操作集合
	collection('ratings', res, (collection, db) => {
		// 集合查找数据
		collection
			// 查找
			.find({ type })
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
	// console.log(type)
	// res.json('type success')
}
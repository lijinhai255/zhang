// 引入数据库
var { collection, end } = require('../../db');
// 每页显示的课程数量
var num = require('../../conf').HOME_SHOE_LESSON_NUM;
// 定义接口实现方法
module.exports = (req, res) => {
	// 获取搜索词
	let search = req.query.id;
	// 链接数据库，操作集合
	collection('seller', res, (collection, db) => {
		// 操作集合
		collection
			// 查询
			.find()
			// 转化成数组
			.toArray((err, data) => {
				// 如果有错误
				if (err) {
					// 提示用户
					return  end('collectionFindError', res, db);
				}
				// 没有数据
				if (data.length === 0) {
					// 提示用户
					return end('noResult', res, db);
				}
				// 返回数据
				end({ errno: 0, data }, res, db);
			})
	})
	// res.json('succsss')
}
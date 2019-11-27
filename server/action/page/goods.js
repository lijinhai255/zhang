// 引入数据库模块
var { collection, end } = require('../../db');
// 获取首页展示的课程数量
var num = require('../../conf').HOME_SHOE_LESSON_NUM;
// 第一步 定义方法实现
module.exports = (req, res) => {
	// 测试
	collection('goods', res, (collection, db) => {
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
	// 获取数据
	
}
var { collection , end} = require('../../db');
//引入配置
var {HOME_SHOW_LESSON_NUM}= require('../../conf');
//第一步定义方法的实现
module.exports= (req,res)=>{
	//操作数据库
	collection('lesson',res,(collection,db)=>{
		//获取数据
		collection
			.find()
			.sort({_id:-1})
			//展示多少个
			.limit(HOME_SHOW_LESSON_NUM)
			.skip(HOME_SHOW_LESSON_NUM*1)
			.toArray((err,result)=>{
				if(err){
					return 	end('collectionFindError',res,db)
				}
				if (result.length===0) {
					return end('collectionFindDataError',res,db)
					
				}
				//成功 返回
				end({
					error:0,
					data:result
				},res,db)
			})
	})
	
}
// module.exports = (req,res)=>{
// 	res.json("success")
// }
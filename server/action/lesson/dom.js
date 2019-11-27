var { collection , end} = require('../../db');
//引入配置
var num= require('../../conf').HOME_SHOW_LESSON_NUM;
//第一步定义方法的实现
module.exports= (req,res)=>{
	var type = req.query.id;
	//操作数据库
	collection('lesson',res,(collection,db)=>{
		//获取数据
		collection
			.find({ type})
			.sort({_id:-1})
			//展示多少个
			.limit(num)
			.skip(num*1)
			.toArray((err,result)=>{
				if(err){
					return 	end('collectionFindError',res,db)
				}
				if (result.length===0) {
					return end('noResult',res,db)
					
				}
				//成功 返回
				end({
					error:0,
					data:result
				},res,db)
			})
	})
	
}
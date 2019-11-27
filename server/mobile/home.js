var { collection , end} = require('../db');
//引入配置
var {MOBILE_SHOW_HOME_NUM}= require('../conf');
//第一步定义方法的实现
module.exports= (req,res)=>{
    var page = req.query.page;
    // console.log(type)
    //从0 开始记数
    page = page <1 ? 0: page-1;
    //操作数据库
    collection('home',res,(collection,db)=>{
        //获取数据
        collection
            .find()
            //倒叙
            .sort({_id:-1})
            //跳过的页数
            .skip(MOBILE_SHOW_HOME_NUM*page)
            //显示的个数
            .limit(MOBILE_SHOW_HOME_NUM)
            //转化成数组
            .toArray((err,data)=>{
                //如果有错误
				if(err){
					return end('collectionFindError',res,db)
				}
				//没有数据
				if(data.length===0){
					return end('noResult',res,db)
				}
				//有数据 返回给前端
				end({
					error:0,
					data
				},res,db)
            })

    })

}
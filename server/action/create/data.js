// 数据库模块
var { collection, end } = require('../../db');
// 创建课程接口
module.exports = (req, res) => {
	res.json('success');
	// // 提交的数据
	// // console.log(req.body)
	// // 打开集合
	// collection('home', res, (collection, db) => {
	// 	// 操作集合
	// 	collection
	// 		// 插入操作
	// 		.insertMany([
	// 			{
	// 				"img": "1.jpg.webp",
	// 				"title": "比格美食屋",
	// 				"sales": 11144,
	// 				"price": 75,
	// 				"originPrice": 128,
	// 				"id": "1",
	// 				"shop_info": "[常营] 低至7.0折单人餐C套餐",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "2.jpg.webp",
	// 				"title": "村上一屋 寿司 免费WiFi",
	// 				"sales": 101,
	// 				"price": 53,
	// 				"originPrice": 130,
	// 				"id": "2",
	// 				"shop_info": "[30店通用] 低至0.1折代金券",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "10.jpg.webp",
	// 				"title": "阿香米线",
	// 				"sales": 241,
	// 				"price": 89,
	// 				"originPrice": 105,
	// 				"id": "3",
	// 				"shop_info": "[管庄] 低至7.7折单人传统牛肉面",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "7.jpg.webp",
	// 				"title": "醉面 一碗醉香的肉酱面",
	// 				"sales": 13126,
	// 				"price": 45.5,
	// 				"originPrice": 60,
	// 				"id": "4",
	// 				"shop_info": "[6店通用] 低至6.6折全部3选1",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "9.jpg.webp",
	// 				"title": "牛三哥洛阳牛肉汤面",
	// 				"sales": 9890,
	// 				"price": 49.9,
	// 				"originPrice": 70,
	// 				"id": "5",
	// 				"shop_info": "[46店通用] 低至7.1折肥牛石锅拌饭+鸡蛋羹1份 ",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "3.jpg.webp",
	// 				"title": "鼎极轩烤肉 免费wifi",
	// 				"sales": 2228,
	// 				"price": 88,
	// 				"originPrice": 128,
	// 				"id": "6",
	// 				"shop_info": "[58店通用] 低至8.7折代金券1张",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "4.jpg.webp",
	// 				"title": "四川小面",
	// 				"sales": 13,
	// 				"price": 275,
	// 				"originPrice": 300,
	// 				"id": "7",
	// 				"shop_info": "[首都机场] 低至7.9折牛肉拉面1份",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "5.jpg.webp",
	// 				"title": "生煎汤包，提供免费WiFi",
	// 				"sales": 12226,
	// 				"price": 17,
	// 				"originPrice": 35,
	// 				"id": "8",
	// 				"shop_info": "[五棵松] 低至8.3折麻辣小面（店长推荐）1份",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "6.jpg.webp",
	// 				"title": "犟骨头排骨饭 免费WiFi",
	// 				"sales": 11,
	// 				"price": 36,
	// 				"originPrice": 68,
	// 				"id": "9",
	// 				"shop_info": "[西红门] 低至9.2折代金券1张",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "8.jpg.webp",
	// 				"title": "粥立方",
	// 				"sales": 1231,
	// 				"price": 68,
	// 				"originPrice": 148,
	// 				"id": "10",
	// 				"shop_info": "[34店通用] 低至9.0折全场通用代金券1张",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "11.jpg.webp",
	// 				"title": "永远爱小海鲜自助烤肉火锅",
	// 				"sales": 33321,
	// 				"price": 75,
	// 				"originPrice": 156,
	// 				"id": "11",
	// 				"shop_info": "[天通苑] 低至7.0折单人餐C套餐",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "12.jpg.webp",
	// 				"title": "韩时烤肉 免费WiFi",
	// 				"sales": 4232,
	// 				"price": 76.8,
	// 				"originPrice": 130,
	// 				"id": "12",
	// 				"shop_info": "[西二旗] 低至0.1折代金券",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "13.jpg.webp",
	// 				"title": "北京地道老火锅 wifi",
	// 				"sales": 676,
	// 				"price": 89,
	// 				"originPrice": 105,
	// 				"id": "13",
	// 				"shop_info": "[平西王府] 低至6折单人传统牛肉面",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "14.jpg.webp",
	// 				"title": "醉面 一碗醉香的肉酱面",
	// 				"sales": 13126,
	// 				"price": 45.5,
	// 				"originPrice": 60,
	// 				"id": "14",
	// 				"shop_info": "[6店通用] 低至6.6折全部3选1",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "15.jpg.webp",
	// 				"title": "宽板凳老灶火锅",
	// 				"sales": 9890,
	// 				"price": 49.9,
	// 				"originPrice": 70,
	// 				"id": "15",
	// 				"shop_info": "[46店通用] 低至7.1折肥牛石锅拌饭+鸡蛋羹1份 ",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "16.jpg.webp",
	// 				"title": "金百万烤鸭店 免费wifi",
	// 				"sales": 22228,
	// 				"price": 88,
	// 				"originPrice": 128,
	// 				"id": "16",
	// 				"shop_info": "[58店通用] 低至8.7折代金券1张",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "17.jpg.webp",
	// 				"title": "重庆担担面",
	// 				"sales": 9897,
	// 				"price": 156,
	// 				"originPrice": 222,
	// 				"id": "17",
	// 				"shop_info": "[首都机场] 低至7.9折牛肉拉面1份",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "18.jpg.webp",
	// 				"title": "丁丁洋回转自助火锅",
	// 				"sales": 14353,
	// 				"price": 45.6,
	// 				"originPrice": 77,
	// 				"id": "18",
	// 				"shop_info": "[五棵松] 低至8.3折麻辣小面（店长推荐）1份",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "19.jpg.webp",
	// 				"title": "比亚神单人自助 免费WiFi",
	// 				"sales": 576,
	// 				"price": 99,
	// 				"originPrice": 146,
	// 				"id": "19",
	// 				"shop_info": "[东直门] 低至9.2折代金券1张",
	// 				"type": "食物"
	// 			},
	// 			{
	// 				"img": "20.jpg.webp",
	// 				"title": "永远爱小海鲜自助烤肉火锅",
	// 				"sales": 6532,
	// 				"price": 88,
	// 				"originPrice": 198,
	// 				"id": "20",
	// 				"shop_info": "[66店通用] 低至9.0折全场通用代金券1张",
	// 				"type": "食物"
	// 			}
	// 		], (err, data) => {
	// 			// 如果有错误
	// 			if (err) {
	// 				// 终止执行
	// 				return end('collectionInsertError', res, db);
	// 			}
	// 			// 如果数据存储成功
	// 			if (data.result.n > 0) {
	// 				// 通知用户成功了
	// 				return end('success', res, db);
	// 			}
	// 			// 插入失败
	// 			end('noInsertData', res, db);
	// 			// console.log(err, data)
	// 		})
	// })
}
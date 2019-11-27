import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
	carPanelData:[],
	maxOff:false,
	carShow:false,
	// 小球
	ball:{
		//小球是否显示
		show:false,
		//点击哪一个的位置
		el:null,
		img:''
	},
	provinceList : [{
	'area_id': 110000,
	'area_name': '北京市',
	'city_list': [{
		'area_name': '市辖区',
		'area_id': 110100,
		'county_list': [{
			'area_name': '东城区',
			'area_id': 110101
		}, {
			'area_name': '海淀区',
			'area_id': 110106
		}]
	}, {
		'area_name': '县',
		'area_id': 110200,
		'county_list': [{
			'area_name': '密云县',
			'area_id': 110228
		}, {
			'area_name': '延庆县',
			'area_id': 110229
		}]
	}]
},
 {
	'area_id': 440000,
	'area_name': '广东省',
	'city_list': [{
		'area_id': 440300,
		'area_name': '深圳市',
		'county_list': [{
			'area_name': '罗湖区',
			'area_id': 440303
		}, {
			'area_name': '福田区',
			'area_id': 440304
		}]
	}, {
		'area_id': 440100,
		'area_name': '广州市',
		'county_list': [{
			'area_name': '荔湾区',
			'area_id': 440103
		}, {
			'area_name': '越秀区',
			'area_id': 440104
		}]
	}]
},
 {
	'area_id': 310000,
	'area_name': '上海市',
	'city_list': [{
		'area_id': 310100,
		'area_name': '市辖区',
		'county_list': [{
			'area_id': 310113,
			'area_name': '宝山区'
		}, {
			'area_id': 310105,
			'area_name': '长宁区'
		}]
	}, {
		'area_id': 310200,
		'area_name': '县',
		'county_list': [{
			'area_name': '崇明县',
			'area_id': 310230
		}]
	}]
}],

	 receiveInfo : [{
      "name": "王某某",
      "phone": "13811111111",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "北京市",
      "cityId": 110100,
      "city": "市辖区",
      "countyId": 110106,
      "county": "海淀区",
      "add": "上地十街辉煌国际西6号楼319室",
      "default": true
    },{
      "name": "李某某",
      "phone": "13811111111",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "北京市",
      "cityId": 110100,
      "city": "市辖区",
      "countyId": 110106,
      "county": "海淀区",
      "add": "上地十街辉煌国际东6号楼350室",
      "default": false
    }],
    orderData:[]
},
getters: {
	totleCount(state, getters) {
			let count = 0;
			state.carPanelData.forEach(goods => {
			count += goods.count
		})
			return count
},
	totlePrice(state, getters) {
			let price = 0;
			state.carPanelData.forEach(goods => {
			price += goods.count * goods.price
		})
			return price
	},
	//全选
	allChecked(state) {
		let allcheck = true;
		state.carPanelData.forEach((goods, index) => {
			if(!goods.check){
				allcheck = false;
				return;
			}
		})
		return allcheck
	},
	//结算总金额
	checkedPrice(state) {
		let price = 0;
		state.carPanelData.forEach((goods) => {
			if(goods.check) {
				price += goods.price * goods.count
				return;
			}
		})
		return price
	},
	//结算总数量
	checkedCount(state) {
		let count = 0;
		state.carPanelData.forEach((goods) => {
			if(goods.check) {
				count += goods.count
			}
		})
		return count
	},
	//已选购的商品
	checkGoods(state) {
		let checkGoods = [];
		state.carPanelData.forEach((goods) => {
			if(goods.check) {
				checkGoods.push(goods)
			}
		})
		return checkGoods
	}	
},
mutations:{
	addCarpanelData(state, data) {
		let lock = true;
		state.carPanelData.forEach(goods => {
			if(goods.sku_id === data.info.sku_id) {
				goods.count += data.count;
				if(goods.count > goods.limit_num){
					goods.count -= data.count;
					state.maxOff = true;
					// 小球的属性
					return;
				}
					state.ball.show = true;
					state.ball.img = data.info.ali_image;
					// console.log(event)//信息注意,$event
					state.ball.el = event.path[0]//小球的起始位置
				lock = false;
				state.carShow = true;
			}
		})
		if(lock) {
			state.ball.show = true;
			state.ball.img = data.info.ali_image;
			console.log(event)
			state.ball.el = event.path[0]//小球的起始位置

			state.carShow = true;
			let goodsData = data.info;
			// 添加是否选中的默认属性
			Vue.set(goodsData, 'check', true)
			Vue.set(goodsData, 'count', data.count);
			state.carPanelData.push(goodsData);
		}
		//添加的数据
		// console.log(state.carPanelData)
	},
	closePrompt(state) {
		state.maxOff = false;
	},
	delCarpanelData(state,id) {
		state.carPanelData.forEach((goods, index) => {
			if(goods.sku_id === id) {
				state.carPanelData.splice(index, 1)
				return 
			}
		})
	},
	showCar(state) {
		state.carShow = true;
		// console.log(state.carShow)
	},
	hideCar(state) {
		setTimeout(() => {
			state.carShow = false;
			// console.log(state.carShow)
		},500)
	},
	//结算页面的增加方法
	plusCartPanelData(state, id) {
		state.carPanelData.forEach((goods, index) => {
			if(goods.sku_id === id) {
				if(goods.count >= goods.limit_num) {
					return
				}
				goods.count ++
				return 
			}
		})
	},
	subCartPanelData(state, id) {
		state.carPanelData.forEach((goods, index) => {
			if(goods.sku_id === id) {
				if(goods.count <= 1) {
					goods.count = 1
					return
				}
				goods.count --
				return 
			}
		})
	},
	//单个是够选择中
	checkGoods(state, id) {
		state.carPanelData.forEach((goods, index) => {
			if(goods.sku_id === id) {
				goods.check = !goods.check
			
				// return
			}
		})	
			console.log(state.carPanelData)	
	},
	//控制全选
	chooseAll(state, allcheck) {
		state.cart.forEach((goods, index) => {
			goods.check = !goods.check
		})		
	},
	//删除选中的商品
	delChecGoods(state, id) {
		let i = state.carPanelData.length;
		while(i--) {
			if(state.carPanelData[i].check) {
				state.carPanelData.splice(i, 1)
			}		
		}
	},
	//添加收货人的方法
	submitInfo(state, data) {
		if(data.default) {
			state.receiveInfo.forEach((receive) => {
				receive.default = false;
			}) 
			state.receiveInfo.push(data)
		}
	},
	//提交的信息
	submitOther(state, data) {
		state.orderData.unshift(data);
		let i = state.carPanelData.length;
		while(i--) {
			if(state.carPanelData[i].check) {
				state.carPanelData.splice(i, 1)
			}
		}
	}

},

 actions: {

  }

})

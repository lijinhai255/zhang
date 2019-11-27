// 引入vue
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 1 安装
Vue.use(Vuex);
// 2 定义store
export default new Store({
	// state数据
	state: {
		// 总价
		allPrice: 0,
		count:0,
		// 所有已经商品
		foodsList: [],
		userinfor:{
					id: 1,
					linkMan: '小明',
					mobile: '10086',
					address: '北京市西城区动物园',
					isDefault:false	
					}
	},
	// 同步消息
	mutations: {
		addFood(state,food){
				//数组去重
				// 如果传过来的商品name与foodsList 的name 相同的话 删除该成员  将新成员添加进去
				//先判断是否存在 如果存在 去重 如果不存在 则添加
				//先判断 商品是否存在 如果存在 判断 name属性
				if(state.foodsList.find((item,index)=>item.name===food.name)){
					state.foodsList.forEach((item,index)=>{
						state.foodsList.splice(state.foodsList.findIndex(item => item.name === food.name),1);
					})
				}
				state.foodsList.push(food);
				state.allPrice=0;
				state.count=0;
				state.foodsList.map((item,index)=>{
					state.allPrice+= +item.price*item.count;
					state.count+=item.count;
				})
		},
		decFood(state,food){
			if(state.foodsList.find((item,index)=>item.name===food.name)){
				state.foodsList.forEach((item,index)=>{
					state.foodsList.splice(state.foodsList.findIndex(item => item.name === food.name),1);
					state.foodsList.push(food);
				})
			}
			//过滤数组中的count 不为0
			state.foodsList = state.foodsList.filter(item => item.count!== 0);
			state.allPrice=0;
			state.count=0;
			state.foodsList.map((item,index)=>{
				state.allPrice+= +item.price*item.count;
				state.count+=item.count;
			})
		},
		addaddress(state,info){
			console.log(state.userinfo)
			state.userinfor=info;
			console.log(info);
			console.log(state.userinfo)
			
		},
		emptyFood(state){
			state.foodsList=[];
			state.allPrice=0;
			state.count=0;
		}
	
	}
})
// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex, { Store } from 'vuex';
// 1 安装
Vue.use(Vuex);
// 2 创建store
export default new Store({
	// 数据
	state: {
		username: 'YYQH'
		// username: ''
	},
	// 同步消息
	mutations: {
		// 更新用户名
		updateUsername(state, username) {
			console.log(1111)
			// 修改用户名
			state.username = username;
		}
	}
})
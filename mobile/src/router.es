// 引入vue
import Vue from 'vue';
// 引入路由
import VueRouter from 'vue-router';
// 3 引入组件
import Home from './pages/Home';
import Good from './pages/Goods';
import Ratings from './pages/Ratings';
import Seller from './pages/Seller';
import Order from './pages/Order';
import Person from './pages/Person';
import Address from './pages/address';
import AllSeller from "./pages/AllSeller"
// 1 安装路由
Vue.use(VueRouter);
// 4 定义路由规则
let routes = [
	// 首页
	{ path:'/' , component: Home },
	{ path:'/good' , component: Good },
	{ path:'/addr' , component: Address },
	{ path:'/person' , component: Person },
	{ path:'/seller' , component: Seller},
	{ path:'/rating' , component: Ratings},
	{ path:'/order' , component: Order},
	{ path:'/AllSeller',component:AllSeller}
	// 默认路由
	// { path: '*', component: Home }
	// 重定向到首页
	// { path: '*', redirect: '/' }
]
// 5 实例化并暴露接口
export default new VueRouter({ routes })
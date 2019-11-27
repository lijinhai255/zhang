// 定义路由
import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router';

//安装
Vue.use(VueRouter);

//引入组件
import Home from './pages/Home';
import Main from './pages/Main';
//课程
import LessonCreate from './pages/lesson/Create';
import LessonList from './pages/lesson/List';
import LessonEdit from './pages/lesson/Edit';
//用户
import UserCreate from './pages/user/Create';
import UserList from './pages/user/List';
import UserEdit from './pages/user/Edit';
//新闻
import NewsCreate from './pages/news/Create';
import NewsList from './pages/news/List';
import NewsEdit from './pages/news/Edit';
//商家
import SellerCreate from './pages/seller/Create';
import SellerEdit from './pages/seller/Edit';
import SellerList from './pages/seller/List';

//引入hightchart
import HightCharts from './pages/hightcharts';
// 定义路由
let routes = [
	{path:'/',component:Home,children:[
		//课程
		{ path:'/lesson/create',component:LessonCreate},
		{ path:'/lesson/list/:page',component:LessonList},
		{ path:'/lesson/edit/:id',component:LessonEdit},
		//用户
		{ path:'/user/create',component:UserCreate},
		{ path:'/user/list/:page',component:UserList},
		{ path:'/user/edit/:id',component:UserEdit},
		//新闻
		{ path:'/news/create',component:NewsCreate},
		{ path:'/news/list/:page',component:NewsList},
		{ path:'/news/edit/:id',component:NewsEdit},
		//商家
		{ path:'/seller/create',component:SellerCreate},
		{ path:'/seller/list/:page',component:SellerList },
		{ path:'/seller/edit/:id',component:SellerEdit},
		{ path:'/hightcharts',component:HightCharts},
		//默认路由
		{ path:'*',component:Main}
	]},
	
]
//实例化
export default new VueRouter({routes })
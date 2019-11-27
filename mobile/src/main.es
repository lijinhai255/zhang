// 引入vue
import Vue from 'vue';
// 引入应用程序
import App from './App';
// 引入路由
import router from './router';
// 引入store
import store from './store';
// 引入axios
import axios from 'axios';
//引入minit ui
import MintUI from 'mint-ui';
//安装minit Ui
Vue.use(MintUI);
// 引入element-ui并安装
import ElementUI from 'element-ui';
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css';
// 安装
Vue.use(ElementUI);
//引入minit ui 样式
import 'mint-ui/lib/style.css';
// 安装axios
Vue.prototype.$http = axios;

// 定义vue实例化对象
new Vue({
	// 6 安装路由
	router,
	// 3 安装store
	store,
	// 渲染应用程序
	render: h => h(App)
// 确定挂载点
}).$mount('#app')
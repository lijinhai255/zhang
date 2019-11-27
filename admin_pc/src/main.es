import Vue from 'vue';
import App from './App';
//安装elementUi
import ElementUI from 'element-ui';
//引入axios 
import axios from 'axios';
//引入 store
import store from './store';
//引入 路由
import router from './router';

import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
console.log(router);
//安装axios
Vue.prototype.$http = axios;
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
new Vue({
	store,
	router,
	render: h=>h(App)
}).$mount('#app');
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI)
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
import './base.scss';
Vue.config.productionTip = false
// 引入axios
import axios from 'axios';
// 安装axios
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

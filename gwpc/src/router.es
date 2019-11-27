import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Cart from './pages/Cart';
import List from './pages/List';
import Product from './pages/Product';
export default new Router({
  routes: [
    {path:'/', component: List},        
    {path:'/cart', component: Cart},
    {path:'/product/:id', component: Product},
		{path:'*',compontent:List}
  ]
})


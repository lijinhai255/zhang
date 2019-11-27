import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/home'
import Shop from './pages/shop'
import PageOne from './pages/page_one'
import PageTwo from './pages/page_two'
import PageThree from './pages/page_three'
import PageFour from './pages/page_four'
import PageFive from './pages/page_five'
import MPhone from './pages/mPhone'
import Item from './pages/item'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import payMent from './pages/payment'
import acCount from './pages/account'
import Order from './pages/order'


export default new Router({
  routes: [
    {path:'/', component: Home},        
    {path:'/Home', component: Home},        
    {path:'/Shop', component: Shop},        
    {path:'/PageOne', component: PageOne},        
    {path:'/PageTwo', component: PageTwo},        
    {path:'/PageThree', component: PageThree},        
    {path:'/PageFour', component: PageFour},        
    {path:'/PageFive', component: PageFive},        
    {path:'/MPhone', component: MPhone},        
    {path:'/Item',name:'Item', component: Item},
    {path:'/Cart', name:'Cart',component: Cart},
    {path:'/Checkout', name:'Checkout',component: Checkout},
    {path:'/payMent', name:'payMent',component: payMent},
    {path:'/acCount', component: acCount, children:[
        {path:'', name:'acCount', component:Order}
    ]}
  ]
})

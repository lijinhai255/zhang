<template>
	<div>
		<Header :seller="seller" ></Header>	
	<div class="tab">
		<router-link to="/" class="tab-item">商品</router-link >
		<router-link to="/rating" class="tab-item">评价</router-link >
		<router-link to='/seller' class="tab-item">商家</router-link >
	</div>
	<Good :goods='goods' ></Good>
	<ShopCar :deliveryPrice='seller.deliveryPrice' :minPrice='seller.minPrice' ></ShopCar>
	</div>
</template>

<script>
	import Good from '../components/goods/Good';
		//引入头部组件
	import Header from '../components/header/Header';
	// console.log(Header)
	//引入购物车钻进
	import ShopCar  from '../components/shopcar/ShopCar'
	export default {
		// 注册
		components:{ Good, Header,ShopCar},
		data(){
			return {
				goods:[],
				seller:{}
			}
		},
		//创建获取数据方法
		methods:{
			getData(){
				this.$http.get('/action/page/seller')
						 .then(({data})=>{
							 
							 if( data.errno===0){
								 
								 this.seller = data.data[0];
								 
							 }else{
								 
								 alert("获取数据失败");
								 
								 this.seller={}
							 }
						 })	
					 
			},
			
		},//组件创建完成 发送请求
		created(){
			
			this.getData();
			
		},
		//监听路由的变化
		watch:{
			//路由变化
			$route(){
				this.getData();
			}
		}
	}
</script>

<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background-color: #efefef;
	// overflow: hidden;
}
.app{
	// overflow: hidden;
}
.tab{
		display: flex;
		width:100%;
		height: 40px;
		line-height: 40px;
		background:#fff;
		.tab-item{
			flex: 1;
			text-align: center;
			display: block;
			font-size: 14px;
			color: rgb(77,85,93);
				&.router-link-active{
					color: rgb(240,20,20)
				}
		}
	}
</style>

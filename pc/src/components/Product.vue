<template>
	<!-- router-link[tag=div]>img+div.content>h2+p>span.price+span.origin-price+span.sales -->
<div class="product">
	<router-link tag="div" :to="'/detail/' + data.id" class="product-inner">
		<img :src="'/img/list/' + data.img" alt="">
		<div class="content">
			<h3>{{data.title}}</h3>
			<p>
				<span class="price">{{data.price}}元</span>
				<span class="origin-price">门市价:{{data.originPrice}}元</span>
				<span class="sales">销量{{data.sales}}</span>
			</p>
		</div>
	</router-link>
</div>
<!-- <router-link tag="div" :to="'/detail/' + data.id" class="product">
	<img :src="'/img/list/' + data.img" alt="">
	<div class="content">
		<h3>{{data.title}}</h3>
		<p>
			<span class="price">{{data.price}}元</span>
			<span class="origin-price">门市价:{{data.originPrice}}元</span>
			<span class="sales">销量{{data.sales}}</span>
		</p>
	</div>
</router-link> -->
</template>
<style type="text/css" lang="scss">
@import "../base.scss";
.product {
	background: #fff;
	.product-inner {
		margin: 0 10px;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
		display: flex;
	}
	img {
		width: 100px;
		height: 60.5px;
	}
	.content {
		flex: 1;
		padding-left: 10px;
	}
	h3 {
		font-size: 14px;
		min-height: 44px;
	}
	p {
		font-size: 12px;
		color: #666;
	}
	.price {
		color: $navColor;
		margin-right: 5px;
	}
	.sales {
		float: right;
	}
}
</style>
<script type="text/javascript">
export default {
	// 接收数据
	props: ['data'],
	// created() {
	// 	console.log(this)
	// }
}
</script>
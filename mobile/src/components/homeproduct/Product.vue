<template>
	<div id="hot">
		<div class="phone">
			<a href="">
				<img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05941458623770601.png" alt=""></a>
			<a href="">
				<img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05506778612994991.png" alt=""></a>
			<ul >
				<router-link  v-for="(item, index) in product" :key="index" tag="li" :to="'/sort/'+1">
					<img :src="item.goods_image" alt="">
					<p class="first">{{item.goods_name}}</p>
					<p class="second">￥{{item.goods_price}}</p>
				</router-link>
			</ul>
		</div>
		<div>
			<a href="">
				<img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839307525338060.jpg" alt=""></a>
			<a href="">
				<img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839425773470935.png" alt=""></a>
			<ul class="">
				<router-link  v-for="(item, index) in product1" :key="index" tag="li" :to="'/sort/'+'item.goods_id'">
					<img :src="item.goods_image" alt="">
					<p class="first">{{item.goods_name}}</p>
					<p class="second">￥{{item.goods_price}}</p>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped>
// @import '../base.scss';
#hot {
	background-color: #F0F0F0;
	ul {
		padding: 5px;
		overflow: hidden;
		li:nth-child(even) {
			margin: 5px 1.5% 0 1.5%;
		}
		li:nth-child(odd) {
			margin: 5px 1.5% 0 1.5%;
		}
		li {
			border-radius: 3px;
			box-sizing: border-box;
			width: 47%;
			float: left;
			background-color: white;
			.first {
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
			}

			p{
				padding: 0 3px;
				font-size: 12px;
				overflow: hidden;
				height: 35px;
				line-height: 20px;
			}
			.second {
				padding-right: 5px;
				line-height: 45px;
			}
		}

	}
}
</style>
<script type="text/javascript">
export default {
	props: ['product', 'product1'],
	mounted() {
	}
}
</script>
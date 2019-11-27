<template>
	<!-- div.app-buy>(div.price>span.price-num)+(div.btn-part>div.btn-cancel+div.btn-buy)+h2{已购商品}+div.line+div.lesson.container -->
	<div>
		<HomeHeader></HomeHeader>
		<div class="app-buy">
			<div class="step">
				<el-steps :active="active">
					<el-step title="确认地址信息" icon="el-icon-edit"></el-step>
					<el-step title="在线下单" icon="el-icon-goods"></el-step>
				</el-steps>
			</div>
			<div class="address">
				<!-- 子组件向父组件通信 1 为子组件绑定自定义事件 -->
				<ItemAddress :addressItem='$store.state.userinfor' @ickt-demo="receiveMessage" ></ItemAddress>
			</div>
			<div class="price-part">
				<span>总价</span>
				<span class="price-num">￥{{$store.state.allPrice}}</span>
			</div>
			<div class="btn-part">
				<div class="btn btn-cancel" @click='$router.go(-1)'>取消购买</div>
				<div class="btn btn-buy" @click="buyLesson">立即购买</div>
			</div>
			<h2 class="lesson-title">已购商品</h2>
			<div class="linear"></div>
			<div class="lesson-container">
				<BuyFood v-for="(item, index) in $store.state.foodsList" :key="index" :data="item"></BuyFood>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	//引入课程卡片组件
	import BuyFood from '../components/buyfood/BuyFood';
	import HomeHeader from '../components/homeheader/HomeHeader';
	import ItemAddress from '../components/addressitem/AddressItem'
	export default {
		data(){
			return {
				active:1,
			}
		},
		//注册组件
		components: {
			BuyFood,
			HomeHeader,
			ItemAddress,
			
		},
		mounted() {
			//如果没有上一个课程 返回上一个页面
// 			if (this.$store.state.foodsList.length === 0) {
// 				this.$router.go('/good');
// 				alert("请选择商品 ");
// 				return;
// 			}
			window.scrollTo(0, 0);

		},
		methods:{
		buyLesson() {
				//发送请求
				this.$http
					.get('/action/foodsList/buy', {
						params: {
							foodsList: this.$store.state.lesson.map(item => item._id).join(',')
						}
					})
					.then(({
						data
					}) => {
						//如果请求数据成功 清空store中lesson
						if (data.errno == 0) {
							this.$store.commit('clearLesson')
						} else {
							//提示用户
							alert(data.msg)
						}
					})
			},
		receiveMessage(msg){
			console.log(msg);
			if(msg){
			 return	this.active=2;
			}
			this.active=1;
			
		},
		selectmsg(){
			console.log(this)
		}
		},
		//数据更新完成
		updated() {
			if (this.$store.state.foodsList.length === 0) {
				this.$router.go(-1);
				return;
			}
		},

	}
</script>

<style type="text/css" lang="scss">
	.app-buy {
		.step{
			background: #fff;
			padding:20px 100px 0px 100px;
		}
		.address{
			padding-top: 50px;
			border: 1px solid #efefef;
			background: #fff;
		}
		.price-part {
			padding: 40px 20px 30px;
			font-size: 18px;
			color: #666;
			background-color: #fff;

			.price-num {
				color: #f30;
				font-size: 30px;
			}
		}

		.btn-part {
			text-align: center;
			background-color: #fff;

			.btn {
				padding: 5px 12px;
				font-size: 14px;
				border-radius: 4px;
				display: inline-block;
				color: #fff;
				margin: 0 10px;
			}

			.btn-cancel {
				background-color: #999;
			}

			.btn-buy {
				background-color: #f30;
			}
		}

		.lesson-title {
			padding: 20px 20px 0;
			font-size: 24px;
			font-weight: normal;
			background-color: #fff;
		}

		.linear {
			height: 30px;
			background-image: linear-gradient(#fff, #efefef);
		}

		.lesson-container {
			padding: 0 20px 20px;

			.ickt-card {
				margin-bottom: 20px;
			}
		}
	}
</style>

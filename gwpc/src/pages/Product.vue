<template>
	<div class="productDetail">
		<div class="inner">
			<div class="detail_header">
				<p>首页》服装》外衣>-----</p>
			</div>
			<div class="content">
				<div class="detail_left">
					<div class="detail_swip">
						<div class="detail_swip_img">
							<img :src="s_images" alt="">
						</div>
						<ol class="detail_swip_circle">
							<li v-for="( item, index) in swip1.img" :key="index">
								<img :src="item.img" alt="" @click="change_images(index)" ref="img2">
							</li>
							<!-- {{swip1.img}} -->
						</ol>
					</div>
					<div class="detail_more">
						<div class="xiaoliang">
							<span>销量人气</span>
							<span>999+</span>
							<span>查看热销</span>
						</div>
						<div class="pingjia">
							<span>商品评价</span>
							<span>999+</span>
							<span>查看评价</span>
						</div>
						<div class="renqi">
							<span>收藏人气</span>
							<span>999+</span>
							<span>搜藏商品</span>
						</div>
						<div class="pinpai">
							<span>品牌信息</span>
							<span>999+</span>
							<span>品牌主页</span>
						</div>
					</div>
				</div>
				<div class="detail_right">
					<div class="detail_right_header">
						<div class="detail_title">
							<h2>{{swip1.name1}}</h2>
							<h3>{{swip1.name2}}</h3>
						</div>
					</div>
					<div class="detail_right_content">
						<div class="miaosha">
							<p class="countTime">秒杀商品  距离结束还剩 <span>{{day}}天{{hor}}时{{min}}分{{sec}}秒</span></p>
							<p class="miaosha_more">更多秒杀</p>
						</div>
						<div class="some">
							<div class="lingquan">
								<span class="some_title">领券</span>
								<p class="some_content">满300减50</p>
							</div>
							<div class="cuxiao">
								<span class="some_title">促销</span>
								<p class="some_content some_content_cuxiao" > 12月好物放送，领券购买直降120元</p>
							</div>
							<div class="jiangli">
								<span class="some_title">奖励</span>
								<p class="some_content">购买最高得249优币及249成长值</p>
							</div>
							<div class="fuwu">
								<span class="some_title">促销</span>
								<p class="some_content">
									<span>无忧退货</span>
									<span>快速退款</span>
									<span>免费包邮</span>
								</p>
							</div>
						</div>
						<div class="check">
							<div class="color">
								<span>颜色</span>
								<ul>
									<li v-for="(item, index) in colors" :key="index"
									 :class="(index===checkedColor?'active':'')+''+(checkedSize>=0&&item.size[checkedSize].num<=0?'disable':'')"
									@click="toggleColor(index)">
									<!-- <img :src="item.img" alt="" :title="item.color"> -->
									<span>{{item.color}}</span>
									</li>
								</ul>
							</div>
							<div class="size ts">
								<span>尺码</span>
								<ul>
									<li v-for="(item, index) in size" :key="index" :data="item">
										<span 
										:class="(index === checkedSize ? 'active': '')+' '+if_click1[index]" 
										@click="toggleSize(index)">{{item.size}}</span>
									</li>
								</ul>
							</div>
							<div class="number">
								<span>数量</span>
								<ol>
									<li @click="num_reduce">-</li>
									<li class="buy_num">{{num}}</li>
									<li @click="num_add">+</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div class="related_product"></div>
				<div class="product_info_left"></div>
				<div class="product_info_right"></div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	ul,
	ol {
		list-style: none;
	}

	.productDetail {
		box-sizing: border-box;

		.inner {
			margin: 0 auto;
			width: 80%;
			overflow: hidden;

			.content {
				.detail_left {
					float: left;
					width: 50%;
					padding-right: 40px;

					.detail_swip {
						margin-bottom: 30px;
						width: 90%;
						height: 500px;
						position: relative;
						// float: left;
						overflow: hidden;

						.detail_swip_img {
							position: absolute;
							background-color: #E4E4E4;
							left: 0;
							top: 0;

							img {
								width: 100%;
							}

							width: 500px;
							height: 500px;

							.detail_swip_circle {
								position: absolute;
								top: 0;
								right: 0;

								li {
									width: 100%;
									height: 100%;

									img {
										width: 100%;
										height: 100%;
									}
								}
							}
						}

						.detail_swip_circle {
							position: absolute;
							right: 10px;
							width: 100px;
							box-sizing: border-box;

							li {
								background-color: #E4E4E4;
								width: 100%;
								height: 92px;
								margin-bottom: 10px;

								&:nth-child(5) {
									margin-bottom: 0px;
								}

								img {
									width: 100%;
									height: 100%;
								}
							}
						}
					}

					.detail_more {
						width: 90%;
						display: flex;

						div {
							flex: 1;
							height: 100px;
							border-right: 1px solid #E4E4E4;
							padding-top: 30px;
							background-image: url("/static/images/icon/renqi.png");
							background-size: 20px 20px;
							background-repeat: no-repeat;
							background-position: 68px 0px;

							&:nth-child(2) {
								background-image: url("/static/images/icon/chant.png");
							}

							&:nth-child(3) {
								background-image: url("/static/images/icon/heart.png");
							}

							&:nth-child(4) {
								background-image: url("/static/images/icon/star.png");
								border-right: 0px;
							}
						}

						span {
							font-size: 14px;
							display: block;
							text-align: center;
						}
					}
				}

				.detail_right {
					width: 45%;
					float: left;
					margin-bottom: 18px;

					.detail_right_header {
						width: 100%;
						height: 100px;

						.detail_title {
							float: left;
							width: 60%;

							h2 {
								font-size: 22px;
							}

							h3 {
								font-size: 16px;
								color: #A8A8A8;
							}
						}

						.detail_price {
							float: left;
							width: 40%;
							height: 100px;

							div {
								box-sizing: border-box;
								float: left;
								width: 50%;
								font-size: 28px;
								text-align: center;
								line-height: 30px;
								padding-top: 30px;

								span {
									display: block;
								}

								.price_now_money {
									color: #F04844;
									font-weight: bold;
								}

								.price_old_money {
									font-weight: bold;
									text-decoration: line-through;
								}

								.price_title {
									font-size: 16px;
									color: #A8A8A8;
								}
							}
						}
					}

					.detail_right_content {
						width: 100%;
						background-color: #F9F9F9;

						.miaosha {
							width: 100%;
							height: 50px;
							background-color: #E67757;
							font-size: 18px;
							line-height: 50px;
							position: relative;
							color: white;
							padding: 0px 10px;

							.countTime {
								span {
									font-weight: bold;
									font-size: 24px;
								}
							}

							.miaosha_more {
								position: absolute;
								right: 10px;
								top: 50%;
								margin-top: -25px;
							}
						}

						.some {
							width: 100%;
							padding: 30px;
							font-size: 14px;
							line-height: 30px;

							div {
								width: 100%;
								overflow: hidden;

								.some_title {
									width: 5%;
									margin-right: 5%;
									float: left;
									display: block;
								}

								p {
									width: 70%;
									float: left;

									span {
										padding: 0px 20px;
										background-image: url("/static/images/icon/duihao.png");
										background-size: 14px 14px;
										background-repeat: no-repeat;
									}
								}

								.some_content_cuxiao {
									color: red;
								}
							}
						}

						.check {
							width: 100%;
							padding: 0px 30px;

							// background-color: red;
							.ts{
								overflow: hidden;
								height: 140px;
							}
							.color,
							.size,
							.number {
								width: 100%;
								margin-bottom: 20px;
								overflow: hidden;
								text-align: center;
								font-size: 14px;

								span {
									float: left;
									// display: inline-block;
									width: 10%;
									height: 40px;
									line-height: 40px;
								}

								ul {
									float: left;
									height: 40px;

									li {
										margin-right: 30px;
										float: left;
										font-size: 12px;
										line-height: 40px;
										cursor: pointer;
										border: 1px solid white;

										&.active {
											border: 1px solid red;
										}

										&.disabled {
											border: 1px dashed red;
											cursor: not-allowed;
										}

										img {
											width: 40px;
											height: 40px;
										}

										span {
											display: block;
											width: 70px;
											border: 1px solid #ccc;
											cursor: pointer;

											&.disabled {
												border: 1px dashed red;
												cursor: not-allowed;
											}

											&.active {
												background-color: #ccc;
											}
										}
									}
								}

								ol {
									li {
										font-size: 18px;
										line-height: 40px;
										// font-weight: bold;
										border: 1px solid #ccc;
										float: left;
										width: 40px;
										cursor: pointer;
									}

									.buy_num {
										width: 60px;
										border-left: 0px;
										border-right: 0px;
									}
								}
							}
						}
					}

					.detail_right_footer {
						padding: 0px 40px;
						text-align: center;

						.putinCar,
						.buyNow {
							float: left;
							width: 140px;
							height: 40px;
							padding-left: 40px;
							line-height: 40px;
							margin-right: 30px;
							border: 1px solid #F36D69;
							background-image: url("/static/images/icon/buy.png");
							background-size: 30px 30px;
							background-position: 15px 4px;
							background-repeat: no-repeat;
						}

						.putinCar {
							border: 1px solid #F36D69;
							background-color: #F36D69;
							background-image: url("/static/images/icon/shoppingCar.png");
							color: white;
						}
					}
				}

				.related_product {
					width: 100%;
					overflow: hidden;
					position: relative;
					border: 1px solid #E4E4E4;
					margin-bottom: 30px;

					h2 {
						display: block;
						margin-top: 0px;
						font-size: 20px;
						line-height: 50px;
						margin-bottom: 0px;
						border-bottom: 1px solid #E4E4E4;
						padding-left: 20px;
						color: #999999;
					}

					.related_product_swip {
						text-align: center;
						width: 1200px;
						margin: 0 auto;
						height: 370px;
						padding: 30px 60px;
						overflow: hidden;
						position: relative;

						.swip {
							width: 10000px;
							position: absolute;
							left: 60px;
							top: 20px;
							transition: all 0.2s linear;

							.related_product_swip_list {
								margin-right: 50px;
								width: 200px;
								line-height: 16px;
								float: left;
								border: 1px solid #E4E4E4;

								img {
									width: 100%;
									margin-bottom: 10px;
								}

								span {
									color: red;
								}
							}
						}
					}

					.circle_left,
					.circle_right {
						position: absolute;
						border-radius: 30px;
						top: 230px;
						width: 30px;
						height: 30px;
						border: 1px solid #ccc;
						background-position: 4px 4px;
						background-size: 20px 20px;
						background-repeat: no-repeat;
					}

					.circle_left {
						left: 15px;
						background-image: url("/static/images/icon/left1.png");
					}

					.circle_left:hover {
						background-image: url("/static/images/icon/left2.png");
					}

					.circle_right {
						right: 15px;
						background-image: url("/static/images/icon/right1.png");
					}

					.circle_right:hover {
						background-image: url("/static/images/icon/right2.png");
					}
				}

				.product_info_left {
					width: 70%;
					overflow: hidden;
					margin-right: 5%;
					float: left;

					.product_info {
						border: 1px solid #E4E4E4;
						margin-bottom: 30px;

						h2 {
							position: relative;

							.judge {
								position: absolute;
								text-align: center;
								width: 15%;
								height: 50px;
								line-height: 50px;
								top: 0px;
								right: 0px;
								background-image: url("/static/images/icon/judge.png");
								background-size: 20px 20px;
								border-left: 1px solid #E4E4E4;
								background-position: 16px 16px;
								background-repeat: no-repeat;
							}
						}

						.info {
							padding: 20px 60px;
							overflow: hidden;

							.info_detail {
								float: left;
								width: 29%;
								border-bottom: 1px solid #E4E4E4;

								span {
									display: inline-block;
									height: 50px;
									line-height: 50px;
								}

								.info_detail_title {
									width: 28%;
								}

								&:nth-child(2),
								&:nth-child(5),
								&:nth-child(8) {
									margin-left: 6%;
									margin-right: 6%;
								}
							}
						}

						.info_img {
							width: 70%;
							margin: 0 auto;
						}
					}

					.care {
						border: 1px solid #E4E4E4;

						div {
							width: 100%;
							padding: 10px 30px 0px 30px;
							color: #999999;

							h3 {
								font-size: 18px;
								font-weight: bold;
							}
						}
					}
				}

				.product_info_right {
					width: 25%;
					float: left;
					text-align: center;

					.hot {
						overflow: hidden;
						border: 1px solid #E4E4E4;
						margin-bottom: 30px;

						.hot_list {
							padding: 15%;
							overflow: hidden;

							.hot_list_detail {
								margin: 0 auto;
								width: 100%;
								line-height: 16px;
								margin-bottom: 30px;
								border: 1px solid #E4E4E4;
								float: left;

								img {
									width: 100%;
									margin-bottom: 10px;
								}

								span {
									color: red;
								}
							}
						}
					}

					.zhuanti {
						border: 1px solid #E4E4E4;

						.zhuanti_list {
							padding-top: 30px;
							color: white;

							// height: 200px;
							.zhuanti_list_detail {
								padding: 0px 30px;
								margin-bottom: 30px;

								img {
									width: 100%;
									height: 100%;
								}

								.zhuanti_list_title {
									width: 100%;
									background-color: rgba(0, 0, 0, .4);
									line-height: 32px;
								}
							}
						}
					}
				}
			}
		}
	}

	.product_info,
	.care {
		h2 {
			display: block;
			margin-top: 0px;
			font-size: 20px;
			line-height: 50px;
			margin-bottom: 0px;
			border-bottom: 1px solid #E4E4E4;
			padding-left: 20px;
			color: #999999;
		}
	}

	.hot,
	.zhuanti {
		h2 {
			display: block;
			margin-top: 0px;
			font-size: 20px;
			line-height: 50px;
			margin-bottom: 0px;
			border-bottom: 1px solid #E4E4E4;
			padding-left: 20px;
			color: #999999;
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				swip1: [],
				swip2: [],
				zhuanti: [],
				hotSale: [],
				infoImg: [],
				colors: [],
				size: [],
				click: [],
				if_click1: [],
				bd_color: [],
				left: 0,
				s_images: "static/images/detail/img1.jpg",
				bgColor: "white",
				time: "",
				day: 0,
				hor: 0,
				min: 0,
				sec: 0,
				value1: "",
				value2: "",
				num: 0,
				checkedColor: -1,
				checkedSize: -1,
				// buyNum: 0,
				arr: [],
				prod: {
					id: "",
					name: "",
					price: 0,
					color: "",
					size: "",
					num: 0
				}
			}
		},
		//监听数据变化
		watch:{
			checkedColor(){
				if(this.checkedColor<0){
					return this.if_click1.fill('')
				}
				var arr2 = this.colors[this.checkedColor].size.forEach((item2, index2) => {
					if(item2.num === 0) {
						this.if_click1[index2] = "disabled";
					}else {
						this.if_click1[index2] = "";
					}
				})
			},
			checkedSize() {
				if(this.checkedSize < 0) {
					return;
				}
			},
		},
		//组件创建完成发送请求checkedColorcheckedColorcheckedColor
		created() {
			console.log(this)
			this.getData()
		},
		methods: {
			getData() {
				this.$http
					.get('/static/data/detail.json')
					.then(({
						data
					}) => {
						console.log(data)
						this.swip1 = data.product[0];
						console.log(this.swip1, 1)
						this.swip2 = data.relatedProduct;
						console.log(this.swip2, 2)
						this.zhuanti = data.zhuanti;
						this.hotSale = data.hotSale;
						this.time = data.miaosha[0].time;
						this.click = data.product[0].size;
						this.colors = data.product[0].colors;
						console.log(this.colors[0].size,123);
						this.size =this.colors[0].size;
						console.log(this.colors[0].size,345);

						this.if_click1 = new Array(this.colors[0].size.length).fill("");
						console.log(this.if_click1);
						this.count();
					})
			},
			toggleColor(index){
				console.log(index);
				console.log(this.checkedColor);
// 				if(this.checkedColor=== index){
// 					return this.checkedColor=-1;
// 				}
// 				if(this.checkedSize>=0&&this.colors[index].size[this.checkedSize].num<=0){
// 					return 
// 				}
// 				this.checkedColor = index;
			},
			// 尺码
			toggleSize(index) {
				console.log(index);
				console.log(this.checkedSize)
// 				if(this.checkedSize === index) {
// 					return this.checkedSize = -1;
// 				}
// 				if( this.if_click1[index]) {
// 					return;
// 				}
				// this.checkedSize = index;
			},
			count() {
				// 返回该日期距离70-1-1的毫秒数
				const endTime = Date.parse(new Date(this.time));
				// console.log(endTime)
				const startTime = Date.parse(new Date());
				// console.log(startTime)
				const totalMsc = endTime - startTime;
				// console.log(totalMsc)
				let day = parseInt(totalMsc / 24 / 60 / 60 / 1000);
				let hor = parseInt(totalMsc / 1000 / 60 / 60 % 24);
				let min = parseInt(totalMsc / 1000 / 60 % 60);
				let sec = parseInt(totalMsc / 1000 % 60);
				this.day = day || "--";
				this.hor = hor || "--";
				this.min = min || "--";
				this.sec = sec || "--";
				// console.log(day, hor, min, sec)
				setTimeout(() => {
					this.count()
				}, 1000)
			},
			change_images(id) {
				switch (id) {
					case 0:
						this.s_images = this.swip1.img[0].img
						console.log(222)
						break;
					case 1:
						this.s_images = this.swip1.img[1].img
						break;
					case 2:
						this.s_images = this.swip1.img[2].img
						break;
					case 3:
						this.s_images = this.swip1.img[3].img
						break;
					case 4:
						this.s_images = this.swip1.img[4].img
						break;
				}
			},
			num_add() {
				this.num ++;
			
			},
			num_reduce() {
				this.num --;
				if(this.num <= 0) {
					this.num = 0;
				}
			},
			
		},
	}
</script>

<template>
	<div>
		<div class="shopcar">
			<div class="content" @click="toggleList">
				<div class="content-left">
					<div class="logo-warp">
						<div class="logo" :class="$store.state.count?'logo hasbuy':'logo'">
							<span class="glyphicon glyphicon-shopping-cart"></span>
						</div>
						<div class="num" v-show="$store.state.count>0">{{$store.state.count}}</div>
					</div>
					<div :class="$store.state.count?'price hasbuy':'price'">￥{{$store.state.allPrice}}元</div>
					<div class="distir">另需配送费￥{{deliveryPrice}}元</div>
				</div>
				<router-link to="/order" class="content-right" tag="div">
					<div class="pay" :class="payclass">
						{{distir}}
						</div>
				</router-link>
			</div>
		</div>
		<div class="shoplist" v-show="shopListIsShow" ref="shopListIsShow" @click="toggleList">
			<div class="shoplist-wrap">
				<div class="shoplist_head">
					<h2 class="title">购物车</h2>
					<h2 class="empty" @click="foodListEmty">清空</h2>
				</div>
				<div class="shoplist_content" ref="shopScroll">
					<ul>
						<li class="food" v-for="(item,index) in $store.state.foodsList">
							<span class="foodname">{{item.name}}</span>
							<span class="foodprice">￥{{item.price*item.count}}</span>
							<div class="buycontrol">
								<BuyControl :food="item"></BuyControl>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
</template>

<script>
	//引入购买控制组件
	import BuyControl from '../buycontrol/BuyControl';
	import BScroll from 'better-scroll';
	import Header from '../header/Header'
	export default {
		components:{BuyControl,BScroll,Header},
		props: ['deliveryPrice','minPrice','selectFoods'],
		data(){
			return {
				seller:[],
				allPrice:0,
				count:0,
				shopListIsShow:false
			}
		},
		created(){
			console.log(this)
		},
		methods:{},
		computed:{
			distir(){
				if(this.$store.state.allPrice===0){
					return  `￥${this.minPrice}元起送`;
				}else if(this.$store.state.allPrice < this.minPrice){
					let dis = this.minPrice-this.$store.state.allPrice;
					return `还差￥${dis}元起送`;
				}else{
					return `去结算`;
				}
			},
			payclass(){
				if(this.$store.state.allPrice < this.minPrice){
					return 'not-enougth';
				}else{
					return 'enougth'
				}
			},
			//判断 count 是否存在 如果存在 shopListIsShow为true 否则为false
			isShow(){
				if(this.$store.state.count===0){
					this.shopListIsShow= false;
					return false  ;
				}
			}
		},
		methods:{
			toggleList(){
				//如果没有有数量 返回
				if(this.$store.state.count===0){
					this.shopListIsShow= false;
					return ;
				}
				this.shopListIsShow= !this.shopListIsShow;
				//初始化
				if(this.shopListIsShow){
					if(!this.shopScroll){
					this.$nextTick(()=>{
						this.shopScroll = new BScroll(this.$refs.shopScroll, {
						  click: true
						});
					})
					}else{
						this.shopScroll.refresh();
					}
				}
				
			},
			foodListEmty(){
				//向store中 发送方法
				this.$store.commit('emptyFood');
				this.shopListIsShow= false;
				this.$router.go(0)
			}
		}
	}
	
</script>

<style type="text/css" lang="scss">
	.shopcar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		height: 48px;

		.content {
			display: flex;
			background: #141d27;
			color: #909496;

			.content-left {
				flex: 1;
				display: flex;

				.logo-warp {
					position: relative;
					top: -10px;
					margin: 0 12px;
					padding: 6px;
					width: 56px;
					height: 56px;
					box-sizing: border-box;
					border-radius: 50%;
					background: #141d27;

					.logo {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						text-align: center;
						background: #2b343c;

						&.hasbuy {
							background: #00A0DC;
							color: #fff;

							.glyphicon {
								color: #fff;

							}
						}

						.glyphicon {
							line-height: 44px;
							font-size: 24px;
							color: #80858a;
						}

					}

					.num {
						position: absolute;
						top: 0;
						right: 0;
						width: 24px;
						height: 16px;
						line-height: 16px;
						text-align: center;
						border-radius: 16px;
						font-size: 9px;
						font-weight: 700;
						color: #fff;
						background: rgb(240, 20, 20);
						box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
					}
				}

				.price {
					vertical-align: top;
					margin: 12px 0 12px 0;
					line-height: 24px;
					padding-right: 12px;
					box-sizing: border-box;
					border-right: 1px solid rgba(255, 255, 255, 0.1);
					font-size: 16px;
					font-weight: 700;

					&.hasbuy {
						color: #fff;
					}

				}

				.distir {
					margin: 12px 0 0 12px;
					line-height: 24px;
					font-size: 10px;
				}
			}

			.content-right {
				width: 105px;
				background-color: #2B343B;
				line-height: 48px;
				text-align: center;

				.pay {
					font-size: 12px;
					font-weight: 700;

					&.not-enougth {
						background-color: #2B343B;
					}

					&.enougth {
						background-color: #00b43c;
						color: #fff;

					}
				}
			}
		}
	}
		.shoplist {
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			z-index:0;
			width: 100%;
			background: rgba(0, 0, 0, .3);

			.shoplist-wrap {
				position: absolute;
				width: 100%;
				bottom: 40px;
				background: #fff;

				.shoplist_head {
					height: 40px;
					line-height: 40px;
					padding: 0 18px;
					background: #f3f5f7;
					padding: 10px 20px;
					;
					border-bottom: 1px solid rgba(7, 17, 27, 0.1);
					line-height: 40px;

					.title {
						float: left;
						color: rgb(7, 17, 27);
						font-size: 14px;
					}

					.empty {
						float: right;
						font-size: 12px;
						color: rgb(0, 160, 220)
					}
				}

				.shoplist_content {
					padding: 10px 20px;
					max-height: 217px;
					overflow: hidden;

					.food {
						position: relative;
						padding: 12px 0;
						box-sizing: border-box;
						border: 1px solid rgba(7, 17, 27, .1);
						display: flex;

						.foodname {
							line-height: 24px;
							font-size: 14px;
							color: rgb(7, 17, 27);
							flex: 1;
						}

						.foodprice {
							line-height: 24px;
							font-size: 14px;
							font-weight: 700px;
							color: rgb(240, 20, 20);
							margin-right: 20px;
						}

						.buycontrol {}

					}
				}
			}

		}
</style>

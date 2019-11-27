<template>
	<div>
		<Header></Header>
		<div class="seller-wrapper" ref="seller">
			<div class="scroll-content">
				<div class="seller-content">
					<div class="seller">
						<div class="seller-top">
							<div class="seller-left">
								<h1 class="title">{{seller.name}}</h1>
								<div class="detail">
									<div class="star-wrap">
										<star :size="48" :score="seller.serviceScore"></star>
									</div>
									<span>({{seller.ratingCount}})</span>
									<span>月售{{seller.sellCount}}单</span>
								</div>
							</div>
							<div class="seller-right">
								<div class="heart"><span :class="isFavoite?'glyphicon glyphicon-heart active':'glyphicon glyphicon-heart'"></span></div>
								<p class="text">{{isFavoite?'已收藏':'未收藏'}}</p>
							</div>
						</div>
						<div class="seller-bottom">
							<div class="item">
								<p class="isPrice">起送价</p>
								<p class="price">{{seller.minPrice}}
									<span>元</span>
								</p>
							</div>
							<div class="item">
								<p class="isPrice">商家配送</p>
								<p class="price">{{seller.deliveryPrice}}
									<span>元</span>
								</p>
							</div>
							<div class="item">
								<p class="isPrice">平均配送时间</p>
								<p class="price">{{seller.deliveryTime}}
									<span>分钟</span>
								</p>
							</div>
						</div>
					</div>
					<Splite></Splite>
					<div class="active">
						<h1 class="title"> 公告与活动</h1>
						<div class="active_content">
							<p>{{seller.bulletin}}</p>
						</div>
						<Support :supports="seller.supports"></Support>
					</div>
					<Splite></Splite>
					<div class="pics">
						<h1 class="title">商家实景</h1>
						<div class="pic-wrapper" ref="picWrapper">
							<ul class="pic-list" ref="picList">
								<li class="pic-item" v-for="pic in pics">
									<img :src="pic" width="120" height="90">
								</li>
							</ul>
						</div>
					</div>
					<Splite></Splite>
					<div class="info">
						<h1 class="title border-1px">商家信息</h1>
						<ul>
							<li class="info-item" v-for="info in seller.infos">{{info}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入Header
	import Header from '../components/header/Header';
	import Star  from '../components/star/Star';
	import Splite from '../components/splite/Splite';
	import Support from '../components/support/Support';
	// import Header from '../components/header/Header';
	import BScroll from 'better-scroll';
	export default {
		components:{ Star,Splite,Support,Header},
		data(){
			return {
				seller:[],
				isFavoite:true,
				pics:[],
			}
		},
		//组件创建完成 发送请求
		created(){
				//发送请求
				this.$http.get('/action/page/seller')
					.then(({data})=>{
						if(data.errno===0){
							this.seller= data.data[0];
							this.pics=data.data[0].pics
							//组件上树 初始化
								this._initScroll();
								this._initPics()
								
						}else{
							alert("获取数据失败");
							this.seller=[]
						}
					})
		},
		mounted(){
		},
		watch: {
		  'seller'() {
		    this._initScroll();
		    this._initPics();
		  }
		},
		methods:{
			_initScroll(){
				this.$nextTick(()=>{
					if(!this.scroll){
						this.scroll= new BScroll(this.$refs.seller,{
							click:true,
						})
					}else{
						this.scroll.refresh();
					}
				})
			},
			_initPics() {
				console.log(this.pics.length,112233455);
				if(this.pics){
					let picWidth=120;
					let margin =20;
					let width =(picWidth+margin)* this.pics.length+margin;
					this.$refs.picList.style.width= width+'px';
					console.log(this.$refs.picList.style.width)
					this.$nextTick(() => {
					  if (!this.picScroll) {
					    this.picScroll = new BScroll(this.$refs.picWrapper, {
					      scrollX: true,
					      eventPassthrough: 'vertical',
					    });
					  } else {
					    this.picScroll.refresh();
					  }
					});
				}
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.seller-wrapper {
		position: absolute;
		left: 0;
		top: 170px;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background: #fff;

		.scroll-content {
			.seller-content {
				padding: 18px;

				.seller {
					.seller-top {
						display: flex;
						border-bottom: 1px solid rgba(7, 17, 27, 0.1);
						height: 80px;

						.seller-left {
							flex: 1;

							.title {
								margin-bottom: 8px;
								line-height: 14px;
								color: rgb(7, 17, 27);
								font-size: 14px;
							}

							.detail {
								display: flex;
								padding-bottom: 18px;

								.star-wrap {
									margin-right: 8px
								}

								span {
									margin-right: 12px;
									line-height: 18px;
									font-size: 10px;
									color: rgb(77, 85, 93);
								}
							}
						}

						.seller-right {
							width: 50px;
							text-align: center;
							position: relative;

							// top: -15px;
							.heart {
								.glyphicon {
									font-size: 24px;
									line-height: 24px;
									color: #d4d6d9;

									&.active {
										color: rgb(240, 20, 20)
									}
								}
							}

							.text {
								line-height: 10px;
								font-size: 10px;
								color: rgb(77, 85, 93);
								padding-top: 6px;
							}
						}
					}

					.seller-bottom {
						display: flex;
						padding: 6px 0 6px 24px;

						.item {
							width: 33.33%;
							text-align: center;
							padding-top: 10px;
							border-right: 1px solid rgba(7, 17, 27, 0.1);

							&:last-child {
								border: none
							}

							.isPrice {
								margin-bottom: 4px;
								line-height: 10px;
								font-size: 10px;
								color: rgb(147, 153, 159);
							}

							.price {
								line-height: 24px;
								font-size: 24px;
								color: rgb(7, 17, 27);
								padding-top: 6px;
								;

								span {
									font-size: 10px;
								}
							}
						}
					}
				}

				.active {
					padding: 18px 18px 0 18px;

					.title {
						margin-bottom: 8px;
						line-height: 18px;
						color: rgb(7, 17, 27);
						font-size: 14px;
						font-weight: 700;
					}

					.active_content {
						padding: 0 12px 16px 12px;
						border-bottom: 1px solid rgba(7, 17, 27, 0.1);
						font-size: 12px;
						line-height: 20px;
						color: #EE0E0E;
					}

					.supports {
						background: #fff;
						margin: 0 0;
						padding-left: 0;
						width: 100%;

						.support-item {
							border-bottom: 1px solid rgba(7, 17, 27, 0.1);
							padding: 16px 12px;

							&:last-child {
								border: none;
							}

							.icon {
								width: 16px;
								height: 16px;
								margin-right: 6px;
								vertical-align: middle;
							}
						}
					}
				}

				.pics {
					padding: 18px;
					background: #fff;

					.title {
						margin-bottom: 12px;
						line-height: 14px;
						color: rgb(7, 17, 27);
						font-size: 14px;
					}

					.pic-wrapper {
						width: 100vw;
						position: relative;
						left: 0px;

						.pic-list {
							height: 100px;
							overflow: hidden;

							.pic-item {
								float: left;
								margin-left: 20px;
							}
						}
					}


				}

				.info {
					padding: 18px 18px 20px 18px;
					margin-bottom: 20px;
					color: rgb(7, 17, 27);
					background: #fff;

					.title {
						padding-bottom: 12px;
						line-height: 14px;
						border-bottom: 1px solid rgba(7, 17, 27, 0.1);
						font-size: 14px;
					}

					.info-item {
						padding: 16px 12px;
						line-height: 16px;
						border-bottom: 1px solid rgba(7, 17, 27, 0.1);
						font-size: 12px;

						&:last-child {
							border: none;
						}
					}
				}
			}
		}
	}
</style>

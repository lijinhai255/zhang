<template>
	
		<div class="goodheader">
			<div class="content">
				<div class="content_logo">
					<img v-if="seller.avatar"  alt="" width="64" height="64" :src="seller.avatar"/>
				</div>	
				<div class="content_content">
						<div class="title">
							<span class="brand"></span>
							<span class="name">	{{seller&& seller.name}}</span>
						</div>
						<div class="description">
						  {{seller.description}}/{{seller.deliveryTime}}分钟送达
						</div>
						<div v-if="seller.supports" class="support">
							<span class="icon" :class="classMap[seller.supports[0].type]"></span>
							<span class="text">{{seller.supports[0].description}}</span>
							<span class="count" @click="showDetail">{{seller.supports.length}}个 <i class="glyphicon glyphicon-chevron-right"></i></span>
						</div>
					</div>
				</div>
				<div class="advert">
					<span class="advert_1"></span>
					<span class="advert_2">{{seller.bulletin}}</span>
					<span class="advert_3" @click="showDetail" > <i class="glyphicon glyphicon-chevron-right"></i></span>
				</div>
				<div class="background">
					<img v-if="seller.avatar" :src="seller.avatar" alt=""/>
				</div>
				<transition name="demo">
					<div class="detail" v-show="isShow" transition="fade">
					<div class="detail-wrapper clearfix">
						<div class="detail-main">
							<h1 class="name">{{seller.name}}</h1>
							<div class="star-wrapper">
								<star :size="48" :score="seller.score"></star>
							</div>
							<div class="title">
								<div class="line"></div>
								<div class="text">优惠信息</div>
								<div class="line"></div>
							</div>
							<!-- 支持活动 -->
							<Support :supports="seller.supports"></Support>
							 <div class="title">
							 	<div class="line"></div>
							 	<div class="text">公告信息</div>
							 	<div class="line"></div>
							 </div>
							 <p class="bulletin">{{seller.bulletin}}</p>
						</div>
					</div>
					<div class="detail-close" @click="e=>this.isShow=false"><i class="glyphicon glyphicon-remove"></i></div>
				</div>
				</transition>
			</div>
		</div>
</template>

<script>
	import star from '../star/Star';
	import Support from '../support/Support'
	export default {
		components:{ star,Support},
		// props: ['seller',],
		data(){
			return {
				classMap:['decrease','discount','guarantee','invoice','special'],
				isShow:false,
				seller:{}
			}
		},
		methods:{
			showDetail(){
				this.isShow=true;
			}
		},
		created() {
			this.$http.get('/action/page/seller')
					 .then(({data})=>{
						 
						 if( data.errno===0){
							 
							 this.seller = data.data[0];
							 
						 }else{
							 
							 alert("获取数据失败");
							 
							 this.seller={}
						 }
					 })	
		}
	}
</script>

<style type="text/css" lang="scss">
	@import '../../base.scss';
	.goodheader{
		position: relative;
		color:#fff;
		background: rgba(0, 0, 0, 0.5);
		overflow: hidden;
		.content{
			padding: 24px 12px 18px 24px;
			display: flex;
			position: inherit;
			z-index: 1;
			.content_logo{
				width:64px;
				height: 64px;
				display: inline;
				img{
					border-radius: 2px;

				}
			}
			.content_content{
				padding-left: 14px;
				font-size: 14px;
				width: 100%;
				.title{
					margin: 2px 0 8px 0;
					display: flex;
					.brand{
						width: 30px;
						height: 18px;
						// @include ellipsis;
						background-image: url('/img/header/brand@2x.png');
						background-size: 30px 18px;
						background-repeat: no-repeat;
					}
					.name{
						margin-left: 6px;
						font-size: 16px;
						line-height: 18px;
						font-weight: border;
					}
				}
				.description{
					margin-bottom:10px;
					line-height: 12px;
					font-size: 12px;
				}
				
			}
		}
		.advert{
			display: flex;
			font-size: 10px;
			height: 28px;
			line-height: 28px;
			padding: 0 22px 0 12px;
			background-color: rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
			.advert_1{
				width:22px;
				height: 28px;
				background-image: url('/img/header/bulletin@2x.png');
				background-size: 22px 12px;
				background-repeat: no-repeat;
				background-position: left center;

			}
			.advert_2{
				font-size: 10px;
				padding-left: 8px;
				@include ellipsis;
				flex: 1;
			}
		}
		.background{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			filter: blur(10px);
			img{
				width: 100%;
				height: 100%;
			}
		}
		.detail{
			position: fixed;
			z-index: 110;
			top:0;
			left: 0;
			width:100%;
			height: 100%;
			overflow: auto;
			transition:all 0.5s;
			backdrop-filter: blur(10px);
			background: rgba(7, 17, 27, 0.8);
			.detail-wrapper{
				min-height: 100%;
				width: 100%;
				.detail-main{
					margin-top: 64px;
					padding-bottom:64px;
					.name{
						font-size: 16px;
						text-align: center;
						line-height: 16px;
					}
					.star-wrapper{
						margin-top: 16px;
						padding: 2px 0;
						text-align: center;
					}
					.title{
						display: flex;
						width: 80%;
						margin: 28px auto 24px auto;
						.line{
							flex: 1;
							position: relative;
							top:-6px;
							border-bottom: 1px solid rgba(255,255,255,.2);
						}
						.text{
							padding: 0 12px;
							font-weight: 700px;
							font-size: 14px;
						}
					}

					.bulletin{
						width: 80%;
						margin: 0 auto;
						padding-left: 24px;
						padding-right: 24px;
						box-sizing: border-box;
						font-size:14px;
						color: rgb(255,255,255);
						line-height: 24px;
					} 
				}
			}
			.detail-close{
				position: relative;
				width: 32px;
				height: 32px;
				margin: -64px auto 0 auto;
				clear: both;
				.glyphicon{
				font-size: 32px;
				}
			}
		}
		.demo-enter,.demp-leave-to{
			opacity: 0;
		}
		.demo-leave,.demp-enter-to{
			opacity: 1;
		}
		.demo-enter-active,
		.demo-leave-avtive{
			transition: all 1s;
		}
		
	}
</style>

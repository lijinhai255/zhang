<template>
	<div  >
	<transition name="move">
	<div v-show="isShow" class="food" ref='move'>
		<div class="food-content">
			<div class="img-header">
				<img :src="food.image">
				<div class="back-wrap" @click.stop.prevent="e=>isShow=false">
					<i class="glyphicon glyphicon-chevron-left"></i>
				</div>
			</div>
			<div class="content">
				<h1 class="title">{{food.name}}</h1>
				<div class="detail">
					<span class="content-sell">月售{{food.sellCount}}</span>
					<span class="content-rating">好评率{{food.rating}}</span>
				</div>
				<div class="price">
					<span class="now">{{food.price}}</span>
					<span class="old">{{food.oldPrice}}</span>
				</div>
				<div class="buycontrol-wrapper"  v-show="food.count>=1">
				<BuyControl :food='food'></BuyControl>
				</div>
				<div class="buy" v-show="!food.count||food.count===0" @click.stop.prevent="addFirst" >
					加入购物车
				</div>
			</div>
			<Splite v-show="food.info"></Splite>
			<div class="info" v-show="food.info">
				<h1 class="title">商品信息</h1>
				<p class="text">
					{{ food.info}}
				</p>
			</div>
			<Splite ></Splite>
			<div class="reating">
				<h1 class="title">商品评价</h1>
				<ReatingSelect :selectType="selectType" :onlyContent="onlyContent" :desc="desc"
                      :ratings="food.ratings">
				</ReatingSelect>
				<ReatingItem :reatings="food.ratings"></ReatingItem>
			</div>
		</div>
	</div>
	</transition>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import BuyControl from '../buycontrol/BuyControl';
	import Splite from '../splite/Splite';
	import ReatingItem from '../reatingitem/ReatingItem'
	import ReatingSelect from '../reatingselect/ReatingSelect';
	import { formatDate} from '../../tool/data.js';
	export default {
		props:['food'],
		components:{BScroll,BuyControl,Splite,ReatingSelect,ReatingItem},
		data(){
		 return {
		 isShow:false,
		 selectType: '1',
		 onlyContent: true,
		 desc: {
		  all: '全部',
		  positive: '推荐',
		  negative: '吐槽'
		 }
		 }	
		},
		created(){
		},
		methods:{
			show(){
				this.isShow=true;
				this.selectType='2';
				this.onlyContent= true;
				//初始化 BScroll
				this.$nextTick(() => {
				  if (!this.scroll) {
				    this.scroll = new BScroll(this.$refs.move, {
				      click: true
				    });
				  } else {
				    this.scroll.refresh();
				  }
				});
			},
			//实现的功能：
			//1、将传过来的数据对象属性count加一
			//2、发送store方法 
			addFirst(event){
				 if (!event._constructed) {
				  return;
				}
				this.$set(this.food, 'count', 1);
				console.log(this.food);
				this.$store.commit('addFood',this.food)
			},
			filters: {
				formatDate(time) {
			    let date = new Date(time);
			    return formatDate(date, 'yyyy-MM-dd hh:mm');
			  }
		}
	},
	}
</script>

<style type="text/css" lang="scss">
	.food{
		position:fixed;
		top:0;
		bottom:48px;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 30;
		&.move-enter-active,
		&.move-leave-active{
			 transition: all 0.2s linear;
			transform: translate3d(0, 0, 0);
		}
		&.move-enter,&.move-leaver-to{
			transform: translate3d(-100%, 0, 0)
		}
		.food-content{
			.img-header{
				position:relative;
				width:100%;
				height: 0;
				padding-top: 100%;
				img{
					position: absolute;
					top:0px;
					left:0px;
					width:100%;
					height: 100%;
				}
				.back-wrap{
					position: absolute;
					top:10px;
					left: 10px;
					.glyphicon{
						color: #efefef;
						padding: 20px;
						font-size: 20px;
						;
					}
				}
			}
			.content{
				padding: 18px 20px ;
				position: relative;
				.title{
					line-height: 14px;
					padding-bottom: 8px;
					font-size: 14px;
					font-weight: 700;
					color:rgb(7,17,27)
				}
				.detail{
					margin-bottom: 18px;
					line-height: 10px;
					height: 10px;
					font-size: 0;
					.content-sell,.content-rating{
						font-size: 10px;
						color: rgb(146,153,159);
					}
					.content-sell{
						margin-right: 12px;
					}

				}
				.price{
					font-weight: 700;
					layout-flow: 24px;
					.now{
						margin-right: 8px;
						font-size: 14px;
						color: rgb(240, 20, 20);
					}
					.old{
						text-decoration: line-through;
						font-size: 10px;
						color: rgb(147, 153, 159);
					}
				}
				.buycontrol-wrapper{
				position: absolute;
				right: 12px;
				bottom: 12px;
				}
				.buy{
					position: absolute;
					right: 18px;
					bottom: 18px;
					z-index: 10;
					height: 24px;
					line-height: 24px;
					padding: 0 12px;
					box-sizing: border-box;
					border-radius: 12px;
					font-size: 10px;
					color: #fff;
					background: rgb(0, 160, 220);
				}
			}
			.info{
				padding: 18px;
				.title{
					line-height: 14px;
					margin-bottom: 6px;
					font-size: 14px;
					color: rgb(7, 17, 27)
				}
				.text{
					line-height: 24px;
					padding: 0 8px;
					font-size: 12px;
					color: rgb(77, 85, 93)
				}
			}		
			.reating{
				padding-top: 18px;
				color:#fff;
				.title{
					line-height: 14px;
					margin-left: 18px;
					font-size: 14px;
					color: rgb(7, 17, 27);
				}

			}
		}
		
	}
</style>
//父组件是可以条用子组件的方法
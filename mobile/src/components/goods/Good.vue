<template>
	<div>
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper" >
				<ul>
					<li v-for="(item,index) in goods" class="menu-item" 
					:class="index===currentIndex?'current':''" @click="selectMenu(index,$event)" >
						<span class="text">
							<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
							{{item.name}}
						</span>
					</li>
				</ul>
			</div>
			 <div class="foods-wrapper" ref="foodWrapper">
			  <ul>
			    <li v-for="item in goods" class="food-list food-list-hook" >
			      <h1 class="title">{{item.name}}</h1>
			      <ul>
			        <li  v-for="food in item.foods" class="food-item" @click="selectFood(food)">
			          <div class="icon">
			            <img width="57" height="57" :src="food.icon">
			          </div>
			          <div class="content">
			            <h2 class="name">{{food.name}}</h2>
			            <p class="desc">{{food.description}}</p>
			            <div class="extra">
			              <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
			            </div>
			            <div class="price">
			              <span class="now">￥{{food.price}}</span>
						  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
			            </div>
			            <div class="BuyControl-wrapper">
			              <BuyControl :food="food"></BuyControl>
			            </div>
			          </div>
			        </li>
			      </ul>
			    </li>
			  </ul>
			</div>
			<ShopCar ></ShopCar>
			<Food :food="selectedFood" ref="food"></Food>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import ShopCar from '../shopcar/ShopCar';
	//引入 BuyControl 组件
	import BuyControl from '../buycontrol/BuyControl';
	//引入商品组件
	import Food from '../food/Food';
	console.log(Food);
	export default {
		// 注册
		components:{ShopCar,BuyControl,Food},
		data(){
			return {
				goods:[],
				classMap:['decrease','discount','guarantee','invoice','special'],
				meunScroll:()=>{},
				foodsScroll:()=>{},
				listHeight:[],
				scrollY:0,
				selectedFood:{}
			}
		},
		//创建获取数据方法
		methods:{
			getFood(){
				this.$http.get('/action/page/goods')
						 .then(({data})=>{
							 if( data.errno===0){
								 this.goods = data.data;
								 this.$nextTick(()=>{
									 this.initScroll();
									 this.claulateHeight();
								 });
							 }else{
								 alert("获取数据失败");
								 
								 this.goods=[]
							 }
						 })
			},
			initScroll() {
				this.meunScroll = new BScroll(this.$refs.menuWrapper, {
				  click: true
				});
				this.foodsScroll = new BScroll(this.$refs.foodWrapper, {
				  click: true,
				  probeType: 3
				});
				this.foodsScroll.on('scroll',(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y)) ;
				})
			},
			claulateHeight(){
				let foodsList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
				let height= 0;
				this.listHeight.push(height);
				//将 foodsList 遍历 
				for( let i =0; i<foodsList.length; i++){
					let item = foodsList[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},
			selectMenu(index, event) {
				if (!event._constructed) {
			    return;
				}
				let foodList =this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
				let el = foodList[index];
				this.foodsScroll.scrollToElement(el, 300);
			},
			selectFood(food) {
				this.selectedFood=food;
				this.$refs.food.show()
			}
			   
			
		},
		//组件创建完成 发送请求
		computed:{
			currentIndex() {
			  for (let i = 0; i < this.listHeight.length; i++) {
			    let height1 = this.listHeight[i];
			    let height2 = this.listHeight[i + 1];
			    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
			      return i;
			    }
			  }
			  return 0;
			},
		},
		created(){
			this.getFood();
		},
		//监听路由的变化
		watch:{
			//路由变化
			$route(){
				this.getFood();
			}
		},
	}
</script>

<style type="text/css" lang="scss" >
	.goods{
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			width: 80px;
			background: #f3f5f7;
			.menu-item{
				display: table;
				height: 54px;
				width: 78px;
				line-height: 14px;
				padding: 0 12px;
				&.current{
					position: relative;
					margin-top: -1px;
					background: #fff;
					.text{
						font-weight: 700;
					}
				}
				.text{
					border-bottom: 1px solid rgba(7, 17, 27, 0.1);
					display: table-cell;
					font-size: 12px;
					vertical-align: middle;
					.icon{
						width:12px;
						height: 12px;
						display: inline-block;
						background-size: 12px 12px;
						background-repeat: no-repeat;
						&.decrease{
							background-image: url('/img/goods/decrease_3@2x.png');
						}
						&.discount{
							background-image: url('/img/goods/discount_3@2x.png');
						}
						&.guarantee{
							background-image: url('/img/goods/guarantee_3@2x.png');
						}
						&.invoice{
							background-image: url('/img/goods/invoice_3@2x.png');
						}
						&.special{
							background-image: url('/img/goods/special_3@2x.png');
						}
					
					}
					
				}
			}
		}
		.foods-wrapper{
			flex: 1;
		.food-list{
				background-color: #fff;
				.title{
					padding-left: 14px;
					height: 26px;
					line-height: 26px;
					border-left: 2px solid #d9dde1;
					font-size: 12px;
					color: rgb(147,153,159);
					background: #f3f5f7;
				}
				.food-item{
					display: flex;
					margin: 18px;
					padding-bottom: 18px;
					border-bottom: 1px solid rgba(7, 17, 27, 0.1);
					&:last-child{
						border: none;
						margin-bottom: 0px;
					}
					.icon{
						width: 57px;
						margin-right: 10px;
					}
					.content{
						flex:1;
						position: relative;
						.name{
							margin: 2px 0 8px 0;
							height: 14px;
							line-height: 14px;
							font-size: 14px;
							color: rgb(7,17,27)
						}
						.desc, .extra{
							line-height: 10px;
							font-size: 10px;
							color: rgb(147,153,159);
						}
						.desc{
							line-height: 12px;
							margin-bottom: 8px;
						}
						.extra{
							.count{
								margin-right: 12px;
								
							}
						}
						.price{
							font-weight: 700;
							line-height: 24px;
							.now{
								margin-right: 8px;
								font-size: 14px;
								color: rgb(240,20,20);
							}
							.old{
								text-decoration: line-through;
								font-size: 10px;
								color: rgb(147, 153, 159);
							}
						}
						
						.BuyControl-wrapper{
							position: absolute;
							right: 0px;
							bottom:12px;
							line-height: 30px;
						}
						
					}
				}
			
		}
		}
	}
</style>

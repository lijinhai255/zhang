<template>
	<div>
	<Header></Header>
	<div class="ratings" ref='move'>
		<div class="ratings-wrap" >
			<div class="rating-seller">
				<div class="seller-left">
					<h1>{{seller.score}}</h1>
					<p class="title">综合评分</p>
					<p class="rank">高于周边商家{{seller.rankRate}}</p>
				</div>
				<div class="seller-right">
					<div class="item">
						<p class="title">综合评分</p>
						<p class="star-wrap">
							<star :size="48" :score="seller.score"></star>
						</p><span class="text">{{seller.score}}</span>
					</div>
					<div class="item">
						<p class="title">送达评分</p>
						<p class="star-wrap">
							<star :size="48" :score="seller.serviceScore"></star>
						</p><span class="text">{{seller.serviceScore}}</span>
					</div>
					<div class="item">
						<p class="title">食物评分</p>
						<p class="star-wrap">
							<star :size="48" :score="seller.foodScore"></star>
						</p><span class="text">{{seller.foodScore}}</span>
					</div>
					<div class="item">
						<p class="title">送达时间</p><span class=" text text_ts">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<Splite></Splite>
			<ReatingSelect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="ratings">
			</ReatingSelect>
			<ReatingItem :reatings="ratings"></ReatingItem>
		</div>
	</div>
	</div>
</template>

<script>
	//引入星星组件
	import Star from "../components/star/Star";
	//引入分割组件
	import Splite from '../components/splite/Splite'
	//引入reatingsselect
	import ReatingSelect from '../components/reatingselect/ReatingSelect';
	//引入reatingItem
	import ReatingItem from '../components/reatingitem/ReatingItem';
	import BScroll from 'better-scroll';
	import Header from '../components/header/Header'
	export default {
		components:{
			Header,
			Star,
			Splite,
			ReatingSelect,
			ReatingItem,
			BScroll
		},
		data(){
			return {
				ratings:[],
				seller:[],
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
			this.$http.get('/action/page/rating')
						.then(({data})=>{
							if(data.errno==0){
								this.ratings=data.data
							}else{
								alert('获取数据失败');
								this.ratings=[];
							}
						});
			this.$http.get('/action/page/seller')
						.then(({data})=>{
							if(data.errno==0){
								this.seller=data.data[0];
								this.$nextTick(()=>{
									this.moveScroll();
								});
							}else{
								alert('获取数据失败');
								this.seller=[];
							}
						});
		},
		methods: {
			moveScroll() {
				
			}
		},
			
	}
</script>

<style type="text/css" lang="scss">
	.ratings {
		background: #fff;
		border-top: 1px solid rgba(7, 17, 27, 0.1);

		.rating-seller {
			padding: 18px 0;
			display: flex;

			.seller-left {
				width: 37%;
				padding: 6px 0;
				border-right: 1px solid rgba(7, 17, 27, 0.1);
				text-align: center;

				h1 {
					margin-bottom: 6px;
					line-height: 38px;
					font-size: 24px;
					color: rgb(255, 153, 0);
				}

				.title {
					margin-bottom: 8px;
					line-height: 12px;
					font-size: 12px;
					color: rgb(7, 17, 27);
				}

				.rank {
					line-height: 10px;
					font-size: 10px;
					color: rgb(147, 153, 159);
				}
			}

			.seller-right {
				flex: 1;
				padding: 6px 0 6px 24px;

				.item {
					display: flex;
					margin-bottom: 8px;
					font-size: 0;

					.title,
					.text {
						display: inline-block;
						line-height: 20px;
						font-size: 14px;
						color: rgb(7, 17, 27);
						padding-right: 10px;
						font-weight: 700;
					}

					.text {
						padding-left: 10px;
						color: rgb(255, 153, 0);

					}

					.text_ts {
						color: #94989B;
					}
				}
			}
		}
	}
</style>

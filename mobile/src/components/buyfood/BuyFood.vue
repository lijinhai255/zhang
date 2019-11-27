<template>
	<!-- div.app-card>img+div.content>h2+p>span.sales+span.price+span.buy -->
	<div class="app-card">
		<img :src="data.image" alt=""/>
		<div class="content">
			<h2>{{data.name}}</h2>
			<p>
				<span class="sales">总共{{data.sales}}人已购买</span>
				<span class="price">￥{{data.price}}</span>
				<span :class="this.data.hasbuy?' buy has-buy':'buy'"  @click="buyLesson">{{this.data.hasbuy?'取消':'购买'}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:['data'],
		
		mounted(){
		},
		methods:{
			buyLesson(){
				this.$store.commit(this.data.hasbuy?'removeLesson':'addLeson',this.data)
				// 添加hasbuy属性
				this.$set(this.data,'hasbuy',!this.data.hasbuy);
			}
		}
	}
</script>

<style type="text/css" lang="scss">
// @import '../base.scss'	;
	.app-card{
		border-radius: 10px;
		background-color: #fff;
		overflow: hidden;
		margin-bottom: 10px;
		img{
			width: 100%;
			
		}
		.content{
			padding: 20px 10px 15px;
			h2{
				// @include ellips;
				font-size: 22px;
				margin: 0;
				padding-bottom: 10px;
			}
			p{
				font-size: 16px;
				display: flex;
				.sales{
					flex:1;
				}
				.price{
					color:#f30;
					font-size: 16px;
				}
				.buy{
					background-color: #f30;
					padding: 4px 8px;
					color: #ffffff;
					font-size: 16px;
					margin-left: 10px;
					border-radius: 6px;
					margin-top: -4px;
				}
				.has-buy{
					background-color: #ccc;
					
				}
			}
		}
	}
</style>

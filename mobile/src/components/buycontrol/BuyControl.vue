<template>
	<div class="buyctl">
		<!-- v-show="food.count>0" -->
		<div class="decress" v-show="food.count>0"@click.stop.prevent="decreaseCart" >
			<span class="glyphicon glyphicon-minus"></span>
		</div>
		<div class="count" v-show="food.count>0" >{{food.count}}</div>
		<div class="add" @click.stop.prevent="addFood">
			<span class="glyphicon glyphicon-plus"></span>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		 props:['food'],
		 deta(){
			 return {
				 foodList:[{price:1}],
			 }
		 },
		methods:{
			addFood(event){
				// if (!event._constructed) {
				//   return;
				// }
				if (!this.food.count) {
				  this.$set(this.food, 'count', 1);
				} else {
				  this.food.count++;
				}
				this.$store.commit('addFood',this.food)
			},
			decreaseCart(event) {
				// console.log(this);
			  // if (!event._constructed) {
			  //   return;
				// }
				// console.log(this);
			  if (this.food.count) {
			    this.food.count--;
				}
				// console.log(this.food.count);
			  this.$store.commit('decFood',this.food);
			}
		},
	}
</script>

<style type="text/css" lang='scss'>
	.buyctl{
		display: flex;
		text-align: center;
		span{
			padding: 6px;
			background: #00A1DC;
			border-radius: 50%;
		}
		.glyphicon{
			color:#fff;
			font-size: 12px;
			&:before{
				position: relative;
				left:0px;
			}
		}
		.add{
			margin-left: 10px;
			.glyphicon{
				border: 2px solid #00A1DC;
				
			}
		}
		.decress{
			margin-right: 10px;
			.glyphicon{
				background: #fff;
				border: 2px solid #00A1DC;
				color: #00A1DC;
				box-sizing: border-box;
			}
		}
		.count{
			line-height: 30px;;
		}
	}
</style>

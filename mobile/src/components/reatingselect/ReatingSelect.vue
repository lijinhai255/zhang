<template>
	<div class="reatingselect">
		<div class="reating-type">
			<span  @click="select(2,$event)" :class="selectType===2?'active_s allselect':'allselect'">
			{{desc.all}}
			<span class="num" ><!-- {{ratings.length===0||ratings.length===undefined?'0':ratings.length}} --></span>
			</span>
			<span   @click="select(1,$event)" :class="selectType===1?'active positive':'positive'">
			{{desc.positive}}
			<!-- <span class="num">{{positives.length===0||positives.length===undefined?'0':positives.length}}</span> -->
			</span>
			<span  @click="select(0,$event)" :class="selectType===0?'active negative':'negative'">
			{{desc.negative}}
			<!-- <span class="num">{{negatives.length===0||negatives.length===undefine?'0':negatives.length}}</span> -->
			</span>
		</div>
		<div class="switch" @click="allCount">
			<span  :class="onlyContent===true?'on glyphicon glyphicon-ok':'glyphicon glyphicon-ok' " ></span>
			<span class="text"> 只看有内容的评价</span>
		</div>
		
	</div>
</template>

<script>
	//定义常量 用于计算属性数据
	const POSITIVE = 0;
	const NEGATIVE = 1;
	export default {
		props:['desc','onlyContent','ratings'],
		data(){
			return{
				selectType:2
			}
		},
		methods:{
			select(type,event){
				if (!event._constructed) {
				  return;
				}
				this.selectType=type;
				
			},
			allCount(){
				if (!event._constructed) {
				  return;
				}
				this.onlyContent = !this.onlyContent;
			}
		},
		computed:{
			positives(){
				if(this.ratings){
				return this.ratings.filter((item) => {
				  return item.rateType === POSITIVE;
				});
				}
			},
			negatives() {
			  if(this.ratings){
				 return this.ratings.filter((item) => {
				   return item.rateType === NEGATIVE;
				 }); 
			  }
			}
		},
	}
</script>
<style type="text/css" lang="scss">
	.reatingselect{
		.reating-type{
			padding: 18px 18px;
			border-bottom: 1px solid rgba(7, 17, 27, 0.1);
			span{
				padding: 8px 12px;
				margin-right: 8px;
				line-height: 16px;
				border-radius: 1px;
				font-size: 16px;
				color: #fff;
			}
			.num{
				font-size: 10px;
				padding: 0;
			}
			.allselect{
				background: rgba(0, 160, 220, 0.2);
				color:#000;
				&.active_s{
				background: #00A0DC;
				color: #fff;
				}
			}
			.positive{
				background: #CCECF7;
				color: #000;
				.num{
					color:#000000
				}
				&.active{
				background: #00A0DC;
				color: #fff
				}
			}
			.negative{
				background: #EAEBED;
				color: #475254;
				.num{
					color:#000000
				}
				&.active{
				background: #00A0DC;
				color: #fff
				}

			}
		}
		.switch{
				padding: 12px 18px;
				line-height: 24px;
				border-bottom: 1px solid rgba(7, 17, 27, 0.1);
				color: rgb(147, 153, 159);
				font-size: 0;
				display: flex;
				color: #000000;
				.on{
					color: #00c850
				}
				.glyphicon{
					font-size:14px;
					padding: 10px;
					background:#B8BBC0 ;
					color: #fff;
					border-radius: 50%;
				}
				.text{
					font-size:12px;
					margin-left: 10px;
					color: #9A9AA2;
					line-height: 36px;
				}
			}
	}
</style>

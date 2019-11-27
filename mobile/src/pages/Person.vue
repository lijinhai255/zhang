<template>
	<div>
		<div class="header"  :class="{'status':isH5Plus}">
			<div class="userinfo">
				<div class="face"><img :src="userinfo.face"/></div>
				<div class="info">
					<div class="username">{{userinfo.username}}</div>
					<div class="integral">积分:{{userinfo.integral}}</div>
				</div>
			</div>
			<div class="setting"><img src="/static/PersonalCenter/setting.png"></div>
		</div>
		<div class="orders">
			<div class="box">
				<div class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover"  @click="toOrderType(index)">
					<div class="icon"><div class="bag" v-if="row.badge>0">{{row.badge}}</div><img :src="'/static/PersonalCenter/'+row.icon"></div>
					{{row.name}}
				</div>
			</div>
		</div> 
		<div class="list" v-for="(list,list_i) in severList" :key="list_i">
			<div class="li" v-for="(li,li_i) in list" @click="toPage(li,li_i)"  :class="{'noborder':li_i==list.length-1}"  hover-class="hover" :key="li.name" >
				<div class="icon"><img :src="'/static/PersonalCenter/sever/'+li.icon"></div>
				<div class="text">{{li.name}}</div>
				<img class="to" src="/static/PersonalCenter/to.png">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				//#ifndef APP-PLUS
				isH5Plus:false,
				//#endif
				userinfo:{},
				orderTypeLise:[
					//name-标题 icon-图标 badge-角标
					{name:'待付款',icon:'l1.png',badge:1},
					{name:'待发货',icon:'l2.png',badge:2},
					{name:'待收货',icon:'l3.png',badge:6},
					{name:'待评价',icon:'l4.png',badge:9},
					{name:'退换货',icon:'l5.png',badge:0}
				],
				severList:[
					[
						{name:'我的收藏',icon:'point.png'},
						{name:'优惠券',icon:'quan.png'},
						{name:'红包',icon:'momey.png'},
						{name:'任务',icon:'renw.png'},
					],
					[
						{name:'积分明细',icon:'mingxi.png'},
						{name:'抽奖',icon:'choujiang.png'},
						{name:'收货地址',icon:'addr.png'},
						{name:'银行卡',icon:'bank.png'},
						{name:'安全中心',icon:'security.png'},
						{name:'在线客服',icon:'kefu.png'}
					]
				],
				linkObj:{
					1:'point',
					2:'quan',
					3:'momey',
					4:'renw',
					
				}
			};
		},
		created() {
			//加载
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'/static/PersonalCenter/face.jpeg',
					username:"VIP会员10240",
					integral:"1435"
				}		
			},
			//用户点击订单类型
			toOrderType(index){
				uni.showToast({title: this.orderTypeLise[index].name});
			},
			//用户点击列表项
			toPage(li,li_i){
				let arr = li.icon.split('.')[0];
				console.log(arr);
				this.$router.push('/'+arr+'');
				
			}
		}
	}
</script>

<style lang="scss">
page{background-color:#fff}
.header{
	&.status{padding-top:var(--status-bar-height);}
	background-color:#ff6364;width:92%;height:30vw;padding:0 4%;display:flex;align-items:center;
	.userinfo{
		width:90%;display:flex;
		.face{flex-shrink:0;width:15vw;height:15vw;
			img{width:100%;height:100%;border-radius:100%}
		}
		.info{
			display:flex;flex-flow:wrap;padding-left:30upx;
			.username{width:100%;color:#fff;font-size:40upx}
			.integral{display:flex;align-items:center;padding:0 20upx;height:40upx;color:#fff;background-color:rgba(0,0,0,0.1);border-radius:20upx;font-size:24upx}
		}
	}
	.setting{
		flex-shrink:0;width:6vw;height:6vw;
		img{width:100%;height:100%}
	}
}
.hover{background-color:#eee}
.orders{
	background-color:#ff6364;width:92%;height:11vw;padding:0 4%;margin-bottom:30px;display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top: -1upx;
	.box{
		width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:24upx;box-shadow:0 0 20upx rgba(0,0,0,0.15);margin-bottom:40upx;display:flex;align-items:center;justify-content:center;
		.label{
			display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#666666;font-size:26upx;
			.icon{
				position:relative;width:7vw;height:7vw;margin:0 1vw;
				.bag{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:20upx;color:#fff;display:flex;align-items:center;justify-content:center;z-index: 10;}
				img{width:7vw;height:7vw;z-index: 9;}
			}
		}
	}
}
.list{
	width:100%;border-bottom:solid 26px #f1f1f1;
	padding-top: 10px;
	.li{
		width:92%;height:100px;padding:0 4%;border-bottom:solid 1px #e7e7e7;display:flex;align-items:center;
	&.noborder{border-bottom:0}
		.icon{
			flex-shrink:0;width:50px;height:50px; margin-right: 10px;
			img{width:50px;height:50px}
		}
		.text{padding-left:20upx;width:100%;color:#666}
		.to{flex-shrink:0;width:40px;height:40px}
	}
}
</style>

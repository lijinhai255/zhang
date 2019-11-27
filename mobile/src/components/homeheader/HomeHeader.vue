<template>
<div class="homeheader">
	<div class="title">
		<div class="left" @click="()=>this.show=!this.show"><span class="glyphicon glyphicon-align-justify"></span></div>
		<div class="middle"><span class="glyphicon glyphicon-apple"></span></div>
		<div class="right"><span class="glyphicon glyphicon-search"></span></div>
	</div>
	<div class="mosk" v-show="show" @click="()=>this.show=!this.show" >
			<div class="mosk-content">
				<ul>
					<router-link v-for='(item, index) in nav' :to="item.link" tag="li" :key="index" >
						<span :class="item.iconame" class=" icon"></span>
					<span class="text">{{item.text}}</span></router-link>
				</ul>
			</div>
		
	</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:false,
				nav:[{text:'个人信息',iconame:'glyphicon glyphicon-user',link:'/person'},
				{text:'坚果Pro 2s',iconame:'glyphicon glyphicon-phone',link:'/'}, 
				{text:'坚果 R1',iconame:'glyphicon glyphicon-phone',link:'/'},
				{text:'坚果 TNT 工作站',iconame:'glyphicon glyphicon-apple',link:'/'},
				{text:'坚果3',iconame:'glyphicon glyphicon-phone',link:'/'},
				{ text:'坚果Pro 2',iconame:'glyphicon glyphicon-phone',link:'/'},
				{text:'8号旅行箱',iconame:'glyphicon glyphicon-lock',link:'/'},
				{text:'8号旅行商务箱',iconame:'glyphicon glyphicon-lock',link:'/'},
				{text:'Smarians OS',iconame:'glyphicon glyphicon-globe',link:'/'},
				{text:'应用',iconame:'glyphicon glyphicon-globe',link:'/'},
				{text:'论坛',iconame:'glyphicon glyphicon-globe',link:'/'},
				{text:'服务支持',iconame:'glyphicon glyphicon-globe',link:'/'},
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style type="text/css" lang="scss">
	.homeheader{
		width: 100%;
		height: 50px;
		background: #1A1A1A;
		color:#fff;
		font-size: 26px;
		line-height: 50px;
		.title{
			width: 100%;
			display: flex;
			.left{
			flex: 1;
			text-align: left;
			padding-left: 20px;
			}
			.middle{
			flex: 1;
			text-align: center;
			font-size: 30px;
			}
			.right{
			flex: 1;
			text-align: right;
			padding-right: 20px;
			}
		}
		.mosk{
			position: fixed;
			top:50px;
			left: 0;
			right: 0;
			bottom: 0;
			background: #000000;
			padding-top: 20px;
			color: #CCCCCC;
			z-index: 2;
			.mosk-content{
				ul{
					li{
						box-sizing: border-box;
						float: left;
						width: 25%;
						height: 3.6rem;
						padding: 0 1px 1px 0;
						text-align: center;
						position: relative;
						padding: 20px;
						margin-bottom: 20px;
						span{
							display: block;
						}
						.icon{
							height: 40px;
							font-size: 30px;
						}
						.text{
								display: block;
								color: #ddd;
								box-sizing: border-box;
								height: 100%;
								line-height: 1;
								font-size: 14px;
							}
					}
				}
			}
		}
	}
	
</style>
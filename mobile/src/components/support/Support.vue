<template>
	<ul v-if="supports" class="supports">
		<li class="support-item" v-for="(item, index) in supports" >
			<span class="icon" :class="classMap[supports[index].type]"></span>
			<span class="text">{{supports[index].description}}</span>
		</li>	
	</ul>
</template>

<script>
	export default {
		props:['supports'],
		data(){
			return {
				classMap:['decrease','discount','guarantee','invoice','special'],
				isShow:false
			}
		},
	}
</script>

<style type="text/css" lang="scss">
	.support{
		// display: flex;
		position: relative;
		.icon{
			width:12px;
			height: 12px;
			margin-right: 4px;
			background-size: 12px 12px;
			background-repeat: no-repeat;
			&.decrease{
				background-image: url('/img/header/decrease_1@2x.png');
			}
			&.discount{
				background-image: url('/img/header/discount_1@2x.png');
			}
			&.guarantee{
				background-image: url('/img/header/guarantee_1@2x.png');
			}
			&.invoice{
				background-image: url('/img/header/invoice_1@2x.png');
			}
			&.special{
				background-image: url('/img/header/special_1@2x.png');
			}
	
		}
		.text{
			line-height: 12px;
			font-size: 12px;
		}
		.count{
			position: absolute;
			right: 10px;
			padding: 0 8px;
			height: 24px;
			line-height: 24px;
			border-radius: 14px;
			background-color: rgba(7,17,27,.2);
			text-align: center;
			.count{
				font-size: 10px;
			}
			.glyphicon{
				font-size: 10px;
				font-weight: normal;
			}
			
		}
	}
						.supports{
		width: 80%;
		margin: 0 auto;
		padding-left: 24px;
		line-height: 24px;
		.support-item{
			vertical-align: top;
			.icon{
				display: inline-block;
				width:12px;
				height: 12px;
				margin-right: 4px;
				background-size: 12px 12px;
				background-repeat: no-repeat;
				&.decrease{
					background-image: url('/img/header/decrease_1@2x.png');
				}
				&.discount{
					background-image: url('/img/header/discount_1@2x.png');
				}
				&.guarantee{
					background-image: url('/img/header/guarantee_1@2x.png');
				}
				&.invoice{
					background-image: url('/img/header/invoice_1@2x.png');
				}
				&.special{
					background-image: url('/img/header/special_1@2x.png');
				}
			}
			.text{
				vertical-align: top;
				
				font-size: 10px;
			}
			
		}
		
		
	}
</style>

<template>
	<div class="rating-wrapper">
		<ul  >
			<li v-for="rating in reatings" class="rating-item">
				<div class="detail">
					<div class="time">
						<!-- {{rating.rateTime||formatDate}} -->
					</div>
					<div class="user">
						<span class="name">{{rating.username}}</span>
						<img :src="rating.avatar" alt="">
					</div>
				</div>
				<p class="text">
					<span :class="rating.rateType===0?'glyphicon glyphicon-thumbs-up':'glyphicon glyphicon-thumbs-down'"></span>
					<span >{{rating.text}}</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>


	export default {
		props:['reatings'],
		
	}
</script>

<style type="text/css" lang="scss">
	.rating-wrapper{
		padding: 0 18px;
		color: #000000;
		.rating-item{
			padding: 16px 0;
			border-bottom: 1px solid rgba(7, 17, 27, 0.1);
			.detail{
				display: flex;
				height: 10px;
				.time{
					flex: 1;
				}
				.user{
						display: flex;
						width:100px;
						text-align: right;
						height: 20px;
						line-height: 20px;
						.name{
							margin-right: 20px;
							color:#90979F;
						}
						img{
							height: 100%;
						}
						
					}
				
			}
			.text{
				display: flex;
				height: 30px;
				line-height: 30px;
				padding-top: 10px;
				.glyphicon{
					line-height: 30px;
					padding-right: 10px;;
				}
				.glyphicon-thumbs-up{
					color: #00A9E2;
			}	.glyphicon-thumbs-down{
					color: #B7BABF;
			}
				}
		}
		
	}
</style>

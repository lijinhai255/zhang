<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses " :class="itemClass"  class="star-item"></span>
	</div>
</template>

<script>
	const LENGTH = 5;
	const CLS_ON = 'on';
	const CLS_HALF = 'half';
	const CLS_OFF = 'off';
	export default {
		 props: {
		  size: {
		    type: Number
		  },
		  score: {
		    type: Number
		  }
		},
		created(){
		},
		computed:{
			starType(){
				return 'star-'+ this.size;
			},
			itemClasses() {
			  let result = [];
			  let score = Math.floor(this.score * 2) / 2;
			  let hasDecimal = score % 1 !== 0;
			  let integer = Math.floor(score);
			  for (let i = 0; i < integer; i++) {
			    result.push(CLS_ON);
			  }
			  if (hasDecimal) {
			    result.push(CLS_HALF);
			  }
			  while (result.length < LENGTH) {
			    result.push(CLS_OFF);
			  }
			  return result;
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.star{
		font-size: 0px;
		.star-item{
			display: inline-block;
			background-repeat: no-repeat;
		}
		&.star-48{
			.star-item{
				width: 20px;
				height: 20px;
				margin-right: 22px;
				background-size: 20px 20px;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					background-image: url('/img/star/star48_on@3x.png');
				}
				&.half{
					background-image: url('/img/star/star48_half@3x.png');
				}
				&.off{
					background-image: url('/img/star/star48_off@3x.png');
				}
				}
		}
		&.star-36{
			.star-item{
				width: 15px;
				height: 15px;
				margin-right: 22px;
				background-size: 15px 15px;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					background-image: url('/img/star/star36_on@3x.png');
				}
				&.half{
					background-image: url('/img/star/star36_half@3x.png');
				}
				&.off{
					background-image: url('/img/star/star36_off@3x.png');
				}
				}
		}
		&.star-24{
			.star-item{
				width: 10px;
				height: 10px;
				margin-right: 22px;
				background-size: 10px 10px;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					background-image: url('/img/star/star24_on@3x.png');
				}
				&.half{
					background-image: url('/img/star/star24_half@3x.png');
				}
				&.off{
					background-image: url('/img/star/star24_off@3x.png');
				}
				}
			
		}
	}
</style>

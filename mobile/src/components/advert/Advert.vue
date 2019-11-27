<template>
    <!-- 定义广告模块 -->
    <ul class="ad">
		<router-link v-for="(item, index) in ad" :key="index" :to="'/detail/' + item.id" tag="li">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'/static/mtmobile/img/ad/' + item.url" alt="">
		</router-link>
	</ul>
</template>
<style  type="text/css" lang="scss">
    .ad {
	display: flex;
	background: #fff;
	margin-top: 10px;
	li {
		flex: 1;
		padding: 15px 0;
		text-align: center;
		border-right: 1px solid #ccc;
		&:last-child {
			border-right: none;
		}
		h3 {
			font-size: 16px;
		}
		p {
			font-size: 12px;
			color: #666;
			padding: 5px 0;
		}
		img {
            width: 60%;
            display: inline-block;
            height: 60%;
		}
		// .color-0 {
		// 	color: red;
		// }
		// .color-1 {
		// 	color: green;
		// }
		// .color-2 {
		// 	color: purple;
		// }
		// 索引值
		$i: 0;
		// 枚举循环
		@each $item in red, green, purple {
			.color-#{$i} {
				color: $item;
			}
			// 更新索引值
			$i: $i + 1;
		}
	}
}
</style>

<script>
export default {
  data() {
    return {
      ad: [
        {
          title: "电影节礼包",
          description: "赢50元券",
          id: "1",
          url: "01.png"
        },
        {
          title: "10元毕业游",
          description: "学生过暑期",
          id: "2",
          url: "02.png"
        },
        {
          title: "旅拍跳楼价",
          description: "0元住城堡",
          id: "3",
          url: "03.png"
        }
      ]
    };
  }
};
</script>


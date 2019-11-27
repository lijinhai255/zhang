<template>
	<div class="carousel-wrap" id="carousel">
		<transition-group tag="ul" class="slide-ul" name="list">
			<!--注：v-bind:key=""添加 -->
			<li v-for="(item, index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
				<a :href="item.clickUrl">
					<img :src="item.image" :alt="item.desc">
				</a>
			</li>		
		</transition-group>
		<div class="carousel-items">
			<span v-for="(item, index) in slideList.length" :key="index" :class="{'active':index === currentIndex}" @mouseover="change(index)">
			</span>	
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		data() {
			return {
				slideList:[
					{
						'clickUrl':'#',
						'desc':'第一张图',
						'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768809049&di=db3755b56d5fc55ecffe158413ad067c&imgtype=0&src=http%3A%2F%2Fdigital.zol.com.cn%2F275_module_images%2F17%2F537dbbf398e85.jpg'
					},
					{
						'clickUrl':'#',
						'desc':'第二张图',
						'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768954029&di=bcfe0420283f1b6246098d145c45aa36&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D152895368%2C1538594464%26fm%3D214%26gp%3D0.jpg'
					},
					{
						'clickUrl':'#',
						'desc':'第三张图',
						'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768831649&di=dd845cba7b09274f11ad11be9f597596&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D4000770372%2C1569155497%26fm%3D214%26gp%3D0.jpg'						
					}
				],
				currentIndex:0,
				timer:''
			}
		},

		methods:{
			go() {
				this.timer = setInterval(() => {
					this.autoPaly()
				},2000)
			},
			autoPaly() {
				this.currentIndex++;
				if(this.currentIndex > this.slideList.length - 1) {
					this.currentIndex = 0
				}
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			}
		},
		// 注：
		// 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中。原因是什么呢，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
		// 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
		created() {
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.autoPaly()
				},2000)				
			})
		}
	}	
</script>

<style type="text/css">
 .carousel-wrap {
   height: 453px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}	
</style>
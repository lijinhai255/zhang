<template>
	<li class="nav-cart" @mouseenter="carShowhandle" @mouseleave="hideShowhandle">
		<a href="javascript:;" class="ball-rect">购物车</a>
		<!--根据class改变颜色-->
		<span class="cart-empty-num" :class="{'cart-num':count > 0}">
			<i>{{count}}</i>
		</span>
		<div class="nav-cart-wrapper" v-if="carShow">
			<div class="nav-cart-list">
				<div class="empty" v-if="count <= 0">
					<h3>购物车为空</h3>
					<p>您还没有选购任何商品，现在前往商城选购吧!</p>
				</div>
				<div class="full" v-else>
					<div class="nav-cart-items">
						<ul>
							<li class="clear" v-for="(item, index) in carPanelData">
								<div class="cart-item js-cart-item cart-item-sell">
									<div class="cart-item-inner">
										<div class="item-thumb">
											<img :src="item.ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'">
										</div>
										<div class="item-desc">
											<div class="cart-cell">
												<h4> 
													<a href="#/item/100027401">{{item.title}}</a>
												</h4>
												<p class="attrs">
													<span>{{item.spec_json.show_name}}</span>
												</p>
												<h6>
													<span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
												</h6>
											</div>
										</div>
										<div class="del-btn" @click="delCarpanelData(item.sku_id)">删除</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="nav-cart-total">
						<p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
						<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{price}}</span></h5>
						<h6>
							<router-link to="/Cart" class="nav-cart-btn">去购物车</router-link>
						</h6>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 初始状态,运动状态,结束状态,css用于是否显示 -->
		<transition name="ball"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:after-enter="afterEnter"
			v-bind:css="true"
		>
			<div class="addcart-mask" v-show="ball.show">
				<img class="mask-item" src="" alt="" />
			</div>
		</transition>

	</li>	
</template>

<script type="text/javascript">
	export default {
		computed: {
			carPanelData() {
				return this.$store.state.carPanelData
			},
			count() {
				return this.$store.getters.totleCount
			},
			price() {
				return this.$store.getters.totlePrice
			},
			carShow() {
				return this.$store.state.carShow
			},
			//控制小球的隐藏
			ball() {
				return this.$store.state.ball
			}
		},
		methods:{
			delCarpanelData(id) {
				this.$store.commit('delCarpanelData',id)
			},
			carShowhandle() {
				this.$store.commit('showCar')
			},
			hideShowhandle() {
				this.$store.commit('hideCar')
			},
			//运动三状态的方法
			beforeEnter(el) {
				//初始状态获取小球的位置
				let rect = this.ball.el.getBoundingClientRect()
				//获取购物车的位置
				let rectE = document.getElementsByClassName('ball-rect')[0].getBoundingClientRect()
				//获取小球
				let ball = document.getElementsByClassName('mask-item')[0]
				//位置的计算
				let x = rectE.left+15 - (rect.left + rect.width/2)
        		let y = rect.top + rect.height/2 - rectE.top + 5 - 16

				//设置样式
				el.style.transform = 'translate3d(0, '+y+'px, 0)'
				ball.style.transform = 'translate3d(-'+x+'px, 0, 0)'
				ball.src = this.ball.img
			},
			enter(el) {
				let a = el.offsetHeight;
				el.style.transform = 'translate3d(0, 0, 0)'
				document.getElementsByClassName('mask-item')[0].style.transform = 'translate3d(0, 0, 0)'				
			},
			afterEnter() {
				this.ball.show = false
			}
		}
	}	
</script>

<style type="text/css">
/*贝塞尔曲线*/
	.ball-enter-active{
    transition: 2s cubic-bezier(.15,.69,.6,1.29);
  }
  .ball-enter-active .mask-item{
    transition: 2s cubic-bezier(0,0,1,1);
  }		
</style>
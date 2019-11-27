<template>
<!-- 头部 -->
<div id="header">
	<!-- 导航栏部分 -->
	<div class="nav-global">
		<div class="container">
			<h1 class="nav-logo">
				<a href="javascript:;"></a>
			</h1>
			<ul class="nav-aside">
				<li class="nav-user">
					<a href="javascript:;">个人中心</a>
					<!--active-->
					<div class="nav-user-wrapper">
						<div class="nav-user-list">
							<dl class="nav-user-avatar">
								<dd><span class="ng-scope"></span></dd>
								<dt class="ng-binding">+86 138****9453</dt>
							</dl>
							<ul>
								<router-link to="acCount/" tag="li" class="order"><a href="javascript:;">我的订单</a></router-link>
								<li class="support"><a href="javascript:;">售后服务</a></li>
								<li class="coupon"><a href="javascript:;">我的优惠</a></li>
								<li class="information"><a href="javascript:;">账户资料</a></li>
								<li class="address"><a href="javascript:;">收货地址</a></li>
								<li class="logout"><a href="javascript:;">退出</a></li>
							</ul>
						</div>
					</div>
				</li>
				<!--active-->
				<carPanel></carPanel>
				<!-- 购物车 -->
			</ul>
			<ul class="nav-list">
				<li><a href="javascript:;">在线商城</a></li>
				<li><a href="javascript:;">坚果 Pro</a></li>
				<li><a href="javascript:;">Smartisan M1 / M1L</a></li>
				<li><a href="javascript:;">Smartisan OS</a></li>
				<li><a href="javascript:;">欢喜云</a></li>
				<li><a href="javascript:;">应用下载</a></li>
				<li><a href="javascript:;">官方论坛</a></li>
			</ul>
		</div>
	</div>
	
	<!-- 导航栏下内容区 -->
	<div class="nav-sub" :class="{active: isActive}">
		<div class="nav-sub-wrapper">
			<div class="container">
				<ul class="nav-list">
					<li><router-link to="/Home">首页</router-link></li>
					<!-- 注v-on绑定位置 -->
					<li @mouseover="add" @mouseout="del"><router-link to="/MPhone">手机</router-link></li>
					<li><router-link to="/PageOne">“足迹系列”手感膜</router-link></li>
					<li><router-link to="/Shop">官方配件</router-link></li>
					<li><router-link to="/PageTwo">周边产品</router-link></li>
					<li><router-link to="/PageThree">第三方配件</router-link></li>
					<li><router-link to="/PageFour">全部商品</router-link></li>
					<li><router-link to="/PageFive">服务</router-link></li>
				</ul>
			</div>
		</div>
		<Phone></Phone>
	</div>
</div>	
</template>

<script type="text/javascript">
import carPanel from './car-panel' 
import Phone from './phone'

export default {
	components: { carPanel,  Phone},
	data() {
		return {
			isActive:false
		}
	},
	methods: {
		add: function() {
			this.isActive = !this.isActive
			console.log(this.isActive)
		},
		del: function() {
			this.isActive = !this.isActive
			console.log(this.isActive)
		}
	}
}

</script>

<style type="text/css">
	
</style>

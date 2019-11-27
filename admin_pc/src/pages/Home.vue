<template>
<el-container class="app-home">
	<el-header class="home-header">
		<router-link to="/" tag="h1">爱创课堂后台管理系统</router-link>
		<div class="status">
			<span>您好 </span>
			<span class="username">{{$store.state.username}}</span>
			<span>欢迎回来！</span>
			<a href="/admin/logout">退出</a>
		</div>
	</el-header>
	<el-container class="home-container">
		<!-- 第一种方式，修改el-aside的style属性，设置宽度 style="width: 200px" -->
		<el-aside class="home-aside">
			<!-- 渲染菜单 -->
			<el-menu>
				<el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
					<!-- <span slot="title">{{item.title}}</span> -->
					<!-- 借助模板元素，设置多个兄弟元素 -->
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{item.title}}</span>
					</template>
					<!-- 子菜单 -->
					<el-menu-item-group>
						<el-menu-item v-for="(childItem, childIndex) in item.children" :key="childIndex" :index="index + '-' + childIndex">
							<router-link :to="childItem.link" tag="span">{{childItem.title}}</router-link>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main class="home-main">
			<!-- 渲染路由 -->
			<!-- 确定子路由渲染位置 -->
			<router-view></router-view>
		</el-main>
	</el-container>
</el-container>
</template>
<style type="text/css" lang="scss">
.app-home {
	height: 100%;
	.home-header,
	.home-aside,
	.home-main {
		background-color: #fff;
	}
	.home-header {
		margin-bottom: 10px;
	}
	.home-aside {
		margin-right: 10px;
		width: 250px !important;
	}
	.home-container,
	.home-aside,
	.home-main {
		height: 100%;
	}
	.home-header {
		display: flex;
		h1 {
			flex: 1;
		}
		.status {
			padding-top: 30px;
			font-size: 14px;
		}
	}
	.home-main {
		padding: 20px;
	}
	// 定义全局样式
	.page-title {
		margin-top: 0;
		padding: 10px 20px 12px;
		border-bottom: 1px solid #ccc;
		font-size: 26px;
		font-weight: normal;
	}
	.el-input,
	.el-select {
		width: 400px;
		max-width: 400px;
	}
	.form-btn-container {
		padding-left: 150px;
	}
	.lesson-upload-tip {
		margin-left: 10px;
	}
	.lesson-upload-img {
		margin-top: 20px;
	}
	.clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 数据
	data() {
		return {
			menu: [
				{
					title: '课程模块',
					children: [
						{ title: '创建课程', link: '/lesson/create' },
						{ title: '课程列表', link: '/lesson/list/1' }
					]
				},
				{
					title: '用户模块',
					children: [
						{ title: '创建用户', link: '/user/create' },
						{ title: '用户列表', link: '/user/list/1' }
					]
				},
				{
					title: '新闻模块',
					children: [
						{ title: '创建新闻', link: '/news/create' },
						{ title: '新闻列表', link: '/news/list/1' }
					]
				},
				{
					title: '商家模块',
					children: [
						{ title: '创建商家', link: '/seller/create' },
						{ title: '商家列表', link: '/seller/list/1' }
					]
				}
			]
		}
	}
}
</script>
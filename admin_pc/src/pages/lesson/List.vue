<template>
<div class="page-lesson-list">
	<h1 class="page-title">课程列表</h1>
	<div class="card-container clearfix">
		<el-card class="lesson-card" v-for="(item, index) in list" :key="index">
			<img :src="item.img" alt="">
			<h2>{{item.title}}</h2>
			<p>
				<span class="price">￥{{item.price}}</span>
				<span class="type">{{getType(item.type)}}</span>
			</p>
			<p>{{item.sales}}人一起学习</p>
			<div class="btns">
				<!-- 路由跳转用router-link创建按钮更方便 -->
				<!-- <el-button round size="small" type="success">修改</el-button> -->
				<router-link class="el-button el-button--small el-button--success" :to="'/lesson/edit/' + item._id">修改</router-link>
				<el-button size="small" type="danger" @click="removeLesson(item._id)">删除</el-button>
			</div>
		</el-card>
	</div>
	<!-- 设置翻页按钮 -->
	<div class="lesson-list-page">
		<router-link class="el-button is-round el-button--small" tag="span" :to="'/lesson/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)">&larr; 上一页</router-link>
		<router-link class="el-button is-round el-button--small" tag="span" :to="'/lesson/list/' + (+$route.params.page + 1)">下一页 &rarr;</router-link>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-lesson-list {
	.card-container {
		margin-left: 10px;
	}
	.lesson-card {
		float: left;
		width: 23%;
		margin-right: 2%;
		box-sizing: border-box;
		margin-bottom: 20px;
		img {
			width: 100%;
			height:124px;
		}
		.el-card__body {
			padding: 6px;
		}
		h2 {
			font-size: 20px;
			font-weight: normal;
			text-align: center;
			margin-bottom: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		p {
			padding: 0 10px;
			font-size: 14px;
			margin: 8px 0;
			.type {
				float: right;
			}
			.price {
				color: #f30;
			}
		}
		.btns {
			padding: 10px;
		}
	}
	.lesson-list-page {
		text-align: center;
		margin: 40px auto;
	}
}
</style>
<script type="text/javascript">
let types = {
	'super': '高级课程',
	'middle': '中级课程',
	'easy': '初级课程',
	'react': 'react课程',
	'angular': 'angular课程',
	'vue': 'vue课程',
}
// 组件
export default {
	// 数据
	data() {
		return {
			list: []
		}
	},
	// 方法
	methods: {
		// 获取课程名称
		getType(id) {
			return types[id]
		},
		// 更新数据
		getData() {
			// 路由数据
			// console.log(this.$route)
			let { params } = this.$route;
			// 请求数据
			this.$http
				// get请求
				.get('/admin/lesson/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.error === 0) {
						// 存储数据
						this.list = data.data;
					} else {
						// 提示错误
						alert(data.msg)
						// 清空视图
						this.list = [];
					}
				})
		},
		// 删除课程
		removeLesson(id) {
			// 发送请求
			this.$http
				// post请求
				.post('/admin/lesson/remove', { id })
				// 监听返回
				.then(({ data }) => {
					console.log(data);
					// 如果删除成功
					if (data.errno === 0) {
						// 刷新页面
						location.reload();
					} else {
						// 提示用户
						alert(data.msg);
					}
				})
		}
	},
	// 组件创建完成，要请求
	created() {
		// 请求数据
		this.getData();
	},
	// 路由变化也要发送请求
	watch: {
		// 路由变化
		$route() {
			// 请求数据
			this.getData();
		}
	}
}
</script>
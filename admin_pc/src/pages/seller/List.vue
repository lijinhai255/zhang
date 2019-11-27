<template>
<div class="page-lesson-list">
	<h1 class="page-title">商家列表</h1>
	<div class="card-container clearfix">
		<el-card class="lesson-card" v-for="(item, index) in list" :key="index">
			<img :src="item.avatar" alt="">
			<h2>{{item.name}}</h2>
			<p>
				<span class="price">运送时间{{item.deliveryTime}}</span>
				<span class="type">{{item.deliveryPrice}}运送费</span>
			</p>
			<p>{{item.sellCount}}人购买</p>
			<div class="btns">
				<!-- 路由跳转用router-link创建按钮更方便 -->
				<!-- <el-button round size="small" type="success">修改</el-button> -->
				<router-link class="el-button el-button--small el-button--success" :to="'/seller/edit/' + item._id">修改</router-link>
				<el-button size="small" type="danger" @click="removeLesson(item._id)">删除</el-button>
			</div>
		</el-card>
	</div>
	<!-- 设置翻页按钮 -->
	<div class="lesson-list-page">
		<router-link class="el-button is-round el-button--small" tag="span" :to="'/lesson/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)">&larr; 上一页</router-link>
		<router-link class="el-button is-round el-button--small" tag="span" :to="'/lesson/list/' + (+$route.params.page + 1)">下一页 &rarr;</router-link>
	</div>
	<h1 class="page-title">数据可视化</h1>
	<div>
		    <x-chart id="highcharts" class="high" :option="option"></x-chart>
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
//引入chart组件
import XChart from '../../components/charts'	
// 组件
export default {
		components:{ XChart},
	// 数据
	data() {
		return {
			list: [],
			option: { 
				chart: {
					type: 'column'
				},
				title: {
					text: '商家整体评价'
				},
				subtitle: {
					text: '数据来源: WorldClimate.com'
				},
				xAxis: {
					categories: [],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: '总评分(%)'
					}
				},
				tooltip: {
					// head + 每个 point + footer 拼接成完整的 table
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
						'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						borderWidth: 0
					}
				},
				series: [{
					name: '北京地区商家',
					data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 500, 194.1, 95.6, 54.4]

				}]
			},
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
				.get('/admin/seller/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 存储数据
						this.list = data.data;
						data.data.forEach((item, index)=>{
							console.log(111, item.name)
							// this.list.push(item.name)
							this.option.xAxis.categories[index] = item.name;
							this.option.series.data[index]= item.rankRate;
						})
							// console.log(this.option.xAxis.categories, 222)
							
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
		console.log(123)
		// 请求数据
		this.getData();
		console.log(this.list, 222)
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
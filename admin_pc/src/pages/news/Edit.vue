<template>
<div>
	<h1 class="page-title">修改新闻</h1>
	<!-- 1 为input绑定数据 -->
	<!-- 表单校验 -->
	<!-- 1 form设置绑定的数据 -->
	<!-- 2 input设置校验的属性 -->
	<!-- 3 定义校验规则 -->
	<!-- 4 绑定提交事件 -->
	<!-- 5 设置ref -->
	<el-form ref="lesson" label-width="150px" :model="data" :rules="rules">
		<el-form-item label="新闻标题：" prop="title">
			<el-input placeholder="请输入新闻标题" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="新闻作者：" prop="title">
			<el-input placeholder="请输入新闻作者" v-model="data.author"></el-input>
		</el-form-item>
		<el-form-item label="新闻内容：" prop="title">
			<el-input placeholder="请输入新闻内容" v-model="data.content"></el-input>
		</el-form-item>
		<div class="form-btn-container">
			<el-button type="success" @click="submitData">提交</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入的校验规则
import { checkNotEmpty, checkTitle } from '../../../tools/validator';
// 定义数据
export default {
	// 数据
	data() {
		// 定义通用规则
		let notEmptyRule = [{ validator: checkNotEmpty, trigger: 'blur' }];
		return {
			// 新闻数据
			data: {
				title: '',
				author: '',
				content: '',
				time:''
			},
			// 定义表单校验规则
			rules: {
				// 校验标题
				title: [{ validator: checkTitle, trigger: 'blur' }],
				author: notEmptyRule,
				content: notEmptyRule,
			}
		}
	},
	// 定义方法
	methods: {
		getData(){
			// 获取课程id
			let { params } = this.$route;
			// 发送请求
			this.$http
				// get请求
				.get('/admin/news/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果数据成功，存储数据
					if (data.errno === 0) {
						// 存储数据
						this.data = data.data;
					} else {
						// 提示错误
						alert(data.msg);
					}
				})
		},
		dealTime(time) {
		// 小于0要补0
		return time < 10 ? '0' + time : time
		},
		// 提交数据
		submitData() {
			let date = new Date();
			console.log(date);
			this.data.time= `刚刚 ${date.getHours()}:${this.dealTime(date.getMinutes())}:${this.dealTime(date.getSeconds())}`
			console.log(this.data.time);
			console.log(this.data);
			// 校验表单
			this.$refs.lesson.validate(valid => {
				// 表单合法
				if (valid) {
					// 提交数据
					this.$http
						// post请求
						.post('/admin/news/update', this.data)
						// 监听返回
						.then(({ data }) => {
							// 如果上传成功
							if (data.errno === 0) {
								// 进入列表页
								this.$router.replace('/news/list/1')
							} else {
								// 提示错误
								alert(data.msg)
							}
						})
				}
				// console.log(valid)
			})
		}
	},
	//组件创建完成 请求数据  获取成功后存储在data中
	created(){
		//执行获取数据的方法
		this.getData();
	},
	// 路由改变，发送请求
	watch: {
		// 路由改变
		$route() {
			// 发送请求
			this.getData();
		}
	}
}
</script>
<template>
<div>
	<h1 class="page-title">创建用户</h1>
	<!-- 1 为input绑定数据 -->
	<!-- 表单校验 -->
	<!-- 1 form设置绑定的数据 -->
	<!-- 2 input设置校验的属性 -->
	<!-- 3 定义校验规则 -->
	<!-- 4 绑定提交事件 -->
	<!-- 5 设置ref -->
	<el-form ref="lesson" label-width="150px" :model="data" :rules="rules">
		<el-form-item label="用户名：" prop="username">
			<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
		</el-form-item>
		<el-form-item label="密码：" prop="passworld">
			<el-input placeholder="请输入密码" v-model="data.passworld"></el-input>
		</el-form-item>
		<el-form-item label="电话：" prop="tel">
			<el-input placeholder="请输入电话" v-model="data.tel"></el-input>
		</el-form-item>
		<el-form-item label="性别：" prop="sex">
			<!-- 课程分类是下拉框 -->
			<el-select placeholder="请选择性别" v-model="data.sex">
				<el-option v-for="(item, index) in sexs" :key="index" :label="item.text" :value="item.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="简介：" prop="intro">
			<el-input placeholder="请输入简介" v-model="data.intro"></el-input>
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
			sexs:[
				{ text: '男', id: '男' },
				{ text: '女', id: '女' }
			],
			// 新闻数据
			data: {
				username: '',
				passworld: '',
				tel: '',
				sex:'',
				intro:''
			},
			// 定义表单校验规则
			rules: {
				// 校验标题
				username: [{ validator: checkTitle, trigger: 'blur' }],
				passworld: notEmptyRule,
				tel: notEmptyRule,
				sex: notEmptyRule,
				intro: notEmptyRule
			}
		}
	},
	// 定义方法
	methods: {
		//获取数据的方法
		getData() {
			// 获取课程id
			let { params } = this.$route;
			console.log(params);
			// 发送请求
			this.$http
				// get请求
				.get('/admin/user/detail', { params })
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
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.lesson.validate(valid => {
				// 表单合法
				if (valid) {
					// 提交数据
					this.$http
						// post请求
						.post('/admin/user/update', this.data)
						// 监听返回
						.then(({ data }) => {
							// 如果上传成功
							if (data.errno === 0) {
								// 进入列表页
								this.$router.replace('/user/list/1')
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
	//组件创建完成 请求数据
	created(){
		this.getData();
	},
	//路由发生变化请求数据
	watch:{
		// 路由改变
		$route() {
			// 发送请求
			this.getData();
		}
	}
	
}
</script>
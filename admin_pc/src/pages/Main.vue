<template>
<div>
	<h1 class="page-title">修改密码</h1>
	<!-- 1 设置placeholder -->
	<!-- 2 为input绑定数据 -->
	<!-- 开始做表单校验 -->
	<!-- 3 为form设置校验的数据 -->
	<!-- 4 设置input校验字段 -->
	<!-- 5 为form设置校验规则 -->
	<!-- 6 设置ref -->
	<!-- 7 绑定事件 -->
	<el-form ref="manager" :model="manager" :rules="rules" label-width="150px">
		<el-form-item label="用户名" prop="username">
			<el-input placeholder="请输入用户名" v-model="manager.username"></el-input>
		</el-form-item>
		<el-form-item label="新密码" prop="password">
			<el-input placeholder="请输入密码" type="password" v-model="manager.password"></el-input>
		</el-form-item>
		<el-form-item label="重复密码" prop="passwordAgain">
			<el-input placeholder="请重复输入密码" type="password" v-model="manager.passwordAgain"></el-input>
		</el-form-item>
		<div class="form-btn-container">
			<el-button type="success" @click="submitData">提交</el-button>
			<el-button type="success" @click="resetData">重置</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验算法
import { checkUsername, checkPassword, checkPasswordAgain } from '../../tools/validator';
// 组件
export default {
	// 绑定的数据
	data() {
		// console.log(this)
		// 缓存
		return {
			// 管理员信息
			manager: {
				username: '',
				password: '',
				passwordAgain: ''
			},
			// 定义校验规则
			rules: {
				// key表示校验的字段
				// value是数组，每一个成员对象，代表一条校验规则
				username: [{ validator: checkUsername, trigger: 'blur' }],
				// 密码
				password: [{ validator: checkPassword, trigger: 'blur' }],
				// 重复密码
				passwordAgain: [{ validator: checkPasswordAgain.bind(this), trigger: 'blur' }]
			}
		}
	},
	// 定义方法
	methods: {
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.manager.validate(valid => {
				// 如果校验通过
				if (valid) {
					// 解构用户名和密码
					let { username, password } = this.manager;
					// 提交数据
					this.$http
						// 发送post请求
						.post('/admin/manager/update', { username, password })
						// 监听数据返回
						.then(({data}) => {
							// 如果更新成功，要重新登录
							if (data.errno === 0) {
								// 重新登录，要刷新页面，要修改url的前六个部分，我们可以path
								location.href = '/admin'
							} else {
								// 更新失败，提示错误
								alert(data.msg)
							}
						})
				}
			})
		},
		// 重置数据
		resetData() {
			// console.log(this.$refs.manager)
			// 重置表单
			this.$refs.manager.resetFields();
		}
	}
}
</script>

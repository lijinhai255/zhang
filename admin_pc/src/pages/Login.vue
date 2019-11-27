<!-- //引入vue -->
<template>
	<div class="app-login">
		<div class="login-container">
			<h2>请您登录</h2>
			<!-- 表单校验 -->
			<!-- 1 为el-form设置校验的数据 :model="" -->
			<!-- 3 为el-form设置校验规则 -->
			<!-- 设置ref为了在方法中获取该组件 -->
			<el-form  ref="loginForm" :model="login" :rules="rules"  label-width="100px">
				<!-- 2 为每一个子表单元素，设置校验的字段 -->
				<el-form-item label="用户名" prop="username">
					<el-input placeholder="请输入用户名" v-model="login.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input placeholder="请输入密码" type="password" v-model="login.password"></el-input>
				</el-form-item>
				<el-button class="submit-btn" type="success" @click='submitData' >登录</el-button>
			</el-form>
		</div>
	</div>
</template>

<script type="text/javascript" >
	//引入 校验策略
	import { checkUsername, checkPassword } from '../../tools/validator'
	export default {
		data(){
			return {
				login:{
					username:'',
					password:''
				},
				//定义校验规则
				rules:{
					//validator 定义校验的方法 trigger 校验的时刻
					username:[
						{validator:checkUsername, trigger:'blur'},
		
						],
					password:[
						{validator:checkPassword, trigger:'blur'},
					]	
				}
			}
		},
		//定义方法
		methods:{
			//提交数据
			submitData(){
				console.log(this.$refs.loginForm)
				//1 判断当前数据是否合法
				this.$refs.loginForm.validate(valid=>{
					console.log(valid);
					if(valid){
						console.log(this.login)
						this.$http
						//post 请求 
							.post('/admin/login',this.login)
							.then(({data})=>{
									// 如果登录成功
									if (data.errno === 0) {
										// 存储用户名
										this.$store.commit('updateUsername', data.data.username)
									} else {
										// 提示错误
										alert(data.msg)
									}
							})
					}
				})
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	/*第二步 写样式*/
	.app-login {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #efefef;
		.login-container {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 400px;
			padding: 30px 20px;
			margin: -150px -220px;
			background-color: #fff;
			border-radius: 10px;
			h2 {
				text-align: center;
				font-weight: normal;
				border-bottom: 1px solid #ccc;
				margin-top: 0;
				padding: 5px 0 10px;
			}
			.submit-btn {
				display: block;
				width: 100%;
			}
		}
	}
</style>

<template>
	<div>
		<Login v-if="!$store.state.username"></Login>
		<!-- 2 否则有用户名，渲染路由 -->
		<router-view v-else></router-view>
	</div>
</template>
<style type="text/css" lang="scss">
	
</style>
<script type="text/javascript">
	//引入loagin
	import Login from './pages/Login'
	//定义组件
	export default {
		components:{Login},
		//组件创建完成 发送请求 用于获取用户的信息
		created(){
			console.log(211)
			this.$http
			    .get('/admin/userinfo')
				.then(({data})=>{
					if(data.error===0){
						//如果有用户名 就存储用户名
						this.$store.commit('updateUsername', data.data.username)
						this.$store.commit('updateUsername',data.data.username)
					}
				})
		},
		
		//组件构建完成
// 		mounted(){
// 			console.log(this)
// 		}
// 		
	}
</script>
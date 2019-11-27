<template>
	<div  class="page-lesson-list">
		<h1 class="page-title">用户列表</h1>
		<el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="_id"
      label="用户id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passworld"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="intro"
      label="简介"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="remvoeUsers(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="changeRouter(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   <!-- 设置翻页按钮 -->
  <div class="lesson-list-page">
  	<router-link class="el-button is-round el-button--small" tag="span" :to="'/news/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)">&larr; 上一页</router-link>
  	<router-link class="el-button is-round el-button--small" tag="span" :to="'/news/list/' + (+$route.params.page + 1)">下一页 &rarr;</router-link>
  </div>
	</div>
	
</template>

<script>
	//定义组件
	export default {
		//定义数据
		data(){
			return {
				list :[]
			}
		},
		//定义方法
		methods:{
			 changeRouter({_id}){
							 console.log(this.$router.push)
							 this.$router.push('/user/edit/' + _id)
			},
			getData(){
				//获取路由的数据
				let { params} = this.$route;
				//发送请求获取数据
				this.$http
					.get('/admin/user/list',{ params})
					.then(({data})=>{
						if(data.error===0){
							this.list= data.data;
						}else{
							alert(data.msg);
							this.list=[];
						}
					})	
			},
			remvoeUsers({_id}){
				let id = _id;
				//发送请求
				this.$http
					.post('/admin/user/remove',{id})
					.then(({data})=>{
						console.log(data);
						if(data.errno===0){
							//刷新页面
							location.reload();
							}else{
								alert(data.msg)
							}
					})
				
			}
		},
		//组件创建完成发送请求
		created(){
			this.getData();
		},
		//监听路由的变化 发送请求
		watch:{
			$route(){
				this.getData();
			}
		}
		
	}
</script>

<style>
	.lesson-list-page {
		text-align: center;
		margin: 40px auto;
	}
</style>

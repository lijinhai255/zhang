<template>
	<div  class="page-lesson-list">
		<h1 class="page-title">新闻列表</h1>
		<el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="_id"
      label="新闻id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="新闻标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="content"
      label="新闻内容"
      width="300">
    </el-table-column>
    <el-table-column
      prop="author"
      label="新闻作者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="time"
      label="发布时间"
      width="240">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="remvoeNews(scope.row)" type="text" size="small"z>删除</el-button>
        <el-button type="text" size="small" @click="changeRouter(scope.row)" >编辑</el-button>
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
				 this.$router.push('/news/edit/' + _id)
			 },
			 getData(){
				 //获取路由的数据
				 let { params} =this.$route;
				 //发送请求
				 this.$http
					.get('/admin/news/list',{params})
					//监听数据返回
					.then(({data})=>{
						if(data.error=== 0){
							this.list= data.data
						}else{
							//进行数据信息的提示
							alert(data.msg);
							this.list=[];
						}
					})
			 },
			remvoeNews({_id}){
				let id = _id;
				console.log(id)
				//发送请求
				this.$http
					.post('/admin/news/remove',{id})
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
		 //组件创建完成 发送请求
		 created(){
			 this.getData();
		 },
		 //监听路由的变化 发送请求
		 watch:{
			 ///当路由发生了变化 发送请求
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

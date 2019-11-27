<template>
		 <div class="footer">
		    <ul>
		        <li><a href="">登录</a></li>
		        <li><a href="">反馈</a></li>
		        <li><a href="">注册</a></li>
		        <li @click="backTop">返回顶部</li>
		    </ul>
		</div>
</template>

<script>
	export default {
		methods:{
			 
		}
	}
</script>

<style type="text/css" lang="scss">
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	    ul {
	        width: 100%;
	        display: flex;
	        text-align: center;
	        li {
	            height: 40px;
	            line-height: 40px;
	            flex: 1;
	            font-size: 16px;
	            a {
	                border-right: 1px solid #f0f0f0;
	                text-decoration: none;
	                border-right: 1px solid #ccc;
	            }
	        }
	    }
	}
</style>

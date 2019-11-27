<template>
	<div class="header">
		<el-row>
			<el-col>
				<TopBar></TopBar>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<SearchBar></SearchBar>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import TopBar from './topbar';
	import SearchBar from './searchbar'
	export default {
		components:{TopBar,SearchBar }
	}
</script>


<style>
</style>

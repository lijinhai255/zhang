<template>
	<div class="app">
		<div class="header">
			<router-link to="/list" class="header-title">电商网站实例</router-link>
			<div class="header-menu">
				<router-link to="/cart" class="header-menu-car">
					购物车
					<span v-if="cartList.length">{{cartList.length}}</span>
				</router-link>
			</div>
		</div>
		 <router-view/>
	</div>
</template>

<style lang="scss">

</style>

<script type="text/javascript">
	export default {
		computed:{
			cartList(){
				return this.$store.state.cartList;
			}
		}
		
	}
</script>

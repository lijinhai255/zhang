<template>
<div>
	<ul class="hpt-banner">
		<router-link  v-for="(item, index) in banner" :key="index" tag="li" :to="'/sort/'+index">
            <img :src="item.img" alt="">
        </router-link>
	</ul>
	<ul class="hot">
        <router-link  v-for="(item, index) in discoverBrand" :key="index" tag="li" :to="'/sort/'+index">
            <img :src="item.image" alt="">
        </router-link>
    </ul>
</div>
</template>
<style lang="scss" scoped>
// @import '../base.scss';
.hot {
	overflow: hidden;
	li {
		width: 25%;
		float: left;
	}
}
</style>
<script type="text/javascript">
export default {
	props: ['discoverBrand', 'banner'],
	mounted() {
		// console.log(this.discoverBrand,888888)
	}
}
</script>
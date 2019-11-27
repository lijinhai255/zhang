<template>
<div>
	<ul class="hot" slot="header">
        <router-link  v-for="(item, index) in data" :key="index" tag="li" :to="'/sort/'+index">
            <img :src="item.img" alt="">
        </router-link>
    </ul>
    <ul class="hot-bottom" slot="body">
        <router-link  v-for="(item, index) in camare" :key="index" tag="li" :to="'/sort/'+index">
            <img :src="item.image" alt="">
        </router-link>
    </ul>
    <ul class="hot-bottom-electrical" slot="footer">
        <router-link  v-for="(item, index) in electrical" :key="index" tag="li" :to="'/sort/'+index">
            <img :src="item.image" alt="">
        </router-link>
    </ul>
</div>
</template>
<style lang="scss" scoped>
// @import '../base.scss';
ul {
	overflow: hidden;
}
li {
	width: 50%;
	float: left;
}
.hot {
	li {
		width: 50%;
	}
}
.hot-bottom {
	li {
		width: 25%;
	}
}

</style>
<script type="text/javascript">
export default {
	props: ['data', "camare", 'electrical'],
	mounted() {
		// console.log(this.camare,888888)
	}
}
</script>

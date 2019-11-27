<template>

    <div id="app">
        <MtHeader></MtHeader>
        <div class="Takeaway">
            <div>
                <!--<div class="searchtop">-->
                    <!--<div class="searchtop-l">-->
                        <!--<i class="el-icon-location-outline">天安门广场 | 谷歌</i>-->
                    <!--</div>-->
                    <!--<div class="searchtop-r">-->
                        <!--<p>-->
                            <!--<i class="el-icon-search"></i>-->
                            <!--<span>哈哈哈哈</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</div>-->

                <h4 class="shangjia">
                    <span>——</span> 附近商家
                    <span>——</span>
                </h4>
                <ul class="ul-ou">
                    <li>综合排序
                        <i class="el-icon-caret-bottom"></i>
                    </li>
                    <li>销量最高</li>
                    <li>距离最近</li>
                    <li>筛选
                        <i class="el-icon-printer"></i>
                    </li>
                </ul>
                <OneSeller v-for="(item, index) in shopList" :key="index" :data="item"></OneSeller>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../scss/tackaway";

    #app {
        overflow: hidden;
    }

    .Takeaway {
        margin-top: 50px;
    }
</style>

<script>
    import MtHeader from "../components/mtheader/MtHeader"
    import OneSeller from '../components/oneseller/OneSeller'

    export default {
        components: {OneSeller,MtHeader},
        data() {
            return {
                shopList: []
            };
        },
        created() {
            this.$http.get("/static/mtmobile/data/tackaway.json").then(({data}) => {
                console.log(data.data.shopList);
                this.shopList = data.data.shopList;
            });
        },
        methods: {}
    };
</script>
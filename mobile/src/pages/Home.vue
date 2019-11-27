<template>
    <div class="home">
        <Header></Header>  
        <Banner></Banner>
        <Nav></Nav>
        <Advert></Advert>
        <!-- //商品列表页 -->
     	<div class="home-list">
		<h2 class="guess-title">猜你喜欢</h2>
		<!-- 循环商品 -->
		<div
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="50"

            >
                <Product v-for="(item, index) in list" :key="index" :data="item"></Product>
        </div>

        </div>
        <Footer :isShowFooter="this.isShowFooter"></Footer>
   </div> 
</template>
<style lang="less">
.home{
    .types{
            @include clearfix;
            background-color: #fff;
            padding: 10px;
            li {
                float: left;
                height: 87px;
                width: 20%;
                text-align: center;
                padding: 3px 0 0;
                cursor: pointer;
                img {
                    width: 44px;
                    height: 44px;
                    display: inline-block;
                }
                p {
                    font-size: 12px;
                    margin-top: 3px;
                }
            }
        }
    .home-list {
	margin-top: 10px;
	background: #fff;
	.guess-title {
		padding: 10px 0;
		margin: 0 10px;
		font-size: 18px;
		font-weight: normal;
		border-bottom: 1px solid #ccc;
		color: #333;
	}
}        
}
</style>

<script>
//引入组件
import Banner from "../components/banner/Banner";
//引入头部组件
import Header from '../components/mtheader/MtHeader'
//引入nav
import Nav from "../components/nav/Nav";
//引入广告模块
import Advert from "../components/advert/Advert"
//引入产品组件
import Product from "../components/product/Product";
//引入底部
import Footer  from "../components/footer/Footer"
export default {
    components:{
        Banner,
        Header,
        Nav,
        Advert,
        Product,
        Footer
    },
    //创建数据
    data(){
       return {
           
           page:1,
           list:[],
           loading:false,
           isFirst:true,
           isShowFooter:false
       }
    },
     methods:{
            loadMore(){
                if(this.isFirst){
                    setTimeout(()=>{
                        this.getHomeData();
                        this.isFirst=false;
                    },3000)
                return ;
                }else{
                    setTimeout(()=>{
                        ++this.page;
                        console.log(this.page)
                        this.getHomeData();
                    })
                }
                

            },
            getHomeData(){
                let page = this.page;
                this.$http
                     .get('/mobile/home',{ params:{page}})
                    .then(({data})=>{
                         if(data.errno===4){
                             console.log('没有数据了')
                             //停止加载
                            this.loading=true;
                            this.isShowFooter= true;
                            return ;
                         }
                         this.loading = false
                         this.list= this.list.concat(data.data);
            })
            }
        },
    //组件创建完成请求数据
    created(){
        // this.getHomeData()
    }
}
</script>

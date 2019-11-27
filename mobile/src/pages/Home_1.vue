<template>
	<div class="home">
	<HomeHeader></HomeHeader>
	<div class="home-wrapper" ref="move">
		<div class="scroll-content">
			<div class="home-content">
				    <div class="banner">
				     <mt-swipe :auto="5000" style="height: 200px">
				         <mt-swipe-item style="background: #ee5c5c;" v-for="(item, index) in img" :key="index"><img :src='item.image' alt=""></mt-swipe-item>
				     </mt-swipe>
				 </div>
				
				 <div class="classify">
				     <ul>
				         <router-link class="product-list" v-for="(item, index) in classify" :key="index" tag="li" :to="item.link">
				             <img :src="item.img" alt="">
				             <p>{{item.text}}</p>
				         </router-link>
				     </ul>
				 </div>
				<div class="lists">
				     <ul>
				         <router-link class="sort-list" v-for="(item, index) in list" :key="index" tag="li" :to="'/product/'+index">
				             <img :src="item.image" alt="">
				         </router-link>
				     </ul>
				 </div>
				 <div class="lists">
				     <ul>
				         <router-link class="sort-list" v-for="(item, index) in list_bottom" :key="index" tag="li" :to="'/sort/'+(index+6)">
				             <img :src="item.image" alt="">
				         </router-link>
				     </ul>
				 </div> 
				 <div class="break">
				     <router-link tag="a" to="/Index"></router-link>
				 </div>
				  
				 <div class="break-hot">
				     <ul>
				         <router-link  v-for="(item, index) in four" :key="index" tag="li" :to="'/detail/'+index">
				             <img :src="item.image" alt="">
				         </router-link>
				     </ul>
				 </div> 
				 <Hot :data="fours" :camare = "camare" :electrical="electrical">
				     <slot><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427174157909.jpg" alt=""></slot>
				     <slot name="header"></slot>
				     <slot name="body"></slot>
				     <slot name="footer"></slot>
				 </Hot>
				 <!-- 发现品牌 -->
				 <Findbrand :discover-brand='findbrand' :banner = "banner">
				     <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830013804286036.png" alt="">
				     <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427367680592.jpg" alt="">
				 </Findbrand>
				 <Product :product="product" :product1="product1">
				     <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05506778612994991.png" alt="">
				 </Product>
			</div>
		</div>
	</div>
	 <div class="footer">
	    <ul>
	        <li><a href="">登录</a></li>
	        <li><a href="">反馈</a></li>
	        <li><a href="">注册</a></li>
	        <li @click="backTop">返回顶部</li>
	    </ul>
	</div>
	</div>
</template>

<script>
	import HomeHeader from '../components/homeheader/HomeHeader';
	// import HomeFooter from '../components/homefooter/HomeFooter';
	import Hot from '../components/homehot/HomeHot.vue';
	import Findbrand from '../components/homefindbrand/Findbrand.vue';
	import Product from '../components/homeproduct/Product.vue';
	import BScroll from 'better-scroll';
export default {
    components: { Hot, Findbrand, Product,HomeHeader, },
    data() {
        return {
            data:{},
            img:[],
            // 分类
            classify: [
                { text: '分类', id: '100', img: 'http://www.51mkf.com/wap/images/browse_list_w.png', link: "/sort/phone" },
                { text: '购物车', id: '200', img: 'http://www.51mkf.com/wap/images/cart_w.png', link: "/order/" },
                { text: '在线订餐', id: '300', img: 'http://www.51mkf.com/wap/images/member_w.png',link: "/good" },
                { text: '客户服务', id: '400', img: 'http://www.51mkf.com/wap/images/mcc_04_w.png', link: "/about/" },
                { text: '门店列表', id: '500', img: 'http://www.51mkf.com/wap/images/service_w.png', link: "/list/" },
            ],
            list:[],
            list_bottom:[],
            four:[],
            fours: [
                { id: '3', img: 'http://www.51mkf.com/data/upload/mobile/special/s0/s0_05912720194905352.jpg',link: "/home/" },
                { id: '1', img: 'http://www.51mkf.com/data/upload/mobile/special/s0/s0_05841867271206667.jpg', link: "/sort/" },
                { id: '2', img: 'http://www.51mkf.com/data/upload/mobile/special/s0/s0_05844442763109066.jpg', link: "/detail/" },
            ],
            banner: [
                { img: 'http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830013804286036.png' },
                { img: 'http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427367680592.jpg'}
            ],
            camare: [],
            //电器
            electrical: [],
            // 发现品牌
            findbrand: [],
            product: [],
            product1: []

        }
    },
    created() {
       this.$http
       .get("/static/mobile/data/index.json")
       .then(({ data }) => {
            this.img = data.datas[0].adv_list.item.slice(0,2),
            this.data = data,
            // 分类数据
            this.list = data.datas[1].home3.item,
            this.list_bottom = data.datas[2].home3.item,
            this.four = data.datas[4].home5.item,
            this.camare = data.datas[7].home5.item,
            this.electrical = data.datas[8].home3.item,
            this.findbrand = data.datas[11].home5.item
            this.product = data.datas[16].goods.item
            this.product1 = data.datas[19].goods.item
            // this.findbrand = data.datas.slice(11,14)
			this._initScroll()
        }) 
    },
    mounted() {
      
    },
    methods:{
		_initScroll(){
			this.$nextTick(()=>{
				if(!this.scroll){
					this.scroll= new BScroll(this.$refs.move,{
						click:true,
					})
				}else{
					this.scroll.refresh();
				}
			})
		},
		backTop() {
		    // document.body.scrollTop = document.documentElement.scrollTop = 0
			this.$refs.move.firstChild.style.transform='translate(0px, 0px) translateZ(0px)';
		}
	}
	}
</script>

<style type="text/css" lang="scss">
	* {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	img {
	    width: 100%;
	}
	.header {
	    width: 100%;
	    position: fixed;
	    z-index: 10;
	    top: 0;
	    left: 0;
	    display: flex;
	   .logo {
	        height: 50px;
	        width: 80px;
	        position: absolute;
	        left: 0;
	        top: 0;
	        background: url(/img/home_logo.png) no-repeat ;
	        background-size: contain;
	        background-position-y: center ; 
	        text-indent: -9999px;
	   }
	   .search {
	        position: relative;
	        width: 100%;
	        height: 50px;
	        margin: 0 60px 0 80px;
	        box-sizing: border-box;
	        padding: 7px 0 0 0;
	        b {
	            position: absolute;
	            width: 15px;
	            height: 30px;
	            left: 10px;
	            background: url(/img/search_ico.png) center no-repeat;
	            background-size: contain;
	        }
	        input {
	            width: 90%;
	            height: 15px;
	            outline: none;
	            border-radius: 10px;
	            padding-left: 30px;
	            background-position: 5px center ; 
	            
	        }
	    }
	   .login {
	        height: 50px;
	        width: 50px;
	        position: absolute;
	        top: 2px;
	        right: 5px;
	        text-align: center;
	        color: white;
	        p:first-child {
	            background: url(/img/member_index.png) center no-repeat;
	            background-size: contain;
	        }
	        p {
	            font-size: 12px;
	            height: 25px;
	            font-size: 12px;
	        }
	   }
	}
	.banner {
	    position: relative;
	    left: 0; 
	    top: 0;
	    background-color: pink;
	    img {
	        width: 100%;
	    }
	}
	.classify {
	    padding: 20px 5px;
	    ul {
	        width: 100%;
	        display: flex;
	        justify-content: space-between;
	        .product-list {
	            font-size: 12px;
	            text-align: center;
	            width: 20%;
	            img {
	                width: 70%;
	                margin-bottom: 5px;
	            }
	        }
	    }
	    
	}
	.lists {
	    ul {
	        overflow: hidden;
	        width: 100%;
	        .sort-list {
	            box-sizing: border-box;
	            width: 50%;
	            float: left;
	            img {
	                width: 100%;
	            }
	        }
	        li:nth-child(even){
	            border-top: 1px solid #ccc;
	        }
	        li:nth-child(odd){
	            border-top: 1px solid #ccc;
	            border-right: 1px solid #ccc;
	        }
	    }
	}
	.break {
	    a {
	        width: 100%;
	        height: 100px;
	        display: block;
	        background: url(http://www.51mkf.com/data/upload/mobile/special/s0/s0_05895432640695894.png);
	        background-size: contain;
	        background-position-y: center;
	    }
	}
	.break-hot {
	    overflow: hidden;
	    ul li {
	        width: 25%;
	        float: left;
	        img {
	            width: 100%;
	        }
	    }
	}
	.home-wrapper{
		position: absolute;
		left: 0;
		top: 50px;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background: #fff;
		z-index: -1;
		.scroll-content{
			.home-conten{
			}
		}
	}
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

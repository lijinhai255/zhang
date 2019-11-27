<template>
	<div class="productDetail">
		<div class="header">
			<div class="top">
			   <img class="img1" src="static/images/icon/2.png" alt="">
               <p class="information">商品信息</p>
			   <img class="img2" src="static/images/icon/1.png" alt="">
			   <img class="img3" src="static/images/icon/3.png" alt="">
			</div>
		</div>
		<div class="Commodity-introduction">
			 <p class="Commodity-1">商品介绍</p>
			 <p class="Commodity-2">图片详情</p>
			 <p class="Commodity-3">商品评价</p>
			 <p class="Commodity-4">相关专题</p>
		</div>
		<div class="lunbotu">
			<div class="lunbotu-1">
				<mt-swipe>
				  <mt-swipe-item>
                       <img src="static/images/detail/img1.jpg" alt="">
				  </mt-swipe-item>
				  <mt-swipe-item>
                       <img src="static/images/detail/img2.jpg" alt="">
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	    <img src="static/images/detail/img3.jpg" alt="">
				  </mt-swipe-item>
				   <mt-swipe-item>
				  	    <img src="static/images/detail/img4.jpg" alt="">
				  </mt-swipe-item>
				   <mt-swipe-item>
				  	    <img src="static/images/detail/img5.jpg" alt="">
				  </mt-swipe-item>
			</mt-swipe>
			</div>
			<div class="explain">
				<p class="explain-1">男式超柔软拉毛运动开衫</p>
				<p class="explain-2">匠心剪裁，垂感质地</p>
				<p class="explain-3">￥99</p>
				<p class="explain-4">￥199</p>
			</div>  
		</div>
		<div class="Spike">
					<p class="countTime">秒杀商品  距离结束还剩 <span class="countTime-1">{{day}}天</span><span class="countTime-2">{{hor}}时</span><span class="countTime-3">{{min}}分</span><span class="countTime-4">{{sec}}秒</span></p>
		</div>
		<div class="some">
			<div class="fuwu">
				<span class="some_title">服务说明</span>
				<p class="some_content">
					<span>无忧退货</span>
					<span>快速退款</span>
					<span>免费包邮</span>
				</p>
			</div>
			<div class="lingquan">
				<span class="some_title">领券</span>
				<p class="some_content">满300减50</p>
			</div>
			<div class="cuxiao">
				<span class="some_title">促销</span>
				<p class="some_content some_content_cuxiao" > 12月好物放送，领券购买直降120元</p>
			</div>
		</div>
		<div class="describe">
			 <p class="describe-1">商品介绍</p>
			 <p class="describe-2">这款运动内衣大身以红色山峦印花拼黑色，引人注目。采用具有超细网眼的机织尼氨面料，内衬冲孔透气填充胸垫，稳固胸型的同时更弹力透气。前胸的V字网眼搭配背部层叠设计，增强运动稳定性的同时，也帮助运动中的身体透气排汗，令性感的运动美展现无疑。</p>
		</div>
		<div class="detail_right_footer">
			<div class="Customer_service">
				<img src="static/images/icon/客服.png" alt="">
				<p class="Customer_service_1">客服</p>
			</div>
			<div class="gouwuche">
				 <img src="static/images/icon/购物车空.png" alt="">
				 <p class="gouwuche-1">购物车</p>
			</div>
			<div class="putinCar" @click="putinCar">加入购物车</div>
			<div class="buyNow" @click="buyNow">立即购买</div>
		</div>
		 <div class="inner">
			<div class="content">
				<div class="detail_left">
					<div class="detail_swip">
						<div class="detail_swip_img">
							<img :src="s_images" alt="">
						</div>
						<ol class="detail_swip_circle">
							
						</ol>
					</div>
					<div class="detail_more">
						<div class="xiaoliang">
							<span>销量人气</span>
							<span>999+</span>
							<span>查看热销</span>
						</div>
						<div class="pingjia">
							<span>商品评价</span>
							<span>999+</span>
							<span>查看评价</span>
						</div>
						<div class="renqi">
							<span>收藏人气</span>
							<span>999+</span>
							<span>搜藏商品</span>
						</div>
						<div class="pinpai">
							<span>品牌信息</span>
							<span>999+</span>
							<span>品牌主页</span>
						</div>
					</div>
				</div>
				<div class="detail_right">
					<div class="detail_right_header">
						<div class="detail_title">
							<h2>{{swip1.name1}}</h2>
							<h3>{{swip1.name2}}</h3>
						</div>
						<div class="detail_price">
							<div class="detail_price_now">
								<span class="price_now_money">{{swip1.price_now}}</span>
								<span class="price_title">秒杀价格</span>
							</div>
							<div class="detail_price_old">
								<span class="price_old_money">{{swip1.price_old}}</span>
								<span class="price_title">商品价格</span>
							</div>
						</div>	
					</div>
					<div class="detail_right_content">
						<div class="miaosha">
							<p class="countTime">秒杀商品  距离结束还剩 <span>{{day}}天{{hor}}时{{min}}分{{sec}}秒</span></p>
							<p class="miaosha_more">更多秒杀</p>
						</div>
						<div class="some">
							<div class="lingquan">
								<span class="some_title">领券</span>
								<p class="some_content">满300减50</p>
							</div>
							<div class="cuxiao">
								<span class="some_title">促销</span>
								<p class="some_content some_content_cuxiao" > 12月好物放送，领券购买直降120元</p>
							</div>
							<div class="jiangli">
								<span class="some_title">奖励</span>
								<p class="some_content">购买最高得249优币及249成长值</p>
							</div>
							<div class="fuwu">
								<span class="some_title">促销</span>
								<p class="some_content">
									<span>无忧退货</span>
									<span>快速退款</span>
									<span>免费包邮</span>
								</p>
							</div>
						</div>
						<div class="check">
							<div class="color">
								<span>颜色</span>
								<ul >
									<li v-for="(item, index) in colors" :key="index" :data="item" 
									:class="(index === checkedColor ? 'active': '')+' '+(checkedSize >= 0 && item.size[checkedSize].num <= 0 ? 'disabled' : '')" 
									@click="toggleColor(index)">
										<img :src="item.img" alt="" :title="item.color">
									</li>
								</ul>
							</div>
							<div class="size">
								<span>尺码</span>
								<ul>
									<li v-for="(item, index) in colors[0].size" :key="index" :data="item">
										<span 
										:class="(index === checkedSize ? 'active': '')+' '+if_click1[index]" 
										@click="toggleSize(index)">{{item.size}}</span>
									</li>
								</ul>
							</div>
							<div class="number">
								<span>数量</span>
								<ol>
									<li @click="num_reduce">-</li>
									<li class="buy_num">{{num}}</li>
									<li @click="num_add">+</li>
								</ol>
							</div>
						</div>
					</div>
					<div class="detail_right_footer">
						<div class="putinCar" @click="putinCar">加入购物车</div>
						<div class="buyNow" @click="buyNow">立即购买</div>
					</div>
				</div>
				<div class="related_product">
					<h2>同类商品推荐</h2>
					<div class="related_product_swip">
						<div class="swip" ref="box" :style="{'left': left + 'px'}">
							<div class="related_product_swip_list" v-for="(item, index) in swip2" :key="index">
								<img :src="item.img" alt="">
								<p>{{item.name1}}</p>
								<p>{{item.name2}}</p>
								<span>{{item.price}}</span>
							</div>
						</div>
					</div>
					<div class="circle_left" @click="change_position_left"></div>
					<div class="circle_right" @click="change_position_right"></div>
				</div>
				<div class="product_info_left">
					<div class="product_info">
						<h2 class="title">商品详情<span class="judge">商品评价</span></h2>
						<div class="info">
							<div class="info_detail"><span class="info_detail_title">衣长</span><span>常规</span></div>
							<div class="info_detail"><span class="info_detail_title">领型</span><span>可拆卸</span></div>
							<div class="info_detail"><span class="info_detail_title">款式细节</span><span>多口袋</span></div>
							<div class="info_detail"><span class="info_detail_title">充绒量</span><span>100g</span></div>
							<div class="info_detail"><span class="info_detail_title">含容量</span><span>90%</span></div>
							<div class="info_detail"><span class="info_detail_title">材质成分</span><span>聚酯纤维100%</span></div>
							<div class="info_detail"><span class="info_detail_title">品牌</span><span>HLA</span></div>
							<div class="info_detail"><span class="info_detail_title">填充物</span><span>白鹅绒</span></div>
							<div class="info_detail"><span class="info_detail_title">上市年份</span><span>2018年秋季</span></div>
						</div>
						<div class="info_img" v-for="(item, index) in swip1.infoImg" :key="index" :data="item"> 
							<img :src="item" alt="">
						</div>
					</div>
					<div class="care">
						<h2 class="title">注意事项</h2>
						<div>
							<h3>·购买运费如何收取？</h3>
							<p>单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。港澳台地区需满500元免邮费；不满500元，每单收取30元运费</p>
						</div>
						<div>
							<h3>·使用什么快递发货?</h3>
							<p>默认使用顺丰快递发货(个别商品使用其他快递）</p>
							<p>配送范围覆盖全国大部分地区(港澳台地区除外）</p>
						</div>
					</div>
				</div>
				<div class="product_info_right">
					<div class="hot">
						<h2>{{hotSale[0].title}}</h2>
						<div class="hot_list">
							<div class="hot_list_detail" v-for="(item, index) in hotSale[0].list" :key="index" :data="item">
								<img :src="item.img" alt="">
								<p>{{item.name1}}</p>
								<p>{{item.name2}}</p>
								<span>{{item.price_now}}</span>
							</div>
						</div>
					</div>
					<div class="zhuanti">
						<h2>{{zhuanti[0].title}}</h2>
						<div class="zhuanti_list">
							<div class="zhuanti_list_detail" v-for="(item, index) in zhuanti[0].list" :key="index" :data="item">
								<img :src="item.img" alt="">
								<div class="zhuanti_list_title">{{item.title}}</div>
							</div>	
						</div>
					</div>
				</div>	
			</div>
		</div> 
	</div>
</template>
<style type="text/css" lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	ul,
	ol {
		list-style: none;
	}
	.productDetail {
		.header{
			width:100%;
			height:50px;
			border-bottom:solid #ddd 1px;
            background-color:#f9f9f9;
			.top{
               width:100%;
               height:35px;            
               position:relative;
               .img1{
                 width:30px;
                 height:30px;
                 position:absolute;
                 top:7px;
                 left:7px;
                 }
               .information{
                 display:inline-block;
                 position:absolute;
                 top:12px;
                 left:124px;
                 font-weight:900;
                 font-size:17px;
                 color:#999;
                }
                .img2{
                 width:28px;
                 height:28px;
                 position:absolute;
                 top:8px;
                 right:70px;
                 }
                 .img3{
                 width:27px;
                 height:27px;
                 position:absolute;
                 top:8px;
                 right:8px;
                 }
		     }	
		}
		.Commodity-introduction{
              width:100%;
              height:35px;
              .Commodity-1{
              width:24%;
              height:100%;
              display:inline-block;
              text-align:center;
              line-height:35px;
              // margin-bottom:2px;
              border-bottom:solid #1abc9c 1px;
               }
               .Commodity-2{
              width:24%;
              height:100%;
              display:inline-block;
              text-align:center;
              line-height:35px;
              margin-bottom:2px;

               }
               .Commodity-3{
              width:24%;
              height:100%;
              display:inline-block;
              text-align:center;
              line-height:35px;
              margin-bottom:2px;
               }
               .Commodity-4{
              width:24%;
              height:100%;
              display:inline-block;
              text-align:center;
              line-height:35px;
              margin-bottom:2px;
               }
            }
	    .lunbotu{
         width:100%;
         height:400px;
         border-bottom:solid #ddd 1px;
         .lunbotu-1{
            margin:0 auto;
            width:100%;
            height:299px;
             img{
	           width:100%;
	           height:500px;
            }
          }
          .explain{
	        width:100%;
	        height: 90px;
	        position:relative;
	        .explain-1{
              display:inline-block;
              font-family: '微软雅黑';
              font-weight: 410;
              color:#666;
              font-size:16px;
              position:absolute;
              top:5px;
              left:86px;
	        }
	        .explain-2{
              display:inline-block;
              font-family: '微软雅黑';
              font-weight: 410;
              color:#ccc;
              font-size:14px;
              position:absolute;
              top:30px;
              left:105px;
	        }
	        .explain-3{
              display:inline-block;
              font-family: '微软雅黑';
              font-weight: 410;
              color:#F04844;
              font-size:20px;
              position:absolute;
              top:50px;
              left:110px;
	        }
	        .explain-4{
              display:inline-block;
              font-family: '微软雅黑';
              font-weight: 410;
              color:#ccc;
              font-size:16px;
              position:absolute;
              top:54px;
              left:157px;
	        }
	     }
	   }
      .Spike{
         width:100%;
         height:35px;
         border-bottom:solid #ddd 1px;
        .countTime{
          height:35px;
          line-height:35px;
          text-align:center;
          .countTime-1{
             width:29px;
             height:16px;
             border-radius:3px;
             background-color:#464c5b;
             color:#999999;
             font-size:14px;
             margin-right:4px;
           }
            .countTime-2{
             width:29px;
             height:16px;
             border-radius:3px;
             background-color:#464c5b;
             color:#fff;
             font-size:14px;
             margin-right:4px;
           }
           .countTime-3{
             width:29px;
             height:16px;
             border-radius:3px;
             background-color:#464c5b;
             color:#fff;
             font-size:14px;
             margin-right:4px;
           }
           .countTime-4{
             width:29px;
             height:16px;
             border-radius:3px;
             background-color:#464c5b;
             color:#fff;
             font-size:14px;
           }
         }
       }
       .some{
         width:100%;
         height:120px;
         .lingquan{
          width:100%;
          height:33.33%;
          display:inline-block;
          border-bottom:solid #ddd 1px;
          line-height:45px;
          font-weight: 400;
	      font-size: 13px;
	      color: rgb(153, 153, 153);
          .some_content{
             display:inline-block;
             margin-bottom:0;
           }
           .some_title{
             padding-right:10px;
             display:inline-block;
             margin-bottom:0;
             margin-left:43px;
             color:#F04844;
             font-size:14px;
             font-weight:800;
           }
         }
         .cuxiao{
          width:100%;
          height:33.33%;
          display:inline-block;
          border-bottom:solid #ddd 1px;
          line-height:45px;
          font-weight: 400;
	      font-size: 13px;
	      color: rgb(153, 153, 153);
	          .some_content_cuxiao{
	             display:inline-block;
	             margin-bottom:0;
	             color:#F04844;
	             font-size:12px;
	             font-weight:800;
	           }
	           .some_title{
	             display:inline-block;
	             margin-bottom:0;
	             margin-left:43px;
           }
         }
         .fuwu{
          width:100%;
          height:33.33%;
          display:inline-block;
          border-bottom:solid #ddd 1px;
          line-height:45px;
          font-weight: 400;
	      font-size: 13px;
	      color: rgb(153, 153, 153);
          .some_title{
             display:inline-block;
             margin-bottom:0;
             margin-left:43px;
             padding-right:10px;
           }
           .some_content{
             display:inline-block;
             margin-bottom:0;
		    span{
             padding: 0px 15px;
		     background-image: url(/static/images/icon/duihao.png);
		    background-size: 14px 14px;
		    background-repeat: no-repeat;
		     }
           }
           
         }

       }
         .describe{
           width:100%;
           height:140px;
           padding-left:43px;
           padding-right:20px;
           border-bottom:1px solid #ddd;
           .describe-1{
                 display:block;
                 width:100%;
                 height:30px;
                 line-height:30px;
	             color:#999999;
	             margin-left:113px;
	             margin-right:20px;
	             margin-bottom:0px;
	             font-size:16px;
	             font-weight:700;
	          }
	          .describe-2{
	          color:#999999;
	          font-size:13px;
	      }
          }
         .detail_right_footer{
            width:100%;
            height:50px;
            border-top:solid #ddd 1px;
            border-bottom:solid #ddd 1px;
            margin-top:30px;
        }
         .detail_right_footer{
            width:100%;
            height:50px;
            position:relative;
             .Customer_service{
              display:inline-block;
              width:73px;
              height:50px;
              text-align:center;
              // line-height:50px;
              img{
               width:30px;
               height:30px;
              }
              .Customer_service_1{
               display:block;
               color:#999;
               font-size:13px;
               margin-bottom:0;
              }
            }
            .gouwuche{
              display:inline-block;
              width:73px;
              height:50px;
              text-align:center;
              color:#999;
              font-size:13px;
           
           img{
               width:26px;
               height:26px;
              }
	         .gouwuche-1{
              margin-bottom:0;
	            
	             }
             } 
         .putinCar{
              display:inline-block;
              width:115px;
              background-color:rgba(26, 188, 156, 1);
              height:50px;
              position:absolute;
              top:0;
              right:112px;
              text-align:center;
              line-height:50px;
            }
          .buyNow{
              display:inline-block;
              width:115px;
              background-color: rgba(255, 168, 71, 1);
              height:50px;
              position:absolute;
              top:0;
              right:0px;
              text-align:center;
              line-height:50px;
            }
         }
          
	 }
	
	
</style>
<script type="text/javascript">
	import { mapActions } from "vuex";
	export default {
		data() {
			return {
				swip1:[],
				swip2:[],
				zhuanti: [],
				hotSale: [],
				infoImg: [],
				colors: [],
				// size: [],
				click: [],
				if_click1: [],
				bd_color: [],
				left: 0,
				s_images: "static/images/detail/img1.jpg",
				bgColor: "white",
				time: "",
				day: 0,
				hor: 0,
				min: 0,
				sec: 0,
				value1: "",
				value2: "",
				num: 0,
				checkedColor: -1,
				checkedSize: -1,
				// buyNum: 0,
				arr: [],
				prod: {id: "", name: "", price: 0, color:"", size: "", num: 0}
			}
		},
		created(){
			this.getData()
	
		},
		mounted() {
			// this.count()
		},
		watch: {
			checkedColor() {
				if(this.checkedColor < 0) {
					return this.if_click1.fill("");
				}
				// console.log(this.if_click1.length)
				// this.if_click1.fill("");
				var arr2 = this.colors[this.checkedColor].size.forEach((item2, index2) => {
					if(item2.num === 0) {
						this.if_click1[index2] = "disabled";
					}else {
						this.if_click1[index2] = "";
					}
				})
				// console.log(this.if_click1, 888)
			},
			checkedSize() {
				if(this.checkedSize < 0) {
					return;
				}
			}
		},
		methods: {
			getData() {
				this.$http
					.get("/static/data/detail.json")
					.then(({data}) => {
						// console.log(typeof data)
						// console.log(data)
						var res = (new Function("return " + data))();
						this.swip1 = res.product[0];
						this.swip2 = res.relatedProduct;
						this.zhuanti = res.zhuanti;
						this.hotSale = res.hotSale;
						this.time = res.miaosha[0].time;
						this.click = res.product[0].size;
						this.colors = res.product[0].colors;
						// this.size = res.product[0].size;
						// let id = res.product[0].id;
						// let name = res.product[0].name1;
						// let price = res.product[0].price_now;
						// this.arr = this.arr.concat(id, name, price);
						// console.log(this.arr)
						this.if_click1 = new Array(this.colors[0].size.length).fill("");
						console.log(this.if_click1,'if_click1')
						this.count();
						// console.log(this.arr)
					})
			},
			// 颜色
			toggleColor(index) {
				if(this.checkedColor === index) {
					
					return this.checkedColor = -1;
				}
				if(this.checkedSize >= 0 && this.colors[index].size[this.checkedSize].num <= 0) {
					return;
				}
				this.checkedColor = index;
			},
			// 尺码
			toggleSize(index) {
				if(this.checkedSize === index) {
					return this.checkedSize = -1;
				}
				if( this.if_click1[index]) {
					return;
				}
				this.checkedSize = index;
			},
			num_add() {
				this.num ++;

			},
			num_reduce() {
				this.num --;
				if(this.num <= 0) {
					this.num = 0;
				}
			},
			change_position_left() {
				this.left += -520;
				if(this.left <= -520) {
					this.left = -520
				}
			},
			change_position_right() {
				this.left += 520;
				if(this.left >= 0) {
					this.left = 0
				}
			},
			change_images(id) {
				switch(id) {
					case 0:
						this.s_images = this.swip1.img[0].img
						console.log(222)
						break;
					case 1:
						this.s_images = this.swip1.img[1].img
						break;
					case 2:
						this.s_images = this.swip1.img[2].img
						break;
					case 3:
						this.s_images = this.swip1.img[3].img
						break;
					case 4:
						this.s_images = this.swip1.img[4].img
						break;								 	
				}	
			},
			count() {
				// 返回该日期距离70-1-1的毫秒数
				const endTime = Date.parse(new Date(this.time));
				// console.log(endTime)
				const startTime = Date.parse(new Date());
				// console.log(startTime)
				const totalMsc = endTime - startTime;
				// console.log(totalMsc)
				let day = parseInt(totalMsc/24/60/60/1000);
				let hor = parseInt(totalMsc/1000/60/60%24);
				let min = parseInt(totalMsc/1000/60%60);
				let sec = parseInt(totalMsc/1000%60);
				this.day = day || "--";
				this.hor = hor || "--";
				this.min = min || "--";
				this.sec = sec || "--";
				// console.log(day, hor, min, sec)
				setTimeout(() => {
					this.count()
				}, 1000)
			},
			buyNow() {
			},
			putinCar() {
				this.prod.id = this.swip1.id;
				this.prod.name = this.swip1.name1;
				this.prod.price = this.swip1.price_now;
				this.prod.color = this.colors[this.checkedColor].color;
				this.prod.size = this.colors[this.checkedColor].size[this.checkedSize].size;
				this.prod.num = this.num;
				this.arr = this.arr.concat(this.prod);
				this.$store.commit("putintoCar", this.arr);
				console.log(this.$store.state.shopCarProduct, 888);
			}
		}
	}
</script>
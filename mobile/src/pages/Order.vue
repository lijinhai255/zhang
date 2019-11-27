<template>
    <div id="app">
        <Header></Header>
        <div class="pay">
            <div class="pay-header">
                <h3>提交订单：</h3>
                <p  v-for="(item, index) in $store.state.foodsList" :key="index" ><span>{{item.name}}</span><OrderContorl :food="item"></OrderContorl></p>
            </div>
            <div class="pay-for">
                <div class="num-box">
                    <p>数量</p>
                   
                </div>
                <div class="money-box">
                    <p>小计</p>
                    <span class="money">¥<strong>{{dealMoney}}</strong></span>
                </div>
            </div>
            <div class="discount">
                <p>现金券/抵用券/优惠码</p>
                <i></i>
            </div>
            <div class="submit-order" @click="submitOrder">
                    提交支付
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../base.scss";
    #app {
        overflow: hidden;
    }
    .pay {
        margin-top: 50px;
        .pay-header {
            padding: 15px;
            background-color: #fff;

            h3 {
                font-size: 22px;
            }
            p {
                font-size: 16px;
                color: #999;
                line-height: 26px;
                display: flex;
                span{
                    flex:1;
                }
                .buyctl{
                    
                }

            }
        }
        .pay-for {
            padding: 5px 15px;
            font-size: 16px;
            margin-top: 20px;
            background-color: #fff;
            .num-box {
                display: flex;
                padding: 10px 0 10px 0;
                align-items: center;
                border-bottom: 1px solid #ccc;
                p {
                    flex: 1;
                }
                .num-right {
                    flex: 1;
                    text-align: center;
                    span {
                        display: inline-block;
                        border: 1px solid #ccc;
                        margin-left: 5px;
                        box-sizing: border-box;
                        text-align: center;
                        width: 30px;
                        border-radius: 2px;
                        padding: 5px 0 5px;
                        color: #f63;
                        font-size: 18px;
                    }
                    input {
                        width: 42px;
                        border: 1px solid #bbb;
                        color: #333;
                        font-size: 15px;
                        line-height: 28px;
                        text-align: center;
                        margin-left: 5px;
                    }
                }
            }
            .money-box {
                padding: 13px 0;
                display: flex;
                p {
                    flex: 1;
                }
                span {
                    flex: 1;
                    text-align: center;
                    color: #333;
                    font-size: 20px;
                    strong {
                        padding-left: 5px;
                    }
                }
            }
        }
        .discount {
            margin: 20px 0 20px;
            background-color: #fff;
            padding: 15px;
            font-size: 16px;
            overflow: hidden;
            p {
                float: left;
            }
            i {
                float: right;
                background: url("/static/mtmobile/imgs/icon/arrow-right.png") no-repeat;
                width: 7px;
                height: 13px;
                background-size: 7px 13px;
            }
        }
        .submit-order {
            padding: 15px 15px;
            text-align: center;
            width: 80%;
            margin: 30px auto;
            background-color: $navColor;
            color: #fff;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 700;
        }
    }

</style>

<script>

    import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import Header from "../components/mtheader/MtHeader"
    // import BuyControl from "../components/buycontrol/BuyControl"
    import OrderContorl from "../components/orderControl/OrderControl"
  export default {
        components:{  Header ,OrderContorl },
        data() {
            return {
                productObj: {},
                num: 0,
                str: true
            }
        },
        created() {
            // let productObj = this.$store.state.productObj;
            // this.productObj = productObj;
            // console.log(this.$router)
        },
        methods: {
            submitOrder() {
                if (this.dealMoney === 0) {
                    Toast({
                        message: '请先选购商品，再提交订单',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                MessageBox.confirm( '需支付' + this.dealMoney + '元', '支付订单')
                    .then( () => {
                        Toast({
                            message: '支付成功',
                            position: 'middle',
                            duration: 2000
                        });
                        setTimeout( () => {
                            // window.location.href = 'http://localhost:8080/#/home';
                            this.$router.push("/home");
                        }, 2000);
                    }, () => {
                        Toast({
                            message: '支付失败',
                            position: 'middle',
                            duration: 2000
                        });
                    });



            },
            reducenum() {
                if (this.num <= 0) {
                    this.num = 0;
                }else {
                    this.num--;
                }
            },
            addnum() {
                this.num++;
            }
        },
        computed: {
            dealMoney() {
                if (this.productObj.price === undefined) {
                     return 0;
                }
                return this.num * this.productObj.price
            }
        }
    }
</script>


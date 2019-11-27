<!--模板-->
<template>
    <div class="product-list">
        <router-link class="inner" tag="div" :to="'/foodDetail/' + data.id">
            <img :src="'/static/mtmobile/imgs/list/' + data.img" alt="">
            <div class="content">
                <h3>{{data.title}}</h3>
                <div class="shop_name_sub">{{data.shop_info}}</div>
                <p>
                    <span class="price">{{data.price}}</span>
                    <span class="origin-price">{{data.originPrice}}</span>
                    <span class="sales">
                        已售<em>{{data.sales}}</em>
                    </span>
                </p>
            </div>
            <div class="pic_tag">免预约</div>
        </router-link>
    </div>
</template>

<style lang="scss">
    @import "../../base.scss";
    em {
        font-style: normal;
    }
    .product-list {
        background-color: #fff;
        .inner {
            margin: 0 10px;
            padding: 10px 0;
            display: flex;
            border-bottom: 1px solid #ccc;
            position: relative;
            img {
                width: 90px;
                height: 90px;
            }
            .content {
                flex: 1;
                padding-left: 10px;
                h3 {
                    max-width: 200px;
                    font-size: 17px;
                    font-weight: 700;
                    color: #111;
                    padding-right: 8px;
                    box-sizing: border-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .shop_name_sub {
                    max-width: 195px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 13px;
                    color: #777;
                    padding-top: 9px;
                    padding-bottom: 13px;
                }
                p {
                    font-size: 12px;
                }
                .price {
                    color: $navColor;
                    font-size: 22px;
                    font-weight: 700;
                    &:before {
                        content: '\A5';
                        font-size: 14px;
                        margin-right: 8px;
                        vertical-align: 1px;
                    }
                }
                .origin-price {
                    font-size: 12px;
                    color: #777;
                    text-decoration: line-through;
                    vertical-align: 1px;
                    margin-left: 5px;
                    &:before {
                        content: '\A5';
                        margin-right: 3px;
                    }
                }
                .sales {
                    float: right;
                    text-align: right;
                    font-size: 14px;
                    color: #777;
                    line-height: 24px;
                }
                em {
                    color: $navColor;
                    font-weight: 700;
                }
            }
            .pic_tag{
                font-size: 12px;
                -webkit-transform: scale(.98);
                transform: scale(.98);
                padding: 3px 7px;
                background-color: #000;
                color: #e5bf86;
                position: absolute;
                font-weight: 700;
            }
        }
    }
</style>

<script>
    export default {
        // 接受父组件传递过来的数据
        props: ['data'],
       
    }
</script>
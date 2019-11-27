<template>
    <div class="wrapper">
        <div class="title">
            <i class="icon"></i>
            <span class="text">吃喝玩乐，找优惠</span>
        </div>
        <div class="btns">
            <a class="btn-openapp" href="javascript:;">打开大众点评</a>
            <a class="btn-downloadapp" href="javascript:;">下载APP享特价</a>
        </div>
    </div>
</template>



<style scoped lang="less">
    .wrapper {
        margin-top: 50px;
        height: 120px;
        background: url("/static/mtmobile/imgs/ad/topbanner.jpg") no-repeat center;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        .title {
            display: flex;
            justify-content: center;
            margin: 24px 0 14px;
            height: 30px;
            .icon {
                height: 30px;
                width: 30px;
                background: url("/static/mtmobile/imgs/icon/logo.png") no-repeat center;
                background-size: 100% 100%;
                margin-right: 8px;
            }
            .text {
                font-size: 20px;
                color: #111;
                font-weight: bolder;
            }
        }
        .btns {
            display: flex;
            justify-content: center;
            a {
                height: 40px;
                width: 126px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                border-radius: 2px;
                border: 1px solid #f63;
                text-decoration: none;
                &.btn-openapp {
                    color: #f63;
                    margin-right: 15px;
                }
                &.btn-downloadapp {
                    color: #fff;
                    background-color: #f63;
                }
            }
        }
    }
</style>


<script>
    export default {

    }
</script>

<template>
    <header class="app-header">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <div class="app-search" v-show="$route.fullPath.indexOf('/detail/') !== 0">
                <input type="text" v-model="msg" @keyup.enter="gotoSearch" placeholder="请输入搜索关键字">
            </div>
            <div class="login">登录</div>
        </header>
</template>
<style type="text/css" lang="scss">
@import '../../base.scss';
        .app-header {
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: $navColor;
        color: #fff;
        padding: 0 10px;
        text-align: center;
        display: flex;
        z-index: 305;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        .goback {
            width: 50px;
            position: relative;
            .arrow {
                @include arrow(10px, #fff, right);
                position: absolute;
                top: 16px;
                left: 10px;
                &.green {
                    top: 16px;
                    left: 12px;
                    border-right-color: $navColor;
                }
            }
        }
        .app-search {
            flex: 1;
            padding-left: 30px;
            height: 30px;
            margin: 9px 6px 9px 10px;
            line-height: 30px;
            text-align: left;
            font-size: 14px;
            border-radius: 25px;
            overflow: hidden;
            position: relative;
            background: #fff url("/static/mtmobile/imgs/icon/header_search_ico.png") no-repeat 9px 8px;
            input {
                width: 100%;
                border: none;
                outline: none;
                height: 30px;
                color: #b8b8b8;
            }
        }
        .login {
            width: 50px;
        }
    }
</style>
<script>
export default {
    data(){
        return {
            msg:'',
        }
    }
}
</script>

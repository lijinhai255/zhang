<template>
     <div class="num-right">
                        <span class="reduce" @click="reducenum">-</span>
                        <input type="text" v-model="num">
                        <span class="add" @click="addnum">+</span>
     </div>
</template>

<script>
export default {

}
</script>

<style type="text/css" lang="scss">
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
</style>

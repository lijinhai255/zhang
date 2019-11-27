<template>
    <ul class="types clearfix">
            <router-link tag="li" v-for="(item, index) in types" :key="index" :to="'/'+ item.id ">
                <img :src="'/static/mtmobile/imgs/icon/' + item.url" alt="">
                <p>{{item.text}}</p>
            </router-link>
        </ul>
</template>
<script>
export default {
    data(){
        return{
            types: [
                    {url: '1.png', text: '美食', id: 'food'},
                    {url: '2.png', text: '猫眼电影', id: 'movie'},
                    {url: '3.png', text: '酒店', id: 'hotel'},
                    {url: '4.png', text: '休闲娱乐', id: 'entertainment'},
                    {url: '5.png', text: '外卖', id: 'AllSeller'},
                    {url: '6.png', text: '火锅', id: 'hotPot'},
                    {url: '7.png', text: '丽人', id: 'entertainment'},
                    {url: '8.png', text: '购物', id: 'entertainment'},
                    {url: '9.png', text: '周边游', id: 'entertainment'},
                    {url: '10.png', text: 'KTV', id: 'ktv'}
                ],
        }
    }
}
</script>


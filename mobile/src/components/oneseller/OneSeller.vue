<template>
  <div>
      <!-- <Header></Header> -->
    <router-link to="/good" tag="div">
      <div class="tskeawayhome">
      <div class="tskeawayhome-pic">
        <img :src="data.picUrl" alt>
      </div>
      <div class="tskeawayhome-right">
        <h4>{{data.shopName}}</h4>
        <i class="el-icon-star-on" v-for="(item, index) in arr" :key="index" ></i>
        <span>{{data.wmPoiScore/10}}</span>
        <div class="time">
          <span>{{data.deliveryTimeTip}}</span>
          <span>{{data.distance}}</span>
        </div>
        <div class="maney">
          <span>{{data.minPriceTip}}</span>
          <span>{{data.shippingFeeTip}}</span>
          <span v-if="data.averagePriceTip">{{data.averagePriceTip}}</span>
        </div>
        <div class="recommendInfo" v-if="data.wmPoiScore>=47">
          <!-- <img  :src="data.recommendInfo.icon && data.recommendInfo.icon" alt=""> -->
          <!-- <div>{{data.recommendInfo.recommendReason === unll ? "大众点评高分店": data.recommendInfo.recommendReason  }}</div> -->
          <p>美团专送</p>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
// import Header from '../header/Header';
export default {
  props: ["data"],
  components:{
  },
  data() {
    return {
      arr:[]
    };
  },
  created() {
    var arr1 = [];
    for (var i = 0; i < this.data.wmPoiScore/10; i++) {
      arr1.push(i);
    }
    this.arr = arr1
    // console.log(this.data.wmPoiScore);
  },
  methods:{
    
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/tastawayHome";
</style>
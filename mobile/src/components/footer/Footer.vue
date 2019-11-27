<template>
  <div class="footer">
    
    <div class="footer-part-one" v-if="isShowFooter">
      <a href="javascript:;">我的 </a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">社区论坛</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">添加商户</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">意见反馈</a>
      <br>
      <a href="javascript:;">美团网</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">美团下载</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">结婚</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">亲子</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">家装</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">宴会</a>
      <em class="wide_sep">|</em>
      <a href="javascript:;">教育</a>
      <br>
      <a href="javascript:;">电脑版</a>
      <em class="wide_sep"></em>
      <a href="javascript:;">客户端</a>
      <p class="copyright">copyright ©2018 dianping.com</p>
    </div>
    <div class="footer-part-two" v-else>
        <h3>加载更多</h3>
    </div> 
  </div>
</template>

<script>
export default {
  props: ["isShowFooter"],
  create() {
    console.log(this.props, 123);
  }
};
</script>

<style type="text/css" lang="scss">
.footer {
  .footer-part-one {
    text-align: center;
    padding: 15px 5px 10px;
    font-weight: 400;
    font-size: 12px;
    a {
      color: #adadad;
      line-height: 28px;
      text-decoration: none;
    }
    .wide_sep {
      padding: 0 6px;
      color: #8c8c8c;
      font-style: normal;
      font-weight: 400;
    }
    .copyright {
      color: #d1d1d1;
      margin-top: 20px;
      text-shadow: 0 1px 1px #fff;
    }
  }
  .footer-part-two{
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 26px;
      background: #fff;
      color: darkgray;

  }
}
</style>

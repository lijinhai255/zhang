<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view/>
    <footerNav></footerNav>
  </div>
</template>

<style lang="scss">

</style>

<script type="text/javascript">
   
   import headerNav from './components/header-nav'
   import footerNav from './components/footer-nav'

   export default {
      name:'app',
      components:{
        headerNav,
        footerNav
      }
   }
</script>

<template>
  <div id="back-to-top" v-show="isShow" @click="goTop">
    <img src="../assets/back-to-top2.png" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showBackToTop() {
        console.log($(window).scrollTop())
        this.isShow = true;

      },
      goTop() {
        console.log("aa")
        $(window).scrollTop(0);
      }
    },
    created() {
      $(window).on('scroll',this.showBackToTop);
    }
  }
</script>

<style scoped lang="less">
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  #back-to-top {
    position: fixed;
    bottom: 15%;
    right: 0;
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './router'
  export default {
    name: 'app',
    mount: {

    },
    methods: {
    jumpToFirst() {   // 编程式导航
      console.log(this)
      router.push({name: 'firstcomponent', params: {id: 555}, query: {plan: 'sd'}})
    },
    jumpToTopic() {
      router.push({name: 'topic'})
    }
  }
}
</script>

<style lang="less" type="text/css" rel="stylesheet/less">
  * {
   
  }
  html,body {
    background: #fff;
    font-family: Helvetica-Neue,Helvetica,Arial,sans-serif;
     overflow: auto!important;
  }
  img {
    width:100%;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .tag1,.tag2 {
    padding: 1% 2%;
    font-size: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .tag1 {
    color: #fff;
    background: #e74c3c;
  }
  .tag2 {
    color: #fff;
    background: #1abc9c;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 2.2rem;
    overflow-y: auto;
    .box {
      width: 100%;
    }
  }
</style>

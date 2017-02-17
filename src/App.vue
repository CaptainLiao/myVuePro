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
    overflow: auto!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-y: auto;
  .box {
    width: 100%;
  }
}
</style>

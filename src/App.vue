<template>
  <div id="app">
    <img src="./assets/logo.png" @click="getDate">

    <router-link :to="{name: 'firstcomponent', params: {id: 123}}">GO TO FIRST</router-link>
    <p @click='jumpToFirst'>go 2020 to first</p>
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
    getDate() {
        this.axios.get('https://cnodejs.org/api/v1/topics').then((res)=>{
            console.log(res)
        })
    }
  }
}
</script>

<style lang="less" type="text/css" rel="stylesheet/less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .box {
    width: 100%;
  }
}
</style>

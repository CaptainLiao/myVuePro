<template>
  <div id="header">
    <div class="h_page" :class="data.isShow">
      <header class="bar bar-nav">
        <div class="content">
          <a @click='showNavbar' class="icon icon-menu pull-left"></a>
        </div>
        <router-link class="icon icon-me pull-right" :to="{name: 'login'}"></router-link>
        <h1 class="title" v-text="title"></h1>
      </header>
    </div>
    <c-navbar></c-navbar>
  </div>
</template>

<script type="text/javascript">

  export default {
    data() {
      return {
          data: {

          },
        query: this.$route.query
      }
    },
    props:{
      title: String,
    },
    methods: {
      showNavbar() {
        $('.h_page').addClass("page page-current");
        $.openPanel("#panel-left-demo");
      }

    },
    created() {

    },
    components: {
      "c-navbar": require('./navbar.vue')
    }
  }
</script>

<style lang="less" scoped>

  .page, .page-group {

  }
</style>

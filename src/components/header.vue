<template>
  <div id="header">
    <div class="h_page" :class="data.isShow">
      <header class="bar bar-nav">
        <div class="content">
          <a @click='showNavbar' class="icon icon-menu pull-left"></a>
        </div>
        <a class="icon icon-me pull-right"></a>
        <h1 class="title">{{title}}</h1>
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
        title: 'all',
        query: this.$route.query
      }
    },
    watch: {
      "$route": "getTitle"
    },
    methods: {
      showNavbar() {
        $('.h_page').addClass("page page-current");
        $.openPanel("#panel-left-demo");
      },
      getTitle() {
        const query = this.$route.query;
        if(!query.tab) {
          this.title = "all"
        }else {
          this.title = query.tab;
        }
      }
    },
    created() {
        this.getTitle();
    }
  }
</script>

<style lang="less" scoped>

  .page, .page-group {

  }
</style>

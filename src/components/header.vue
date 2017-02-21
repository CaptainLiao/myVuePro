<template>
  <div id="header">
    <div class="h_page">
      <header class="bar bar-nav">
        <div class="content">
          <a @click='showNavbar' class="icon icon-menu pull-left"></a>
        </div>
        <a class="icon icon-refresh pull-right"></a>
        <h1 class="title">标题</h1>
      </header>
    </div>
    <c-navbar></c-navbar>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    methods: {
      showNavbar() {
        $('.h_page').addClass("page page-current");
        $.openPanel("#panel-left-demo");
      }
    }
  }
</script>

<style lang="less" scoped>
  .page, .page-group {

  }
</style>

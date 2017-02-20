<template>
  <div id="header">
    <div class="page">
      <header class="bar bar-nav">
        <div class="content">
          <a @click='showNavbar' class="icon icon-menu pull-left open-panel" data-panel='#panel-left-demo'></a>
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


      }
    }
  }
</script>

<style lang="less" scoped>
  .page, .page-group {

  }
</style>

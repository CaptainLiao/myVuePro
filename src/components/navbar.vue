<template>
	<div id="navbar">
    <div class="panel-overlay"></div>
    <!-- Left Panel with Reveal effect -->
    <div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo' @closed="removeBG">
      <div class="content-block">
        <p>这是一个侧栏</p>
        <p>你可以在这里放用户设置页面</p>
        <p><a href="#" class="close-panel">关闭</a></p>
      </div>
      <div class="list-block">
        <!-- .... -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            data: {}
        }
    },
    methods: {

      removeBG() {
        $(".h_page").removeClass('page page-current')
      }
    }

  }
</script>

<style lang="less">
  .page_bg {
    background-color: red;
  }
</style>

<template>
	<div id="navbar">
    <div class="panel-overlay"></div>
    <!-- Left Panel with Reveal effect -->
    <div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo' @closed="removeBG">
      <div class="content-block">
        <div class="user-info">
          <a href="#">登录</a>
        </div>
        <section class="line">
          <router-link :to="{'name':'topic',query:{tab:'all'}}">全部</router-link>
          <router-link :to="{'name':'topic',query:{tab:'good'}}">精华</router-link>
          <router-link :to="{'name':'topic',query:{tab:'share'}}">分享</router-link>
          <router-link :to="{'name':'topic',query:{tab:'job'}}">问答</router-link>
          <router-link class="line" :to="{'name':'topic',query:{tab:'info'}}">招聘</router-link>
          <!--<router-link :to="{'name':'info'}">信息</router-link>
          <router-link :to="{'name':'about'}">关于</router-link>-->

        </section>
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

<style lang="less" scoped>
  .page_bg {
    background-color: red;
  }
  .line {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid #d4d4d4;
  }
  section {
    padding-top: 1rem;

  }
  a {
    display: block;
    color: rgba(255,255,255,.8);
    line-height: 1.8rem;
  }

</style>

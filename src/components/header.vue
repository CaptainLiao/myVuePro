<template>
  <div id="header">
    <div class="h_page" :class="data.isShow">
      <header class="bar bar-nav">
        <div class="content">
          <a @click='showNavbar' class="icon icon-menu pull-left"></a>
        </div>
        <a class="icon icon-me pull-right" @click=toLogin></a>
        <h1 class="title" v-text="title"></h1>
      </header>
    </div>
    <c-navbar isShow="isShow">
    
    </c-navbar>
  </div>
</template>
<script type="text/javascript">

  export default {
    data() {
      return {
          data: {
            isShow: true
          },
        query: this.$route.query
      }
    },
    props:{
      title: String,
    },

    methods: {
      showNavbar() {
        this.isShow = true;
        $('.h_page').addClass("page page-current");
        //$('body').addClass('with-panel-left-reveal')
        $.openPanel("#panel-left-demo");
        //$('.panel').show();
      },
      toLogin() {
        let user = sessionStorage.getItem('user');
        if(!user) {
          this.$router.push({name: 'login'})
        }else {
          this.$router.push({name: 'userCenter', params: {username: user}})
        }
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

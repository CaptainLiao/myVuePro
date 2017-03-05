<template>
  <div id="login" class="content-block">
    <c-header title="登录"></c-header>
    <input type="text" v-model="msg" class="login-info" name="Access Token" placeholder="Access Token" />
    <p><a href="javascript:;" @click=checkToSave class="button button-fill button-success login-button">登录</a></p>
  </div>
</template>

<style type="text/css" lang="less" scoped>
  .login-info {
    border: 0;
    outline: 0;
    width: 100%;
    line-height: 1.8rem;
    margin-top: 2rem;
    border-bottom: 1px solid #4cd964;
  }
  .login-button {
    line-height: 1.8rem;
    height: 1.8rem;
    font-size: 18px;
  }
</style>

<script type="text/javascript">
  export default {
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      checkToSave() {
        let self = this;
        function saveUser(json) {
          let loginname = json.data.loginname;
          window.sessionStorage.setItem('user', loginname);
          self.$router.push({name:'userCenter', params:{username: loginname}})
        }
        this.getAjax('POST', this.CONFIG.API.checkAccessToken, {accesstoken: this.msg}, saveUser)
    
    
        //$.toast('操作成功，正在跳转...', 2345, 'success top');
        //this.$router.push({name:'userCenter', params:{username: 'CaptainLiao'}})
      
      }
    }
  }
</script>


<!-- 
<template>
  <div id="login">
    <c-header title="登录"></c-header>
    <c-form></c-form>
    <p class="content-block"><a href="javascript:;" @click=showState class="button button-fill button-success">登录</a></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        username: '111',
        password: '2222'
      }
    },
    methods: {
      ...mapGetters([
        'showState'
      ])
    },
    components: {
      "c-form": require('../components/form.vue'),
      "c-header": require('../components/header.vue')
    }
  }
</script> -->

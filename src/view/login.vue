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
</script>

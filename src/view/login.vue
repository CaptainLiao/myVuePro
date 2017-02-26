<template>
<div id="login" class="content-block">
    <c-form></c-form>
    <p><a href="javascript:;" @click=login class="button button-fill button-success">Fill Button </a></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '111',
        password: '2222'
      }
    },
    methods: {
      login() {
        console.log(this.$store.state)
      }
    },
    components: {
      "c-form": require('../components/form.vue')
    }
  }
</script>

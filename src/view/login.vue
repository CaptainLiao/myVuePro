<template>
  <div id="login">
    <cd-form></cd-form>
    <p><a href="javascript:;" @click="submit" class="button button-fill button-success">Fill Button </a></p>
  </div>

</template>

<script>

  export default {
    methods: {
      submit() {
          $.alert('登录成功')
      }
    },
    components: {
      "cd-form": require('../components/form.vue')
      }
  }
</script>

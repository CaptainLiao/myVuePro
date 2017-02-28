<template>
  <span @click="collectMes(id)" attr="attr" class="iconfont">
    &#xe7c6;
  </span>
</template>

<script>
  export default {
    data() {
      return {
          attr: '555'
      }
    },
    props: {
      id: String
    },
    methods: {
      collectMes(id) {
        console.log(this.attr);
        let user = sessionStorage.getItem('user');
        if(!user) {
          this.$router.push({name: 'login'})
        }else {
            console.log(id)
        }
      }
    }
  }
</script>

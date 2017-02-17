<template>
  <div id="topic">
    <c-header></c-header>
    <div class="content">
      <div class="content-padded">
        <div class="row" v-for="item in items">
          <div class="col-20 t_avatar">{{item.message}}</div>
          <div class="col-80 t_title">{{item.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              items:[
                {
                    message: 'FOO'
                },
                {
                    message: 'Bar'
                }
              ]
          }
      }
  }
</script>

<style>

</style>

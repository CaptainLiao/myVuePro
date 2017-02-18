<template>
  <div id="topic">
    <c-header></c-header>
    <div class="content">
      <ul class="content-padded">
        <li v-for="item in data">
          <div class="row">
            <span class="col-15 tag1" :class="">{{item.tab}}</span>
            <span class="col-85 left">{{item.title}}</span>
          </div>
          <div class="row">
            <img class="col-15 avatar" :src="item.author.avatar_url">
            <div class="col-85 t-content">
              <div class="fl">
                <p class="username">{{item.author.loginname}}</p>
                <p>dd</p>
              </div>
              <div class="fr">
                <p><span class="repply-cont">{{item.reply_count}}</span>/{{item.visit_count}}</p>
                <p>ss</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              data:[]
          }
      },
      created() {
        this.axios.get('https://cnodejs.org/api/v1/topics')
                  .then((res)=>{
                    console.log(res)
                    this.data = res.data.data;
                  })
                  .catch((res) => {
                    console.log(res)
                  })
      },
      mounted() {
         $.alert('Here goes alert text');
      }
  }
</script>

<style scope rel='stylesheet/less' lang='less'>
.t-content {
  font-size: 14px;
}
.repply-cont {
  color: #22d222;
}
li {
  margin-bottom: 4%;
}
.tag1,.tag2 {
  width: 60%;
  font-size: 10px;
  line-height: 24px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.tag1 {
  color: #fff;
  background: #22d222;
}
.tag2 {
  color: #666;
  background: #ddd;
}
</style>

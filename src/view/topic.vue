<template>
  <div id="topic">
    <c-header></c-header>
    <div class="content-padded">

      <ul >
        <li v-for="item in data">
          <div class="row">
            <avatar class="col-15 avatar" :avatar_url="item.author.avatar_url" :u_id="item.author_id"></avatar> 
            <div class="col-85">
              <h5 class="left t-title" @click='toTopicDetail(item.id)' :data-id="item.id">
                <span class="tag1" :class="item.tag">{{item.tab}}</span>
                {{item.title}}
              </h5>
              <div class="t-content left">
                <div class="fl">
                  <p class="username">{{item.author.loginname}}</p>
                  <p>{{item.create_time}}</p>
                </div>
                <div class="fr right">
                  <p><span class="repply-cont">{{item.reply_count}} </span> / {{item.visit_count}}</p>
                  <p>{{item.last_reply_time}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    import utils from '../lib/utils.js'
    export default {
      data() {
        return {
          data:[]
        }
      },
      props: {
        "data-id": String
      },
      methods: {
        toTopicDetail(id) {
          console.log(id)
          this.$router.push({name: 'topicDetail',params:{id: id}});
        }
      },
      mounted() {
        $.showPreloader();
        this.axios.get(this.CONFIG.API.topicList)
        .then((res)=>{
          console.log(res)
          $.hidePreloader();
          let data = res.data.data;
          data.forEach((item) => {
            let tab = item.tab;
            let create_at = item.create_at;
            let reply_at = item.last_reply_at;
            if (!tab || tab == "") {
              item.tab = 'other'
            }
            if(tab == "share" || tab == "job") {
              item.tag = this.CONFIG.TAG.tag1
            }else {
              item.tag = this.CONFIG.TAG.tag2
            }
            item.create_time = utils.transformDate(create_at);
            item.last_reply_time = utils.transformDate(reply_at);
          })
          this.data = data;
        })
        .catch((res) => {
          console.log(res)
        })
      }
    }
  </script>

  <style scoped rel='stylesheet/less' lang='less'>
    .t-content {
      margin-top: 5%;
      font-size: 14px;
      font-weight: normal;
    }
    .repply-cont {
      color: #22d222;
    }

    h1,h2,h3,h4,h5,h6,p,ul,li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul {

    }
    li {
      margin-bottom: 4%;
      padding-bottom: 2%;
      border-bottom: 1px solid #e6e0e0;
    }
    .t-title {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  </style>

<template>
  <div id="topic_detail">
    <c-header title="主题"></c-header>

    <div class="content-padded">
      <section class="td_title">
        <h4><span :class="data.tag">{{data.tab}} </span> {{data.title}}</h4>
        <div class="changes">
          <span>发表于 {{data.create_time}}</span>
          <span>作者 {{data.loginname}}</span>
          <span>{{data.visit_count}} 次浏览</span>
          <span>来自 {{data.tab}}</span>
        </div>
      </section>
      <section v-html="data.content">this is a topic detail</section>
      <section class="topic_reply">
        <p class="reply_total"><span>{{data.reply_total}}</span> 回复</p>
        <div class="reply_list">
          <div class="reply_item" v-for="item in data.replies">
            <div class="row">
              <avatar class="col-15 avatar" :avatar_url="item.author.avatar_url" :username="item.author.loginname"></avatar>
              <div class="col-85">
                <div class="fl"><span>{{item.author.loginname}}</span> 发表于 {{item.reply_time}}</div>
                <div class="fr">
                  <span>{{item.likes}}</span>
                  <c-collect></c-collect>
                  <c-share :des="item.content"></c-share>

                </div>
              </div>
            </div>
            <div v-html="item.content"></div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        data: {}
      }
    },
    mounted() {
      let id = this.$route.params.id;
      let _this = this;
      let renderPage = (res)=> {
        let data =  res.data.data;
        let tab = data.tab;
        if (!tab || tab == "") {
          data.tab = 'other'
        }
        if(tab == "share" || tab == "job") {
          data.tag = _this.CONFIG.TAG.tag1
        }else {
          data.tag = _this.CONFIG.TAG.tag2
        }
        data.create_time= _this.utils.transformDate(data.create_at)
        data.loginname = data.author.loginname
        let replies = data.replies;
        if(replies && replies instanceof Array) {
          data.reply_total = replies.length;
          replies.forEach((item) => {
            item.reply_time = _this.utils.transformDate(item.create_at);
          })
        }else {
          data.reply_total = 0;
        }
        _this.data = data;
      }
      this.getAjax('GET', this.CONFIG.API.topicInfo+ id, '', renderPage)
    },
    components: {
      "c-share": require("../components/share.vue"),
      "c-collect": require('../components/collect.vue')
    }
  }
</script>

<style scoped rel='stylesheet/less' lang='less'>
  .changes {
    font-size: 12px;
    span {
      &:before {
        content: "•";
        margin-right: 1%;
      };
    };
  }
  .reply_list {

    .col-85 {
      font-size: 14px;
    }
  }
  .reply_total {
    margin: 0;
    border-top: 1px solid #ccc;
    line-height: 2rem;

    span {
      margin-left: 4%;
      color: #1abc9c;
    }
  }
  .reply_item {
    padding-top: 4%;
    border-top: 1px solid #ccc;
  }
</style>

<template>
    <div id="user_center">
        <c-header title="用户中心"></c-header>
        <div class="avatar">
            <div class="avatar_img">
                <avatar :avatar_url="data.avatar_url" :username="data.loginname"></avatar>
                <p>{{data.loginname}}</p>
            </div>
            <div class="row avatar_info">
                <span class="col-50 left">创建时间：{{data.create_time}}</span>
                <span class="col-50 right">积分：<span class="score">{{data.score}}</span></span>
            </div>
        </div>

        <div class="u_wrap">
            <div class="buttons-tab">
                <a href="#tab1" class="tab-link active button">最近回复</a>
                <a href="#tab2" class="tab-link button">最新发布</a>
            </div>
            <div class="content-block">
                <div class="tabs">
                  <div id="tab1" class="tab active">
                    <div class="content-block">
                        <ul>
                            <li v-for="item in data.recent_replies">
                                <div class="row">
                                  <div class="col-15">
                                      <avatar :avatar_url="item.author.avatar_url" :username="item.author.loginname"></avatar>
                                  </div>
                                  <div class="col-85">
                                    <h5 class="left t-title" @click='toTopicDetail(item.id)' :data-id="item.id">
                                      {{item.title}}
                                  </h5>
                                  <div class="t-content left">
                                    <span class="username">{{item.author.loginname}}</span>
                                    <span class="repply-cont">{{item.last_reply_time}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="tab2" class="tab">
            <div class="content-block">
                <ul>
                <li v-for="item in data.recent_topics">
                        <div class="row">
                          <div class="col-15">
                              <avatar :avatar_url="item.author.avatar_url" :username="item.author.loginname"></avatar>
                          </div>
                          <div class="col-85">
                            <h5 class="left t-title" @click='toTopicDetail(item.id)' :data-id="item.id">
                              {{item.title}}
                          </h5>
                          <div class="t-content left">
                            <span class="username">{{item.author.loginname}}</span>
                            <span class="repply-cont">{{item.last_reply_time}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

</template>

<script>
    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
          toTopicDetail(id) {
            this.$router.push({name: 'topicDetail',params:{id: id}});
          },
          fetchDate() {
            let _this = this;
            let username = this.$route.params.username;
            let renderPage = (res) => {
              let data = res.data.data;
              let replies = data.recent_replies;
              let topics = data.recent_topics;
              data.create_time = data.create_at.split('T')[0];
              replies.forEach((item)=> {
                item.last_reply_time = _this.utils.transformDate(item.last_reply_at)
            })
              topics.forEach((item)=> {
                item.last_reply_time = _this.utils.transformDate(item.last_reply_at)
            })
              _this.data = data;
            }
            this.getAjax("GET", this.CONFIG.API.userCenter + username, '', renderPage)
          }
        },
        created() {
          this.fetchDate();

        },
        watch: {
            "$route": "fetchDate"
        }
    }
</script>

<style type="text/css" ref="stylesheet/less" lang="less" scoped>
  .avatar {
    width: 100%;
    padding-top: 4%;
    text-align: center;
    background: #ddd;
  }

  .avatar_img {

  img {
    width: 4rem;
    height: 4rem;
  }

  }
  .avatar_info {
    margin: 0 4% 0 0;
    padding: 2rem 0 .5rem 0;
    font-size: 14px;
  }

  .score {
    color: #22d222;
  }

  .t-content {
    margin-right: 4%;
    margin-top: 5%;
    font-size: 14px;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
  }

  .repply-cont {
    color: #22d222;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {

  }

  li {
    margin-bottom: 4%;
    padding: 2% 0;
    border-bottom: 1px solid #e6e0e0;
    &:last-of-type {
      border: 0;
     }
  }

  .t-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .content-block {
    margin: 0;
    padding: 0;

  .row {
    margin: 0;
  }

  }
</style>

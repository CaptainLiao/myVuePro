import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import FirstComponent from 'components/firstcomponent'

/**
 * view层
 */
import Topic from 'view/topic'
import TopicDetail from 'view/topic_detail'
import UserCenter from 'view/user_center'
import login from 'view/login'

const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/first/:id',
    name: 'firstcomponent',
    component: FirstComponent
  },
  {
    path:'/',
    name:'topic',
    component: Topic
  },
  {
    path: '/topic/:id',
    name: "topicDetail",
    component: TopicDetail
  },
  {
    path: "/user/:username",
    name: "userCenter",
    component: UserCenter
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
];

export default routes
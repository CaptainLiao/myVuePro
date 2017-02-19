import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import FirstComponent from 'components/firstcomponent'
/**
 * view层
 */
import Topic from 'view/topic'
import TopicDetail from 'view/topic_detail'


Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/first/:id',
    name: 'firstcomponent',
    component: FirstComponent
  },
  {
    path:'/topic',
    name:'topic',
    component: Topic
  },
  {
    path: '/topic/:id',
    name: "topicDetail",
    component: TopicDetail
  }
];
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})

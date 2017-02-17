import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import FirstComponent from 'components/firstcomponent'
import Topic from 'view/topic'

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
  }
];
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})

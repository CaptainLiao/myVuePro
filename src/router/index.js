import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import FirstComponent from 'components/firstcomponent'

Vue.use(Router)
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
    }
  ]
export default new Router({
	mode: 'history',
  base: __dirname,
  routes: routes
})

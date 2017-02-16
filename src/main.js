// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ajax from './lib/utils'

import FirstComponent from './components/firstcomponent.vue'

Vue.use(VueAxios, axios);
Vue.prototype.$ajax = ajax;

Vue.component('first-component', FirstComponent)
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ajax from './lib/utils'

import Hello from  './components/Hello.vue'
import FirstComponent from './components/firstcomponent.vue'
import Header from './components/header.vue'

Vue.use(VueAxios, axios);



Vue.component('first-component', FirstComponent)
Vue.component('c-header', Header)
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

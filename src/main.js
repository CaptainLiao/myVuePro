// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import utils from './lib/utils'

import Hello from  './components/Hello.vue'
import FirstComponent from './components/firstcomponent.vue'
import Header from './components/header.vue'
import Avatar from './components/avatar.vue'
import Navbar from './components/navbar.vue'
import BackTop from './components/backTop.vue'

import CONFIG from './lib/config.js'

Vue.use(VueAxios, axios);

Vue.prototype.CONFIG = CONFIG;
Vue.prototype.getAjax = utils.getAjax;
Vue.prototype.utils = utils;
Vue.prototype.$nextTick = function (fn) {
  return Vue.nextTick(fn, this)
};




Vue.component('first-component', FirstComponent)
Vue.component('avatar', Avatar)
Vue.component('c-header', Header)
Vue.component('c-navbar', Navbar)
Vue.component('back-top', BackTop)
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

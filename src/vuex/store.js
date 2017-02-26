/**
 * vuex 解决的是同一页面组件间的状态传递和管理问题
 */
 import Vue from 'vue'
 import Vuex from 'vuex'
 import * as actions from './actions'
 import * as getters from './getters'
 import login from './modules/login'

 Vue.use(Vuex)

 const state = {
  register: '',
  pwd: ''
}

const mutations = {
  // saveName1 (state,msg) {
  //   state.username = msg;
  // },
  // savePwd1 (state,msg) {
  //   state.password = msg;
  // }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    login
  }
})
/**
 * vuex 解决的是同一页面组件间的状态传递和管理问题
 */
 import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)

 const state = {
  username: '',
  password: ''
}
const actions = {
  saveName ({ commit }, name) {
    commit('saveName1',name)
  },
  savePwd({commit}, pwd) {
    commit('savePwd1',pwd)
  }
}
const mutations = {
  saveName1 (state,msg) {
    state.username = msg;
  },
  savePwd1 (state,msg) {
    state.password = msg;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
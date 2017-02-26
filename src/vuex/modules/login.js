const state = {
  username: '',
  password: ''
}
const getters = {
  showState (state) {
    console.log(state.password)
    console.log(state.username)
  }
}
const actions = {
  saveName({ commit }, name) {
    commit('saveName1',name)
  },
  savePwd({ commit }, pwd) {
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

export default {
  state,
  getters,
  actions,
  mutations
}
const state = {
  username: '',
  password: ''
}
const getters = {
  showState (state) {
    let user = {};
    if(!state.username) {
      $.alert('请填写用户名！')
      return
    }
    if(!state.password) {
      $.alert("请填写密码！")
      return
    }
    $.alert('登录成功！', ()=> {
      user.username = state.username;
      user.password = state.password;
      window.sessionStorage.setItem('user', JSON.stringify(user))
      history.go(-1)
    })
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
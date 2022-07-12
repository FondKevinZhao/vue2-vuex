export default {
  namespaced: true,
  state: {
    isLogin: false,
    uname: 'abc',
  },
  mutations: {
    getUname(state, payload) {
      state.uname = payload;
    },
    deleUname() {
      state.uname = '';
    }
  }
}
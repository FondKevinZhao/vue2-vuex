export default {
  namespaced: true, // 开启了命名空间，让你下面的actions、mutations以及getters的作用域是当前的模块下，而不是挂载在全局
  state: {
    cityName: '北京'
  },
  mutations: {
    changeCity(state, payload) {
      state.cityName = payload;
    }
  },
  actions: {
    getCity({ commit }, city) {
      commit('changeCity', city);
    },
    // 获取全局的actions
    // 局部模块的context对象，可以访问全局的数据state getters mutations actions 包括其他的模块全可以访问
    // context = {dispatch: '', commit:"", state:"", getters:"", rootState: "", rootGetters:""}
    getGlobalAction(context) {
      console.log(context);

      // 想访问全局的actions 或者是 全局mutations 都是可以的
      // 调用全局的mutations中的修改用户名
      // context.commit('changeUser', '全局的user', { 开启root: true });
      context.commit('changeUser', '全局的user', { root: true });
    }
  },
  getters: {
    cityVal: state => {
      return state.cityName + '帝都'
    },
    // 获取全局的内容
    // getters数据处理的时候，获取全局的getters或者state数据
    getGlobalCity(state, getters, rootState, rootGetters) {
      /* 
        四个参数：通过打印可以看到
          - state：获取当前模块的数据
          - getters：获取当前模块的所有的getters
          - rootState：获取根上的state数据，可以获取其他模块的数据
          - rootGetters：获取根上的所有的getters，全局的和所有模块的getters
      */
      console.log(state, getters, rootState, rootGetters); // 打印这四个对象
    }
  }
}
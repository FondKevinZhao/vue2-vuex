import Vue from 'vue'
// 使用vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import cityModule from './modules/cityModule'
import loginModule from './modules/loginModule'

// 创建store仓库
const store = new Vuex.Store({
  // 1. 共享的数据 --- state状态/数据，任意类型
  // state: state, // 对象简写
  state,

  // 2. 修改state数据 --- 里面包含的是方法，修改state数据
  mutations,

  // 3. atctions: 操作异步，执行mutations
  actions,

  // 4. getters：对数据加工处理或者过滤。江湖人称：vuex版本的计算属性
  getters,

  // 5. 模块：用户信息、城市数据、购物车数据、搜索数据。。。
  modules: {
    // 城市数据
    cityModule,

    // 用户数据
    loginModule,
  }
})

// 导出
export default store
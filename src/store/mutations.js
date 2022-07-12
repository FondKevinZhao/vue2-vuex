// 注意：这个文件用到了常量和Vue，需要我们导入一下
// 导入常量.js
import { ADDCOUNT } from './mutation-type'
import Vue from 'vue'

export default {
  // 修改count方法
  [ADDCOUNT](state, num) { // 接收参数：第一个是state，第二个是payload-参数
    state.count += num;
  },
  reduceCount(state, num = 3) {
    state.count -= num;
  },
  changeuserinfo(state, payload) {
    // 修改已存在的属性
    state.userinfo.uname = payload.uname;
  },
  addUserinfo(state, payload) {
    // state.userinfo.love = payload.love; // 直接增加新属性，数据会修改，视图不同步
    Vue.set(state.userinfo, 'love', payload.love);
  },
  // 修改user --- 更新state中的user
  changeUser(state, uname) {
    state.user = uname;
  }
}
// 用到了axios，要引入
import axios from 'axios'

export default {
  // 定义函数 -- 异步可以，不是异步也可以
  asyncReduceCount(context, payload) { // context类似于store
    // 模拟异步请求
    setTimeout(() => {
      // 业务逻辑
      context.commit('reduceCount', payload);
    }, 500)
  },

  // 异步请求获取一个用户名
  getUser(context) {
    axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then(res => {
        console.log(res.data);
        console.log(res.data.banner[0].title);
        // 数据获取成功后，解析出来想要的数据格式 -- 数据操作mutations -- 修改状态state
        // 操作 -mutations中的-- changeUser()
        context.commit('changeUser', res.data.banner[0].title)
      })
  }
}
<template>
  <div class="home">
    <h2>home</h2>
    <p>vuex-直接获取state数据： {{ $store.state.user }}</p>
    <!-- <p>mapState辅助函数获取state数据： {{ user }}</p>
    <p>mapState辅助函数获取state数据： {{ user2 }}</p>
    <p>mapState辅助函数获取state数据： {{ user3 }}</p> -->
    <p>count:{{ $store.state.count }}</p>
    <hr />
    <h3>mutation修改state数据</h3>
    <button @click="add">+</button>
    <button @click="reduce">-</button>

    <button @click="add2">辅助函数 +</button>
    <button @click="reduce2">辅助函数 -</button>
  </div>
</template>

<script>
// 辅助函数
import { mapState, mapMutations } from "vuex";
// 导入常量.js
import { ADDCOUNT } from "../store/mutation-type";
export default {
  name: "Home",
  data() {
    return {
      msg: "啊啊啦啦啦",
    };
  },
  created() {
    // console.log(this.$store.state.user);
  },
  // 在计算属性中读取mapState
  /* computed: mapState({
    // 写法一：传函数
    user: (state) => state.user,
    // 写法二：传字符串：这个字符串来自于你的仓库state里面的变量
    user2: "user",
    // 写法三：除了vuex的数据，还有自己的组件数据需要同时读取时
    user3(state) {
      return state.user + "-----" + this.msg;
    },
  }), */

  // 计算属性获取state数据 --- 简写(对象写法，更灵活可以修改名称)
  computed: {
    ...mapState({
      // 写法一：传函数
      user: (state) => state.user,
      // 写法二：传字符串：这个字符串来自于你的仓库state里面的变量
      user2: "user",
      // 写法三：除了vuex的数据，还有自己的组件数据需要同时读取时
      user3(state) {
        return state.user + "-----" + this.msg;
      },
    }),
  },

  // 计算属性获取state数据 --- 简写(数组写法)
  /* computed:{
    ...mapState(['user'])
  } */
  methods: {
    add() {
      // this.$store.commit("addCount", 2);
      this.$store.commit(ADDCOUNT, 3); // 常量的写法
    },
    reduce() {
      this.$store.commit("reduceCount", 5);
    },

    // 在methods中获取mutations：mapMutations
    ...mapMutations([ADDCOUNT, "reduceCount"]),
    add2() {
      // 操作辅助函数
      // this.addCount(100);
      this.ADDCOUNT(100);
    },
    reduce2() {
      // 操作辅助函数
      this.reduceCount(50);
    },
  },
};
</script>

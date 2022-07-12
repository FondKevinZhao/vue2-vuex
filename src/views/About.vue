<template>
  <div class="about">
    <h3>操作state</h3>
    <p>vuex-{{ $store.state.user }}</p>
    <p>vuex-{{ $store.state.count }}</p>
    <p>获取数据userinfo: {{ userinfo }}</p>
    <button @click="change">改变名字</button>
    <button @click="addObj">给对象添加一个不存在属性</button>
    <hr />
    <h3>操作actions</h3>
    <button @click="jian">直接调用actions -</button>
    <button @click="jian2">辅助函数actions -</button>
    <p>用户名：{{ user }}</p>
    <button @click="getUser">获取用户名</button>
    <hr />
    <h3>getters使用(会缓存，跟计算属性一样)</h3>
    <p>用户名：{{ $store.getters.userName }}</p>
    <p>用户名：{{ userName }}</p>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  // mapState 和 mapGetter要写在计算属性中
  computed: {
    ...mapState(["userinfo", "user"]),
    ...mapGetters(["userName"]),
  },
  methods: {
    // mapMutations 和 mapActions 要写在方法中
    change() {
      // 直接修改
      this.$store.commit("changeuserinfo", { uname: "李四四" });
    },
    addObj() {
      this.$store.commit("addUserinfo", { love: "吃吃吃" });
    },
    jian() {
      // 直接调用
      // this.$store.commit("reduceCount");
      this.$store.dispatch("asyncReduceCount");
    },
    ...mapActions(["asyncReduceCount"]),
    jian2() {
      this.asyncReduceCount(20);
    },
    getUser() {
      this.$store.dispatch("getUser");
    },
  },
};
</script>
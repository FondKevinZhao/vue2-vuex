<template>
  <div>
    <h2>Module 城市模块使用</h2>
    <p>当前城市-state：{{ $store.state.cityModule.cityName }}</p>
    <p>辅助函数mapState：{{ cityName }}</p>
    <button @click="demo">打印this</button>
    <h4>mutations获取</h4>
    <button @click="getCity1">修改城市名字</button>
    <button @click="getCity2">辅助函数-修改城市名字</button>
    <h4>actions</h4>
    <button @click="updateCity">actions-修改城市名字</button>
    <button @click="updateCity2">actions-辅助函数-修改城市名字</button>
    <h4>getters</h4>
    <!-- $store.getters['cityModule/cityVal']：有斜线，所以用中括号读取 -->
    <p>
      getters-直接获取数据：cityVal：{{ $store.getters["cityModule/cityVal"] }}
    </p>
    <p>getters-辅助函数获取数据：cityVal：{{ cityVal }}</p>
    <h3>访问全局的数据state getters</h3>
    <!-- <button @click="getGetters">访问getters</button> -->
    <p>getGlobalCity--：{{ getGlobalCity }}</p>
    <!-- 这里会在控制台输出 -->
    <button @click="getActions">访问全局的 actions</button>
    <p>user: {{ $store.state.user }}</p>
    <hr />
    <h2>Module 登录模块使用</h2>
    <p>登录：{{ isLogin }}</p>
    <p>用户名：{{ uname }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
/* 
  注意：
    1. ...mapState 和 ...mapGetters 都在计算属性中读取
    2. ...mapMutations 和 ...mapActions 都在方法中读取
    3. 辅助函数三部曲
      - 引入：import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
      - 书写：...mapMutations("cityModule", ["changeCity"]),
        - 如果是函数或者传参，需要在方法中通过函数来传
      - 使用：<p>getters-辅助函数获取数据：cityVal：{{ cityVal }}</p>
*/
export default {
  computed: {
    ...mapState("cityModule", ["cityName"]), // 像这种模块类型的读取：第一个是模块名，第二个是数组字符串(就是state的名字)
    ...mapState("loginModule", ["isLogin", "uname"]),
    ...mapGetters("cityModule", ["cityVal", "getGlobalCity"]),
  },
  methods: {
    demo() {
      console.log(this);
    },
    getCity1() {
      // 直接获取模块下面的module
      // console.log(this.$store); // 如果记不住名字，可以先打印，然后复制过来
      this.$store.commit("cityModule/changeCity", "天津");
    },
    ...mapMutations("cityModule", ["changeCity"]),
    getCity2() {
      // 辅助函数修改：1. vuex中引入 2. ...mapMutations()操作上 3. 在方法中传参
      this.changeCity("哈尔滨");
    },
    updateCity() {
      // 直接修改actions，模块下的
      this.$store.dispatch("cityModule/getCity", "actions-上海");
    },
    ...mapActions("cityModule", ["getCity", "getGlobalAction"]),
    updateCity2() {
      this.getCity("actions-天津");
    },
    // 查看所有的actions
    getActions() {
      this.getGlobalAction();
    },
  },
};
</script>

<style>
</style>
<template>
  <div id="app">
<!--    <h2>{{message}}</h2>-->
<!--    <h3>{{counter}}</h3>-->
<!--    <button @click="add">+</button>-->
<!--    <button @click="sub">-</button>-->
<!--    <router-link to="/login">登录</router-link>-->
<!--    <router-link to="/registe">注册</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data()
  {
    return {
      message: 'this is a message in app',
      counter: 0
    }
  },
  methods:{
    add: function () {
      this.counter++;
    },
    sub: function () {
      this.counter--;
    }

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

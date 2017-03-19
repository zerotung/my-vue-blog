<template>
  <div id="app">
    <navbar :datas="nav"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  data() {
    return {
      nav: ['home', 'display', 'article', 'aboutme'],
    };
  },
  components: { navbar: Navbar },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0; padding: 0;
}

a,a:hover{
  text-decoration:none;
  color:#333;
}
</style>

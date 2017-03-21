<template>
  <div id="app">
    <header-area :datas="nav"></header-area>
    <transition name="fade">
        <router-view class="wrap"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {
      nav: {
        home: {},
        article: {
          python: {},
        },
        display: {},
        aboutme: {},
      },
    };
  },
  components: { headerArea: Header },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

* {
  margin: 0; padding: 0;
}

a,a:hover{
  text-decoration:none;
  color:#333;
}

.wrap {
  position: absolute;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

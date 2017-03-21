<template>
  <header>
    <nav>
      <div class="block"></div>
      <ul class="root-menu">
        <router-link  v-for="(data1, key1) in datas"
            :to="'/' + key1" :key="key1" tag="li">
          <a> {{key1 | capitalize}} </a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        focus: null,
      };
    },
    props: ['datas'],
    filters: {
      capitalize(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    methods: {
      changeFocus(key) {
        this.focus = key;
      },
      cleanFocus() {
        this.focus = null;
      },
    },
  };
</script>

<style lang="scss" scoped>

  nav {
    display: flex;
    top: 0; left: 0; right: 0;
  }

  ul.root-menu {
    flex: 1;
    border-bottom: 1px #ddd solid;
    box-shadow: 0 0 10px #ddd;
    list-style: none;
    text-align: left;

    li {
      display: inline-block;
      margin: 0 5px;
      padding: 5px;
      cursor: pointer;
      position: relative;
      &:hover {
        background: #f7f7f7;
      }
    }
  }

  .router-link-active {
    background: #f7f7f7;
  }
</style>

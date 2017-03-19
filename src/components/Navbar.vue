<template>
  <nav>
    <ul>
      <router-link
          v-for="data in datas" :to="'/' + data"
          :key="data" tag="li">
        {{data}}
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: ['datas'],
  };
</script>

<style lang="scss" scoped>
  nav {
    border-bottom: 1px #ddd solid;
    box-shadow: 0 0 10px #ddd;
  }

  ul {
    list-style: none;
    text-align: left;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background: #f7f7f7;
    }
  }

  .router-link-active {
    background: #f7f7f7;
  }
</style>

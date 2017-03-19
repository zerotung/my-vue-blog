<template>
  <div class="display">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'display',
  data() {
    return {
      msg: 'Welcome to Display',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>

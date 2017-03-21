<template>
  <div class="article-show">
    <div class="body-wrap">
      <article>
        <h1>{{ $route.params.id }}</h1>
        <h2>{{ $route.params.id }}</h2>
        <h3>{{ $route.params.id }}</h3>
        <h4>{{ $route.params.id }}</h4>
        <h5>{{ $route.params.id }}</h5>
        <h6>{{ $route.params.id }}</h6>
      </article>
      <div class="hot">
        
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .article-show {
    background-color: #eee;
  }

  .body-wrap {
    max-width: 1000px;
    margin: 30px auto;
  }

  article {
    float: left;
    width: 750px;
    height: 1000px;
    box-shadow: 0 0 10px #aaa;
    background-color: #fff;
    box-sizing: border-box;
    padding: 50px 20px;
  }

  .hot {
    width: 240px;
    height: 500px;
    float: right;
    background-color: #eee;
  }
</style>

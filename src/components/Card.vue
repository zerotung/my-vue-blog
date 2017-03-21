<template>
  <div class="card">
    <router-link :to="data.title" append :key="data.title" tag="figure">
      <img :src="data.src" :alt="data.title">
      <div class="detail">
        <figcaption class="highlight"> {{data.title}} </figcaption>
        <p>{{data.des}}</p>
      </div>
      <div class="bottom highlight">
        {{data.bottom}}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['data'],
  };
</script>

<style scoped>
.card {
  width: 300px;
  height: 330px;
  background: #fff;
  margin: 15px;
  float: left;
  text-align: left;
  cursor: pointer;
}

img {
  display: block;  
  width: 100%;
  height: 168px;
  background-color: #045;
}

.detail {
  height: 128px;
  box-sizing: border-box;
  padding: 20px;
}

figcaption {
  font-size: 24px;
  margin-bottom: 5px;
  color: #045;
  font-weight: bold;
}

.bottom {
  color: #555;
  text-align: right;
  margin: 0px 20px;
}

</style>

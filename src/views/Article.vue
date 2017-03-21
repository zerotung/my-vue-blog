<template>
  <div class="article">
    <div class="body-wrap">
      <div class="cards" v-if="!fetchError">
        <card v-for="data in datas" :data="data" :key="data.title"></card>
      </div><div v-else>
        远端获取数据失败
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'article',
  data() {
    return {
      msg: 'Welcome to Article',
      datas: [
        // {
        //   title: 'test',
        //   src: null,
        //   des: 'this is a test',
        //   bottom: '100+ read',
        // }
      ],
      fetchError: false,
    };
  },
  components: {
    card: Card,
  },
  mounted() {
    this.$http.get('/article/list').then((response) => {
      // success callback
      // console.log(response.body);
      response.body.data.forEach((x) => {
        this.datas.push(x);
      });
    }, () => {
      // error callback
      // console.log(response);
      this.fetchError = true;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.article {
  background-color: #eee;
}

.card {
  cursor: pointer;
}

@media (min-width: 1320px) {
  .body-wrap {
    width: 1320px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
  }
}
@media (max-width: 1319px) {
  .body-wrap {
    width: 1000px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
  }
}
</style>

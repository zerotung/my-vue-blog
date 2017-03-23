<template>
  <div class="article-show">
    <div class="body-wrap">
      <div class="article">
        <md-area :datas="mdData"></md-area>
      </div>
      <div class="hot">
        
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
import MdArea from '@/components/MdArea';

export default {
  data() {
    return {
      mdData: '',
    };
  },
  components: {
    mdArea: MdArea,
  },
  mounted() {
    this.$http.get('/article/show/test').then((response) => {
      // success callback
      // console.log(response.body);
      this.mdData = response.body.info;
    }, () => {
      // error callback
      // console.log(response);
      this.fetchError = true;
    });
  },
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

  @media (min-width: 1000px) {

    .article {
      float: left;
      width: 750px;
      box-shadow: 0 0 10px #aaa;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px 50px;
    }
    .hot {
      width: 240px;
      float: right;
      background-color: #eee;
      border: 1px #f00 solid;
    }
  }

  @media (max-width: 999px) {

    .article {
      max-width: 750px;
      box-shadow: 0 0 10px #aaa;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px 50px;
      margin: 0 auto;
    }
    .hot {
      max-width: 750px;
      background-color: #eee;
      border: 1px #f00 solid;
      margin: 0 auto;
    }
  }

</style>

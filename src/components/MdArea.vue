<template>
  <div class="md">
    <div v-html="htmlData"></div>
  </div>
</template>

<script>
  export default {
    props: ['datas'],
    computed: {
      htmlData() {
        let blocks = this.datas.split('\n\n');
        const rp = [{
          patt: /^#{1,6} /,
          func(data) {
            return data
              .replace(/^#{1} (.*)/mg, '<h1>$1</h1>')
              .replace(/^#{2} (.*)/mg, '<h2>$1</h2>')
              .replace(/^#{3} (.*)/mg, '<h3>$1</h3>')
              .replace(/^#{4} (.*)/mg, '<h4>$1</h4>')
              .replace(/^#{5} (.*)/mg, '<h5>$1</h5>')
              .replace(/^#{6} (.*)/mg, '<h6>$1</h6>');
          },
        }, {
          patt: /^- /,
          func(data) {
            let rtData = data.replace(/^- (.*)/mg, '<li>$1</li>');

            rtData = ['<ul>', '</ul>'].join(rtData);
            return rtData;
          },
        }, {
          patt: /^> /,
          func(data) {
            return ['<blockquote>', '</blockquote>'].join(data.replace(/^> (.*)/mg, '$1<br>'));
          },
        }, {
          patt: /^[1-9]+[0-9]*. /,
          func(data) {
            return ['<ol>', '</ol>'].join(data.replace(/^[1-9]+[0-0]*. (.*)/mg, '<li>$1</li>'));
          },
        }, {
          patt: /^-{6}/,
          func() {
            return '<hr>';
          },
        }];
        blocks = blocks.map((x) => {
          let rt = x;
          for (let i = 0; i < rp.length; i += 1) {
            if (x.match(rp[i].patt)) {
              rt = rp[i].func(x);
            }
          }
          return rt;
        });
        return blocks.join('');
      },
    },
  };
</script>

<style lang="scss">

.body-wrap {
  text-align: left;
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
  }
  h1 {
    padding-bottom: .3em;
    font-size: 2.25em;
    line-height: 1.2;
    // border-bottom: 1px solid #eee;
  }
  h2 {
    padding-bottom: .3em;
    font-size: 1.75em;
    line-height: 1.225;
    // border-bottom: 1px solid #eee;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1.43;
  }
  h4 {
    font-size: 1.25em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 1em;
    color: #777;
  }
  hr {
      height: 4px;
      padding: 0;
      margin: 16px 0;
      background-color: #e7e7e7;
      border: 0 none;
      overflow: hidden;
      box-sizing: content-box;
      border-bottom: 1px solid #ddd;
  }
  blockquote {
      border-left: 3px solid #dddddd;
      padding: 0 15px;
      color: #777777;
  }
  p,
  blockquote,
  ul,
  ol,
  dl,
  table{
      margin: 0.8em 0;
  }
  li {
    margin-left: 24px;
  }
}
</style>

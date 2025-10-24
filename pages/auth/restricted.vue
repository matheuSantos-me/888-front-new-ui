<template>
  <div style="text-align: center">
      <div style="display:block">
        <h1 class="text-jumbo text-ginormous">알림!</h1>
        <h2>관리자에 의하여 이 페이지에 대한 접근은 금지되었습니다.</h2>        
      </div>
      <div style="display:block">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </div>
  </div>
</template>

<script>
import errGif from '@/static/image/401_images/401.gif'

export default {
  layout: ({ isBlock }) => isBlock ? 'block' : 'client',
  name: 'page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date()
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 800px;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>

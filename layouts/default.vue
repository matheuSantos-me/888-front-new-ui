<template>
<el-scrollbar class="body-scroll" ref="bodyScrollBar">
  <div id="app">
    <div class="app-wrapper">
      <el-container>
        <el-main>
            <nuxt/>
        </el-main> 
      </el-container>
    </div>
  </div>
</el-scrollbar>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  head () {
    return {
      title: this.headTitle ? this.headTitle : "스포츠코어",
      htmlAttrs: {
        translate: "no"
      }
    }
  },
  computed: {
    ...mapGetters({
      adminHeadTitle: 'getAdminHeadTitle',
      siteTitle: 'getSiteTitle',
    })
  },
  data() {
    return {
      headTitle: "스포츠코어"
    }
  },
  created() {
    this.headTitle = this.siteTitle
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
html,
body,
body #__nuxt,
body #__layout {
  height: 100%;
  width: 100%;
  // overflow: hidden;
}

.body-scroll {
  height: 100%;

  .el-scrollbar__wrap {
    overflow-x: auto;
  }
}
  
.notAuthenticatedCls {
  .el-main{
    background: #2d3a4b;
    padding: 0 !important;
  }
}

.authenticatedCls {
  .el-main{
    background: #2d3a4b;
    padding: 0 !important;
  }
}
</style>

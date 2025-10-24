<template>
<el-row class="width-full">
  <div class="fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'payin'" :isShowMobile="isShowMobile"/>
    <div class="panel-body height-100-pro"
      :class="[
        {
          'p-l-14 p-r-14': !isMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'
        }, 
        getPageBackColor(themeType, 1), 
        `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="currentUser">
        <PayIn :isShowMobile="isShowMobile" />
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPageBackColor } from '~/assets/js/data/uicommon.js'
import Preview from '~/components/Auth/Preview.vue'
import PageHeader from '~/components/Header/PageHeader'
import PayIn from "~/components/PayIn/PayIn.vue"

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: { Preview, PageHeader, PayIn },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
    })
  },
  watch: {
    screenWidth(val) {
      this.initframe()
    }
  },
  data() {
    return {
      isShowMobile: false,
    };
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Money-PayIn')
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.initframe()
  },
  methods: {
    getPageBackColor,
    // 해상도 체크
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false
      } else {
        this.isShowMobile = true
      }
    }
  }
}
</script>
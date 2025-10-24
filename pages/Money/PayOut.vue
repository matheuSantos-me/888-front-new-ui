<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'payout'" :isShowMobile="isShowMobile" />
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile}, getPageBackColor(themeType, 1), `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="currentUser">
        <PayOut :isShowMobile="isShowMobile" />
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPageBackColor } from '~/assets/js/data/uicommon'
import Preview from '~/components/Auth/Preview.vue'
import PageHeader from '~/components/Header/PageHeader'
import PayOut from "~/components/PayOut/PayOut.vue"

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,       // 로그인유도 콤포넌트
    PageHeader,
    PayOut
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      screenWidth: "getScreenWidth",
      layoutType: "getLayoutType",
      themeType: "getThemeType",
    })
  },
  data() {
    return {
      isShowMobile: false
    };
  },
  watch: {
    screenWidth(val) {
      this.initframe()
    }
  },
  created() {
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Money-PayOut')
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
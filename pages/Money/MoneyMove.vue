<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'moneymove'" :isShowMobile="isShowMobile"/>
    <div class="panel-body height-100-pro" :class="[isMobile ? 'p-l-0 p-r-0' : 'p-l-14 p-r-14', getPageBackColor(themeType), `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="currentUser">
        <MoneyMove :isShowMobile="isShowMobile" />
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
import MoneyMove from "~/components/Money/MoneyMove"

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,       // 로그인유도 콤포넌트
    PageHeader,
    MoneyMove
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      screenWidth: "getScreenWidth",
      themeType: "getThemeType"
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
		this.$store.commit('SET_CURRENTPAGENAME', 'Money-MoneyMove')
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
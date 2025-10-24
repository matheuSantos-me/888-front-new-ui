<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'bethistory'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'}, getPageBackColor(themeType)]" style="position:relative;">
      <el-row v-if="currentUser">
        <!-- 배팅내역 탭 -->
        <Tab gameCategory="mini"/>
        <!-- 배팅내역 탭 끝 -->
        <Mini />
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Preview from '~/components/Auth/Preview.vue'
import PageHeader from '~/components/Header/PageHeader'
import Tab from '~/components/BettingHistory/Tab'
import { getPageBackColor } from '~/assets/js/data/uicommon.js'
import Mini from "~/components/BettingHistory/List/Mini.vue"

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Mini,
    Preview,       // 로그인유도 콤포넌트
    PageHeader,        // 배팅내역 헤더
    Tab,           // 배팅내역 탭
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      layoutType: 'getLayoutType',
      themeType: "getThemeType"
    })
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'BettingHistory-MiniGame')
  },
  methods: {
    getPageBackColor
  }
}
</script>
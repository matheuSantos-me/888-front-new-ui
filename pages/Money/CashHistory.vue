<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'cash'" :isShowMobile="false"/>
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile}, getPageBackColor(themeType), `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="currentUser">
        <CashHistory />
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
import { getPageBackColor } from '~/assets/js/data/uicommon'
import PageHeader from '~/components/Header/PageHeader'
import CashHistory from "~/components/Money/CashHistory.vue"

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    CashHistory,
    PageHeader,
    Preview       // 로그인유도 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      layoutType: "getLayoutType",
      themeType: "getThemeType"
    })
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Money-CashHistory')
  },
  methods: {
    getPageBackColor
  }
}
</script>
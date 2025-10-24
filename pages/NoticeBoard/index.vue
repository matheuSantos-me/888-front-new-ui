<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'noticeboard'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile}, getPageBackColor(themeType, 1), `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="currentUser">
        <NoticeBoard />
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
import { getPageBackColor } from '~/assets/js/data/uicommon.js'
import PageHeader from '~/components/Header/PageHeader'
import NoticeBoard from '~/components/Notice/NoticeBoard.vue'

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    NoticeBoard,
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
		this.$store.commit('SET_CURRENTPAGENAME', 'NoticeBoard')
  },
  methods: {
    getPageBackColor
  }
}
</script>
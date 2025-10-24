<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'note'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" style="position:relative;" :class="[{'p-l-14 p-r-14': !isMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'}, getPageBackColor(themeType, 1), `text-contrast-${themeType}`]">
      <el-row class="m-b-30" v-if="currentUser" :class="isMobile ? 'f-s-12' : 'f-s-14'">
        <NoteTable />
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
import NoteTable from '~/components/Table/NoteTable'

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    NoteTable,
    PageHeader,
    Preview       // 로그인유도 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
    })
  },
  created() {
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Note')
  },
  methods: {
    getPageBackColor
  }
}
</script>
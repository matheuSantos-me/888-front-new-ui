<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :type="'livescore'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[isMobile ? 'p-l-0 p-r-0' : 'p-l-14 p-r-14', getPageBackColor(themeType)]" style="position:relative;">
      <el-row v-if="currentUser">
        <!-- 스코어 -->
        <el-row>
          <iframe id="myframe" src="https://cry-live.statscore.com/ko/soccer/events" width="100%" scrolling="yes" frameborder="0"></iframe>
        </el-row>
        <!-- 스코어 끝 -->
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

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
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
  data() {
    return {
      selectedCategoryId: -1,
      gameList: [],
      categoryList: [],
      total: 0,
      searchKey: '',
      listQuery:{
        page: 1,
        limit: 15
      },
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'GameResult')
    if (this.currentUser) {
      window.addEventListener('resize', this.myResizeFunc);
      this.myResizeFunc()
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.myResizeFunc);
  },
  methods: {
    getPageBackColor,
    // 윈도우 리사이즈 이벤트
    myResizeFunc() {
      if (this.layoutType == 'layout2') {
        document.getElementById("myframe").style.height = window.innerHeight - 107 + "px";
      } else {
        document.getElementById("myframe").style.height = window.innerHeight - 158 + "px";
      }
    },
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
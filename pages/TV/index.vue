<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'tv'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[isMobile ? 'p-l-0 p-r-0' : 'p-l-14 p-r-14', getPageBackColor(themeType)]" style="position:relative;">
      <el-row v-if="currentUser">
        <!-- 스코어 -->
        <el-row>
          <iframe v-if="themeType == 'blue18'" src='https://streamk.co.kr/content' scrolling="no"
            style="overflow-x:hidden;overflow:auto;width:100%;" height='10000' frameborder="0" allowfullscreen='true'></iframe>
          <iframe
            v-if="themeType == 'orange11' || themeType == 'blue13' || themeType == 'yellow11' || themeType == 'orange12' || themeType == 'purple11' || themeType == 'purple12'"
            allowfullscreen="true"
            frameborder="0"
            id="player"
            name="player"
            scrolling="no"
            :src="getTVUrl()"
            style="overflow-x:hidden;overflow:auto;width:100%;"
            :style="isMobile ? 'height: 600px' : 'height: 3000px'"
            title="영상"
          ></iframe>
          <div id="start_iframe"></div>
        </el-row>
        <!-- 스코어 끝 -->
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser" />
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Preview from '~/components/Auth/Preview.vue'
import { getPageBackColor } from '~/assets/js/data/uicommon.js'
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
      themeType: "getThemeType"
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
		this.$store.commit('SET_CURRENTPAGENAME', 'TV')
    if (this.currentUser) {
      window.addEventListener("message", this.receiveMsgFromChild)
      window.addEventListener('resize', this.myResizeFunc);
      this.myResizeFunc()
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.myResizeFunc);
  },
  methods: {
    getPageBackColor,
    // 리사이징
    myResizeFunc() {
      // if (this.themeType == 'blue18') {
      //   document.getElementById("player").style.height = window.innerHeight - 158 + "px";
      // }
    },
    // 아이프레임 메시지 처리
    receiveMsgFromChild(e) {
      if (this.themeType == 'orange11' || this.themeType == 'blue13' || this.themeType == 'yellow11' || this.themeType == 'orange12' || this.themeType == 'purple11' || this.themeType == 'purple12') {
        if (this.isMobile) {
          document.getElementById("player").style.height = parseInt(e.data)+"px";
        } else {
          document.getElementById("player").style.height = 50 + parseInt(e.data)+"px";
          if(e.data==="up"){
            $('html, body').animate({
              scrollTop: $("#player").offset().top-100
                },500)
          }
        }
      }
    },
    // TV중계주소 얻기
    getTVUrl() {
      if (this.themeType == 'blue18') return "https://streamk.co.kr/content"
      if (this.themeType == 'orange11' || this.themeType == 'orange12') return "https://sstream2.com/sites/888/index.php"
      if (this.themeType == 'blue13' || this.themeType == 'yellow11') return "https://sstream2.com/sites/PIN/index.php"
      if (this.themeType == 'purple11') return "https://sstream2.com/sites/SMTB/index.php"
      if (this.themeType == 'purple12') return "https://sstream2.com/sites/HTSBET/index.php"
    }
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="35" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <el-row class="bg-black-darker i-container width-full">
        <iframe id="myframe" :src="baseUrl" width="100%" height="545" scrolling="yes" frameborder="0"></iframe>
      </el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const minigameInfoService = feathers.service('core-gameurl')

minigameInfoService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    MiniHeader,   // 미니게임 헤더 콤포넌트
    Preview,      // 로그인유도 콤포넌트
    Check
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',                        // 유저정보
      screenWidth: "getScreenWidth",
      screenHeight: "getScreenHeight",
      mainMenuHeight: "getMainMenuHeight",
      miniMenuHeight: "getMiniMenuHeight",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: "getLayoutType"
    })
  },
  data() {
    return {
      baseUrl: "",                 // 파워볼 중계 URL
      isCheck: true
    };
  },
  watch: {
    gameSettings(val) {
      this.isCheck = !Boolean(val.gameStatus_socket || val.CoreCrash.gameStatus_manual)
    },
    screenWidth(val) {
      this.initframe()
    }
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  created() {
    if (!this.gameSettings.CoreCrash.isVisible || !this.gameSettings.Mini.sportcore) this.$router.push("/")
    
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-Crash')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 7)

    // 게임셋팅정보 배팅슬립정보 설정
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.CoreCrash.gameStatus_manual)
    
    this.deleteBettingSlip()
  },
  methods: {
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await minigameInfoService.find({ query: { type: 0 }})
        
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.baseUrl = res.data
        this.initframe()
      } catch (err) {
        console.log(err.message)
      }
    },
    // 프레임사이즈 설정
    initframe() {
      var jbWidth1 = $( 'div.i-container' ).width();
      if (jbWidth1 > 940)
      {
        let canvasHeight = 1377;
        jQuery('#myframe').height(canvasHeight);
      } else {
        let height = this.screenHeight - this.mainMenuHeight - this.miniMenuHeight
        jQuery('#myframe').css('height', height);
      }
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", [])
    }
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-body position-relative height-full" :class="{'bg-black-main': themeType == 'orange11', 'bg-white-darker': themeType == 'white'}" data-height="100%">
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in minibg " id="CSEP_viewpan">
          <div id="width-full">
            <iframe :src="baseUrl" width="100%" height="820" scrolling="yes" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Preview v-show="currentUser === null"/>
  <Check v-show="!isCheck" :themeType="themeType" />
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    MiniHeader,
    Preview,
    Check
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',
      gameSettings: "getGameSettings",
      themeType: "getThemeType"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                         // 배팅가능상태
      baseUrl: "https://bitpnl.com/?site=536050522067345408&id=Guest&key=guest",  // 벳이스트 축구 중계 URL
      remainMins: 0,
      remainSecs: 0,
      isCheck: true
    };
  },
  watch: {
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket | val.BetEastFootball.gameStatus_auto | val.BetEastFootball.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket | val.BetEastFootball.gameStatus_manual)
    },
    isBetAvailable(val){
      this.deleteBettingSlip()
    }
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-Fx')
    if (this.currentUser) {
      this.baseUrl = "https://bitpnl.com/?site=536050522067345408&id=" + this.currentUser.userLoginId + "&key=" + this.currentUser.casinoUserID
    }
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)

    // 게임셋팅정보 배팅슬립정보 설정
    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetEastFootball.gameStatus_auto | this.gameSettings.BetEastFootball.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetEastFootball.gameStatus_manual)
    this.deleteBettingSlip()
  },
  destroyed () {
  },
  methods: {
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", [])
    }
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="59" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in minibg text-center">
          <iframe scrolling="no" frameborder="0" style="width: 100%; height: 800px; max-width: 1000px; margin:0px 0px 0px 0px; z-index: 1; border: none;" allowFullScreen="true" 
            :src="baseUrl"></iframe>
        </div>
      </div>
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

const popupRouter = "baccarat"
const minigameInfoService = feathers.service('token-gameurl')
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
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      tokenBaccaratBet: "getTokenBaccaratBet"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                       // 배팅가능상태
      baseUrl: "",      // 파워볼 중계 URL
      isCheck: true
    };
  },
  watch: {
    tokenBaccaratBet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.TokenBaccarat.gameStatus_auto || val.TokenBaccarat.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.TokenBaccarat.gameStatus_manual)
    },
    isBetAvailable(val){
      this.deleteBettingSlip()
    }
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  created() {
    if (!this.gameSettings.TokenBaccarat.isVisible || !this.gameSettings.Mini.token) this.$router.push("/")
    
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-TokenBaccarat')
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 12)

    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.TokenBaccarat.gameStatus_auto | this.gameSettings.TokenBaccarat.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.TokenBaccarat.gameStatus_manual)
    this.deleteBettingSlip()
  },
  methods: {
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await minigameInfoService.find({ query: { gameType: popupRouter, type: "TokenBaccarat" }})
        
        if (res.code != 1) {
					this.showMessage('알림메시지', res.message, '닫기[Close]', 2)
          return
        }

        this.baseUrl = res.data
      } catch (err) {
        console.log(err.message)
      }
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", [])
    },
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    }
  }
}
</script>
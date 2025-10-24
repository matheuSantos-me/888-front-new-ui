<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="0" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in playerbox3 minibg">
          <div id="mini-game-frame-container">
            <div id="mini-game-frame-container-in">
              <iframe id="myframe" :src="baseUrl" width="830" height="641" scrolling="no" frameborder="0" class="mini-game-frame"></iframe>
            </div>
          </div>
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
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'
import { filterBetType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, statusClassObjectGrey, betTypeClassObject, betTypeClassObjectGrey } from '~/assets/js/data/uicommon.js'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const popupRouter = "roulette"

const minigameInfoService = feathers.service('token-gameurl')
const mainService = feathers.service('main')

minigameInfoService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    MiniHeader,   // 미니게임 헤더 콤포넌트
    Preview,      // 로그인유도 콤포넌트
    Check
  },
  filters: {
    currencyFormat,
    filterOdds,
    filterBetType,
    statusClassObject,
    betTypeClassObject,
    statusClassObjectGrey,
    betTypeClassObjectGrey
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',                        // 유저정보
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      tokenRoulleteBet: "getTokenRoulleteBet"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                       // 배팅가능상태
      baseUrl: "",      // 파워볼 중계 URL
      remainTime: "00:00",                                        // 회차 남은시간
      currentGameInfo: null,                                      // 현재 회차정보
      betLogs: null,                                              // 배팅내역
      betType: 0,                                                 // 배팅타입 일반인가 조합인가
      historyType: 0,                                             // 지난회차인가 배팅내역인가
      gameType: "TokenRoullete",                                      // 게임타입
      remainMins: 0,
      remainSecs: 0,
      calculateTime: null,
      isCheck: true
    };
  },
  watch: {
    tokenRoulleteBet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.TokenRoullete.gameStatus_auto || val.TokenRoullete.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.TokenRoullete.gameStatus_manual)
    },
    isBetAvailable(val){
      this.deleteBettingSlip()
    },
    screenWidth(val) {
      this.initframe()
    }
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  created() {
    if (!this.gameSettings.TokenRoullete.isVisible || !this.gameSettings.Mini.token) this.$router.push("/")
    
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-TokenRoullete')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 12)

    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.TokenRoullete.gameStatus_auto | this.gameSettings.TokenRoullete.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.TokenRoullete.gameStatus_manual)
    
    this.deleteBettingSlip()

    // 회차 남은 시간 계산
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime()
    }, 1000)

    // 미니게임 새 회차정보 패치
    mainService.off('miniGameTokenRoulleteRound'),
    mainService.on('miniGameTokenRoulleteRound', ( currentGameInfo ) => {
      if(currentGameInfo) {
        this.currentGameInfo.times = currentGameInfo.times
        this.currentGameInfo.round = currentGameInfo.round
        this.currentGameInfo._id = currentGameInfo.gameId
        this.isBetAvailable = !Boolean(currentGameInfo.status)
      }
      else {
        this.isBetAvailable = false    //베팅 불가상태
      }
    })

    // 회차시작이벤트
    mainService.off('miniGameTokenRoulleteTime')
    mainService.on('miniGameTokenRoulleteTime', (state) => {
      this.remainMins = 4
      this.remainSecs = 59
    })

    // 배팅내역 창조시 배팅내역에 추가
    mainService.off('miniBetLogCreated')
    mainService.on('miniBetLogCreated', (betLog) => {
      if (betLog.gameType === this.gameType && betLog.userid === this.currentUser._id) {
        if(this.betLogs.length > 8) {
          this.betLogs.splice(this.betLogs.length - 1, 1)
          this.betLogs.unshift(betLog)
        } else {
          this.betLogs.unshift(betLog)
        }
      }
    })

    // 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogTokenRoullete')
    mainService.on('miniBetLogTokenRoullete', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
  },
  destroyed () {
    clearInterval(this.calculateTime)
    mainService.off('miniGameTokenRoulleteRound')
    mainService.off('miniGameTokenRoulleteTime')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogTokenRoullete')
  },
  methods: {
    parseTime,
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await minigameInfoService.find({ query: { gameType: popupRouter }})
        
        if (res.code != 1) {
          console.log(res.message)
          return
        }

        this.currentGameInfo = res.data.currentGame                        // 현재 회차정보
        // 현재 회차정보 설정
        if(!this.currentGameInfo) {
          this.currentGameInfo = {
            times: null,
            round: null
          }
          this.isBetAvailable = false
        } else {
          this.remainMins = this.currentGameInfo.remainMins
          this.remainSecs = this.currentGameInfo.remainSecs
        }
        
        this.$store.commit("SET_MiniBet", {gameType: this.gameType, status: res.data.betChance})
        if (res.data.betLogs != null) this.betLogs = res.data.betLogs.data      // 배팅내역
      } catch (err) {
        console.log(err.message)
      }
    },
    // 프레임사이즈 설정
    initframe() {
      if (this.isMobile) {
        let s = window.innerWidth / 589;
        let aleft = (-1) * (1 - s) * 415 - s * 241;
        let atop = (-1) *(1 - s) * 320;
        let aheight = s * 641;
        jQuery('#myframe').css('left', aleft);
        jQuery('#myframe').css('top', atop);
        jQuery('#myframe').css('transform', "scale(" + s + "," + s + ")");
        jQuery('#mini-game-frame-container-in').css('height', aheight);
      } else {
        if (this.screenWidth > 1600) {
          jQuery('#myframe').css('left', 0);
          jQuery('#myframe').css('transform', "scale(1, 1)");
        } else if (this.screenWidth > 1440 && this.screenWidth <= 1600) {
          jQuery('#myframe').css('left', -241);
        } else if (this.screenWidth <= 1440) {
          jQuery('#myframe').css('transform', "scale(1, 1) translateX(-241px)");
        }
        
        jQuery('#myframe').css('top', 0);
        jQuery('#mini-game-frame-container-in').css('height', 641);
      }
    },
    // 배팅하기
    onClickBetButton(betType, odds) {
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return
      }

      if (!this.isBetAvailable) {
        this.showMessage('알림메시지', "배팅을 할수 없는 상태입니다.", '닫기[Close]', 2)
        return
      }

      // 현재 회차정보를 얻지 못한 경우
      if (this.currentGameInfo === null) {
        this.showMessage('알림메시지', "현재 회차정보를 얻지 못하여 배팅을 할수 없습니다.", '닫기[Close]', 2)
        return
      }
      // 배팅슬립 초기화
      this.deleteBettingSlip()

      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.gameType,
        gameId: this.currentGameInfo._id,
        betType: betType,
        times: this.currentGameInfo.times,
        round: this.currentGameInfo.round,
        leagueName: "파워볼",
        betTypeName: "파워볼-" + this.currentGameInfo.round + " (" + this.currentGameInfo.times + ") 회차",
        betName: this.getBetNameFromType(betType),
        odds: odds
      }
      this.$store.commit('betslip/SET_BETSLIPLIST', data)
    },
    // 베팅타입으로 부터 디테일정보 얻기
    getBetNameFromType ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 'power-odd': strLabel += '홀 (파워볼 홀/짝 맞추기)'; break;
        case 'power-even': strLabel += '짝 (파워볼 홀/짝 맞추기)'; break;
        case 'power-under': strLabel += '언더 (파워볼 언더/오버 맞추기)'; break;
        case 'power-over': strLabel += '오버 (파워볼 언더/오버 맞추기)'; break;
        case 'normal-odd': strLabel += '홀 (일반볼 홀/짝 맞추기)'; break;
        case 'normal-even': strLabel += '짝 (일반볼 홀/짝 맞추기)'; break;
        case 'normal-under': strLabel += '언더 (일반볼 언더/오버 맞추기)'; break;
        case 'normal-over': strLabel += '오버 (일반볼 언더/오버 맞추기)'; break;
        case 'normal-big': strLabel += '대 (일반볼 구간 맞추기)'; break;
        case 'normal-middle': strLabel += '중 (일반볼 구간 맞추기)'; break;
        case 'normal-small': ; strLabel += '소 (일반볼 구간 맞추기)'; break;
        case 'power-num-0': ; strLabel += '0 (파워볼 숫자 맞추기)'; break;
        case 'power-num-1': ; strLabel += '1 (파워볼 숫자 맞추기)'; break;
        case 'power-num-2': ; strLabel += '2 (파워볼 숫자 맞추기)'; break;
        case 'power-num-3': ; strLabel += '3 (파워볼 숫자 맞추기)'; break;
        case 'power-num-4': ; strLabel += '4 (파워볼 숫자 맞추기)'; break;
        case 'power-num-5': ; strLabel += '5 (파워볼 숫자 맞추기)'; break;
        case 'power-num-6': ; strLabel += '6 (파워볼 숫자 맞추기)'; break;
        case 'power-num-7': ; strLabel += '7 (파워볼 숫자 맞추기)'; break;
        case 'power-num-8': ; strLabel += '8 (파워볼 숫자 맞추기)'; break;
        case 'power-num-9': ; strLabel += '9 (파워볼 숫자 맞추기)'; break;
        case 'power-odd-over': ; strLabel += '홀+오버 (파워볼 홀+언더/오버 맞추기)'; break;
        case 'power-odd-under': ; strLabel += '홀+언더 (파워볼 홀+언더/오버 맞추기)'; break;
        case 'power-even-over': ; strLabel += '짝+오버 (파워볼 짝+언더/오버 맞추기)'; break;
        case 'power-even-under': ; strLabel += '짝+언더 (파워볼 짝+언더/오버 맞추기)'; break;
        case 'normal-odd-over': ; strLabel += '홀+오버 (일반볼 홀+언더/오버 맞추기)'; break;
        case 'normal-odd-under': ; strLabel += '홀+언더 (일반볼 홀+언더/오버 맞추기)'; break;
        case 'normal-even-over': ; strLabel += '짝+오버 (일반볼 짝+언더/오버 맞추기)'; break;
        case 'normal-even-under': ; strLabel += '짝+언더 (일반볼 짝+언더/오버 맞추기)'; break;
        case 'odd-odd': ; strLabel += '홀+홀 (파워볼 일반볼 조합 맞추기)'; break;
        case 'odd-even': ; strLabel += '홀+짝 (파워볼 일반볼 조합 맞추기)'; break;
        case 'even-odd': ; strLabel += '짝+홀 (파워볼 일반볼 조합 맞추기)'; break;
        case 'even-even': ; strLabel += '짝+짝 (파워볼 일반볼 조합 맞추기)'; break;
        case 'normal-odd-small': ; strLabel += '홀+소 (일반볼 조합 맞추기)'; break;
        case 'normal-odd-middle': ; strLabel += '홀+중 (일반볼 조합 맞추기)'; break;
        case 'normal-odd-big': ; strLabel += '홀+대 (일반볼 조합 맞추기)'; break;
        case 'normal-even-small': ; strLabel += '짝+소 (일반볼 조합 맞추기)'; break;
        case 'normal-even-middle': ; strLabel += '짝+중 (일반볼 조합 맞추기)'; break;
        case 'normal-even-big': ; strLabel += '짝+대 (일반볼 조합 맞추기)'; break;
      }
      return strLabel;
    },
    // 경기시간계산
    calculateGameRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
        this.remainMins --;
        if (this.remainMins < 0) this.remainMins = 4
      }

      if (this.remainSecs < 10) this.remainTime = this.remainMins + ":0" + this.remainSecs
      else this.remainTime = this.remainMins + ":" + this.remainSecs
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", [])
    },
    // 일반 조합배팅 탭선택
    onSelectBetType(val) {
      this.betType = val
    },
    // 지난 회차, 배팅내역 탭선택
    onClickHistoryTab(val) {
      this.historyType = val
    },
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    },
    // span 얻기
    getSpan() {
      if (this.gameSettings.TokenRoullete.canBetNumber) {
        return this.isMobile ? 6 : 5
      } else {
        return this.isMobile ? 12 : 10
      }
    }
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
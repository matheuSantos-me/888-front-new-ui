<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': themeType == 'orange12'}">
      <MiniHeader :remainMins="remainMins" :remainSecs="remainSecs" :miniGameType="4" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <!-- <div class="bg-black-darker">
        <div class="panel-collapse collapse in east-playerbox3 minibg " id="CSEP_viewpan">
          <div id="east-game-frame-container">
            <div id="east-game-frame-container-in">
              <iframe id="myframe" :src="baseUrl" width="830" height="592" scrolling="no" frameborder="0" class="east-game-frame"></iframe>
            </div>
          </div>
          <el-col class="east-bet-panel">
            <el-row>
              <el-row class="p-5 height-42">
                <el-col class="height-full bg-green903 text-white f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" :span="4">회차</el-col>
                <el-col class="height-full bg-green901 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" style="" :span="8">{{currentGameInfo ? currentGameInfo.round : 0}}</el-col>
                <el-col class="height-full bg-green903 text-white f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" style="" :span="4">배팅마감</el-col>
                <el-col class="height-full bg-green901 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" :span="8">{{remainTime}}</el-col>
              </el-row>
              <el-row>
                <el-row class="east-bet-row">
                  <el-col :span="5">
                    <div class="east-bet-type-name">
                      결과
                    </div>
                  </el-col>
                  <el-col :span="19">
                    <el-row>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('goal', gameSettings.BetEastFootball.goalOdds)">
                          <el-row class="m-t-8">
                            <img class="east-goal-img" :src="'/image/mini/goal.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.goalOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('nogoal', gameSettings.BetEastFootball.goalOdds)">
                          <el-row class="m-t-8">
                            <img class="east-goal-img" :src="'/image/mini/nogoal.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.goalOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="east-bet-row">
                  <el-col :span="5">
                    <div class="east-bet-type-name">
                      키커
                    </div>
                  </el-col>
                  <el-col :span="19">
                    <el-row>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('kicker-left', gameSettings.BetEastFootball.kickerOdds)">
                          <el-row class="m-t-7">
                            <img class="east-bet-img" :src="'/image/mini/east-left.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.kickerOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('kicker-right', gameSettings.BetEastFootball.kickerOdds)">
                          <el-row class="m-t-7">
                            <img class="east-bet-img" :src="'/image/mini/east-right.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.kickerOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="east-bet-row">
                  <el-col :span="5">
                    <div class="east-bet-type-name">
                      골키퍼
                    </div>
                  </el-col>
                  <el-col :span="19">
                    <el-row>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('goalkeeper-left', gameSettings.BetEastFootball.goalkeeperOdds)">
                          <el-row class="m-t-7">
                            <img class="east-bet-img" :src="'/image/mini/east-left-red.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.goalkeeperOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="east-bet-button" @click="onClickBetButton('goalkeeper-right', gameSettings.BetEastFootball.goalkeeperOdds)">
                          <el-row class="m-t-7">
                            <img class="east-bet-img" :src="'/image/mini/east-right-red.png'">
                          </el-row>
                          <el-row class="m-t-3">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.goalkeeperOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="east-bet-row">
                  <el-col :span="5">
                    <div class="east-bet-type-name">
                      조합
                    </div>
                  </el-col>
                  <el-col :span="19">
                    <el-row>
                      <el-col :span="6">
                        <div class="east-bet-button" @click="onClickBetButton('mix-left-left', gameSettings.BetEastFootball.mixedOdds)">
                          <el-row class="m-t-10">
                            <img class="east-bet-img" :src="'/image/mini/left-left.png'" width="90%">
                          </el-row>
                          <el-row class="m-t-20">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.mixedOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="east-bet-button" @click="onClickBetButton('mix-left-right', gameSettings.BetEastFootball.mixedOdds)">
                          <el-row class="m-t-10">
                            <img class="east-bet-img" :src="'/image/mini/left-right.png'" width="90%">
                          </el-row>
                          <el-row class="m-t-20">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.mixedOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="east-bet-button" @click="onClickBetButton('mix-right-left', gameSettings.BetEastFootball.mixedOdds)">
                          <el-row class="m-t-10">
                            <img class="east-bet-small-img" :src="'/image/mini/right-left.png'" width="90%">
                          </el-row>
                          <el-row class="m-t-20">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.mixedOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="east-bet-button" @click="onClickBetButton('mix-right-right', gameSettings.BetEastFootball.mixedOdds)">
                          <el-row class="m-t-10">
                            <img class="east-bet-small-img" :src="'/image/mini/right-right.png'" width="90%">
                          </el-row>
                          <el-row class="m-t-20">
                            <span class="f-s-12 mini-bet-base">{{gameSettings.BetEastFootball.mixedOdds | filterOdds()}}</span>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="east-bet-row">
                  <el-col :span="24">
                    <div class="east-bet-button height-54 f-s-13  p-t-7">
                      벳이스트 축구의 배팅한도는 레벨에 상관없이<br>
                      회차당 최대 <span style="color: #9fe3fa">10만원까지만</span> 배팅이 가능합니다.
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <div v-if="!isBetAvailable" class="east-bet-lock">
                <img :src="'/image/mini/Lock-Icon.png'" class="m-t-200">
              </div>
            </el-row>
          </el-col>
        </div>
      </div>
      <el-row v-if="betLogs" class="m-t-13 display-inlineblock width-full">
        <el-row>
          <el-col :span="24">
            <div class="cursor" :class="`mini-history-tab-${themeType}`">벳이스트 축구 배팅내역</div>
          </el-col>
        </el-row>
        <el-row class="m-l-3 m-b-10" style="width: calc(100% - 6px);">
          <el-table :class="themeType == 'white' ? 'main-table-white' : 'main-table'" v-if="betLogs" :data="betLogs" element-loading-text="잠시만...." style="width: 100%" border empty-text="해당 게임에 배팅내역이 존재하지 않습니다.">
            <el-table-column prop="createdAt" label="시간" :width="isMobile ? 70 : 120">
              <template slot-scope="scope">
                <div class="word-keep">
                  {{isMobile ? parseTime(scope.row.createdAt, '{m}-{d} {h}:{i}') : parseTime(scope.row.createdAt, '{y}-{m}-{d} {h}:{i}')}}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="betInfo" label="배팅정보">
              <template slot-scope="scope">
                {{scope.row.betInfo}} - {{scope.row.round}} 회차
              </template>
            </el-table-column>
            <el-table-column prop="betMoney" label="배팅액" :width="isMobile ? 60 : 110">
              <template slot-scope="scope">
                {{ scope.row.betMoney | currencyFormat() }}
              </template>
            </el-table-column>
            <el-table-column prop="betType" label="배팅접수" :width="isMobile ? 60 : 100">
              <template slot-scope="scope">
                <span :class="scope.row.betType | betTypeClassObject()">
                  {{ scope.row.betType | filterBetType() }}
                </span>
              </template>
            </el-table-column>
            <el-table-column v-if="!isMobile" prop="betResult" label="배팅결과" width="140">
              <template slot-scope="scope">
                <span :class="scope.row.betResult | betTypeClassObject()">
                  {{ scope.row.betResult | filterBetType() }}
                </span>
              </template>
            </el-table-column>
            <el-table-column v-if="!isMobile" prop="earnMoney" label="적중금액" width="170">
              <template slot-scope="scope">
                {{ scope.row.earnMoney | currencyFormat() }}
              </template>
            </el-table-column>
            <el-table-column prop="status" label="상태결과" :width="isMobile ? 60 : 100">
              <template slot-scope="scope">
                <div :class="scope.row.status | statusClassObject(themeType)">
                  {{scope.row.status === 0 ? '대기' :scope.row.status === 1? '낙첨' : scope.row.status === 2? '당첨' : '취소'}}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-row> -->
    </div>
  </div>
  <Preview v-show="currentUser === null"/>
  <Check v-show="!isCheck" :themeType="themeType" />
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'
import { filterBetType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, betTypeClassObject } from '~/assets/js/data/uicommon.js'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const popupRouter = "BetEastFootball"

const minigameInfoService = feathers.service('getMiniGameInfo')
const mainService = feathers.service('main')

minigameInfoService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    MiniHeader,
    Preview,
    Check
  },
  filters: {
    currencyFormat,
    filterOdds,
    filterBetType,
    statusClassObject,
    betTypeClassObject
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      BetEastFootballBet: "getBetEastFootballBet"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                         // 배팅가능상태
      baseUrl: "http://api.xyzblue.com/docs/contents/soccer.html",  // 벳이스트 축구 중계 URL
      remainTime: "00:00",                                          // 현재 회차 남은시간
      currentGameInfo: null,                                        // 현재 회차정보
      gameName: "벳이스트 축구",                                     // 게임명
      gameType: "BetEastFootball",                                  // 게임타입
      betLogs: null,                                                // 배팅내역
      remainMins: 0,
      remainSecs: 0,
      calculateTime: null,
      isCheck: true
    };
  },
  watch: {
    BetEastFootballBet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket | val.BetEastFootball.gameStatus_auto | val.BetEastFootball.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket | val.BetEastFootball.gameStatus_manual)
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
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-BetEast')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)

    // 게임셋팅정보 배팅슬립정보 설정
    let userLevel = this.currentUser ? this.currentUser.level : 2
    let levelSetting = this.gameSettings.BetEastFootball.levelSetting[this.gameSettings.BetEastFootball.levelSetting.findIndex(setting => setting.level == userLevel)]
    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetEastFootball.gameStatus_auto | this.gameSettings.BetEastFootball.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetEastFootball.gameStatus_manual)
    this.$store.commit("betslip/SET_MIN_BET_MONEY", levelSetting.minBetMoney)
    this.$store.commit("betslip/SET_MAX_BET_MONEY", levelSetting.maxBetMoney)
    this.$store.commit("betslip/SET_MAX_WIN_MONEY", levelSetting.maxWinMoney)
    this.$store.commit("betslip/SET_MAX_BET_ODDS", levelSetting.maxOdds)
    this.deleteBettingSlip()

    // 회차 남은 시간 계산
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime()
    }, 1000)

    // 미니게임 새 회차정보 패치
    mainService.off('miniGameBetEastFootballRound'),
    mainService.on('miniGameBetEastFootballRound', ( currentGameInfo ) => {
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
    mainService.off('miniGameBetEastFootballTime')
    mainService.on('miniGameBetEastFootballTime', (state) => {
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
    mainService.off('miniBetLogBetEastFootball')
    mainService.on('miniBetLogBetEastFootball', (betLog) => {
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
    mainService.off('miniGameBetEastFootballRound')
    mainService.off('miniGameBetEastFootballTime')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogBetEastFootball')
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

        this.currentGame = res.data.currentGame                            // 현재 회차정보
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
        let s = window.innerWidth / 720;
        let aleft = (-1) * (1 - s) * 415 - s * 110;
        let atop = (-1) *(1 - s) * 230;
        let aheight = s * 560;
        jQuery('#myframe').css('left', aleft);
        jQuery('#myframe').css('top', atop);
        jQuery('#myframe').css('transform', "scale(" + s + "," + s + ")");
        jQuery('#myframe').css('margin-top', (-1) * s * 32 - 32 + "px");
        jQuery('#east-game-frame-container-in').css('height', aheight);
      } else {
        if (this.screenWidth > 1600) {
          jQuery('#myframe').css('left', 0);
          jQuery('#myframe').css('transform', "scale(1, 1)");
        } else if (this.screenWidth > 1440 && this.screenWidth <= 1600) {
          jQuery('#myframe').css('left', -110);
        } else if (this.screenWidth <= 1440) {
          jQuery('#myframe').css('transform', "scale(1, 1) translateX(-110px)");
        }
        jQuery('#myframe').css('margin-top', "-32px");
        jQuery('#east-game-frame-container-in').css('height', 560);
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
        leagueName: this.gameName,
        betTypeName: this.gameName + "-" + this.currentGameInfo.round + " 회차",
        betName: this.getBetNameFromType(betType),
        odds: odds
      }
      this.$store.commit('betslip/SET_BETSLIPLIST', data)
    },
    // 베팅타입으로 부터 디테일정보 얻기
    getBetNameFromType ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 'goal': strLabel += '골 (결과 맞추기)'; break;
        case 'nogoal': strLabel += '노골 (결과 맞추기)'; break;
        case 'kicker-left': strLabel += '좌 (키커 방향 맞추기)'; break;
        case 'kicker-right': strLabel += '우 (키커 방향 맞추기)'; break;
        case 'goalkeeper-left': strLabel += '좌 (골키퍼 맞추기)'; break;
        case 'goalkeeper-right': strLabel += '우 (골키퍼 맞추기)'; break;
        case 'mix-left-left': strLabel += '좌+좌 (조합 맞추기)'; break;
        case 'mix-left-right': strLabel += '좌+우 (조합 맞추기)'; break;
        case 'mix-right-left': strLabel += '우+좌 (조합 맞추기)'; break;
        case 'mix-right-right': strLabel += '우+우 (조합 맞추기)'; break;
      }
      return strLabel;
    },
    // 경기시간계산
    calculateGameRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
      }

      if (this.remainSecs < 10) this.remainTime = this.remainMins + ":0" + this.remainSecs
      else this.remainTime = this.remainMins + ":" + this.remainSecs
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

<style lang="css" src="~/assets/css/mini.css"></style>
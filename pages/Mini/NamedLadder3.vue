<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="40" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in playerbox3 minibg " id="CSEP_viewpan">
          <div id="mini-game-frame-container">
            <div id="mini-game-frame-container-in">
              <iframe :src="baseUrl" width="830" height="630" scrolling="no" frameborder="0" id="myframe" class="mini-game-frame"></iframe>
            </div>
          </div>
          <el-col class="mini-bet-panel">
            <el-row>
              <el-row class="p-5 height-50">
                <el-col class="height-full bg-brown text-brown f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" :span="4">회차</el-col>
                <el-col class="height-full bg-brown1 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" style="border-right: 2px solid #996148" :span="8">{{currentGameInfo ? currentGameInfo.round : 0}}</el-col>
                <el-col class="height-full bg-brown text-brown f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" style="border-left: 2px solid #996148" :span="4">
                  {{miniBettingEndText}}
                </el-col>
                <el-col class="height-full bg-brown1 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" :span="8">{{remainTime}}</el-col>
              </el-row>
              <!-- 일반배팅 -->
              <el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-97': !isMobile}">
                      결과
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('odd', gameSettings.NamedLadder3.OEOdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/odd.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.OEOdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('even', gameSettings.NamedLadder3.OEOdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/even.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.OEOdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-97': !isMobile}">
                      시작
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('left', gameSettings.NamedLadder3.LROdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/left.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.LROdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('right', gameSettings.NamedLadder3.LROdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/right.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.LROdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-97': !isMobile}">
                      줄수
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('three', gameSettings.NamedLadder3.LineOdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/line3.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.LineOdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 12 : 10">
                    <div class="mini-bet-button height-97" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('four', gameSettings.NamedLadder3.LineOdds)">
                      <el-row class="m-t-23">
                        <img class="mini-bet-lad-img" :src="'/image/mini/line4.png'">
                        <span class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.LineOdds | filterOdds()}}</span>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-225': !isMobile}">
                      조합배팅
                    </div>
                  </el-col>
                  <el-col :span="isMobile? 24 : 20">
                    <el-row>
                      <el-col :span="12">
                        <div class="mini-bet-button height-107" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('left-three-even', gameSettings.NamedLadder3.mixedOdds)">
                          <el-row class="m-t-25">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/left.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/line3.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/even.png'">
                          </el-row>
                          <el-row class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.mixedOdds | filterOdds()}}</el-row>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="mini-bet-button height-107" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('right-three-odd', gameSettings.NamedLadder3.mixedOdds)">
                          <el-row class="m-t-25">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/right.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/line3.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/odd.png'">
                          </el-row>
                          <el-row class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.mixedOdds | filterOdds()}}</el-row>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row class="m-t-10">
                      <el-col :span="12">
                        <div class="mini-bet-button height-107" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('left-four-odd', gameSettings.NamedLadder3.mixedOdds)">
                          <el-row class="m-t-25">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/left.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/line4.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/odd.png'">
                          </el-row>
                          <el-row class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.mixedOdds | filterOdds()}}</el-row>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="mini-bet-button height-107" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('right-four-even', gameSettings.NamedLadder3.mixedOdds)">
                          <el-row class="m-t-25">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/right.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/line4.png'">
                            <img class="mini-bet-lad-img-plus" :src="'/image/mini/Plus.png'">
                            <img class="mini-bet-lad-img-small" :src="'/image/mini/even.png'">
                          </el-row>
                          <el-row class="f-s-16 mini-bet-base">{{gameSettings.NamedLadder3.mixedOdds | filterOdds()}}</el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-row>
              <!-- 일반배팅 끝 -->
              <!-- 로크 -->
              <div v-show="!isBetAvailable" class="mini-bet-lock display-center">
                <img :src="layoutType == 'layout2' ? '/image/Mini/Ic_lock.png' : '/image/mini/Lock-Icon.png'">
              </div>
              <!-- 로크 끝 -->
            </el-row>
          </el-col>
        </div>
      </div>
      <el-row v-if="betLogs" class="m-t-13 display-inlineblock width-full">
        <el-row>
          <el-col :span="24">
            <div class="cursor" :class="`mini-history-tab-${themeType}`">네임드 사다리 3분 배팅내역</div>
          </el-col>
        </el-row>
        <el-row class="m-l-3 m-b-10" style="width: calc(100% - 6px);" :class="{'bg-grey924 p-12': layoutType == 'layout2'}">
          <div v-if="betLogs && betLogs.length > 0" :class="`table-mbetlog-${themeType}`">
            <div class="table-header">
              <div class="text-center" :style="isMobile ? 'width: 70px' : 'width: 140px'">시간</div>
              <div class="text-center table-mbetlog-flex-field">배팅정보</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 110px'">배팅액</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">배팅접수</div>
              <div v-if="!isMobile" class="text-center" style="width: 100px">배팅결과</div>
              <div v-if="!isMobile" class="text-center" style="width: 110px">적중금액</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">상태결과</div>
            </div>
            <el-row v-for="(betLog, index) in betLogs" :key="index">
              <el-row class="table-mbetlog-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
                <div class="display-center table-mbetlog-td-first" :style="isMobile ? 'width: 70px' : 'width: 140px'">
                  {{isMobile ? parseTime(betLog.createdAt, '{m}-{d} {h}:{i}') : parseTime(betLog.createdAt, '{y}-{m}-{d} {h}:{i}')}}
                </div>
                <div class="display-center table-mbetlog-td table-mbetlog-flex-field">
                  {{betLog.betInfo}} - {{betLog.round}} 회차
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 110px'">
                  {{ betLog.betMoney | currencyFormat() }}
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">
                  <span :class="betLog.betType | betTypeClassObject()">
                    {{ filterBetType(betLog.gameType, betLog.betType) }}
                  </span>
                </div>
                <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width: 100px">
                  <span :class="betLog.betResult | betTypeClassObject()">
                    {{ filterBetType(betLog.gameType, betLog.betResult) }}
                  </span>
                </div>
                <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width: 110px">
                  {{ betLog.earnMoney | currencyFormat() }}
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">
                  <div :class="betLog.status | statusClassObject(themeType)">
                    {{betLog.status === 0 ? '대기' :betLog.status === 1? '낙첨' : betLog.status === 2? '당첨' : '취소'}}
                  </div>
                </div>
              </el-row>
            </el-row>
          </div>
          <el-row v-if="betLogs && betLogs.length == 0" class="p-20 text-white">
            <el-row v-if="layoutType == 'layout2'" class="text-center m-b-30">
              <img :src="'/image/Mini/noslip.svg'">
            </el-row>
            <el-row class="text-center">
              해당 게임에 배팅내역이 존재하지 않습니다.
            </el-row>
          </el-row>
        </el-row>
      </el-row>
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

const popupRouter = "NamedLadder3"

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
    statusClassObject,
    betTypeClassObject,
    statusClassObjectGrey,
    betTypeClassObjectGrey
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      NamedLadder3Bet: "getNamedLadder3Bet",
      miniBettingEndText: "getMiniBettingEndText"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                     // 배팅가능상태
      baseUrl: "https://named.com/minigame/nball/powerladder3/pc",  // 네임드 사다리 3분 중계 URL
      remainTime: "00:00",                                      // 현재 회차 남은시간
      currentGameInfo: null,                                    // 현재 회차정보
      gameName: "네임드 사다리 3분",                                    // 게임명
      gameType: "NamedLadder3",                                  // 게임타입
      betLogs: null,                                            // 배팅내역
      remainMins: 0,
      remainSecs: 0,
      isCheck: true
    };
  },
  watch: {
    NamedLadder3Bet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.NamedLadder3.gameStatus_auto || val.NamedLadder3.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.NamedLadder3.gameStatus_manual)
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
    if (!this.gameSettings.NamedLadder3.isVisible || !this.gameSettings.Mini.named) this.$router.push("/")
    
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-NamedLadder3')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 1)

    // 게임셋팅정보 배팅슬립정보 설정
    let userLevel = this.currentUser ? this.currentUser.level : 2
    let levelSetting = this.gameSettings.NamedLadder3.levelSetting[this.gameSettings.NamedLadder3.levelSetting.findIndex(setting => setting.level == userLevel)]
    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.NamedLadder3.gameStatus_auto | this.gameSettings.NamedLadder3.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.NamedLadder3.gameStatus_manual)
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
    mainService.off('miniGameNamedLadder3Round'),
    mainService.on('miniGameNamedLadder3Round', ( currentGameInfo ) => {
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
    mainService.off('miniGameNamedLadder3Time')
    mainService.on('miniGameNamedLadder3Time', (state) => {
      this.remainMins = 2
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
    mainService.off('miniBetLogNamedLadder3')
    mainService.on('miniBetLogNamedLadder3', (betLog) => {
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
    mainService.off('miniGameNamedLadder3Round')
    mainService.off('miniGameNamedLadder3Time')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogNamedLadder3')
  },
  methods: {
    filterBetType,
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
        
        // 현재 회차정보 설정
        this.currentGameInfo = this.currentGame
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

      // @itking 가입한 유저가 하는가를 판정해야함....
      if (!this.isBetAvailable) {
        this.showMessage('알림메시지', "배팅을 할수 없는 상태입니다.", '닫기[Close]', 2)
        return
      }

      // 현재 회차정보를 얻지 못한 경우
      if (this.currentGameInfo === null) {
        this.showMessage('알림메시지', "현재 회차정보를 얻지 못하여 배팅을 할수 없습니다.", '닫기[Close]', 2)
        return
      }
      this.deleteBettingSlip()
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
        case 'odd': strLabel += '홀 (홀/짝 맞추기)'; break;
        case 'even': strLabel += '짝 (홀/짝 맞추기)'; break;
        case 'left': strLabel += '좌 (좌/우 맞추기)'; break;
        case 'right': strLabel += '우 (좌/우 맞추기)'; break;
        case 'three': strLabel += '3줄 (3줄/4줄 맞추기)'; break;
        case 'four': strLabel += '4줄 (3줄/4줄 맞추기)'; break;
        case 'left-three-even': strLabel += '좌+3+짝 (조합배팅 맞추기)'; break;
        case 'right-three-odd': strLabel += '우+3+홀 (조합배팅 맞추기)'; break;
        case 'left-four-odd': strLabel += '좌+4+홀 (조합배팅 맞추기)'; break;
        case 'right-four-even': strLabel += '우+4+짝 (조합배팅 맞추기)'; break;
      }
      return strLabel;
    },
    // 경기시간계산
    calculateGameRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
        this.remainMins --;
        if (this.remainMins < 0) this.remainMins = 2
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
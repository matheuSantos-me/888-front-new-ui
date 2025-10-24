<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="68" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker" id="vframe" ref="vframe">
        <div class="display-center" style="margin:0px; padding:0px;">
					<iframe id="viframe" style="width: 100%; max-width:830px;" frameborder="0" scrolling="no" :src="baseUrl" allowtransparency="true"></iframe>
				</div>
      </div>
      <div class="overunderline m-t-0 m-b-15"></div>
      <div class="col-md-12 m-b-15" :class="isMobile ? 'p-0' : 'p-t-0'">
        <div class="col-md-12" :class="[{'p-0': isMobile}, `v-box1-agero-prematch-${themeType}`]">
          <div class="list-box-g-agero col-md-12 width-full m-b-10  clockbox bg-black16">
            <div class="pull-left table-td-valign-middle" :class="isMobile ? 'm-t-20 m-l-0' : 'm-t-13 m-l-10'">
              <div v-if="!isMobile" class="f-s-25 p-l-20">
                <i class="fa fa-star m-r-8 text-orange11"></i><strong>MGM(고스톱)</strong> - <strong class="text-orange11">{{currentGameInfo ? currentGameInfo.roundNumber : 0}}</strong><strong></strong><strong>회차</strong>
              </div>
              <div v-else class="f-s-30 p-l-20">
                <strong class="text-orange11">{{currentGameInfo ? currentGameInfo.roundNumber : 0}}</strong><strong>회차</strong>
              </div>
              <div v-if="!isMobile" class="f-s-12 p-l-50 text-gray">1분단위로 추첨이 이루어지며 하루 1440회차 진행</div>
            </div>
            <span class="flip-clock-wrapper pull-right m-r-20">
              <ul v-if="!isMobile" class="flip p-0 m-2 m-t-17">
                <li class="flip-clock-active">
                  <a href="#">
                    <div class="up">
                      <div class="shadow"></div>
                      <div class="inn">0</div>
                    </div>
                    <div class="down">
                      <div class="shadow"></div>
                      <div class="inn">0</div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul v-if="!isMobile" class="flip p-0 m-2 m-t-17">
                <li class="flip-clock-active">
                  <a href="#">
                    <div class="up">
                      <div class="shadow"></div>
                      <div class="inn">0</div>
                    </div>
                    <div class="down">
                      <div class="shadow"></div>
                      <div class="inn">0</div>
                    </div>
                  </a>
                </li>
              </ul>
              <span v-if="!isMobile" class="flip-clock-divider seconds m-t-7">
                <span class="flip-clock-dot top"></span>
                <span class="flip-clock-dot bottom"></span>
              </span>
              <ul class="flip p-0 m-2" :class="isMobile ? 'm-t-13' : 'm-t-17'">
                <li class="flip-clock-active">
                  <a href="#">
                    <div class="up">
                      <div class="shadow"></div>
                      <div class="inn">{{parseInt(remainSecs / 10)}}</div>
                    </div>
                    <div class="down">
                      <div class="shadow"></div>
                      <div class="inn">{{parseInt(remainSecs / 10)}}</div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="flip p-0 m-2" :class="isMobile ? 'm-t-13' : 'm-t-17'">
                <li class="flip-clock-active">
                  <a href="#">
                    <div class="up">
                      <div class="shadow"></div>
                      <div class="inn">{{remainSecs % 10}}</div>
                    </div>
                    <div class="down">
                      <div class="shadow"></div>
                      <div class="inn">{{remainSecs % 10}}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div class="col-md-12" :class="`v-box2-agero-${themeType}`">
            <ul class="list-box-g-agero col-md-12 text-ellipsis m-t-20 m-b-5">
              <li class="hva_bt_sub1-agero">
                <div class="p-b-6">
                  <button type="button" class="btn btn-btn btn-block btnstyle1 btnstyle1-inverse3 btnstyle1-bg p-t-10 p-b-10 btn-sports" :class="[isMobile ? '' : 'height-180', `btn-${themeType}`]" @click="onClickBetButton('go', gameSettings.MGMGoStop.goOdds)">
                    <center>
                      <div class="rounded-corner bg-black21 f-s-18 p-t-10 position-relative" :class="isMobile ? 'width-70 height-70' : 'width-150 height-150'">
                        <strong>
                        <div class="text-blue902 position-absolute position-absolute-zindex-1 width-full alpha-60" style="font-family:arial;" :style="isMobile ? 'margin-top:15px; font-size:15pt;' : 'margin-top:55px; font-size:30pt;'">GO</div>
                        </strong>
                      </div>
                      <div class="f-s-15 m-t-5 text-gray" style="font-family:arial;"><strong>GO</strong></div>
                      <div class="f-s-15 text-white m-t-20 m-b-10"><span style="font-size:20pt; font-family:arial;">{{gameSettings.MGMGoStop.goOdds | filterOdds()}}</span></div>
                    </center>
                  </button>
                </div>
              </li>
              <li class="hva_bt_sub1-agero p-l-10 p-r-10">
                <button type="button" class="btn btn-btn btn-block btnstyle1 btnstyle1-inverse3 btnstyle1-bg p-t-10 p-b-10 btn-sports" :class="[isMobile ? '' : 'height-180', `btn-${themeType}`]" @click="onClickBetButton('tie', gameSettings.MGMGoStop.tieOdds)"> 
                  <center>
                    <div class="rounded-corner bg-black21 f-s-18 p-t-10 position-relative" :class="isMobile ? 'width-70 height-70' : 'width-150 height-150'">
                      <strong>
                      <div class="text-green904 position-absolute position-absolute-zindex-1 width-full alpha-60" style="font-family:arial;" :style="isMobile ? 'margin-top:15px; font-size:40pt;' : 'margin-top:55px; font-size:60pt;'">=</div>
                      </strong>
                    </div>
                    <div class="f-s-15 m-t-5 text-gray" style="font-family:arial;"><strong>TIE</strong></div>
                    <div class="f-s-15 text-white m-t-20 m-b-10"><span style="font-size:20pt; font-family:arial;">{{gameSettings.MGMGoStop.tieOdds | filterOdds()}}</span></div>
                  </center>
                </button>
              </li>
              <li class="hva_bt_sub1-agero">
                <div class="p-b-6">
                  <button type="button" class="btn btn-btn btn-block btnstyle1 btnstyle1-inverse3 btnstyle1-bg p-t-10 p-b-10 btn-sports" :class="[isMobile ? '' : 'height-180', `btn-${themeType}`]" @click="onClickBetButton('stop', gameSettings.MGMGoStop.stopOdds)">
                    <center>
                      <div class="rounded-corner bg-black21 f-s-18 p-t-10 position-relative" :class="isMobile ? 'width-70 height-70' : 'width-150 height-150'">
                        <strong>
                        <div class="text-red905 position-absolute position-absolute-zindex-1 width-full alpha-60" style="font-family:arial;" :style="isMobile ? 'margin-top:15px; font-size:15pt;' : 'margin-top:55px; font-size:30pt;'">STOP</div>
                        </strong>
                      </div>
                      <div class="f-s-15 m-t-5 text-gray" style="font-family:arial;"><strong>STOP</strong></div>
                      <div class="f-s-15 text-white m-t-20 m-b-10"><span style="font-size:20pt; font-family:arial;">{{gameSettings.MGMGoStop.stopOdds | filterOdds()}}</span></div>
                    </center>
                  </button>
                </div>
              </li>
            </ul>
            <div v-show="!isBetAvailable" class="mini-bet-lock display-center">
              <img :src="layoutType == 'layout2' ? '/image/mini/Ic_lock.png' : '/image/mini/Lock-Icon.png'">
            </div>
          </div>
        </div>
      </div>
      <el-row v-if="betLogs" class="m-t-13 display-inlineblock width-full">
        <el-row>
          <el-col :span="24">
            <div class="cursor" :class="`mini-history-tab-${themeType}`">MGM 고스톱 배팅내역</div>
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
  <Preview v-show="currentUser === null"/>
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'
import { filterBetType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, statusClassObjectGrey, betTypeClassObject, betTypeClassObjectGrey } from '~/assets/js/data/uicommon.js'
import LotusHeader from '~/components/Lotus/LotusHeader.vue'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const popupRouter = "MGMGoStop"

const minigameInfoService = feathers.service('getMiniGameInfo')
const lotusService = feathers.service('lotus-get-token')
const mainService = feathers.service('main');

minigameInfoService.timeout = 60000
lotusService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LotusHeader,
    Preview,
    Check,
    MiniHeader
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
      MGMGoStopBet: "getMGMGoStopBet"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                       // 배팅가능상태
      baseUrl: "https://mgm.nutv265.com/gostop.html",  // MGM 고스톱 중계 URL
      remainTime: "00:00",                                        // 현재 회차 남은시간
      currentGameInfo: null,                                      // 현재 회차정보
      gameName: "MGM 고스톱",                                  // 게임명
      gameType: "MGMGoStop",                                // 게임타입
      betLogs: null,                                              // 배팅내역
      remainMins: 0,
      remainSecs: 0,
      calculateTime: null,
      isCheck: true
    };
  },
  watch: {
    MGMGoStopBet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.MGMGoStop.gameStatus_auto || val.MGMGoStop.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.MGMGoStop.gameStatus_manual)
    },
    isBetAvailable(val){
      this.deleteBettingSlip()
    },
    currentUser(val) {
      this.initframe()
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
		this.$store.commit('SET_CURRENTPAGENAME', 'MGM-MGMGoStop')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 13)

    // 게임셋팅정보 배팅슬립정보 설정
    let userLevel = this.currentUser ? this.currentUser.level : 2
    let levelSetting = this.gameSettings.MGMGoStop.levelSetting[this.gameSettings.MGMGoStop.levelSetting.findIndex(setting => setting.level == userLevel)]

    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.MGMGoStop.gameStatus_auto | this.gameSettings.MGMGoStop.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.MGMGoStop.gameStatus_manual)
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
    mainService.off('miniGameMGMGoStopRound'),
    mainService.on('miniGameMGMGoStopRound', ( currentGameInfo ) => {
      if(currentGameInfo) {
        this.currentGameInfo.roundUniqueNumber = currentGameInfo.roundUniqueNumber
        this.currentGameInfo.roundNumber = currentGameInfo.roundNumber
        this.currentGameInfo._id = currentGameInfo.gameId
        this.isBetAvailable = !Boolean(currentGameInfo.status)
      }
      else {
        this.isBetAvailable = false    //베팅 불가상태
      }
      
    })

    // 회차시작이벤트
    mainService.off('miniGameMGMGoStopTime')
    mainService.on('miniGameMGMGoStopTime', (state) => {
      this.remainMins = 0
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
    mainService.off('miniBetLogMGMGoStop')
    mainService.on('miniBetLogMGMGoStop', (betLog) => {
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
    mainService.off('miniGameMGMGoStopRound')
    mainService.off('miniGameMGMGoStopTime')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogMGMGoStop')
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
    async initframe() {
      if (this.isMobile) {
        this.baseUrl = "https://mgm.nutv265.com/m/gostop.html"
      } else {
        this.baseUrl = "https://mgm.nutv265.com/gostop.html"
      }
      let frameWidth = this.$refs.vframe.clientWidth
      if (frameWidth >= 830) {
        jQuery('#viframe').css('height', 470);
      } else {
        jQuery('#viframe').css('height', 0.566 * frameWidth);
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
        times: this.currentGameInfo.roundUniqueNumber,
        round: this.currentGameInfo.roundNumber,
        leagueName: this.gameName,
        betTypeName: this.gameName + "-" + this.currentGameInfo.roundNumber + " 회차",
        betName: this.getBetNameFromType(betType),
        odds: odds
      }
      this.$store.commit('betslip/SET_BETSLIPLIST', data)
    },
    // 베팅타입으로 부터 디테일정보 얻기
    getBetNameFromType ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 'go': strLabel += 'GO (고스톱 맞추기)'; break;
        case 'stop': strLabel += 'STOP (고스톱 맞추기)'; break;
        case 'tie': strLabel += 'TIE (고스톱 맞추기)'; break;
      }
      return strLabel;
    },
    // 경기시간계산
    calculateGameRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
        this.remainMins --;
        if (this.remainMins < 0) this.remainMins = 0
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
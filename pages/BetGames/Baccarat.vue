<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <BetGamesHeader v-if="themeType == 'blue18' || themeType == 'gold12' || themeType == 'gold11' || themeType == 'red15'" :miniGameType="13" />
      <MiniHeader v-else :miniGameType="27" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in playerbox3 lotusbg position-relative" style="margin:0px; padding:0px;" id="bet-game-frame-container" ref="betgameframecontainer">
					<iframe style="width:100%; height:646px;" frameborder="0" scrolling="no" :src="'/html/index6.html'" name="datacont1" id="myframe" class="bet-game-frame"></iframe>
          <div style="position: absolute; left: 0; top: 0; width: calc(50% - 50px); height: 100%;"></div>
          <div style="position: absolute; left: 0; bottom: 0; width: 100%; height: calc(50% - 50px);"></div>
				</div>
      </div>
      <div class="overunderline m-t-0 m-b-15"></div>
      <div class="col-md-12 m-b-15" :class="isMobile ? 'p-0' : 'p-t-0'">
        <div class="col-md-12" :class="[{'p-0': isMobile}, `v-box1-agero-prematch-${themeType}`]">
          <div class="list-box-g-agero col-md-12 width-full m-b-3 clockbox bg-black16">
            <table class="width-full  height-full">
              <tbody>
                <tr>
                  <td v-if="!isShowMobile" width="360">
                    <div class=" m-l-10 pull-left table-td-valign-middle">
                      <div class="f-s-25 p-l-20"><i class="fa fa-star m-r-8 text-orange11"></i><strong id="game_title">LIVE BACCARAT</strong></div>
                      <div class="f-s-12 p-l-50 text-gray">플레이어 vs 벵커 카드 숫자의 합으로 하는게임 </div>
                    </div>
                  </td>
                  <td style="padding:0 15px 0 15px;" valign="bottom">
                    <table class="width-full ">
                      <tbody>
                        <tr>
                          <td class="width-half f-s-12 text-center p-5 p-t-10">
                            <strong>Place your bets</strong> ( <span class="text-primary">배팅</span> )
                            <div class="progress progress-striped bg-black-darker2 height-15 m-t-10 active">
                              <div class="progress-bar width-full height-15"></div>
                            </div>
                          </td>
                          <td class="width-half f-s-12 text-center p-5 p-t-10">
                            <strong>{{isShowMobile ? 'Please wait dealt' : 'Please wait, while the cards will be dealt'}}</strong> ( <span class="text-red905">대기</span> )
                            <div class="progress progress-striped bg-black-darker2 height-15 m-t-10">
                              <div class="progress-bar width-full height-15 progress-bar-inverse">
                                  <div id="timercounter" class="p-0 m-0 m-t-m-2 text-black f-s-14 display-none"><strong>카드가 처리되는 중입니다. 잠시 기다려주세요.</strong></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12 position-relative" :class="[{'p-0': isMobile}, `v-box2-agero-${themeType}`]">
            <ul class="col-md-12 width-full m-t-12 m-b-1 p-0" :class="{'p-l-2': !isMobile}">
              <button type="button" class="btn btn-block btnstyle1 btnstyle1-inverse3 btnstyle1-bg text-white f-s-14 text-left p-10" data-toggle="collapse" data-target="#Collapse_1">
                <i class="fa fa-chevron-circle-down m-r-5 text-grey901"></i><strong><span>메인배팅</span></strong>
              </button>
            </ul>
            <div class="panel-collapse col-md-12 m-0 p-0 collapse show" id="Collapse_1">
              <ul class="list-box-g-agero col-md-12 width-full m-t-0 ">
                <li :class="isMobile ? 'hva_bt_sub' : 'hva_bt_sub1-agero'">
                  <button v-if="currentGameInfo" type="button" class="btn btn-btn btn-sports btn-block f-s-13" :class="[`btn-${themeType}`, {'disabled': !isBetAvailable || currentGameInfo.odds == null || currentGameInfo.odds[0].status != 'active'}]" @click="onClickBetButton(0, currentGameInfo.odds ? currentGameInfo.odds[0].value : 0)">
                    <ul class="list-box-g-agero col-md-12 m-3">
                      <li class="hva-txt text-left text-gray"><i class="fa fa-star-o m-r-5 text-white"></i><span>플레이어(Player)승리</span></li>
                      <li class="hva-txt text-right text-white f-s-15 p-r-10">
                        <strong>
                          <span v-if="isBetAvailable && currentGameInfo.odds && currentGameInfo.odds[0].status == 'active'">{{currentGameInfo.odds ? currentGameInfo.odds[0].value : 0}}</span>
                          <span v-else><img :src="'/image/mini/ajax-loader.gif'"></span>
                        </strong>
                      </li>
                    </ul>
                  </button>
                </li>
                <li :class="isMobile ? 'hva_bt_sub' : 'hva_bt_sub1-agero'">
                  <button v-if="currentGameInfo" type="button" class="btn btn-btn btn-sports btn-block f-s-13" :class="[`btn-${themeType}`, {'disabled': !isBetAvailable || currentGameInfo.odds == null || currentGameInfo.odds[2].status != 'active'}]" @click="onClickBetButton(1, currentGameInfo.odds ? currentGameInfo.odds[2].value : 0)">
                    <ul class="list-box-g-agero col-md-12 m-3">
                      <li class="hva-txt text-left text-gray"><i class="fa fa-star-o m-r-5 text-white"></i><span>타이(Tie)</span></li>
                      <li class="hva-txt text-right text-white f-s-15 p-r-10">
                        <strong>
                          <span v-if="isBetAvailable && currentGameInfo.odds && currentGameInfo.odds[2].status == 'active'">{{currentGameInfo.odds ? currentGameInfo.odds[2].value : 0}}</span>
                          <span v-else><img :src="'/image/mini/ajax-loader.gif'"></span>
                        </strong>
                      </li>
                    </ul>
                  </button>
                </li>
                <li :class="isMobile ? 'hva_bt_sub' : 'hva_bt_sub1-agero'">
                  <button v-if="currentGameInfo" type="button" class="btn btn-btn btn-sports btn-block f-s-13" :class="[`btn-${themeType}`, {'disabled': !isBetAvailable || currentGameInfo.odds == null || currentGameInfo.odds[1].status != 'active'}]" @click="onClickBetButton(2, currentGameInfo.odds ? currentGameInfo.odds[1].value : 0)">
                    <ul class="list-box-g-agero col-md-12 m-3">
                      <li class="hva-txt text-left text-gray"><i class="fa fa-star-o m-r-5 text-white"></i><span>뱅커(Banker)승리</span></li>
                      <li class="hva-txt text-right text-white f-s-15 p-r-10">
                        <strong>
                          <span v-if="isBetAvailable && currentGameInfo.odds && currentGameInfo.odds[1].status == 'active'">{{currentGameInfo.odds ? currentGameInfo.odds[1].value : 0}}</span>
                          <span v-else><img :src="'/image/mini/ajax-loader.gif'"></span>
                        </strong>
                      </li>
                    </ul>
                  </button>
                </li>
              </ul>
              <ul class="list-box-g-agero col-md-12 width-full m-t-0 m-b-12">
                <li :class="isMobile ? 'hva_bt_sub' : 'hva_bt_sub2'">
                  <button v-if="currentGameInfo" type="button" class="btn btn-btn btn-sports btn-block f-s-13" :class="[`btn-${themeType}`, {'disabled': !isBetAvailable || currentGameInfo.odds == null || currentGameInfo.odds[3].status != 'active'}]" @click="onClickBetButton(3, currentGameInfo.odds ? currentGameInfo.odds[3].value : 0)">
                    <ul class="list-box-g-agero col-md-12 m-3">
                      <li class="hva-txt text-left text-gray"><i class="fa fa-star-o m-r-5 text-white"></i><span>플레이어 페어</span></li>
                      <li class="hva-txt text-right text-white f-s-15 p-r-10">
                        <strong>
                          <span v-if="isBetAvailable && currentGameInfo.odds && currentGameInfo.odds[3].status == 'active'">{{currentGameInfo.odds ? currentGameInfo.odds[3].value : 0}}</span>
                          <span v-else><img :src="'/image/mini/ajax-loader.gif'"></span>
                        </strong>
                      </li>
                    </ul>
                  </button>
                </li>
                <li :class="isMobile ? 'hva_bt_sub' : 'hva_bt_sub2'">
                  <button v-if="currentGameInfo" type="button" class="btn btn-btn btn-sports btn-block f-s-13" :class="[`btn-${themeType}`, {'disabled': !isBetAvailable || currentGameInfo.odds == null || currentGameInfo.odds[4].status != 'active'}]" @click="onClickBetButton(4, currentGameInfo.odds ? currentGameInfo.odds[4].value : 0)">
                    <ul class="list-box-g-agero col-md-12 m-3">
                      <li class="hva-txt text-left text-gray"><i class="fa fa-star-o m-r-5 text-white"></i><span>뱅커 페어</span></li>
                      <li class="hva-txt text-right text-white f-s-15 p-r-10">
                        <strong>
                          <span v-if="isBetAvailable && currentGameInfo.odds && currentGameInfo.odds[4].status == 'active'">{{currentGameInfo.odds ? currentGameInfo.odds[4].value : 0}}</span>
                          <span v-else><img :src="'/image/mini/ajax-loader.gif'"></span>
                        </strong>
                      </li>
                    </ul>
                  </button>
                </li>
              </ul>
            </div>
            <div v-show="!isBetAvailable" class="mini-bet-lock display-center">
              <img :src="layoutType == 'layout2' ? '/image/mini/Ic_lock.png' : '/image/mini/Lock-Icon.png'" :width="layoutType == 'layout2' ? 48 : 150">
            </div>
          </div>
        </div>
		  </div>
      <el-row v-if="betLogs" class="m-t-13 display-inlineblock width-full">
        <el-row>
          <el-col :span="24">
            <div class="cursor" :class="`mini-history-tab-${themeType}`">벳게임 바카라 배팅내역</div>
          </el-col>
        </el-row>
        <el-row class="m-l-3 m-b-10" style="width: calc(100% - 6px);" :class="{'bg-grey924 p-12': layoutType == 'layout2'}">
          <div v-if="betLogs && betLogs.length > 0" :class="`table-mbetlog-${themeType}`">
            <div class="table-header">
              <div class="text-center" :style="isMobile ? 'width: 70px' : 'width: 140px'">시간</div>
              <div class="text-center table-mbetlog-flex-field">배팅정보</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 110px'">배팅액</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 200px'">배팅접수</div>
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
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 200px'">
                  <span :class="betLog.betType | betTypeClassObject()">
                    {{ filterBetGameBetType(gameType, betLog.betType) }}
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
import { filterBetGameBetType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, statusClassObjectGrey, betTypeClassObject, betTypeClassObjectGrey } from '~/assets/js/data/uicommon.js'
import BetGamesHeader from '~/components/BetGames/BetGamesHeader.vue'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const popupRouter = "BetGameBaccarat"

const minigameInfoService = feathers.service('getMiniGameInfo')
const mainService = feathers.service('main');

minigameInfoService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    BetGamesHeader,
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
      BetGameBaccaratBet: "getBetGameBaccaratBet",
      layoutType: "getLayoutType"
    })
  },
  data() {
    return {
      isShowMobile: false,
      isBetAvailable: true,                                       // 배팅가능상태
      currentGameInfo: null,                                      // 현재 회차정보
      gameName: "벳게임 바카라",                                   // 게임명
      gameType: "BetGameBaccarat",                                // 게임타입
      betLogs: null,                                              // 배팅내역
      isCheck: true,
      initFrameWidth: 0
    };
  },
  watch: {
    BetGameBaccaratBet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.BetGameBaccarat.gameStatus_auto || val.BetGameBaccarat.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.BetGameBaccarat.gameStatus_manual)
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
		this.$store.commit('SET_CURRENTPAGENAME', 'BetGames-Baccarat')
    this.initFrameWidth = this.$refs.betgameframecontainer.clientWidth;
    
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 6)

    // 게임셋팅정보 배팅슬립정보 설정
    let userLevel = this.currentUser ? this.currentUser.level : 2
    let levelSetting = this.gameSettings.BetGameBaccarat.levelSetting[this.gameSettings.BetGameBaccarat.levelSetting.findIndex(setting => setting.level == userLevel)]

    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetGameBaccarat.gameStatus_auto | this.gameSettings.BetGameBaccarat.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.BetGameBaccarat.gameStatus_manual)
    this.$store.commit("betslip/SET_MIN_BET_MONEY", levelSetting.minBetMoney)
    this.$store.commit("betslip/SET_MAX_BET_MONEY", levelSetting.maxBetMoney)
    this.$store.commit("betslip/SET_MAX_WIN_MONEY", levelSetting.maxWinMoney)
    this.$store.commit("betslip/SET_MAX_BET_ODDS", levelSetting.maxOdds)
    
    this.deleteBettingSlip()

    // 미니게임 새 회차정보 패치
    mainService.off('miniGameBetGameBaccaratRound'),
    mainService.on('miniGameBetGameBaccaratRound', ( currentGameInfo ) => {
      if(currentGameInfo) {
        this.currentGameInfo.runId = currentGameInfo.runId
        this.currentGameInfo.drawCode = currentGameInfo.drawCode
        this.currentGameInfo.gameId = currentGameInfo.gameId
        this.isBetAvailable = !Boolean(currentGameInfo.status)
      }
      else {
        this.isBetAvailable = false    //베팅 불가상태
      }
      
    })

    // 회차시작이벤트
    mainService.off('miniGameBetGameBaccaratOdds')
    mainService.on('miniGameBetGameBaccaratOdds', (state) => {
      for (let index = 0; index < state.odds.length; index++) {
        this.currentGameInfo.odds[index].value = state.odds[index].value
        this.currentGameInfo.odds[index].status = state.odds[index].status
      }
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
    mainService.off('miniBetLogBetGameBaccarat')
    mainService.on('miniBetLogBetGameBaccarat', (betLog) => {
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
    mainService.off('miniGameBetGameBaccaratRound')
    mainService.off('miniGameBetGameBaccaratOdds')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogBetGameBaccarat')
  },
  methods: {
    filterBetGameBetType,
    parseTime,
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await minigameInfoService.find({ query: { gameType: popupRouter }})

        if (res.code != 1) {
          console.log(res.message)
          return
        }
        
        // 현재 회차정보 설정
        this.currentGameInfo = res.data.currentRound
        if(!this.currentGameInfo) {
          this.currentGameInfo = {
            times: null,
            round: null
          }
          this.isBetAvailable = false
        } else {
          if (this.currentGameInfo.status == 1) {
            this.isBetAvailable = true
          } else {
            this.isBetAvailable = false
          }
        }
        
        this.$store.commit("SET_MiniBet", {gameType: this.gameType, status: res.data.betChance})
        if (res.data.betLogs != null) this.betLogs = res.data.betLogs.data      // 배팅내역
      } catch (err) {
        console.log(err.message)
      }
    },
    // 프레임사이즈 설정
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false
      } else {
        this.isShowMobile = true
      }
      let cWidth = this.$refs.betgameframecontainer.clientWidth;
      if (cWidth < 960) {
        jQuery('#myframe').css('top', -40);
        let height = 0.5625 * (cWidth)
        jQuery('#myframe').css('height', height + 98);
        jQuery('#bet-game-frame-container').css('height', height);
      } else {
        jQuery('#myframe').css('top', -49);
        jQuery('#myframe').css('height', 636);
        jQuery('#bet-game-frame-container').css('height', 530);
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
      if (this.currentGameInfo.odds[betType].status != 'active') {
        return
      }
      // 배팅슬립 초기화
      this.deleteBettingSlip()

      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.gameType,
        gameId: this.currentGameInfo.gameId,
        betType: betType,
        times: this.currentGameInfo.runId,
        round: this.currentGameInfo.drawCode,
        leagueName: this.gameName,
        betTypeName: this.gameName + "-" + this.currentGameInfo.drawCode + " 회차",
        betName: this.getBetNameFromType(betType),
        odds: odds
      }
      this.$store.commit('betslip/SET_BETSLIPLIST', data)
    },
    // 베팅타입으로 부터 디테일정보 얻기
    getBetNameFromType ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 0: strLabel = '플레이어(Player)승리'; break;
        case 1: strLabel = '타이(Tie)'; break;
        case 2: strLabel = '뱅커(Banker)승리'; break;
        case 3: strLabel = '플레이어 페어'; break;
        case 4: strLabel = '뱅커 페어'; break;
      }
      return strLabel;
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
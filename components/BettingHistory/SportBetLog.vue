<template>
  <el-row>
    <div v-if="(gameType != 'fame' && !sportBetLog.isDeleted) || gameType == 'fame'" :class="`table-sbetlog-${themeType}`">
      <div class="table-header">
        <div class="text-center" :style="isMobile ? 'width:70px;' : 'width:12%;'">경기시간</div>
        <div v-if="!isMobile" class="text-center" style="width:18%;">리그명</div>
        <div v-if="!isMobile" class="text-center table-sbetlog-flex-field">홈팀 vs 원정팀</div>
        <div v-if="!isMobile" class="text-center" style="width:12%;">경기타입</div>
        <div class="text-center" :style="isMobile ? 'flex: 1 1;' : 'width:15%;'">배팅타입</div>
        <div class="text-center" :style="isMobile ? 'width:40px;' : 'width:6%;'">배당</div>
        <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:7%;'">경기결과</div>
        <div class="text-center" :style="isMobile ? 'width:50px;' : 'width:100px;'">배팅결과</div>
      </div>
      <el-row id="righttemp" ref="righttemp">
        <el-row  v-for="(betLog, betLogIndex) in sportBetLog.BetLogs" v-if="betLog.FixtureId != -1" :key="betLogIndex">
          <el-row class="table-sbetlog-tr">
            <div class="display-center table-sbetlog-td-first" :style="isMobile ? 'width:70px;' : 'width:12%;'">
              <div class="text-center word-keep">{{betLog.Fixture.StartDate | parseTime('{y}-{m}-{d} {h}:{i}')}}</div>
            </div>
            <div v-if="!isMobile" class="display-center table-sbetlog-td" style="width:18%;">
              <div class="text-center" style="word-break: keep-all;">
                <img :src="`/image/Sports/League/${betLog.Fixture.Sport.Id}.png`" width="23">
                {{betLog.Fixture.League.Name}}
              </div>
            </div>
            <div v-if="!isMobile" class="table-sbetlog-td display-center table-sbetlog-flex-field">
              <div class="text-center">
                {{betLog.Fixture.Participants[0].Name}} <span :class="getTextColor(themeType, 1)">vs</span>
                {{betLog.Fixture.Participants[1].Name}}
              </div>
            </div>
            <div v-if="!isMobile" class="table-sbetlog-td display-center" style="width:12%;">
              <div class="text-center" style="word-break: keep-all;">
                {{betLog.MarketName}}
              </div>
            </div>
            <div class="table-sbetlog-td display-center" :style="isMobile ? 'flex: 1 1;' : 'width:15%;'">
              <div class="text-center width-full">
                <el-row>
                  <el-col :span="5" class="display-center" :class="{'m-t-13' : isMobile}">
                    <img :src="`/image/BettingHistory/eye.png`" class="cursor" data-toggle="collapse" :data-target="'#result' + betLog._id" aria-expanded="false" :aria-controls="'result' + betLog._id" 
                      @click="createTracker(sportBetLog._id, betLog.FixtureId, betLog.baseUrl)" />
                  </el-col>
                  <el-col :span="18" class="text-left word-keep">
                    <el-row v-if="isMobile">
                      <el-row class="text-overflow">
                        {{betLog.Fixture.Participants[0].Name}} <span :class="getTextColor(themeType, 1)">vs</span>
                      </el-row>
                      <el-row class="text-overflow">
                        {{betLog.Fixture.Participants[1].Name}}
                      </el-row>
                    </el-row>
                    <el-row :class="getTextColor(themeType, 1)">{{betLog.MarketName}} {{getBetName(betLog.MarketId, betLog.Bets)}}</el-row>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="table-sbetlog-td display-center" :style="isMobile ? 'width:40px;' : 'width:6%;'">
              <div class="text-center" style="word-break: keep-all;">
                {{ betLog.Price | filterOdds}}
              </div>
            </div>
            <div class="table-sbetlog-td display-center" :style="isMobile ? 'width:60px;' : 'width:7%;'">
              <div class="text-center" style="word-break: keep-all;">
                {{betLog.Fixture.Scoreboard && betLog.Fixture.Scoreboard.Results && betLog.Fixture.Scoreboard.Results.length > 1 ? betLog.Fixture.Scoreboard.Results[0].Value + ' : ' + betLog.Fixture.Scoreboard.Results[1].Value: '-'}}
              </div>
            </div>
            <div class="table-sbetlog-td display-center" :style="isMobile ? 'width:50px;' : 'width:100px;'">
              <div class="text-center" style="word-break: keep-all;">
                <div :class="filterStatusClassObject(betLog.Bets)">
                  {{betLog.Bets | filterBetStatus(betLog.MarketId, betLog.Fixture.Status)}}
                </div>
              </div>
            </div>
          </el-row>
          <el-row class="m-t-6 m-b-6 collapse" aria-expanded="false" :id="'result' + betLog._id">
            <div class="col-md-12 width-full p-0 m-0 f-s-14" style="border: 4px solid #2f3438; border-radius: 5px;" :class="!isBlackMode ? 'bg-white-darker text-green903' : 'bg-black-main1 text-green902'">
              <iframe v-if="isUseNewTracker && betLog.baseUrl != ''" id="myframe" :src="betLog.baseUrl" width="100%" :height="iHeight" scrolling="no" frameborder="0"></iframe>
              <div v-if="!isUseNewTracker" v-show="!trackerError" :id="'tracker-' + sportBetLog._id + '-' + betLog.FixtureId"></div>
              <img v-show="!isMobile && (trackerError || (isUseNewTracker && betLog.baseUrl == ''))" :src="'/image/BettingHistory/' + betLog.Fixture.Sport.Id + '.jpg'" class="width-full" />
              <div v-show="trackerError || (isUseNewTracker && betLog.baseUrl == '')" class="text-white bethistory-livescore">
                <el-row class="bethistory-livescore-in display-flex">
                  <el-col :span="6" class="text-center display-center height-full">
                    <el-row class="display-center">
                      <el-row class="f-w-700 m-l-5 text-white m-t-15" :class="isMobile ? 'f-s-14' : 'f-s-20'">{{betLog.Fixture !== undefined ? betLog.Fixture.Participants[0].Name : ''}}</el-row>
                    </el-row>
                  </el-col>
                  <el-col :span="12" class="text-center f-s-12 text-white">
                    <el-row class="m-t-12">{{betLog.Fixture.StartDate | parseTime('{y}년 {m}월 {d}일')}}</el-row>
                    <el-row class="m-t-4">{{betLog.Fixture.StartDate | parseTime('{h}:{i}:{s}')}}</el-row>
                    <el-row class="f-s-16 m-t-10" :class="`text-theme-${themeType}`">{{ betLog.Fixture.Scoreboard  ? betLog.Fixture.Scoreboard.StatusDescription : ''}}</el-row>
                    <el-row class="f-w-700 m-t-20" :class="isMobile ? 'f-s-18' : 'f-s-26'">
                      <span class="p-5 p-b-8 p-l-30 p-r-30" style="background-color: rgba(0, 0, 0, 0.7)">
                        {{ betLog.Fixture.Scoreboard && betLog.Fixture.Scoreboard.Results && betLog.Fixture.Scoreboard.Results.length > 1 ? betLog.Fixture.Scoreboard.Results[0].Value : '0'}} : {{ betLog.Fixture.Scoreboard && betLog.Fixture.Scoreboard.Results && betLog.Fixture.Scoreboard.Results.length > 1 ? betLog.Fixture.Scoreboard.Results[1].Value : '0'}}
                      </span>
                    </el-row>
                    <el-row v-if="betLog.Fixture.Periods" class="m-t-10" style="display: flex; flex-direction: row; justify-content: center;">
                      <div v-for="(period, periodIndex) in betLog.Fixture.Periods" :key="periodIndex" class="p-r-5 p-l-5">
                        <el-row>{{period.StatusDescription}}</el-row>
                        <el-row class="m-t-4">{{period.Results[0].Value}}:{{period.Results[1].Value}}</el-row>
                      </div>
                    </el-row>
                  </el-col>
                  <el-col :span="6" class="text-center display-center height-full">
                    <el-row class="display-center">
                      <el-row class="f-w-700 m-l-5 text-white m-t-15" :class="isMobile ? 'f-s-14' : 'f-s-20'">{{betLog.Fixture !== undefined ? betLog.Fixture.Participants[1].Name : ''}}</el-row>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </div>              
          </el-row>
          <el-row class="position-absolute width-full height-full display-center text-white f-s-18 f-w-700" style="top: 0; left: 0; background-color: rgba(0, 0, 0, 0.6)" v-if="sportBetLog.Status == -1">
            배팅취소
          </el-row>
        </el-row>
        <el-row>
          <div class="table-sbetlog-content">
            <div class="float-left p-t-4">
              <div class="float-left m-r-10 p-t-3">배팅접수시간: {{sportBetLog.createdAt | parseTime()}}</div>
              <div class="float-left m-r-10 p-t-3">
                예상당첨금액: ( 배팅 
                <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{sportBetLog.BetMoney | currencyFormat()}}</span> 
                X 배당 
                <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{getOdds(sportBetLog.BetLogs) | filterOdds()}}</span> 
                ) = 
                <span :class="getTextColor(themeType, 1)">{{getOddsMoney(sportBetLog.BetMoney, sportBetLog.BetLogs) | currencyFormat('원')}}</span>
              </div>
              <div class="float-left m-r-10 p-t-3">
                결과당첨금액: 
                <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{sportBetLog.WinMoney | currencyFormat('원')}}</span>
              </div>
              <div class="float-left m-r-10 p-t-3" :set="bonusIndex = sportBetLog.BetLogs.findIndex(log => log.FixtureId == -1)">
                <span v-if="bonusIndex > -1">
                  {{sportBetLog.BetLogs[bonusIndex].MarketName}}: 
                  <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">보너스배당률 ({{sportBetLog.BetLogs[bonusIndex].Price | filterOdds()}})</span>
                </span>
              </div>
              <span class="float-left m-l-10 p-l-10 p-r-10 p-t-3" :class="[statusClassObject(sportBetLog.Status, themeType), {'text-white': layoutType != 'layout2'}]" style="width: auto;">
                {{sportBetLog.Status | filterTotalBetStatus}}
              </span>
              <span v-if="gameSettings.Sports.bettingCancel.isUse && canUserProcess && gameType == 'prematch' && !sportBetLog.isCanceling && sportBetLog.Status == 0"
                class="text-white float-left m-l-10 p-l-10 p-r-10 cursor status-cancel-request"
                @click="onClickCancel(sportBetLog)">배팅취소요청</span>
              <span v-if="canUserProcess && sportBetLog.Status != 0" class="text-white float-left m-l-10 p-4 p-l-10 p-r-10 cursor" :class="[{'width-80' : isMobile}, layoutType == 'layout2' ? `b-r-6 btnstyle-${themeType}` : 'status-lose']" @click="onClickDelete(sportBetLog._id)">
                <img v-if="layoutType == 'layout2'" :src="`/image/Money/Ic_delete.png`" class="m-r-8" style="margin-top: -4px;"> 배팅삭제
              </span>
            </div>
          </div>
        </el-row>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, parseTime, filterOdds, mapOrder, checkBetLogsStatus, toFixedDown } from "~/assets/js/utils";
import { statusClassObject, statusClassObjectGrey, getTextColor } from "~/assets/js/data/uicommon";

const sportBettingService = feathers.service('sportsBetting')
const sportRequestCancelService = feathers.service('cancelSportsBetting')
const getTheSportsIdService = feathers.service('getTheSportsId')
sportBettingService.timeout = 60000;
sportRequestCancelService.timeout = 60000;
getTheSportsIdService.timeout = 60000;

export default {
  middleware: "authenticated",
  props: ["sportBetLog", "gameType", "canUserProcess"],
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: "getIsMobile",
      layoutType: 'getLayoutType',
      isUseNewTracker: 'getIsUseNewTracker',
      themeType: "getThemeType",
      isBlackMode: 'getIsBlackMode',
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings"
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    filterOdds,
    filterBetStatus(bets, marketId, fixtureStatus) {
      const status = checkBetLogsStatus(bets, marketId);
      let strLabel = "";

      switch (status) {
        case -1:
          strLabel += "대기중";
          break;
        case 0:
          if (fixtureStatus == 2)
            strLabel += "진행중";
          else
            strLabel += "대기중";
          break;
        case 1:
          strLabel += "낙첨";
          break;
        case 2:
          strLabel += "당첨";
          break;
        case 3:
          strLabel += "대기중";
          break;
        case 4:
          strLabel += "대기중";
          break;
        case 5:
          strLabel += "대기중";
          break;
        case 6:
          strLabel += "적특";
          break;
        case 7:
          strLabel += "대기중";
          break;
      }

      return strLabel;
    },
    filterTotalBetStatus(status) {
      let strLabel = "";
      switch (status) {
        case -1:
          strLabel += "대기중";
          break;
        case 0:
          strLabel += "정산대기중";
          break;
        case 1:
          strLabel += "낙첨";
          break;
        case 2:
          strLabel += "당첨";
          break;
        case 3:
          strLabel += "적특";
          break;
        case 4:
          strLabel += "절반낙첨";
          break;
        case 5:
          strLabel += "절반당첨";
          break;
        case 6:
          strLabel += "적특";
          break;
      }
      return strLabel;
    }
  },
  watch: {
    screenWidth(val) {
      this.initFrame()
    }
  },
  data() {
    return {
      trackerGenerator: null,
      trackerError: false,
      loadingDelete: false,
      loadingCancel: false,
      iHeight: 0
    }
  },
  methods: {
    parseTime,
    getTextColor,
    statusClassObject,
    statusClassObjectGrey,
    // 결과처리 CSS 클래스 얻기
    filterStatusClassObject(bets, marketId) {
      const status = checkBetLogsStatus(bets, marketId);
      return this.statusClassObject(status, this.themeType)
    },
    // 배팅타입명 얻기
    getBetName(marketId, bets, markets) {
      let betName = ''
      if (bets.length == 1) {
        if (bets[0].BaseLine && bets[0].BaseLine !== '') {
          betName =  bets[0].Name + ' (' + bets[0].BaseLine + ')'
        } else {
          betName = bets[0].Name
        }
      } else {
        if (bets[0].BaseLine && bets[0].BaseLine !== '') {
          betName = bets[0].Name + ' (' + bets[0].BaseLine + ') + ' + bets[1].Name + ' (' + bets[1].BaseLine + ')'
        } else {
          betName = bets[0].Name + ' + ' + bets[1].Name + ' (' + bets[1].BaseLine + ')'
        }
      }
      return betName
    },
    // 배당 얻기
    getOdds(betLogs) {
      const totalOdds = betLogs.reduce((a, b) => a * b.Price, 1);

      return toFixedDown(totalOdds);
    },
    // 당첨금액 얻기
    getOddsMoney(betmoney, betLogs) {
      const totalOdds = toFixedDown(betLogs.reduce((a, b) => a * b.Price, 1));
      const oddMoney = (betmoney * (totalOdds * 100)) / 100;
      return toFixedDown(oddMoney);
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
    // 배팅취소
    async onClickCancel(log) {
      try {
        if (this.loadingCancel) return

        this.loadingCancel = true
        this.$nuxt.$loading.start()
        if (!this.canUserProcess || this.gameType != 'prematch') {
          this.showMessage('알림메시지', "배팅취소를 할수 없습니다.", '닫기[Close]', 2)
          this.loadingCancel = false
          this.$nuxt.$loading.finish()
          return
        }
        let data = {
          userLoginId: this.currentUser.userLoginId,
          sportBetLogId: log._id
        }

        let res = await sportRequestCancelService.create(data)
        if (res.code == 100) {
          log.Status = -1
        } else if (res.code == 1) {
          log.isCanceling = true
        }
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 || res.code == 100 ? 1 : 0 );
        this.loadingCancel = false
        this.$nuxt.$loading.finish()
      } catch (err) {
        this.showMessage('알림메시지', `배팅취소요청이 실패하였습니다.|[오류메시지]: ${err.message}`, '닫기[Close]', 0)
        this.loadingCancel = false
        this.$nuxt.$loading.finish()
      }
    },
    initFrame() {
      if (!this.isUseNewTracker) return

      let jbWidth1 = this.$refs.righttemp.$el.clientWidth - 4
      this.iHeight = (404/800*jbWidth1) + 142
    },
    // 트래커생성
    async createTracker(sportBetLogId, fixtureId, baseUrl) {
      this.trackerError = false
      if (this.isUseNewTracker && baseUrl) {
        this.initFrame()
      } else {
        STATSCOREWidgets.onLoad(err => {
          if (err) {
            switch (err.type) {
              case 'NetworkError':
                break;
              case 'BrowserNotSupported':
                break;
            }
            this.trackerErrorHandle();
            console.log(err);
            return;
          }

          const element = document.getElementById('tracker-' + sportBetLogId + '-' + fixtureId);
          const configurationId = process.env.trackerId;
          const inputData = { eventId: 'm:' + fixtureId, language: 'ko' };
          const options = {};
          const widget = new window.STATSCOREWidgets.WidgetGroup(element, configurationId, inputData, options);
          widget.on('error', e => { this.trackerErrorHandle() });
        });
      }
    },
    // 트래커오류처리
    trackerErrorHandle() {
      this.trackerError = true
    },
    // 배팅삭제
    async onClickDelete(id) {
      if (this.loadingDelete) return

      this.loadingDelete = true
      this.$nuxt.$loading.start()
      await sportBettingService.patch(id, {isDeleted: true}).then(res => {
        if (res.code == 1) {
          this.sportBetLog.isDeleted = true
        }
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      }).catch(err => {
        this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
      })
      this.loadingDelete = false
      this.$nuxt.$loading.finish()
    }
  }
};
</script>
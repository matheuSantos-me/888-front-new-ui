<template>
  <el-row>
    <el-row v-if="!isShowMobile">
      <div :class="[{'on': type == 0}, `virtual-history-tab-${themeType}`]" @click="onClickHistoryTab(0)">지난회차 결과</div>
      <div :class="[{'on': type == 1, 'm-l-4': layoutType != 'layout2'}, `virtual-history-tab-${themeType}`]" @click="onClickHistoryTab(1)">나의 배팅내역</div>
    </el-row>
    <el-row v-if="type === 0" class="m-t-1 text-center" :class="{'m-b-10': layoutType != 'layout2'}">
      <el-row :class="`table-virtual-container-${themeType}`">
        <div :class="`table-virtual-${themeType}`">
          <div class="table-header">
            <div class="text-center" style="width: 75px;">회차</div>
            <div v-if="gameType == 0 || gameType == 1 || gameType == 4" class="text-center" :class="gameType == 0 || gameType == 4 || !isMobile ? 'table-virtual-flex-field' : 'width-80'">경기장</div>
            <div v-else class="text-center" :style="isShowMobile ? 'width: 120px' : 'width: 180px'">경기장</div>
            <div v-if="gameType == 0 || gameType == 4" class="text-center" :style="isMobile ? 'width: 70px' : 'width: 160px'">홈팀</div>
            <div v-if="gameType == 0 || gameType == 4" class="text-center" :style="isMobile ? 'width: 50px' : 'width: 65px'">VS</div>
            <div v-if="gameType == 0 || gameType == 4" class="text-center" :style="isMobile ? 'width: 70px' : 'width: 160px'">원정팀</div>
            <div v-if="gameType == 1" class="text-center" :style="isMobile ? 'width: 70px' : 'width: 100px'">홈팀</div>
            <div v-if="gameType == 1" class="text-center" :style="isMobile ? 'width: 70px' : 'width: 100px'">원정팀</div>
            <div v-if="gameType == 1" class="text-center" :style="isMobile ? 'width: 50px' : 'width: 65px'">승무패</div>
            <div v-if="gameType == 1" class="text-center" :style="isMobile ? 'width: 50px' : 'width: 65px'">언더 오버</div>
            <div v-if="gameType == 1" class="text-center" :style="isMobile ? 'width: 50px' : 'width: 65px'">핸디캡</div>
            <div v-if="gameType == 2 || gameType == 3" class="text-center table-virtual-flex-field">{{gameType == 2 ? '우승견' : '우승마'}}</div>
          </div>
          <el-row v-for="(history, index) in gameHistory" :key="index">
            <el-row class="table-virtual-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-virtual-td-first" style="width: 75px;">{{history.round}}</div>
              <div v-if="gameType == 0 || gameType == 1 || gameType == 4" class="display-center table-virtual-td"  :class="gameType == 0 || gameType == 4 || !isMobile ? 'table-virtual-flex-field' : 'width-80'">
                {{history.leagueName | convertToKorean}}
              </div>
              <div v-else class="display-center table-virtual-td" :style="isShowMobile ? 'width: 120px' : 'width: 180px'">
                {{history.leagueName | convertToKorean}}
              </div>
              <div v-if="gameType == 0 || gameType == 4" class="display-center table-virtual-td" :style="isMobile ? 'width: 70px' : 'width: 160px'">
                <div class="text-ellipsis">{{ history.homeTeamName }}</div>
              </div>
              <div v-if="gameType == 0 || gameType == 4" class="display-center table-virtual-td" :style="isMobile ? 'width: 50px' : 'width: 65px'">
                {{history.homeScore}} : {{history.awayScore}}
              </div>
              <div v-if="gameType == 0 || gameType == 4" class="display-center table-virtual-td" :style="isMobile ? 'width: 70px' : 'width: 160px'">
                <div class="text-ellipsis">{{ history.awayTeamName }}</div>
              </div>
              <div v-if="gameType == 1" class="display-center table-virtual-td" :style="isMobile ? 'width: 70px' : 'width: 100px'">
                {{ history.homeTeamName }}
              </div>
              <div v-if="gameType == 1" class="display-center table-virtual-td" :style="isMobile ? 'width: 70px' : 'width: 100px'">
                {{ history.awayTeamName }}
              </div>
              <div v-if="gameType == 1" class="display-center table-virtual-td" :style="isMobile ? 'width: 50px' : 'width: 65px'">
                {{filterResult(history.result12)}}
              </div>
              <div v-if="gameType == 1" class="display-center table-virtual-td" :style="isMobile ? 'width: 50px' : 'width: 65px'">
                {{filterResult(history.resultOU)}}
              </div>
              <div v-if="gameType == 1" class="display-center table-virtual-td" :style="isMobile ? 'width: 50px' : 'width: 65px'">
                {{filterResult(history.resultHandi)}}
              </div>
              <div v-if="gameType == 2 || gameType == 3" class="display-center table-virtual-td table-virtual-flex-field">
                <div class="text-left width-full" style="padding-left: 30%;" >
                {{history.result.number}}. {{ history.result.name }}
              </div>
              </div>
            </el-row>
          </el-row>
        </div>
      </el-row>
      <img v-if="layoutType != 'layout2'" :src="'/image/Virtual/logo.png'" width="50%" class="m-t-150 m-b-50" />
    </el-row>
    <el-row v-else-if="type === 1" class="text-center display-table width-full p-t-8"
      :class="[isMobile ? 'f-s-12' : 'f-s-13', `text-contrast-${themeType}`, {'m-b-30': layoutType != 'layout2'}]">
      <el-row v-for="(betLog, betLogIndex) in betLogs" :key="betLogIndex">
        <el-row style="display: flex" class="m-t-1" :class="{'b-r-6 overflow-hidden': layoutType == 'layout2'}">
          <div style="width:14%;" class="display-center p-5" :class="`virtual-history-bg-${themeType}`">회차</div>
          <div style="width:20%;" class="display-center p-5" :class="`virtual-history-bg-${themeType}`">타입</div>
          <div class="display-center p-5" :class="`virtual-history-bg-${themeType}`" style="flex: 1 1;">배팅타입</div>
          <div
            v-if="!isShowMobile"
            style="width:75px;"
            class="display-center p-5"
            :class="`virtual-history-bg-${themeType}`"
          >배당</div>
          <div style="width:14%" class="display-center p-5" :class="`virtual-history-bg-${themeType}`">결과</div>
          <div
            v-if="!isShowMobile"
            style="width:75px;"
            class="display-center p-5"
            :class="`virtual-history-bg-${themeType}`"
          >상태</div>
        </el-row>
        <el-row v-for="(bet, betIndex) in betLog.bets" :key="betIndex">
          <el-row style="display: flex" :class="{'m-t-8 b-r-6 overflow-hidden': layoutType == 'layout2'}">
            <div
              style="width:14%;"
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
            >{{bet.round}}</div>
            <div
              style="width:20%;"
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
            >{{bet.leagueName | convertToKorean}}</div>
            <div
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
              style="flex: 1 1;flex-direction: column;"
            >
              <el-row v-if="gameType == 0 || gameType == 1 || gameType == 4">{{bet.betName.split('|')[1]}}</el-row>
              <el-row v-if="gameType == 0 || gameType == 1 || gameType == 4" :class="getTextColor(themeType, 1)">{{bet.betName.split('|')[0]}}</el-row>
              <span v-else>{{bet.betName}}</span>
            </div>
            <div
              v-if="!isShowMobile"
              style="width:75px;"
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
            >{{filterOdds(bet.odd)}}</div>
            <div
              style="width:14%;"
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
            >{{bet.result}}</div>
            <div
              v-if="!isShowMobile"
              style="width:75px;"
              class="display-center p-5"
              :class="[`virtual-history-bg-${themeType}`, {'bg-grey919': layoutType == 'layout2'}]"
            >
              <div
                :class="[statusClassObject(bet.status, themeType), {'width-50': layoutType != 'layout2'}]"
              >{{bet.status === 0 ? '진행중' :bet.status === 1? '낙첨' : bet.status === 2? '당첨' : '적특'}}</div>
            </div>
          </el-row>
        </el-row>
        <el-row
          class="text-left p-15 m-b-6"
          :class="layoutType != 'layout2' ? `virtual-history-bg-${themeType}` : ''"
          style="letter-spacing: 1px;"
        >
          <el-row>
            게임배팅금액:
            <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{betLog.betMoney | currencyFormat('원')}}</span>
          </el-row>
          <el-row class="m-t-7">배팅접수시간: {{betLog.createdAt | parseTime}}</el-row>
          <el-row class="m-t-7">
            예상당첨금액: (배팅
            <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{betLog.betMoney | currencyFormat('')}}</span> X 배당
            <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{filterOdds(betLog.odds)}}</span>) =
            <span :class="getTextColor(themeType, 1)">{{betLog.expectedMoney | currencyFormat('원')}}</span>
          </el-row>
          <el-row class="m-t-7">
            <div class="float-left m-r-20 p-t-4">
              결과당첨금액:
              <span :class="!isBlackMode ? 'text-green903' : 'text-green902'">{{betLog.winMoney | currencyFormat('원')}}</span>
            </div>
            <div
              :class="statusClassObject(betLog.status, themeType)"
              class="width-100 float-left"
            >{{betLog.status === 0 ? '정산대기중' :betLog.status === 1? '낙첨' : betLog.status === 2? '당첨' : '적특'}}</div>
          </el-row>
        </el-row>
      </el-row>
      <el-row
        v-if="betLogs.length < 1"
        class="p-t-20 p-b-20 display-center"
        :class="`virtual-history-none-bg-${themeType}`"
        style="height: 363px"
      >
        <el-row>
          <el-row v-if="layoutType == 'layout2'" class="text-center m-b-24">
            <img :src="'/image/Virtual/none.png'">
          </el-row>
          해당 게임에 배팅내역이 존재하지 않습니다.
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import {
  currencyFormat,
  parseTime,
  filterOdds,
  convertToKorean,
} from "~/assets/js/utils";
import { statusClassObject, getTextColor } from "~/assets/js/data/uicommon.js";

export default {
  props: ["isShowMobile", "gameHistory", "betLogs", "historyType", "gameType"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      userInfo: 'auth/currentUser',
			themeType: 'getThemeType',
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount"
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    convertToKorean
  },
  watch: {
    historyType() {
      this.type = this.historyType
    }
  },
  data() {
    return {
      type: 0, // 지난회차인가 배팅내역인가
    }
  },
  methods: {
    statusClassObject,
    getTextColor,
    filterOdds,
    // 지난 회차, 배팅내역 탭선택
    onClickHistoryTab(val) {
      this.type = val;
    },
    filterResult(result) {
      if (result == "HOME") return "홈"
      if (result == "AWAY") return "원정"
      if (result == "UNDER") return "언더"
      if (result == "OVER") return "오버"
    }
  }
}
</script>

<template>
  <el-row>
    <el-row v-if="!betLog.isDeleted">
      <div v-if="gameType == 1 || gameType == 4 || gameType == 5" :class="`table-sbetlog-${themeType}`">
        <div class="table-header">
          <div class="text-center" :style="isMobile ? 'width:50px;' : 'width:150px;'">회차</div>
          <div class="text-center" :style="isMobile ? 'width:80px;' : 'width:150px;'">리그명</div>
          <div class="text-center table-sbetlog-flex-field">홈팀 vs 원정팀</div>
          <div class="text-center" :style="isMobile ? 'width:80px;' : 'width:190px;'">배팅타입</div>
          <div v-if="!isMobile" class="text-center" style="width:70px;">배당</div>
          <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:85px;'">경기결과</div>
          <div v-if="!isMobile" class="text-center" style="width:105px;">배팅결과</div>
        </div>
        <el-row>
          <el-row v-for="(bet, betIndex) in betLog.bets" :key="betIndex">
            <el-row class="table-sbetlog-tr">
              <div class="display-center table-sbetlog-td-first" :style="isMobile ? 'width:50px;' : 'width:150px;'">
                {{bet.round}}
              </div>
              <div class="display-center table-sbetlog-td" :style="isMobile ? 'width:80px;' : 'width:150px;'">
                <span :class="betLog.betType | betTypeClassObject()">
                  {{bet.leagueName | convertToKorean}}
                </span>
              </div>
              <div class="table-sbetlog-td display-center table-sbetlog-flex-field">
                {{bet.betName.split('|')[1]}}
              </div>
              <div class="table-sbetlog-td display-center" :style="isMobile ? 'width:80px;' : 'width:190px;'">
                {{bet.betName.split('|')[0]}}
              </div>
              <div v-if="!isMobile" class="table-sbetlog-td display-center" style="width:70px;">
                {{bet.odd | filterOdds}}
              </div>
              <div class="table-sbetlog-td display-center" :style="isMobile ? 'width:60px;' : 'width:85px;'">
                {{bet.result}}
              </div>
              <div v-if="!isMobile" class="table-sbetlog-td display-center" style="width:105px;">
                <div class="width-50" :class="bet.status | statusClassObject(themeType)">
                  {{bet.status == 0 ? '진행중' :bet.status == 1? '낙첨' : bet.status == 2? '당첨' : '적특'}}
                </div>
              </div>
            </el-row>
          </el-row>
          <el-row>
            <div class="table-sbetlog-content" :class="!isBlackMode ? 'text-green903' : 'text-green902'">
              <div class="float-left p-0 m-0 m-r-15 p-t-4 word-keep" :class="{'width-full' : isMobile}">
                <span :class="`text-contrast-${themeType}`">예상당첨금액 : (배팅</span> {{betLog.betMoney | currencyFormat('원')}} 
                <span :class="`text-contrast-${themeType}`">X 배당</span> {{betLog.odds | filterOdds()}}
                <span :class="`text-contrast-${themeType}`">) =</span> 
                <span :class="getTextColor(themeType, 1)">{{betLog.betMoney * betLog.odds | currencyFormat('원')}}</span>
              </div>
              <div class="float-left p-0 m-0 m-r-15 p-t-4"><span :class="`text-contrast-${themeType}`">결과당첨금액 : </span>{{betLog.winMoney | currencyFormat('원')}}</div>
              <div class="float-left p-0 m-0">
                <div :class="betLog.status | statusClassObject(themeType)" class="width-50">
                  {{betLog.status == 0 ? '대기' :betLog.status == 1? '낙첨' : betLog.status == 2? '당첨' : '적특'}}
                </div>
              </div>
              <div v-if="betLog.status != 0" class="float-left m-0 m-l-10 cursor text-white status-lose width-80" @click="onClickDelete(betLog._id)">
                배팅삭제
              </div>
            </div>
          </el-row>
        </el-row>
      </div>
      <div v-if="gameType == 2 || gameType == 3" :class="`table-sbetlog-${themeType}`">
        <div class="table-header">
          <div class="text-center" :style="isMobile ? 'width: 50px' : 'width:230px'">회차</div>
          <div class="text-center" :style="isMobile ? 'width: 80px;' : 'width:230px;'">경기장</div>
          <div class="text-center table-sbetlog-flex-field">배팅타입</div>
          <div v-if="!isMobile" class="text-center" style="width:70px;">배당</div>
          <div class="text-center" :style="isMobile ? 'width: 120px' : 'width:200px'">경기결과</div>
          <div v-if="!isMobile" class="text-center" style="width:105px;">배팅결과</div>
        </div>
        <el-row>
          <el-row v-for="(bet, betIndex) in betLog.bets" :key="betIndex">
            <el-row class="table-sbetlog-tr">
              <div class="display-center table-sbetlog-td-first" :style="isMobile ? 'width: 50px' : 'width:230px'">
                {{bet.round}}
              </div>
              <div class="display-center table-sbetlog-td" :style="isMobile ? 'width: 80px;' : 'width:230px;'">
                {{bet.leagueName | convertToKorean}}
              </div>
              <div class="table-sbetlog-td display-center table-sbetlog-flex-field">
                {{bet.betName}}
              </div>
              <div v-if="!isMobile" class="table-sbetlog-td display-center" style="width:70px;">
                {{bet.odd | filterOdds}}
              </div>
              <div class="table-sbetlog-td display-center" :style="isMobile ? 'width: 120px' : 'width:200px'">
                {{bet.result}}
              </div>
              <div v-if="!isMobile" class="table-sbetlog-td display-center" style="width:105px;">
                <div class="width-50" :class="bet.status | statusClassObject(themeType)">
                  {{bet.status == 0 ? '진행중' :bet.status == 1? '낙첨' : bet.status == 2? '당첨' : '적특'}}
                </div>
              </div>
            </el-row>
          </el-row>
          <el-row>
            <div class="table-sbetlog-content" :class="!isBlackMode ? 'text-green903' : 'text-green902'">
              <div class="float-left p-0 m-0 p-t-4"><span :class="`text-contrast-${themeType}`">배팅접수시간 : </span>{{betLog.createdAt | parseTime('{y}-{m}-{d} {h}:{i}')}} </div>
                <div class="float-left p-0 m-0 p-t-4" :class="{'m-l-15' : !isMobile}">
                  <span :class="`text-contrast-${themeType}`">예상당첨금액 : (배팅</span> {{betLog.betMoney | currencyFormat('원')}} 
                  <span :class="`text-contrast-${themeType}`">X 배당</span> {{betLog.odds | filterOdds()}}
                  <span :class="`text-contrast-${themeType}`">) =</span> 
                  <span :class="getTextColor(themeType, 1)">{{betLog.betMoney * betLog.odds | currencyFormat('원')}}</span>
                </div>
                <div class="float-left p-0 m-0 p-t-4" :class="{'m-l-15' : !isMobile}"><span :class="`text-contrast-${themeType}`">결과당첨금액 : </span>{{betLog.winMoney | currencyFormat('원')}}</div>
                <div class="float-left p-0 m-0 m-l-15">
                  <div :class="betLog.status | statusClassObject(themeType)" class="width-50">
                    {{betLog.status == 0 ? '대기' :betLog.status == 1? '낙첨' : betLog.status == 2? '당첨' : '취소'}}
                  </div>
                </div>
                <div v-if="betLog.status != 0" class="float-left m-0 m-l-10 cursor text-white status-lose width-80" @click="onClickDelete(betLog._id)">
                  배팅삭제
                </div>
            </div>
          </el-row>
        </el-row>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { getGameNameFromType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, betTypeClassObject, statusClassObjectGrey, getTextColor } from '~/assets/js/data/uicommon'
import { currencyFormat, parseTime, filterOdds, convertToKorean } from '~/assets/js/utils'

const virtualBettingService = feathers.service('virtualBetting')
virtualBettingService.timeout = 60000;

export default {
  middleware: "authenticated",
  props: ["gameType", "betLog"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      isBlackMode: 'getIsBlackMode',
      layoutType: "getLayoutType",
      themeType: "getThemeType"
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    filterOdds,
    statusClassObject,
    getGameNameFromType,
    betTypeClassObject,
    convertToKorean,
    statusClassObjectGrey
  },
  data() {
    return {
      loadingDelete: false
    }
  },
  methods: {
    getTextColor,
    // 배팅삭제
    async onClickDelete(id) {
      if (this.loadingDelete) return

      this.loadingDelete = true
      this.$nuxt.$loading.start()
      await virtualBettingService.patch(id, {}).then(res => {
        if (res.code == 1) {
          this.betLog.isDeleted = true
        }
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      }).catch(err => {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
      })
      this.loadingDelete = false
      this.$nuxt.$loading.finish()
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
};
</script>
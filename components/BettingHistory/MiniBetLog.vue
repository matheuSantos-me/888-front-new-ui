<template>
  <el-row>
    <div :class="`table-mbetlog-${themeType}`">
      <div class="table-header">
        <div class="text-center table-mbetlog-flex-field">게임</div>
        <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:230px;'">배팅접수</div>
        <div v-if="!isMobile" class="text-center" style="width:190px;">배팅액</div>
        <div v-if="!isMobile" class="text-center" style="width:70px;">배당</div>
        <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:86px;'">경기결과</div>
        <div v-if="!isMobile" class="text-center" style="width:105px;">배팅결과</div>
      </div>
      <el-row>
        <el-row class="table-mbetlog-tr">
          <div class="display-center table-mbetlog-td-first table-mbetlog-flex-field">
            {{betLog.gameType | getGameNameFromType()}} {{betLog.betInfo}} 
            <span v-if="betLog.gameType == 'CoreHillo' || betLog.gameType == 'CoreDice' || betLog.gameType == 'CoreMine'">:{{betLog.round}}</span>
            <span v-if="betLog.gameType == 'CoreCrash' || betLog.gameType == 'CoreHillo' || betLog.gameType == 'CoreDice' || betLog.gameType == 'CoreMHillo' || betLog.gameType == 'CoreMine'">회차</span>
          </div>
          <div class="display-center table-mbetlog-td" :style="isMobile ? 'width:60px;' : 'width:230px;'">
            <span :class="betTypeClassObject(betLog.betType)">
              {{betLog.gameType == 'CoreCrash' || betLog.gameType == "CoreHillo" || betLog.gameType == "CoreDice" || betLog.gameType == "CoreMHillo" || betLog.gameType == "CoreMine" ? betLog.betType : filterBetType(betLog.gameType, betLog.betType)}}
            </span>
          </div>
          <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width:190px;">
            {{betLog.betMoney | currencyFormat('원')}}
          </div>
          <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width:70px;">
            {{betLog.odds | filterOdds()}}
          </div>
          <div class="table-mbetlog-td display-center" :style="isMobile ? 'width:60px;' : 'width:86px;'">
            <span :class="betTypeClassObject(betLog.betResult)">
              {{betLog.gameType == 'CoreCrash' || betLog.gameType == "CoreDice" || betLog.gameType == "CoreMHillo" || betLog.gameType == "CoreMine" ? betLog.betResult : betLog.gameType == "CoreHillo" ? betLog.betType : filterBetType(betLog.gameType, betLog.betResult)}}
            </span>
          </div>
          <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width:105px;">
            <div :class="betLog.status | statusClassObject(themeType)">
              {{betLog.status == 0 ? '대기' :betLog.status == 1? '낙첨' : betLog.status == 2? '당첨' : '취소'}}
            </div>
          </div>
        </el-row>
        <el-row>
          <div class="table-mbetlog-content" :class="!isBlackMode ? 'text-green903' : 'text-green902'">
            <div class="float-left p-0 m-0 m-r-15 p-t-4" :class="{'width-full' : isMobile}"><span :class="`text-contrast-${themeType}`">배팅접수시간 : </span>{{betLog.createdAt | parseTime('{y}-{m}-{d} {h}:{i}')}} </div>
            <div class="float-left p-0 m-0 m-r-15 p-t-4 word-keep" :class="{'width-full' : isMobile}">
              <span :class="`text-contrast-${themeType}`">예상당첨금액 : (배팅</span> {{betLog.betMoney | currencyFormat('원')}} 
              <span :class="`text-contrast-${themeType}`">X 배당</span> {{betLog.odds | filterOdds()}}
              <span :class="`text-contrast-${themeType}`">) =</span> 
              <span :class="getTextColor(themeType, 1)">{{betLog.betMoney * betLog.odds | currencyFormat('원')}}</span>
            </div>
            <div class="float-left p-0 m-0 m-r-15 p-t-4"><span :class="`text-contrast-${themeType}`">결과당첨금액 : </span>{{betLog.earnMoney | currencyFormat('원')}}</div>
            <div class="float-left p-0 m-0">
              <div class="width-50" :class="betLog.status | statusClassObject(themeType)">
                {{betLog.status == 0 ? '대기' :betLog.status == 1? '낙첨' : betLog.status == 2? '당첨' : '취소'}}
              </div>
            </div>
            <div class="float-left m-0 m-l-10 cursor text-white p-4 p-l-10 p-r-10" :class="layoutType == 'layout2' ? `b-r-6 btnstyle-${themeType}` : 'status-lose width-80'" @click="onClickDelete(betLog._id)">
              <img v-if="layoutType == 'layout2'" :src="`/image/Money/Ic_delete.png`" class="m-r-8" style="margin-top: -4px;"> 배팅삭제
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
import { filterBetType, getGameNameFromType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, statusClassObjectGrey, betTypeClassObject, betTypeClassObjectGrey, getTextColor } from '~/assets/js/data/uicommon'
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'

const miniBetttingService = feathers.service('miniBetting')
miniBetttingService.timeout = 60000;

export default {
  middleware: "authenticated",
  props: ["betLog"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      themeType: "getThemeType"
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    filterOdds,
    statusClassObject,
    getGameNameFromType,
    statusClassObjectGrey,
    betTypeClassObjectGrey
  },
  data() {
    return {
      loadingDelete: false
    }
  },
  methods: {
    filterBetType,
    betTypeClassObject,
    getTextColor,
    // 배팅로그 삭제
    async onClickDelete(id) {
      if (this.loadingDelete) return
      
      this.loadingDelete = true
      this.$nuxt.$loading.start();
      await miniBetttingService.patch(id, {}).then(res => {
        if (res.code == 1) {
          this.betLog.isDeleted = true
        }
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      }).catch(err => {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
      })
      this.loadingDelete = false
      this.$nuxt.$loading.finish();
    },
    // 메시지
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button, type
			})
		}
  }
};
</script>
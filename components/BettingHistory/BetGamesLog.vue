<template>
  <el-row>
    <table v-if="!betLog.isDeleted" class="table-is f-s-12 m-0 m-b-20" align="center">
      <tbody>
        <tr>
          <td class="p-0 text-center" :class="`table-h-${themeType}`">게임</td>
          <td class="p-0 text-center" :class="`table-h-${themeType}`" :style="isMobile ? 'width:60px;' : 'width:230px;'">배팅접수</td>
          <td v-if="!isMobile" class="p-0 text-center" :class="`table-h-${themeType}`" style="width:190px;">배팅액</td>
          <td v-if="!isMobile" class="p-0 text-center" :class="`table-h-${themeType}`" style="width:70px;">배당</td>
          <td v-if="!isMobile" class="p-0 text-center" :class="`table-h-${themeType}`" style="width:105px;">배팅결과</td>
        </tr>
        <tr>
          <td class="p-0 border-bottom-1-grey text-center word-keep" :class="!isBlackMode ? 'table-b-white' : 'table-b'">
            {{ betLog.gameType | getGameNameFromType()}} {{betLog.betInfo}}										
          </td>
          <td class="p-0 border-bottom-1-grey text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b'">
            <span :class="betTypeClassObject(betLog.betType)">
              {{filterBetGameBetType(betLog.gameType, betLog.betType)}}
            </span>
          </td>
          <td v-if="!isMobile" class="p-0 border-bottom-1-grey text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b'">
            {{betLog.betMoney | currencyFormat('원')}}
          </td>
          <td v-if="!isMobile" class="p-0 border-bottom-1-grey text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b'">
            {{betLog.odds | filterOdds()}}
          </td>
          <td v-if="!isMobile" class="p-0 border-bottom-1-grey text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b'">
            <div :class="betLog.status | statusClassObject(themeType)">
              {{betLog.status == 0 ? '대기' :betLog.status == 1? '낙첨' : betLog.status == 2? '당첨' : '취소'}}
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="p-0">
            <div class=" col-md-12 width-full text-left p-10 m-0 f-s-14" :class="!isBlackMode ? 'bg-white-darker text-green903' : 'bg-black-main text-green902'">
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
              <div v-if="betLog.status != 0" class="float-left m-0 m-l-10 cursor text-white status-lose width-80" @click="onClickDelete(betLog._id)">
                배팅삭제
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { filterBetGameBetType, getGameNameFromType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, betTypeClassObject, getTextColor } from '~/assets/js/data/uicommon'
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'

const miniBetttingService = feathers.service('miniBetting')
miniBetttingService.timeout = 60000;

export default {
  middleware: "authenticated",
  props: ["betLog"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      isBlackMode: 'getIsBlackMode',
      themeType: "getThemeType"
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    filterOdds,
    statusClassObject,
    getGameNameFromType
  },
  data() {
    return {
      loadingDelete: false
    }
  },
  methods: {
    filterBetGameBetType,
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
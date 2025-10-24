<template>
  <el-row>
    <div :class="`table-mbetlog-${themeType}`">
      <div class="table-header">
        <div class="text-center" :style="isMobile ? 'width:70px;' : 'width:200px;'">배팅시간</div>
        <div class="text-center table-mbetlog-flex-field">게임</div>
        <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:190px;'">배팅액</div>
        <div class="text-center" :style="isMobile ? 'width:60px;' : 'width:105px;'">당첨금액</div>
        <div class="text-center" :style="isMobile ? 'width:50px;' : 'width:105px;'">배팅결과</div>
      </div>
      <el-row>
        <el-row class="table-mbetlog-tr m-b-16">
          <div class="display-center table-mbetlog-td-first" :style="isMobile ? 'width:70px;' : 'width:200px;'">
            {{betLog.betTransTime | parseTimeKorean('{y}-{m}-{d} {h}:{i}')}}
          </div>
          <div class="display-center table-mbetlog-td table-mbetlog-flex-field">
            {{betLog.gameName}} <span v-if="betLog.gameType"> - {{betLog.gameType}}</span>
          </div>
          <div class="table-mbetlog-td display-center" :style="isMobile ? 'width:60px;' : 'width:190px;'">
            {{betLog.bet | currencyFormat('원')}}
          </div>
          <div class="table-mbetlog-td display-center" :style="isMobile ? 'width:60px;' : 'width:105px;'">
            {{betLog.win | currencyFormat('원')}}
          </div>
          <div class="table-mbetlog-td display-center" :style="isMobile ? 'width:50px;' : 'width:105px;'">
            <div :class="getStatusClass(betLog.win)">
              {{betLog.win > 0 ? "당첨" : "낙첨"}}
            </div>
          </div>
        </el-row>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import { getGameNameFromType } from '~/assets/js/data/datamanagement.js'
import { currencyFormat, parseTime, parseTimeKorean, filterOdds } from '~/assets/js/utils'

export default {
  middleware: "authenticated",
  props: ["betLog"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      layoutType: 'getLayoutType',
      themeType: "getThemeType",
    })
  },
  filters: {
    parseTime,
    currencyFormat,
    filterOdds,
    getGameNameFromType,
    parseTimeKorean
  },
  methods: {
    getStatusClass(winMoney) {
      if (this.layoutType == 'layout2') {
        return winMoney > 0 ? 'status-win-' + this.themeType : 'status-lose-' + this.themeType
      }
      return winMoney > 0 ? 'status-win text-white' : 'status-lose text-white'
    }
  }
};
</script>
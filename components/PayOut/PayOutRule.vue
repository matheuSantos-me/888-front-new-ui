<template>
<client-only>
  <div class="word-keep" :class="[isShowMobile ? 'f-s-12 p-10' : 'f-s-14', `text-contrast-${themeType}`]">
    <el-row class="f-w-700 f-w-700" :class="[isShowMobile ? 'f-s-14' : 'f-s-16', getTextColor(themeType, 1)]">
      {{themeType != 'yellow15' ? '출금신청시 안내사항' : ''}}
      <img v-if="themeType != 'yellow15'" :src="`/image/Money/${themeType}/Attention.png`" class="m-l-5">
      <span v-if="isShowMobile" class="p-5 p-l-10 p-r-10 float-right" style="background-color: rgba(0, 0, 0, 0.3); border-radius: 5px;" @click="showRule">X</span>
    </el-row>
    <el-row v-if="themeType != 'yellow15'">
      <el-row class="m-t-20">
        <p v-if="themeType != 'green'" v-html="payOutSettings.rule"></p>
        <p v-else v-html="payOutSettings.ruleCasino"></p>
      </el-row>
      <el-row v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12'" class="m-t-20">
        <span class="m-r-3 f-s-16 f-w-700" :class="getTextColor(themeType, 1)">롤링규정 안내사항<img  :src="`/image/Money/${themeType}/Attention.png`" class="m-l-10"></span>
      </el-row>
      <el-row v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12'" class="m-t-20">
        {{payOutSettings.ruleRolling}}
      </el-row>
      <el-row v-if="themeType != 'green' && themeType != 'gold12' && themeType != 'blue18'" class="m-t-20">
        <table class="table-is f-s-12 m-0" align="center">
          <tbody>
            <tr class="">
              <td class="table-h-grey p-0 text-center f-s-11" style="width:12%" :style="!isBlackMode ? 'border:1px solid #000;' : ''"></td>
              <td class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">두폴이상</td>
              <td v-if="themeType != 'yellow14'" class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">단폴/실시간</td>
              <td v-if="themeType == 'yellow14'" class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">단폴</td>
              <td v-if="themeType == 'yellow14'" class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">실시간</td>
              <td class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">미니</td>
              <td class="p-0 text-center f-s-11" :class="`table-h-${themeType}`" style="width:17.6%">가상</td>
              <td class="p-0 text-center f-s-11" :class="`table-h-${themeType}`">카지노</td>
            </tr>
            <tr>
              <td class="p-0 text-center f-s-11" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                필요롤링
              </td>
              <td class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                {{payOutSettings.rollingSportsTwoFolder}}%
              </td>
              <td v-if="themeType != 'yellow14'" class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                {{payOutSettings.rollingSportsOneFolder}}%
              </td>
              <td v-if="themeType == 'yellow14'" class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                200%
              </td>
              <td v-if="themeType == 'yellow14'" class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                300%
              </td>
              <td class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                {{payOutSettings.rollingMini}}%
              </td>
              <td class="p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                {{payOutSettings.rollingVirtual}}%
              </td>
              <td class=" p-0 text-center" :class="!isBlackMode ? 'table-b-white' : 'table-b-black'">
                {{payOutSettings.rollingCasino}}%
              </td>
            </tr>
          </tbody>
        </table>
      </el-row>
      <el-row v-if="themeType == 'blue18'" class="m-t-20">
        <span :class="getTextColor(themeType, 1)">※</span> 출금신청 페이지에서 편리하게 롤링게이지 확인 가능하니 참고 바랍니다.
      </el-row>
    </el-row>
    <img v-else :src="isMobile ? '/image/money/yellow15/withdrawm.jpg' : '/image/money/yellow15/withdraw.jpg'" width="100%" :class="{'m-t-8': isMobile}" />
  </div>
</client-only>
</template>

<script>
import { mapGetters } from "vuex";
import { getTextColor } from '~/assets/js/data/uicommon'

export default {
  props: [ "isShowMobile" ],
  computed: {
    ...mapGetters({
      themeType: "getThemeType",
      isBlackMode: 'getIsBlackMode',
      isMobile: 'getIsMobile',
      payOutSettings: "getPayOutSettings"
    })
  },
  methods: {
    getTextColor,
    getRolling(percent, rolling) {
      if (percent * rolling < 100) return 100
      return percent * rolling
    },
		showRule() {
      this.$emit("event", 1)
    }
  }
}
</script>
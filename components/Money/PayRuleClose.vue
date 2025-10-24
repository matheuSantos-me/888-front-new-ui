<template>
  <div>
    <el-row class="text-center">
      <img :src="`/image/Home/${themeType}/logo3.png`" :width="getImageWidth()" :style="type == 'payin' ? 'margin-top: 197px;' : 'margin-top: 162px;'">
    </el-row>
    <el-row class="text-center m-t-20 word-keep" :class="layoutType == 'layout2' ? 'f-s-14 text-grey3' : 'f-s-16'">
      {{getRuleTitle()}}
    </el-row>
    <el-row class="text-center m-t-30" :style="type == 'payin' ? 'margin-bottom: 197px;' : 'margin-bottom: 162px;'">
      <span class="p-t-10 p-b-10 p-l-20 p-r-20 cursor" 
        :class="[
          layoutType != 'layout2' ? getBackColor(themeType, 1) : '', 
          layoutType != 'layout2' ? getTextColor(themeType, 2) + ' f-s-16' : getTextColor(themeType, 1) + ' f-s-14 text-underline'
        ]" style="border-radius: 5px;" @click="showRule">
        {{type == 'payin' ? '입금규정 확인하기' : '출금규정 확인하기'}}
      </span>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getBackColor, getTextColor } from '~/assets/js/data/uicommon.js'

export default {
  props: [ "type", "themeType" ],
  computed: {
    ...mapGetters({
      layoutType: "getLayoutType"
    }),
  },
  methods: {
    getBackColor,
    getTextColor,
    getImageWidth() {
      if (this.themeType == 'orange11' || this.themeType == 'blue15') return 200
      else if (this.themeType == 'orange12') return 159
      return 327
    },
    getRuleTitle() {
      if (this.type == 'payin') {
        if (this.themeType == 'orange11' || this.themeType == 'purple11' || this.themeType == 'red13' || this.themeType == 'blue12' || this.themeType == 'yellow19' || this.themeType == 'gold12' || this.themeType == 'red15') {
          return '신속한 입출금, 최소한의 제재'
        } else if (this.themeType == 'blue18') {
          return '새로운 목표를 향해 도전하는 시작이 되길 바랍니다'
        } else if (this.themeType == 'blue13' || this.themeType == 'yellow11') {
          return '신속하고 빠르게, 정확하고 정직하게'
        } else {
          return '사용하기 편리하고, 신속한 입금&출금'
        }
      } else {
        if (this.themeType == 'orange11' || this.themeType == 'purple11' || this.themeType == 'red13' || this.themeType == 'blue12' || this.themeType == 'yellow19' || this.themeType == 'gold12' || this.themeType == 'red15') {
          return '신속한 입출금, 최소한의 제재'
        } else if (this.themeType == 'blue18') {
          return '힘든 하루, 지친 하루 환전의 기쁨을'
        } else if (this.themeType == 'blue13' || this.themeType == 'yellow11') {
          return '신속하고 빠르게, 정확하고 정직하게'
        } else {
          return '사용하기 편리하고, 신속한 입금&출금'
        }
      }
    },
		showRule() {
      this.$emit("event")
    }
  }
}
</script>
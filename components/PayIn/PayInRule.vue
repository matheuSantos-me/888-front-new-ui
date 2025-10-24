<template>
<client-only>
  <div class="word-keep" :class="[isShowMobile ? 'f-s-12 p-10' : 'f-s-14', `text-contrast-${themeType}`]">
    <el-row class="f-w-700" :class="[isShowMobile ? 'f-s-14' : 'f-s-16', getTextColor(themeType, 1)]">
      {{themeType != 'yellow15' ? '입금신청시 안내사항' : ''}} 
      <img v-if="themeType != 'yellow15'" :src="`/image/Money/${themeType}/Attention.png`" class="m-r-5">
      <span v-if="isShowMobile" class="p-5 p-l-10 p-r-10 float-right" style="background-color: rgba(0, 0, 0, 0.3); border-radius: 5px;" @click="showRule">X</span>
    </el-row>
    <el-row>
      <el-row v-if="themeType != 'yellow15'" class="m-t-20" :style="layoutType == 'layout2' ? 'padding-bottom: 24px;' : 'padding-bottom: 59px;'">
        <p v-html="payInSettings.rule"></p>
      </el-row>
      <img v-else :src="isMobile ? '/image/money/yellow15/depositm.jpg' : '/image/money/yellow15/deposit.jpg'" width="100%" :class="{'m-t-8': isMobile}" />
    </el-row>
  </div>
</client-only>
</template>
<script>
import { mapGetters } from "vuex";
import { currencyFormat } from '~/assets/js/utils'
import { getTextColor } from '~/assets/js/data/uicommon'

export default {
  props: [ "isShowMobile" ],
  computed: {
    ...mapGetters({
      themeType: "getThemeType",
      payInSettings: "getPayInSettings",
      isMobile: 'getIsMobile',
      layoutType: "getLayoutType"
    }),
  },
  filters: {
    currencyFormat
  },
  methods: {
    getTextColor,
		showRule() {
      this.$emit("event", 1)
    }
  }
}
</script>
<template>
<client-only>
  <div :class="[isShowMobile ? 'f-s-12 p-10' : 'f-s-14', `text-contrast-${themeType}`]">
    <el-row v-if="themeType != 'yellow15'">
      <el-row class="f-w-700" :class="[isShowMobile ? 'f-s-14' : 'f-s-16', getTextColor(themeType, 1)]">
        머니이동 설명
        <span v-if="isShowMobile" class="p-5 p-l-10 p-r-10 float-right" style="background-color: rgba(0, 0, 0, 0.3); border-radius: 5px;" @click="showRule">X</span>
      </el-row>
      <el-row class="m-t-20">
        <el-row>
          <img :src="`/image/Money/${themeType}/Point.png`" class="m-r-5" style="margin-top: -4px">스포츠캐쉬
        </el-row>
        <el-row class="p-l-10">
          스포츠, 미니게임, 가상스포츠를 이용하는 캐쉬입니다.
        </el-row>
      </el-row>
      <el-row class="m-t-20">
        <el-row>
          <img :src="`/image/Money/${themeType}/Point.png`" class="m-r-5" style="margin-top: -4px">카지노캐쉬
        </el-row>
        <el-row class="p-l-10">
          카지노의 라이브카지노와 슬롯게임을 이용하는 캐쉬입니다.
        </el-row>
      </el-row>
      <el-row v-if="themeType != 'orange14'" class="m-t-20">
        <el-row>
          <img :src="`/image/Money/${themeType}/Point.png`" class="m-r-5" style="margin-top: -4px">반복적으로 보너스율이 높은 스포츠보너스를 받은후<br>
        </el-row>
        <el-row class="p-l-10">
          카지노게임을 이용할시에는 회원자격이 제재될수 있습니다.
        </el-row>
      </el-row>
      <el-row v-else class="m-t-20">
        <el-row>
          <img :src="`/image/Money/${themeType}/Point.png`" class="m-r-5" style="margin-top: -4px">머니이동은 1분에 1회, 최소 1만원 단위로 이용이 가능합니다.
        </el-row>
      </el-row>
      <el-row class="m-t-20">
        <img :src="`/image/Money/${themeType}/Point.png`" class="m-r-5" style="margin-top: -4px">관리자 승인없이 자유롭게 머니이동이 가능합니다.
      </el-row>
      <el-row v-if="themeType == 'orange14'" class="m-t-20">
        ※ 보너스 선택을 하지 않을 시 머니이동을 통해 자유롭게 직접 이동이 가능합니다.
      </el-row>
      <el-row v-if="themeType == 'orange14'" class="m-t-20">
        ※ 스포츠캐쉬와 카지노캐쉬는 롤링이 완료되어야 머니이동이 가능합니다.
      </el-row>
      <el-row v-if="!isShowMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="text-center" :style="layoutType == 'layout2' ? 'margin: 48px 0;' : 'margin: 58px 0;'">
        <img v-if="layoutType != 'layout2'" :src="`/image/Home/${themeType}/logo3.png`" :width="themeType == 'orange11' ? 200 : 363">
        <img v-else :src="`/image/Home/${themeType}/logo3.png`">
      </el-row>
    </el-row>
    <el-row v-else>
      <span v-if="isShowMobile" class="p-5 p-l-10 p-r-10 float-right" style="background-color: rgba(0, 0, 0, 0.3); border-radius: 5px;" @click="showRule">X</span>
      <img :src="isMobile ? '/image/money/yellow15/moneymovem.png' : '/image/money/yellow15/moneymove.png'" width="100%" :class="{'m-t-8': isMobile}" />
    </el-row>
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
      layoutType: 'getLayoutType',
      isMobile: 'getIsMobile',
      themeType: "getThemeType"
    }),
  },
  methods: {
    getTextColor,
		showRule() {
      this.$emit("event", 1)
    }
  }
}
</script>
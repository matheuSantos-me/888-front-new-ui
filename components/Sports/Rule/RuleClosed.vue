<template>  
<client-only>
  <el-row class="display-inlineblock width-full p-t-15 p-l-13 p-r-13 p-b-25 text-white f-s-11" :class="`rule-bg-${themeType}`" style="border-radius: 3px" :style="layoutType == 'layout1' ? 'border: 2px solid #25282b;' : ''">
    <el-row class="text-center">
      <img :src="`/image/Home/${themeType}/logo3.png`" :width="getImageWidth()" style="margin-top: 200px;">
    </el-row>
    <el-row v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout6'" class="text-center m-t-20" 
      :class="[layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'f-s-14 text-grey3' : 'f-s-20']">
      {{sportsType === "prematch" ? "최소한의 제재, 신속한 입출금" : "실시간과 스페셜을 아우르는 최고의 인플레이"}}
    </el-row>
    <el-row v-if="layoutType == 'layout6'" class="text-center m-t-20 word-keep f-s-16">
      {{sportsType === "prematch" && themeType == 'blue18' ? "세상 모든 리그와 경기를 제공하는 최고의 마추자" : sportsType === "prematch" && themeType == 'yellow15' ? "특별한 혜택을 누려보세요 !" : "가장 진화된 실시간 스포츠 수많은 종목을 실시간으로 즐겨보세요"}}
    </el-row>
    <el-row class="text-center m-t-30" style="margin-bottom: 200px;">
      <span class="p-t-10 p-b-10 p-l-20 p-r-20 cursor" 
        :class="[
          layoutType == 'layout1' ? getBackColor(themeType, 1) : '', 
          layoutType == 'layout1' ? getTextColor(themeType, 2) + ' f-s-16' : getTextColor(themeType, 1) + ' f-s-14 text-underline'
        ]" style="border-radius: 5px;" @click="showRule">
        {{sportsType === "prematch" ? "프리매치 규정확인" : "실시간 배팅규정 확인"}}
      </span>
    </el-row>
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import { getBackColor, getTextColor } from "@/assets/js/data/uicommon"

export default {
	name: "RuleClosed",
  props: ["sportsType"],
  computed: {
    ...mapGetters({
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
    })
  },
	methods: {
    getBackColor,
    getTextColor,
		showRule() {
      this.$emit("event", 1)
    },
    getImageWidth() {
      if (this.themeType == 'orange11' || this.themeType == 'blue15' || this.themeType == 'blue17' || this.themeType == 'yellow15' || this.themeType == 'gold11') return 200
      else if (this.themeType == 'orange12') return 159
      else if (this.themeType == 'yellow21' || this.themeType == 'yellow16') return 312
      return 327
    }
  }
}
</script>
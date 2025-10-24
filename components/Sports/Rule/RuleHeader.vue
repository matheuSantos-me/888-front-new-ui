<template>  
<client-only>
  <el-row class="col-md-12 width-full f-s-14 text-left sports-right-panel-title p-t-10 p-b-10" :class="[isShowMobile ? 'm-0' : 'm-b-6 m-t-8', themeType == 'white' ? 'bg-grey904 shadow text-black' : 'bg-black17 text-white']" id="RIGHT_TITLE">
    <div class="float-left">
      <img class="cursor" :src="`/image/Home/${themeType}/logo1.png`" alt="LOGO" :width="getWidth()" :style="getMarginTop()">
    </div>

    <div v-if="themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'orange13' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'red15' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'blue14' || themeType == 'blue16'" class="float-left m-l-10" :class="isMobile ? 'f-s-11 m-t-8' : 'f-s-14 m-t-18'">
      {{ sportsType === "prematch" ? "최소한의 제재를 지향하는 " + solutionTitle + " 배팅규정" : solutionTitle + " SPORT 실시간 배팅규정 안내"}}
    </div>

    <div v-if="layoutType == 'layout6'" class="float-left m-l-10" :class="isMobile ? 'f-s-11 m-t-8' : 'f-s-14 m-t-18'">
      {{ sportsType === "prematch" ? "최고의 서비스를 제공하는 스포츠 배팅규정" : "최고의 서비스를 제공하는 실시간 스포츠 배팅규정"}}
    </div>

    <div v-if="themeType == 'blue13' || themeType == 'yellow11' || themeType == 'yellow14' || themeType == 'yellow13' || themeType == 'white'" class="float-left m-l-10 f-w-900" :class="isMobile ? 'f-s-11 m-t-8' : 'f-s-16 m-t-18'">
      {{ sportsType === "prematch" ? solutionTitle + " 스포츠 배팅 규정" : solutionTitle + " 실시간 배팅 규정"}}
    </div>

    <div v-if="themeType == 'gold11'" class="float-left m-l-10 f-w-900" :class="isMobile ? 'f-s-11 m-t-8' : 'f-s-16 m-t-18'">
      {{ sportsType === "prematch" ? "스포츠 " + solutionTitle + " 배팅규정 안내" : "실시간 스포츠 " + solutionTitle + " 배팅규정 안내"}}
    </div>
    
    <div v-if="isShowMobile" class="float-right p-10 p-t-5 p-b-5 cursor" style="background-color: rgba(0, 0, 0, 0.3); right: 20px; top: 20px; border-radius: 5px;" @click="onClickShowPanel()">
      X
    </div>
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "RuleHeader",
  props: ["sportsType", "isShowMobile"],
  computed: {
    ...mapGetters({ 
      isMobile: 'getIsMobile',
      showSportsRule: "getShowSportsRule",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      solutionTitle: 'getSolutionTitle'
    })
  },
  methods: {
    onClickShowPanel() {
      this.$store.commit("SET_SHOWSPORTSRULE", !this.showSportsRule)
		},
    getWidth() {
      if (this.isMobile) {
        if (this.themeType == 'yellow17' || this.themeType == 'blue19' || this.themeType == 'blue11') return 150
        return 59
      }
      if (this.themeType == "orange11" || this.themeType == "blue17") return 70
      if (this.themeType == "purple12") return 150
      if (this.themeType == "purple11" || this.themeType == "red13" || this.themeType == "gold12" || this.themeType == 'orange14') return 80
      if (this.themeType == "blue16" || this.themeType == 'orange13') return 180
      if (this.themeType == "blue14" || this.themeType == "red15") return 130
      if (this.themeType == "yellow13" || this.themeType == "gold11" || this.themeType == "white" || this.themeType == "red14" || this.themeType == "yellow12" || this.themeType == "red12" || this.themeType == 'blue15') return 110
      if (this.themeType == "yellow19" || this.themeType == "blue12") return 140
      if (this.themeType == "red11") return 90
    },
    getMarginTop() {
      if (this.themeType == "blue14" || this.themeType == "blue16" || this.themeType == "gold12" || this.themeType == "blue17" || this.themeType == 'orange14' || 
          this.themeType == "gold11" || this.themeType == "white" ||
          this.themeType == "red14" || this.themeType == "yellow12" || this.themeType == "red12" || this.themeType == 'blue15' || this.themeType == "red11")
        return "margin-top: 5px;"
    }
  }
}
</script>
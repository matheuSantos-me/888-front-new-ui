<template>  
<client-only>
  <div class="p-2 width-full">
    <div v-if="themeType != 'purple11' && themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'purple12' && themeType != 'red15' && themeType != 'gold11' && themeType != 'blue14' && themeType != 'blue16' && themeType != 'yellow13' && themeType != 'gold12' && themeType != 'blue17' && themeType != 'orange14' && themeType != 'red12' && themeType != 'blue15' && themeType != 'red11'" class="alert alert-inverse text-left m-0 p-10 f-s-16 position-relative height-50">
      <div class="p-0 m-0" :class="!isBlackMode ? 'text-black f-s-18' : 'text-white f-s-16'" style="position:absolute; left:40px; top:13px;">
        <i v-if="themeType != 'white'" class="sport-icon sicon1 width-23 m-r-5 float-left"></i>
        <img v-else :src="'/image/Sports/icon.png'" width="28" class="m-r-5 float-left">
        <div class="float-left m-t-1"><strong>{{getHeaderName()}}</strong></div>
      </div>
    </div>
    <div v-else class="alert alert-info fade in  text-left f-s-16" :class="[!isMobile ? 'm-5' : 'm-0 m-b-5', `bg-page-header-${themeType}`, getTextColor(themeType, 2)]">
      <img :src="`/image/Sports/${themeType}/icon.png`" width="23" class="m-r-5 float-left"><strong>{{sportsType === "prematch" ? "스포츠 Sports" : "실시간 스포츠 - Live Sports"}}</strong>
    </div>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import { getBackColor, getTextColor } from "@/assets/js/data/uicommon"

export default {
  name: "SportsHeader",
  props: ["sportsType"],
  computed: {
    ...mapGetters({
      isMobile: 'getIsMobile',
      layoutType: "getLayoutType",
      themeType: "getThemeType",
      isBlackMode: 'getIsBlackMode'
    })
  },
  methods: {
    getBackColor,
    getTextColor,
    getHeaderName() {
      if (this.sportsType == 'prematch') {
        return "스포츠 Sports"
      } else {
        return "실시간 스포츠 - Live Sports"
      }
    },
    onClickSportsCategory(categoryId) {
      let data = {
				selectedSportsCategoryId: categoryId,
				selectedLocationId: -1,
				selectedLeagueId: -1,
				searchKey: '',
				isSearchToday: 0
			}
			this.$store.commit("sports/SET_QUERYLIST", data)
    },
  }
}
</script>
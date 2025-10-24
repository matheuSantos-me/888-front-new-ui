<template>  
<client-only>
  <el-row :class="isMobile || layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-0' : 'p-l-16 p-r-16 m-t-10'">
    <el-row class="display-flex"  :class="`sport-rule-cross-bg-${themeType}`">
      <div class="display-center" :class="[getTextColor(themeType, 1), layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'f-s-24 p-l-8' : 'f-s-35 p-l-5 p-r-5']">
        ※ 
      </div>
      <div v-if="sportsType === 'prematch'" class="word-keep core-content">
        동일경기 크로스 배팅은 농구와 야구 추가배팅옵션에서 제공합니다.
        <span><br>스포츠 배팅규정은 <span class="cursor" :class="`sport-rule-confirm-${themeType}`" style="text-decoration: underline;" @click="showRule">“프리매치 규정확인”</span> 을 열람하시면 확인 가능합니다.</span>
        <span v-if="themeType == 'blue18'"><br>경기검색시 확인되지 않는경우 실시간 스포츠에서 라이브로 발매되는 피드를 확인해주시기 바랍니다.</span>
      </div>
      <div v-else class="word-keep core-content">
        실시간에서 스페셜을 모두 아우르는 최고의 배팅마켓을 제공합니다.<br>
        실시간 배팅규정은 <span class="cursor" :class="`sport-rule-confirm-${themeType}`" style="text-decoration: underline;" @click="showRule">“실시간 규정확인”</span> 을 열람하시면 확인 가능합니다.
      </div>
    </el-row>
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import { getTextColor } from "@/assets/js/data/uicommon"

export default {
  name: "CrossDescription",
  props: ["sportsType", "isShowMobile"],
  computed: {
    ...mapGetters({ 
      showSportsRule: "getShowSportsRule",
      isMobile: 'getIsMobile',
      layoutType: 'getLayoutType',
			themeType: 'getThemeType'
    })
  },
  methods: {
    getTextColor,
		showRule() {
      if (this.isShowMobile) {
        this.$store.commit("SET_SHOWSPORTSRULE", !this.showSportsRule)
      }
      this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1)
      this.$emit("event", 1)
    }
  }
}
</script>
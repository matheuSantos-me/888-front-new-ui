<template>
  <el-row>
    <el-row class="col-md-12 p-0 f-s-14" :style="layoutType == 'layout2' ? 'background: #101012; border-bottom: 1px solid #292929;' : ''">
      <div class="display-flex" :style="layoutType != 'layout2' ? 'justify-content: space-between;' : ''" :class="{'display-center': layoutType == 'layout2'}">
        <el-col class="bet-history-tab" :class="[{'on': tabType == 'sports'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('sports')" :style="layoutType != 'layout2' ? 'border-left: 0' : 'border-left:0;border-right:0;'">
            스포츠
          </div>
        </el-col>
        <el-col v-if="themeType == 'red15'" class="bet-history-tab" :class="[{'on': tabType == 'casino'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('casino')" :style="layoutType != 'layout2' ? 'border-right: 0' : 'border-left:0;border-right:0;'"> 
            카지노
          </div>
        </el-col>
        <el-col class="bet-history-tab" :class="[{'on': tabType == 'mini'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('mini')" :style="layoutType == 'layout2' ? 'border-left:0;border-right:0;' : ''">
            미니게임
          </div>
        </el-col>
        <el-col class="bet-history-tab" :class="[{'on': tabType == 'virtual-sports'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('virtual-sports')" :style="layoutType == 'layout2' ? 'border-left:0;border-right:0;' : ''">
            가상스포츠
          </div>
        </el-col>
        <el-col v-if="themeType == 'gold11' || themeType == 'red15' || themeType == 'red12' || themeType == 'blue15'" 
          class="bet-history-tab" :class="[{'on': tabType == 'lotus'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('lotus')">
            로투스
          </div>
        </el-col>
        <el-col v-if="gameSettings.Mini.betgames" class="bet-history-tab" :class="[{'on': tabType == 'betgames'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('betgames')">
            {{isMobile ? '벳게임' : '벳게임 카지노'}}
          </div>
        </el-col>
        <el-col v-if="themeType != 'red15'" class="bet-history-tab" :class="[{'on': tabType == 'casino'}, `bet-history-tab-${themeType}`]">
          <div :class="`bet-history-tab-in-${themeType}`" @click="onClickGameCategoryTab('casino')" :style="layoutType != 'layout2' ? 'border-right: 0' : 'border-left:0;border-right:0;'"> 
            카지노
          </div>
        </el-col>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  props: ["gameCategory"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      gameSettings: "getGameSettings",
      bettingHistoryTab: "getBettingHistoryTab"
    })
  },
  watch: {
    bettingHistoryTab() {
      this.tabType = this.bettingHistoryTab
    },
    gameCategory() {
      this.tabType = this.gameCategory
    }
  },
  data() {
    return {
      tabType: 'sports'
    }
  },
  mounted() {
    if (this.gameCategory) {
      this.tabType = this.gameCategory
    }
  },
  methods: {
    // 탭선택
    onClickGameCategoryTab(val) {
      if (this.layoutType == 'layout2') {
        this.$store.commit('SET_BETTINGHISTORYTAB', val)
        return
      }
      switch (val) {
        case 'sports':
          this.$router.push('/BettingHistory/Sports')
          break;
        case 'mini':
          this.$router.push('/BettingHistory/MiniGame')
          break;
        case 'virtual-sports':
          this.$router.push('/BettingHistory/VirtualSports')
          break;
        case 'lotus':
          this.$router.push('/BettingHistory/Lotus')
          break;
        case 'betgames':
          this.$router.push('/BettingHistory/BetGames')
          break;
        case 'casino':
          this.$router.push('/BettingHistory/Casino')
          break;
      }
    }
  }
};
</script>
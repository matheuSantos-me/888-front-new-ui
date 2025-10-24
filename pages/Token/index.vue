<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-body height-100-pro p-2" :class="[getPageBackColor(themeType), themeType == 'white' ? 'text-black' : 'text-white']" style="position:relative;">
      <!-- <Check /> -->
      <el-row>
        <el-row v-if="currentUser && currentUser.tokenId">
          <el-row class="p-0">
            <img :src="isMobile ? `/image/Token/${themeType}/banner-mob.jpg` : `/image/Token/${themeType}/banner.jpg`" style="width: 100%">
          </el-row>
          <el-row class="m-t-10 m-b-10">
            <el-col :span="isMobile ? 24 : 8" :class="isMobile ? 'm-t-10' : 'p-r-10'">
              <el-row>
                <img :src="isMobile ? '/image/Token/roullete-mob.jpg' : '/image/Token/roullete.jpg'" width="100%">
                <div :class="`token-bet-button-${themeType}`" @click="onSelectGame(0)">
                  BET NOW
                </div>
              </el-row>
            </el-col>
            <el-col :span="isMobile ? 24 : 8" :class="isMobile ? 'm-t-10' : 'p-r-10'">
              <el-row>
                <img :src="isMobile ? '/image/Token/highlow-mob.jpg' : '/image/Token/highlow.jpg'" width="100%">
                <div :class="`token-bet-button-${themeType}`" @click="onSelectGame(1)">
                  BET NOW
                </div>
              </el-row>
            </el-col>
            <el-col :span="isMobile ? 24 : 8" :class="isMobile ? 'm-t-10' : 'p-l-10'">
              <el-row>
                <img :src="isMobile ? '/image/Token/baccarat-mob.jpg' : '/image/Token/baccarat.jpg'" width="100%">
                <div :class="`token-bet-button-${themeType}`" @click="onSelectGame(2)">
                  BET NOW
                </div>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
        <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
      </el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPageBackColor } from '~/assets/js/data/uicommon'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check.vue'


export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,       // 로그인유도 콤포넌트
    Check
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType"
    })
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  methods: {
    getPageBackColor,
    // 게임선택
    onSelectGame(gameType) {
      let tokenInfo = {
        type: gameType
      }
      this.$store.commit("SET_TOKENDIALOGINFO", tokenInfo)
    }
  }
}
</script>
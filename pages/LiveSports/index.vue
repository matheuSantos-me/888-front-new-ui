<template>
<el-row class="width-full">
  <div class="row panel panel-inverse minbox m-l-0 m-r-0" :class="[`panel-page-${themeType}`, `inplay-page-bg-${themeType}`]">
    <SportsHeader v-if="!isMobile && layoutType == 'layout1'" :sportsType="gameType" />
    <div class="row panel-body position-relative m-0 p-0"
      :class="[{'m-t-10': !isMobile && themeType != 'white'}, `inplay-pagein-bg-${themeType}`]"
    >
      <SportsCategory v-if="layoutType == 'layout2' || layoutType == 'layout6' || themeType == 'gold13'" :sportsType="gameType" />
      <!-- 왼쪽 패널 -->
      <div id="leftbox_out" class="p-0 m-0" :class="isShowMobile ? 'col-md-12' : 'col-md-6'">
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
          <div class="m-0 width-full"
            :class="{
              'p-t-5': isMobile && layoutType == 'layout1',
              'p-t-16': !isMobile && layoutType == 'layout1',
              'p-t-24 p-r-12': !isShowMobile && (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'),
              'p-t-12': isShowMobile && !isMobile && (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'),
              'p-8 p-t-0': isMobile && (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'),
            }"
            id="leftbox_sports"
            style="overflow: hidden; width: auto"
            :style="layoutType != 'layout2' && themeType != 'blue17' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' ? 'border-top: 1px solid #282828; border-right: 1px solid #282828;' : ''"
          >
            <el-scrollbar id="sportsLeftScrollBarId" ref="sportsLeftScrollBar">
              <!-- 스포츠 종목 -->
              <SportsCategory v-if="layoutType != 'layout2' && layoutType != 'layout6' && themeType != 'gold13'" :sportsType="gameType" />
              <!-- 스포츠 종목 끝 -->
              <!-- 동일경기 -->
              <CrossDescription :sportsType="gameType" :isShowMobile="isShowMobile" @event="setStatusRightPanel" />
              <!-- 동일경기 끝 -->
              <!-- 리그 -->
              <GameList :sportsType="gameType" :isShowMobile="isShowMobile" :isBetAvailable="isBetAvailable" progressStatus="1" @event="setStatusRightPanel" />
              <!-- 리그 끝 -->
              <div class="col-md-12 text-center p-t-14 p-b-14"></div>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <!-- 왼쪽 패널 끝 -->
      <!-- 오른쪽 패널 -->
      <div v-if="!isShowMobile" class="p-0 m-0" :class="isShowMobile ? 'col-md-12' : 'col-md-6'"
        :style="layoutType != 'layout2' && themeType != 'blue17' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' ? 'border-top: 1px solid #282828;' : ''">
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
          <el-scrollbar id="sportsRightScrollBarId" ref="sportsRightScrollBar" class="m-b-14">
            <!-- 세부배당 -->
            <div v-show="statusRightPanel === 2" class="col-md-12 width-full p-b-0 m-0" :class="layoutType == 'layout1' ? 'p-16' : 'p-0 p-t-24 p-l-12'" style="overflow: hidden; width: auto">
              <OddsPanel :sportsType="gameType" :isBetAvailable="isBetAvailable" :isShowMobile="isShowMobile" />
            </div>
            <!-- 세부배당 끝 -->
            <!-- 규정 -->
            <div v-show="statusRightPanel !== 2" class="col-md-12 width-full p-b-0 m-0" :class="layoutType == 'layout1' ? 'p-16' : 'p-0 p-t-24 p-l-12'" style="overflow: hidden; width: auto">
              <RuleHeader v-if="layoutType == 'layout1'" :sportsType="gameType" />
              <RuleOpened :sportsType="gameType" v-if="statusRightPanel === 1" />
              <RuleClosed :sportsType="gameType" v-if="statusRightPanel === 0" @event="setStatusRightPanel" />
            </div>
            <!-- 규정 끝 -->
          </el-scrollbar>
        </div>
      </div>
      <!-- 오른쪽 패널 끝 -->
    </div>
    <!-- 모바일 스포츠규정 -->
    <SportsRule v-show="isShowMobile" :isShowMobile="isShowMobile" :sportsType="gameType" />
    <!-- 모바일 스포츠규정 끝 -->
  </div>
  <Preview v-show="!currentUser" />
  <Check v-show="!isBetAvailable" :themeType="themeType" />
</el-row>
</template>

<script>
import { mapGetters } from "vuex";
import Preview from "~/components/Auth/Preview.vue";
import Check from "~/components/Auth/Check";
import RuleClosed from "~/components/Sports/Rule/RuleClosed";
import RuleOpened from "~/components/Sports/Rule/RuleOpened";
import RuleHeader from "~/components/Sports/Rule/RuleHeader";
import CrossDescription from "~/components/Sports/LeftPanel/CrossDescription";
import GameList from "~/components/Sports/LeftPanel/GameList";
import OddsPanel from "~/components/Sports/RightPanel/OddsPanel";
import SportsHeader from "~/components/Sports/SportsHeader";
import SportsSort from "~/components/Sports/SportsSort";
import SportsCategory from "~/components/Sports/SportsCategory";
import SportsRule from "~/components/Dialog/SportsRule";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,
    RuleClosed,
    RuleOpened,
    RuleHeader,
    CrossDescription,
    GameList,
    SportsHeader,
    SportsSort,
    SportsCategory,
    OddsPanel,
    Check,
    SportsRule
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      selectedFixtureId: "sports/getSelectedFixtureId",
      screenWidth: "getScreenWidth",
      betSlipList: "betslip/getBetSlipList",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
    }),
  },
  watch: {
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.Live.gameStatus_manual);
    },
    isBetAvailable(val) {
      this.deleteBettingSlip();
    },
    screenWidth(width) {
      this.setContentMargin();
    },
    selectedFixtureId(val) {
      if (val === -1) {
        if (this.themeType == "blue18" || this.themeType == 'yellow15') {
          this.statusRightPanel = 1;
        } else {
          this.statusRightPanel = 0;
        }
      }
    },
  },
  data() {
    return {
      statusRightPanel: 0, // 0: 배팅규정닫힘 1: 배팅규정 2: 배당
      gameType: "inplay",
      isBetAvailable: true,
      isShowMobile: false,
    };
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'LiveSports')
    this.setContentMargin();
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0);
    // 좌우측 패널 슬라이더 사이즈 셋팅
    window.addEventListener("resize", this.myResizeFunc);
    this.myResizeFunc();

    // 게임설정 셋팅
    this.setGameSetting();
    if (this.themeType == "blue18" || this.themeType == 'yellow15') {
      this.statusRightPanel = 1;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.myResizeFunc);
  },
  updated() {
    this.$store.commit("initTimeLeft");
  },
  methods: {
    // 여백 설정
    setContentMargin() {
      if (this.screenWidth < 1600) {
        this.isShowMobile = true;
      } else {
        this.isShowMobile = false;
      }
    },
    // 게임설정
    setGameSetting() {
      // 게임셋팅정보 배팅슬립정보 설정
      let userLevel = this.currentUser ? this.currentUser.level : 2;
      let levelSetting = this.gameSettings.Live.levelSetting[this.gameSettings.Live.levelSetting.findIndex((setting) => setting.level == userLevel)];

      //레벨셋팅을 얻는다.
      this.$store.commit("betslip/SET_MIN_BET_MONEY", levelSetting.min3FBetMoney);
      this.$store.commit("betslip/SET_MAX_BET_MONEY", levelSetting.max3FBetMoney);
      this.$store.commit("betslip/SET_MAX_WIN_MONEY", levelSetting.max3FWinMoney);
      this.$store.commit("betslip/SET_MAX_BET_ODDS", levelSetting.maxOdds);

      this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.Live.gameStatus_manual);
      if (
        this.betSlipList &&
        this.betSlipList.length > 0 &&
        this.betSlipList[0].gameType !== "prematch" &&
        this.betSlipList[0].gameType !== "inplay"
      ) {
        this.$store.commit("betslip/SET_BETSLIPLIST", []);
      }
    },
    // 좌우측 패널 슬라이더 사이즈변경
    myResizeFunc() {
      if (!this.isShowMobile) {
        if (this.layoutType == "layout2" || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
          document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight - 133 + "px";
          document.getElementById("sportsRightScrollBarId").style.height = window.innerHeight - 117 + "px";
        } else {
          document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight - 191 + "px";
          document.getElementById("sportsRightScrollBarId").style.height = window.innerHeight - 168 + "px";
        }
      } else {
        document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight + "px";
      }
    },
    // 우측 패널 상태 설정 0: 규정닫힘, 1: 규정열림, 2: 배당
    setStatusRightPanel(val) {
      this.statusRightPanel = val;
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", []);
    },
    // 상단가기
    goToBack() {
      this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
    }
  }
};
</script>
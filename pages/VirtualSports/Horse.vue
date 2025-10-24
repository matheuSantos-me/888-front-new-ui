<template>
<el-row class="width-full">
  <div class="row panel panel-inverse minbox" :class="[`panel-page-${themeType}`, `virtual-page-bg-${themeType}`]">
    <!-- 헤더 -->
    <VirtualHeader gameType="2" />
    <!-- 헤더 끝 -->
    <!-- 배팅패널 -->
    <el-row v-if="isShowMobile && layoutType == 'layout2'" class="text-white f-s-14" :class="{'m-t-12': !isMobile}">
      <el-col :span="8">
        <div class="virtual-dtab" :class="{'on': historyType == 2}" @click="onClickHistoryTab(2)">회차선택</div>
      </el-col>
      <el-col :span="8">
        <div class="virtual-dtab" :class="{'on': historyType == 0}" @click="onClickHistoryTab(0)">지난결과</div>
      </el-col>
      <el-col :span="8">
        <div class="virtual-dtab" :class="{'on': historyType == 1}" @click="onClickHistoryTab(1)">배팅내역</div>
      </el-col>
    </el-row>
    <div class="row panel-body position-relative m-0 p-0" 
      :class="{'m-t-8 p-l-3 p-r-3': layoutType != 'layout2' || (layoutType == 'layout2' && !isShowMobile)}">
      <el-row :class="`virtual-pagein-bg-${themeType}`">
        <Check v-show="!isBetAvailable" :themeType="themeType" />
        <el-row :class="[isMobile && layoutType != 'layout2' ? `border-1-${themeType}` : '', {'p-6': layoutType != 'layout2' && !isMobile}]">
          <el-col v-if="layoutType != 'layout2'" class="virtual-league-panel">
            <div
              class="m-b-6"
              :class="[{'on': selectedLeagueName === 'britannia'}, `virtual-league-tab-${themeType}`]"
              @click="onSelectLeague('britannia')"
              style="height: 90px; padding-top: 25px;"
            >
              브리타니아 웨이
              <br />Britannia Way
            </div>
            <div
              class="m-b-6"
              :class="[{'on': selectedLeagueName === 'festival'}, `virtual-league-tab-${themeType}`]"
              @click="onSelectLeague('festival')"
              style="height: 90px; padding-top: 25px;"
            >
              페스티발 다운그
              <br />Festival Downs
            </div>
            <div
              class="m-b-6"
              :class="[{'on': selectedLeagueName === 'victoria'}, `virtual-league-tab-${themeType}`]"
              @click="onSelectLeague('victoria')"
              style="height: 90px; padding-top: 25px;"
            >
              빅토리아 파크
              <br />Victoria Park
            </div>
            <!-- <div
              :class="[{'on': selectedLeagueName === 'aintree'}, `virtual-league-tab-${themeType}`]"
              @click="onSelectLeague('aintree')"
              style="height: 90px; padding-top: 25px;"
            >
              아인트리 파크
              <br />Aintree Park
            </div> -->
          </el-col>
          <el-row v-if="layoutType == 'layout2' && isMobile" class="p-t-8 p-b-8">
            <OwlCarousel :autoWidth="true" :nav="false" :dots="false" :margin="8">
              <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'britannia'}" @click="onSelectLeague('britannia')">브리타니아</div>
              <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'festival'}" @click="onSelectLeague('festival')">페스티발</div>
              <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'victoria'}" @click="onSelectLeague('victoria')">빅토리아</div>
              <!-- <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'aintree'}" @click="onSelectLeague('aintree')">아인트리</div> -->
            </OwlCarousel>
          </el-row>
          <el-col class="text-center p-t-3" :class="layoutType == 'layout2' ? `virtual-video-panel-${themeType}` : 'virtual-video-panel'">
            <el-row>
              <el-row v-if="layoutType == 'layout2' && !isMobile" style="background: #16171A; border-radius: 6px 6px 0px 0px; padding: 0 50px;">
                <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'britannia', 'width-25pro': !isMobile}" @click="onSelectLeague('britannia')">브리타니아</div>
                <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'festival', 'width-25pro': !isMobile}" @click="onSelectLeague('festival')">페스티발</div>
                <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'victoria', 'width-25pro': !isMobile}" @click="onSelectLeague('victoria')">빅토리아</div>
                <!-- <div class="virtual-video-tab" :class="{'on': selectedLeagueName === 'aintree', 'width-25pro': !isMobile}" @click="onSelectLeague('aintree')">아인트리</div> -->
              </el-row>
              <iframe
                id="video-frame"
                class="virtual-video-frame"
                :src="videoUrl"
                width="648"
                height="365"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </el-row>
          </el-col>
          <el-col v-if="layoutType == 'layout2' && !isShowMobile" class="virtual-video-right p-l-8">
            <el-row>
              <el-scrollbar id="sportsLeftScrollBarId" ref="sportsLeftScrollBar" style="height: 412px;">
                <VirtualHistory :isShowMobile="isShowMobile" :gameHistory="gameHistory" :betLogs="betLogs" :historyType="historyType" :gameType="3" />
              </el-scrollbar>
              <el-row v-if="layoutType == 'layout2'" class="black-over" style="position: absolute; left: 0; bottom: 0; width: 100%; height: 140px; background: linear-gradient(180deg, rgba(20, 21, 23, 0) 30.71%, #141517 93.31%); border-radius: 0px 0px 6px 6px;"></el-row>
            </el-row>
          </el-col>
          <el-row v-if="isShowMobile && layoutType != 'layout2'" class="display-inlineblock" :class="`text-contrast-${themeType}`">
            <div class="float-left p-5 p-l-10 p-r-10 p-b-0 m-b-5 cursor">
              <div
                :class="selectedLeagueName === 'britannia' ? getTextColor(themeType, 1) + ' border-bottom-1-' +  themeType: ''"
                @click="onSelectLeague('britannia')"
              >브리타니아</div>
            </div>
            <div class="float-left p-5 p-l-10 p-r-10 p-b-0 m-b-5 cursor">
              <div
                :class="selectedLeagueName === 'festival' ? getTextColor(themeType, 1) + ' border-bottom-1-' +  themeType: ''"
                @click="onSelectLeague('festival')"
              >페스티발</div>
            </div>
            <div class="float-left p-5 p-l-10 p-r-10 p-b-0 m-b-5 cursor">
              <div
                :class="selectedLeagueName === 'victoria' ? getTextColor(themeType, 1) + ' border-bottom-1-' +  themeType: ''"
                @click="onSelectLeague('victoria')"
              >빅토리아</div>
            </div>
            <!-- <div class="float-left p-5 p-l-10 p-r-10 p-b-0 m-b-5 cursor">
              <div
                :class="selectedLeagueName === 'aintree' ? getTextColor(themeType, 1) + ' border-bottom-1-' +  themeType: ''"
                @click="onSelectLeague('aintree')"
              >아인트리</div>
            </div> -->
          </el-row>
        </el-row>
        <el-row v-if="isShowMobile && layoutType != 'layout2'" class="text-white f-s-14 m-t-10">
          <el-col :span="8">
            <div class="p-10 text-center bg-grey909" @click="onClickHistoryTab(2)">회차선택</div>
          </el-col>
          <el-col :span="8">
            <div class="p-10 text-center bg-green902" @click="onClickHistoryTab(0)">지난결과</div>
          </el-col>
          <el-col :span="8">
            <div class="text-black p-10 text-center bg-yellow902" @click="onClickHistoryTab(1)">배팅내역</div>
          </el-col>
        </el-row>
        <!-- 왼쪽 패널 -->
        <div
          id="leftbox_out"
          v-if="(isShowMobile && historyType === 2) || !isShowMobile"
          class="m-0 m-b-14"
          :class="isShowMobile || layoutType == 'layout2' ? 'col-md-12 p-0' : 'col-md-6 p-l-6 p-r-3'"
        >
          <VirtualBetPanel :currentGame="currentGame" :isShowMobile="isShowMobile" :isBetAvailable="isBetAvailable" :gameType="3" />
        </div>
        <!-- 왼쪽 패널 끝 -->
        <!-- 오른쪽 패널 -->
        <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && isShowMobile && historyType != 2)" class="p-0 m-0 m-b-14" :class="isShowMobile ? 'col-md-12' : 'col-md-6 p-l-3 p-r-6'">
          <div
            class="slimScrollDiv text-white"
            style="position: relative; overflow: hidden; width: auto; height: 100%;"
          >
            <VirtualHistory :isShowMobile="isShowMobile" :gameHistory="gameHistory" :betLogs="betLogs" :historyType="historyType" :gameType="3" />
          </div>
        </div>
        <!-- 오른쪽 패널 끝 -->
      </el-row>
    </div>
    <!-- 배팅패널 끝 -->
  </div>
  <Preview v-show="currentUser === null" />
</el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import {
  parseTime,
  parseTimeKorean,
  filterOdds,
  convertToKorean,
} from "~/assets/js/utils";
import { statusClassObject, getTextColor } from "~/assets/js/data/uicommon.js";
import jQuery from "jquery";
import Preview from "~/components/Auth/Preview.vue";
import VirtualHeader from "~/components/Virtual/VirtualHeader";
import VirtualHistory from "~/components/Virtual/VirtualHistory"
import VirtualBetPanel from "~/components/Virtual/VirtualBetPanel.vue"
import Check from "~/components/Auth/Check";
import OwlCarousel from 'vue-owl-carousel'

const popupRouter = "VHorseRace";
const virtualGameInfoService = feathers.service("getVirtualGameInfo")
const mainService = feathers.service("main");
virtualGameInfoService.timeout = 60000

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,
    VirtualHeader,
    Check,
    VirtualHistory,
    VirtualBetPanel,
    OwlCarousel
  },
  filters: {
    parseTime: parseTime,
    parseTimeKorean: parseTimeKorean,
    convertToKorean: convertToKorean,
    statusClassObject: statusClassObject
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      selectedLeagueId: "sports/getSelectedLeagueId",
      selectedCategoryId: "sports/getSelectedCategoryId",
      betSlipList: "betslip/getBetSlipList",
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      layoutType: 'getLayoutType',
      themeType: "getThemeType",
    }),
  },
  data() {
    return {
      isBetAvailable: true, // 배팅가능상태
      gameType: "VHorseRace",
      historyType: 0, // 지난회차인가 배팅내역인가
      selectedLeagueName: "britannia",
      videoUrl: "http://b3.nust365.com/n/?vn=7&sw=648&sh=365",
      filterType: "All",
      calculateTime: null,
      isShowMobile: false,
      gameHistory: null,
      currentGame: null,
      betLogs: null
    };
  },
  watch: {
    gameSettings(val) {
      this.isBetAvailable = !Boolean(
        val.gameStatus_socket || val.VHorseRace.gameStatus_manual
      );
    },
    isBetAvailable(val) {
      this.deleteBettingSlip();
    },
    screenWidth(val) {
      this.initframe();
    },
  },
  created() {
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'VirtualSports-Horse')
    this.initframe();
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0);
    // 게임셋팅정보 배팅슬립정보 설정
    this.isBetAvailable = !Boolean(
      this.gameSettings.gameStatus_socket |
        this.gameSettings.VHorseRace.gameStatus_manual
    );
    this.deleteBettingSlip();

    let userLevel = this.currentUser ? this.currentUser.level : 2;
    let levelSetting = this.gameSettings.VHorseRace.levelSetting[
      this.gameSettings.VHorseRace.levelSetting.findIndex(
        (setting) => setting.level == userLevel
      )
    ];
    this.$store.commit("betslip/SET_MIN_BET_MONEY", levelSetting.minBetMoney);
    this.$store.commit("betslip/SET_MAX_BET_MONEY", levelSetting.maxBetMoney);
    this.$store.commit("betslip/SET_MAX_WIN_MONEY", levelSetting.maxWinMoney);
    this.$store.commit("betslip/SET_MAX_BET_ODDS", levelSetting.maxOdds);

    // 가상축구 경기추가 패치
    mainService.off("virtualGameHorseRacing"),
    mainService.on("virtualGameHorseRacing", (patchData) => {
      this.addGame(patchData);
    });

    // 가상축구 경기상태 패치
    mainService.off("virtualGameHorseRacingStatus"),
    mainService.on("virtualGameHorseRacingStatus", (patchData) => {
      this.updateGameStatus(patchData);
    });

    // 가상축구 경기내역 패치
    mainService.off("virtualGameHorseRacingHistory"),
    mainService.on("virtualGameHorseRacingHistory", (patchData) => {
      this.updateGameHistory(patchData);
    });

    // 가상축구 경기내역 패치
    mainService.off("virtualBetLogHorseRacing"),
    mainService.on("virtualBetLogHorseRacing", (patchData) => {
      this.updateBetLog(patchData);
    });

    // 배팅내역 창조시 배팅내역에 추가
    mainService.off("virtualBetLogCreated");
    mainService.on("virtualBetLogCreated", (betLog) => {
      if (betLog.gameType === 2 && betLog.userId === this.currentUser._id) {
        if (this.betLogs == null) this.betLogs = []
        if (this.betLogs.length > 8) {
          this.betLogs.splice(this.betLogs.length - 1, 1);
          this.betLogs.unshift(betLog);
        } else {
          this.betLogs.unshift(betLog);
        }
      }
    });
  },
  updated() {
    this.$store.commit("initTimeLeft");
  },
  destroyed() {
    clearInterval(this.calculateTime);
    mainService.off("virtualGameHorseRacing");
    mainService.off("virtualGameHorseRacingStatus");
    mainService.off("virtualGameHorseRacingHistory");
    mainService.off("virtualBetLogHorseRacing");
    mainService.off("virtualBetLogCreated");
  },
  methods: {
    filterOdds,
    getTextColor,
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await virtualGameInfoService.find({ query: {gameType: popupRouter }})
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.gameHistory = res.data.gameHistory        // 지난 15회차정보
        this.currentGame = res.data.currentGame        // 현재 회차정보
        this.betLogs = res.data.betLogs                // 배팅내역
      } catch (err) {
        console.log(err.message)      
      }
    },
    // 프레임사이즈 설정
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false;
        this.historyType = 0;
      } else {
        this.isShowMobile = true;
        this.historyType = 2;
      }
      let width = 648
      let height = 365

      if (this.screenWidth < 648) {
        jQuery("#video-frame").css("width", "100%");
        jQuery("#video-frame").css("height", (365 / 648) * this.screenWidth);
        width = this.screenWidth
        height = (365 / 648) * this.screenWidth
      } else {
        jQuery("#video-frame").css("width", "648px");
        jQuery("#video-frame").css("height", "365px");
      }

      if (this.selectedLeagueName === "britannia") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=7&sw=" + width + "&sh=" + height;
      } else if (this.selectedLeagueName === "festival") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=6&sw=" + width + "&sh=" + height;
      } else if (this.selectedLeagueName === "aintree") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=14&sw=" + width + "&sh=" + height;
      } else {
        this.videoUrl = "http://b3.nust365.com/n/?vn=8&sw=" + width + "&sh=" + height;
      }
    },
    // 남은시간 설정
    setReaminTime(game) {
      if (game.remainSecs < 10)
        game.remainTime = game.remainMins + ":0" + game.remainSecs;
      else game.remainTime = game.remainMins + ":" + game.remainSecs;
    },
    // 경기추가
    addGame(patchData) {
      if (patchData.gameType !== 2) return;
      let game = patchData.data;
      game.remainMins = parseInt(patchData.remindTime / 60);
      game.remainSecs = patchData.remindTime % 60;
      this.setReaminTime(game);
      this.currentGame.push(game);
    },
    // 경기상태패치
    updateGameStatus(patchData) {
      if (patchData.gameType !== 2 || this.currentGame == null) return;
      let index = this.currentGame.findIndex(
        (game) =>
          game.leagueName === patchData.leagueName &&
          game.eventId === patchData.eventId
      );
      if (index > -1) {
        if (patchData.status === 4) {
          this.currentGame.splice(index, 1);
        } else if (patchData.status === 3) {
          this.currentGame[index].status = 3;
          let betSlipIndex = this.betSlipList.findIndex(
            (slip) =>
              slip.gameType === patchData.gameType &&
              slip.betTypeName === patchData.leagueName &&
              slip.eventId === patchData.eventId
          );
          if (betSlipIndex > -1) {
            this.$store.commit("betslip/DELETE_BETSLIPONE", betSlipIndex);
          }
        }
      }
    },
    // 경기내역패치
    updateGameHistory(patchData) {
      if (patchData.gameType !== 2 || this.gameHistory == null) return;
      let index = this.gameHistory.findIndex(
        (game) =>
          game.leagueName === patchData.data.leagueName &&
          game.eventId === patchData.data.eventId
      );
      if (index < 0) {
        this.gameHistory.splice(this.gameHistory.length - 1, 1);
        this.gameHistory.unshift(patchData.data);
      }
    },
    // 배팅내역패치
    updateBetLog(patchData) {
      if (patchData.userId !== this.currentUser._id) return;
      let index = this.betLogs.findIndex(
        (betLog) => betLog._id === patchData._id
      );
      if (index > -1) {
        let betLog = this.betLogs[index];
        betLog.status = patchData.status;
        betLog.winMoney = patchData.winMoney;
        for (let betIndex = 0; betIndex < patchData.bets.length; betIndex++) {
          betLog.bets[betIndex].result = patchData.bets[betIndex].result;
          betLog.bets[betIndex].status = patchData.bets[betIndex].status;
        }
      }
    },
    // 경기시간계산
    calculateGameRemainTime() {
      if (!this.currentGame) return;
      for (let index = 0; index < this.currentGame.length; index++) {
        let game = this.currentGame[index];
        if (game.remainMins === 0 && game.remainSecs === 0) continue;
        game.remainSecs--;
        if (game.remainSecs < 0) {
          game.remainSecs = 59;
          game.remainMins--;
          if (game.remainMins < 0) game.remainMins = 0;
        }
        this.setReaminTime(game);
      }
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", []);
    },
    // 지난 회차, 배팅내역 탭선택
    onClickHistoryTab(val) {
      this.historyType = val;
    },
    // 리그선택
    onSelectLeague(leagueName) {
      this.selectedLeagueName = leagueName;
      let width = 648
      let height = 365
      if (this.screenWidth < 648) {
        width = this.screenWidth
        height = (365 / 648) * this.screenWidth
      }

      if (this.selectedLeagueName === "britannia") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=7&sw=" + width + "&sh=" + height;
      } else if (this.selectedLeagueName === "festival") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=6&sw=" + width + "&sh=" + height;
      } else if (this.selectedLeagueName === "aintree") {
        this.videoUrl = "http://b3.nust365.com/n/?vn=14&sw=" + width + "&sh=" + height;
      } else {
        this.videoUrl = "http://b3.nust365.com/n/?vn=8&sw=" + width + "&sh=" + height;
      }
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    }
  },
};
</script>
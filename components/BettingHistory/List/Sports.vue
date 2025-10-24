<template>
  <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
    <!-- 서브 탭 -->
    <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :class="{'m-t-14': layoutType != 'layout2', 'm-b-8': layoutType == 'layout2'}">
      <div :class="[gameType == 'prematch' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('prematch')">
        스포츠
      </div>
      <div :class="[gameType == 'inplay' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('inplay')">
        실시간
      </div>
    </el-row>
    <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" 
      :class="[`text-${themeType} border-bottom-1-${themeType}`, 
        (layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6' ? 'bg-black30' : themeType == 'yellow18' ? 'bg-black15' : themeType == 'yellow17' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'bg-blue11' ? 'bg-grey914' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black35'
      ]" style="height: 53px; padding: 16px; text-align: center; font-size: 14px; margin-top: 8px; border-radius: 6px 6px 0px 0px;">
      {{isMobile ? '' : '배팅내역'}}
      <div style="position: absolute; left: 16px; top: 10px;">
        <div :class="[gameType == 'prematch' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('prematch')">
          스포츠
        </div>
        <div :class="[gameType == 'inplay' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('inplay')">
          실시간
        </div>
      </div>
    </el-row>
    <!-- 배팅내역 -->
    <el-row v-for="(sportBetLog, sportBetLogIndex) in betLogs" :key="sportBetLogIndex" v-if="!sportBetLog.isDeleted"
      class="text-center text-white width-full display-inlineblock" :class="isMobile ? 'f-s-12' : 'f-s-13'">
      <SportBetLog :sportBetLog="sportBetLog" :gameType="gameType" :canUserProcess="true" />
    </el-row>
    <!-- 배팅내역 끝 -->
    <!-- 페이징 -->
    <el-row v-if="betLogs && betLogs.length > 0" class="display-inlineblock width-full">
      <el-col :span="24">
        <div class="block">
          <el-pagination :class="`bet-history-paging-${themeType}`" align="center" :page-sizes="[5, 10, 20, 30, 50]" :page-size="listQuery.limit"
            :current-page.sync="listQuery.page" :pager-count="isMobile ? 5 : 9" background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <!-- 페이징 끝 -->
    <!-- 배팅내역 존재하지 않을때 -->
    <el-row v-if="!betLogs || betLogs.length == 0" class="width-full display-center">
      <el-row class="p-t-24 p-b-48">
        <el-row v-if="layoutType == 'layout2'" class="text-center">
          <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
        </el-row>
        해당 게임에 배팅내역이 존재하지 않습니다.
      </el-row>
    </el-row>
    <!-- 배팅내역 존재하지 않을때 끝 -->
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { mapOrder } from "~/assets/js/utils";
import SportBetLog from "~/components/BettingHistory/SportBetLog";

const sportBetHistoryService = feathers.service("getSportBetlog");
const mainService = feathers.service("main");
sportBetHistoryService.timeout = 60000;

export default {
  components: {
    SportBetLog, // 스포츠 배팅내역 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      gameSettings: "getGameSettings"
    }),
  },
  data() {
    return {
      gameType: "prematch", // 게임타입
      betLogs: [], // 배팅내역
      total: 0, // 배팅내역 전체갯수
      listQuery: {
        page: 1,
        limit: 15,
      }
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
    this.getList();

    // 인플레이 라이브스코어 패치
    mainService.on("UpdateInplay", (data) => {
      if (data.type == 5) {
        this.UpdateLiveSocre(data);
      }
    });

    // 정산패치
    mainService.off("SportJongsanUpdate"),
      mainService.on("SportJongsanUpdate", (data) => {
        this.updateBetStatus(data);
      });

    // 스포츠 배팅내역 패치
    mainService.off("sportBetLogPatched"),
      mainService.on("sportBetLogPatched", (data) => {
        this.updateBetLogPatch(data);
      });
  },
  destroyed() {
    mainService.off("UpdateInplay");
    mainService.off("SportJongsanUpdate");
  },
  methods: {
    // 인플레이 라이브스코어 패치
    UpdateLiveSocre(patchData) {
      if (this.gameType == "prematch") return;

      for (
        let sportBetLogIndex = 0;
        sportBetLogIndex < this.betLogs.length;
        sportBetLogIndex++
      ) {
        let logIndex = this.betLogs[sportBetLogIndex].BetLogs.findIndex(
          (log) => log.FixtureId == patchData.data.FixtureId
        );
        if (logIndex > -1) {
          let game = this.betLogs[sportBetLogIndex].BetLogs[logIndex];
          game.Fixture.Scoreboard.Time =
            patchData.data.LiveScore.Scoreboard.Time;
          game.Fixture.Scoreboard.StatusDescription =
            patchData.data.LiveScore.Scoreboard.StatusDescription;
          if (game.Fixture.Scoreboard.Results.length == 0) {
            game.Fixture.Scoreboard.Results.push(
              patchData.data.LiveScore.Scoreboard.Results[0]
            );
            game.Fixture.Scoreboard.Results.push(
              patchData.data.LiveScore.Scoreboard.Results[1]
            );
          }
          game.Fixture.Scoreboard.Results[0].Value =
            patchData.data.LiveScore.Scoreboard.Results[0].Value;
          game.Fixture.Scoreboard.Results[1].Value =
            patchData.data.LiveScore.Scoreboard.Results[1].Value;
          if (!patchData.data.LiveScore || !patchData.data.LiveScore.Periods)
            continue;
          for (
            let index = 0;
            index < patchData.data.LiveScore.Periods.length;
            index++
          ) {
            if (index >= game.Fixture.Periods.length) {
              game.Fixture.Periods.push(
                patchData.data.LiveScore.Periods[index]
              );
            } else {
              game.Fixture.Periods[index].StatusDescription =
                patchData.data.LiveScore.Periods[index].StatusDescription;
              game.Fixture.Periods[index].Results[0].Value =
                patchData.data.LiveScore.Periods[index].Results[0].Value;
              game.Fixture.Periods[index].Results[1].Value =
                patchData.data.LiveScore.Periods[index].Results[1].Value;
            }
          }
        }
      }
    },
    // 정산패치
    updateBetStatus(data) {
      const betLogIndex = this.betLogs.findIndex((s) => s._id == data.BetLogId);
      if (data.JongsanType == 1) {
        const logIndex = this.betLogs[betLogIndex].BetLogs.findIndex(
          (l) => l._id == data.LogId
        );
        const betIndex = this.betLogs[betLogIndex].BetLogs[
          logIndex
        ].Bets.findIndex((b) => (b.Id = data.BetId));
        this.betLogs[betLogIndex].BetLogs[logIndex].Bets[betIndex].Settlement =
          data.Settlement;
      } else if (data.JongsanType == 2) {
        this.betLogs[betLogIndex].Status = data.Status;
        this.betLogs[betLogIndex].WinMoney = data.WinMoney;
      }
    },
    // 배팅내역 결과패치
    updateBetLogPatch(data) {
      let index = this.betLogs.findIndex((s) => s._id == data._id);
      if (index > -1) {
        this.betLogs[index].Status = data.Status;
        for (let betIndex = 0; betIndex < data.BetLogs.length; betIndex++) {
          this.betLogs[index].BetLogs[betIndex].BetStatus = data.BetLogs[betIndex].BetStatus;
        }
      }
    },
    // 배팅내역 얻기
    getList() {
      if (!this.currentUser) return;

      this.$nuxt.$loading.start();
      this.betLogs = [];
      var query = {
        sportstype: this.gameType,
        limit: this.listQuery.limit,
        skip: this.listQuery.limit * (this.listQuery.page - 1),
        userid: this.currentUser.userLoginId,
      };

      sportBetHistoryService
        .find({ query: query })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.betLogs = res.data.sportBetLogs.data;
            this.total = res.data.sportBetLogs.total;
          }
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.$nuxt.$loading.finish();
        });
    },
    // 배팅내역의 실시간경기 얻기
    combinePrematchesInplays() {
      for (var i = 0, len = this.betLogs.length; i < len; i++) {
        const sportBetLog = this.betLogs[i];

        const betLogOrder = sportBetLog.BetLogs.map(
          (betlog) => betlog.FixtureId
        );
        // 배팅내역과 경기를 조인하면 경기가 순서대로 정렬되지 않아 다시 정렬한다.
        sportBetLog.prematches = mapOrder(
          [...sportBetLog.prematches, ...sportBetLog.inplays],
          betLogOrder,
          "FixtureId"
        );
        delete sportBetLog.inplays;
      }

      this.totalBetMoney = this.betLogs
        .filter((s) => s.Status == 0)
        .reduce((a, b) => a + b.BetMoney, 0);
    },
    // 배팅내역의 프리매치경기 얻기
    sortPrematches() {
      for (var i = 0, len = this.betLogs.length; i < len; i++) {
        const sportBetLog = this.betLogs[i];
        const betLogOrder = sportBetLog.BetLogs.map(
          (betlog) => betlog.FixtureId
        );
        sportBetLog.prematches = mapOrder(
          sportBetLog.prematches,
          betLogOrder,
          "FixtureId"
        );
      }
    },
    // 현재 페이지 선택
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 게임타입 선택
    onClickGameType(val) {
      this.gameType = val;
      this.getList();
    },
    // 메시지 모달
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
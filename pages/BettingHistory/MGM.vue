<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <PageHeader :type="'bethistory'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile}, getPageBackColor(themeType)]" style="position:relative;">
      <el-row v-if="currentUser">
        <!-- 배팅내역 탭 -->
        <Tab gameCategory="lotus"/>
        <!-- 배팅내역 탭 끝 -->
        <!-- 배팅내역 서브 탭 -->
        <el-row class="col-md-12 p-0 m-t-14">
          <div :class="[gameType === 'MGMBaccarat1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat1')">바카라1</div>
          <div :class="[gameType === 'MGMBaccarat2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat2')">바카라2</div>
          <div :class="[gameType === 'MGMBaccarat3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat3')">바카라3</div>
          <div :class="[gameType === 'MGMEvenOdd' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMEvenOdd')">홀짝</div>
          <div :class="[gameType === 'MGMGoStop' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMGoStop')">고스톱</div>
        </el-row>
        <!-- 배팅내역 서브 탭 끝 -->
        <!-- 배팅내역 -->
        <div class="col-md-12 p-0">
          <div class="col-md-12 p-0 m-0 m-t-10 m-b-20 width-full height-full display-inlineblock">
            <el-table v-if="betLogs" :data='betLogs' fit size="mini" element-loading-text="잠시만...." :class="themeType == 'white' ? 'bet-result-table-white' : 'bet-result-table'" empty-text="해당 게임에 배팅내역이 존재하지 않습니다.">
              <el-table-column :label="$t('admin.gamemanagement.betid')" min-width="100" prop="_id" align="center">
                <template slot-scope="scope">
                  <MiniBetLog :betLog="scope.row" />
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-row v-if="betLogs && betLogs.length > 0" class="display-inlineblock width-full">
            <el-col :span="24">
              <div class="block">
                <el-pagination :class="`bet-history-paging-${themeType}`" align="center" :page-sizes="[5,10,20,30,50]"
                  :page-size="listQuery.limit" :current-page.sync="listQuery.page" :pager-count="isMobile ? 5 : 9"
                  background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange">
                </el-pagination>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="!betLogs || betLogs.length === 0" class="width-full display-center">
            <el-row class="p-t-24 p-b-48">
              <el-row v-if="layoutType == 'layout2'" class="text-center">
                <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24">
              </el-row>
              해당 게임에 배팅내역이 존재하지 않습니다.
            </el-row>
          </el-row>
        </div>
        <!-- 배팅내역 끝 -->
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import Preview from '~/components/Auth/Preview.vue'
import PageHeader from '~/components/Header/PageHeader'
import Tab from '~/components/BettingHistory/Tab'
import MiniBetLog from '~/components/BettingHistory/MiniBetLog'
import { getPageBackColor } from '~/assets/js/data/uicommon.js'

const miniGameBetLogsService = feathers.service('miniBetting');
const mainService = feathers.service('main')
miniGameBetLogsService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,       // 로그인유도 콤포넌트
    PageHeader,        // 배팅내역 헤더
    Tab,           // 배팅내역 탭
    MiniBetLog     // 미니게임 배팅내역 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: "getLayoutType"
    })
  },
  data() {
    return {
      gameType: 'MGMBaccarat1',  // 게임타입
      betLogs: [],            // 배팅내역
      total: 0,               // 배팅내역 전체갯수
      listQuery:{
        gameType: '',
        userLoginId: '',
        page: 1,
        limit: 8
      },
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.getList();
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'BettingHistory-MGM')
    // 파워볼 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogMGMBaccarat1")
    mainService.on("miniBetLogMGMBaccarat1", (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 파워사다리 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogMGMBaccarat2')
    mainService.on('miniBetLogMGMBaccarat2', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 파워사다리 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogMGMBaccarat3')
    mainService.on('miniBetLogMGMBaccarat3', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 파워사다리 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogMGMEvenOdd')
    mainService.on('miniBetLogMGMEvenOdd', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 파워사다리 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogMGMGoStop')
    mainService.on('miniBetLogMGMGoStop', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
  },
  destroyed() {
    mainService.off("miniBetLogMGMBaccarat1")
    mainService.off("miniBetLogMGMBaccarat2")
    mainService.off("miniBetLogMGMBaccarat3")
    mainService.off('miniBetLogMGMEvenOdd')
    mainService.off("miniBetLogMGMGoStop")
  },
  methods: {
    getPageBackColor,
    // 배팅내역 리스트 얻기
    getList() {
      if (!this.currentUser) return 
      this.$nuxt.$loading.start()
      this.betLogs = []

      var query = {
        limit: this.listQuery.limit || 8,
        page: this.listQuery.page
      }
      if (this.gameType !== '') query.gameType = this.gameType

      miniGameBetLogsService.find({query: query})
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.betLogs = res.data.data
            this.total = res.data.total
          }
          this.$nuxt.$loading.finish();
        })
        .catch((err) => { 
          console.log(err.message);
          this.$nuxt.$loading.finish();
        })
    },
    // 현재 페이지 선택
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    // 게임타입선택
    onClickGameType(val) {
      this.gameType = val
      this.getList()
    }
  }
}
</script>
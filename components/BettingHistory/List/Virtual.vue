<template>
  <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
    <!-- 서브 탭 -->
    <el-row v-if="layoutType == 'layout1'" class="col-md-12 p-0" :class="{'m-t-14': layoutType != 'layout2'}">
      <div :class="[gameType == 1 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(1)">가상축구</div>
      <div :class="[gameType == 4 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(4)">가상농구</div>
      <div :class="[gameType == 5 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(5)">가상야구</div>
      <div :class="[gameType == 3 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(3)">개경주</div>
      <div :class="[gameType == 2 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(2)">경마</div>
    </el-row>
    <el-row v-if="layoutType == 'layout2'" class="col-md-12 p-0" :class="{'m-t-14': layoutType != 'layout2'}">
      <OwlCarousel :autoWidth="true" :nav="false" :dots="false" :margin="isMobile ? 12 : 24">
        <div :class="[gameType == 1 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(1)">가상축구</div>
        <div :class="[gameType == 4 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(4)">가상농구</div>
        <div :class="[gameType == 5 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(5)">가상야구</div>
        <div :class="[gameType == 3 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(3)">개경주</div>
        <div :class="[gameType == 2 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(2)">경마</div>
      </OwlCarousel>
    </el-row>
    <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" 
      :class="[
        `text-${themeType}`, 
        `border-bottom-1-${themeType}`, 
        (layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6' ? 'bg-black30' : themeType == 'yellow18' ? 'bg-black22' : themeType == 'yellow17' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black35'
      ]" style="height: 53px; padding: 16px; text-align: center; font-size: 14px; margin-top: 8px; border-radius: 6px 6px 0px 0px;">
      {{isMobile ? '' : '배팅내역'}}
      <div style="position: absolute; left: 16px; top: 10px;">
      <div :class="[gameType == 1 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(1)">가상축구</div>
      <div :class="[gameType == 4 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(4)">가상농구</div>
      <div :class="[gameType == 5 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(5)">가상야구</div>
      <div :class="[gameType == 3 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(3)">개경주</div>
      <div :class="[gameType == 2 ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType(2)">경마</div>
      </div>
    </el-row>
    <!-- 서브 탭 끝 -->
    <!-- 배팅내역 -->
    <div class="col-md-12 p-0">
      <div class="col-md-12 p-0 m-0 m-t-10 m-b-20 width-full height-full display-inlineblock">
        <el-row v-if="betLogs" v-for="(log, index) in betLogs" :key="index">
          <VirtualBetLog :gameType="gameType" :betLog="log" />
        </el-row>
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
      <el-row v-if="!betLogs || betLogs.length == 0" class="width-full display-center">
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
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import VirtualBetLog from '~/components/BettingHistory/VirtualBetLog'
import OwlCarousel from 'vue-owl-carousel'

const virtualGameBetLogsServie = feathers.service('virtualBetting');
const mainServie = feathers.service('main')
virtualGameBetLogsServie.timeout = 60000;

export default {
  components: {
    VirtualBetLog,
    OwlCarousel
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: 'getLayoutType'
    })
  },
  data() {
    return {
      gameType: 1,    // 게임타입
      betLogs: [],    // 배팅내역
      total: 0,       // 배팅내역 전체갯수
      listQuery:{
        page: 1,
        limit: 8
      },
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.getList();

    // 가상축구 배팅내역 정산후 결과 패치
    mainServie.off("virtualBetLogSoccer")
    mainServie.on("virtualBetLogSoccer", (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id == betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 가상농구 배팅내역 정산후 결과 패치
    mainServie.off("virtualBetLogBasket")
    mainServie.on("virtualBetLogBasket", (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id == betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 가상농구 배팅내역 정산후 결과 패치
    mainServie.off("virtualBetLogBaseball")
    mainServie.on("virtualBetLogBaseball", (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id == betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 개경주 배팅내역 정산후 결과 패치
    mainServie.off('virtualBetLogGreyHounds')
    mainServie.on('virtualBetLogGreyHounds', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id == betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
    // 경마 배팅내역 정산후 결과 패치
    mainServie.off('virtualBetLogHorseRacing')
    mainServie.on('virtualBetLogHorseRacing', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id == betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
  },
  destroyed() {
    mainServie.off("virtualBetLogSoccer")
    mainServie.off("virtualBetLogBasket")
    mainServie.off("virtualBetLogBaseball")
    mainServie.off('virtualBetLogGreyHounds')
    mainServie.off('virtualBetLogHorseRacing')
  },
  methods: {
    // 배팅내역 리스트 얻기
    getList() {
      if (!this.currentUser) return
      this.$nuxt.$loading.start()
      this.betLogs = []

      var query = {
        gameType: this.gameType,
        limit: this.listQuery.limit || 8,
        page: this.listQuery.page
      }
      virtualGameBetLogsServie.find({query: query})
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
    // 경기타입 선택
    onClickGameType(val) {
      this.gameType = val
      this.getList()
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
  }
}
</script>  
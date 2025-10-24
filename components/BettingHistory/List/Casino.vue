<template>
  <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
    <!-- 게임사 선택 -->
    <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :class="{'m-t-14': layoutType != 'layout2'}">
      <div class="on" :class="`gametype-button-${themeType}`">카지노</div>	
      <div style="width: 200px;" class="float-right" :class="{'m-r-20': layoutType != 'layout2'}">
        <el-select v-model="selectedGame" placeholder="Select" @change="handleSelectGames" :class="`slot-select-${themeType}`">
          <el-option v-for="(item, index) in gameList" :key="index" :label="item.Game" :value="item.Id"></el-option>
        </el-select>
      </div>
    </el-row>
    <el-row v-else 
      :class="[`text-${themeType}`, `border-bottom-1-${themeType}`, 
        (layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || 
        layoutType == 'layout6' ? 'bg-black30' : 
        themeType == 'yellow18' ? 'bg-black22' : 
        themeType == 'yellow17' ? 'bg-black41' : 
        themeType == 'blue19' ? 'bg-blue902' : 
        themeType == 'blue11' ? 'bg-grey914' : 
        themeType == 'gold13' ? 'bg-blue903' : 
        themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black35'
      ]" style="height: 53px; padding: 16px; text-align: center; font-size: 14px; margin-top: 8px; border-radius: 6px 6px 0px 0px;">
      {{isMobile ? '' : '배팅내역'}}
      <div style="position: absolute; left: 16px; top: 10px;">
        <div class="on" :class="`gametype-button-${themeType}`">카지노</div>	
      </div>
      <div style="position: absolute; right: 16px; top: 5px; width: 200px;">
        <el-select v-model="selectedGame" placeholder="Select" @change="handleSelectGames" :class="`slot-select-${themeType}`">
          <el-option v-for="(item, index) in gameList" :key="index" :label="item.Game" :value="item.Id"></el-option>
        </el-select>
      </div>
    </el-row>
    <!-- 게임사 선택 끝 -->
    <!-- 배팅내역 -->
    <div class="col-md-12 p-0">
      <div class="col-md-12 p-0 m-0 m-t-10 m-b-20 width-full height-full display-inlineblock">
        <el-row v-if="betLogs" v-for="(log, index) in betLogs" :key="index">
          <CasinoBetLog :betLog="log" />
        </el-row>
      </div>
      <el-row v-if="betLogs && betLogs.length > 0" class="display-inlineblock width-full">
        <el-col :span="24">
          <div class="block">
            <el-pagination 
              :class="`bet-history-paging-${themeType}`" 
              align="center" 
              :page-sizes="[5,10,20,30,50]"
              :page-size="listQuery.limit" 
              :current-page.sync="listQuery.page" 
              :pager-count="isMobile ? 5 : 9"
              background 
              layout="prev, pager, next" 
              :total="total" 
              @current-change="handleCurrentChange">
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
import Preview from '~/components/Auth/Preview.vue'
import PageHeader from '~/components/Header/PageHeader'
import Tab from '~/components/BettingHistory/Tab'
import CasinoBetLog from '~/components/BettingHistory/CasinoBetLog'

const casinoGameService = feathers.service('getCasinoThirdParty')
const casinoBetService = feathers.service('getCasinoBetlog')
casinoGameService.timeout = 60000;
casinoBetService.timeout = 60000;

export default {
  components: {
    Preview,       // 로그인유도 콤포넌트
    PageHeader,        // 배팅내역 헤더
    Tab,           // 배팅내역 탭
    CasinoBetLog   // 카지노 배팅내역 콤포넌트
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
      selectedGame: 0,      // 선택된 게임사아이디
      gameList: [],         // 게임사 리스트
      betLogs: [],          // 배팅내역
      total: 0,             // 배팅내역 전체갯수
      listQuery:{
        page: 1,
        limit: 8
      },
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.getGameList()
    this.getList()
  },
  methods: {
    // 배팅내역 얻기
    getList() {
      if (!this.currentUser) return
      this.betLogs = []
      this.$nuxt.$loading.start()

      var query = {
        limit: this.listQuery.limit || 8,
        page: this.listQuery.page
      }
      if (this.selectedGame !== 0) query.thirdParty = this.selectedGame

      casinoBetService.find({query: query})
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.betLogs = res.data.data
            this.betLogs.forEach(betLog => {
              betLog.gameName = this.filterPartyCode(betLog.thirdParty)
            });
            this.total = res.data.total
          }
          this.$nuxt.$loading.finish()
        })
        .catch((err) => { 
          console.log(err.message);
          this.$nuxt.$loading.finish()
        })
    },
    // 페이지 선택
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    // 게임사 리스트 얻기
    getGameList() {
      casinoGameService.find().then(response => {
        if (response.code != 1) {
          console.log(response.message)
          return
        }
        for(let i = 0; i < response.data.liveGames.length; i++) {
          this.gameList.push({
            Id: response.data.liveGames[i].thirdPartyCode,
            Game: response.data.liveGames[i].nameKo,
            status: response.data.liveGames[i].status
          })
        }
        for(let i = 0; i < response.data.slotGames.length; i++) {
          this.gameList.push({
            Id: response.data.slotGames[i].thirdPartyCode,
            Game: response.data.slotGames[i].nameKo,
            status: response.data.slotGames[i].status
          })
        }
        let all = {
          Id: 0,
          Game: '모든 게임사',
          status: 0
        }
        this.gameList.unshift(all)
        this.selectedGame = this.gameList[0].Id
      })
    },
    // 게임사 선택
    handleSelectGames(){
      this.listQuery.page = 1
      this.getList()
    },
    // 게임사명 얻기
    filterPartyCode(thirdPartyCode) {
      const index = this.gameList.findIndex(
        bl => bl.Id == thirdPartyCode
      );
      if (index > -1) return this.gameList[index].Game;
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
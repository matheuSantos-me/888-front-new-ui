<template>
<client-only>
  <el-dialog :visible.sync="dialogFormVisible" class="main-dialog orange12-dialog" :width="screenWidth > 1200 ? '1200px' : '100%'" :before-close="handleClose">
    <el-row v-if="layoutType == 'layout2'" class="text-right p-16" :class="isMobile ? 'display-center' : ''" style="" :style="isMobile ? 'height: 64px; background: #16171A;' : 'height: 56px; background: #141517;'">
      <img v-if="isMobile" :src="`/image/Home/${themeType}/logo1.png`" height="40">
      <img :src="'/image/multi.svg'" class="cursor i-multi" @click="onClose()" :style="isMobile ? 'position: absolute; top: 20px; right: 16px;' : 'position: absolute; top: 12px; right: 16px; width: 32px'">
    </el-row>
    <el-row v-else class="text-right p-16" :class="isMobile ? 'display-center' : ''" style="height: 56px; background: #14161b;">
      <img v-if="isMobile" :src="`/image/Home/${themeType}/logo1.png`" height="40">
      <img :src="'/image/multi.svg'" class="cursor i-multi" @click="onClose()" :style="isMobile ? 'position: absolute; top: 20px; right: 16px;' : 'position: absolute; top: 12px; right: 16px; width: 32px'">
    </el-row>
    <el-row class="panel" style="color: #fff; border-radius: 0;" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'background: #14161b;' : 'background: #101012;'">
      <el-scrollbar :style="getHeight()">
        <el-row v-if="event" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'padding: 24px 84px 24px 84px;' : 'padding: 24px;'">
          <el-col v-if="layoutType == 'layout2'" :span="12" class="p-r-12">
            <img  :src="event.imageUrl | filterEmblem" width="100%">
          </el-col>
          <el-col v-if="layoutType == 'layout2'" :span="12" class="p-l-24">
            <div class="f-s-24 f-w-700 m-b-20 text-white">{{event.title}}</div>
            <el-row v-if="event.contentUrl != ''">
              <img :src="event.contentUrl | filterEmblem" width="100%">
            </el-row>
            <div v-html="event.content"></div>
          </el-col>
          <el-col v-else :span="24">
            <el-row v-if="themeType != 'yellow14'">
              <img  :src="event.imageUrl | filterEmblem" width="100%">
            </el-row>
            <el-row style="margin-top: 48px;">
              <div class="f-s-24 f-w-700 m-b-20 text-white">{{event.title}}</div>
              <el-row v-if="event.contentUrl != ''">
                <img :src="event.contentUrl | filterEmblem" :style="themeType == 'yellow18' ? '' : 'width: 100%'">
              </el-row>
              <div v-html="event.content"></div>
            </el-row>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-row>
  </el-dialog>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import PayIn from '~/components/PayIn/PayIn'
import PayOut from '~/components/PayOut/PayOut'
import MoneyMove from '~/components/Money/MoneyMove'
import NoteTable from '~/components/Table/NoteTable'
import CustomerCenter from '~/components/CustomerCenter/CustomerCenter'
import Notice from '~/components/Notice/Notice'
import CashHistory from '~/components/Money/CashHistory'
import BettingHistoryTab from '~/components/BettingHistory/Tab'
import HistorySports from '~/components/BettingHistory/List/Sports'
import HistoryMini from '~/components/BettingHistory/List/Mini.vue'
import HistoryVirtual from '~/components/BettingHistory/List/Virtual.vue'
import HistoryCasino from '~/components/BettingHistory/List/Casino.vue'
import { linkImage } from '~/assets/js/data/datamanagement.js'

export default { 
  name: 'signup',
  components: { PayIn, PayOut, MoneyMove, NoteTable, CustomerCenter, Notice, CashHistory, BettingHistoryTab, HistorySports, HistoryMini, HistoryVirtual, HistoryCasino },
  computed: {
    ...mapGetters({ 
			screenWidth: "getScreenWidth",
      isMobile: 'getIsMobile',
      eventDialogVisible: "getEventDialogVisible",
      event: "getEvent",
      themeType: 'getThemeType',
      layoutType: 'getLayoutType',
      orangeDialogTab: 'getOrangeDialogTab',
      currentUser: "auth/currentUser",
      betHistoryTab: 'getBettingHistoryTab'
    })
  },
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    }
  },
  watch: {
    screenWidth(val) {
      this.initframe()
    },
    eventDialogVisible(val){
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      isShowMobile: false
    }
  },
  mounted() {
    this.initframe()
  },
  methods: {
    handleClose() {},
    onClose() {
      this.dialogFormVisible = false
    },
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false
      } else {
        this.isShowMobile = true
      }
    },
    getHeight() {
      if (this.screenWidth > 1200) return 'height: 641px'
      else if (this.screenWidth < 768) {
        let height = window.innerHeight - 124
        return 'height: ' + height + 'px'
      }
      else {
        let height = window.innerHeight - 173
        return 'height: ' + height + 'px'
      }
    }
  },
}
</script>
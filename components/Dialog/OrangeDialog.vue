<template>
<client-only>
  <el-dialog :visible.sync="dialogFormVisible" class="main-dialog orange12-dialog" :width="screenWidth > 1200 ? '1200px' : '100%'" :before-close="handleClose">
    <el-row class="text-right p-16" :class="isMobile ? 'display-center' : ''" style="" :style="isMobile ? 'height: 64px; background: #16171A;' : 'height: 56px; background: #141517;'">
      <img v-if="isMobile" :src="`/image/Home/${themeType}/logo1.png`" height="40" @click="onClose()">
      <img :src="'/image/multi.svg'" class="cursor i-multi" @click="onClose()" :style="isMobile ? 'position: absolute; top: 20px; right: 16px;' : 'position: absolute; top: 12px; right: 16px; width: 32px'">
    </el-row>
    <el-row v-if="!isMobile" style="background: #101012;">
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 0}" @click="onClickTab(0)">입금</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 1}" @click="onClickTab(1)">출금</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 2}" @click="onClickTab(2)">머니이동</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 9}" @click="onClickTab(9)">쿠폰/포인트</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 3}" @click="onClickTab(3)">쪽지</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 4}" @click="onClickTab(4)">1:1 문의</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 5}" @click="onClickTab(5)">배팅내역</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 6}" @click="onClickTab(6)">공지/규정</div>
      <div class="orange11-dialog-header-tab width-11pro" :class="{'on': orangeDialogTab == 7}" @click="onClickTab(7)">캐쉬내역</div>
    </el-row>
    <el-row v-if="isMobile" style="border-top: 1px solid #242424; border-bottom: 1px solid #242424; height: 60px; background: #16171A;">
      <el-row v-if="orangeDialogTab != 8">
        <img :src="`/image/Home/${themeType}/arrow2.svg`" class="p-l-16 p-t-16 float-left" style="width: 42px;" @click="onClickTab(8)">
        <div class="float-left text-center p-t-10" style="width: calc(33.3% - 14px)">
          <span style="color: #B2B2B2;">스포츠 지갑</span><br><span :class="`text-${themeType}`">{{ currentUser ? currentUser.cash.sportsmoney : 0 | currencyFormat('원') }}</span>
        </div>
        <div class="float-left text-center p-t-10" style="width: calc(33.3% - 14px)">
          <span style="color: #B2B2B2;">카지노 지갑</span><br><span :class="`text-${themeType}`">{{ currentUser ? currentUser.cash.casinomoney : 0 | currencyFormat('원') }}</span>
        </div>
        <div class="float-left text-center p-t-10" style="width: calc(33.3% - 14px)">
          <span style="color: #B2B2B2;">포커 지갑</span><br><span :class="`text-${themeType}`">{{ currentUser ? currentUser.cash.pokermoney : 0 | currencyFormat('원') }}</span>
        </div>
      </el-row>
      <el-row v-else>
        <div v-if="currentUser" class="float-left m-r-16 m-l-16 m-t-5" :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
        <div v-if="currentUser" class="float-left m-t-8 text-white">
          {{currentUser.userLoginId}}<br><span :class="`text-${themeType}`">{{currentUser.nickname}}</span>
        </div>
      </el-row>
    </el-row>
    <el-row class="panel" style="color: #fff; border-radius: 0;" :style="isMobile ? 'background: #161719;' : 'background: #101012;'">
      <el-scrollbar :style="getHeight()">
        <PayIn v-if="orangeDialogTab == 0" :isShowMobile="isShowMobile" />
        <PayOut v-if="orangeDialogTab == 1" :isShowMobile="isShowMobile" />
        <MoneyMove v-if="orangeDialogTab == 2" :isShowMobile="isShowMobile" />
        <NoteTable v-if="orangeDialogTab == 3" />
        <CustomerCenter v-if="orangeDialogTab == 4" />
        <BettingHistoryTab v-if="orangeDialogTab == 5" />
        <HistorySports v-if="orangeDialogTab == 5 && betHistoryTab == 'sports'" />
        <HistoryMini v-if="orangeDialogTab == 5 && betHistoryTab == 'mini'" />
        <HistoryVirtual v-if="orangeDialogTab == 5 && betHistoryTab == 'virtual-sports'" />
        <HistoryCasino v-if="orangeDialogTab == 5 && betHistoryTab == 'casino'" />
        <Notice v-if="orangeDialogTab == 6" />
        <CashHistory v-if="orangeDialogTab == 7" />
        <Coupon v-if="orangeDialogTab == 9" />
        <el-row v-if="orangeDialogTab == 8" class="p-16">
          <el-row>
            <div style="float: left; background: #242629; width: calc(50% - 8px); padding: 12px; border-radius: 4px; height: 62px;">
              <span style="color: #B2B2B2;">스포츠 캐쉬</span><br><span class="f-s-14">{{ currentUser ? currentUser.cash.sportsmoney : 0 | currencyFormat('원') }}</span>
              <img :src="`/image/Home/sports.png`" style="position: absolute; right: calc(50% + 8px); bottom: 0;">
            </div>
            <div style="float: right; background: #242629; width: calc(50% - 8px); padding: 12px; border-radius: 4px; height: 62px;">
              <span style="color: #B2B2B2;">카지노 캐쉬</span><br><span class="f-s-14">{{ currentUser ? currentUser.cash.casinomoney : 0 | currencyFormat('원') }}</span>
              <img :src="`/image/Home/casino.png`" style="position: absolute; right: 0; bottom: 0;">
            </div>
          </el-row>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(0)">
            <img :src="`/image/Sidebar/${themeType}/payin.png`" class="m-r-16"> 입금
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(1)">
            <img :src="`/image/Sidebar/${themeType}/payout.png`" class="m-r-16"> 출금
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(2)">
            <img :src="`/image/Sidebar/${themeType}/moneymove.png`" class="m-r-16"> 머니이동
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(9)">
            <img :src="`/image/Sidebar/${themeType}/coupon.png`" class="m-r-16"> 쿠폰/포인트
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(3)">
            <img :src="`/image/Sidebar/${themeType}/note.png`" class="m-r-16"> 쪽지
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(4)">
            <img :src="`/image/Sidebar/${themeType}/question.png`" class="m-r-16"> 문의
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="background: #1F2124; border-radius: 4px; margin-top: 16px; padding: 12px 16px; height: 44px;" @click="onClickTab(5)">
            <img :src="`/image/Sidebar/${themeType}/bethistory.png`" class="m-r-16"> 배팅내역
            <img :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-2">
          </div>
          <div style="border: 1px solid #F56406; border-radius: 4px; margin-top: 32px; padding: 12px 16px; height: 44px; text-align: center;" @click="logout()">
            로그아웃
          </div>
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
import Coupon from '~/components/Money/Coupon.vue'
import { currencyFormat } from "@/assets/js/utils";

export default { 
  props: ["isVisibleSignup"],
  name: 'signup',
  components: { PayIn, PayOut, MoneyMove, NoteTable, CustomerCenter, Notice, CashHistory, BettingHistoryTab, HistorySports, HistoryMini, HistoryVirtual, HistoryCasino, Coupon },
  computed: {
    ...mapGetters({ 
			screenWidth: "getScreenWidth",
      isMobile: 'getIsMobile',
      orangeDialogVisible: "getOrangeDialogVisible",
      themeType: 'getThemeType',
      orangeDialogTab: 'getOrangeDialogTab',
      isUseDoor: "getIsUseDoor",
      currentUser: "auth/currentUser",
      betHistoryTab: 'getBettingHistoryTab'
    })
  },
  filters: {
    currencyFormat
  },
  watch: {
    orangeDialogTab(val) {
      if (this.orangeDialogTab == 0) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Money-PayIn')
      } else if (this.orangeDialogTab == 1) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Money-PayOut')
      } else if (this.orangeDialogTab == 2) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Money-MoneyMove')
      } else if (this.orangeDialogTab == 3) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Note')
      } else if (this.orangeDialogTab == 4) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Customer')
      } else if (this.orangeDialogTab == 5) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'BettingHistory-Sports')
      } else if (this.orangeDialogTab == 6) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Notice')
      } else if (this.orangeDialogTab == 7) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Money-CashHistory')
      } else if (this.orangeDialogTab == 9) {
		    this.$store.commit('SET_CURRENTPAGENAME', 'Coupon')
      }
    },
    screenWidth(val) {
      this.initframe()
    },
    orangeDialogVisible(val){
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  data() {
    return {
      userLevelImageList: {
        orange12: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          }
        ]
      },
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
    onClickTab(type) {
      this.$store.commit('SET_ORANGEDIALOGTAB', type)
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
    },
    // 로그아웃
    logout() {
      this.onClose()
      this.$store.dispatch("auth/logout");
      if (this.isUseDoor) this.$router.push("/Auth/Login")
    }
  },
}
</script>
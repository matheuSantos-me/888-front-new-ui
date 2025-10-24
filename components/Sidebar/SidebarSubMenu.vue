<template>
  <client-only>
    <div class="p-2 m-t-10" :class="{'m-b-30' : !isMobile}">
      <el-row v-if="currentUser" class="m-b-4">
        <el-col :span="isAvailCasino ? 12 : 24">
          <div class="display-center width-full" :class="`text-contrast-${themeType}`">
            <div class="float-left">
              <img :src="`/image/Sidebar/${themeType}/SportsCash.png`" />
            </div>
            <div class="m-t-7 m-b-7 m-l-10 float-left">
              <el-row>스포츠캐쉬 <span v-if="!isAvailCasino" :class="`side-money-${themeType}`">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</span></el-row>
              <el-row v-if="isAvailCasino"><span :class="`side-money-${themeType}`">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</span></el-row>
            </div>
          </div>
        </el-col>
        <el-col v-if="isAvailCasino" :span="12">
          <div class="display-center width-full" :class="`text-contrast-${themeType}`">
            <div class="float-left">
              <img :src="`/image/Sidebar/${themeType}/CasinoCash.png`" />
            </div>
            <div class="m-t-7 m-b-7 m-l-10 float-left">
              <el-row>카지노캐쉬</el-row>
              <el-row><span :class="`side-money-${themeType}`">{{currentUser.cash.casinomoney | currencyFormat('원')}}</span></el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="m-b-8">
        <div
          class="p-t-12 p-b-12 cursor"
          :class="[
						pageName == 'Money-PayIn' ? `active-border-${themeType}` : '',
            `bg-side-money-tab-${themeType}`
					]"
          @click="goToPage(0)"
        >
          <i class="fa fa-plus-square f-s-16 m-l-24 m-r-12" :class="getTextColor(themeType, 0)"></i>입금신청
        </div>
      </el-row>
      <el-row class="m-b-8">
        <div
          class="p-t-12 p-b-12 cursor"
          :class="[
						pageName == 'Money-PayOut' ? `active-border-${themeType}` : '',
            `bg-side-money-tab-${themeType}`
					]"
          @click="goToPage(1)"
        >
          <i class="fa fa-minus-square f-s-16 m-l-24 m-r-12" :class="getTextColor(themeType, 0)"></i>출금신청
        </div>
      </el-row>
      <el-row v-if="themeType != 'gold11'">
        <ul class="sub-menu p-t-0 p-b-2" style="display: block; margin-bottom: 42px;" :class="`sub-menu-${themeType}`">
          <li v-if="isAvailCasino && themeType != 'blue16'" class="has-sub" @click="goToPage(2)">
            <span :class="pageName == 'Money-MoneyMove' ? `bg-theme-${themeType}` : ''" ></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Money-MoneyMove' ? `text-theme-${themeType}` : ''">머니이동</a>
          </li>
          <li class="has-sub" @click="goToPage(9)">
            <span :class="pageName == 'Note' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(0)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Note' ? `text-theme-${themeType}` : ''">쪽지함</a>
          </li>
          <li v-if="isUseCoupon || isUseRolling || isUseLost || isUsePayback" class="has-sub" @click="goToPage(10)">
            <span :class="pageName == 'Coupon' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(1)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Coupon' ? `text-theme-${themeType}` : ''">쿠폰/포인트</a>
          </li>
          <li class="has-sub" @click="goToPage(3)">
            <span :class="pageName == 'Friend' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(2)" ></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Friend' ? `text-theme-${themeType}` : ''">지인추천</a>
          </li>
          <li class="has-sub" @click="goToPage(4)">
            <span :class="pageName == 'Attendance' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(3)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Attendance' ? `text-theme-${themeType}` : ''">출석현황</a>
          </li>
          <li class="has-sub" @click="goToPage(5)">
            <span :class="pageName == 'Money-CashHistory' ? `bg-theme-${themeType}`: ''" :style="'top: ' + getCategoryPosition(4)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Money-CashHistory' ? `text-theme-${themeType}` : ''">캐쉬/포인트 내역</a>
          </li>
          <li class="has-sub" @click="goToPage(6)">
            <span :class="pageName == 'Event' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(5)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Event' ? `text-theme-${themeType}` : ''">이벤트</a>
          </li>
          <li class="has-sub" @click="goToPage(7)">
            <span :class="pageName == 'Notice' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(6)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Notice' ? `text-theme-${themeType}` : ''">{{noticeSettings?.noticeTitle}}</a>
          </li>
          <li v-if="fameSettings?.isUseFame" class="has-sub" @click="goToPage(8)">
            <span :class="pageName == 'Fame' ? `bg-theme-${themeType}` : ''" :style="'top: ' + getCategoryPosition(7)"></span>
            <a class="p-18 p-l-6 p-r-0 f-s-13" :class="pageName == 'Fame' ? `text-theme-${themeType}` : ''">명예의 전당</a>
          </li>
        </ul>
      </el-row>
      <el-row v-else>
        <ul class="sub-menu p-t-0 p-b-2" style="display: block; margin-bottom: 42px;">
          <li v-if="isAvailCasino" class="has-sub" @click="goToPage(2)">
            <span :class="pageName == 'Money-MoneyMove' ? `bg-theme-${themeType}` : ''" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Money-MoneyMove' ? `text-theme-${themeType}` : ''"
            >머니이동</a>
          </li>
          <li class="has-sub" @click="goToPage(9)">
            <span :class="pageName == 'Note' ? `bg-theme-${themeType}` : ''" :style="isAvailCasino ? 'top: 71px' : ''" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Note' ? `text-theme-${themeType}` : ''"
            >쪽지함</a>
          </li>
          <li class="has-sub" @click="goToPage(4)">
            <span :class="pageName == 'Attendance' ? `bg-theme-${themeType}` : ''" :style="isAvailCasino ? 'top: 125px' : 'top: 71px'" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Attendance' ? `text-theme-${themeType}` : ''"
            >출석현황</a>
          </li>
          <li class="has-sub" @click="goToPage(5)">
            <span :class="pageName == 'Money-CashHistory' ? `bg-theme-${themeType}`: ''" :style="isAvailCasino ? 'top: 179px' : 'top: 125px'" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Money-CashHistory' ? `text-theme-${themeType}` : ''"
            >캐쉬/포인트 내역</a>
          </li>
          <li class="has-sub" @click="goToPage(6)">
            <span :class="pageName == 'Event' ? `bg-theme-${themeType}` : ''" :style="isAvailCasino ? 'top: 233px' : 'top: 179px'" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Event' ? `text-theme-${themeType}` : ''"
            >이벤트</a>
          </li>
          <li class="has-sub" @click="goToPage(7)">
            <span :class="pageName == 'Notice' ? `bg-theme-${themeType}` : ''" :style="isAvailCasino ? 'top: 287px' : 'top: 233px'" ></span>
            <a
              class="p-18 p-l-6 p-r-0 f-s-13"
              :class="pageName == 'Notice' ? `text-theme-${themeType}` : ''"
            >{{noticeSettings?.noticeTitle}}</a>
          </li>
        </ul>
      </el-row>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";
import { currencyFormat } from "~/assets/js/utils";
import { getTextColor } from "@/assets/js/data/uicommon"

export default {
  props: ["isVisibleLogin"],
  name: "sidebarsubmenu",
  filters: {
    currencyFormat: currencyFormat,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      noticeSettings: "getNoticeSettings",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      isAvailCasino: "getIsAvailCasino",
      isUseCoupon: 'getIsUseCoupon',
      isUseRolling: "getIsUseRolling",
      isUseLost: "getIsUseLost",
      fameSettings: "getFameSettings",
      isUsePayback: "getIsUsePayback"
    }),
  },
  watch: {
    '$route' () {
        this.pageName = this.$router.currentRoute.name
      }
  },
  data() {
    return {
      pageName: ""
    }
  },
  mounted() {
    this.pageName = this.$router.currentRoute.name
  },
  methods: {
    getTextColor,
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    goToPage(val) {
      switch (val) {
        case 0:
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          this.$store.commit('SET_POKERREDIRECT', false)
          this.$router.push("/Money/PayIn")
          break;
        case 1:
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          this.$store.commit('SET_POKERREDIRECT', false)
          this.$router.push("/Money/PayOut")
          break;
        case 2:
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          this.$router.push("/Money/MoneyMove")
          break;
        case 3:
          this.$router.push("/Friend")
          break;
        case 4:
          this.$router.push("/Attendance")
          break;
        case 5:
          this.$router.push("/Money/CashHistory")
          break;
        case 6:
          this.$router.push("/Event")
          break;
        case 7:
          this.$router.push("/Notice")
          break;
        case 8:
          this.$router.push("/Fame")
          break;
        case 9:
          this.$router.push("/Note")
          break;
        case 10:
          this.$router.push("/Coupon")
          break;
      }
    },
    getCategoryPosition(val) {
      if (val == 0) {
        if (this.isAvailCasino && this.themeType != 'blue16') {
          return '71px'
        } else {
          return '0px'
        }
      } else if (val == 1) {
        if (this.isAvailCasino && this.themeType != 'blue16') {
          return '125px'
        } else {
          return '71px'
        }
      } else if (val == 2) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '179px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '125px'
        } else {
          return '71px'
        }
      } else if (val == 3) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '233px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '179px'
        } else {
          return '125px'
        }
      } else if (val == 4) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '287px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '233px'
        } else {
          return '179px'
        }
      } else if (val == 5) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '341px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '287px'
        } else {
          return '233px'
        }
      } else if (val == 6) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '395px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '341px'
        } else {
          return '287px'
        }
      } else if (val == 7) {
        if (this.isAvailCasino && this.themeType != 'blue16' && (this.isUseCoupon || this.isUseRolling || this.isUseLost || this.isUsePayback)) {
          return '449px'
        } else if (this.isAvailCasino && this.themeType != 'blue16' && !this.isUseCoupon && !this.isUseRolling && !this.isUseLost && !this.isUsePayback) {
          return '395px'
        } else {
          return '341px'
        }
      }
    }
  },
};
</script>

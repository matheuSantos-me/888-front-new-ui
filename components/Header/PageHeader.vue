<!-- 메뉴 콤포넌트 -->
<template>
  <div>   
    <div v-if="layoutType == 'layout1'" class="panel-heading p-2 width-full" :class="getPageBackColor(themeType)">
      <div class="alert alert-info fade in text-left display-inlineblock width-100-pro-10" :class="[!isMobile ? 'm-5' : 'm-0', `bg-page-header-${themeType}`]">
        <img class="float-left m-t-2" :src="getIcon()" height="22">
        <div class="float-left m-l-10 f-w-900">
          {{getTitle()}}
        </div>
        <div v-if="isShowMobile && (type == 'payin' || type == 'payout' || type == 'moneymove')" class="float-right f-s-12 p-7 cursor" :class="{'text-white': themeType == 'red15' || themeType == 'gold12' || themeType == 'gold11' || themeType == 'white'}" style="margin-top: -3px;background-color: #2d343a" @click="showRule()">
          <img :src="`/image/Money/${themeType}/Attention.png`" class="m-l-5">
          {{getRuleTitle()}}
        </div>
        <PayInRule v-if="isShowMobile && isVisiblePayInRule" :isShowMobile="isShowMobile" @event="showRule()" 
			class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
			:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
        <PayOutRule v-if="isShowMobile && isVisiblePayOutRule" :isShowMobile="isShowMobile" @event="showRule()" 
			class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
			:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
        <MoneyMoveRule v-if="isShowMobile && isVisibleMoneyMoveRule" :isShowMobile="isShowMobile" @event="showRule" 
			class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
			:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
      </div>
    </div>
    <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'">
		<el-row v-if="!isMobile" class="p-t-8 p-b-12">
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Money-PayIn'}]" @click="goToPage(12)">입금</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Money-PayOut'}]" @click="goToPage(13)">출금</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Money-MoneyMove'}]" @click="goToPage(14)">머니이동</div>
			<div v-if="themeType == 'yellow15'" :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name.indexOf('BettingHistory') > -1}]" @click="goToPage(7)">배팅내역</div>
			<div v-if="themeType != 'yellow15'" :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Coupon'}]" @click="goToPage(27)">쿠폰/포인트</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Customer'}]" @click="goToPage(8)">1:1문의</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Note'}]" @click="goToPage(9)">쪽지</div>
			<div v-if="themeType == 'yellow15'" :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Coupon'}]" @click="goToPage(27)">쿠폰/포인트</div>
			<div v-if="themeType != 'yellow15'" :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name.indexOf('BettingHistory') > -1}]" @click="goToPage(7)">배팅내역</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Money-CashHistory'}]" @click="goToPage(18)">캐쉬내역</div>
			<div :class="[`header-menu-${themeType}`, {'on': $router.currentRoute.name == 'Notice'}]" @click="goToPage(5)">공지/규정</div>
		</el-row>
		<el-row v-else :class="[layoutType == 'layout3' || layoutType == 'layout6' ? 'bg-black30' : themeType == 'yellow17' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : 'bg-black35', `text-${themeType}`, `border-top-1-${themeType}`]" style="text-align: center; font-size: 14px; padding: 16px 0; margin-bottom: 8px;">
			<el-row>
				{{getTitle()}}
			</el-row>
			<div style="position: absolute; padding: 4px; background: #000; right: 16px; top: 12px;" @click="showRule()">{{getRuleTitle()}}</div>
			<PayInRule v-if="isShowMobile && isVisiblePayInRule" :isShowMobile="isShowMobile" @event="showRule()" 
				class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
				:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
			<PayOutRule v-if="isShowMobile && isVisiblePayOutRule" :isShowMobile="isShowMobile" @event="showRule()" 
				class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
				:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
			<MoneyMoveRule v-if="isShowMobile && isVisibleMoneyMoveRule" :isShowMobile="isShowMobile" @event="showRule" 
				class="position-absolute" style="z-index: 1; left: 12px; width: calc(100% - 24px);" 
				:style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #2d343a;'"/>
		</el-row>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getPageBackColor } from '~/assets/js/data/uicommon'
import PayInRule from '~/components/PayIn/PayInRule'
import PayOutRule from '~/components/PayOut/PayOutRule'
import MoneyMoveRule from '~/components/Money/MoneyMoveRule'
import { getMiniAddress } from "@/assets/js/utils";

export default {
  props: ["type", "isShowMobile"],
  components: {
    PayInRule,
    PayOutRule,
    MoneyMoveRule
  },
  computed: {
    ...mapGetters({
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      isMobile: 'getIsMobile',
      gameSettings: "getGameSettings",
      noticeSettings: "getNoticeSettings"
    })
  },
  data() {
    return {
      isVisiblePayInRule: false,           // 입금규정패널 보여주기 상태
      isVisiblePayOutRule: false,           // 입금규정패널 보여주기 상태
      isVisibleMoneyMoveRule: false,           // 입금규정패널 보여주기 상태
    }
  },
  mounted() {
  },
  methods: {
    getPageBackColor,
	getMiniAddress,
    getTitle() {
      switch (this.type) {
        case 'payin':
          return '입금'
          break;
        case 'payout':
          return '출금'
          break;
        case 'moneymove':
          return '머니이동'
          break;
        case 'cash':
          return '캐쉬/포인트 내역'
          break;
        case 'note':
          return '쪽지'
          break;
        case 'notice':
          return this.noticeSettings.noticeTitle
          break;
		case 'noticeboard':
			return '게시판'
        case 'customer':
          return '1 : 1 문의'
          break;
        case 'event':
          return '이벤트'
          break;
        case 'bethistory':
          return '배팅내역'
          break;
        case 'friend':
          return '지인추천'
          break;
        case 'attendance':
          return '출석현황'
          break;
        case 'livescore':
          return '라이브스코어'
          break;
        case 'tv':
          if (this.themeType != 'blue18') return '스포츠중계'
          return '마추자티비'
          break;
        case 'coupon':
          return '쿠폰/포인트'
          break;
      }
    },
    getRuleTitle() {
      let ruleTitle = ''
      switch (this.type) {
        case 'payin':
          ruleTitle = '입금규정 확인하기'
          break;
        case 'payout':
          ruleTitle = '출금규정 확인하기'
          break;
        case 'moneymove':
          ruleTitle = '머니이동 설명'
          break;
      }
      return ruleTitle
    },
    getIcon() {
      let iconPath = ''
      switch (this.type) {
        case 'payin':
          iconPath = '/image/Money/' + this.themeType + '/PayIn.png'
          break;
        case 'payout':
          iconPath = '/image/Money/' + this.themeType + '/PayOut.png'
          break;
        case 'moneymove':
          iconPath = '/image/Money/' + this.themeType + '/Move.png'
          break;
        case 'cash':
          iconPath = '/image/Cash/' + this.themeType + '/Icon.png'
          break;
        case 'note':
          iconPath = '/image/Note/' + this.themeType + '/Icon.png'
          break;
        case 'notice':
        case 'noticeboard':
          iconPath = '/image/Notice/' + this.themeType + '/Icon.png'
          break;
        case 'customer':
          iconPath = '/image/Question/' + this.themeType + '/Icon.png'
          break;
        case 'event':
          iconPath = '/image/Event/' + this.themeType + '/Icon.png'
          break;
        case 'bethistory':
          iconPath = '/image/BettingHistory/' + this.themeType + '/Clock.png'
          break;
        case 'friend':
          iconPath = '/image/Friend/' + this.themeType + '/Icon.png'
          break;
        case 'attendance':
          iconPath = '/image/Attendance/' + this.themeType + '/Icon.png'
          break;
        case 'coupon':
          iconPath = '/image/Coupon/' + this.themeType + '/Icon.png'
          break;
        case 'livescore':
          iconPath = '/image/GameResult/Icon.png'
          break;
        case 'tv':
          iconPath = '/image/GameResult/Icon.png'
          break;
      }
      return iconPath
    },
		goToPage(val, type) {
			switch (val) {
				case 0:		// 스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/Sports")
					break
				case 1:		// 실시간
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/LiveSports")
					break
				case 2:		// 미니게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push(this.getMiniAddress(this.gameSettings, this.themeType))
					break
				case 3:		// 가상스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/VirtualSports/Football")
					break
				case 4:		// 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					if (type != undefined) {
						this.$router.push({path: "/Casino", query: {type: type}})
					} else {
						this.$router.push("/Casino")
					}
					break
				case 5:		// 공지사항
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 6)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Notice")
					}
					break
				case 6:		// 이벤트
					this.$router.push("/Event")
					break
				case 7:		// 배팅내역
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 5)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
					this.$router.push("/BettingHistory/Sports")
					}
					break
				case 8:		// 문의
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 4)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Customer")
					}
					break
				case 9:		// 쪽지
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 3)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Note")
					}
					break
				case 10:	// 지인추천
					this.$router.push("/Friend")
					break
				case 11:	// 출석현황
					this.$router.push("/Attendance")
					break
				case 12:	// 입금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
      				this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 0)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      					this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayIn")
					}
					break
				case 13:	// 출금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
      				this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 1)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayOut")
					}
					break
				case 14:	// 머니이동
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 2)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Money/MoneyMove")
					}
					break
				case 15:	// 명예의 전당
					this.$router.push("/Fame")
					break
				case 16:	// 스코어
					this.$router.push("/GameResult")
					break
				case 17:	// 홈페이지
					this.$router.push("/")
					break
				case 18:	// 캐쉬내역
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 7)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Money/CashHistory")
					}
					break
				case 19:	// TV
					this.$router.push("/TV")
					break
				case 20: 	// FX
					this.$router.push("/Mini/Fx")
					break
				case 21:	// 별다리
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/BoscoreLadder1")
					break
				case 22:	// 토큰
					this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]')
					break
				case 23:	// 로투스
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Lotus/Baccarat1")
					break
				case 24:	// 벳게임
          this.$router.push("/BetGames/Baccarat")
					break
				case 25: 	// 888Sport
					var windowReference = window.open();
					windowReference.location = 'https://' + this.sportDomain;
					break
				case 26: 	// 1분 FX
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/NamedFX1")
					break
				case 27:	// 쿠폰/포인트
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 9)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Coupon")
					}
					break
			}
		},
    showRule() {
      if (this.type == 'payin') {
        this.isVisiblePayInRule = !this.isVisiblePayInRule
      } else if (this.type == 'payout') {
        this.isVisiblePayOutRule = !this.isVisiblePayOutRule
      } else if (this.type == 'moneymove') {
        this.isVisibleMoneyMoveRule = !this.isVisibleMoneyMoveRule
      }
    }
  }
};
</script>
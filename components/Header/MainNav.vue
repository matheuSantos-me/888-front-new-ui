<!-- 메뉴 콤포넌트 -->
<template>
  <!-- 헤더 바톰 -->
  <div v-if="!isMobile" id="top-menu" class="animated fadeInDownBig top-menu" :class="`top-menu-${themeType}`" @click="onClickBody">
    <div class="top-menu-in" :class="`top-menu-in-${themeType}`">
      <ul class="nav" style="padding:0px; font-weight:bold; color:#ffffff;">
        <li v-for="(menu, index) in topMenu" v-if="menu.type != -1" class="f-s-15 text-center cursor" :class="[`over-${themeType}`, index == 0 ? `header-button-first-${themeType}` : index == topMenu.filter(x => x.type != -1).length - 1 ? `header-button-last-${themeType}` : `header-button-${themeType}`]" @click="goToPage(menu.type)">
          <a> <span :class="`header-button-color-${themeType}`">{{menu.title}}</span> </a>
        </li>
        <!-- <li class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(1)">
          <a> <span :class="`header-button-color-${themeType}`">{{getLiveSportsName()}}</span> </a>
        </li>
        <li v-if="!isDivideCasino && themeType == 'red15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(4)">
          <a> <span :class="`header-button-color-${themeType}`">{{getCasinoName()}}</span> </a>
        </li>
        <li v-if="themeType != 'red15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(2)">
          <a> <span :class="`header-button-color-${themeType}`">미니게임</span> </a>
        </li>
        <li v-if="themeType == 'red15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(12)">
          <a> <span :class="`header-button-color-${themeType}`">{{themeType == 'red15' ? '미니게임' : '별다리'}}</span> </a>
        </li>
        <li class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(3)">
          <a> <span :class="`header-button-color-${themeType}`">{{getVirtualSportsName()}}</span> </a>
        </li>
        <li v-if="themeType == 'gold11' || themeType == 'red15' || themeType == 'red12' || themeType == 'blue15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(11)">
          <a> <span :class="`header-button-color-${themeType}`">로투스</span> </a>
        </li>
        <li v-if="themeType == 'gold12' || themeType == 'red15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(13)">
          <a> <span :class="`header-button-color-${themeType}`">벳게임 카지노</span> </a>
        </li>
        <li v-if="!isDivideCasino && themeType != 'red15'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(4)">
          <a> <span :class="`header-button-color-${themeType}`">{{getCasinoName()}}</span> </a>
        </li>
        <li v-if="isDivideCasino" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(4, 1)">
          <a> <span :class="`header-button-color-${themeType}`">라이브 카지노</span> </a>
        </li>
        <li v-if="isDivideCasino" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-${themeType}`" @click="goToPage(4, 2)">
          <a> <span :class="`header-button-color-${themeType}`">카지노 슬롯</span> </a>
        </li>
        <li v-if="isUsePoker" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(17)">
          <a> <span :class="`header-button-color-${themeType}`">포커</span> </a>
        </li>
        <li v-if="themeType == 'orange11' || themeType == 'orange12' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'blue14' || themeType == 'orange13'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(5)">
          <a> <span :class="`header-button-color-${themeType}`">라이브스코어</span> </a>
        </li>
        <li v-if="themeType == 'orange11' || themeType == 'orange12' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(14)">
          <a> <span :class="`header-button-color-${themeType}`">스포츠중계</span> </a>
        </li>
        <li v-if="themeType == 'blue16' || themeType == 'yellow13' || themeType == 'orange13'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(6)">
          <a> <span :class="`header-button-color-${themeType}`">배팅내역</span> </a>
        </li>
        <li v-if="themeType == 'blue14' || themeType == 'blue16' || themeType == 'yellow13' || themeType == 'orange13'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(7)">
          <a> <span :class="`header-button-color-${themeType}`">이벤트</span> </a>
        </li>
        <li v-if="themeType == 'blue14' || themeType == 'blue16' || themeType == 'yellow13' || themeType == 'orange13'" class="f-s-15 text-center cursor" :class="`over-${themeType} header-button-last-${themeType}`" @click="goToPage(8)">
          <a> <span :class="`header-button-color-${themeType}`">{{noticeSettings.noticeTitle}}</span> </a>
        </li> -->
      </ul>
    </div>
  </div>
  <div v-else class="f-s-14" :class="`bg-mainnave-${themeType}`" @click="onClickBody">
    <el-row v-if="!currentUser && layoutType != 'layout2'">
      <el-col :span="12" class="p-4">
        <div class="p-14 display-center cursor" :class="[getTextColor(themeType, 1), `border-1-${themeType}`]" style="border-radius: 5px;" @click="onClickLogin()">
          <img :src="`/image/Home/${themeType}/login.png`" class="m-r-13"> 로그인
        </div>
      </el-col>
      <el-col :span="12" class="p-4">
        <div class="p-14 display-center cursor text-black" :class="[themeType == 'red15' ? 'bg-yellow903' : getBackColor(themeType, 0), `border-1-${themeType}`]" style="border-radius: 5px;" @click="onClickSignUp()">
          <img :src="`/image/Home/user.png`" class="m-r-13" height="25"> 회원가입
        </div>
      </el-col>
    </el-row>
    <el-row v-if="currentUser" class="f-s-13">
      <el-row v-if="layoutType == 'layout1'" class="p-4 p-l-12 p-r-12">
        <el-col :span="16">
          <el-row v-if="themeType != 'green'" class="text-success" :class="{'m-t-10': !isAvailCasino}">
            <div class="float-left">
              <img :src="`/image/Home/SportsMoney.png`" width="17">
            </div>
            <div class="p-t-2 float-left m-l-5 m-r-10">
              스포츠 캐쉬 : 
            </div>
            <div class="p-t-2 float-left">
              <div class="float-left m-r-10"><span>{{ currentUser ? currentUser.cash.sportsmoney : 0 | currencyFormat('원') }}</span></div>
            </div>
          </el-row>
          <el-row v-if="isAvailCasino" :class="[`header-money-color-${themeType}`, {'m-t-10': themeType == 'green'}]">
            <div class="float-left">
              <img :src="`/image/Home/CasinoMoney.png`" width="17">
            </div>
            <div class="float-left  p-t-2 m-l-5">
              <div class="float-left m-r-10">카지노 캐쉬 : </div>
            </div>
            <div class="float-left p-t-2">
              <div class="float-left m-r-10"><span>{{ currentUser ? currentUser.cash.casinomoney : 0 | currencyFormat('원') }}</span></div>
            </div>
          </el-row>
        </el-col>
        <el-col :span="8" class="p-t-2" :class="`header-money-color-${themeType}`">
          <el-row>
            GMT+9 {{this.currentTime}}
          </el-row>
          <el-row class="text-blue902 p-t-2 text-overflow">
            <span :class="getTextColor(themeType, 1)">레벨:</span> {{getLevel()}} / {{this.currentUser.nickname}}
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="layoutType == 'layout2'" class="text-white p-3 p-l-8 p-r-8" :class="`bg-mainnave-${themeType}`">
        <el-col :span="12" class="text-left">
          스포츠 캐쉬 <span :class="`text-${themeType}`">{{ currentUser ? currentUser.cash.sportsmoney : 0 | currencyFormat('원') }}</span>
        </el-col>
        <el-col :span="12" class="text-right">
          카지노 캐쉬 <span :class="`text-${themeType}`">{{ currentUser ? currentUser.cash.casinomoney : 0 | currencyFormat('원') }}</span>
        </el-col>
      </el-row>
      <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="p-l-8 p-r-8 text-white" 
        :class="{
          'p-4': layoutType == 'layout5', 
          'bg-black32 p-12': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow14' && themeType != 'yellow11' && themeType != 'gold13') || layoutType == 'layout6', 
          'bg-black38 p-12': themeType == 'yellow16', 
          'bg-blue903 p-12': themeType == 'gold13',
          'bg-blue904 p-12': themeType == 'yellow14' || themeType == 'yellow11'
        }">
        <el-row v-if="layoutType != 'layout3' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19'" class="p-4 p-l-8 p-r-8 m-b-4 b-r-6" :class="themeType == 'yellow17' ? 'bg-black40' : themeType == 'blue19' ? 'bg-blue19' : themeType == 'blue11' ? 'bg-blue11' : 'bg-black35'">
          <div class="float-left p-3 p-l-12 p-r-12 b-r-6" :class="`text-${themeType}`" style="background: #030917;">
            LV. 0{{currentUser.level}}
          </div>
          <div class="float-left p-3 p-l-12 p-r-12">
            ID: {{currentUser.userLoginId}}
          </div>
          <div class="float-left p-3 p-l-12 p-r-12">
            닉네임: {{currentUser.nickname}}
          </div>
        </el-row>
        <el-row>
          <div class="float-left display-center m-r-8" 
            :class="{
              'bg-black35': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
              'bg-black40': themeType == 'yellow17', 
              'bg-blue19': themeType == 'blue19',
              'bg-blue11': themeType == 'blue11',
              'bg-grey915': themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19',
              'bg-black37': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow14' && themeType != 'yellow11') || layoutType == 'layout6', 
              'bg-black39': layoutType == 'layout3' && themeType == 'yellow16', 
              'bg-black51': themeType == 'yellow11',
              'bg-black47': layoutType == 'layout3' && themeType == 'yellow14'
            }" 
            style="width: calc(50% - 4px); border-radius: 6px; padding: 4px;">
            <el-row>
              <el-row>
                <img :src="`/image/Home/${themeType}/sportscash.png`" width="24" class="float-left m-r-4">
                <div class="float-left p-t-4">스포츠캐쉬</div>
              </el-row>
              <el-row class="text-center">
                <span :class="`text-${themeType}`">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</span>
              </el-row>
            </el-row>
          </div>
          <div class="float-left display-center" 
            :class="{
              'bg-black35': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
              'bg-black40': themeType == 'yellow17', 
              'bg-blue19': themeType == 'blue19',
              'bg-blue11': themeType == 'blue11',
              'bg-black37': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow14' && themeType != 'yellow11') || layoutType == 'layout6', 
              'bg-black39': layoutType == 'layout3' && themeType == 'yellow16', 
              'bg-black51': themeType == 'yellow11',
              'bg-black47': layoutType == 'layout3' && themeType == 'yellow14', 
              'bg-grey915': themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19'
            }" 
            style="width: calc(50% - 4px); border-radius: 6px; padding: 4px;">
            <el-row>
              <el-row>
                <img :src="`/image/Home/${themeType}/casinocash.png`" width="24" class="float-left m-r-4">
                <div class="float-left p-t-4">카지노캐쉬</div>
              </el-row>
              <el-row class="text-center">
                <span :class="`text-${themeType}`">{{currentUser.cash.casinomoney | currencyFormat('원')}}</span>
              </el-row>
            </el-row>
          </div>
        </el-row>
      </el-row>
    </el-row>
  </div>
  <!-- 헤더 바톰 끝 -->
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, getCurrentTime, setSidePanel, getMiniAddress } from "@/assets/js/utils";
import { getTextColor, getBackColor } from '~/assets/js/data/uicommon'

export default {
  middleware: "authenticated",
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',
			casinoButtonDisable: 'getCasinoButtonDisable',
			screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      noticeSettings: "getNoticeSettings",
      isUseDoor: "getIsUseDoor",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      isDivideCasino: "getIsDivideCasino",
      isAvailCasino: "getIsAvailCasino",
      gameSettings: "getGameSettings",
      isUsePoker: "getIsUsePoker",
      topMenu: "getTopMenu",
      isNewUser: "getIsNewUser"
    })
  },
  middleware: ["auth", "i18n"],
	filters: {
		currencyFormat
	},
  data() {
    return {
      liveGameList: [],                         // 라이브게임 리스트
      currentTime: ''
    };
  },
  mounted() {
    this.calculateTime = setInterval(() => {
      this.currentTime = this.getCurrentTime()
    }, 1000)
  },
  destroyed () {
    clearInterval(this.calculateTime)
  },
  methods: {
    getBackColor,
    getTextColor,
    setSidePanel,
    getCurrentTime,
    getMiniAddress,
    getLevel() {
      if (this.currentUser) {
        let level = this.currentUser.level
        if (this.themeType == 'orange12' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
          if (level >= 6 && level <= 10) {
            level -= 5
          }
          if (level >= 11 && level <= 15) {
            level -= 10
          }
        } else if (this.themeType == 'blue14') {
          level = level % 5
        } else if (this.themeType == 'blue16') {
          if (level >= 11 && level <= 16) {
            level -= 10
          }
        }
        
        if (this.themeType == 'yellow12') {
          if (level == 1) return '브론즈'
          if (level == 2) return '실버l'
          if (level == 3) return '실버ll'
          if (level == 4) return '골드l'
          if (level == 5) return '골드ll'
          if (level == 6) return '플래티넘'
          if (level == 7) return '다이아'
          if (level == 8) return '마스터'
          if (level == 9) return '챌린저'
        }
        return `Lv. ${level}`
      }
    },
    getCasinoName() {
      if (this.themeType == 'gold11') {
        return '해외카지노'
      } else {
        return '카지노'
      }
    },
    getLiveSportsName() {
      if (this.themeType == 'gold12' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') {
        return 'LIVE 스포츠'
      }
      return '실시간 스포츠'
    },
    getVirtualSportsName() {
      if (this.themeType == 'gold12' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') {
        return 'BET365'
      }
      return '가상스포츠'
    },
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
		// 페이지 이동
		goToPage(val) {
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
					this.$router.push("/Casino")
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
					if (this.themeType == 'yellow14') {
						var windowReference = window.open();
						windowReference.location = 'https://bigwin.livenst.com/banana/livescore/livescore/';
						return
					}
					if (this.themeType == 'gold13') {
						var windowReference = window.open();
						windowReference.location = 'https://totodot79.com/index.php?pa=sports';
						return
         			}
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
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/TokenPowerBall")
					break
				case 23:	// 로투스
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Lotus/Baccarat1")
					break
				case 24:	// 벳게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
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
				case 28:	// EOS
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/EOSPowerBall1")
					break
				case 29:	// 동행복권
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/CompanionKenoLadder")
					break
				case 30:	// MGM				
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/MGM/MGMBaccarat1")
					break
				case 31:	// 포커
					this.$router.push("/Poker")
					break;
				case 32:	// 라이브 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 1}})
					break
				case 33:	// 슬롯
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 2}})
					break
				case 34:
					this.$store.commit('SET_ORANGEDIALOGVISIBLE')
          			this.$store.commit('SET_ORANGEDIALOGTAB', 8)
					break
				case 74:
					this.$router.push("/FuturesTrading")
					break;	
				case 75:	
					this.$router.push("/InsightBets")
					break;	
			}
		},
    onClickLogin() {
      this.$store.commit('SET_LOGINDIALOGVISIBLE');
      this.$store.commit("SET_LOGINSIDEVERIFY", false)
    },
    onClickSignUp(){
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      this.$router.push('/auth/signup')
    },
    logout() {
      this.$store.dispatch("auth/logout")
      if (this.isUseDoor) this.$router.push("/Auth/Login")
    },
    onClickBody() {
      this.setSidePanel(this.screenWidth, this.$router.currentRoute.name, this.themeType)
    },
  }
};
</script>
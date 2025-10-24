<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-body height-100-pro text-white" :class="[isMobile ? 'p-l-0 p-r-0' : 'p-l-14 p-r-14', getPageBackColor(themeType)]" style="position:relative; word-break: keep-all;">
      <el-row v-if="themeType == 'orange12' || themeType == 'yellow14' || themeType == 'blue17' || themeType == 'blue13' || themeType == 'red15' || themeType == 'yellow15' || themeType == 'orange14' || themeType == 'yellow11' || themeType == 'yellow12' || themeType == 'red13' || themeType == 'purple12' || themeType == 'yellow16' || themeType == 'red14' || themeType == 'blue12' || themeType == 'blue18' || themeType == 'gold11'">
        <img :src="`/image/banner/${themeType}/${isMobile ? 'pokerm' : 'poker'}.png`" width="100%">
      </el-row>
      <el-row class="p-16 m-t-32 display-flex">
        <div>
          <div style="border-right: 1px solid #fff; display-inline: block;">
            <img :src="'/image/4.png'" :width="isMobile ? 85 : 170" />
          </div>
        </div>
        <div style="flex: 1 1 0px;" :class="isMobile ? 'p-l-12' : 'p-24'">
          <el-row :class="isMobile ? 'f-s-12' : 'f-s-16'">
            프로들을 위한 멀티테이블 지원 & 국내 최대 온라인 포커 네트워크, 국제 규격 규칙을 적용한 정통 홀덤 게임 & 매일매일 진행되는 무료 토너먼트 RNG 인증을 받은 공정성 있는 게임
          </el-row>
          <el-row v-if="!isMobile" class="display-flex m-t-16">
            <div style="float: left;">
              <img :src="'/image/cert.jpg'" width="170" />
            </div>
            <div style="float: left; padding-left: 24px">
              *RNG(Random Number Generator)는 게임에서 추출한 데이터를 분석해 시스템 조작 가능 여부를 판단, 서비스하는 게임에 대하여 게임사의 인위적 개입이 없다는 것을 검증하는 국제 공인 인증 방식입니다. 
            </div>
          </el-row>
        </div>
        <div v-if="!isMobile" style="width: 300px;">
          <el-row>
            <div class="poker-money-btn" :class="`border-1-${themeType}`" style="margin-right: 16px;" @click="onClickDeposit">
              <img :src="'/image/payin.png'" width="20" style="margin-right: 4px;" />포커입금
            </div>
            <div class="poker-money-btn" :class="`border-1-${themeType}`" @click="onClickWithdraw">
              <img :src="'/image/payout.png'" width="20" style="margin-right: 4px;" />포커출금
            </div>
          </el-row>
          <el-row v-if="currentUser" class="poker-money" :class="`border-1-${themeType}`">
            <img :src="'/image/pokercash.png'" width="20" />
            포커캐쉬 잔액: {{currencyFormat(currentUser.cash.pokermoney, "원")}}
          </el-row>
          <div class="poker-play-btn" :class="layoutType == 'layout3' || layoutType == 'layout6' ? `${themeType}1-button` : `${themeType}-button`" @click="onClickPlay">
            <img :src="'/image/pokerplay.png'" width="20" />
            포커 플레이하기
          </div>
        </div>
      </el-row>
      <el-row v-if="isMobile" class="p-16">
        <el-row class="display-flex m-b-16">
          <div class="display-center" style="float: left;">
            <img :src="'/image/cert.jpg'" width="85" />
          </div>
          <div style="float: left; padding-left: 24px">
            *RNG(Random Number Generator)는 게임에서 추출한 데이터를 분석해 시스템 조작 가능 여부를 판단, 서비스하는 게임에 대하여 게임사의 인위적 개입이 없다는 것을 검증하는 국제 공인 인증 방식입니다. 
          </div>
        </el-row>
        <el-row class="p-l-36 p-r-36">
          <el-row>
            <div class="poker-money-btn" :class="`border-1-${themeType}`" style="margin-right: 16px;" @click="onClickDeposit">
              <img :src="'/image/payin.png'" width="20" style="margin-right: 4px;" />포커입금
            </div>
            <div class="poker-money-btn" :class="`border-1-${themeType}`" @click="onClickWithdraw">
              <img :src="'/image/payout.png'" width="20" style="margin-right: 4px;" />포커출금
            </div>
          </el-row>
          <el-row v-if="currentUser" class="poker-money" :class="`border-1-${themeType}`">
            <img :src="'/image/pokercash.png'" width="20" />
            포커캐쉬 잔액: {{currencyFormat(currentUser.cash.pokermoney, "원")}}
          </el-row>
          <div class="poker-play-btn" :class="`${themeType}-button`" @click="onClickPlay">
            <img :src="'/image/pokerplay.png'" width="20" />
            포커 플레이하기
          </div>
        </el-row>
      </el-row>
      <el-row style="background: #11162b; border-radius: 6px; margin-bottom: 36px;" :style="isMobile ? 'padding: 8px;' : 'padding: 36px 16px 16px 16px;'">
        <el-row style="text-align: center; margin-bottom: 36px; font-weight: 900;" :style="isMobile ? 'font-size: 18px;' : 'font-size: 28px;'">
          업계 최고의 모든 기능을 갖춘 포커 시스템
        </el-row>
        <el-row :class="{'display-flex': !isMobile}">
          <div style="flex: 1 1 0px;" class="display-center">
            <img :src="`/image/poker.png`" width="100%">
          </div>
          <div :style="isMobile ? 'width: 100%; text-align: center;' : 'width: 700px; text-align: left;'">
            <el-row class="display-flex" style="gap: 16px;">
              <div :class="{'display-flex': !isMobile}" style="padding: 24px; background: #252c48; border-radius: 6px; gap: 32px; flex: 1;">
                <div class="display-center">
                  <img :src="`/image/rocket.png`" :width="isMobile? '42px' : '70px'">
                </div>
                <div>
                  <el-row style="font-size: 18px; font-weight: 900; line-height: 1.1;" :class="{'m-t-16 m-b-16': isMobile}">
                    <span :class="getTextColor(themeType, 1)">모든 기기</span> 지원
                  </el-row>
                  <el-row v-if="!isMobile">
                    <div style="border-bottom: 1px solid #8b8e9d; width: 36px; margin: 16px 0;"></div>
                  </el-row>
                  <el-row>
                    온라인에 연결되어있다면 언제 어디서나 PC, 태블릿, 모바일 등 원하는 기기로 즐기실 수 있습니다.
                  </el-row>
                </div>
              </div>
              <div :class="{'display-flex': !isMobile}" style="padding: 24px; background: #252c48; border-radius: 6px; gap: 32px; flex: 1;">
                <div class="display-center">
                  <img :src="`/image/trophy.png`" :width="isMobile? '42px' : '70px'">
                </div>
                <div>
                  <el-row style="font-size: 18px; font-weight: 900; line-height: 1.1;" :class="{'m-t-16 m-b-16': isMobile}">
                    <span :class="getTextColor(themeType, 1)">글로벌 유저</span>들이<br>선택한 게임
                  </el-row>
                  <el-row v-if="!isMobile">
                    <div style="border-bottom: 1px solid #8b8e9d; width: 36px; margin: 16px 0;"></div>
                  </el-row>
                  <el-row>
                    전 세계 유저들을 대상으로 한 서비스로 세계 최고의 품질의 안정성과 기술력으로 최적의 플레이 환경을 제공합니다.
                  </el-row>
                </div>
              </div>
            </el-row>
            <el-row class="display-flex m-t-16" style="gap: 16px;">
              <div :class="{'display-flex': !isMobile}" style="padding: 24px; background: #252c48; border-radius: 6px; gap: 32px; flex: 1;">
                <div class="display-center">
                  <img :src="`/image/programming.png`" :width="isMobile? '42px' : '70px'">
                </div>
                <div>
                  <el-row style="font-size: 18px; font-weight: 900; line-height: 1.1;" :class="{'m-t-16 m-b-16': isMobile}">
                    <span :class="getTextColor(themeType, 1)">멀티 테이블</span> 지원
                  </el-row>
                  <el-row v-if="!isMobile">
                    <div style="border-bottom: 1px solid #8b8e9d; width: 36px; margin: 16px 0;"></div>
                  </el-row>
                  <el-row>
                    코어포커에서 지원하는 멀티 테이블 기능은 하나의 디바이스에서 여러개의 포커 테이블을 동시에 플레이할 수 있는 기능입니다.
                  </el-row>
                </div>
              </div>
              <div :class="{'display-flex': !isMobile}" style="padding: 24px; background: #252c48; border-radius: 6px; gap: 32px; flex: 1;">
                <div class="display-center">
                  <img :src="`/image/rocket.png`" :width="isMobile? '42px' : '70px'">
                </div>
                <div>
                  <el-row style="font-size: 18px; font-weight: 900; line-height: 1.1;" :class="{'m-t-16 m-b-16': isMobile}">
                    배팅 사이즈<br><span :class="getTextColor(themeType, 1)">커스터마이징</span>
                  </el-row>
                  <el-row v-if="!isMobile">
                    <div style="border-bottom: 1px solid #8b8e9d; width: 36px; margin: 16px 0;"></div>
                  </el-row>
                  <el-row>
                    배팅 사이즈를 빅블라인드 기준, 팟 기준 등으로 자신만의 플레이 스타일을 설정할 수 있습니다.<br>
                    자주하는 배팅 사이즈를 미리 저장해두고 편하게 사용가능합니다.
                  </el-row>
                </div>
              </div>
            </el-row>
          </div>
        </el-row>
        <el-row style="background: #252c48; border-radius: 6px; padding: 8px; margin-top: 24px;">
          <el-row class="display-flex" style="gap: 16px;">
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/bethard-logo-300x202.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/Unibet_Logo-300x78.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/mrg_logo-400px-300x239.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/global-logo.png`" width="100%">
            </div>
            <div v-if="!isMobile" class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/logo-bet88.png`" width="100%">
            </div>
            <div v-if="!isMobile" class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/leo.png`" width="100%">
            </div>
            <div v-if="!isMobile" class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/21HeadsUp_TheJoker_Vertikal_GreenBG-300x300.png`" width="100%">
            </div>
            <div v-if="!isMobile" class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/nitrogen_logo_optimized-300x105.png`" width="100%">
            </div>
          </el-row>
          <el-row v-if="isMobile" class="display-flex m-t-16" style="gap: 16px;">
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/logo-bet88.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/leo.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/21HeadsUp_TheJoker_Vertikal_GreenBG-300x300.png`" width="100%">
            </div>
            <div class="display-center" style="flex: 1;" :class="{'p-16': !isMobile}">
              <img :src="`/image/poker/nitrogen_logo_optimized-300x105.png`" width="100%">
            </div>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Preview from '~/components/Auth/Preview.vue'
import { getPageBackColor, getTextColor } from '~/assets/js/data/uicommon.js'
import PageHeader from '~/components/Header/PageHeader'
import { currencyFormat } from "@/assets/js/utils";

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    PageHeader,
    Preview       // 로그인유도 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      layoutType: 'getLayoutType',
      isUsePoker: "getIsUsePoker",
      themeType: "getThemeType"
    })
  },
  data() {
    return {
      pokerId: process.env.pokerID
    }
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {    
		this.$store.commit('SET_CURRENTPAGENAME', 'Poker')
  },
  methods: {
    currencyFormat,
    getPageBackColor,
    getTextColor,
    onClickDeposit() {
      if (!this.isUsePoker) {
        this.showMessage('알림메시지', "점검중 입니다.", '닫기[Close]', 2)
        return
      }
      this.$store.commit('SET_POKERREDIRECT', true)
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
    },
    onClickWithdraw() {
      if (!this.isUsePoker) {
        this.showMessage('알림메시지', "점검중 입니다.", '닫기[Close]', 2)
        return
      }
      this.$store.commit('SET_POKERREDIRECT', true)
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
    },
    onClickPlay() {
      if (!this.isUsePoker) {
        this.showMessage('알림메시지', "점검중 입니다.", '닫기[Close]', 2)
        return
      }
      if (!this.currentUser) {
        this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
        return
      }
      if (this.currentUser.levelType != 'user') {
        this.showMessage('알림메시지', "테스트 회원으로는 이용이 불가합니다.", '닫기[Close]', 2)
        return
      }

      var windowReference = window.open();
      windowReference.location = `https://poker.sportcore-games.com/poker-client/poker/login/${this.pokerId}/${this.currentUser.casinoUserID}`;
      //windowReference.location = `https://poker-test-public-lb.cubeia.com/poker-client/poker/login/${this.pokerId}/${this.currentUser.casinoUserID}`;
    },
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
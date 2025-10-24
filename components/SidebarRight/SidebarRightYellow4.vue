<template>
  <client-only>
    <div>
      <!-- begin #sidebar-right -->
      <div v-if="showRightPanelYellow4" id="sidebar-right" class="sidebar sidebar-right sidebar-grid" :class="`sub-right-menu-${themeType}`">
        <!-- begin sidebar scrollbar -->
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
          <div style="overflow: hidden; width: auto; height: 100%; width: 100%;">
            <el-scrollbar style="height: 100%">
              <el-row v-if="currentUser && (themeType == 'yellow20' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow18' || themeType == 'yellow21' || themeType == 'yellow16' || themeType == 'yellow15')" class="p-8">
                <el-row class="p-4" style="background: #0b0d10; border-radius: 4px;">
                  <el-row>
                    <el-col :span="12" class="display-center f-s-14 b-r-6 p-8" style="background: #14161b;">
                      <el-row>
                        <el-row>
                          <div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
                        </el-row>
                        <el-row v-if="themeType != 'yellow15'" class="text-white f-s-10 text-center">
                          LV. {{getLevel()}}
                        </el-row>
                      </el-row>
                    </el-col>
                    <el-col :span="12" class="text-right">
                      <el-row class="f-s-11 text-grey3">
                        ID
                      </el-row>
                      <el-row class="text-white">
                        {{currentUser.userLoginId}}
                      </el-row>
                      <el-row class="m-t-15 f-s-11 text-grey3">닉네임</el-row>
                      <el-row :class="`text-${themeType}`">{{currentUser.nickname}}</el-row>
                    </el-col>
                  </el-row>
                </el-row>
              </el-row>
              <!-- right menu -->
              <div id="rightmenu" class="text-white p-l-16 p-r-16" :class="{'f-s-14 f-w-900': layoutType == 'layout5', 'p-t-16': layoutType == 'layout6'}">
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Money-PayIn'}]" @click="goToPage('payin')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/payin-on.png`" width="20" id="img-payin">
                  <div class="float-left">입금</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Money-PayOut'}]" @click="goToPage('payout')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/payout-on.png`" width="20" id="img-payout">
                  <div class="float-left">출금</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Money-MoneyMove'}]" @click="goToPage('money-move')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/moneymove-on.png`" width="20" id="img-moneymove">
                  <div class="float-left">머니이동</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Customer'}]" @click="goToPage('customer-center')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/customer-on.png`" width="20" id="img-customer">
                  <div class="float-left">문의</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Note'}]" @click="goToPage('note')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/note-on.png`" width="20" id="img-note">
                  <div class="float-left">쪽지함</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Event'}]" @click="goToPage('event')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/event-on.png`" width="20" id="img-event">
                  <div class="float-left">이벤트</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Attendance'}]" @click="goToPage('attendance')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/attendance-on.png`" width="20" id="img-attendance">
                  <div class="float-left">출석현황</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Friend'}]" @click="goToPage('friend')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/friend-on.png`" width="20" id="img-friend">
                  <div class="float-left">지인추천</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div v-if="themeType == 'yellow17'" :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Fame'}]" @click="goToPage('fame')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/fame-on.png`" width="20" id="img-fame">
                  <div class="float-left">명예의전당</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Notice'}]" @click="goToPage('notice-rule')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/notice-on.png`" width="20" id="img-notice">
                  <div class="float-left">공지/규정</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name.indexOf('BettingHistory-') > -1}]" @click="goToPage('bethistory')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/betting-history-on.png`" width="20" id="img-betting">
                  <div class="float-left">배팅내역</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Money-CashHistory'}]" @click="goToPage('cash')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/cash-history-on.png`" width="20" id="img-cash">
                  <div class="float-left">캐쉬내역</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Coupon'}]" @click="goToPage('coupon')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/coupon-on.png`" width="20" id="img-coupon">
                  <div class="float-left">쿠폰/포인트</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
								<div v-if="themeType == 'yellow20'" :class="[`right-menu-${themeType}`, {'on': layoutType == 'layout6' && $router.currentRoute.name == 'Fame'}]" @click="goToPage('fame')">
                  <img class="float-left m-r-10" :src="`/image/Home/${themeType}/fame-on.png`" width="20" id="img-fame">
                  <div class="float-left">명예의전당</div>
                  <img :src="`/image/Home/${themeType}/arrow-left.png`" class="float-right m-t-2" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 14 : 16">
                </div>
                <div v-if="currentUser" class="width-full p-t-8 p-b-8 bg-black29 display-center b-r-6 m-t-16 cursor" @click="logout()">
                  <img :src="`/image/Home/${themeType}/logout.png`" :width="layoutType == 'layout3' || layoutType == 'layout6' ? 16 : 28">로그아웃
                </div>
                <div v-else class="width-full p-t-8 p-b-8 bg-black29 display-center b-r-6 m-t-16 cursor" @click="onClickLogin()">
                  로그인
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
        <!-- end sidebar scrollbar -->
      </div>
      <div
        v-if="showRightPanelYellow4 && isMobile"
        class="position-absolute width-full height-full"
        style="background-color: rgba(0, 0, 0, 0.6); z-index: 1030; left: 0; touch-action: none; top: 57px;"
        @click="onClickShowRightPanel"
      ></div>
      <!-- end #sidebar-right -->
    </div>
  </client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { getBackColor, getPageBackColor } from "@/assets/js/data/uicommon"
import { filterOdds } from "~/assets/js/utils";
import Chat from "~/components/Chat.vue";
import LoginSide from "~/components/Auth/LoginSide"

export default {
  props: ["isVisibleLogin"],
  name: "login",
  components: {
		Chat,
    LoginSide
  },
  filters: {
    filterOdds
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      showRightPanelYellow4: "getShowRightPanelYellow4",
      screenWidth: "getScreenWidth",
      isLogined: "auth/getIsLogined",
      isChangeBetSlip: "sports/getIsChangeBetSlip",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      canChat: "getCanChat",
      isUseDoor: "getIsUseDoor",
      lowOddsStandard: "getLowOddsStandard",
      layoutType: "getLayoutType"
    }),
  },
  data() {
    return {
      userLevelImageList: {
        orange11: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
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
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow20: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow18: [
          {
            avatar: "level-avatar-grey-1",
            number: "level-number-grey-1",
          },
          {
            avatar: "level-avatar-grey-2",
            number: "level-number-grey-2",
          },
          {
            avatar: "level-avatar-grey-3",
            number: "level-number-grey-3",
          },
          {
            avatar: "level-avatar-grey-4",
            number: "level-number-grey-4",
          },
          {
            avatar: "level-avatar-grey-5",
            number: "level-number-grey-5",
          },
          {
            avatar: "level-avatar-grey-6",
            number: "level-number-grey-6",
          },
          {
            avatar: "level-avatar-grey-7",
            number: "level-number-grey-7",
          },
          {
            avatar: "level-avatar-grey-8",
            number: "level-number-grey-8",
          },
          {
            avatar: "level-avatar-grey-9",
            number: "level-number-grey-9",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          }
        ],
        yellow21: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow16: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow15: [
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow15-vip",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow15-vip",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow15-mvp",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow15-first",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow15-first",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-20",
          }
        ],
        purple11: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        red13: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue12: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow19: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        purple12: [
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
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue14: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          }
        ],
        blue16: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        blue17: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow13: [
          {
            avatar: "level-avatar-yellow13-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow13-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow13-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow13-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow13-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow13-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow13-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow13-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow13-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          }
        ],
        red15: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          }
        ],
        white: [
          {
            avatar: "level-avatar-white-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-white-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-white-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-white-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-white-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-white-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-white-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-white-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-white-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          }
        ],
        gold12: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-gold12-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-gold12-5",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        gold11: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        blue13: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        gold13: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow11: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow14: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ]
      },
      betMoney: 0,
      isChangeBet: false,
    };
  },
  watch: {
    isChangeBetSlip(val) {
      this.isChangeBet = true;
    },
  },
  methods: {
    getBackColor,
    getPageBackColor,
    getLevel() {
      if (this.currentUser) {
        let level = this.currentUser.level
        if (this.layoutType == 'layout2' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
          if (level >= 6 && level <= 10) {
            level -= 5
          }
          if (level >= 11 && level <= 15) {
            level -= 10
          }
        }
        if (level < 10) {
          return '0' + level
        } else {
          return level
        }
      }
    },
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    onClickShowRightPanel() {
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", false);
    },
    onClickBody() {
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", false);
    },
    // 로그아웃
    logout() {
      this.$store.dispatch("auth/logout");
      if (this.isUseDoor) this.$router.push("/Auth/Login")
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", false);
    },
    onClickLogin() {
      this.$store.commit("SET_LOGINDIALOGVISIBLE");
      this.$store.commit("SET_LOGINSIDEVERIFY", false)
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", false);
    },
    // 페이지 이동
    goToPage(val, type) {
      switch (val) {
        case "payin":
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
          break;
        case "payout":
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
          break;
        case "customer-center":
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
          break;
        case "note":
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
          break;
        case "attendance":
          this.$router.push("/Attendance")
          break;
        case "friend":
          this.$router.push("/Friend")
          break;
        case "fame":
          this.$router.push("/Fame")
          break;
        case "bethistory":
          if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 5)
							this.$store.commit('SET_BETTINGHISTORYTAB', 'sports')
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      				this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
          	this.$router.push("/BettingHistory/Sports")
          }
          break;
				case 'money-move':
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
				case 'event':
					this.$router.push("/Event")
					break
				case 'notice-rule':
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
				case 'cash':
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
					break;
				case 'coupon':
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
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
					break;
      }
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", false);
    }
  },
};
</script>
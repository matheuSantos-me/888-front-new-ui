<template>
  <el-row id="app" ref="app" :class="`bg-back-${themeType}`">
    <el-scrollbar class="body-scroll" id="bodyScrollBarId" ref="bodyScrollBar">
      <audio ref="audioNoteElem">
        <source
          :src="
            themeType == 'orange11' ? '/music/memo2.mp3' : '/music/machuja.mp3'
          "
          type="audio/mpeg"
          muted
        />
      </audio>

      <audio ref="audioCustomerElem">
        <source
          :src="
            themeType == 'orange11'
              ? '/music/customer.wav'
              : '/music/machuja.mp3'
          "
          type="audio/wav"
        />
      </audio>

      <el-row>
        <el-col :span="24" id="mainBox" ref="mainBox">
          <div class="app-wrapper">
            <el-container direction="vertical" style="height: auto">
              <Header />

              <div class="layout-root">
                <Sidebar class="sidebar-fixed" />

                <div class="main-content-area">
                  <ClientMainView />
                </div>
              </div>

              <!-- <div id="page-container" class="page-header-fixed page-sidebar-fixed page-with-two-sidebar in">
                <Header></Header>
                <ClientHeadbar></ClientHeadbar>
                <Sidebar v-if="(themeType != 'green' && !isMobile) || isMobile"></Sidebar>
                <SidebarRight v-if="themeType != 'green'"></SidebarRight>
                <SidebarRightYellow4 v-if="(layoutType == 'layout3' && isMobile) || layoutType == 'layout5' || layoutType == 'layout6'"></SidebarRightYellow4>
                
                <MobileTab></MobileTab>

              </div> -->
            </el-container>
          </div>
        </el-col>

        <!-- <MobileNavigation></MobileNavigation> -->
      </el-row>

      <Recaptcha v-if="isUseRecaptcha || isUseLoginRecaptcha" />

      <div class="stickybox" id="stickybox" style="bottom: -8px">
        <div
          v-if="noteCount > 0"
          class="f-s-12 p-7 p-b-15 height-full width-full"
          style="
            border: 1px solid #506c9e;
            background: #121619;
            text-align: left;
            vertical-align: top;
            border-radius: 5px;
          "
          @click="viewNoteList"
        >
          <div class="width-full m-b-5 p-5 bg-black4 text-center">
            <span class="text-white">
              <strong>
                <i class="fa fa-star text-red905"></i> 알람 내용 확인하세요
                <i class="fa fa-star text-red905"></i>
              </strong>
            </span>
          </div>

          <div
            class="v-box2-orange11 p-5 width-170 text-warning"
            id="stickyinner"
          >
            <div class="clear-both width-full height-full cursor">
              <span>
                <i class="fa fa-envelope fa-4x text-info f-s-80 m-b-5"></i>
                <br />
                쪽지가 {{ noteCount }}통 도착했습니다.
              </span>
            </div>
          </div>
        </div>

        <div
          v-if="custmerCount > 0"
          class="f-s-12 p-7 p-b-15 height-full width-full m-t-12"
          style="
            border: 1px solid #506c9e;
            background: #121619;
            text-align: left;
            vertical-align: top;
            border-radius: 5px;
          "
          @click="viewCustomerList"
        >
          <div class="width-full m-b-5 p-5 bg-black4 text-center">
            <span class="text-white">
              <strong>
                <i class="fa fa-star text-red905"></i> 알람 내용 확인하세요
                <i class="fa fa-star text-red905"></i>
              </strong>
            </span>
          </div>

          <div
            class="v-box2-orange11 p-5 width-170 text-warning"
            id="stickyinner"
          >
            <div class="clear-both width-full height-full cursor">
              <span>
                <i class="fa fa-edit fa-4x text-primary f-s-80 m-t-5"></i>
                <br />1:1문의 답변이 등록됬습니다.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="!this.showRightPanel && betSlipList.length > 0"
        class="stickybox width-100"
        id="betslip-icon"
        style="bottom: 10px; left: calc(50% - 50px)"
        @click="onClickBetSlip"
      >
        <img
          :src="`/image/Home/menu/slip-${themeType}.png`"
          width="100px"
          class="cursor"
        />
        <span
          class="position-absolute f-s-16"
          :class="
            themeType == 'yellow13' || themeType == 'blue14'
              ? 'text-black'
              : 'text-white'
          "
          style="right: 23px; bottom: 10px"
        >
          {{ betSlipList.length }}
        </span>
      </div>
    </el-scrollbar>

    <div v-if="themeType == 'yellow21' && !currentUser">
      <script>
        window.__lc = window.__lc || {};
        window.__lc.license = 17953341;
        (function (n, t, c) {
          function i(n) {
            return e._h ? e._h.apply(null, n) : e._q.push(n);
          }
          var e = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              i(["on", c.call(arguments)]);
            },
            once: function () {
              i(["once", c.call(arguments)]);
            },
            off: function () {
              i(["off", c.call(arguments)]);
            },
            get: function () {
              if (!e._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return i(["get", c.call(arguments)]);
            },
            call: function () {
              i(["call", c.call(arguments)]);
            },
            init: function () {
              var n = t.createElement("script");
              (n.async = !0),
                (n.type = "text/javascript"),
                (n.src = "https://cdn.livechatinc.com/tracking.js"),
                t.head.appendChild(n);
            },
          };
          !n.__lc.asyncInit && e.init(),
            (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);
      </script>

      <noscript
        ><a href="https://www.livechat.com/chat-with/17953341/" rel="nofollow"
          >Chat with us</a
        >, powered by
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          >LiveChat</a
        ></noscript
      >
    </div>

    <div v-if="themeType == 'yellow15' && !currentUser">
      <script>
        window.__lc = window.__lc || {};
        window.__lc.license = 15402858;
        window.__lc.integration_name = "manual_channels";
        window.__lc.product_name = "livechat";
        (function (n, t, c) {
          function i(n) {
            return e._h ? e._h.apply(null, n) : e._q.push(n);
          }
          var e = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              i(["on", c.call(arguments)]);
            },
            once: function () {
              i(["once", c.call(arguments)]);
            },
            off: function () {
              i(["off", c.call(arguments)]);
            },
            get: function () {
              if (!e._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return i(["get", c.call(arguments)]);
            },
            call: function () {
              i(["call", c.call(arguments)]);
            },
            init: function () {
              var n = t.createElement("script");
              (n.async = !0),
                (n.type = "text/javascript"),
                (n.src = "https://cdn.livechatinc.com/tracking.js"),
                t.head.appendChild(n);
            },
          };
          !n.__lc.asyncInit && e.init(),
            (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);
      </script>
      <noscript
        ><a href="https://www.livechat.com/chat-with/15402858/" rel="nofollow"
          >Chat with us</a
        >, powered by
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          >LiveChat</a
        ></noscript
      >
    </div>

    <div v-if="themeType == 'red15' && !currentUser">
      <script>
        window.__lc = window.__lc || {};
        window.__lc.license = 15451941;
        (function (n, t, c) {
          function i(n) {
            return e._h ? e._h.apply(null, n) : e._q.push(n);
          }
          var e = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              i(["on", c.call(arguments)]);
            },
            once: function () {
              i(["once", c.call(arguments)]);
            },
            off: function () {
              i(["off", c.call(arguments)]);
            },
            get: function () {
              if (!e._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return i(["get", c.call(arguments)]);
            },
            call: function () {
              i(["call", c.call(arguments)]);
            },
            init: function () {
              var n = t.createElement("script");
              (n.async = !0),
                (n.type = "text/javascript"),
                (n.src = "https://cdn.livechatinc.com/tracking.js"),
                t.head.appendChild(n);
            },
          };
          !n.__lc.asyncInit && e.init(),
            (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);
      </script>

      <noscript
        ><a href="https://www.livechat.com/chat-with/15451941/" rel="nofollow"
          >Chat with us</a
        >, powered by
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          >LiveChat</a
        ></noscript
      >
    </div>

    <div v-if="themeType == 'yellow14' && !currentUser">
      <script>
        window.__lc = window.__lc || {};
        window.__lc.license = 15402762;
        (function (n, t, c) {
          function i(n) {
            return e._h ? e._h.apply(null, n) : e._q.push(n);
          }
          var e = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              i(["on", c.call(arguments)]);
            },
            once: function () {
              i(["once", c.call(arguments)]);
            },
            off: function () {
              i(["off", c.call(arguments)]);
            },
            get: function () {
              if (!e._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return i(["get", c.call(arguments)]);
            },
            call: function () {
              i(["call", c.call(arguments)]);
            },
            init: function () {
              var n = t.createElement("script");
              (n.async = !0),
                (n.type = "text/javascript"),
                (n.src = "https://cdn.livechatinc.com/tracking.js"),
                t.head.appendChild(n);
            },
          };
          !n.__lc.asyncInit && e.init(),
            (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);
      </script>

      <noscript
        ><a href="https://www.livechat.com/chat-with/15402762/" rel="nofollow"
          >Chat with us</a
        >, powered by
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          >LiveChat</a
        ></noscript
      >
    </div>

    <div v-if="themeType == 'gold12' && !currentUser">
      <script>
        window.__lc = window.__lc || {};
        window.__lc.license = 15402858;
        (function (n, t, c) {
          function i(n) {
            return e._h ? e._h.apply(null, n) : e._q.push(n);
          }
          var e = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              i(["on", c.call(arguments)]);
            },
            once: function () {
              i(["once", c.call(arguments)]);
            },
            off: function () {
              i(["off", c.call(arguments)]);
            },
            get: function () {
              if (!e._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return i(["get", c.call(arguments)]);
            },
            call: function () {
              i(["call", c.call(arguments)]);
            },
            init: function () {
              var n = t.createElement("script");
              (n.async = !0),
                (n.type = "text/javascript"),
                (n.src = "https://cdn.livechatinc.com/tracking.js"),
                t.head.appendChild(n);
            },
          };
          !n.__lc.asyncInit && e.init(),
            (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);
      </script>

      <noscript
        ><a href="https://www.livechat.com/chat-with/15402858/" rel="nofollow"
          >Chat with us</a
        >, powered by
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          >LiveChat</a
        ></noscript
      >
    </div>
  </el-row>
</template>

<script>
import "@/assets/css/style.scss";
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import ClientHeadbar from "~/components/Header/Headbar.vue";
// import Sidebar from "~/components/Sidebar/Sidebar.vue";
import Sidebar from "~/components/NewComponents/Sidebar";
import SidebarRight from "~/components/SidebarRight/SidebarRight.vue";
import MobileNavigation from "~/components/MobileNavigation";
import SidebarRightYellow4 from "~/components/SidebarRight/SidebarRightYellow4.vue";
import MobileTab from "~/components/Mini/MobileTab.vue";
import ClientMainView from "~/components/MainView.vue";
import Header from "~/components/NewComponents/Header";
import jQuery from "jquery";
import { throttle } from "throttle-debounce";
import Recaptcha from "~/components/Auth/Recaptcha";

const mainService = feathers.service("/main");
const noteClientService = feathers.service("client_note");
const customerService = feathers.service("client-customercenter");
const casinoBalanceService = feathers.service("getBalanceGame");
noteClientService.timeout = 60000;
customerService.timeout = 60000;
casinoBalanceService.timeout = 60000;

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: this.siteTitle,
      htmlAttrs: {
        translate: "no",
      },
    };
  },
  components: {
    Header,
    ClientHeadbar,
    Sidebar,
    SidebarRight,
    SidebarRightYellow4,
    ClientMainView,
    MobileTab,
    Recaptcha,
    MobileNavigation,
  },
  computed: {
    ...mapGetters({
      showLeftPanel: "getShowLeftPanel",
      currentUser: "auth/currentUser",
      isCollapse: "getIsClientCollapsed",
      isMobile: "getIsMobile",
      noteCount: "getNoteCount",
      isUseNoteRead: "getIsUseNoteRead",
      turnOnSound: "getTurnOnSound",
      betSlipList: "betslip/getBetSlipList",
      showRightPanel: "getShowRightPanel",
      custmerCount: "getCustmerCount",
      isLogined: "auth/getIsLogined",
      isBetCounting: "sports/getIsBetCounting",
      themeType: "getThemeType",
      isUseDoor: "getIsUseDoor",
      siteTitle: "getSiteTitle",
      isUseRecaptcha: "getIsUseRecaptcha",
      isUseLoginRecaptcha: "getIsUseLoginRecaptcha",
      layoutType: "getLayoutType",
      isUseAlarm: "getIsUseAlarm",
    }),
  },
  watch: {
    isCollapse() {
      this.onCollapse();
    },
    noteCount(val) {
      if (val === 0) {
        // 쪽지를 다 읽은 경우
        if (this.soundNote) {
          clearInterval(this.soundNote);
          this.soundNote = null;
        }
        this.stopSoundNote();
      } else {
        // 읽지 않은 쪽지가 있을 경우
        if (!this.soundNote) {
          this.soundNote = setInterval(() => {
            this.playSoundNote();
          }, 3000);
          setTimeout(() => {
            clearInterval(this.soundNote);
            this.soundNote = null;
            if (!this.isUseNoteRead) {
              this.$store.commit("SET_NOTECOUNT", 0);
            }
          }, 15000);
        }
      }
    },
    custmerCount(val) {
      if (val <= 0) {
        // 문의를 다 읽은 경우
        if (this.soundCustomer) {
          clearInterval(this.soundCustomer);
          this.soundCustomer = null;
        }
        this.stopSoundCustomer();
      } else {
        // 읽지 않은 문의가 있을 경우
        if (!this.soundCustomer) {
          this.soundCustomer = setInterval(() => {
            this.playSoundCustomer();
          }, 3000);
          setTimeout(() => {
            clearInterval(this.soundCustomer);
            this.soundCustomer = null;
            this.$store.commit("SET_CUSTOMERCOUNT", 0);
          }, 15000);
        }
      }
    },
    turnOnSound(val) {
      if (!val) {
        this.stopSoundNote();
        this.stopSoundCustomer();
      }
    },
    isLogined(val) {
      this.myResizeFunc();
      if (!val) {
        this.$store.commit("SET_NOTECOUNT", 0);
        this.$store.commit("SET_CUSTOMERCOUNT", 0);
        if (this.soundNote) {
          clearInterval(this.soundNote);
          this.soundNote = null;
        }
        if (this.soundCustomer) {
          clearInterval(this.soundCustomer);
          this.soundCustomer = null;
        }
      } else {
        let loader = document.getElementById("chat-widget-container");
        if (loader) loader.style.visibility = "hidden";
        this.getNoteCount();
        this.getCustomerCount();
      }
    },
    $route() {
      this.toTop();
      this.myResizeFunc();
    },
    showLeftPanel() {
      if (this.layoutType != "layout2") return;
      this.myResizeFunc();
    },
  },
  destroyed() {
    if (this.soundNote) clearInterval(this.soundNote);
    if (this.soundCustomer) clearInterval(this.soundCustomer);
  },
  mounted() {
    // 페이지상단가기
    this.bodyScrollBar = this.$refs.bodyScrollBar;
    this.bodyScrollBox = this.bodyScrollBar.$el.querySelector(
      ".el-scrollbar__wrap"
    );
    this.scrollbarReset = throttle(300, () => {
      this.bodyScrollBar.update();
    });

    window.addEventListener("resize", this.scrollbarReset);
    window.addEventListener("resize", this.myResizeFunc);
    this.myResizeFunc();

    if (this.isMobile) {
      window.onfocus = () => {
        if (this.interval) {
          clearInterval(this.interval);
        }
        if (this.inactiveTime > 120) {
          this.inactiveTime = 0;
          if (
            this.currentUser &&
            this.$router.currentRoute.name !== "Casino" &&
            this.$router.currentRoute.name !== "Mini-BetEast" &&
            !this.isBetCounting
          ) {
            this.$nuxt.$loading.start();
            window.location.reload(true);
          }
        }
      };
      window.onblur = () => {
        if (this.inactiveTime > 120) {
          if (
            this.currentUser &&
            this.$router.currentRoute.name !== "Casino" &&
            this.$router.currentRoute.name !== "Mini-BetEast" &&
            !this.isBetCounting
          ) {
            this.$nuxt.$loading.start();
            window.location.reload(true);
          }
        } else {
          this.inactiveTime = 0;
          if (this.interval) {
            clearInterval(this.interval);
          }
          this.interval = setInterval(() => {
            this.inactiveTime++;
            if (this.inactiveTime > 300) {
              if (
                this.currentUser &&
                this.$router.currentRoute.name !== "Casino" &&
                this.$router.currentRoute.name !== "Mini-BetEast" &&
                !this.isBetCounting
              ) {
                this.$nuxt.$loading.start();
                window.location.reload(true);
              }
            }
          }, 1000);
        }
      };
    }

    // 게임셋팅패치
    mainService.on("gameSettingPatched", (data) => {
      this.$store.commit("SET_GAMESETTINGS", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGamePowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNtryPLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNtryKLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNtrySpeedKenoBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameEOSPowerBall1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameEOSPowerBall2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameEOSPowerBall3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameEOSPowerBall4Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameEOSPowerBall5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetEastFootballBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedFX1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedFX2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedFX3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedFX4Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedFX5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedRacingBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedPowerBall3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedPowerBall5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedLadder3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedLadder5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedRedPowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameNamedRedLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSurePowerBall1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSurePowerBall2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSurePowerBall3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureLadder1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureLadder2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureLadder3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureRacing1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureRacing2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameSureRacing3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameCompanionSpeedKenoBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameCompanionKenoLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameCompanionPowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameCompanionPowerLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenPowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenRoulleteBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenHiloBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenHilo5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenGraphBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenBaccaratBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenHorseBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenWheelBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenRacing3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameTokenRacing4Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameLivescorePowerFreeKickBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameLivescoreSpeedHomeRunBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameLivescorePowerSpeedDunkBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBubblePowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBubbleLadderBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBoscoreLadder1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBoscoreLadder2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBoscoreLadder3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBoscorePowerBallBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameLotusBaccarat1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameLotusEvenOddBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameMGMBaccarat1Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameMGMBaccarat2Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameMGMBaccarat3Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameMGMEvenOddBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameMGMGoStopBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameDiceDuelBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameWheelBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameLucky7Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameLucky6Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameLucky5Bet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameBaccaratBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGamePokerBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });
    // 파워볼 배팅가능상태 패치
    mainService.on("miniGameBetGameBetBet", (data) => {
      this.$store.commit("SET_MiniBet", data);
    });

    // 유저정보패치
    mainService.off("userPatched");
    mainService.on("userPatched", (userInfo) => {
      if (!this.currentUser) return;
      if (this.currentUser.userLoginId === userInfo.userLoginId) {
        if (userInfo.state !== 1) {
          if (userInfo.state == -1) {
            this.$store.dispatch("auth/logout");
          } else {
            window.location.reload(true);
          }
          if (this.isUseDoor) this.$router.push("/Auth/Login");
        } else {
          this.$store.commit("auth/SET_USER", userInfo);
        }
      }
    });
    // 유저머니패치
    mainService.off("MoneyUpdate");
    mainService.on("MoneyUpdate", (userInfo) => {
      if (!this.currentUser) return;
      if (this.currentUser._id === userInfo._id) {
        this.$store.commit("auth/SET_USER_CASH", userInfo.cash);
      }
    }),
      // 쪽지창조
      mainService.off("noteCreated");
    mainService.on("noteCreated", (response) => {
      if (!this.currentUser) return;
      if (
        response.sendType === 1 &&
        response.receiverLoginId.findIndex(
          (id) => id == this.currentUser.userLoginId
        ) > -1
      ) {
        this.$store.commit("SET_NOTECOUNT", this.noteCount + 1);
        this.$store.commit("SET_NEWNOTE", response);
      } else if (response.sendType === 0) {
        this.$store.commit("SET_NOTECOUNT", this.noteCount + 1);
        this.$store.commit("SET_NEWNOTE", response);
      } else if (
        response.sendType === 2 &&
        response.receiverLevel === this.currentUser.level
      ) {
        this.$store.commit("SET_NOTECOUNT", this.noteCount + 1);
        this.$store.commit("SET_NEWNOTE", response);
      }
    });
    // 쪽지창조
    mainService.off("noteCreatedBonus");
    mainService.on("noteCreatedBonus", () => {
      if (!this.currentUser) return;
      this.$store.commit("SET_NOTECOUNT", this.noteCount + 1);
    });
    // 쪽지삭제
    mainService.off("noteRemoved");
    mainService.on("noteRemoved", () => {
      if (!this.currentUser) return;
      this.getNoteCount();
    });

    // 입출금규정 패치
    mainService.off("paySettingPatched");
    mainService.on("paySettingPatched", (patchData) => {
      this.$store.commit("SET_BONUSROLLING", patchData);
    });

    // 탑경기 및 리그 패치
    mainService.off("topListPatched");
    mainService.on("topListPatched", (patchData) => {
      this.$store.commit("SET_TOPGAMELIST", patchData.topGameList);
      this.$store.commit("SET_TOPLEAGUELIST", patchData.topLeagueList);
    });

    mainService.on("customerPatched", (data) => {
      if (
        data.userLoginId === this.currentUser.userLoginId &&
        data.answered &&
        !data.isRead
      ) {
        this.$store.commit("SET_CUSTOMERCOUNT", this.custmerCount + 1);
      }
    });

    if (this.currentUser) {
      this.refreshCasinoMoney();
      this.getNoteCount();
      this.getCustomerCount();
    }

    this.initVerticalCentral();
    this.trackerFunction();

    // Atualiza dinamicamente a largura da sidebar no CSS root
    this.updateSidebarWidth();

    window.addEventListener("resize", this.updateSidebarWidth);

    // Observa mudanças diretas no tamanho da Sidebar (ex: animação, collapse)
    const sidebarEl = this.$el.querySelector(".sidebar-fixed");
    if (sidebarEl) {
      this.sidebarObserver = new ResizeObserver(() => {
        this.updateSidebarWidth();
      });
      this.sidebarObserver.observe(sidebarEl);
    }
  },
  destroyed() {
    if (this.sidebarObserver) {
      this.sidebarObserver.disconnect();
      this.sidebarObserver = null;
    }

    window.removeEventListener("resize", this.updateSidebarWidth);
    window.removeEventListener("resize", this.scrollbarReset);
    window.removeEventListener("resize", this.myResizeFunc);
    mainService.off("userPatched");
    mainService.off("MoneyUpdate");
    mainService.off("noteCreated");
    mainService.off("noteCreatedBonus");
    mainService.off("noteRemoved");
    mainService.off("customerPatched");
    mainService.off("paySettingPatched");
    mainService.off("topListPatched");
  },
  data() {
    return {
      intervalCustomCenter: null,
      scrollTop: 0,
      counter: 0,
      soundNote: null,
      soundCustomer: null,
      interval: null,
      inactiveTime: 0,
      showBackToTop: false,
      hover: false,
      bodyScrollBar: null,
    };
  },
  methods: {
    updateSidebarWidth() {
      this.$nextTick(() => {
        const sidebarEl = this.$el.querySelector(".sidebar-fixed");
        if (sidebarEl) {
          const width = window.getComputedStyle(sidebarEl).width;
          document.documentElement.style.setProperty("--sidebar-width", width);
        }
      });
    },

    async refreshCasinoMoney() {
      //카지노 금액 업데이트
      let resBalance = await casinoBalanceService.find().catch((err) => {
        console.log(err.message);
      });
      if (resBalance.code != 1) {
        console.log(resBalance.message);
      }
    },
    toTop() {
      this.hover = false;
      this.showBackToTop = false;
      this.bodyScrollBox.scrollTop = 0;
    },
    initVerticalCentral() {
      var time = 0;
      var repeatTimer = function (time) {
        jQuery("#main").css(
          "margin-top",
          jQuery("#cheadbarMobileId").height() + "px"
        );
        if (time == 100) return;
        setTimeout(repeatTimer, 50, time + 50);
      };
      repeatTimer(time);
    },
    playSoundNote() {
      if (!this.turnOnSound || !this.isUseAlarm) return;
      let audio = this.$refs.audioNoteElem;
      if (audio) {
        audio.muted = false;
        audio.play().catch((err) => {
          console.log(err.message);
        });
      }
    },
    stopSoundNote() {
      let audio = this.$refs.audioNoteElem;
      if (audio) {
        audio.pause();
      }
    },
    playSoundCustomer() {
      if (!this.turnOnSound || !this.isUseAlarm) return;
      let audio = this.$refs.audioCustomerElem;
      if (audio) {
        audio.muted = false;
        audio.play().catch((err) => {
          console.log(err.message);
        });
      }
    },
    stopSoundCustomer() {
      let audio = this.$refs.audioCustomerElem;
      if (audio) {
        audio.pause();
      }
    },
    myResizeFunc() {
      // 화면 사이즈 저장
      this.$store.commit(
        "SET_CLIENT_SCREENWIDTH",
        this.$refs.mainBox.$el.clientWidth
      );
      this.$store.commit(
        "SET_CLIENT_SCREENHEIGHT",
        this.$refs.app.$el.clientHeight
      );
      // 오른쪽 마진 설정
      if (this.layoutType == "layout2") {
        if (this.$refs.mainBox.$el.clientWidth <= 1080) {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "0px");
        } else {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "289px");
        }
      } else if (this.layoutType == "layout3" || this.layoutType == "layout6") {
        if (this.$refs.mainBox.$el.clientWidth <= 1080) {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "0px");
        } else {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "310px");
        }
      } else if (this.layoutType == "layout5") {
        if (this.$refs.mainBox.$el.clientWidth <= 1080) {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "0px");
          // this.$store.commit("SET_SHOWRIGHTPANEL", false)
        } else {
          if (
            this.$router.currentRoute.name === "Sports" ||
            this.$router.currentRoute.name === "LiveSports" ||
            this.$router.currentRoute.name === "Mini-PowerBall" ||
            this.$router.currentRoute.name === "Mini-BetEast" ||
            this.$router.currentRoute.name === "Mini-BoscoreLadder1" ||
            this.$router.currentRoute.name === "Mini-BoscoreLadder2" ||
            this.$router.currentRoute.name === "Mini-BoscoreLadder3" ||
            this.$router.currentRoute.name === "Mini-BoscorePowerBall" ||
            this.$router.currentRoute.name === "Mini-BubbleLadder" ||
            this.$router.currentRoute.name === "Mini-BubblePowerBall" ||
            this.$router.currentRoute.name === "Mini-Crash" ||
            this.$router.currentRoute.name === "Mini-Dice" ||
            this.$router.currentRoute.name === "Mini-Hillo" ||
            this.$router.currentRoute.name === "Mini-EOSPowerBall1" ||
            this.$router.currentRoute.name === "Mini-EOSPowerBall2" ||
            this.$router.currentRoute.name === "Mini-EOSPowerBall3" ||
            this.$router.currentRoute.name === "Mini-EOSPowerBall4" ||
            this.$router.currentRoute.name === "Mini-EOSPowerBall5" ||
            this.$router.currentRoute.name === "Mini-Fx" ||
            this.$router.currentRoute.name === "Mini-KenoLadder" ||
            this.$router.currentRoute.name === "Mini-LivescorePowerFreeKick" ||
            this.$router.currentRoute.name === "Mini-LivescorePowerSpeedDunk" ||
            this.$router.currentRoute.name === "Mini-LivescoreSpeedHomeRun" ||
            this.$router.currentRoute.name === "Mini-NamedFX1" ||
            this.$router.currentRoute.name === "Mini-NamedFX2" ||
            this.$router.currentRoute.name === "Mini-NamedFX3" ||
            this.$router.currentRoute.name === "Mini-NamedFX4" ||
            this.$router.currentRoute.name === "Mini-NamedFX5" ||
            this.$router.currentRoute.name === "Mini-NamedRacing" ||
            this.$router.currentRoute.name === "Mini-NamedPowerBall3" ||
            this.$router.currentRoute.name === "Mini-NamedPowerBall5" ||
            this.$router.currentRoute.name === "Mini-NamedLadder3" ||
            this.$router.currentRoute.name === "Mini-NamedRedPowerBall" ||
            this.$router.currentRoute.name === "Mini-NamedRedLadder" ||
            this.$router.currentRoute.name === "Mini-NamedLadder5" ||
            this.$router.currentRoute.name === "Mini-SurePowerBall1" ||
            this.$router.currentRoute.name === "Mini-SurePowerBall2" ||
            this.$router.currentRoute.name === "Mini-SurePowerBall3" ||
            this.$router.currentRoute.name === "Mini-SureLadder1" ||
            this.$router.currentRoute.name === "Mini-SureLadder2" ||
            this.$router.currentRoute.name === "Mini-SureLadder3" ||
            this.$router.currentRoute.name === "Mini-SureRacing1" ||
            this.$router.currentRoute.name === "Mini-SureRacing2" ||
            this.$router.currentRoute.name === "Mini-SureRacing3" ||
            this.$router.currentRoute.name === "Mini-CompanionSpeedKeno" ||
            this.$router.currentRoute.name === "Mini-CompanionKenoLadder" ||
            this.$router.currentRoute.name === "Mini-CompanionPowerBall" ||
            this.$router.currentRoute.name === "Mini-CompanionPowerLadder" ||
            this.$router.currentRoute.name === "Mini-TokenPowerBall" ||
            this.$router.currentRoute.name === "Mini-TokenRoullete" ||
            this.$router.currentRoute.name === "Mini-TokenHilo" ||
            this.$router.currentRoute.name === "Mini-TokenHilo5" ||
            this.$router.currentRoute.name === "Mini-TokenGraph" ||
            this.$router.currentRoute.name === "Mini-TokenBaccarat" ||
            this.$router.currentRoute.name === "Mini-TokenHorse" ||
            this.$router.currentRoute.name === "Mini-TokenWheel" ||
            this.$router.currentRoute.name === "Mini-TokenRacing3" ||
            this.$router.currentRoute.name === "Mini-TokenRacing4" ||
            this.$router.currentRoute.name === "Mini-PowerLadder" ||
            this.$router.currentRoute.name === "Mini-SpeedKeno" ||
            this.$router.currentRoute.name === "VirtualSports-Basketball" ||
            this.$router.currentRoute.name === "VirtualSports-Dog" ||
            this.$router.currentRoute.name === "VirtualSports-Football" ||
            this.$router.currentRoute.name === "VirtualSports-Horse" ||
            this.$router.currentRoute.name === "VirtualSports-Baseball"
          ) {
            this.$store.commit("SET_CONTENTMARGINRIGHT", "310px");
            this.$store.commit("SET_SHOWRIGHTPANEL", true);
          } else {
            this.$store.commit("SET_CONTENTMARGINRIGHT", "0px");
            this.$store.commit("SET_SHOWRIGHTPANEL", false);
          }
        }
      } else {
        if (this.$refs.mainBox.$el.clientWidth <= 1080) {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "0px");
        } else {
          this.$store.commit("SET_CONTENTMARGINRIGHT", "299px");
        }
      }

      // 윗쪽 마진 설정
      if (this.$refs.mainBox.$el.clientWidth <= 768) {
        this.$store.commit("SET_ISMOBILE", true);
        if (this.currentUser) {
          if (
            this.themeType == "red14" ||
            this.themeType == "yellow12" ||
            this.themeType == "red12" ||
            this.themeType == "gold11" ||
            this.themeType == "blue15"
          ) {
            this.$store.commit("SET_CONTENTMARGINTOP", "55px");
          } else if (this.layoutType == "layout2") {
            this.$store.commit("SET_CONTENTMARGINTOP", "34px");
          } else if (
            this.layoutType == "layout3" ||
            this.layoutType == "layout6"
          ) {
            this.$store.commit("SET_CONTENTMARGINTOP", "84px");
          } else if (this.layoutType == "layout5") {
            this.$store.commit("SET_CONTENTMARGINTOP", "104px");
          } else {
            this.$store.commit("SET_CONTENTMARGINTOP", "37px");
          }
        } else {
          if (
            this.themeType == "red14" ||
            this.themeType == "yellow12" ||
            this.themeType == "red12" ||
            this.themeType == "gold11" ||
            this.themeType == "blue15"
          ) {
            this.$store.commit("SET_CONTENTMARGINTOP", "70px");
          } else if (this.layoutType == "layout2") {
            this.$store.commit("SET_CONTENTMARGINTOP", "10px");
          } else if (
            this.layoutType == "layout3" ||
            this.layoutType == "layout6"
          ) {
            this.$store.commit("SET_CONTENTMARGINTOP", "67px");
          } else if (this.layoutType == "layout5") {
            this.$store.commit("SET_CONTENTMARGINTOP", "70px");
          } else {
            this.$store.commit("SET_CONTENTMARGINTOP", "52px");
          }
        }
      } else {
        this.$store.commit("SET_ISMOBILE", false);
        if (this.layoutType == "layout2") {
          this.$store.commit("SET_CONTENTMARGINTOP", "0px");
        } else if (this.themeType == "gold12") {
          this.$store.commit("SET_CONTENTMARGINTOP", "51px");
        } else if (
          (this.layoutType == "layout3" && this.themeType != "yellow18") ||
          this.layoutType == "layout6"
        ) {
          this.$store.commit("SET_CONTENTMARGINTOP", "37px");
        } else if (
          this.layoutType == "layout3" &&
          this.themeType == "yellow18"
        ) {
          this.$store.commit("SET_CONTENTMARGINTOP", "81px");
        } else if (this.layoutType == "layout5") {
          this.$store.commit("SET_CONTENTMARGINTOP", "71px");
        } else if (this.themeType == "orange13") {
          this.$store.commit("SET_CONTENTMARGINTOP", "89px");
        } else if (
          this.themeType == "red12" ||
          this.themeType == "blue15" ||
          this.themeType == "gold11"
        ) {
          this.$store.commit("SET_CONTENTMARGINTOP", "66px");
        } else if (this.themeType == "red15") {
          this.$store.commit("SET_CONTENTMARGINTOP", "78px");
        } else {
          this.$store.commit("SET_CONTENTMARGINTOP", "41px");
        }
      }

      // 왼쪽 마진 설정
      if (this.themeType != "green" && this.layoutType != "layout5") {
        if (
          this.$router.currentRoute.name === "Sports" ||
          this.$router.currentRoute.name === "LiveSports"
        ) {
          if (
            this.$refs.mainBox.$el.clientWidth >= 1860 ||
            (this.$refs.mainBox.$el.clientWidth < 1600 &&
              this.$refs.mainBox.$el.clientWidth > 1280)
          ) {
            if (this.layoutType == "layout2") {
              if (this.showLeftPanel) {
                this.$store.commit("SET_CONTENTMARGINLEFT", "261px");
              } else {
                this.$store.commit("SET_CONTENTMARGINLEFT", "40px");
              }
            } else if (
              this.layoutType == "layout3" ||
              this.layoutType == "layout6"
            ) {
              this.$store.commit("SET_CONTENTMARGINLEFT", "310px");
            } else {
              this.$store.commit("SET_CONTENTMARGINLEFT", "299px");
            }
          } else if (this.$refs.mainBox.$el.clientWidth <= 768) {
            this.$store.commit("SET_CONTENTMARGINLEFT", "0px");
          } else {
            this.$store.commit("SET_CONTENTMARGINLEFT", "50px");
          }
        } else {
          if (
            this.$refs.mainBox.$el.clientWidth >= 1860 ||
            (this.$refs.mainBox.$el.clientWidth < 1440 &&
              this.$refs.mainBox.$el.clientWidth > 1280)
          ) {
            if (this.layoutType == "layout2") {
              if (this.showLeftPanel) {
                this.$store.commit("SET_CONTENTMARGINLEFT", "261px");
              } else {
                this.$store.commit("SET_CONTENTMARGINLEFT", "40px");
              }
            } else if (
              this.layoutType == "layout3" ||
              this.layoutType == "layout6"
            ) {
              this.$store.commit("SET_CONTENTMARGINLEFT", "310px");
            } else {
              this.$store.commit("SET_CONTENTMARGINLEFT", "299px");
            }
          } else if (this.$refs.mainBox.$el.clientWidth <= 768) {
            this.$store.commit("SET_CONTENTMARGINLEFT", "0px");
          } else {
            this.$store.commit("SET_CONTENTMARGINLEFT", "50px");
          }
        }
      } else if (this.layoutType == "layout5") {
        if (
          this.$router.currentRoute.name === "Sports" ||
          this.$router.currentRoute.name === "LiveSports"
        ) {
          if (
            this.$refs.mainBox.$el.clientWidth >= 1860 ||
            (this.$refs.mainBox.$el.clientWidth < 1600 &&
              this.$refs.mainBox.$el.clientWidth > 1280)
          ) {
            this.$store.commit("SET_CONTENTMARGINLEFT", "310px");
            this.$store.commit("SET_SHOWLEFTPANEL", true);
          } else if (this.$refs.mainBox.$el.clientWidth <= 768) {
            this.$store.commit("SET_CONTENTMARGINLEFT", "0px");
            this.$store.commit("SET_SHOWLEFTPANEL", false);
          } else {
            this.$store.commit("SET_CONTENTMARGINLEFT", "40px");
            this.$store.commit("SET_SHOWLEFTPANEL", false);
          }
        } else {
          if (this.$refs.mainBox.$el.clientWidth <= 768) {
            this.$store.commit("SET_CONTENTMARGINLEFT", "0px");
          } else {
            this.$store.commit("SET_CONTENTMARGINLEFT", "40px");
          }
          // this.$store.commit('SET_SHOWLEFTPANEL', false)
        }
      } else if (this.themeType == "green") {
        if (this.$refs.mainBox.$el.clientWidth > 1440) {
          this.$store.commit("SET_CONTENTMARGINLEFT", "299px");
        } else {
          this.$store.commit("SET_CONTENTMARGINLEFT", "0px");
        }
      }
    },
    async getNoteCount() {
      try {
        if (!this.currentUser) return;
        let res = await noteClientService.find({ query: { type: 0 } });
        if (res.code != 1) return;
        this.$store.commit(
          "SET_NOTECOUNT",
          res.data.filter(
            (note) => note.notestatuses && note.notestatuses.length === 0
          ).length
        );
      } catch (err) {
        console.log(err.message);
      }
    },
    async getCustomerCount() {
      if (!this.currentUser) return;

      await customerService
        .find({ query: { type: 0 } })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message);
          } else {
            if (res.data.length > 0) {
              this.$store.commit("SET_CUSTOMERCOUNT", res.data.length);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    viewNoteList() {
      if (this.layoutType == "layout2") {
        this.$store.commit("SET_ORANGEDIALOGVISIBLE");
        this.$store.commit("SET_ORANGEDIALOGTAB", 3);
      } else {
        this.$router.push("/Note");
      }
    },
    viewCustomerList() {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage(
          "알림메시지",
          "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.",
          "닫기[Close]"
        );
        return;
      }
      if (this.layoutType == "layout2") {
        this.$store.commit("SET_ORANGEDIALOGVISIBLE");
        this.$store.commit("SET_ORANGEDIALOGTAB", 4);
      } else {
        this.$router.replace({ path: "/Customer", query: { t: +new Date() } });
      }
    },
    onCollapse() {
      if (!this.isMobile) return;
      if (!this.isCollapse) {
        document.getElementById("main").style.marginLeft = "250px";
      } else {
        document.getElementById("main").style.marginLeft = "0";
      }
      document.getElementById("main").style.width = screen.availWidth + "px";
    },
    onClickBetSlip() {
      this.$store.commit("SET_SHOWRIGHTPANEL", !this.showRightPanel);
    },
    trackerFunction() {
      // if (!document.getElementById("STATSCORE_LMP_GENERATOR_SCRIPT")) {
      //   var s = document.createElement("script");
      //   s.id = "STATSCORE_LMP_GENERATOR_SCRIPT";
      //   s.src = "https://live.statscore.com/livescorepro/generator?auto_init=false";
      //   s.async = 1;
      //   document.body.appendChild(s);
      //   this.isLoadTracker = true;
      // }
      var d = "STATSCOREWidgetsEmbederScript";
      if (!window.document.getElementById(d)) {
        (window.STATSCOREWidgets = {}),
          (window.STATSCOREWidgets.onLoadCallbacks = []),
          (window.STATSCOREWidgets.onLoad = function (d) {
            window.STATSCOREWidgets.onLoadCallbacks.push(d);
          });
        var n = window.document.createElement("script");
        (n.src = "https://wgt-s3-cdn.statscore.com/bundle/Embeder.js"),
          (n.async = !0),
          (n.id = d),
          n.addEventListener("error", function (d) {
            for (
              var n = 0;
              n < window.STATSCOREWidgets.onLoadCallbacks.length;
              n++
            )
              window.STATSCOREWidgets.onLoadCallbacks[n](d);
          }),
          window.document.body.appendChild(n);
        this.isLoadTracker = true;
      }
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
    handleClose() {},
  },
};
</script>

<style scoped>
.layout-root {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.sidebar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background: #181b23;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 20;
}

.main-content-area {
  position: relative;
  margin-left: var(--sidebar-width, 260px);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  transition: margin-left 0.3s ease;
}

.main-content-area {
  position: relative;
  margin-left: var(--sidebar-width, 260px);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  transition: margin-left 0.3s ease;

  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(88, 96, 116, 0.6) transparent;
  scrollbar-gutter: stable;
}

.main-content-area::-webkit-scrollbar {
  width: 8px; 
  height: 8px;
  background: transparent;
}

.main-content-area::-webkit-scrollbar-track {
  background: transparent; 
}

.main-content-area::-webkit-scrollbar-thumb {
  background: rgba(88, 96, 116, 0); 
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
  transition: background 0.15s ease;
}

.main-content-area:hover::-webkit-scrollbar-thumb {
  background: rgba(88, 96, 116, 0.65);
  background-clip: content-box;
}

.main-content-area::-webkit-scrollbar-thumb:active {
  background: rgba(142, 151, 173, 0.9);
  background-clip: content-box;
}

.main-content-area::-webkit-scrollbar-corner {
  background: transparent;
}

/* @media (max-width: 1024px) {
  .sidebar-fixed {
    width: var(--sidebar-width-collapsed, 72px);
  }

  .main-content-area {
    margin-left: var(--sidebar-width-collapsed, 72px);
  }
} */

@media (max-width: 1020px) {
  .sidebar-fixed {
    position: absolute; /* deixa de ser fixa na tela */
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%); /* esconde fora da tela */
    transition: transform 0.3s ease;
    z-index: 9999;
  }

  .sidebar-fixed.active {
    transform: translateX(0); /* volta para dentro da tela quando aberta */
  }

  .main-content-area {
    margin-left: 0 !important; /* conteúdo ocupa a tela toda */
  }
}
</style>
<style
  lang="css"
  src="~/assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css"
></style>
<style
  lang="css"
  src="~/assets/plugins/bootstrap/css/bootstrap.min.css"
></style>
<style
  lang="css"
  src="~/assets/plugins/font-awesome/css/font-awesome.min.css"
></style>
<style lang="css" src="~/assets/plugins/ionicons/css/ionicons.min.css"></style>
<style lang="css" src="~/assets/css/animate.min.css"></style>
<style lang="css" src="~/assets/css/icons.css"></style>
<style lang="css" src="~/assets/css/style.css"></style>
<style lang="css" src="~/assets/css/ui.css"></style>
<style lang="css" src="~/assets/css/style2.css"></style>
<style lang="css" src="~/assets/css/theme/og.css"></style>
<style lang="css" src="~/assets/css/theme/red.css"></style>
<style lang="css" src="~/assets/css/owlcarousel/owl.carousel.min.css"></style>
<style
  lang="css"
  src="~/assets/css/owlcarousel/owl.theme.default.min.css"
></style>

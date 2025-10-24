<template>  
  <div id="test">
    <el-row id="mainheader" ref="mainheader" class="header navbar navbar-inverse navbar-fixed-top no-bg" :class="{'bg-black-main': themeType == 'green'}">
      <div id="topmenu">
        <HeaderNav></HeaderNav>
        
        <MainNav 
          v-if="(themeType != 'orange12' && themeType != 'blue17' && themeType != 'yellow20' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' && themeType != 'yellow21' && themeType != 'yellow16' && themeType != 'red11' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11' && themeType != 'blue18' && themeType != 'yellow15' && themeType != 'orange14' && themeType != 'red13' && themeType != 'blue12' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'yellow19') || 
               ((themeType == 'orange12' || themeType == 'blue17' || themeType == 'yellow20' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14' || themeType == 'yellow21' || themeType == 'yellow16' || themeType == 'red11' || themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11' || themeType == 'blue18' || themeType == 'yellow15' || themeType == 'orange14' || themeType == 'red13' || themeType == 'blue12' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'yellow19') && isMobile)">
        </MainNav>
      </div>
    </el-row>
    <!-- 회원가입창 -->
    <SignupDialog style="z-index: 10000;"/>
    <!-- 회원가입창 끝 -->
    <!-- 로그인창 -->
    <Login style="z-index: 10000;"/>
    <!-- 로그인창 끝 -->
    <!-- 카지노 -->
    <Casino style="z-index: 10000;"/>
    <!-- 카지노 끝 -->
    <!-- 토큰게임 -->
    <Token style="z-index: 10000;"/>
    <!-- 토큰게이 끝 -->
    <Popup style="z-index: 10000;"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import jQuery from 'jquery'
import HeaderNav from "~/components/Header/HeaderNav.vue";
import MainNav from "~/components/Header/MainNav.vue";
import Login from "~/components/Auth/Login.vue"; // WCU add
import SignupDialog from "~/components/Auth/SignupDialog.vue";
import Casino from "~/components/Dialog/Casino.vue"
import Token from "~/components/Dialog/Token.vue"
import Popup from "~/components/Dialog/Popup"

export default {
  middleware: "authenticated",
  components: {
    HeaderNav,
    MainNav,
    Login,
    SignupDialog,
    Casino,
    Token,
    Popup
  },
  filters: {},
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      isCollapse: 'getIsClientCollapsed',
      screenWidth: "getScreenWidth",
      themeType: "getThemeType"
    })
  },
  data() {
    return {
      isVisibleSignup: 0
    }
  },
  watch: {
    screenWidth(val) {
      this.getMenuHeight()
    },
    isCollapse(val) {
      this.resizeScreen()
    }
  },
  mounted() {
    this.getMenuHeight()
  },
  methods: {
    getMenuHeight() {
      this.$store.commit("SET_MAINMENU_HEIGHT", this.$refs.mainheader.$el.clientHeight);
    },
    resizeScreen() {
      if (!this.isMobile) return;
      if (!this.isCollapse) {
        jQuery("#mySidenav").css("width", "250px");
      } else {
        jQuery("#mySidenav").css("width", "0");
      }
    },
    goToPage() {
      this.$router.push("/")
    }
  }
};
</script>
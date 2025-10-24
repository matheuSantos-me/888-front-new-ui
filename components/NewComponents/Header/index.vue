<template>
  <div>
    <div v-if="!isMobile" class="header-wrapper" style="height: 64px">
      <div class="header-desktop">
        <a href="/" style="margin-right: auto">
          <img src="./icons/rollbit-logo-glow.svg" alt="rollbit" />
        </a>

        <span class="header-login" @click="onClickLogin">Login</span>

        <button class="header-join-button" @click="onClickSignUp">
          Join Now
        </button>

        <button class="header-icon-button">
          <SearchIcon />
        </button>

        <button class="header-icon-button">
          <MessageIcon />
        </button>
      </div>
    </div>

    <div v-else class="header-wrapper" style="height: 112px">
      <div class="header-mobile">
        <div class="header-mobile-row">
          <a href="/" style="margin-right: auto">
            <img
              src="./icons/rollbit-logo-glow.svg"
              alt="rollbit"
              style="margin-left: 10px"
            />
          </a>

          <span class="header-login" @click="onClickLogin">Login</span>

          <button class="header-mobile-join-button" @click="onClickSignUp">
            Join Now
          </button>
        </div>

        <div class="header-mobile-row" style="margin-right: -10px">
          <a class="header-mobile-link" href="/"> <BrowseIcon /> Browse </a>

          <a class="header-mobile-link" href="/casino">
            <CasinoIcon /> Casino
          </a>

          <a class="header-mobile-link" href="/trade">
            <FuturesIcon /> Futures
          </a>

          <a class="header-mobile-link" href="/sports">
            <SportsIcon /> Sports
          </a>

          <a class="header-mobile-link" href="/rlb"> <RLBIcon /> RLB </a>

          <a class="header-mobile-link" href="/"> <MessageIcon /> Chat </a>
        </div>
      </div>
    </div>

    <SignupDialog style="z-index: 10000" />

    <Login style="z-index: 10000" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SearchIcon from "./icons/SearchIcon.vue";
import MessageIcon from "./icons/MessageIcon.vue";
import BrowseIcon from "./icons/BrowseIcon.vue";
import CasinoIcon from "./icons/CasinoIcon.vue";
import FuturesIcon from "./icons/FuturesIcon.vue";
import SportsIcon from "./icons/SportsIcon.vue";
import RLBIcon from "./icons/RLBIcon.vue";
import SignupDialog from "~/components/Auth/SignupDialog.vue";
import Login from "~/components/Auth/Login.vue";

export default {
  name: "Header",
  components: {
    SearchIcon,
    MessageIcon,
    BrowseIcon,
    CasinoIcon,
    FuturesIcon,
    SportsIcon,
    RLBIcon,
    SignupDialog,
    Login,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 1024,
      isVisibleSignup: 0,
    };
  },
  computed: {
    ...mapGetters({
      isNewUser: "getIsNewUser",
    }),
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 1024;
    },

    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },

    onClickLogin() {
      console.log("chama?");

      this.$store.commit("SET_LOGINDIALOGVISIBLE");
      this.$store.commit("SET_LOGINSIDEVERIFY", false);
    },

    onClickSignUp() {
      console.log("chama?");

      if (!this.isNewUser) {
        this.showMessage(
          "알림메시지",
          "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.",
          "닫기[Close]",
          2
        );

        return;
      }

      if (this.isMobile) {
        this.$router.push("/auth/signup");
      } else {
        this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
      }
    },
  },
};
</script>

<style scoped>
/* ---------------------------- */
/* Estrutura base do cabeçalho */
/* ---------------------------- */
.header-wrapper {
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateZ(0);
}

.header-desktop,
.header-mobile {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
}

.header-desktop {
  padding: 0 12px 0 24px;
  background: #1a1d29;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-mobile {
  padding: 0 16px 0 6px;
  background: rgb(26, 29, 41);
}

/* ---------------------------- */
/* Elementos compartilhados */
/* ---------------------------- */
.header-login,
.header-mobile-login {
  margin: 0 24px 0 40px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  cursor: pointer;
  user-select: none;
}

.header-mobile-row {
  display: flex;
  align-items: center;
  height: 50%;
}

.header-mobile-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 6px;
  height: 86%;
  min-height: 86%;
  padding-bottom: 5px;
  border-radius: 8px;
  width: 20%;
  color: rgb(177, 182, 198);
  font-size: 11px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}

/* ---------------------------- */
/* Botões principais */
/* ---------------------------- */
.header-join-button,
.header-mobile-join-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  font-family: "Geogrotesque Wide", sans-serif;
  font-style: normal;
  background: #ffe81a;
  color: #141722;
  box-shadow: rgba(255, 176, 25, 0.4) 0 0 10px,
    rgba(255, 255, 255, 0.2) 0 1px 0 inset, rgba(0, 0, 0, 0.15) 0 -3px 0 inset,
    rgb(255, 135, 25) 0 0 9px inset;
}

.header-join-button {
  height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 14px;
}

.header-mobile-join-button {
  height: 30px;
  padding: 0 14px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
}

.header-join-button:hover,
.header-mobile-join-button:hover {
  filter: brightness(110%);
}

/* ---------------------------- */
/* Botões de ícone */
/* ---------------------------- */
.header-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  appearance: none;
  border: none;
  height: 40px;
  border-radius: 8px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background: #cbd7ff08;
  margin-left: 12px;
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
}

.header-icon-button:hover {
  background: #cbd7ff0e;
}

.header-icon-button > :last-child {
  margin-right: 0;
}
</style>

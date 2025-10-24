<template>
  <div v-if="isMobile" class="container-nav-bottom">
    <button class="button-nav" @click="handleNavigation('/Money/PayIn')">
      <img :src="require('@/static/image/Navigation/icon-plus.png')" style="width: 30px; height: 30px;" />

      <span>충전</span>
    </button>

    <button class="button-nav" @click="handleNavigation('/Money/PayOut')">
      <img :src="require('@/static/image/Navigation/icon-withdrawal.png')" style="width: 30px; height: 30px;" />

      <span>환전</span>
    </button>

    <button
    class="button-nav-home"
    @click="handleNavigation('/')"
    >
    <img :src="require('@/static/image/Navigation/icon-home.png')" style="width: 34px; height: 34px; margin-top: -5px;" />
  </button>

  <button class="button-nav" @click="handleNavigation('/Event')">
    <img :src="require('@/static/image/Navigation/icon-cookie.png')" style="width: 30px; height: 30px;" />

      <span>이벤트</span>
    </button>

    <button class="button-nav" @click="handleNavigation('/Money/PayIn')">
      <img :src="require('@/static/image/Navigation/icon-customer.png')" style="width: 30px; height: 30px;" />

      <span>고객센터</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MobileNavigation",
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
    }),
  },
  methods: {
    handleNavigation(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.container-nav-bottom {
  position: fixed;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  border-top: 2px solid #14161B;
}

.button-nav {
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.button-nav-home {
  all: unset;
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: url(@/static/image/Navigation/home-icon-bg.gif) center / cover no-repeat, linear-gradient(to bottom, rgba(50, 50, 50, 1), rgba(20, 20, 20, 1));
}
</style>

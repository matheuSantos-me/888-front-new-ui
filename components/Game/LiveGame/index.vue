<template>
  <div class="container">
    <div v-if="!isMobile">
      <div class="content">
        <p style="color: #ed4163; font-size: 14px">
          Failed to start third party demo session.
        </p>

        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <span style="color: #b1bad3; font-size: 14px; margin-right: 10px"
            >통화 표기</span
          >

          <MoneyIcon />

          <span
            style="
              color: #fff;
              font-size: 16px;
              margin-left: 4px;
              font-weight: bold;
            "
            >USDT</span
          >
        </div>

        <button class="join-btn">가입하기</button>
      </div>
    </div>

    <div
      v-if="isMobile"
      style="
        display: flex;
        align-items: start;
        justify-content: start;
        width: 100%;
      "
    >
      <div class="content-mobile">
        <div style="display: flex; align-items: center; gap: 30px">
          <img
            src="./icons/SweetBonanza.png"
            style="height: 350px; width: 250px; border-radius: 8px; object-fit: cover;"
            alt="SweetBonanza"
          />

          <div style="display: flex; flex-direction: column; gap: 10px">
            <span style="color: #fff; font-size: 22px; font-weight: bold"
              >Blackjack</span
            >

            <span style="color: #b1bad3; font-size: 18px">Evolution</span>
          </div>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0 10px 0;
          "
        >
          <span style="color: #b1bad3; font-size: 14px; margin-right: 10px"
            >통화 표기</span
          >

          <MoneyIcon />

          <span
            style="
              color: #fff;
              font-size: 16px;
              margin-left: 4px;
              font-weight: bold;
            "
            >USDT</span
          >
        </div>

        <div style="display: flex; align-items: center; gap: 15px">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>

          <span style="color: #b1bad3; font-size: 16px">
            풀스크린으로 플레이
          </span>
        </div>

        <button class="join-btn">가입하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyIcon from "./icons/MoneyIcon.vue";

export default {
  name: "LiveGame",
  components: {
    MoneyIcon,
  },
  data() {
    return {
      selectedCurrency: "USD",
      isMobile: window.innerWidth <= 1000,
    };
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #444;
  transition: 0.4s;
  border-radius: 25px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

input:checked + .slider {
  background-color: #22c55e;
}

input:checked + .slider:before {
  transform: translateX(25px);
}

.slider:active:before {
  width: 22px;
}

.container {
  width: 100%;
  background-color: #cbd7ff08;
  color: #fff;
  display: flex;
  min-height: 500px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  border-radius: 8px;
}

@media (max-width: 1024px) {
  .container {
    margin-top: 140px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.content-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.error-text {
  color: #ff5c5c;
  margin-bottom: 12px;
  font-size: 14px;
}

.currency-select {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ccc;
  font-size: 13px;
  margin-bottom: 16px;
}

.dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #1b2433;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.dropdown:hover {
  background: #253147;
}

.symbol {
  color: #4ade80;
}

.join-btn {
  background-color: #3182f6;
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 8px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
}

@media (max-width: 1024px) {
  .join-btn {
    width: 100%;
    margin-top: 20px;
  }
}

.join-btn:hover {
  background-color: #4a97ff;
}

.footer {
  padding: 14px 0;
  color: #8c99b2;
  font-size: 14px;
}

.logo {
  font-family: "Pacifico", cursive;
  font-size: 20px;
}
</style>

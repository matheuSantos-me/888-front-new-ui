<template>
  <div class="crypto-header">
    <div class="content-crypto">
      <div class="crypto-details">
        <div class="crypto-price">
          <img src="../bitcoin-logo.png" alt="BTC" class="crypto-icon" />

          <span class="price-main" :style="{ color: priceColor }">
            {{ price }}
          </span>
        </div>

        <div v-if="windowWidth > 770" class="crypto-info">
          <span class="symbol">BTC - <span class="name">Bitcoin</span></span>

          <div class="stats">
            <div>
              <span>24h vol: <b>{{ volume }}</b></span>

              <span>- H: <b class="high">{{ high }}</b></span>
            </div>

            <div>
              <span>24h var: <b>{{ variation }}</b></span>

              <span>- L: <b style="color: #871212">{{ low }}</b></span>
            </div>
          </div>
        </div>
      </div>

      <div class="crypto-actions">
        <div class="tick-dropdown" @click="toggleDropdown">
          <div class="tick-selected">
            {{ selectedTick }}

            <span class="arrow">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                size="7"
                color="#B1B6C6"
                class="css-1vsy0ig"
                style="margin-left: 6px"
              >
                <path d="M0.934258 -6.17707e-07L7.06574 -8.16755e-08C7.46509 -4.67634e-08 7.70329 0.445072 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.777349C0.296715 0.445072 0.534911 -6.52619e-07 0.934258 -6.17707e-07Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>

          <ul v-if="open" class="tick-options">
            <li
              v-for="tick in ticks"
              :key="tick"
              :class="{ active: tick === selectedTick }"
              @click.stop="selectTick(tick)"
            >
              {{ tick }}
            </li>
          </ul>
        </div>

        <div class="settings">
          <div class="settings-icon" @click="toggleSettings">
            <SettingsIcon />
          </div>

          <div v-if="settingsOpen" class="settings-menu">
            <div
              v-for="(option, index) in settingsOptions"
              :key="index"
              class="settings-item"
            >
              <label class="switch">
                <input type="checkbox" v-model="option.enabled" />

                <span class="slider"></span>
              </label>

              <span>{{ option.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="windowWidth < 770" style="margin-top: 10px">
      <span class="symbol">BTC - <span class="name">Bitcoin</span></span>

      <div class="stats">
        <div>
          <span>24h vol: <b>{{ volume }}</b></span>

          <span>- H: <b class="high">{{ high }}</b></span>
        </div>

        <div>
          <span>24h var: <b>{{ variation }}</b></span>

          <span>- L: <b style="color: #871212">{{ low }}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDownIcon, SettingsIcon } from "vue-feather-icons";

export default {
  name: "CryptoHeader",
  props: {
    price: { type: String, required: true },
    priceColor: { type: String, default: "#14ff00" },
    high: { type: String, default: 0 },
    low: { type: String, default: 0 },
    volume: { type: String, default: 0 },
    variation: { type: String, default: 0 },
    tick: { type: String, default: "Tick" },
  },
  components: {
    ArrowDownIcon,
    SettingsIcon,
  },
  data() {
    return {
      open: false,
      settingsOpen: false,
      selectedTick: this.tick,
      windowWidth: window.innerWidth,
      ticks: [
        "Tick",
        "5s",
        "15s",
        "30s",
        "1m",
        "3m",
        "5m",
        "15m",
        "30m",
        "1h",
        "2h",
        "4h",
        "6h",
        "8h",
        "12h",
        "1d",
      ],
      settingsOptions: [
        // { label: "Advanced chart", enabled: false },
        { label: "Show My Bets on chart", enabled: false },
        // { label: "Show Public Bets on chart", enabled: false },
        // { label: "Confirm Cash Out", enabled: false },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;

      if (this.open) this.settingsOpen = false;
    },

    selectTick(tick) {
      this.selectedTick = tick;
      this.open = false;

      this.$emit("update:tick", tick);
    },

    toggleSettings() {
      this.settingsOpen = !this.settingsOpen;

      if (this.settingsOpen) this.open = false;
    },

    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".tick-dropdown");
      const settings = this.$el.querySelector(".settings");

      if (dropdown && !dropdown.contains(event.target)) {
        this.open = false;
      }

      if (settings && !settings.contains(event.target)) {
        this.settingsOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.crypto-header {
}

@media (max-width: 770px) {
  .crypto-header {
    padding-left: 10px;
  }
}

.content-crypto {
  display: flex;
  justify-content: space-between;
}

.crypto-details {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  color: #ccc;
  font-family: sans-serif;
}

.crypto-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
}

@media (max-width: 770px) {
  .crypto-actions {
    padding-right: 10px;
  }
}

.crypto-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crypto-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.price-main {
  font-size: 28px;
  font-weight: bold;
}

.crypto-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.symbol {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}

.name {
  color: #535562;
}

.stats {
  font-size: 13px;
  margin-top: 2px;
}

.stats b {
  font-weight: bold;
}

.high {
  color: #14ff00;
}

.low {
  color: #871212;
}

.tick-dropdown {
  height: fit-content;
  position: relative;
  background: #14161c;
  border-radius: 6px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #b0b3c3;
  user-select: none;
}

.tick-selected {
  height: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.tick-selected .arrow {
  font-size: 10px;
  color: #aaa;
}

.tick-options {
  position: absolute;
  top: 38px;
  left: 0;
  width: 100px;
  background: #1c1e26;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 6px 0;
  margin: 0;
  z-index: 100;
}

.tick-options li {
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.tick-options li:hover {
  background: #2a2c36;
}

.tick-options li.active {
  color: #f90;
}

.settings {
  position: relative;
}

.settings-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #14161c;
  border-radius: 6px;
  padding: 0px 10px;
  cursor: pointer;
  font-size: 20px;
  color: #ccc;
}

.settings-menu {
  position: absolute;
  top: 42px;
  right: 0;
  background: #1c1e26;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  padding: 10px;
  min-width: 220px;
  z-index: 100;
}

.settings-item {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 6px 0;
  color: #fff;
  font-size: 14px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
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
  transition: 0.3s;
  border-radius: 34px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

.switch input:checked + .slider {
  background-color: #f90;
}

.switch input:checked + .slider::before {
  transform: translateX(20px);
}
</style>

<template>
  <div>
    <div class="toggle-container">
      <button
        v-for="tab in mainTabs"
        :key="tab.value"
        :class="[
          'toggle-btn',
          selectedTab === tab.value ? tab.activeClass : '',
        ]"
        @click="$emit('change-tab', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      v-if="selectedTab === 'PUBLIC'"
      class="toggle-container"
      style="margin-top: 20px"
    >
      <button
        v-for="tab in publicTabs"
        :key="tab.value"
        :class="[
          'toggle-btn',
          selectedPublicTab === tab.value ? tab.activeClass : '',
        ]"
        @click="$emit('change-public-tab', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleTabs",
  props: {
    selectedTab: {
      type: String,
      default: "ACTIVE",
    },
    selectedPublicTab: {
      type: String,
      default: "DAILY",
    },
  },
  data() {
    return {
      mainTabs: [
        {
          label: "ACTIVE BETS",
          value: "ACTIVE",
          activeClass: "toggle-active",
        },
        {
          label: "CLOSED BETS",
          value: "CLOSED",
          activeClass: "toggle-active",
        },
        {
          label: "PUBLIC BETS",
          value: "PUBLIC",
          activeClass: "toggle-active",
        },
      ],
      publicTabs: [
        {
          label: "DAILY",
          value: "DAILY",
          activeClass: "toggle-active",
        },
        {
          label: "LAST WEEK",
          value: "WEEK",
          activeClass: "toggle-active",
        },
        {
          label: "LAST MONTH",
          value: "MONTH",
          activeClass: "toggle-active",
        },
      ],
    };
  },
};
</script>

<style scoped>
.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: -5px;
}

@media (max-width: 770px) {
  .toggle-container {
    margin: 0 10px;
  }
}

.toggle-btn {
  flex: 1;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: #666;
}

.toggle-active {
  background-color: #222;
  color: #fdb72d;
}
</style>

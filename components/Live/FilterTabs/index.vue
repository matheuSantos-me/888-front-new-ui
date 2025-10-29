<template>
  <div class="container">
    <nav class="nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        <span>{{ tab }}</span>
      </button>
    </nav>

    <div class="content-search">
      <SearchIcon />

      <input
        type="text"
        v-model="search"
        placeholder="Search your event"
        class="input"
      />
    </div>
  </div>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";

export default {
  name: "SportsTabs",
  components: {
    SearchIcon,
  },
  data() {
    return {
      search: "",
      activeTab: "Main",
      tabs: [
        "Main",
        "Same Game Multi Bet",
        "Overtime",
        "Asian Line",
        "Goal",
        "First Half",
        "Corner Kick",
        "Card",
        "Scorer",
        "Goal Scorer",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
}

.content-search {
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 0 12px 0 16px;
  border-radius: 8px;
  background: rgba(15, 17, 26, 0.55);
  transition: background 0.2s;
  border: 1px solid transparent;
  margin-top: 24px;
}

.content-search:hover {
  background: rgba(20, 22, 35, 0.75);
}

.input {
  flex: 1;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-family: "Geogrotesque Wide", sans-serif;
  font-size: 15px;
  margin-left: 10px;
}

.nav-tabs {
  display: flex;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 9999px;
  padding: 6px;
  width: auto;
  overflow-x: scroll;
  gap: 4px;
  scrollbar-width: none;
}

@media (max-width: 650px) {
  .nav-tabs {
    width: 100%;
  }
}

.nav-tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  color: #b1b6c6;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  padding: 8px 18px;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.tab:hover {
  color: #fff;
  background-color: rgba(203, 215, 255, 0.1);
}

.tab.active {
  background-color: rgba(203, 215, 255, 0.1);
  color: #ffffc1;
}

.tab span {
  font-size: 15px;
}

.icon {
  width: 18px;
  height: 18px;
}
</style>

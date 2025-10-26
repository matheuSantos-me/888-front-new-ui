<template>
  <div class="container">
    <div class="content-search">
      <SearchIcon />

      <input
        type="text"
        v-model="search"
        placeholder="Search your event"
        class="input"
      />
    </div>

    <nav class="nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        :class="['tab', { active: activeTab === tab.label }]"
        @click="activeTab = tab.label"
      >
        <component :is="tab.icon" class="icon" />

        <span>{{ tab.label }}</span>
      </button>
    </nav>
  </div>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";
import LobbyIcon from "./icons/LobbyIcon.vue";
import MyBetsIcon from "./icons/MyBetsIcon.vue";
import FavoritesIcon from "./icons/FavoritesIcon.vue";
import StartIcon from "./icons/StartIcon.vue";

export default {
  name: "SportsTabs",
  components: {
    SearchIcon,
    LobbyIcon,
    MyBetsIcon,
    FavoritesIcon,
    StartIcon,
  },
  data() {
    return {
      search: "",
      activeTab: "Lobby",
      tabs: [
        { label: "Lobby", icon: "LobbyIcon" },
        { label: "Minhas Apostas", icon: "MyBetsIcon" },
        { label: "Favoritos", icon: "FavoritesIcon" },
        { label: "Começando em Breve", icon: "StartIcon" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  width: fit-content;
  overflow-x: scroll;
  gap: 4px;
  margin-top: 24px;
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

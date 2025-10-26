<template>
  <div style="margin-top: 35px">
    <div class="content-headers">
      <div class="content-labels">
        <ActiveEventsIcon />

        <span class="title">ACTIVE EVENTS</span>
      </div>
    </div>

    <div class="css-uqeajf">
      <div class="css-1mo5975">
        <div
          v-for="tab in tabs"
          :key="tab.name"
          class="tab"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          <component :is="tab.icon" />

          <span class="tab-label">{{ tab.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveEventsIcon from "./icons/ActiveEventsIcon.vue";
import IceHockeyIcon from "./icons/IceHockeyIcon.vue";
import AmericanFootballIcon from "./icons/AmericanFootballIcon.vue";
import SoccerIcon from "./icons/SoccerIcon.vue";
import BasketballIcon from "./icons/BasketballIcon.vue";
import TennisIcon from "./icons/TennisIcon.vue";
import HandballIcon from "./icons/HandballIcon.vue";
import VolleyballIcon from "./icons/VolleyballIcon.vue";
import CricketIcon from "./icons/CricketIcon.vue";
import BaseballIcon from "./icons/BaseballIcon.vue";
import TableTennisIcon from "./icons/TableTennisIcon.vue";
import BoxingIcon from "./icons/BoxingIcon.vue";
import ESportsIcon from "./icons/ESportsIcon.vue";
import MMAIcon from "./icons/MMAIcon.vue";

export default {
  name: "ActiveEventsTabs",
  components: {
    ActiveEventsIcon,
    IceHockeyIcon,
    AmericanFootballIcon,
    SoccerIcon,
    BasketballIcon,
    TennisIcon,
    HandballIcon,
    VolleyballIcon,
    CricketIcon,
    BaseballIcon,
    TableTennisIcon,
    BoxingIcon,
    ESportsIcon,
    MMAIcon,
  },
  data() {
    return {
      activeTab: "Soccer",
      tabs: [
        { name: "Soccer", label: "Soccer", icon: "SoccerIcon" },
        { name: "Basketball", label: "Basketball", icon: "BasketballIcon" },
        { name: "Baseball", label: "Baseball", icon: "BaseballIcon" },
        { name: "Volleyball", label: "Volleyball", icon: "VolleyballIcon" },
        { name: "IceHockey", label: "Ice Hockey", icon: "IceHockeyIcon" },
        {
          name: "AmericanFootball",
          label: "American Football",
          icon: "AmericanFootballIcon",
        },
        { name: "Tennis", label: "Tennis", icon: "TennisIcon" },
        { name: "Handball", label: "Handball", icon: "HandballIcon" },
        { name: "Cricket", label: "Cricket", icon: "CricketIcon" },
        { name: "TableTennis", label: "Table Tennis", icon: "TableTennisIcon" },
        { name: "MMA", label: "MMA", icon: "MMAIcon" },
        { name: "ESports", label: "eSports", icon: "ESportsIcon" },
        { name: "Boxing", label: "Boxing", icon: "BoxingIcon" },
      ],
    };
  },
  methods: {
    truncate(text) {
      if (!text) return "";
      return text.length > 10 ? text.slice(0, 9) + "..." : text;
    },
  },
};
</script>

<style scoped>
.content-headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.content-labels {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
}

.css-uqeajf {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.css-1mo5975 {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
}

.css-1mo5975::-webkit-scrollbar {
  display: none;
}

.tab {
  height: 90px;
  min-height: 72px;
  width: 150px;
  flex-shrink: 0;
  background: rgba(203, 215, 255, 0.03);
  color: rgb(177, 182, 198);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}

.tab:hover {
  background: rgba(203, 215, 255, 0.05);
}

.tab.active {
  color: rgb(255, 255, 193);
  background: rgba(255, 255, 193, 0.08);
}

.tab-label {
  color: #fff;
  font-size: 14px;
  font-family: Commissar, sans-serif;
  word-wrap: break-word;
  white-space: normal;
  text-wrap: nowrap;
  width: 100%;
  display: block;
}
</style>

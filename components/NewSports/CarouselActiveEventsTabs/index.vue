<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <ActiveEventsIcon />

        <span class="title">ACTIVE EVENTS</span>
      </div>

      <div class="content-actions-carousel">
        <button
          class="button-action-carousel"
          @click="scrollLeft"
          aria-label="Previous"
        >
          <ArrowLeftIcon />
        </button>

        <button
          class="button-action-carousel"
          @click="scrollRight"
          aria-label="Next"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>

    <div ref="carousel" class="container-cards">
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
</template>

<script>
import ActiveEventsIcon from "./icons/ActiveEventsIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
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
  name: "CarouselActiveEventsTabs",
  components: {
    ActiveEventsIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
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
    scrollLeft() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.clientWidth;

      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    },

    scrollRight() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.clientWidth;

      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 35px;
}

.content-headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-labels {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
}

.text-link {
  text-transform: none;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  color: #ffb018;
  margin-left: 16px;
}

.content-actions-carousel {
  display: flex;
  align-items: center;
  gap: 6px;
}

.content-actions-carousel div {
  display: flex;
  align-items: center;
  height: 24px;
  min-height: 24px;
  padding: 0px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: default;
  margin-right: 15px;
  color: #fff;
  background: #cbd7ff0e;
}

.button-action-carousel {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 24px;
  width: 32px;
  padding: 0px 8px;
  border-radius: 4px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  background: #cbd7ff08;
  transition: background 0.2s ease;
}

.button-action-carousel:hover {
  background: #cbd7ff0e;
}

.container-cards {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 20px 0 0 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 30px;
}

.container-cards::-webkit-scrollbar {
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

<template>
  <div class="league-accordion">
    <div class="league-header" @click="toggleOpen">
      <div style="display: flex; gap: 10px; align-items: center">
        <span class="league-name">Blackjack</span>
        <p style="color: #a5acb5; font-size: 12px">Evolution Gaming</p>
      </div>

      <svg
        :class="{ open: isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 9l6 6 6-6"
        />
      </svg>
    </div>

    <transition v-if="!isMobile" name="accordion">
      <div v-if="isOpen" class="matches-container">
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

        <div v-if="activeTab === 'Description'">
          <div class="game-info">
            <img
              src="./icons/SweetBonanza.png"
              class="game-image"
              alt="SweetBonanza"
            />

            <div class="tags">
              <span class="tag">엣지: {{ edge }}</span>

              <span v-for="tag in tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="empty-mission">
            <MissionIcon />
            <p>Blackjack 에 진행 중인 도전 과제가 없습니다</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MissionIcon from './icons/MissionIcon.vue'

export default {
  name: "AccordionGameDetail",
  components: {
    MissionIcon
  },
  data() {
    return {
      isMobile: window.innerWidth <= 780,
      isOpen: true,
      activeTab: "Description",
      tabs: ["Description", "Missions"],
      edge: "0.60%",
      tags: [
        "Blackjack",
        "Cards",
        "Evolution Gaming",
        "Live Casino",
        "Table Games",
      ],
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.league-accordion {
  background-color: #cbd7ff08;
  border-radius: 10px;
  color: #fff;
  font-family: "Inter", sans-serif;
  margin-top: 35px;
}

.league-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cbd7ff08;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.league-header:hover {
  background-color: rgba(203, 215, 255, 0.1);
}

.league-name {
  font-size: 16px;
  font-weight: 600;
}

.league-header svg {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.league-header svg.open {
  transform: rotate(180deg);
}

.matches-container {
  padding: 10px 12px;
  border-radius: 0 0 8px 8px;
}

.nav-tabs {
  display: flex;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 9999px;
  padding: 6px;
  width: fit-content;
  overflow-x: auto;
  gap: 4px;
  margin-top: 5px;
}

.tab {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.game-info {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.game-image {
  border-radius: 10px;
  width: 180px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 13px;
  color: #fff;
}

.empty-mission {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 50px 0;
  gap: 20px;
}

.empty-mission p {
  color: #fff;
  font-size: 16px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}
</style>

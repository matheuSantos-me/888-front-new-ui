<template>
  <div class="league-accordion">
    <div class="league-header" @click="toggleOpen">
      <span class="league-name">{{ title }}</span>

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

    <transition name="accordion">
      <div v-if="isOpen" class="matches-container">
        <div class="results">
          <button class="result">
            <span>A. Mineiro (MG)</span>
            <small>2,20</small>
          </button>

          <button class="result">
            <span>Empate</span>
            <small>2,50</small>
          </button>

          <button class="result">
            <span>Cruzeiro (MG)</span>
            <small>3,40</small>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: true,
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
  margin-top: 15px;
}

.league-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cbd7ff08;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.league-header:hover {
  background-color: rgba(203, 215, 255, 0.1);
}

.league-name {
  font-size: 15px;
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
  width: 100%;
  padding: 10px 12px;
  border-radius: 0 0 8px 8px;
}

.results {
  display: flex;
  width: 100%;
  gap: 10px;
}

.result {
  all: unset;
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 6px;
  padding: 10px 12px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease;
}

.result:hover {
  background-color: rgba(67, 145, 231, 0.2);
}

.result span {
  font-size: 14px;
  font-weight: 500;
}

.result small {
  color: #4391e7;
  font-weight: bold;
  font-size: 14px;
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

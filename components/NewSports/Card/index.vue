<template>
  <div class="league-accordion">
    <div class="league-header" @click="toggleOpen">
      <span class="league-name">Inglaterra / Premier League</span>
      <span class="count">{{ matches.length }}</span>

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
        <div v-for="match in matches" :key="match.id" class="match-card">
          <div class="status">
            <span class="live">Esportes Ativos</span>
            <span class="time">61' 2ª Parte</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div class="teams">
              <a href="/sports/live" class="team">
                <img :src="match.home.logo" :alt="match.home.name" />

                <span>{{ match.home.name }}</span>
              </a>

              <a href="/sports/live" class="team">
                <img :src="match.away.logo" :alt="match.away.name" />

                <span>{{ match.away.name }}</span>
              </a>
            </div>

            <div class="results">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 10px;
                "
              >
                <div class="scores">
                  <span class="score">{{ match.home.score }}</span>

                  <span class="score">{{ match.away.score }}</span>
                </div>

                <button class="result">
                  <span>{{ match.home.name }}</span>

                  <small>2,20</small>
                </button>

                <div class="market-container">
                  <div class="market-type">
                    <span>1x2</span>
                  </div>

                  <button class="result">
                    <span>empate</span>
                    <small>2,50</small>
                  </button>
                </div>

                <button class="result">
                  <span>{{ match.away.name }}</span>

                  <small>3,40</small>
                </button>

                <span class="extra">+{{ match.extra }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition v-if="isMobile" name="accordion">
      <div v-if="isOpen" class="matches-container">
        <div v-for="match in matches" :key="match.id" class="match-card">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="status">
              <span class="live">Esportes Ativos</span>

              <span class="time">61' 2ª Parte</span>
            </div>

            <span class="extra" style="font-size: 14px;">+{{ match.extra }}</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 20px;
              margin-bottom: 40px;
            "
          >
            <div class="teams">
              <div class="team">
                <img :src="match.home.logo" :alt="match.home.name" />

                <span>{{ match.home.name }}</span>
              </div>

              <div class="team">
                <img :src="match.away.logo" :alt="match.away.name" />

                <span>{{ match.away.name }}</span>
              </div>
            </div>

            <div class="scores">
              <span class="score">{{ match.home.score }}</span>

              <span class="score">{{ match.away.score }}</span>
            </div>
          </div>

          <div
            style="
            width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <button class="result-mobile">
              <span>{{ match.home.name }}</span>

              <small>2,20</small>
            </button>

            <div class="market-container" style="width: 28%;">
              <div class="market-type">
                <span>1x2</span>
              </div>

              <button class="result-mobile" style="width: 100%;">
                <span>empate</span>
                <small>2,50</small>
              </button>
            </div>

            <button class="result-mobile">
              <span>{{ match.away.name }}</span>

              <small>3,40</small>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isMobile: window.innerWidth <= 780,
      isOpen: true,
      matches: [
        {
          id: 1,
          home: {
            name: "Brentford FC",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
            score: 3,
          },
          away: {
            name: "Liverpool FC",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
            score: 1,
          },
          extra: 31,
        },
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
  margin-top: 15px;
}

.empate {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 15px;
  font-weight: 600;
}

.count {
  background-color: #cbd7ff08;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  margin-right: auto;
  margin-left: 8px;
}

.market-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.market-type {
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
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

.match-card {
  border-radius: 8px;
  padding: 8px;
  position: relative;
}

.status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.live {
  background-color: #e11d48;
  color: #fff;
  font-size: 11px;
  padding: 3px 6px;
  border-radius: 6px;
}

.time {
  color: #b7c6d3;
  font-size: 12px;
}

.teams {
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.team {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
}

.team img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.team span {
  color: #fff;
  font-size: 16px;
}

.scores {
  height: 56px;
  width: 22px;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(203, 215, 255, 0.1);
  border-radius: 6px;
  margin: 0;
  padding: 0;
}

.score {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
}

.results {
  display: flex;
  gap: 10px;
}

.result {
  all: unset;
  max-height: 56px;
  width: 188px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .result {
    width: 100px;
  }
}

.result-mobile {
  all: unset;
  max-height: 56px;
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
}

.result span {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.result small {
  display: block;
  color: #4391e7;
  font-weight: bold;
  font-size: 14px;
}

.extra {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
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

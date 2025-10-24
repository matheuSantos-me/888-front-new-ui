<template>
  <div class="livewins-container">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="tab-button"
        :class="{ active: activeTab === tab }"
        @click="setActiveTab(tab)"
      >
        <div v-if="tab === 'LIVE WINS'" class="indicator"></div>
        
        {{ tab }}
      </button>
    </div>

    <div class="games-list">
      <div class="games-scroll">
        <transition-group
          name="slide-in"
          tag="div"
          class="games-row"
        >
          <div
            v-for="(game, index) in games"
            :key="game.uid"
            class="game-card"
          >
            <a :href="`/game/${game.id}`" class="game-image-wrapper">
              <img
                class="game-image"
                :src="game.image"
                :alt="game.name"
              />
            </a>

            <a :href="`/game/${game.id}`" class="game-info">
              <img
                class="tier-icon"
                src="./icons/Platinum.png"
                :alt="game.tier"
              />

              <span class="player-name">{{ game.player }}</span>
            </a>

            <div class="win-amount">{{ game.win }}</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveWins",
  data() {
    return {
      tabs: ["LIVE WINS", "M", "W", "D"],
      activeTab: "LIVE WINS",
      games: Array.from({ length: 20 }).map((_, i) => ({
        uid: `${Date.now()}-${i}`,
        id: "hacksaw:BananaFarm",
        name: "Banana Farm",
        image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        player: "Hidden",
        tier: "Platinum 5",
        win: "$207.84",
      })),
    };
  },
  mounted() {
    this.simulateLiveUpdates();
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },

    simulateLiveUpdates() {
      const games = [
        {
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
      ];

      
      setInterval(() => {
        const game = games[Math.floor(Math.random() * games.length)];
        const randomWin = (Math.random() * 500 + 50).toFixed(2);
        
        const newGame = {
          uid: `${Date.now()}-${Math.random()}`,
          id: "hacksaw:BananaFarm",
          name: "Banana Farm",
          image: game.image,
          player: `User${Math.floor(Math.random() * 9999)}`,
          tier: "Platinum 5",
          win: `$${randomWin}`,
        };

        this.games.unshift(newGame);

        if (this.games.length > 20) this.games.pop();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.livewins-container {
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  position: relative;
  padding: 0 16px 14px;
  margin-top: 90px;
}

.tabs {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px 0 4px;
  background: rgb(31, 35, 48);
  gap: 6px;
}

.tab-button {
  display: flex;
  align-items: center;
  height: 24px;
  border-radius: 4px;
  padding: 0 6px;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  color: rgb(103, 109, 124);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button.active {
  color: #fff;
  background: rgba(203, 215, 255, 0.08);
  cursor: default;
}

.tab-button .indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(255, 73, 73);
  margin-right: 6px;
}

.games-list {
  min-height: 84px;
  margin-top: 30px;
}

.games-scroll {
  display: flex;
  align-items: center;
  padding-top: 16px;
  overflow-x: hidden;
  scrollbar-width: none;
}

.games-scroll::-webkit-scrollbar {
  display: none;
}

.games-row {
  display: flex;
  align-items: center;
}

.game-card {
  text-align: center;
  user-select: none;
  width: 68px;
  min-width: 68px;
  margin-right: 12px;
  border-radius: 6px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-in-enter-active {
  transition: all 0.4s ease;
}

.slide-in-leave-active {
  transition: all 0.4s ease;
}

.slide-in-enter-from {
  opacity: 0;
  transform: translateX(-25px);
}

.slide-in-leave-to {
  opacity: 0;
  transform: translateX(25px);
}

.game-image-wrapper {
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 4px;
  overflow: hidden;
}

.game-image {
  position: absolute;
  top: 0;
  left: -6%;
  width: 112%;
  height: 113%;
  border-radius: 4px;
}

.game-info {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  padding-top: 6px;
  font-size: 10px;
  color: white;
  font-weight: 500;
}

.tier-icon {
  width: 15px;
  height: 15px;
}

.player-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.win-amount {
  padding-top: 3px;
  color: rgb(114, 242, 56);
  font-size: 11px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
}
</style>

<template>
  <div class="bets-section">
    <header class="header">
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
    </header>

    <section class="table-container">
      <div class="table-wrapper">
        <table class="bets-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Player</th>
              <th>Time</th>
              <th>Probability</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="bet in bets"
              :key="bet.id"
              class="table-row"
              :class="{ 'flash-green': bet.payoutColor === 'text-green' }"
            >
              <td>
                <div class="game-cell">
                  <a :href="bet.link">
                    <img :src="bet.image" :alt="bet.name" class="game-image" />
                  </a>

                  <a :href="bet.link" class="game-name">{{ bet.name }}</a>
                </div>
              </td>

              <td>
                <div class="player-cell">
                  <img
                    src="./icons/Platinum.png"
                    :alt="bet.clan"
                    class="clan-icon"
                  />

                  <span class="player-name">{{ bet.player }}</span>
                </div>
              </td>

              <td class="cell-muted">{{ bet.time }}</td>

              <td :class="[bet.multiplierColor]">{{ bet.multiplier }}</td>

              <td :class="[bet.payoutColor]">{{ bet.payout }}</td>
            </tr>
          </tbody>
        </table>

        <div class="table-fade"></div>
      </div>
    </section>
  </div>
</template>

<script>
import BetsIcon from "./icons/BetsIcon.vue";

export default {
  name: "TableBets",
  components: { BetsIcon },
  data() {
    return {
      activeTab: "High Rollers",
      tabs: ["My Bets", "All Bets", "High Rollers", "Race Classification"],
      bets: [],
      nextId: 0,
    };
  },
  created() {
    this.bets = Array.from({ length: 13 }).map(() => this.generateBet());

    setInterval(() => {
      const newBet = this.generateBet();

      this.bets.unshift(newBet);

      if (this.bets.length > 13) {
        this.bets = this.bets.slice(0, 13);
      }
    }, 1000);
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    generateBet() {
      const games = [
        {
          name: "Gates Of Olympus",
          img: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          img: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          img: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          img: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
      ];

      const players = ["Hidden", "Abgyan", "Jibe2", "Maj96", "Daddydilfers"];

      const game = games[Math.floor(Math.random() * games.length)];
      const player = players[Math.floor(Math.random() * players.length)];
      const payoutValue =
        Math.random() < 0.5 ? 0 : (Math.random() * 100).toFixed(2);
      const payoutColor = payoutValue > 0 ? "text-green" : "cell-muted";

      return {
        id: this.nextId++,
        name: game.name,
        link: "/game/" + game.name.replace(/\s+/g, "-").toLowerCase(),
        image: game.img,
        clan: "Platinum 5",
        player,
        time: `${Math.floor(Math.random() * 10) + 10}s`,
        multiplier: `${(Math.random() * 1 + 0.5).toFixed(2)}x`,
        payout: `$${payoutValue}`,
        multiplierColor: payoutColor,
        payoutColor,
      };
    },
  },
};
</script>

<style scoped>
.bets-section {
  margin: 35px 0 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
}

.tabs {
  display: flex;
  gap: 6px;
}

.tab-button {
  all: unset;
  padding: 0 8px;
  height: 24px;
  border-radius: 4px;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  color: #676d7c;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.tab-button:hover {
  background: rgba(203, 215, 255, 0.05);
}

.tab-button.active {
  color: #fff;
  background: rgba(203, 215, 255, 0.08);
}

.table-container {
  margin-top: 20px;
  position: relative;
}

.table-wrapper {
  height: 540px;
  overflow: hidden;
  position: relative;
}

.table-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(22, 24, 31, 0) 0%,
    rgba(22, 24, 31, 0.25) 50%,
    rgba(22, 24, 31, 0.45) 100%
  );
  backdrop-filter: blur(4px);
}

.bets-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 4px;
}

thead {
  background: rgb(31, 35, 48);
}

th {
  text-transform: uppercase;
  color: #676d7c;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  text-align: left;
  padding: 10px 16px;
}

.table-row {
  background: rgba(203, 215, 255, 0.03);
  border-radius: 4px;
  transition: transform 0.3s ease, background 0.3s ease;
  height: 40px;
}

td {
  padding: 8px 16px;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
}

.game-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.game-image {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

.game-name {
  color: #fff;
  text-decoration: none;
}

.player-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.clan-icon {
  width: 22px;
  height: 22px;
}

.nav-tabs {
  display: flex;
  background-color: rgba(15, 17, 26, 0.55);
  border-radius: 9999px;
  padding: 6px;
  width: fit-content;
  overflow-x: auto;
  gap: 4px;
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

.player-name {
  color: #fff;
}

.cell-muted {
  color: #b1b6c6;
}

.text-green {
  color: rgb(114, 242, 56);
}

@keyframes flashGreen {
  0% {
    background-color: rgba(114, 242, 56, 0.15);
  }
  100% {
    background-color: transparent;
  }
}

.flash-green {
  animation: flashGreen 1s ease-out;
}
</style>

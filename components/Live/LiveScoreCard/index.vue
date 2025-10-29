<template>
  <div class="live-score-card">
    <div class="header">
      <nav class="tabs">
        <span class="tab active">축구</span>
        <span class="tab">국제클럽</span>
        <span class="tab">CONMEBOL Sudamericana</span>
        <span class="tab">ATL - IDV</span>
      </nav>
    </div>

    <div class="scoreboard">
      <div class="match-info">
        <span class="time">50'</span>
        <span class="half">후반전</span>
      </div>

      <table class="stats-table">
        <thead>
          <tr>
            <th>오후 9:30 2025. 10. 28.</th>
            <th style="text-align: center">
              <span class="card yellow">Y</span>
            </th>
            <th style="text-align: center"><span class="card red">R</span></th>
            <th style="text-align: center">1st</th>
            <th style="text-align: center">2nd</th>
            <th style="text-align: center; font-size: 20px">⚽</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="team in teams" :key="team.name">
            <td class="team-cell">
              <div class="team">
                <img :src="team.logo" class="logo" />

                <span style="font-size: 16px">{{ team.name }}</span>
              </div>
            </td>

            <td style="font-size: 16px">{{ team.yellow }}</td>

            <td style="font-size: 16px">{{ team.red }}</td>

            <td style="font-size: 16px">{{ team.firstHalf }}</td>

            <td style="font-size: 16px">{{ team.secondHalf }}</td>

            <td class="score" style="font-size: 16px">
              <strong>{{ team.score }}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="content-nav-tabs">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveScoreCard",
  data() {
    return {
      teams: [
        {
          name: "Liverpool",
          logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          yellow: 1,
          red: 0,
          firstHalf: 2,
          secondHalf: 0,
          score: 2,
        },
        {
          name: "Brentford",
          logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
          yellow: 2,
          red: 1,
          firstHalf: 0,
          secondHalf: 0,
          score: 0,
        },
      ],
      activeTab: "Scoreboard",
      tabs: ["Scoreboard", "Live Streaming"],
    };
  },
};
</script>

<style scoped>
.live-score-card {
  background: rgba(15, 17, 26, 0.55);
  color: #fff;
  border-radius: 10px;
  width: 100%;
  font-family: "Inter", sans-serif;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: #1e2630;
  border-radius: 10px 10px 0 0;
}

.tabs {
  display: flex;
  gap: 15px;
}

.tab {
  color: #a5acb5;
  font-size: 14px;
}

.tab.active {
  color: #fff;
  font-weight: 600;
}

.scoreboard {
  padding: 20px;
}

.match-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b0b0b0;
  font-size: 14px;
  margin-bottom: 10px;
}

/* === TABLE FIX === */
.stats-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background: #1e2630;
  border-radius: 10px;
  overflow: hidden;
}

.stats-table thead {
  background: #202832;
  color: #b0b0b0;
  font-size: 12px;
}

.stats-table th,
.stats-table td {
  padding: 10px;
  border-bottom: 1px solid #2c3540;
}

.stats-table tr:last-child td {
  border-bottom: none;
}

.team-cell {
  text-align: left;
}

.team {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 22px;
  height: 22px;
}

.card {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  color: #000;
}

.card.yellow {
  background: #ffd700;
}

.card.red {
  background: #e74c3c;
  color: #fff;
}

.score {
  background: #2a323d;
  font-weight: 700;
  width: 40px;
}

.content-nav-tabs {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
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

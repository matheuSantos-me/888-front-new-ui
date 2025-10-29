<template>
  <div class="live-match">
    <div class="header">
      <div class="teams">
        <div class="team">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
            alt="ATL"
          />
          <span>ATL</span>
        </div>

        <div class="score">
          <div class="period">2nd | {{ time }}</div>
          <h2>2 : 0</h2>
          <p>AGG 3 : 1</p>
        </div>

        <div class="team">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg"
            alt="IND"
          />
          <span>IND</span>
        </div>
      </div>

      <div class="scorer">
        <small>⚽ 44' BERNARD</small>
      </div>
    </div>

    <div class="field">
      <div class="timer">{{ time }}</div>
      <div class="event">
        <span class="event-type">Throw-in · 50’</span>
        <div class="event-card">
          <div class="event-info">
            <strong>THROW-INS</strong>
            <div class="chart">
              <div class="bar atl" :style="{ width: atlThrow + '%' }"></div>
              <div class="bar ind" :style="{ width: indThrow + '%' }"></div>
            </div>
            <div class="labels">
              <span>ATL {{ atlThrowCount }}</span>
              <span>IND {{ indThrowCount }}</span>
            </div>
          </div>
          <div class="team-name">Atlético Mineiro</div>
        </div>
      </div>
    </div>

    <div class="stats">
      <h3>STATISTICS</h3>

      <!-- CARDS -->
      <div class="stat-row cards-row">
        <div class="cards">
          <div class="team-cards">
            <div class="card yellow"></div>
            <span>2</span>
            <div class="card red"></div>
            <span>0</span>
          </div>

          <div class="label">CARDS</div>

          <div class="team-cards">
            <div class="card yellow"></div>
            <span>1</span>
            <div class="card red"></div>
            <span>0</span>
          </div>
        </div>
      </div>

      <!-- OTHER STATS -->
      <div v-for="stat in computedStats" :key="stat.label" class="stat-row">
        <div class="stat-label">{{ stat.label }}</div>

        <div class="stat-bar">
          <span class="value left">{{ stat.left }}</span>

          <div class="bar-container">
            <div
              class="bar left"
              :style="{ width: stat.leftWidth + '%' }"
            ></div>
            <div
              class="bar right"
              :style="{ width: stat.rightWidth + '%' }"
            ></div>
          </div>

          <span class="value right">{{ stat.right }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveMatchStats",
  data() {
    return {
      time: "49:37",
      atlThrowCount: 13,
      indThrowCount: 7,
      stats: [
        { label: "SHOTS ON TARGET", left: 6, right: 2 },
        { label: "SHOTS OFF TARGET", left: 1, right: 5 },
        { label: "SHOTS BLOCKED", left: 2, right: 3 },
        { label: "CORNER KICKS", left: 4, right: 5 },
      ],
    };
  },
  computed: {
    atlThrow() {
      return (
        (this.atlThrowCount / (this.atlThrowCount + this.indThrowCount)) * 100
      );
    },
    indThrow() {
      return (
        (this.indThrowCount / (this.atlThrowCount + this.indThrowCount)) * 100
      );
    },
    computedStats() {
      return this.stats.map((stat) => {
        const total = stat.left + stat.right || 1;
        return {
          ...stat,
          leftWidth: (stat.left / total) * 100,
          rightWidth: (stat.right / total) * 100,
        };
      });
    },
  },
};
</script>

<style scoped>
.live-match {
  background: rgba(15, 17, 26, 0.55);
  color: white;
  border-radius: 8px;
  padding: 16px;
  width: 360px;
  font-family: "Inter", sans-serif;
  height: fit-content;
}
.header {
  text-align: center;
  border-bottom: 1px solid #1f2b36;
  padding-bottom: 8px;
}
.teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team img {
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
}
.score h2 {
  color: #fff;
  font-size: 28px;
  margin: 4px 0;
}
.period {
  font-size: 12px;
  color: #9bb2c1;
}
.field {
  background: linear-gradient(to bottom, #14334f, #0e1a26);
  border-radius: 8px;
  height: 200px;
  margin: 12px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.timer {
  position: absolute;
  top: 8px;
  background: #1f2b36;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
}
.event {
  text-align: center;
}
.event-type {
  color: #9bb2c1;
  font-size: 13px;
}
.event-card {
  background: #12283a;
  border-radius: 8px;
  margin-top: 6px;
  padding: 8px 12px;
  width: 200px;
}
.chart {
  display: flex;
  height: 8px;
  background: #22394d;
  border-radius: 4px;
  margin: 6px 0;
}
.bar {
  height: 8px;
  border-radius: 4px;
}
.bar.atl {
  background: #3fc26e;
}
.bar.ind {
  background: #0077ff;
}
.bar.empty {
  background: #22394d;
}
.labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.team-name {
  font-size: 13px;
  color: #8fc9ff;
  text-align: center;
  margin-top: 4px;
}
.stats {
  margin-top: 12px;
}
.stats h3 {
  font-size: 14px;
  margin-bottom: 8px;
}
.stat-row {
  margin: 6px 0;
}
.stat-label {
  font-size: 12px;
  color: #9bb2c1;
}
.bars {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.bars .bar {
  flex: 1;
  margin: 0 2px;
  text-align: center;
  font-size: 11px;
  color: #fff;
  background: #0077ff;
  border-radius: 4px;
}
.bars .bar.ind {
  background: #3fc26e;
}
.stats {
  margin-top: 16px;
  color: #fff;
  font-family: "Inter", sans-serif;
}
.stats h3 {
  font-size: 14px;
  margin-bottom: 10px;
  color: #a5acb5;
} /* --- CARDS --- */
.cards-row {
  margin-bottom: 12px;
}
.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.team-cards {
  display: flex;
  align-items: center;
  gap: 4px;
}
.card {
  width: 10px;
  height: 14px;
  border-radius: 2px;
}
.card.yellow {
  background: #f0c419;
}
.card.red {
  background: #e64c4c;
}
.label {
  color: #a5acb5;
  font-size: 12px;
  font-weight: 500;
} /* --- GENERAL STATS --- */
.stat-row {
  margin: 8px 0;
}
.stat-label {
  font-size: 12px;
  color: #a5acb5;
  margin-bottom: 4px;
  text-align: center;
}
.stat-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.stat-bar .value {
  font-size: 12px;
  width: 22px;
  text-align: center;
}
.bar-container {
  position: relative;
  flex: 1;
  height: 6px;
  background: #1c2a38;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
}
.bar {
  height: 6px;
}
.bar.left {
  background: #0077ff;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.bar.right {
  background: #3fc26e;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: auto;
}

</style>

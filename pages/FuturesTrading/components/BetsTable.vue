<template>
  <div class="betting-table-container">
    <table class="betting-table">
      <thead>
        <tr class="betting-header">
          <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(bet, index) in bets" :key="index" class="betting-row">
          <td v-if="type === 'PUBLIC'">{{ bet.userNickName }}</td>

          <td>{{ bet.currency }}</td>

          <td>
            <span
              :style="{ color: bet.direction === 'UP' ? '#14ff00' : '#ff0000' }"
            >
              {{ bet.direction }}
            </span>
          </td>

          <td>{{ bet.wager }}</td>

          <td>{{ bet.entryPrice }}</td>

          <td v-if="type !== 'ACTIVE'">{{ bet.bustPrice }}</td>

          <td v-else>{{ bet.bustPrice }}</td>

          <td>X {{ bet.multiplier }}</td>

          <td>{{ bet.exitPrice }}</td>

          <td>{{ calculatePL(bet) }}</td>

          <td>{{ calculateROI(bet) }}</td>

          <td v-if="type === 'ACTIVE'">
            <el-button
              class="button-closed-bet"
              :loading="loadingCloseBetIds.includes(bet._id)"
              @click="$emit('close-bet', bet)"
            >
              CLOSE BET
            </el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BetsTable",
  props: {
    bets: { type: Array, required: true },
    type: { type: String, default: "ACTIVE" },
    loadingCloseBetIds: { type: Array, default: () => [] },
  },
  methods: {
    calculatePL(bet) {
      return this.$parent.calculatePL(bet);
    },
    calculateROI(bet) {
      return this.$parent.calculateROI(bet);
    },
  },
  computed: {
    tableHeaders() {
      switch (this.type) {
        case "ACTIVE":
          return [
            "CURRENCY",
            "DIRECTION",
            "WAGER",
            "ENTRY PRICE",
            "CURRENT PRICE",
            "BUST PRICE",
            "MULTIPLIER",
            "EXIT PRICE",
            "P&L",
            "ROI",
            "ACTION CLOSE",
          ];
        case "CLOSED":
          return [
            "CURRENCY",
            "DIRECTION",
            "WAGER",
            "ENTRY PRICE",
            "BUST PRICE",
            "MULTIPLIER",
            "EXIT PRICE",
            "P&L",
            "ROI",
          ];
        case "PUBLIC":
          return [
            "PLAYER",
            "CURRENCY",
            "DIRECTION",
            "WAGER",
            "ENTRY PRICE",
            "BUST PRICE",
            "MULTIPLIER",
            "EXIT PRICE",
            "P&L",
            "ROI",
          ];
      }
    },
  },
};
</script>

<style scoped>
.betting-table-container {
  width: 100%;
  overflow-x: auto;
}

.betting-table {
  min-width: calc(100vw - 100px);
  border-collapse: collapse;
  background-color: #1a1a1a;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px 0 30px 0;
  overflow-y: scroll;
}

.betting-header {
  background-color: #fdb72d90;
  color: #000;
}

.betting-header th {
  padding: 12px;
  text-align: center;
}

.betting-row {
  background-color: #14161b;
}

.betting-row td {
  padding: 12px;
  text-align: center;
}

.button-closed-bet {
  height: 35px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: #14161b;
  background-color: #fdb72d;
}
</style>

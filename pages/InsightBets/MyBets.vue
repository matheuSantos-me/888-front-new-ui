<template>
  <el-row class="width-full">
    <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
      <PageHeader :type="'note'" :isShowMobile="false" />
    </div>

    <div class="container-tabs">
      <div
        v-for="tab in tabs"
        :key="tab"
        class="tab"
        :class="{ 'tab-active': tab === selectedTab }"
        @click="selectedTab = tab"
      >
        <span>{{ tab }}</span>
      </div>
    </div>

    <table class="betting-table">
      <thead>
        <tr class="betting-header">
          <th>Betting ID</th>
          <th>Market or Game</th>
          <th>Type</th>
          <th>Selection</th>
          <th>Result</th>
          <th>Date or Placed At</th>
          <th>Result Time</th>
          <th>Bet Amount</th>
          <th>Odds</th>
          <th>Est. Winning</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(bet, index) in bets" :key="index" class="betting-row">
          <td>{{ bet.id }}</td>
          <td>{{ bet.market }}</td>
          <td>{{ bet.type }}</td>
          <td>{{ bet.selection }}</td>
          <td>{{ bet.result }}</td>
          <td>{{ bet.date }}</td>
          <td>{{ bet.resultTime }}</td>
          <td>{{ bet.amount }}</td>
          <td>{{ bet.odds }}</td>
          <td>{{ bet.estWinning }}</td>
        </tr>
      </tbody>
    </table>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

import PageHeader from '~/components/Header/PageHeader'

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    PageHeader,
  },
  computed: { ...mapGetters({ themeType: "getThemeType" }) },
  data() {
    return {
      tabs: ["Open", "Completed", "Canceled"],
      selectedTab: "Open",
      bets: [
        {
          id: "8888898",
          market: "Next prime minster of Canada after...",
          type: "Single",
          selection: "Yes",
          result: "-",
          date: "2025.04.14 10:31 AM",
          resultTime: "-",
          amount: "50,000",
          odds: "7.00x",
          estWinning: "350,000"
        },
        {
          id: "8888899",
          market: "Will Bitcoin hit $100K before 2026?",
          type: "Single",
          selection: "No",
          result: "-",
          date: "2025.05.10 08:22 AM",
          resultTime: "-",
          amount: "20,000",
          odds: "3.50x",
          estWinning: "70,000"
        },
        {
          id: "8888900",
          market: "Will Brazil win the next World Cup?",
          type: "Parlay",
          selection: "Yes",
          result: "-",
          date: "2025.06.01 03:45 PM",
          resultTime: "-",
          amount: "10,000",
          odds: "5.00x",
          estWinning: "50,000"
        },
        {
          id: "8888901",
          market: "Will Trump run in 2028 elections?",
          type: "Single",
          selection: "No",
          result: "-",
          date: "2025.07.01 07:00 PM",
          resultTime: "-",
          amount: "15,000",
          odds: "2.20x",
          estWinning: "33,000"
        },
        {
          id: "8888902",
          market: "Will AI replace 50% of jobs by 2040?",
          type: "Single",
          selection: "Yes",
          result: "-",
          date: "2025.07.10 09:10 AM",
          resultTime: "-",
          amount: "5,000",
          odds: "10.00x",
          estWinning: "50,000"
        },
        {
          id: "8888903",
          market: "Will Ethereum surpass Bitcoin in market cap by 2030?",
          type: "Single",
          selection: "No",
          result: "-",
          date: "2025.07.12 11:00 AM",
          resultTime: "-",
          amount: "12,000",
          odds: "4.00x",
          estWinning: "48,000"
        },
        {
          id: "8888904",
          market: "Next FIFA Ballon d'Or winner",
          type: "Single",
          selection: "Mbappé",
          result: "-",
          date: "2025.07.13 05:30 PM",
          resultTime: "-",
          amount: "25,000",
          odds: "6.50x",
          estWinning: "162,500"
        },
        {
          id: "8888905",
          market: "Which movie will win Best Picture at the Oscars 2026?",
          type: "Single",
          selection: "Untitled Sci-Fi Epic",
          result: "-",
          date: "2025.07.14 04:20 PM",
          resultTime: "-",
          amount: "8,000",
          odds: "12.00x",
          estWinning: "96,000"
        },
        {
          id: "8888906",
          market: "Will a human land on Mars before 2040?",
          type: "Single",
          selection: "Yes",
          result: "-",
          date: "2025.07.15 09:45 AM",
          resultTime: "-",
          amount: "30,000",
          odds: "15.00x",
          estWinning: "450,000"
        },
        {
          id: "8888907",
          market: "Will the global average temperature increase by 2°C before 2050?",
          type: "Single",
          selection: "Yes",
          result: "-",
          date: "2025.07.15 10:30 AM",
          resultTime: "-",
          amount: "10,000",
          odds: "8.00x",
          estWinning: "80,000"
        }
      ]
    };
  },
}
</script>

<style scoped>
  .container-tabs {
    background-color: #14161B;
    height: 40px;
    width: min-content;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .tab {
    text-align: center;
    border-radius: 50px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    font-size: 16px;
  }

  .tab-active {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FDB72D;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }

  .betting-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1a1a1a;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
  }

  .betting-header {
    background-color: #FDB72D90;
    color: #000;
  }

  .betting-header th {
    padding: 12px;
    text-align: center;
  }

  .betting-row {
    background-color: #14161B;
  }

  .betting-row td {
    padding: 12px;
    text-align: center;
  }
</style>

<template>
  <el-row class="width-full">
    <div
      class="animated fadeInUpBig panel panel-inverse"
      :class="`panel-page-${themeType}`"
    >
      <PageHeader :type="'note'" :isShowMobile="false" />
    </div>

    <div>
      <div style="padding: 0px 10px">
        <SearchInput v-model="searchText" />
      </div>

      <div
        style="padding-left: 10px;"
      >
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
      </div>
    </div>

    <div class="cards-grid" :style="isMobile ? 'margin-bottom: 80px;': ''">
      <CardBet v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";

import SearchInput from "~/components/SearchInput";
import CardBet from "~/components/CardBet";
import PageHeader from "~/components/Header/PageHeader";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    SearchInput,
    CardBet,
    PageHeader,
  },
  computed: { ...mapGetters({ themeType: "getThemeType" }) },
  data() {
    return {
      tabs: ["All", "Politics", "Crypto", "Sports"],
      selectedTab: "All",
      cards: [
        {
          title: "Next prime minister of Canada after the election.",
          volume: "89,204,000",
          views: 48,
          isFavorited: false,
        },
        {
          title: "Will Bitcoin surpass $100k by end of 2025?",
          volume: "45,800,000",
          views: 31,
          isFavorited: true,
        },
        {
          title: "Will Brazil win the next World Cup?",
          volume: "22,130,000",
          views: 64,
          isFavorited: false,
        },
        {
          title: "Will Donald Trump win the 2024 US election?",
          volume: "120,560,000",
          views: 75,
          isFavorited: true,
        },
        {
          title: "Will Ethereum reach $10k by 2026?",
          volume: "33,500,000",
          views: 29,
          isFavorited: false,
        },
        {
          title: "Will Apple release a foldable iPhone by 2025?",
          volume: "12,900,000",
          views: 17,
          isFavorited: false,
        },
        {
          title: "Will there be human landing on Mars before 2030?",
          volume: "67,300,000",
          views: 91,
          isFavorited: true,
        },
        {
          title: "Will Argentina win Copa América 2028?",
          volume: "18,450,000",
          views: 27,
          isFavorited: false,
        },
        {
          title: "Will AI surpass human intelligence by 2040?",
          volume: "98,400,000",
          views: 54,
          isFavorited: true,
        },
        {
          title: "Will Netflix surpass 300M subscribers by 2027?",
          volume: "39,700,000",
          views: 22,
          isFavorited: false,
        },
        {
          title: "Will the Olympics be canceled due to global conflict?",
          volume: "28,150,000",
          views: 40,
          isFavorited: false,
        },
        {
          title: "Will Tesla become the world’s largest automaker?",
          volume: "55,500,000",
          views: 36,
          isFavorited: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-tabs {
  background-color: #14161b;
  height: 40px;
  width: min-content;
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin: 20px 10px 10px 0px;
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
  background-color: #fdb72d;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 10px;
  margin-top: 20px;
}
</style>

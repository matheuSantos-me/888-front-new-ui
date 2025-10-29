<template>
  <div class="container">
    <div class="content">
      <div class="content-scroll">
        <LiveScoreCard />

        <FilterTabs />

        <Card title="2X1" />

        <Card title="6X2" />

        <Card title="1X1" />

        <Card title="5X1" />

        <Card title="3X1" />
      </div>

      <div v-if="!isMobile" class="stats-fixed">
        <LiveMatchStats />
      </div>
    </div>

    <div class="content-table">
      <TableBets />
    </div>

    <Footer />
  </div>
</template>

<script>
import LiveScoreCard from "~/components/Live/LiveScoreCard";
import LiveMatchStats from "~/components/Live/LiveMatchStats";
import FilterTabs from "~/components/Live/FilterTabs";
import Card from "~/components/Live/Card";
import TableBets from "~/components/Live/TableBets";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LiveScoreCard,
    LiveMatchStats,
    FilterTabs,
    Card,
    TableBets,
    Footer,
  },
  data() {
    return {
      isMobile: window.innerWidth < 1000,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0;
}

.content {
  display: flex;
  margin: 90px 30px 0 30px;
  padding: 0px 24px 0px;
  gap: 20px;
}

.content-table {
  margin: 0 30px;
  padding: 0px 24px 48px;
}

.stats-fixed {
  position: sticky;
  top: 90px;
  height: fit-content;
}

@media (max-width: 1450px) {
  .content {
    margin: 90px 20px 0 20px;
    padding: 0;
  }
}

@media (max-width: 1024px) {
  .content {
    margin: 140px 20px 0 20px;
    padding: 0;
  }
}

@media (max-width: 700px) {
  .content {
    margin: 140px 10px 0 10px;
    padding: 0;
  }
}

@media (max-width: 1450px) {
  .content-table {
    margin: 0 20px;
    padding: 0;
  }
}

@media (max-width: 1024px) {
  .content-table {
    margin: 0 20px;
    padding: 0;
  }
}

@media (max-width: 700px) {
  .content-table {
    margin: 0 10px;
    padding: 0;
  }
}

.content-scroll {
  flex: 1;
  min-width: 0;
}

@media (max-width: 1000px) {
  .content-scroll {
    width: 100%;
  }
}
</style>

<template>
  <div class="container">
    <div class="content">
      <LiveWins />

      <CasinoTabs />

      <CarouselRollbitOriginals />

      <CarouselSlots />

      <CarouselLiveCasino />

      <CarouselGameShows />

      <CarouselNewReleases />

      <CarouselProviders />

      <TableBets />
    </div>

    <Footer />
  </div>
</template>

<script>
import LiveWins from "~/components/NewComponents/LiveWins";
import CasinoTabs from "~/components/Casino/CasinoTabs";
import CarouselRollbitOriginals from "~/components/Casino/CarouselRollbitOriginals";
import CarouselSlots from "~/components/Casino/CarouselSlots";
import CarouselLiveCasino from "~/components/Casino/CarouselLiveCasino";
import CarouselGameShows from "~/components/Casino/CarouselGameShows";
import CarouselNewReleases from "~/components/Casino/CarouselNewReleases";
import CarouselProviders from "~/components/Casino/CarouselProviders";
import TableBets from "~/components/NewComponents/TableBets";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LiveWins,
    CasinoTabs,
    CarouselRollbitOriginals,
    CarouselSlots,
    CarouselLiveCasino,
    CarouselGameShows,
    CarouselNewReleases,
    CarouselProviders,
    TableBets,
    Footer,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0;
}

.content {
  margin: 0 30px;
  padding: 0px 24px 48px;
}
</style>

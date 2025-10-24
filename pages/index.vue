<template>
  <div class="container">
    <div class="content">
      <LiveWins />
      
      <Banner />
      
      <CarouselExplore />
      
      <CarouselCryptoFutures />
      
      <CarouselCasino />
      
      <CarouselSportsBook />
      
      <CarouselNFTLootboxes />
      
      <TableBets />
    </div>

    <Footer />
  </div>
</template>

<script>
import LiveWins from "~/components/NewComponents/LiveWins";
import Banner from "~/components/Home/Banner";
import CarouselExplore from "~/components/Home/CarouselExplore";
import CarouselCryptoFutures from "~/components/Home/CarouselCryptoFutures";
import CarouselCasino from "~/components/Home/CarouselCasino";
import CarouselSportsBook from "~/components/Home/CarouselSportsBook";
import CarouselNFTLootboxes from "~/components/Home/CarouselNFTLootboxes";
import TableBets from "~/components/NewComponents/TableBets";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LiveWins,
    Banner,
    CarouselExplore,
    CarouselCryptoFutures,
    CarouselCasino,
    CarouselSportsBook,
    CarouselNFTLootboxes,
    TableBets,
    Footer
  }
}
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

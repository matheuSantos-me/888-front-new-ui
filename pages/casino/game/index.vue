<template>
  <div class="container">
    <div class="content">
      <LiveGame />

      <AccordionGameDetail />

      <CarouselSuggestionCasino />

      <CarouselProviders />

      <TableBets />
    </div>

    <Footer />
  </div>
</template>

<script>
import LiveGame from "~/components/Game/LiveGame";
import AccordionGameDetail from "~/components/Game/AccordionGameDetail";
import CarouselSuggestionCasino from "~/components/Game/CarouselSuggestionCasino";
import CarouselProviders from "~/components/Game/CarouselProviders";
import TableBets from "~/components/Game/TableBets";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LiveGame,
    AccordionGameDetail,
    CarouselSuggestionCasino,
    CarouselProviders,
    TableBets,
    Footer
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

@media (max-width: 1450px) {
  .content {
    margin: 0 20px;
    padding: 0 0 48px;
  }
}

@media (max-width: 700px) {
  .content {
    margin: 0 10px;
    padding: 0 0 48px;
  }
}
</style>

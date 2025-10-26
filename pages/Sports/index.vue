<template>
  <div class="container">
    <div class="content">
      <CarouselPromotion />

      <SportsTabs />

      <CarouselSports />

      <ActiveEventsTabs />

      <Card />
      
      <Card />
      
      <Card />

      <PopularEventsList />

      <!-- <TableBets /> -->

      <DetailsBets />
    </div>

    <Footer />
  </div>
</template>

<script>
import CarouselPromotion from "~/components/NewSports/CarouselPromotion";
import SportsTabs from "~/components/NewSports/SportsTabs";
import CarouselSports from "~/components/NewSports/CarouselSports";
import ActiveEventsTabs from "~/components/NewSports/ActiveEventsTabs";
import PopularEventsList from "~/components/NewSports/PopularEventsList";
import Card from "~/components/NewSports/Card";
import TableBets from "~/components/NewSports/TableBets";
import DetailsBets from "~/components/NewSports/DetailsBets";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    CarouselPromotion,
    SportsTabs,
    CarouselSports,
    ActiveEventsTabs,
    PopularEventsList,
    Card,
    TableBets,
    DetailsBets,
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

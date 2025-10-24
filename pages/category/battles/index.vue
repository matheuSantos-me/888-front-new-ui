<template>
  <div class="container">
    <div class="content">
      <LiveWins />

      <CasinoTabs />

      <Cards />
    </div>

    <Footer />
  </div>
</template>

<script>
import LiveWins from "~/components/NewComponents/LiveWins";
import CasinoTabs from "~/components/Category/Battles/CasinoTabs";
import Cards from "~/components/Category/Battles/Cards";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    LiveWins,
    CasinoTabs,
    Cards,
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

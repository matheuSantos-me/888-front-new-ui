<template>
  <div class="container">
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Footer
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0;
}
</style>

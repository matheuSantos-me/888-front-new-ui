<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <CasinoIcon />

        <a href="/casino" class="title">CASINO</a>

        <a href="/casino" class="text-link">All Games</a>
      </div>

      <div class="content-actions-carousel">
        <div>
          <span>Recommended</span>
        </div>

        <button
          class="button-action-carousel"
          @click="scrollLeft"
          aria-label="Previous"
        >
          <ArrowLeftIcon />
        </button>

        <button
          class="button-action-carousel"
          @click="scrollRight"
          aria-label="Next"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>

    <div ref="carousel" class="container-cards">
      <div class="card">
        <img src="./icons/SweetBonanza.png" alt="SweetBonanza" />
      </div>

      <div class="card">
        <img src="./icons/GatesOfOlympus.png" alt="GatesOfOlympus" />
      </div>

      <div class="card">
        <img src="./icons/Mines.png" alt="Mines" />
      </div>

      <div class="card">
        <img src="./icons/FruitParty.png" alt="FruitParty" />
      </div>

      <div class="card">
        <img src="./icons/SugarRush.png" alt="SugarRush" />
      </div>

      <div class="card">
        <img src="./icons/Plinko.png" alt="Plinko" />
      </div>

      <div class="card">
        <img src="./icons/Xflip.png" alt="Xflip" />
      </div>

      <div class="card">
        <img src="./icons/Blackjack.png" alt="Blackjack" />
      </div>

      <div class="card">
        <img src="./icons/GemsBonanza.png" alt="GemsBonanza" />
      </div>

      <div class="card">
        <img src="./icons/StarlightPrincess.png" alt="StarlightPrincess" />
      </div>

      <div class="card">
        <img src="./icons/Mental.png" alt="Mental" />
      </div>

      <div class="card">
        <img src="./icons/Xroulette.png" alt="Xroulette" />
      </div>

      <div class="card">
        <img src="./icons/Xcrash.png" alt="Xcrash" />
      </div>

      <div class="card">
        <img src="./icons/Rollercoaster.png" alt="Rollercoaster" />
      </div>

      <div class="card">
        <img src="./icons/Duelarena.png" alt="Duelarena" />
      </div>

      <div class="card">
        <img src="./icons/Crazytime.png" alt="Crazytime" />
      </div>

      <div class="card">
        <img src="./icons/WantedDeadoraWild.png" alt="WantedDeadoraWild" />
      </div>
    </div>
  </div>
</template>

<script>
import CasinoIcon from "./icons/CasinoIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

export default {
  name: "CarouselCasino",
  components: {
    CasinoIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  methods: {
    scrollLeft() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.clientWidth;

      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    },

    scrollRight() {
      const carousel = this.$refs.carousel;
      const scrollAmount = carousel.clientWidth;

      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 35px;
}

.content-headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-labels {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
}

.text-link {
  text-transform: none;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  color: #ffb018;
  margin-left: 16px;
}

.content-actions-carousel {
  display: flex;
  align-items: center;
  gap: 6px;
}

.content-actions-carousel div {
  display: flex;
  align-items: center;
  height: 24px;
  min-height: 24px;
  padding: 0px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: default;
  margin-right: 15px;
  color: #fff;
  background: #cbd7ff0e;
}

.button-action-carousel {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 24px;
  width: 32px;
  padding: 0px 8px;
  border-radius: 4px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  background: #cbd7ff08;
  transition: background 0.2s ease;
}

.button-action-carousel:hover {
  background: #cbd7ff0e;
}

.container-cards {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 20px 0 0 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.container-cards::-webkit-scrollbar {
  display: none;
}

.card {
  width: 150px;
  min-width: 150px;
  max-width: 150px;
  height: 210px;
  min-height: 210px;
  max-height: 210px;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>

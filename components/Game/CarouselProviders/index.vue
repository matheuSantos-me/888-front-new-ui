<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <ProvidersIcon />

        <a href="/providers" class="title">PROVIDERS</a>
      </div>

      <div class="content-actions-carousel">
        <button class="button-action-carousel" @click="scrollLeft" aria-label="Previous">
          <ArrowLeftIcon />
        </button>

        <button class="button-action-carousel" @click="scrollRight" aria-label="Next">
          <ArrowRightIcon />
        </button>
      </div>
    </div>

    <div ref="carousel" class="container-cards">
      <div v-for="(provider, index) in providers" :key="index" class="card">
        <a :href="`/providers/${provider.slug}`">
          <div class="card-inner">
            <img v-if="provider.slug !== 'rollbit'" :src="provider.image" :alt="provider.name" class="card-logo" />
            
            <img v-else src="./icons/rollbit-logo-glow.svg" :alt="provider.name" class="card-logo" />

            <div class="card-info">{{ provider.games }} Games</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ProvidersIcon from "./icons/ProvidersIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

export default {
  name: "CarouselProviders",
  components: {
    ProvidersIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      providers: [
        { slug: "pragmatic", name: "Pragmatic Play", games: 1018, image: "https://cdn2.softswiss.net/logos/providers/white/pragmatic.svg" },
        { slug: "evolution", name: "Evolution", games: 620, image: "https://cdn2.softswiss.net/logos/providers/white/evolution.svg" },
        { slug: "rollbit", name: "Rollbit", games: 12, image: "./icons/rollbit-logo-glow.svg" },
        { slug: "nolimit", name: "NoLimit City", games: 119, image: "https://cdn2.softswiss.net/logos/providers/white/nolimit.svg" },
        { slug: "playngo", name: "Play’n GO", games: 375, image: "https://cdn2.softswiss.net/logos/providers/white/playngo.svg" },
        { slug: "hacksaw", name: "Hacksaw Gaming", games: 138, image: "https://cdn2.softswiss.net/logos/providers/white/hacksaw.svg" },
        { slug: "relax", name: "Relax Gaming", games: 138, image: "https://cdn2.softswiss.net/logos/providers/white/relax.svg" },
        { slug: "bgaming", name: "Bgaming", games: 146, image: "https://cdn2.softswiss.net/logos/providers/white/bgaming.svg" },
        { slug: "pushgaming", name: "Push Gaming", games: 65, image: "https://cdn2.softswiss.net/logos/providers/white/pushgaming.svg" },
        { slug: "redtiger", name: "Red Tiger", games: 319, image: "https://cdn2.softswiss.net/logos/providers/white/redtiger.svg" },
        { slug: "pgsoft", name: "PG Soft", games: 148, image: "https://cdn2.softswiss.net/logos/providers/white/pgsoft.svg" },
        { slug: "quickspin", name: "Quickspin", games: 110, image: "https://cdn2.softswiss.net/logos/providers/white/quickspin.svg" },
        { slug: "fugaso", name: "Fugaso", games: 100, image: "https://cdn2.softswiss.net/logos/providers/white/fugaso.svg" },
        { slug: "microgaming", name: "Microgaming", games: 80, image: "https://cdn2.softswiss.net/logos/providers/white/microgaming.svg" },
        { slug: "slotmill", name: "Slotmill", games: 44, image: "https://cdn2.softswiss.net/logos/providers/white/slotmill.svg" },
        { slug: "amatic", name: "Amatic", games: 80, image: "https://cdn2.softswiss.net/logos/providers/white/amatic.svg" },
        { slug: "bsg", name: "Betsoft Gaming", games: 156, image: "https://cdn2.softswiss.net/logos/providers/white/bsg.svg" },
        { slug: "retrogaming", name: "Retro Gaming", games: 81, image: "https://cdn2.softswiss.net/logos/providers/white/retrogaming.svg" },
        { slug: "playtech", name: "Playtech", games: 270, image: "https://cdn2.softswiss.net/logos/providers/white/playtech.svg" },
        { slug: "egt", name: "EGT", games: 166, image: "https://cdn2.softswiss.net/logos/providers/white/egt.svg" },
        { slug: "peterandsons", name: "Peter & Sons", games: 52, image: "https://cdn2.softswiss.net/logos/providers/white/peterandsons.svg" },
        { slug: "maxwingaming", name: "Maxwin Gaming", games: 41, image: "https://cdn2.softswiss.net/logos/providers/white/maxwingaming.svg" },
        { slug: "fantasma", name: "Fantasma Games", games: 22, image: "https://cdn2.softswiss.net/logos/providers/white/fantasma.svg" },
        { slug: "blueprint", name: "Blueprint", games: 20, image: "https://cdn2.softswiss.net/logos/providers/white/blueprint.svg" },
        { slug: "merkur", name: "Merkur", games: 8, image: "https://cdn2.softswiss.net/logos/providers/white/merkur.svg" },
        { slug: "gamebeat", name: "Gamebeat", games: 6, image: "https://cdn2.softswiss.net/logos/providers/white/gamebeat.svg" },
        { slug: "pearfiction", name: "PearFiction", games: 4, image: "https://cdn2.softswiss.net/logos/providers/white/pearfiction.svg" },
        { slug: "thunderkick", name: "Thunderkick", games: 88, image: "https://cdn2.softswiss.net/logos/providers/white/thunderkick.svg" },
        { slug: "irondogstudio", name: "Iron Dog", games: 93, image: "https://cdn2.softswiss.net/logos/providers/white/irondogstudio.svg" },
        { slug: "belatra", name: "Belatra", games: 86, image: "https://cdn2.softswiss.net/logos/providers/white/belatra.svg" },
      ],
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.carousel.scrollBy({
        left: -this.$refs.carousel.clientWidth,
        behavior: "smooth",
      });
    },
    scrollRight() {
      this.$refs.carousel.scrollBy({
        left: this.$refs.carousel.clientWidth,
        behavior: "smooth",
      });
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
  color: #fff;
}

.title {
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  text-decoration: none;
}

.content-actions-carousel {
  display: flex;
  align-items: center;
  gap: 6px;
}

.button-action-carousel {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 34px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background: rgba(203, 215, 255, 0.08);
  transition: background 0.2s ease;
}
.button-action-carousel:hover {
  background: rgba(203, 215, 255, 0.14);
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
  flex: 0 0 auto;
  width: 160px;
  height: 120px;
  scroll-snap-align: start;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
}

.card-inner {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 36px;
  height: 100%;
  background: linear-gradient(0deg, rgba(203, 215, 255, 0.06) 0%, rgba(203, 215, 255, 0.03) 100%);
  position: relative;
}

.card-logo {
  width: 100%;
  max-height: 60px;
  object-fit: contain;
}

.card-info {
  position: absolute;
  bottom: 12px;
  color: rgb(103, 109, 124);
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
}
</style>

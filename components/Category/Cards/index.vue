<template>
  <div class="cards-grid">
    <div
      v-for="(game, index) in games"
      :key="index"
      class="card"
      @click="openGame(game)"
    >
      <img :src="game.image" :alt="game.name || `Game ${index + 1}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      games: [
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
      ],
    };
  },
  methods: {
    openGame(game) {
      console.log(`Abrindo jogo: ${game.name}`);
    },
  },
};
</script>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 18px 12px;
  padding-top: 25px;
}

.card {
  position: relative;
  width: 100%;
  padding-bottom: 133.334%;
  background: rgba(203, 215, 255, 0.03);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>

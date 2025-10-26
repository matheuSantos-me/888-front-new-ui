<template>
  <div class="carousel-wrapper">
    <div ref="carousel" class="carousel-container">
      <a
        v-for="(promo, index) in promotions"
        :key="index"
        :href="promo.link"
        class="card"
      >
        <div class="content-texts">
          <div class="badge">Promotion</div>

          <span>{{ promo.title }}</span>

          <p class="description">{{ promo.subtitle }}</p>

          <button class="button-bet-now">Bet Now</button>
        </div>

        <div class="content-image">
          <img
          :src="promo.image"
          :alt="promo.title"
          class="image-card"
          loading="lazy"
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselPromotion",
  data() {
    return {
      promotions: [
        {
          title: "El Clásico",
          subtitle: "100% Cash Back If Bet Loses",
          link: "/trading",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/5fff804022c40ca7cc391bc861437d5f569e6f40-540x540.png?w=330&h=330&fit=min&auto=format",
        },
        {
          title: "MLB World Series",
          subtitle: "Home Run Bonanza",
          link: "/sports/mlb",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/56724a7098e7ccf57730e9e89cc4c30128747952-1080x1080.png?w=330&h=330&fit=min&auto=format",
        },
        {
          title: "NBA",
          subtitle: "Half Time Payout",
          link: "/sports/nba",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/8263b670816606200cbdef88911bfb26e248f36f-540x540.png?w=330&h=330&fit=min&auto=format",
        },
        {
          title: "Premier League",
          subtitle: "2 Goal Lead Payout",
          link: "/sports/premier-league",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/592265f316cfa0c04544dc6f28b8ef7902b43478-1080x1080.jpg?w=330&h=330&fit=min&auto=format",
        },
        {
          title: "UFC 321",
          subtitle: "Prize Pool $50K",
          link: "/sports/ufc",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/228ec31916af769f5318813ce3e843a88bd92358-540x540.png?w=330&h=330&fit=min&auto=format",
        },
        {
          title: "LoL Worlds 2025",
          subtitle: "$50k Raffle",
          link: "/sports/lol-worlds",
          image:
            "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/1776a4ea6b9091f82edf204b58924d822a4e99bd-1080x1080.png?w=330&h=330&fit=min&auto=format",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  margin-top: 65px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .carousel-wrapper {
    margin-top: 115px;
  }
}

.carousel-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 20px 0;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.card {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  height: 220px;
  width: 380px;
  background: #cbd7ff08;
  text-decoration: none;
  color: white;
  scroll-snap-align: start;
  transition: transform 0.15s ease, background 0.2s ease;
}

.content-texts {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.badge {
  background: white;
  color: #071824;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 6px;
  width: fit-content;
  margin-bottom: 8px;
}

.content-texts span {
  color: #ffffff;
  font-family: "proxima-nova", ui-sans-serif, -apple-system, system-ui, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 6px;
}

.description {
  font: 400 14px/20px "proxima-nova", ui-sans-serif, -apple-system, system-ui, sans-serif;
  color: #d0d8e0;
  margin-bottom: auto;
}

.button-bet-now {
  margin-top: auto;
  height: 42px;
  width: 120px;
  color: #fff;
  background-color: transparent;
  border: 1.5px solid #ffffff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.content-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.image-card {
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  margin-right: -10px;
}
</style>

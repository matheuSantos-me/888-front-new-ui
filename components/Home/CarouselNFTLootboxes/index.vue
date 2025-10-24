<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <CarouselNFTLootboxesIcon />

        <a href="/casino" class="title">NFT LOOTBOXES</a>

        <a href="/casino" class="text-link">View All</a>
      </div>

      <div class="content-actions-carousel">
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
      <div v-for="(_, i) in Array.from({ length: 30 })" :key="i" class="card">
        <span>{{'#8289'}}</span>

        <p>Rollbots·$794</p>

        <img src="./icons/SportsRollbots.png" alt="SportsRollbots" class="card-image" />

        <div class="card-items">
          <div>
            <img src="data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke-miterlimit='10'%20stroke-width='3.5'%3e%3cpath%20d='m78.857%2078.057h-1.023a6.69%206.69%200%200%201%20-6.69-6.69v-14.001a6.69%206.69%200%200%201%206.69-6.69h1.023a6.69%206.69%200%200%201%206.69%206.69v14.002a6.69%206.69%200%200%201%20-6.69%206.689z'%20fill='%23666766'%20stroke='%23333'/%3e%3cpath%20d='m82.344%2051.683c.426.88.672%201.864.672%202.907v14.002a6.69%206.69%200%200%201%20-6.69%206.69h-1.023a6.662%206.662%200%200%201%20-2.89-.663c-.161-.035-.326-.06-.482-.105a6.687%206.687%200%200%200%205.903%203.544h1.023a6.69%206.69%200%200%200%206.69-6.69v-14.002c0-2.412-1.288-4.507-3.203-5.683z'%20opacity='.2'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='m50%2017.903v31.733'%20fill='none'%20stroke='%23333'/%3e%3ccircle%20cx='50'%20cy='17.903'%20fill='%23e15c64'%20r='7.903'%20stroke='%23333'/%3e%3cpath%20d='m56.537%2013.462a15.457%2015.457%200%200%201%20-1.259%204.328c-1.863%204.104-5.151%206.87-8.323%207.406a7.903%207.903%200%200%200%209.582-11.734z'%20opacity='.2'%20stroke='%23000'%20stroke-linejoin='round'/%3e%3cpath%20d='m21.143%2078.057h1.023a6.69%206.69%200%200%200%206.69-6.69v-14.001a6.69%206.69%200%200%200%20-6.69-6.69h-1.023a6.69%206.69%200%200%200%20-6.69%206.69v14.002a6.69%206.69%200%200%200%206.69%206.689z'%20fill='%23666766'%20stroke='%23333'/%3e%3cpath%20d='m24.974%2051.3c.048.322.08.649.08.984v14.002a6.69%206.69%200%200%201%20-6.69%206.69h-1.023a6.661%206.661%200%200%201%20-2.808-.624c.477%203.227%203.25%205.706%206.609%205.706h1.023a6.69%206.69%200%200%200%206.69-6.69v-14.002a6.682%206.682%200%200%200%20-3.881-6.066z'%20opacity='.2'%20stroke='%23000'%20stroke-linejoin='round'/%3e%3cpath%20d='m71.646%2090h-43.292a5.133%205.133%200%200%201%20-5.133-5.133v-43.468a5.133%205.133%200%200%201%205.133-5.133h43.293a5.133%205.133%200%200%201%205.133%205.133v43.468a5.134%205.134%200%200%201%20-5.134%205.133z'%20fill='%23e0e0e0'%20stroke='%23333'/%3e%3cpath%20d='m71.646%2036.266h-1.533v42.164a5.133%205.133%200%200%201%20-5.133%205.133h-41.76v1.304a5.133%205.133%200%200%200%205.133%205.133h43.293a5.133%205.133%200%200%200%205.133-5.133v-43.468a5.133%205.133%200%200%200%20-5.133-5.133z'%20opacity='.2'%20stroke='%23000'/%3e%3cg%20stroke='%23333'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m37.944%2069.948a6.057%206.057%200%200%200%20-6.057%206.057%206.057%206.057%200%200%200%206.057%206.057h1.658v-12.114z'/%3e%3cpath%20d='m39.602%2069.948h6.932v12.115h-6.932z'/%3e%3cpath%20d='m46.534%2069.948h6.932v12.115h-6.932z'/%3e%3cpath%20d='m62.056%2069.948h-1.658v12.115h1.658a6.057%206.057%200%200%200%206.057-6.057%206.057%206.057%200%200%200%20-6.057-6.058z'/%3e%3cpath%20d='m53.466%2069.948h6.932v12.115h-6.932z'/%3e%3c/g%3e%3cg%20fill='%23acbd81'%3e%3ccircle%20cx='38.829'%20cy='53.343'%20r='5.942'/%3e%3ccircle%20cx='61.171'%20cy='53.343'%20r='5.942'/%3e%3c/g%3e%3c/g%3e%3cg%20stroke-linecap='round'%3e%3cpath%20d='m28.356%2054.625v.925'%20fill='none'%20stroke='%23fff'/%3e%3cpath%20d='m28.356%2042.375v7.261'%20fill='none'%20stroke='%23fff'/%3e%3cpath%20d='m32.169%2077.833a6.058%206.058%200%200%200%205.775%204.229h24.112c2.708%200%205-1.778%205.775-4.229z'%20opacity='.2'%20stroke='%23000'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="Rollbot" scale="1"></img>

            <p>Rollbot</p>
          </div>

        <p>18 Items</p>  
        </div>

        <button>Open for $26.9</button>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselNFTLootboxesIcon from "./icons/CarouselNFTLootboxesIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

export default {
  name: "CarouselNFTLootboxes",
  components: {
    CarouselNFTLootboxesIcon,
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
  width: 215px;
  border-radius: 8px;
  background: #cbd7ff08;
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  padding: 16px;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card span {
  color: #fff;
    font-size: 14px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 800;
    font-style: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.card p {
  padding: 6px 0px 12px;
    color: rgb(177, 182, 198);
    font-size: 12px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.card-image {
  display: block;
    height: 185px;
    width: 185px;
    border-radius: 3px;
    object-fit: cover;
}

.card button {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  color: #141722;
  background: #ffe81a;
  box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
    rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(255, 135, 25) 0px 0px 12px inset;
  width: 100%;
}

.card-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0;
}

.card-items :first-child {
  display: flex
;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    column-gap: 5.15021px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}

.card-items :first-child p {
  color: #fff;
  font-weight: 500;
  padding: 0;
}

.card-items :first-child img {
  padding: 0;
  width: 20px;
  height: 20px;
}

.card-items :last-child {
  color: #b1b6c6;
    white-space: nowrap;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    padding: 0;
}
</style>

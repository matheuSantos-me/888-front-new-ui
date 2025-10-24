<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <ExploreIcon />

        <a href="/sports" class="title">EXPLORE ROLLBIT</a>
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
      <a href="/trading" class="card">
        <div class="card-headers">
          <FuturesIcon />

          <span>1000x FUTURES</span>
        </div>

        <p class="description">
          Trade a diverse selection of coins with up to 1000x leverage.
        </p>

        <div class="card-icons">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/1.png"
            alt="BTC"
            class="icon-crypto"
          />

          <img
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png"
            alt="ETH"
            class="icon-crypto"
          />

          <img
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/16116.png"
            alt="SOL"
            class="icon-crypto"
          />

          <img
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/36645.png"
            alt="XPL"
            class="icon-crypto"
          />

          <img
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/36341.png"
            alt="ASTER"
            class="icon-crypto"
          />

          <div class="text-link">
            <span>All Futures</span>

            <ArrowRightGoldIcon />
          </div>
        </div>
      </a>

      <a href="/casino" class="card">
        <div class="card-headers">
          <CasinoIcon />

          <span>CASINO</span>
        </div>

        <p class="description">
          Discover Rollbit exclusive games as well as 10,000+ classic casino
          games.
        </p>

        <div class="card-icons">
          <img
            src="./icons/SweetBonanza.png"
            alt="SweetBonanza"
            class="icon-casino"
          />

          <img
            src="./icons/GatesOfOlympus.png"
            alt="GatesOfOlympus"
            class="icon-casino"
          />

          <img src="./icons/Mines.png" alt="Mines" class="icon-casino" />

          <img
            src="./icons/FruitParty.png"
            alt="FruitParty"
            class="icon-casino"
          />

          <img
            src="./icons/SugarRush.png"
            alt="SugarRush"
            class="icon-casino"
          />

          <div class="text-link">
            <span>All Games</span>

            <ArrowRightGoldIcon />
          </div>
        </div>
      </a>

      <a href="/rlb/trade" class="card">
        <div class="card-headers">
          <RollbitCoinIcon />

          <span>ROLLBIT COIN (RLB)</span>
        </div>

        <p class="description">
          Trade RLB, Rollbit's deflationary utility token that unlocks exclusive
          features and bonuses.
        </p>

        <div class="card-icons">
          <RollbitCoinCryptoIcon />

          <div>
            <div class="coin-name">
              <span>Rollbit Coin</span>

              <span>RLB</span>
            </div>

            <div class="coin-values">
              <span>$0.0643527</span>

              <DoubleArrowDownIcon />

              <span>-1.23%</span>
            </div>
          </div>

          <div class="text-link">
            <span>Learn More</span>

            <ArrowRightGoldIcon />
          </div>
        </div>
      </a>

      <a href="/sports" class="card">
        <div class="card-headers">
          <SportsbookIcon />

          <span>SPORTSBOOK</span>
        </div>

        <p class="description">
          Bet on the results of over 40 sports events with our premier betting
          platform.
        </p>

        <div class="card-icons">
          <FootballIcon />
          <HorseRacingIcon />
          <TennisIcon />
          <FifaIcon />
          <BasketballIcon />

          <div class="text-link">
            <span>All Sports</span>

            <ArrowRightGoldIcon />
          </div>
        </div>
      </a>

      <a href="/rewards" class="card">
        <div class="card-headers">
          <RewardsIcon />

          <span>REWARDS</span>
        </div>

        <p class="description">
          Get back up to 70% of the house edge for every bet you place.
        </p>

        <div class="card-icons">
          <img
            src="./icons/CashbackDaily.png"
            alt="CashbackDaily"
            class="icon-casino"
          />

          <img src="./icons/Rakeback.png" alt="Rakeback" class="icon-casino" />

          <img
            src="./icons/CashbackWeekly.png"
            alt="CashbackWeekly"
            class="icon-casino"
          />

          <img
            src="./icons/RakebackAvailable.png"
            alt="RakebackAvailable"
            class="icon-casino"
          />

          <img
            src="./icons/CashbackMonthly.png"
            alt="CashbackMonthly"
            class="icon-casino"
          />

          <div class="text-link">
            <span>Learn More</span>

            <ArrowRightGoldIcon />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ExploreIcon from "./icons/ExploreIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
import FuturesIcon from "./icons/FuturesIcon.vue";
import CasinoIcon from "./icons/CasinoIcon.vue";
import RollbitCoinIcon from "./icons/RollbitCoinIcon.vue";
import SportsbookIcon from "./icons/SportsbookIcon.vue";
import RewardsIcon from "./icons/RewardsIcon.vue";
import RollbitCoinCryptoIcon from "./icons/RollbitCoinCryptoIcon.vue";
import DoubleArrowDownIcon from "./icons/DoubleArrowDownIcon.vue";
import FootballIcon from "./icons/FootballIcon.vue";
import HorseRacingIcon from "./icons/HorseRacingIcon.vue";
import TennisIcon from "./icons/TennisIcon.vue";
import FifaIcon from "./icons/FifaIcon.vue";
import BasketballIcon from "./icons/BasketballIcon.vue";
import ArrowRightGoldIcon from "./icons/ArrowRightGoldIcon.vue";

export default {
  name: "CarouselExplore",
  components: {
    ExploreIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    FuturesIcon,
    CasinoIcon,
    RollbitCoinIcon,
    SportsbookIcon,
    RewardsIcon,
    RollbitCoinCryptoIcon,
    DoubleArrowDownIcon,
    FootballIcon,
    HorseRacingIcon,
    TennisIcon,
    FifaIcon,
    BasketballIcon,
    ArrowRightGoldIcon,
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
  align-items: stretch;
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
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 24px;
  border-radius: 8px;
  height: 175px;
  width: 416px;
  background: #cbd7ff08;
  transition: transform 0.15s ease-out;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card-headers {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  gap: 10px;
  font-size: 18px;
}

.description {
  padding-top: 8px;
  line-height: 1.6;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #b1b6c6;
}

.card-icons {
  margin-top: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
}

.icon-crypto {
  display: inline-block;
  border-radius: 999px;
  width: 36px;
  min-width: 36px;
  height: auto;
}

.icon-casino {
  height: 36px;
  width: 36px;
  border-radius: 4px;
}

.text-link {
  text-transform: none;
  font-size: 14px;
  cursor: pointer;
  color: #ffb018;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.text-link:hover :first-child {
  text-decoration: underline;
}

.coin-name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 12px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}

.coin-name :last-child {
  color: #676d7c;
}

.coin-values {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 2px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #b1b6c6;
}

.coin-values :last-child {
  color: #ff4949;
}
</style>

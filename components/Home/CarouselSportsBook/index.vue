<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <SportsBookIcon />

        <a href="/sports" class="title">SPORTSBOOK</a>

        <a href="/sports" class="text-link">All Sports</a>
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
      <div
        v-for="(sport, index) in sports"
        :key="index"
        class="card"
        :style="{ background: sport.gradient }"
      >
        <component :is="sport.icon" />

        <span class="label">{{ sport.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SportsBookIcon from "./icons/SportsBookIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
import LiveIcon from "./icons/LiveIcon.vue";
import SoccerIcon from "./icons/SoccerIcon.vue";
import HorseRacingIcon from "./icons/HorseRacingIcon.vue";
import TennisIcon from "./icons/TennisIcon.vue";
import FifaIcon from "./icons/FifaIcon.vue";
import BasketballIcon from "./icons/BasketballIcon.vue";
import IceHockeyIcon from "./icons/IceHockeyIcon.vue";
import VolleyballIcon from "./icons/VolleyballIcon.vue";
import TableTennisIcon from "./icons/TableTennisIcon.vue";
import BaseballIcon from "./icons/BaseballIcon.vue";
import HandballIcon from "./icons/HandballIcon.vue";
import GolfIcon from "./icons/GolfIcon.vue";
import BoxingIcon from "./icons/BoxingIcon.vue";
import RugbyIcon from "./icons/RugbyIcon.vue";
import AussieRulesIcon from "./icons/AussieRulesIcon.vue";
import AmericanFootballIcon from "./icons/AmericanFootballIcon.vue";
import CyclingIcon from "./icons/CyclingIcon.vue";
import SpecialsIcon from "./icons/SpecialsIcon.vue";
import SnookerIcon from "./icons/SnookerIcon.vue";
import CricketIcon from "./icons/CricketIcon.vue";
import DartsIcon from "./icons/DartsIcon.vue";
import WaterpoloIcon from "./icons/WaterpoloIcon.vue";
import FutsalIcon from "./icons/FutsalIcon.vue";
import SquashIcon from "./icons/SquashIcon.vue";
import Formula1Icon from "./icons/Formula1Icon.vue";
import BiathlonIcon from "./icons/BiathlonIcon.vue";
import CounterStrikeIcon from "./icons/CounterStrikeIcon.vue";
import LeagueOfLegendsIcon from "./icons/LeagueOfLegendsIcon.vue";
import Dota2Icon from "./icons/Dota2Icon.vue";
import StarcraftIcon from "./icons/StarcraftIcon.vue";
import MMAIcon from "./icons/MMAIcon.vue";
import MotorcycleRacingIcon from "./icons/MotorcycleRacingIcon.vue";
import StockCarRacingIcon from "./icons/StockCarRacingIcon.vue";
import RocketLeagueIcon from "./icons/RocketLeagueIcon.vue";
import NBA2KIcon from "./icons/NBA2KIcon.vue";
import AoTennis2Icon from "./icons/AoTennis2Icon.vue";
import EfightingIcon from "./icons/EfightingIcon.vue";
import EcricketIcon from "./icons/EcricketIcon.vue";

export default {
  name: 'CarouselSportsBook',
  components: {
    SportsBookIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    LiveIcon,
    SoccerIcon,
    HorseRacingIcon,
    TennisIcon,
    FifaIcon,
    BasketballIcon,
    IceHockeyIcon,
    VolleyballIcon,
    TableTennisIcon,
    BaseballIcon,
    HandballIcon,
    GolfIcon,
    BoxingIcon,
    RugbyIcon,
    AussieRulesIcon,
    AmericanFootballIcon,
    CyclingIcon,
    SpecialsIcon,
    SnookerIcon,
    CricketIcon,
    DartsIcon,
    WaterpoloIcon,
    FutsalIcon,
    SquashIcon,
    Formula1Icon,
    BiathlonIcon,
    CounterStrikeIcon,
    LeagueOfLegendsIcon,
    Dota2Icon,
    StarcraftIcon,
    MMAIcon,
    MotorcycleRacingIcon,
    StockCarRacingIcon,
    RocketLeagueIcon,
    NBA2KIcon,
    AoTennis2Icon,
    EfightingIcon,
    EcricketIcon
  },
  data() {
    return {
      sports: [
        {
          label: "LIVE",
          icon: LiveIcon,
          gradient:
            "linear-gradient(0deg, rgba(26,181,247,0.4), rgba(26,181,247,0.1))",
        },
        {
          label: "SOCCER",
          icon: SoccerIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,26,26,0.4), rgba(247,26,26,0.1))",
        },
        {
          label: "HORSE RACING",
          icon: HorseRacingIcon,
          gradient:
            "linear-gradient(0deg, rgba(123,26,247,0.4), rgba(123,26,247,0.1))",
        },
        {
          label: "TENNIS",
          icon: TennisIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,147,26,0.4), rgba(247,147,26,0.1))",
        },
        {
          label: "FIFA",
          icon: FifaIcon,
          gradient:
            "linear-gradient(0deg, rgba(26,247,48,0.4), rgba(26,247,48,0.1))",
        },
        {
          label: "BASKETBALL",
          icon: BasketballIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,225,26,0.4), rgba(247,225,26,0.1))",
        },
        {
          label: "ICE HOCKEY",
          icon: IceHockeyIcon,
          gradient:
            "linear-gradient(0deg, rgba(44,26,247,0.4), rgba(44,26,247,0.1))",
        },
        {
          label: "VOLLEYBALL",
          icon: VolleyballIcon,
          gradient:
            "linear-gradient(0deg, rgba(226,22,100,0.4), rgba(226,22,100,0.1))",
        },
        {
          label: "TABLE TENNIS",
          icon: TableTennisIcon,
          gradient:
            "linear-gradient(0deg, rgba(26,181,247,0.4), rgba(26,181,247,0.1))",
        },
        {
          label: "BASEBALL",
          icon: BaseballIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,26,26,0.4), rgba(247,26,26,0.1))",
        },
        {
          label: "BOXING",
          icon: BoxingIcon,
          gradient:
            "linear-gradient(0deg, rgba(26,247,48,0.4), rgba(26,247,48,0.1))",
        },
        {
          label: "RUGBY",
          icon: RugbyIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,225,26,0.4), rgba(247,225,26,0.1))",
        },
        {
          label: "FORMULA 1",
          icon: Formula1Icon,
          gradient:
            "linear-gradient(0deg, rgba(26,181,247,0.4), rgba(26,181,247,0.1))",
        },
        {
          label: "LEAGUE OF LEGENDS",
          icon: LeagueOfLegendsIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,147,26,0.4), rgba(247,147,26,0.1))",
        },
        {
          label: "DOTA 2",
          icon: Dota2Icon,
          gradient:
            "linear-gradient(0deg, rgba(26,247,48,0.4), rgba(26,247,48,0.1))",
        },
        {
          label: "MMA",
          icon: MMAIcon,
          gradient:
            "linear-gradient(0deg, rgba(44,26,247,0.4), rgba(44,26,247,0.1))",
        },
        {
          label: "ROCKET LEAGUE",
          icon: RocketLeagueIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,26,26,0.4), rgba(247,26,26,0.1))",
        },
        {
          label: "NBA 2K",
          icon: NBA2KIcon,
          gradient:
            "linear-gradient(0deg, rgba(123,26,247,0.4), rgba(123,26,247,0.1))",
        },
        {
          label: "ECRICKET",
          icon: EcricketIcon,
          gradient:
            "linear-gradient(0deg, rgba(247,225,26,0.4), rgba(247,225,26,0.1))",
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      const carousel = this.$refs.carousel
      const scrollAmount = carousel.clientWidth

      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    },

    scrollRight() {
      const carousel = this.$refs.carousel
      const scrollAmount = carousel.clientWidth

      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
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
  color: #FFF;
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
  color: #FFF;
  background: #CBD7FF08;
  transition: background 0.2s ease;
}

.button-action-carousel:hover {
  background: #CBD7FF0E;
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
  height: 180px;
  width: 150px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card :first-child {
  margin-top: 30px;
}

.label {
  padding: 0px 0px 12px;
  text-transform: uppercase;
  color: #FFF;
  letter-spacing: 0.5px;
  line-height: 25.2px;
  font-size: 16px;
  font-family: Commissar, sans-serif;
  font-weight: 700;
  font-style: normal;
  word-wrap: break-word;
  white-space: normal;
  width: 100%;
  display: block;
}
</style>

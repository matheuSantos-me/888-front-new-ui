<template>
  <div>
    <div v-if="!collapsed" class="css-1rqoxtp" style="width: 240px">
      <div class="css-12khlxv">
        <div class="css-hc67zf">
          <div style="padding: 4px">
            <div class="css-rfkr36">
              <RollbitCoinIcon />

              <div>
                <div class="css-18naq6f">
                  Rollbit Coin
                  <span style="color: rgb(103, 109, 124)">RLB</span>
                </div>

                <div class="css-u2tylm">
                  <div>$0.0623421</div>

                  <DoubleArrowDownIcon />

                  <div class="css-uahybi" style="color: rgb(114, 242, 56)">
                    1.05%
                  </div>
                </div>
              </div>
            </div>

            <div class="css-y2awmj">
              <a href="/rlb/trade">
                <button class="css-1wsh2jr">Buy / Sell</button>
              </a>

              <a href="/rlb/buy-and-burn">
                <button class="css-1wsh2jr">Dashboard</button>
              </a>
            </div>
          </div>

          <div style="padding: 14px 0px 48px; margin: 0px -4px">
            <a
              :class="!casinoExpanded ? 'css-k50ptw' : 'css-1ozy758'"
              href="/casino"
            >
              <div class="css-qlws2f">
                <CasinoIcon />
              </div>

              Casino

              <button class="css-11rlk7s" @click.prevent="toggleCasino">
                <ArrowDownIcon v-if="!casinoExpanded" />
                <ArrowUpIcon v-else />
              </button>
            </a>

            <transition name="fade">
              <div
                v-show="casinoExpanded"
                class="css-13107in"
                style="padding-bottom: 12px"
              >
                <a class="css-1js53w7" href="/category/rollbit">
                  <div class="css-qlws2f">
                    <RollbitOriginalsIcon />
                  </div>

                  Rollbit Originals
                </a>

                <a class="css-1js53w7" href="/battles">
                  <div class="css-qlws2f">
                    <BonusBattlesIcon />
                  </div>

                  Bonus Battles
                </a>

                <a class="css-1js53w7" href="/category/slots">
                  <div class="css-qlws2f">
                    <CasinoIcon />
                  </div>

                  Slots
                </a>

                <a class="css-1js53w7" href="/category/game-shows">
                  <div class="css-qlws2f">
                    <GameShowsIcon />
                  </div>

                  Game Shows
                </a>

                <a class="css-1js53w7" href="/category/live-casino">
                  <div class="css-qlws2f">
                    <LiveCasinoIcon />
                  </div>

                  Live Casino
                </a>

                <a class="css-1js53w7" href="/category/roulette">
                  <div class="css-qlws2f">
                    <RouletteIcon />
                  </div>

                  Roulette
                </a>

                <a class="css-1js53w7" href="/category/blackjack">
                  <div class="css-qlws2f">
                    <BlackjackIcon />
                  </div>

                  Blackjack
                </a>

                <a class="css-1js53w7" href="/category/sidebets">
                  <div class="css-qlws2f">
                    <WithSidebetsIcon />
                  </div>

                  With Sidebets
                </a>

                <a class="css-1js53w7" href="/category/challenges">
                  <div class="css-qlws2f">
                    <ChallengesIcon />
                  </div>

                  With Challenges
                </a>

                <a class="css-1js53w7" href="/challenges">
                  <div class="css-qlws2f">
                    <ChallengesIcon />
                  </div>

                  Challenges
                </a>

                <a class="css-1js53w7" href="/clans">
                  <div class="css-qlws2f">
                    <ClansIcon />
                  </div>

                  Clans
                </a>

                <a class="css-1js53w7" href="/trading/rollercoaster">
                  <div class="css-qlws2f">
                    <RollercoasterIcon />
                  </div>

                  Rollercoaster
                </a>
              </div>
            </transition>

            <a class="css-k50ptw" href="/sports">
              <div class="css-qlws2f">
                <SportsIcon />
              </div>

              Sports

              <button class="css-11rlk7s">
                <ArrowDownIcon />
              </button>
            </a>

            <a class="css-k50ptw" href="/trade">
              <div class="css-qlws2f">
                <CryptoFuturesIcon />
              </div>

              Crypto Futures

              <button class="css-11rlk7s">
                <ArrowDownIcon />
              </button>
            </a>

            <div class="css-1y66pyb">New On Rollbit</div>

            <a
              href="https://blog.rollbit.com/tag/promotions/"
              target="_blank"
              rel="noopener noreferrer"
              class="css-k50ptw"
            >
              <div class="css-qlws2f">
                <PromotionsIcon />
              </div>
              Promotions</a
            >
            <a class="css-k50ptw" href="/game/hacksaw:RollbitSpinman">
              <div class="css-qlws2f">
                <CasinoIcon />
              </div>

              Rollbit Spinman
            </a>

            <div class="css-1y66pyb">PVP</div>

            <a class="css-k50ptw" href="/battles">
              <div class="css-qlws2f">
                <BonusBattlesIcon />
              </div>

              Bonus Battles
            </a>
            <a class="css-k50ptw" href="/jackpot">
              <div class="css-qlws2f">
                <JackpotIcon />
              </div>

              Jackpot · $232K

              <div class="css-186tvh0">15</div>
            </a>
            <a class="css-k50ptw" href="/duel-arena">
              <div class="css-qlws2f">
                <DuelArenaIcon />
              </div>

              <img
                src="./icons/duel-arena-logo.png"
                alt="Duel Arena"
                style="width: 93px; margin-left: -2px"
              />
            </a>

            <div class="css-1y66pyb">More</div>

            <a class="css-k50ptw" href="/portfolio">
              <div class="css-qlws2f">
                <CryptoPortfolioIcon />
              </div>

              Crypto Portfolio</a
            >
            <a class="css-k50ptw" href="/nft/lobby">
              <div class="css-qlws2f">
                <NFTIcon />
              </div>

              NFT

              <button class="css-11rlk7s">
                <ArrowDownIcon />
              </button>
            </a>

            <a class="css-k50ptw" href="/rlb/lottery">
              <div class="css-qlws2f">
                <RLBLotteryIcon />
              </div>

              RLB Lottery · $1.81K

              <div class="css-186tvh0">40</div>
            </a>

            <a class="css-k50ptw" href="/races">
              <div class="css-qlws2f">
                <DailyRaceIcon />
              </div>

              <div class="css-apkagv">
                <div>$25K Daily Race</div>

                <div class="css-138cu1s">21:03:45</div>
              </div>
            </a>

            <a class="css-k50ptw" href="/sponsorships/faze-clan">
              <div class="css-qlws2f">
                <FaZeSponsorshipIcon />
              </div>

              FaZe Sponsorship
            </a>
          </div>

          <div style="min-height: 25px; margin-top: auto; position: relative">
            <button class="css-f1k705" @click="toggleSidebar">
              <CollapseIcon />
            </button>

            <div class="css-0">
              <button class="css-t4epbj" style="width: 100%">Buy Crypto</button>

              <div class="css-1wbakon">
                <VisaIcon />

                <MasterCardIcon />

                <ApplePayIcon />

                <GooglePayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="css-1rqoxtp" style="width: 40px">
      <div class="css-1343gbj">
        <div class="css-12l0t2g" @click="toggleSidebar">
          <ExpandIcon />
        </div>

        <a class="css-1jshapq" href="/casino"><CasinoIcon /></a>
        <a class="css-1jshapq" href="/sports"><SportsIcon /></a>
        <a class="css-1jshapq" href="/trading"><CryptoFuturesIcon /></a>
        <a class="css-1jshapq" href="/rlb/trade"><RollbitCoinIcon /></a>
        <a class="css-1jshapq" href="/duel-arena"><DuelArenaIcon /></a>
        <a class="css-1jshapq" href="/portfolio"><CryptoPortfolioIcon /></a>
        <a class="css-1jshapq" href="/nft"><NFTIcon /></a>
        <a class="css-1jshapq" href="/jackpot"><JackpotIcon /></a>
        <a class="css-1jshapq" href="/races"><DailyRaceIcon /></a>

        <div class="css-12l0t2g">
          <CryptoPortfolioIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplePayIcon from "./icons/ApplePayIcon.vue";
import ArrowDownIcon from "./icons/ArrowDownIcon.vue";
import ArrowUpIcon from "./icons/ArrowUpIcon.vue";
import BlackjackIcon from "./icons/BlackjackIcon.vue";
import BonusBattlesIcon from "./icons/BonusBattlesIcon.vue";
import CasinoIcon from "./icons/CasinoIcon.vue";
import ChallengesIcon from "./icons/ChallengesIcon.vue";
import ClansIcon from "./icons/ClansIcon.vue";
import CollapseIcon from "./icons/CollapseIcon.vue";
import CryptoFuturesIcon from "./icons/CryptoFuturesIcon.vue";
import CryptoPortfolioIcon from "./icons/CryptoPortfolioIcon.vue";
import DailyRaceIcon from "./icons/DailyRaceIcon.vue";
import DoubleArrowDownIcon from "./icons/DoubleArrowDownIcon.vue";
import DuelArenaIcon from "./icons/DuelArenaIcon.vue";
import ExpandIcon from "./icons/ExpandIcon.vue";
import FaZeSponsorshipIcon from "./icons/FaZeSponsorshipIcon.vue";
import GameShowsIcon from "./icons/GameShowsIcon.vue";
import GooglePayIcon from "./icons/GooglePayIcon.vue";
import JackpotIcon from "./icons/JackpotIcon.vue";
import LiveCasinoIcon from "./icons/LiveCasinoIcon.vue";
import MasterCardIcon from "./icons/MasterCardIcon.vue";
import NFTIcon from "./icons/NFTIcon.vue";
import PromotionsIcon from "./icons/PromotionsIcon.vue";
import RLBLotteryIcon from "./icons/RLBLotteryIcon.vue";
import RollbitCoinIcon from "./icons/RollbitCoinIcon.vue";
import RollbitOriginalsIcon from "./icons/RollbitOriginalsIcon.vue";
import RollercoasterIcon from "./icons/RollercoasterIcon.vue";
import RouletteIcon from "./icons/RouletteIcon.vue";
import SportsIcon from "./icons/SportsIcon.vue";
import VisaIcon from "./icons/VisaIcon.vue";
import WithSidebetsIcon from "./icons/WithSidebetsIcon.vue";

export default {
  name: "Sidebar",
  components: {
    ApplePayIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    BlackjackIcon,
    BonusBattlesIcon,
    CasinoIcon,
    ChallengesIcon,
    ClansIcon,
    CollapseIcon,
    CryptoFuturesIcon,
    CryptoPortfolioIcon,
    DailyRaceIcon,
    DoubleArrowDownIcon,
    DuelArenaIcon,
    ExpandIcon,
    FaZeSponsorshipIcon,
    GameShowsIcon,
    GooglePayIcon,
    JackpotIcon,
    LiveCasinoIcon,
    MasterCardIcon,
    NFTIcon,
    PromotionsIcon,
    RLBLotteryIcon,
    RollbitCoinIcon,
    RollbitOriginalsIcon,
    RollercoasterIcon,
    RouletteIcon,
    SportsIcon,
    VisaIcon,
    WithSidebetsIcon,
  },
  data() {
    return {
      collapsed: false,
      casinoExpanded: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    toggleCasino() {
      this.casinoExpanded = !this.casinoExpanded;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  max-height: 800px;
  opacity: 1;
}

.css-1rqoxtp {
  position: relative;
  z-index: 100;
  top: 64px;
  left: 0px;
  height: calc(-64px + 100vh);
  transform: translateZ(0px);
}

.css-1343gbj {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(31, 35, 48);
}

.css-18naq6f {
  margin-bottom: 4px;
  color: #fff;
}

.css-1ozy758 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 12px;
  height: 36px;
  min-height: 36px;
  border-radius: 8px;
  color: #b1b6c6;
  transition: 0.1s;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  user-select: none;
  background: rgb(26, 29, 41) !important;
}

.css-1ozy758:hover {
  color: #fff;
  background: rgba(203, 215, 255, 0.03);
}

.css-12l0t2g {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
}

.css-u2tylm {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-variant-numeric: tabular-nums;
}

.css-12l0t2g {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
}

.css-12khlxv {
  position: relative;
  height: 100%;
}

.css-1jshapq {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
}

.css-hc67zf {
  display: flex;
  flex-direction: column;
  padding: 12px 12px 0px;
  height: 100%;
  background-color: rgb(31, 35, 48);
  overflow: hidden auto;
}

.css-rfkr36 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 12px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.css-m1ilmv {
  fill: currentcolor;
  width: 32px;
  min-width: 32px;
  height: auto;
}

.css-18naq6f {
  margin-bottom: 4px;
  color: #fff;
}

.css-u2tylm {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-variant-numeric: tabular-nums;
}

.css-1vsy0ig {
  fill: currentcolor;
  width: 7px;
  min-width: 7px;
  height: auto;
}

.css-y2awmj {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 12px;
  margin-top: 10px;
}

.css-y2awmj a {
  display: block;
  width: calc(50% - 6px);
}

.css-y2awmj button {
  height: 36px;
  padding: 0px;
  width: 100%;
}

.css-1wsh2jr {
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
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-transform: none;
  color: #b1b6c6;
  background: rgba(203, 215, 255, 0.075);
}

.css-qlws2f {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 36px;
  min-width: 36px;
  margin-right: 2px;
}

.css-k50ptw:hover {
  color: #fff;
  background: cbd7ff08;
}

a,
a:hover {
  color: inherit;
  text-decoration: none;
}

.css-k50ptw {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 12px;
  height: 36px;
  min-height: 36px;
  border-radius: 8px;
  color: #b1b6c6;
  transition: 0.1s;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}

.css-1js53w7:hover {
  color: #b1b6c6;
  background: rgba(203, 215, 255, 0.03);
}

.css-11rlk7s {
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
  border-radius: 6px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(203, 215, 255, 0.075);
  height: 24px;
  width: 26px;
  padding: 0px;
  position: relative;
  left: 6px;
  margin-left: auto;
}

.css-11rlk7s > :last-child {
  margin-right: 0px;
}

.css-11rlk7s svg {
  color: #b1b6c6;
  filter: none;
  transition: transform 0.1s;
}

.css-1y66pyb {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 12px 0px 8px 4px;
  text-transform: uppercase;
  color: rgb(103, 109, 124);
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
}

.css-1js53w7 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 12px;
  height: 36px;
  min-height: 36px;
  border-radius: 8px;
  transition: 0.1s;
  color: #b1b6c6;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  user-select: none;
}

.css-qlws2f {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 36px;
  min-width: 36px;
  margin-right: 2px;
}

.css-f1k705 {
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
  height: 30px;
  padding: 0px 14px;
  border-radius: 6px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(203, 215, 255, 0.03);
  position: absolute;
  right: 0px;
  top: -40px;
  width: 32px;
}

.css-f1k705 > :last-child {
  margin-right: 0px;
}

.css-f1k705 > * {
  margin-right: 8px;
}

.css-oluyn3 {
  fill: currentcolor;
  width: 18px;
  min-width: 18px;
  height: auto;
}

.css-t4epbj {
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
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background: #cbd7ff08;
}

.css-1wbakon {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0px 12px 16px;
}

.css-186tvh0 {
  margin-left: auto;
  margin-top: 1px;
  color: #b1b6c6;
  font-size: 11px;
}

.css-138cu1s {
  color: #b1b6c6;
  position: relative;
  bottom: 0.5px;
  text-shadow: none;
  font-variant-numeric: tabular-nums;
  font-size: 11px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.css-apkagv {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.css-1rqoxtp {
  transition: width 0.25s ease;
}
</style>

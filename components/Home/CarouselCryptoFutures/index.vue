<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <CryptoFuturesIcon />

        <a href="/trade" class="title">CRYPTO FUTURES</a>

        <a href="/trade" class="content-24h-valume">
          <span>Total 24h Volume:</span>

          <span>{{ totalVolumeFormatted }}</span>
        </a>

        <a href="/trade" class="text-link">Trade</a>
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
        v-for="(crypto, index) in cryptos"
        :key="index"
        class="card"
        :style="{ background: crypto.gradient }"
      >
        <div class="card-headers">
          <img :src="crypto.link" :alt="crypto.name" class="logo" />

          <div class="labels-card">
            <span>{{ crypto.name }}</span>

            <span
              :class="{
                positive: parseFloat(crypto.percentage) > 0,
                negative: parseFloat(crypto.percentage) < 0,
              }"
            >
              {{ crypto.percentage || "0.00%" }}
            </span>
          </div>
        </div>

        <span class="value">{{ crypto.value || "—" }}</span>

        <div class="content-volume">
          <span>24h Vol:</span>

          <span>{{ crypto.volume || "—" }}</span>
        </div>

        <div class="content-leverage">
          <span>Leverage:</span>

          <span>{{ crypto.leverage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoFuturesIcon from "./icons/CryptoFuturesIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

export default {
  name: "CarouselCryptoFutures",
  components: {
    CryptoFuturesIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      cryptos: [
        {
          name: "BTC",
          symbol: "btcusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
          gradient:
            "linear-gradient(0deg, rgba(247, 147, 26, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "ETH",
          symbol: "ethusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
          gradient:
            "linear-gradient(0deg, rgba(236, 239, 240, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "SOL",
          symbol: "solusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png",
          gradient:
            "linear-gradient(0deg, rgba(55, 160, 181, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "XPL",
          symbol: "xplusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/36645.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "ASTER",
          symbol: "astrusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/36341.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "WLFI",
          symbol: "wlfiusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33251.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "1000PUMP",
          symbol: "pumpusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/36507.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "H",
        //   symbol: "husdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/36922.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        // {
        //   name: "SPX",
        //   symbol: "spxusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28081.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "AAVE",
          symbol: "aaveusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "1000DEGEN",
        //   symbol: "degenusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/30096.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "ENA",
          symbol: "enausdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/30171.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "TRUMP",
          symbol: "trumpusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/35336.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "FARTCOIN",
        //   symbol: "fartcoinusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33597.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "XRP",
          symbol: "xrpusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
          gradient:
            "linear-gradient(0deg, rgba(0, 140, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "1000PEPE",
          symbol: "pepeusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
          gradient:
            "linear-gradient(0deg, rgba(80, 152, 68, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "LTC",
          symbol: "ltcusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
          gradient:
            "linear-gradient(0deg, rgba(52, 93, 157, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "MOODENG",
        //   symbol: "moodengusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33093.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "1000BONK",
          symbol: "bonkusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png",
          gradient:
            "linear-gradient(0deg, rgba(255, 222, 6, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "POPCAT",
        //   symbol: "popcatusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(236, 227, 222, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "SUI",
          symbol: "suiusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "TURBO",
          symbol: "turbousdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/24911.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "PI",
        //   symbol: "piusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/35697.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "TAO",
          symbol: "taousdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/22974.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "AI16Z",
        //   symbol: "ai16zusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/34026.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "PENGU",
          symbol: "penguusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/34466.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "ACT",
          symbol: "actusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33566.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "PNUT",
          symbol: "pnutusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33788.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "TIA",
        //   symbol: "tianusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/22861.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(122, 43, 249, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "DOGE",
          symbol: "dogeusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
          gradient:
            "linear-gradient(0deg, rgba(195, 166, 52, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "VIRTUAL",
          symbol: "virtualusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/29420.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "BERA",
          symbol: "berausdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/24647.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "WIF",
          symbol: "wifusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png",
          gradient:
            "linear-gradient(0deg, rgba(222, 156, 122, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "WLD",
          symbol: "wldusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/13502.png",
          gradient:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "VINE",
        //   symbol: "vineusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/35421.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        // {
        //   name: "HYPE",
        //   symbol: "hypeusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/32196.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "HBAR",
          symbol: "hbarusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "GOAT",
        //   symbol: "goatusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/33440.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "ARB",
          symbol: "arbusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
          gradient:
            "linear-gradient(0deg, rgba(38, 160, 241, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "ADA",
          symbol: "adausdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
          gradient:
            "linear-gradient(0deg, rgba(60, 200, 200, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "MELANIA",
        //   symbol: "melaniausdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/35347.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "TRX",
          symbol: "trxusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
          gradient:
            "linear-gradient(0deg, rgba(255, 0, 19, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "1000SHIB",
          symbol: "shibusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
          gradient:
            "linear-gradient(0deg, rgba(233, 53, 28, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "XMR",
        //   symbol: "xmrusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "ONDO",
          symbol: "ondousdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/21159.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "LINK",
          symbol: "linkusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
          gradient:
            "linear-gradient(0deg, rgba(51, 93, 210, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "INJ",
          symbol: "injusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png",
          gradient:
            "linear-gradient(0deg, rgba(1, 213, 253, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "JUP",
          symbol: "jupusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/29210.png",
          gradient:
            "linear-gradient(0deg, rgba(99, 216, 187, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "M",
        //   symbol: "musdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/35491.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        // {
        //   name: "1E6MOG",
        //   symbol: "1e6mogusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(252, 242, 121, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "AVAX",
          symbol: "avaxusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
          gradient:
            "linear-gradient(0deg, rgba(232, 65, 66, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "1000FLOKI",
          symbol: "flokiusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "DOT",
          symbol: "dotusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
          gradient:
            "linear-gradient(0deg, rgba(230, 0, 122, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "S",
          symbol: "susdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png",
          gradient:
            "linear-gradient(0deg, rgba(25, 105, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "BRETT",
        //   symbol: "brettusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/29743.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(93, 222, 254, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "APT",
          symbol: "aptusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png",
          gradient:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "BCH",
          symbol: "bchusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
          gradient:
            "linear-gradient(0deg, rgba(142, 196, 81, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "SEI",
          symbol: "seiusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/23149.png",
          gradient:
            "linear-gradient(0deg, rgba(160, 27, 28, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "APE",
          symbol: "apeusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png",
          gradient:
            "linear-gradient(0deg, rgba(0, 72, 225, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "POL",
          symbol: "polusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28321.png",
          gradient:
            "linear-gradient(0deg, rgba(130, 71, 229, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "BANANA",
        //   symbol: "bananusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28066.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "RENDER",
          symbol: "renderusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 15, 14, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "XML",
        //   symbol: "xmlusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        // {
        //   name: "KAS",
        //   symbol: "kasusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(112, 202, 188, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
        {
          name: "BNB",
          symbol: "bnbusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
          gradient:
            "linear-gradient(0deg, rgba(243, 186, 47, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        {
          name: "TON",
          symbol: "tonusdt",
          percentage: "-",
          value: "-",
          volume: "-",
          leverage: "1000X",
          link: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
          gradient:
            "linear-gradient(0deg, rgba(203, 215, 255, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        },
        // {
        //   name: "Rollercoaster",
        //   symbol: "rollerusdt",
        //   percentage: "-",
        //   value: "-",
        //   volume: "-",
        //   leverage: "1000X",
        //   link: "https://s2.coinmarketcap.com/static/img/coins/64x64/37224.png",
        //   gradient:
        //     "linear-gradient(0deg, rgba(255, 254, 139, 0.12) 0%, rgba(203, 215, 255, 0.03) 100%)",
        // },
      ],
      ws: null,
    };
  },
  computed: {
    totalVolume() {
      return this.cryptos.reduce((sum, c) => {
        if (!c.volume) return sum;

        const match = c.volume.match(/\$([\d.]+)([KMBT]?)/);

        if (!match) return sum;

        const value = parseFloat(match[1]);
        const unit = match[2];

        switch (unit) {
          case "K":
            return sum + value * 1_000;
          case "M":
            return sum + value * 1_000_000;
          case "B":
            return sum + value * 1_000_000_000;
          case "T":
            return sum + value * 1_000_000_000_000;
          default:
            return sum + value;
        }
      }, 0);
    },

    totalVolumeFormatted() {
      return this.formatVolume(this.totalVolume);
    },
  },
  methods: {
    n2(v) {
      return Number(v).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

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

    formatVolume(v) {
      const vol = parseFloat(v || 0);

      if (vol >= 1_000_000_000_000) {
        return `$${(vol / 1_000_000_000_000).toFixed(
          vol >= 10_000_000_000_000 ? 0 : 2
        )}T`;
      } else if (vol >= 1_000_000_000) {
        return `$${(vol / 1_000_000_000).toFixed(
          vol >= 10_000_000_000 ? 0 : 2
        )}B`;
      } else if (vol >= 1_000_000) {
        return `$${(vol / 1_000_000).toFixed(vol >= 10_000_000 ? 0 : 2)}M`;
      } else if (vol >= 1_000) {
        return `$${(vol / 1_000).toFixed(vol >= 10_000 ? 0 : 2)}K`;
      } else {
        return `$${vol.toFixed(0)}`;
      }
    },

    connectCombinedStream() {
      const streams = this.cryptos.map((c) => `${c.symbol}@ticker`).join("/");

      this.ws = new WebSocket(
        `wss://stream.binance.com:9443/stream?streams=${streams}`
      );

      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        if (!msg?.data) return;

        const { s: symbol, c, P, v } = msg.data;

        const index = this.cryptos.findIndex(
          (c) => c.symbol.toUpperCase() === symbol.toUpperCase()
        );

        if (index === -1) return;

        const price = c ? (c < 100 ? c : this.n2(c)) : "—";
        const percent = P ? this.n2(P) : "-";
        const volume = this.formatVolume(v);

        this.$set(this.cryptos, index, {
          ...this.cryptos[index],
          value: price,
          percentage: `${percent}%`,
          volume,
        });
      };

      this.ws.onerror = (err) => console.warn("Erro WebSocket:", err);

      this.ws.onclose = () => console.log("Conexão encerrada com Binance");
    },
  },
  mounted() {
    this.connectCombinedStream();
  },
  beforeDestroy() {
    if (this.ws) this.ws.close();
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

.content-24h-valume {
  text-transform: none;
  font-variant-numeric: tabular-nums;
  color: #B1B6C6;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
}

.content-24h-valume :last-child {
  color: #FFF;
}

.text-link {
  text-transform: none;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  color: #FFb018;
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
  flex-shrink: 0;
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
  width: 160px;
  display: block;
  flex-shrink: 0;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease-out;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card-headers {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.logo {
  display: inline-block;
  border-radius: 999px;
  width: 32px;
  min-width: 32px;
  height: auto;
}

.labels-card {
  display: flex;
  flex-direction: column;
}

.labels-card :first-child {
  color: #FFF;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.labels-card :last-child {
  padding-top: 2px;
  color: #FF4949;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.labels-card .positive {
  color: #72F238;
}

.labels-card .negative {
  color: #FF4949;
}

.value {
  -webkit-box-align: center;
  align-items: center;
  font-variant-numeric: tabular-nums;
  color: #fff;
  font-size: 16px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.content-volume {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 4px;
  font-variant-numeric: tabular-nums;
  color: #B1B6C6;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 16px;
}

.content-volume :last-child {
  color: #FFB018;
}

.content-leverage {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 4px;
  font-variant-numeric: tabular-nums;
  color: #B1B6C6;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.content-leverage :last-child {
  color: #FFB018;
}
</style>

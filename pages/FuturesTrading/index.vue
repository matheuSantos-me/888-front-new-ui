<template>
  <div class="container">
    <div class="content">
      <div style="display: flex;">
        <div :style="{ width: !showActionGraph ? '100%' : '70%' }">
          <CryptoHeader
            :price="lastPriceFmt"
            :priceColor="priceColor"
            :high="highFmt"
            :low="lowFmt"
            :volume="volumeFmt"
            :variation="variationFmt"
            :tick="selectedTick"
            @update:tick="selectedTick = $event"
          />

          <div
            :style="{
              height:
                window && window.innerWidth > 770
                  ? window.innerWidth + 'px'
                  : '410px',
              position: 'relative',
              width: '100%',
            }"
          >
            <svg ref="chart" style="height: 100%; width: 100%"></svg>

            <button v-if="viewDomain" class="live-button" @click="resetToLive">
              ▶▶
            </button>
          </div>
        </div>

        <ActionGraph
          v-if="showActionGraph"
          :selected-direction="selectedDirection"
          :wager="wager"
          :current-multiplier="currentMultiplier"
          :bust-price="bustPrice"
          :is-loading="isLoadingCreateBet"
          @update:direction="selectedDirection = $event"
          @update:wager="wager = $event"
          @update:multiplier="currentMultiplier = $event"
          @place-bet="saveBet"
        />
      </div>

      <ToggleTabs
        :selected-tab="selectedTabList"
        :selected-public-tab="selectedTabListPublicBets"
        @change-tab="selectedTabList = $event"
        @change-public-tab="selectedTabListPublicBets = $event"
      />

      <BetsTable
        v-if="selectedTabList === 'ACTIVE'"
        :bets="activeBets"
        type="ACTIVE"
        :loading-close-bet-ids="loadingCloseBetIds"
        @close-bet="closeBet"
      />

      <BetsTable
        v-if="selectedTabList === 'CLOSED'"
        :bets="closedBets"
        type="CLOSED"
      />

      <BetsTable
        v-if="selectedTabList === 'PUBLIC'"
        :bets="filteredBets"
        type="PUBLIC"
      />
    </div>

    <Footer />
  </div>
</template>


<script>
import * as d3 from "d3";
import axios from "axios";

import ActionGraph from "./components/ActionGraph.vue";
import BetsTable from "./components/BetsTable.vue";
import CryptoHeader from "./components/CryptoHeader.vue";
import ToggleTabs from "./components/ToggleTabs.vue";
import Footer from "~/components/NewComponents/Footer";

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    ActionGraph,
    BetsTable,
    CryptoHeader,
    ToggleTabs,
    Footer
  },
  props: { pillOffset: { type: Number, default: -10 } },
  data() {
    return {
      lastValue: 112300,
      targetValue: 112300,
      priceColor: "#14ff00",
      high: 0,
      low: 0,
      volume: 0,
      variation: 0,
      data: [],
      ws: null,
      selectedTick: "Tick",
      showActionGraph: window.innerWidth > 770,
      selectedTabList: "ACTIVE",
      selectedTabListPublicBets: "DAILY",
      selectedDirection: "UP",
      wager: 10.0,
      currentMultiplier: 10.0,
      isLoadingBets: false,
      isLoadingCreateBet: false,
      activeBets: [],
      closedBets: [],
      publicDailyBets: [],
      publicWeekBets: [],
      publicMonthBets: [],
      loadingCloseBetIds: [],
      interpTimer: null,
      historySeconds: 4 * 60 * 60,
      viewDomain: null,
      tickSteps: [1, 3, 5, 10, 15, 30],
      tickIndex: 1,
      tickEvery: 3,
      zoom: null,
      isPanning: false,
      rightGutter: 30,
      g: null,
      x: null,
      y: null,
      xAxis: null,
      yAxis: null,
      priceLine: null,
      pricePill: null,
      crosshairX: null,
      crosshairY: null,
      crosshairPrice: null,
      crosshairTime: null,
      overlay: null,
      clipRect: null,
      margin: null,
      innerW: 0,
      innerH: 0,
    };
  },
  computed: {
    bustPrice() {
      const minMultiplier = 1;
      const maxMultiplier = 1000;
      const price = this.lastValue;

      if (this.selectedDirection === "UP") {
        const minBustFactor = 0.0004;
        const maxBustFactor = 0.999;

        const minBust = price * minBustFactor;
        const maxBust = price * maxBustFactor;

        if (this.currentMultiplier <= minMultiplier) return this.n2(minBust);
        if (this.currentMultiplier >= maxMultiplier) return this.n2(maxBust);

        return this.n2(
          minBust +
            ((this.currentMultiplier - minMultiplier) /
              (maxMultiplier - minMultiplier)) *
              (maxBust - minBust)
        );
      }

      if (this.selectedDirection === "DOWN") {
        const minBust = price + 100000;
        const maxBust = price + 100;

        if (this.currentMultiplier <= minMultiplier) return this.n2(minBust);
        if (this.currentMultiplier >= maxMultiplier) return this.n2(maxBust);

        return this.n2(
          minBust -
            ((this.currentMultiplier - minMultiplier) /
              (maxMultiplier - minMultiplier)) *
              (minBust - maxBust)
        );
      }

      return this.n2(price);
    },

    lastPriceFmt() {
      return this.n2(this.lastValue);
    },

    variationFmt() {
      const pct = this.variation;
      const sign = pct >= 0 ? "+" : "";
      return `${sign}${pct.toFixed(2)}%`;
    },

    highFmt() {
      return this.n2(this.high);
    },

    lowFmt() {
      return this.n2(this.low);
    },

    volumeFmt() {
      return Number(this.volume).toLocaleString("pt-BR", {
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
      });
    },

    filteredBets() {
      switch (this.selectedTabListPublicBets) {
        case "DAILY":
          return this.publicDailyBets;
        case "WEEK":
          return this.publicWeekBets;
        case "MONTH":
          return this.publicMonthBets;
        default:
          return [];
      }
    },
  },
  methods: {
    n2(v) {
      return Number(v).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

    async load24h() {
      try {
        const res = await fetch(
          "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
        );
        const j = await res.json();
        this.lastValue = Number(j.lastPrice);
        const open = Number(j.openPrice);
        this.variation = ((this.lastValue - open) / open) * 100;
        this.high = Number(j.highPrice);
        this.low = Number(j.lowPrice);
        this.volume = Number(j.volume);
      } catch (e) {
        console.error("Erro no load24h:", e);
      }
    },

    async seedInitialData() {
      try {
        const res = await fetch(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=14400"
        );

        const klines = await res.json();

        const noiseThreshold = 0.5;
        const noiseStrength = 10;

        this.data = klines.map((k, i, arr) => {
          let value = Number(k[4]);

          if (i > 0) {
            const prev = Number(arr[i - 1][4]);

            if (Math.abs(value - prev) < noiseThreshold) {
              const noise = (Math.random() - 0.5) * noiseStrength;
              value = prev + noise;
            }
          }

          return {
            time: new Date(k[6]),
            value,
          };
        });

        const lastPoint = this.data[this.data.length - 1];
        this.lastValue = lastPoint.value;
        this.targetValue = lastPoint.value;

        this.updateChart();
      } catch (err) {
        console.error("Erro ao buscar histórico Binance:", err);
      }
    },

    openTradeWS() {
      if (this.ws) this.ws.close();

      this.ws = new WebSocket(
        "wss://stream.binance.com:9443/ws/btcusdt@kline_1s"
      );

      this.ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data);
        const kline = msg.k;
        if (!kline || !kline.x) return;

        let finalPrice = Number(kline.c);
        const prevPrice = this.lastValue;
        const noiseThreshold = 0.5;
        const noiseStrength = 10;

        if (Math.abs(finalPrice - prevPrice) < noiseThreshold) {
          finalPrice = prevPrice + (Math.random() - 0.5) * noiseStrength;
        }

        this.targetValue = finalPrice;

        const upColor = "#14ff00";
        const downColor = "#871212";
        this.priceColor = finalPrice >= prevPrice ? upColor : downColor;

        this.data.push({ time: new Date(kline.t), value: finalPrice });

        const cutoff = new Date(Date.now() - this.historySeconds * 1000);
        this.data = this.data.filter((d) => d.time >= cutoff);

        this.startInterpolation();
      };

      this.ws.onclose = () => {
        console.warn("WS fechado. Tentando reconectar em 5s...");
        setTimeout(this.openTradeWS, 5000);
      };

      this.ws.onerror = (err) => {
        console.error("Erro no WebSocket:", err);
        this.ws.close();
      };
    },

    async fetchBets() {
      this.isLoadingBets = true;
      try {
        const userId = "61b800c90d48496ec42a73a4";
        const { data } = await axios.get(
          `https://localhost:8080/bets-futures-trading/${userId}`
        );
        this.activeBets = data.betsActive;
        this.closedBets = data.betsClosed;
        this.publicDailyBets = data.betsPublicDaily;
        this.publicWeekBets = data.betsPublicWeek;
        this.publicMonthBets = data.betsPublicMonth;
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error?.response || error);
      } finally {
        this.isLoadingBets = false;
      }
    },

    async saveBet() {
      this.isLoadingCreateBet = true;

      const userId = "61b800c90d48496ec42a73a4";
      const userNickName = "bet888123";

      const payload = {
        userId,
        userNickName,
        currency: "BTC/USDT",
        direction: this.selectedDirection,
        wager: this.wager,
        entryPrice: this.lastValue,
        bustPrice: this.bustPrice,
        multiplier: this.currentMultiplier.toFixed(2),
      };

      try {
        const { data } = await axios.post(
          "https://localhost:8080/bets-futures-trading",
          payload
        );
        this.fetchBets();
        this.$message.success(data.message);
      } catch (error) {
        this.$message.error(error?.response?.data?.message || "Erro ao salvar");
      } finally {
        this.isLoadingCreateBet = false;
      }
    },

    async closeBet(bet) {
      this.loadingCloseBetIds.push(bet._id);
      const payload = { id: bet._id, exitPrice: this.lastValue };

      try {
        const { data } = await axios.patch(
          "https://localhost:8080/bets-futures-trading/update-status",
          payload
        );
        this.fetchBets();
        this.$message.success(data.message);
      } catch (error) {
        this.$message.error(error?.response?.data?.message || "Erro ao fechar");
      } finally {
        this.loadingCloseBetIds = this.loadingCloseBetIds.filter(
          (id) => id !== bet._id
        );
      }
    },

    onGlobalPointerUp() {
      this.isPanning = false;
    },

    hideCrosshair() {
      this.crosshairX.style("opacity", 0);
      this.crosshairY.style("opacity", 0);
      this.crosshairPrice.style("opacity", 0);
      this.crosshairTime.style("opacity", 0);
    },

    resetToLive() {
      this.viewDomain = null;
      this.isPanning = false;
      this.updateChart();
    },

    buildAlignedTicks(domainStart, domainEnd, stepMs, qty = 10) {
      const first = Math.floor(domainStart.getTime() / stepMs) * stepMs;
      const ticks = [];
      let t = first;
      while (t <= domainEnd.getTime()) {
        if (t >= domainStart.getTime()) ticks.push(new Date(t));
        t += stepMs;
      }
      if (ticks.length > qty + 2) {
        const skip = Math.ceil(ticks.length / qty);
        return ticks.filter((_, i) => i % skip === 0).slice(0, qty + 1);
      }
      return ticks;
    },

    initChart() {
      if (!this.$refs.chart) return;

      const svg = d3.select(this.$refs.chart);
      const { width, height } = this.$refs.chart.getBoundingClientRect();

      this.margin = { top: 18, right: 78, bottom: 42, left: 18 };
      this.innerW = width - this.margin.left - this.margin.right;
      this.innerH = height - this.margin.top - this.margin.bottom;

      svg.attr("viewBox", `0 0 ${width} ${height}`);
      this.g = svg
        .append("g")
        .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

      const defs = svg.append("defs");
      const grad = defs
        .append("linearGradient")
        .attr("id", "areaGradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");
      grad
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(255,177,0,0.22)");
      grad
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(255,177,0,0)");

      this.clipRect = defs
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", this.innerW - this.rightGutter)
        .attr("height", this.innerH);

      this.x = d3.scaleTime().range([0, this.innerW]);
      this.y = d3.scaleLinear().range([this.innerH, 0]);

      this.xAxis = this.g
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${this.innerH})`);
      this.yAxis = this.g
        .append("g")
        .attr("class", "axis y-axis")
        .attr("transform", `translate(${this.innerW},0)`);

      this.g
        .append("path")
        .attr("class", "area")
        .attr("clip-path", "url(#clip)");
      this.g
        .append("path")
        .attr("class", "line")
        .attr("clip-path", "url(#clip)");

      this.priceLine = this.g.append("line").attr("class", "price-line");
      this.pricePill = this.g.append("g").attr("class", "price-pill-wrap");

      this.crosshairX = this.g
        .append("line")
        .attr("class", "crosshair-x")
        .style("stroke", "#7c8499")
        .style("stroke-width", 1)
        .style("opacity", 0);
      this.crosshairY = this.g
        .append("line")
        .attr("class", "crosshair-y")
        .style("stroke", "#7c8499")
        .style("stroke-width", 1)
        .style("opacity", 0);
      this.crosshairPrice = this.g.append("g").style("opacity", 0);
      this.crosshairTime = this.g.append("g").style("opacity", 0);
      this.crosshairTime
        .append("rect")
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("fill", "#2a2f45")
        .attr("height", 20);
      this.crosshairTime
        .append("text")
        .attr("fill", "#fff")
        .attr("font-size", 12)
        .attr("dy", "1.2em")
        .attr("dx", 6);

      this.overlay = this.g
        .append("rect")
        .attr("class", "overlay-rect")
        .attr("width", this.innerW)
        .attr("height", this.innerH)
        .style("fill", "none")
        .style("pointer-events", "all")
        .style("cursor", "grab")
        .on("pointerdown", () => {
          this.isPanning = true;
          this.hideCrosshair();
        })
        .on("pointerup", () => {
          this.isPanning = false;
        })
        .on("pointerleave", () => {
          this.isPanning = false;
          this.hideCrosshair();
        })
        .on("mousemove", this.handleMouseMove)
        .on("mouseout", this.handleMouseOut);

      this.zoom = d3
        .zoom()
        .scaleExtent([1, 100])
        .on("zoom", (event) => {
          if (!event.sourceEvent) return;

          if (event.sourceEvent.type === "wheel") {
            if (event.sourceEvent.deltaY < 0) {
              if (this.tickIndex > 0) this.tickIndex--;
            } else {
              if (this.tickIndex < this.tickSteps.length - 1) this.tickIndex++;
            }
            this.tickEvery = this.tickSteps[this.tickIndex];
            this.updateChart();
            return;
          }

          if (
            event.sourceEvent.type === "mousemove" &&
            event.sourceEvent.buttons === 1
          ) {
            if (!this.viewDomain) {
              const now = new Date();
              const span = this.tickEvery * 1000 * 10;
              this.viewDomain = [new Date(now - span), now];
            }

            this.isPanning = true;

            const movementX = event.sourceEvent.movementX;
            const span = this.viewDomain[1] - this.viewDomain[0];
            const denom = Math.max(
              1,
              this.innerW - (this.viewDomain ? 0 : this.rightGutter)
            );
            const offset = -movementX * (span / denom);

            let nextDomain = [
              new Date(+this.viewDomain[0] + offset),
              new Date(+this.viewDomain[1] + offset),
            ];

            const dataMin = this.data.length ? this.data[0].time : new Date();
            const now = new Date();
            const tolerance = 2000;

            if (nextDomain[1] >= now - tolerance) {
              this.viewDomain = null;
              this.updateChart();
              return;
            }

            if (nextDomain[0] < dataMin) {
              nextDomain = [dataMin, new Date(+dataMin + span)];
            }

            this.viewDomain = nextDomain;
            this.updateChart();
          }
        });

      this.overlay.call(this.zoom);
    },

    startInterpolation() {
      const startValue = this.lastValue;
      const endValue = this.targetValue;
      const duration = 1000;
      const startTime = Date.now();

      if (this.interpTimer) this.interpTimer.stop();

      this.interpTimer = d3.timer(() => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(1, elapsed / duration);
        const easedT = d3.easeCubicInOut(t);

        const smoothValue = startValue + (endValue - startValue) * easedT;

        this.lastValue = smoothValue;

        const dataWithInterp = [...this.data];

        dataWithInterp[dataWithInterp.length - 1] = {
          time: new Date(),
          value: smoothValue,
        };

        this.updateChart(dataWithInterp);

        if (t >= 1) this.interpTimer.stop();
      });
    },

    updateChart(customData = null) {
      const dataset = customData || this.data;
      if (!dataset.length) return;

      const now = new Date();
      const span = this.tickEvery * 1000 * 10;
      const domain = this.viewDomain || [new Date(now - span), now];

      this.x.domain(domain);

      const effectiveGutter = this.viewDomain ? 0 : this.rightGutter;
      this.clipRect.attr("width", this.innerW - effectiveGutter);

      const xForLine = d3
        .scaleTime()
        .range([0, this.innerW - effectiveGutter])
        .domain(this.x.domain());

      const visibleData = dataset.filter(
        (d) => d.time >= domain[0] && d.time <= domain[1]
      );
      if (!visibleData.length) return;

      const minVal = d3.min(visibleData, (d) => d.value);
      const maxVal = d3.max(visibleData, (d) => d.value);

      const absolutePadding = 10;
      const relativePadding = (maxVal - minVal) * 0.02;
      const padding = Math.max(absolutePadding, relativePadding);
      this.y.domain([minVal - padding, maxVal + padding]);

      const area = d3
        .area()
        .x((d) => xForLine(d.time))
        .y0(this.innerH)
        .y1((d) => this.y(d.value))
        .curve(d3.curveCatmullRom.alpha(0.5));

      const line = d3
        .line()
        .x((d) => xForLine(d.time))
        .y((d) => this.y(d.value))
        .curve(d3.curveCatmullRom.alpha(0.5));

      this.g
        .select(".area")
        .datum(dataset)
        .attr("d", area)
        .attr("fill", "url(#areaGradient)");

      this.g
        .select(".line")
        .datum(dataset)
        .attr("d", line)
        .style("stroke", "#ffb100")
        .style("fill", "none")
        .style("stroke-width", 2);

      const stepMs = this.tickEvery * 1000;
      const ticks = this.buildAlignedTicks(domain[0], domain[1], stepMs, 10);

      this.xAxis.call(
        d3
          .axisBottom(this.x)
          .tickValues(ticks)
          .tickFormat(d3.timeFormat("%H:%M:%S"))
      );
      this.yAxis.call(d3.axisRight(this.y).ticks(8));

      const last = dataset[dataset.length - 1];
      const prev = dataset.length > 1 ? dataset[dataset.length - 2] : last;
      const upColor = "#14ff00";
      const downColor = "#871212";
      const color = last.value >= prev.value ? upColor : downColor;

      const yRaw = this.y(last.value);
      const yPos = Math.max(0, Math.min(this.innerH, yRaw));

      this.pricePill.selectAll("*").remove();

      if (this.viewDomain) {
        const x0 = this.innerW;
        const pillW = 85,
          pillH = 20,
          pointerW = 12,
          radius = 2;
        const xPillStart = x0 + this.pillOffset;

        this.priceLine.style("display", "none");

        const path = `
          M ${xPillStart} ${yPos}
          l ${pointerW} -${pillH / 2}
          h ${pillW - 2 * radius - pointerW}
          a ${radius} ${radius} 0 0 1 ${radius} ${radius}
          v ${pillH - 2 * radius}
          a ${radius} ${radius} 0 0 1 -${radius} ${radius}
          h -${pillW - 2 * radius - pointerW}
          z
        `;

        this.pricePill.append("path").attr("d", path).attr("fill", color);
        this.pricePill
          .append("text")
          .attr("x", xPillStart + pillW - 5)
          .attr("y", yPos + pillH / 5)
          .attr("text-anchor", "end")
          .style("font-size", "12px")
          .style("font-weight", "800")
          .style("fill", "#0d0d0d")
          .text(this.n2(last.value));
      } else {
        const x0 = xForLine(last.time);
        const pillW = 75,
          pillH = 20,
          pointerW = 12,
          radius = 2;
        const xPillStart = x0 + this.pillOffset + effectiveGutter;

        this.priceLine
          .attr("x1", 0)
          .attr("x2", xPillStart)
          .attr("y1", yPos)
          .attr("y2", yPos)
          .style("stroke", color)
          .style("stroke-dasharray", "6 6")
          .style("stroke-width", 0.8)
          .style("display", "block");

        const path = `
          M ${xPillStart} ${yPos}
          l ${pointerW} -${pillH / 2}
          h ${pillW - 2 * radius - pointerW}
          a ${radius} ${radius} 0 0 1 ${radius} ${radius}
          v ${pillH - 2 * radius}
          a ${radius} ${radius} 0 0 1 -${radius} ${radius}
          h -${pillW - 2 * radius - pointerW}
          z
        `;

        this.pricePill.append("path").attr("d", path).attr("fill", color);
        this.pricePill
          .append("text")
          .attr("x", xPillStart + pillW - 5)
          .attr("y", yPos + pillH / 5)
          .attr("text-anchor", "end")
          .style("font-size", "12px")
          .style("font-weight", "800")
          .style("fill", "#0d0d0d")
          .text(this.n2(last.value));

        this.pricePill
          .append("circle")
          .attr("cx", x0)
          .attr("cy", yPos)
          .attr("r", 6)
          .attr("fill", "#4CC9F0");
      }
    },

    handleMouseMove(event) {
      if (this.isPanning) return;

      const [mx, my] = d3.pointer(event);
      const time = this.x.invert(mx);
      const price = this.y.invert(my);

      this.crosshairX
        .attr("x1", mx)
        .attr("x2", mx)
        .attr("y1", 0)
        .attr("y2", this.innerH)
        .style("opacity", 1);
      this.crosshairY
        .attr("x1", 0)
        .attr("x2", this.innerW)
        .attr("y1", my)
        .attr("y2", my)
        .style("opacity", 1);

      this.crosshairPrice.selectAll("*").remove();

      const priceText = price.toFixed(2);
      const pillW = 75,
        pillH = 20,
        pointerW = 12,
        radius = 2;
      const xPillStart = this.innerW - (pillW + pointerW - 75);
      const yPill = my;

      const path = `
        M ${xPillStart} ${yPill}
        l ${pointerW} -${pillH / 2}
        h ${pillW - 2 * radius - pointerW}
        a ${radius} ${radius} 0 0 1 ${radius} ${radius}
        v ${pillH - 2 * radius}
        a ${radius} ${radius} 0 0 1 -${radius} ${radius}
        h -${pillW - 2 * radius - pointerW}
        z
      `;

      this.crosshairPrice
        .append("path")
        .attr("d", path)
        .attr("fill", "#2a2f45");
      this.crosshairPrice
        .append("text")
        .attr("x", xPillStart + pillW - 5)
        .attr("y", yPill + pillH / 5)
        .attr("text-anchor", "end")
        .style("font-size", "12px")
        .style("font-weight", "800")
        .style("fill", "#fff")
        .text(priceText);
      this.crosshairPrice.style("opacity", 1);

      const timeText = d3.timeFormat("%H:%M:%S")(time);
      const textNodeT = this.crosshairTime.select("text").text(timeText);
      const textWidthT = textNodeT.node().getComputedTextLength();

      this.crosshairTime
        .attr(
          "transform",
          `translate(${mx - textWidthT / 2},${this.innerH + 6})`
        )
        .style("opacity", 1);
      this.crosshairTime
        .select("rect")
        .attr("width", textWidthT + 12)
        .attr("height", 20);
    },

    handleMouseOut() {
      this.hideCrosshair();
    },
  },
  mounted() {
    this.load24h();
    this.fetchBets();
    // this.initChart();
    // this.seedInitialData();
    // this.openTradeWS();

    this.$nextTick(() => {
      this.initChart();
      this.seedInitialData();
      this.openTradeWS();
    });

    this.load24hInterval = setInterval(() => {
      this.load24h();
    }, 1000);

    window.addEventListener("pointerup", this.onGlobalPointerUp);
  },
  beforeDestroy() {
    if (this.ws) this.ws.close();
    if (this.interpTimer) this.interpTimer.stop();
    if (this.load24hInterval) clearInterval(this.load24hInterval);

    window.removeEventListener("pointerup", this.onGlobalPointerUp);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0;
}

.content {
  margin: 90px 30px 0;
  padding: 0px 24px 48px;
}

@media (max-width: 1450px) {
  .content {
    margin: 90px 20px 0;
    padding: 0 0 48px;
  }
}

@media (max-width: 1024px) {
  .content {
    margin: 140px 20px 0;
    padding: 0 0 48px;
  }
}

@media (max-width: 700px) {
  .content {
    margin: 140px 10px 0;
    padding: 0 0 48px;
  }
}

.axis text {
  fill: #7c8499;
  font-size: 12px;
}

.axis path,
.axis line {
  stroke: #1c2237;
}

.price-line {
  stroke-width: 1;
}

.crosshair-x,
.crosshair-y {
  pointer-events: none;
}

.live-button {
  position: absolute;
  bottom: 50px;
  right: 90px;
  background: #2a2f45;
  border: none;
  border-radius: 4px;
  padding: 6px 6px 6px 8px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.2s ease;
  text-align: center;
}

.live-button:hover {
  opacity: 1;
  background: #3b415c;
}
</style>

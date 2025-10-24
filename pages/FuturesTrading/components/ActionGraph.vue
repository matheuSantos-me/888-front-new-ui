<template>
  <div class="content-actions-graph">
    <div>
      <span class="label">WILL THE PRICE GO UP OR DOWN?</span>

      <div class="toggle-container-direction">
        <button
          :class="[
            'toggle-btn-direction',
            selectedDirection === 'UP' ? 'active-up-direction' : '',
          ]"
          @click="$emit('update:direction', 'UP')"
        >
          UP
        </button>

        <button
          :class="[
            'toggle-btn-direction',
            selectedDirection === 'DOWN' ? 'active-down-direction' : '',
          ]"
          @click="$emit('update:direction', 'DOWN')"
        >
          DOWN
        </button>
      </div>
    </div>

    <div>
      <label class="label">WAGER</label>

      <input
        class="input-wager"
        inputmode="numeric"
        :value="String(wager)"
        @input="
          $emit(
            'update:wager',
            Math.min(
              Number(($event.target.value || '').replace(/[^0-9]/g, '')) || 0,
              1000
            )
          )
        "
        placeholder="10"
      />
    </div>

    <div>
      <span class="label">PAYOUT MULTIPLIER</span>

      <div class="content-values">
        <div class="content-multiplier">
          <span class="prefix">X</span>

          <input
            class="input-multiplier"
            type="text"
            :value="String(currentMultiplier)"
            @input="onMultiplierInput"
          />
        </div>

        <div>
          <p class="muted">Bust Price:</p>
          <p class="muted">{{ bustPrice }}</p>
        </div>
      </div>
    </div>

    <input
      type="range"
      min="1"
      step="0.01"
      max="1000"
      :value="currentMultiplier"
      @input="$emit('update:multiplier', Number($event.target.value))"
      class="slider"
    />

    <div class="slider-container">
      <div>
        <span class="safe-label">x1 ·</span>

        <span style="font-size: 12px; color: #14ff00">Safe</span>
      </div>

      <div>
        <span style="font-size: 12px; color: #ff0000">Wild</span>

        <span class="wild-label">· x1000</span>
      </div>
    </div>

    <el-button
      class="button-action-graph"
      @click="$emit('place-bet')"
      :loading="isLoading"
    >
      PLACE BET
    </el-button>

    <div v-if="showFee" class="fee-toggle">
      <div class="fee-option" @click="selectedFee = 'pnl'">
        <input type="radio" value="pnl" v-model="selectedFee" />

        <span class="dot" :class="{ active: selectedFee === 'pnl' }"></span>

        <span class="fee-text" :class="{ active: selectedFee === 'pnl' }"
          >PnL Fee</span
        >
      </div>

      <div class="fee-option" @click="selectedFee = 'flat'">
        <input type="radio" value="flat" v-model="selectedFee" />

        <span class="dot" :class="{ active: selectedFee === 'flat' }"></span>

        <span class="fee-text" :class="{ active: selectedFee === 'flat' }"
          >Flat Fee</span
        >
      </div>
    </div>

    <div v-if="showFee">
      <div v-if="selectedFee === 'pnl'" class="content-descrition">
        <p class="fee-desc">
          A fraction of your profits (if any) is taken when you close the trade
        </p>

        <div>
          <span class="discount-label">RLB Discount:</span>

          <span class="discount-value">Save up to 60%</span>
        </div>
      </div>

      <div v-else class="content-descrition">
        <p class="fee-desc">
          <span style="color: #fff">0.040% </span> per entry and exit trades of
          $500 including slippage
        </p>

        <div>
          <span class="discount-label">Pay with RLB:</span>

          <span class="discount-value">Save up to 60%</span>
        </div>
      </div>
    </div>

    <span class="toggle-hide" @click="showFee = !showFee">
      {{ showFee ? "▲ Hide Fee Options" : "▼ Show Fee Options" }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ActionGraph",
  props: {
    selectedDirection: { type: String, default: "UP" },
    wager: { type: Number, default: 10 },
    currentMultiplier: { type: Number, default: 10 },
    bustPrice: { type: [Number, String], default: 0 },
    isLoading: { type: Boolean, default: false },
  },
  data() {
    return {
      showFee: false,
      selectedFee: "pnl",
    };
  },
  methods: {
    onMultiplierInput(event) {
      let val = event.target.value.replace(/[^0-9.]/g, "");
      let num = Number(val);

      if (val === "") {
        this.$emit("update:multiplier", "");
      } else {
        if (isNaN(num)) {
          num = 1;
        }
        num = Math.max(1, Math.min(num, 1000)); 
        this.$emit("update:multiplier", num);
      }
    },
  },
};
</script>

<style scoped>
.content-actions-graph {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 30%;
  gap: 20px;
  background-color: #14161b;
  border-radius: 8px;
  padding: 20px;
}

.label {
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-wrap: wrap;
  max-width: 100%;
  margin-left: -5px;
}

.muted {
  font-size: 14px;
  color: #fff;
  opacity: 0.9;
  margin: 0;
}

.toggle-container-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181a20;
  padding: 6px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0 -6px 0;
}

.toggle-btn-direction {
  flex: 1;
  border-radius: 10px;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 800;
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  transition: 0.18s ease;
}

.active-up-direction {
  background-color: #223420;
  color: #14ff00;
}

.active-down-direction {
  background-color: #341f1f;
  color: #ff0000;
}

.input-wager {
  color: #000;
  background-color: #fff;
  font-size: 16px;
  padding: 0px 8px;
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 8px;
  margin: 10px 0 0 0;
}

.content-values {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.content-multiplier {
  display: flex;
  align-items: center;
  background-color: #181a21;
  border-radius: 4px;
  padding: 8px 12px;
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.prefix {
  color: #9aa1ac;
  margin-right: 6px;
}

.input-multiplier {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  width: 60px;
  text-align: left;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(to right, #14ff00, #fdb72d, #ff0000);
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.slider-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -6px;
}

.safe-label,
.wild-label {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.button-action-graph {
  height: 45px;
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  color: #14161b;
  font-size: 18px;
  border: none;
  background-color: #fdb72d;
}

.fee-toggle {
  display: flex;
  gap: 24px;
}

.fee-option {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.fee-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #cfd3dc;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dot.active {
  border-color: #fdb72d;
  box-shadow: 0 0 10px rgba(253, 183, 45, 0.4);
}

.dot.active::after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fdb72d;
}

.fee-text {
  color: #cfd3dc;
  font-size: 15px;
  font-weight: 700;
}

.fee-text.active {
  color: #fdb72d;
}

.content-descrition {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fee-desc {
  color: #9aa1ac;
  font-size: 14px;
  margin: 0 0 8px 0;
}

.discount-label {
  color: #cfd3dc;
  font-size: 14px;
}

.discount-value {
  color: #14ff00;
  font-weight: 800;
  font-size: 14px;
  margin-left: 6px;
}

.toggle-hide {
  font-size: 12px;
  color: #cfd3dc;
  background: transparent;
  cursor: pointer;
}
</style>

<template>
  <div class="card">
    <span class="title">{{ card.title }}</span>

    <div class="content-actions-buy">
      <button class="button-yes">Buy Yes</button>
      <button class="button-no">Buy No</button>
    </div>

    <div class="content-infos-bet">
      <span>{{ card.volume }} Vol</span>

      <div class="content-actions">
        <user-icon size="1.5x" class="custom-class" />
        <span>{{ card.views }}</span>

        <button class="button-favorite">
          <heart-icon size="1.5x" class="custom-class" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, HeartIcon } from "vue-feather-icons";

export default {
  name: "CardBet",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  components: {
    UserIcon,
    HeartIcon,
  },
};
</script>

<style scoped>
.card {
  background-color: #14161B;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 10px;
  border-radius: 8px;
  justify-content: space-between;
}

.title {
  color: #fff;
  font-size: 16px;
}

.content-actions-buy {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-yes {
  all: unset;
  background-color: green;
  height: 35px;
  width: 49%;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.button-no {
  all: unset;
  background-color: red;
  height: 35px;
  width: 49%;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.content-infos-bet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
}

.content-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.button-favorite {
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

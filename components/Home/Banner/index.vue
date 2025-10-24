<template>
  <div class="container">
    <div class="content">
      <div class="content-infos">
        <img src="./icons/rollbit-logo.svg" alt="Logo" />

        <p>
          Experience true innovation with the highest rewards program within the
          industry.
        </p>

        <button class="button-register">REGISTER NOW</button>

        <span>Or join with</span>

        <div class="content-buttons-social">
          <button><SteamIcon /></button>

          <button><TwitchIcon /></button>

          <button><MetamaskIcon /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SteamIcon from "./icons/SteamIcon.vue";
import TwitchIcon from "./icons/TwitchIcon.vue";
import MetamaskIcon from "./icons/MetamaskIcon.vue";

export default {
  name: "Banner",
  components: {
    SteamIcon,
    TwitchIcon,
    MetamaskIcon,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 350px;
  max-height: 400px;
  width: 100%;
  margin-top: 25px;
}

.content {
  width: 100%;
  border-radius: 8px;
  background-image: url("./icons/BannerLoggedOut.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.content-infos {
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: calc(3.5% + 410px);
  padding: 36px 0px 36px 3.5%;
}

.content-infos p {
  padding: 12px 0px 24px;
  line-height: 1.6;
  max-width: 410px;
  color: #fff;
  font-size: 18px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.content-infos span {
  padding: 24px 0px 12px;
  color: #fff;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.button-register {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 48px;
  padding: 0px 24px;
  border-radius: 8px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  color: #141722;
  background: #ffe81a;
  box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
    rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(255, 135, 25) 0px 0px 15px inset;
}

.content-buttons-social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 4px;
}

.content-buttons-social button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: 0.1s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-transform: none;
  flex: 1 1 0%;
  padding: 0px 16px;
  color: #fff;
  background: #1f2330;
}
</style>

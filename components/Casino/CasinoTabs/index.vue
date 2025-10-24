<template>
  <div style="margin-top: 20px;">
    <div class="css-uqeajf">
      <div class="css-1mo5975">
        <a href="/casino">
          <div class="css-19z4l2h" style="width: 84px">
            <LobbyIcon />

            Lobby
          </div>
        </a>

        <a href="/category/rollbit">
          <div class="css-76jt67" style="width: 84px">
            <RollbitIcon />

            Rollbit
          </div>
        </a>

        <a href="/category/slots">
          <div class="css-76jt67" style="width: 84px">
            <SlotsIcon />

            Slots
          </div>
        </a>

        <a href="/category/game-shows">
          <div class="css-76jt67" style="width: 84px">
            <ShowsIcon />

            Shows
          </div>
        </a>

        <a href="/category/live-casino">
          <div class="css-76jt67" style="width: 84px">
            <LiveCasinoIcon />

            Live Casino
          </div>
        </a>

        <a href="/category/roulette">
          <div class="css-76jt67" style="width: 84px">
            <RouletteIcon />

            Roulette
          </div>
        </a>

        <a href="/category/sidebets">
          <div class="css-76jt67" style="width: 84px">
            <SidebetsIcon />

            Sidebets
          </div>
        </a>

        <a href="/category/battles">
          <div class="css-76jt67" style="width: 84px">
            <BattlesIcon />

            Battles
          </div>
        </a>
      </div>
    </div>

    <div class="css-1umk8r2">
      <SearchIcon />

      <input type="text" placeholder="Search your game" value="" />
    </div>
  </div>
</template>

<script>
import BattlesIcon from "./icons/BattlesIcon.vue";
import LiveCasinoIcon from "./icons/LiveCasinoIcon.vue";
import LobbyIcon from "./icons/LobbyIcon.vue";
import RollbitIcon from "./icons/RollbitIcon.vue";
import RouletteIcon from "./icons/RouletteIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import ShowsIcon from "./icons/ShowsIcon.vue";
import SidebetsIcon from "./icons/SidebetsIcon.vue";
import SlotsIcon from "./icons/SlotsIcon.vue";

export default {
  name: "CasinoTabs",
  components: {
    BattlesIcon,
    LiveCasinoIcon,
    LobbyIcon,
    RollbitIcon,
    RouletteIcon,
    SearchIcon,
    ShowsIcon,
    SidebetsIcon,
    SlotsIcon,
  },
};
</script>

<style scoped>
.css-uqeajf {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;
  margin-bottom: 16px;
}

.css-76jt67:hover {
    background: rgba(203, 215, 255, 0.03);
}

.css-1mo5975 {
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  overflow: auto hidden;
  scrollbar-width: none;
}

.css-1mo5975 a {
  text-decoration: none;
}

.css-19z4l2h {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex-direction: column;
  gap: 8px;
  height: 72px;
  min-height: 72px;
  width: 108px;
  padding: 0px 16px 12px;
  border-radius: 8px;
  transition: 0.1s;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  user-select: none;
  cursor: default;
  color: rgb(255, 255, 193);
  text-shadow: rgb(255, 93, 0) 0px 0px 10px;
  background: rgba(203, 215, 255, 0.055) !important;
}

.css-76jt67 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex-direction: column;
  gap: 8px;
  height: 72px;
  min-height: 72px;
  width: 108px;
  padding: 0px 16px 12px;
  border-radius: 8px;
  color: rgb(177, 182, 198);
  transition: 0.1s;
  font-size: 14px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  user-select: none;
}

.css-1umk8r2 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 50px;
  min-height: 50px;
  width: 100%;
  padding: 0px 5px 0px 15px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: rgba(15, 17, 26, 0.55);
  transition: background 0.1s;
  flex: 1 1 0%;
  min-width: 170px;
}

.css-1umk8r2 input,
.css-1umk8r2 textarea,
.css-1umk8r2 input:focus,
.css-1umk8r2 textarea:focus,
.css-1umk8r2 input:hover,
.css-1umk8r2 textarea:hover,
.css-1umk8r2 input:active,
.css-1umk8r2 textarea:active {
  outline: none;
  border: none;
  background: none;
}

.css-1umk8r2 input,
.css-1umk8r2 textarea {
  width: 100%;
  height: 100%;
  color: rgb(255, 255, 255);
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
}

.css-lui29e {
    display: inline-flex
;
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
    border-radius: 6px;
    font-size: 13px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    text-transform: none;
    background: rgba(203, 215, 255, 0.03);
    width: 28px;
    padding: 0px;
    color: rgb(177, 182, 198);
}

.css-1xat6c {
    display: none;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 6px;
}
</style>

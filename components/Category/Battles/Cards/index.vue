<template>
  <div class="cards-grid">
    <!-- <div
      v-for="(game, index) in games"
      :key="index"
      class="card"
      @click="openGame(game)"
    >
      <img :src="game.image" :alt="game.name || `Game ${index + 1}`" />
    </div> -->

    <div class="css-1cu8gyx">
      <div class="css-798fc">
        <img
          class="css-15rutbb"
          src="https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp"
          alt="Fruit Party"
          style="opacity: 1"
        />
      </div>

      <div class="css-mjvv4w" style="opacity: 1">
        <div class="css-1rjwjg2">
          <div class="css-1luk4b6">Bonus Buy</div>

          <div class="css-1xdxz6f">$100</div>
        </div>

        <div class="css-1rjwjg2">
          <div class="css-1luk4b6">Players</div>

          <div class="css-1xdxz6f">2/2</div>
        </div>

        <div class="css-y0tzfx">
          <div class="css-1luk4b6">Creator</div>
          <div class="css-1q34knq" size="12">
            <div size="18" class="css-pgccrr">
              <img
                src="/static/Icon 1 (gold)-9sMBN4Vh.png"
                alt="Gold 1"
                scale="0.72"
                class="css-10qm6dq"
              />
            </div>

            <div class="css-o3tivt" style="color: white; font-weight: 500">
              milkman999
            </div>
          </div>
        </div>

        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          size="26"
          color="#1A1D29"
          class="css-5dcqy8"
        >
          <title>arrow-tiny</title>
          <g
            id="arrow-tiny"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="arrow-down-3"
              transform="translate(6.000000, 8.000000)"
              fill="currentColor"
            >
              <path
                d="M4.78938924,4.63164612 L7.76228487,1.61899741 C8.00618916,1.33496897 8.06840115,0.926152737 7.92100624,0.575985044 C7.77361133,0.22581735 7.44428866,5.5851439e-05 7.08080572,0 L0.916620986,0 C0.554302568,0.0011242578 0.226402906,0.22642885 0.0792508213,0.575369132 C-0.0679012633,0.924309415 -0.00685704037,1.33179648 0.235141836,1.61598477 L3.20803746,4.63164612 C3.41064026,4.86626518 3.69770361,5 3.99871335,5 C4.29972309,5 4.58678644,4.86626518 4.78938924,4.63164612 L4.78938924,4.63164612 Z"
                id="Arrow-down-3"
              ></path>
            </g>
          </g>
        </svg>

        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          size="26"
          color="#1A1D29"
          class="css-yqd1xw"
        >
          <title>arrow-tiny</title>
          <g
            id="arrow-tiny"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="arrow-down-3"
              transform="translate(6.000000, 8.000000)"
              fill="currentColor"
            >
              <path
                d="M4.78938924,4.63164612 L7.76228487,1.61899741 C8.00618916,1.33496897 8.06840115,0.926152737 7.92100624,0.575985044 C7.77361133,0.22581735 7.44428866,5.5851439e-05 7.08080572,0 L0.916620986,0 C0.554302568,0.0011242578 0.226402906,0.22642885 0.0792508213,0.575369132 C-0.0679012633,0.924309415 -0.00685704037,1.33179648 0.235141836,1.61598477 L3.20803746,4.63164612 C3.41064026,4.86626518 3.69770361,5 3.99871335,5 C4.29972309,5 4.58678644,4.86626518 4.78938924,4.63164612 L4.78938924,4.63164612 Z"
                id="Arrow-down-3"
              ></path>
            </g>
          </g>
        </svg>
        <a href="/battles/57eca835-ab25-4f09-93a8-5f0a46f51c9b">
          <button class="css-140wiou">
            Unavailable
            <div class="css-4fih5x">Completed</div>
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      games: [
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
        {
          name: "Gates of Olympus",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/GatesOfOlympus.webp",
        },
        {
          name: "Sweet Bonanza",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SweetBonanza.webp",
        },
        {
          name: "Bonanza Billion",
          image: "https://cdn.softswiss.net/i/s4/bgaming/BonanzaBillion.webp",
        },
        {
          name: "Sugar Rush",
          image: "https://cdn.softswiss.net/i/s4/pragmatic/SugarRush.webp",
        },
        {
          name: "Banana Farm",
          image: "https://cdn.softswiss.net/i/s4/hacksaw/BananaFarm.webp",
        },
      ],
    };
  },
  methods: {
    openGame(game) {
      console.log(`Abrindo jogo: ${game.name}`);
    },
  },
};
</script>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 18px 12px;
  padding-top: 25px;
}

.card {
  position: relative;
  width: 100%;
  padding-bottom: 133.334%;
  background: rgba(203, 215, 255, 0.03);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.css-798fc {
  position: relative;
  padding-bottom: 100%;
}

.css-15rutbb {
  position: absolute;
  top: 12px;
  left: 12px;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  display: block;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
}

.css-mjvv4w {
  position: relative;
  flex: 1 1 0%;
  min-height: 0px;
  display: flex;
  flex-direction: column;
  padding: 0px 16px 16px;
}

.css-1rjwjg2 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 18px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
}

.css-1luk4b6 {
  margin-right: auto;
  min-width: 65px;
  white-space: nowrap;
  color: rgb(177, 182, 198);
}

.css-1xdxz6f {
  margin-left: 4px;
  color: rgb(255, 255, 255);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.css-1rjwjg2 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 18px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
}

.css-1luk4b6 {
  margin-right: auto;
  min-width: 65px;
  white-space: nowrap;
  color: rgb(177, 182, 198);
}

.css-1xdxz6f {
  margin-left: 4px;
  color: rgb(255, 255, 255);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.css-y0tzfx {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 18px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
}

.css-1luk4b6 {
  margin-right: auto;
  min-width: 65px;
  white-space: nowrap;
  color: rgb(177, 182, 198);
}

.css-1q34knq {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  column-gap: 5.15021px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.css-1cu8gyx {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(203, 215, 255, 0.075);
  border-radius: 8px;
}

.css-pgccrr {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 18px;
  width: 18px;
  min-height: 18px;
  height: 18px;
}

.css-10qm6dq {
  width: 72%;
}

.css-o3tivt {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.css-5dcqy8 {
  fill: currentcolor;
  width: 26px;
  min-width: 26px;
  height: auto;
  position: absolute;
  left: -12.5px;
  bottom: 52px;
  transform: rotate(270deg);
}

.css-yqd1xw {
  fill: currentcolor;
  width: 26px;
  min-width: 26px;
  height: auto;
  position: absolute;
  right: -12.5px;
  bottom: 52px;
  transform: rotate(90deg);
}

.css-140wiou {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: 0.1s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 40px;
  border-radius: 8px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background: rgba(203, 215, 255, 0.075);
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  white-space: normal;
  padding: 0px 12px;
  font-size: 12px;
}

.css-140wiou > :last-child {
  margin-right: 0px;
}

.css-15rutbb {
  position: absolute;
  top: 12px;
  left: 12px;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  display: block;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
}

.css-4fih5x {
  margin-top: 1.5px;
  position: relative;
  bottom: 1.5px;
  text-transform: uppercase;
  font-size: 10px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.css-ycqhaj > :nth-of-type(1) {
  animation-delay: 0s;
}

.css-1cu8gyx {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(203, 215, 255, 0.075);
  border-radius: 8px;
}

.css-798fc {
  position: relative;
  padding-bottom: 100%;
}
</style>

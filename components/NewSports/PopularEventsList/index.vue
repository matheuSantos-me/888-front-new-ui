<template>
  <div class="container">
    <div class="content-headers">
      <div class="content-labels">
        <PopularEventsIcon />

        <a href="/casino" class="title">POPULAR EVENTS</a>
      </div>
    </div>

    <Card />
    
    <Card />

    <Card />
  </div>
</template>

<script>
import PopularEventsIcon from "./icons/PopularEventsIcon.vue";
import Card from "../Card";

export default {
  name: "PopularEventsList",
  components: {
    PopularEventsIcon,
    Card
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

.content-actions-carousel div {
  display: flex;
  align-items: center;
  height: 24px;
  min-height: 24px;
  padding: 0px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: default;
  margin-right: 15px;
  color: #fff;
  background: #cbd7ff0e;
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
  width: 150px;
  min-width: 150px;
  max-width: 150px;
  height: 210px;
  min-height: 210px;
  max-height: 210px;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>

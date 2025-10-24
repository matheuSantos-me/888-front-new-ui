<template>
  <el-row class="width-full display-inlineblock"
    :class="[
      isMobile || layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-0' : 'p-l-16 p-r-16',
      { 'm-t-48': (layoutType == 'layout2') && !isMobile, 'm-b-8': layoutType == 'layout3' || layoutType == 'layout5', 'm-t-16': layoutType == 'layout6' },
    ]">
    <div class="width-full" :style="!allSiderButtonDisabled && isMobile && layoutType != 'layout2' && layoutType != 'layout6' && themeType != 'gold13' ? 'overflow-x: scroll;' : 'overflow: hidden;'" id="sliderContainer">
      <el-row :style="{ width: totalWidthValue, transform: translationValue }">
        <div v-if="layoutType == 'layout1'" class="sports-type" :class="categoryClassObject(-1)" @click="onClickSportsCategory(-1)">
          <div class="float-right m-1 p-0 p-l-5 p-r-5 p-b-2 f-s-14 cat-count" :class="`sport-category-color-${themeType}`" style="background-color: rgba(0, 0, 0, 0.6)">
            {{ totalGameCount }}
          </div>
        </div>
        <div v-if="layoutType == 'layout1'" v-for="(item, index) in categoryList" :key="index" class="sports-type" :class="categoryClassObject(item.Id)" @click="onClickSportsCategory(item.Id)">
          <div class="float-right m-1 p-0 p-l-5 p-r-5 p-b-2 f-s-14 cat-count" :class="`sport-category-color-${themeType}`" style="background-color: rgba(0, 0, 0, 0.6)">
            {{ item.Count }}
          </div>
        </div>
        <div v-if="(layoutType == 'layout3' && themeType != 'gold13') || layoutType == 'layout5'" :class="[`sport-category-color-${themeType}`, { on: queryList.selectedSportsCategoryId === -1 }]" @click="onClickSportsCategory(-1)">
          <el-row>
            <el-row>
              <img :src="`/image/Sports/Category/${themeType}/all.png`" class="img-sports-all" width="32px">
            </el-row>
            <el-row>
              전체
            </el-row>
          </el-row>
        </div>
        <div v-if="(layoutType == 'layout3' && themeType != 'gold13') || layoutType == 'layout5'" v-for="(item, index) in categoryList" :key="index" :class="[`sport-category-color-${themeType}`, { on: queryList.selectedSportsCategoryId === item.Id }]" @click="onClickSportsCategory(item.Id)">
          <el-row>
            <el-row>
              <img :src="`/image/Sports/Category/${themeType}/${item.Id}.png`" :class="'img-sports-' + item.Id" width="32px">
            </el-row>
            <el-row>
              {{item.Name}}
            </el-row>
          </el-row>
        </div>
        <el-row v-if="(layoutType == 'layout2' || layoutType == 'layout6' || themeType == 'gold13') && !isMobile">
          <div class="float-left" style="width: calc(100% - 32px)">
            <div :class="[{ on: queryList.selectedSportsCategoryId == -1 }, `sport-category-${themeType}`]" @click="onClickSportsCategory(-1)">
              <div class="float-left m-r-12">
                <img :src="`/image/Sports/Category/${themeType}/all.png`" :class="`sport-category-${themeType}` + '-all'" width="16" />
              </div>
              <div class="float-left m-t-1">ALL</div>
              <div class="float-right m-t-1" :class="{'sport-cat-count': layoutType == 'layout6' || themeType == 'gold13'}">{{ totalGameCount }}</div>
            </div>
            <div v-if="(screenWidth > 1600 && index < 5) || (screenWidth <= 1600 && screenWidth > 1440 && index < 4) || (screenWidth <= 1440 && index < 3)"
              v-for="(item, index) in categoryList" :key="index"
              :class="[{ on: queryList.selectedSportsCategoryId === item.Id }, `sport-category-${themeType}`]"
              @click="onClickSportsCategory(item.Id)">
              <div class="float-left m-r-12">
                <img :src="`/image/Sports/Category/${themeType}/${item.Id}.png`" :class="`sport-category-${themeType}` + '-' + item.Id" width="16" />
              </div>
              <div class="float-left m-t-1">{{ item.Name }}</div>
              <div class="float-right m-t-1" :class="{'sport-cat-count': layoutType == 'layout6' || themeType == 'gold13'}">{{ item.Count }}</div>
            </div>
          </div>
          <div
            v-if="(screenWidth > 1600 && categoryList.length > 6) || (screenWidth <= 1600 && screenWidth > 1440 && categoryList.length > 5) || (screenWidth <= 1440 && categoryList.length > 4)"
            class="float-right cursor">
            <img :src="`/image/Sports/${themeType}/etc.png`" class="m-t-3" @click="onShowETC()" />
          </div>
        </el-row>
        <el-row v-if="(layoutType == 'layout2' || layoutType == 'layout6' || themeType == 'gold13') && isMobile" style="border-bottom: 1px solid #242424">
          <OwlCarousel v-if="categoryList.length > 0" :autoWidth="true" :nav="false" :dots="false">
            <div :class="[{ on: queryList.selectedSportsCategoryId === -1 }, `sport-category-color-${themeType}`]" @click="onClickSportsCategory(-1)">
              <el-row>
                <el-row>
                  <img :src="`/image/Sports/Category/${themeType}/all.png`" style="width: 16px" :class="`sport-category-${themeType}` + '-all'" />
                </el-row>
                <el-row class="m-t-8">All</el-row>
              </el-row>
            </div>
            <div v-for="(item, index) in categoryList" :key="index"
              :class="[{ 'on': queryList.selectedSportsCategoryId === item.Id }, `sport-category-color-${themeType}`]"
              @click="onClickSportsCategory(item.Id)"
            >
              <el-row>
                <el-row class="display-center">
                  <img :src="`/image/Sports/Category/${themeType}/${item.Id}.png`" :class="`sport-category-${themeType}` + '-' + item.Id" style="width: 16px" />
                </el-row>
                <el-row class="m-t-8">{{ item.Name }}</el-row>
              </el-row>
            </div>
          </OwlCarousel>
        </el-row>
      </el-row>
      <div v-show="!allSiderButtonDisabled" class="cursor" :class="`slider-${themeType}-prev`" :disabled="!sliderButtonDisabled" @click="onClickPrev"></div>
      <div v-show="!allSiderButtonDisabled" class="cursor" :class="`slider-${themeType}-next`" :disabled="sliderButtonDisabled" @click="onClickNext"></div>
    </div>
    <div v-if="isShowETC" style="position: absolute; right: 0; top: 0; z-index: 999; background: #1c1f21; padding: 8px; border-radius: 6px;">
      <div class="width-full p-12 display-inlineblock">
        <img :src="'/image/multi.svg'" class="float-right cursor" @click="onShowETC()" />
      </div>
      <el-row v-if="(screenWidth > 1600 && index > 4) || (screenWidth <= 1600 && screenWidth > 1440 && index > 3) || (screenWidth <= 1440 && index > 2)"
        v-for="(item, index) in categoryList" :key="item.Id">
        <div class="sports-category-drop" @click="onClickSportsCategory(item.Id)">
          <div class="float-left m-r-12">
            <img :src="`/image/Sports/Category/${themeType}/${item.Id}.png`" :class="`sport-category-${themeType}-${item.Id}`" width="16"/>
          </div>
          <div class="float-left m-t-1 text-white m-r-40">{{ item.Name }}</div>
          <div class="float-right m-t-1">{{ item.Count }}</div>
        </div>
      </el-row>
    </div>
    <el-row v-if="isMobile && layoutType == 'layout2'" class="p-8">
      <div
        style="width: calc(50% - 8px); margin-right: 8px;"
        :class="[
          $router.currentRoute.name == 'Sports' ? 'on' : '',
          `gametype-button-${themeType}`,
        ]"
        @click="onClickGameType('prematch')"
      >
        스포츠
      </div>
      <div
        style="width: calc(50% - 8px); margin-left: 8px;"
        :class="[
          $router.currentRoute.name == 'LiveSports' ? 'on' : '',
          `gametype-button-${themeType}`,
        ]"
        @click="onClickGameType('inplay')"
      >
        실시간
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import OwlCarousel from "vue-owl-carousel";

export default {
  name: "SportsCategory",
  props: ["sportsType"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      prematchCategory: "sports/getPrematchCategory",
      inplayCategory: "sports/getInplayCategory",
      queryList: "sports/getQueryList",
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      layoutType: 'getLayoutType'
    }),
  },
  components: {
    OwlCarousel,
  },
  data() {
    return {
      totalGameCount: 0,
      totalWidth: 0,
      totalWidthValue: "0px",
      translationValue: 0,
      sliderButtonDisabled: false,
      allSiderButtonDisabled: false,
      categoryList: [],
      sliderContainer: null,
      isShowETC: false,
    };
  },
  watch: {
    prematchCategory(val) {
      if (this.sportsType === "prematch") {
        this.categoryList = val;
        this.makeSlider();
      }
    },
    inplayCategory(val) {
      if (this.sportsType === "inplay") {
        this.categoryList = val;
        this.makeSlider();
      }
    },
  },
  mounted() {
    if (this.sportsType === "prematch")
      this.categoryList = this.prematchCategory;
    else this.categoryList = this.inplayCategory;
    this.makeSlider();
  },
  destroyed() {
    window.removeEventListener("resize", this.myResizeFunc);
  },
  updated() {
    this.myResizeFunc();
  },
  methods: {
    onShowETC() {
      this.isShowETC = !this.isShowETC;
    },
    categoryClassObject(categoryId) {
      let className = "sports-" + this.themeType + "-" + categoryId;
      if (this.queryList.selectedSportsCategoryId === categoryId)
        className += " on";
      return className;
    },
    onClickSportsCategory(categoryId) {
      this.isShowETC = false;
      let data = {
        selectedSportsCategoryId: categoryId,
        selectedLocationId: -1,
        selectedLeagueId: -1,
        searchKey: "",
        isSearchToday: 0,
      };
      this.$store.commit("sports/SET_QUERYLIST", data);
    },
    // 스포츠 종목 슬라이더 만들기
    makeSlider() {
      this.totalGameCount = 0;
      this.categoryList.forEach((category) => {
        if (this.sportsType == "prematch") {
          if (category.Id == 6046 || category.Id == 48242 || category.Id == 154914 || category.Id == 154830 || category.Id == 35232) {
            this.totalGameCount += category.Count;
          }
        } else {
          this.totalGameCount += category.Count;
        }
      });

      let marginRight = 1
      if (this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') marginRight = 1
      this.totalWidth = 63 * (this.categoryList.length + marginRight) + this.categoryList.length + marginRight;
      this.totalWidthValue = this.totalWidth + "px";
      if (this.layoutType == "layout2" || this.layoutType == "layout6" || this.themeType == 'gold13') this.totalWidthValue = "100%";
      window.addEventListener("resize", this.myResizeFunc);
    },
    // 스포츠 종목 슬라이더 이전 버튼 클릭
    onClickPrev() {
      if ( document.getElementById("sliderContainer").clientWidth > this.totalWidth ) {
        this.allSiderButtonDisabled = true;
        return;
      }
      if (!this.sliderButtonDisabled) return;
      this.sliderButtonDisabled = !this.sliderButtonDisabled;
      this.translationValue = "translateX(" + 0 + "px)";
    },
    // 스포츠 종목 슬라이더 다음 버튼 클릭
    onClickNext() {
      if ( document.getElementById("sliderContainer").clientWidth > this.totalWidth ) {
        this.allSiderButtonDisabled = true;
        return;
      }
      if (this.sliderButtonDisabled) return;
      this.sliderButtonDisabled = !this.sliderButtonDisabled;
      let val = this.totalWidth - document.getElementById("sliderContainer").clientWidth;
      this.translationValue = "translateX(-" + val + "px)";
    },
    // 스포츠 종목 슬라이더 리사이즈
    myResizeFunc() {
      if (document.getElementById("sliderContainer").clientWidth > this.totalWidth) {
        this.allSiderButtonDisabled = true;
      } else {
        this.allSiderButtonDisabled = false;
      }
    },
    onClickGameType(type) {
      if (type == "prematch") {
        this.$router.push("/Sports")
      } else {
        this.$router.push("/LiveSports")
      }
    }
  },
};
</script>
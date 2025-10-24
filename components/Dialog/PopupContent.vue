<template>
  <client-only>
    <div class="ok" style="width: auto;">
      <div class="modal-content">
        <div class="modal-header" :class="`bg-popup-${themeType}`">
          <button type="button" class="f-s-13 btn btn-xs btn-inverse pull-right" :class="`button-today-close-${themeType}`" @click="onClickPopupClose(0)">
            <strong>오늘 하루 열지 않기</strong><i class="m-l-5 fa fa-times"></i>
          </button>
          <h4 class="modal-title" 
            :class="
              layoutType == 'layout2' || 
              layoutType == 'layout3' || 
              layoutType == 'layout5' || 
              layoutType == 'layout6' || 
              themeType == 'orange11' || 
              themeType == 'purple11' || 
              themeType == 'red13' || 
              themeType == 'red15' || 
              themeType == 'blue12' || 
              themeType == 'yellow19' || 
              themeType == 'purple12' || 
              themeType == 'red12' || 
              themeType == 'blue15' ? 'text-white' : 'text-black'">
            <strong>
              <i v-if="layoutType != 'layout2'" class="fa fa-bullhorn m-l-5 m-r-10"></i>
              <img v-else :src="`/image/popup.png`" class="m-l-5 m-r-10">
              공지사항
            </strong>
          </h4>
        </div>
        <div class="modal-body text-center p-1 bg-white">
          <p v-if="popupData.content && popupData.content != ''" v-html="popupData.content" class="m-b-10"></p>
          <a :href="popupData.link != '' ? popupData.link : '#'" :target="popupData.isNewTab ? '_blank' : '_self'">
            <img :src="popupData.imageUrl | filterEmblem" width="100%" />
          </a>
        </div>
        <div class="modal-footer text-center" :class="`bg-popup-bottom-${themeType}`">
          <button type="button" class="btn btn-sm btn-inverse p-l-20 p-r-20 f-s-14" :class="`button-popup-close-${themeType}`" @click="onClickPopupClose(1)">
            <strong>창닫기</strong>
          </button>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import { linkImage } from "~/assets/js/data/datamanagement.js";

export default {
  props: ["popupData"],
  name: "popup",
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isShowedPopup: "getIsShowedPopup",
    }),
  },
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    },
  },
  methods: {
    onClickPopupClose(type) {
      if (type == 0) {
        let todayNotReadPopups = Cookies.get("popup");
        if (todayNotReadPopups == undefined)
          todayNotReadPopups = "|" + this.popupData._id;
        else todayNotReadPopups += "|" + this.popupData._id;
        Cookies.set("popup", todayNotReadPopups, 1);
      }
      this.$store.commit("DELETE_POPUP", this.popupData._id);
    },
    handleClose() {},
  },
};
</script>
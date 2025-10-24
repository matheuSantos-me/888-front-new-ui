<template>
  <client-only>
    <div>
      <div v-for="(popup, popupIndex) in popupList" :key="popupIndex" :set="isDialog = isMobile || (popup.top == 0 && popup.left == 0)">
        <el-dialog
          v-if="isDialog"
          :visible.sync="isDialog"
          :width="screenWidth > 400 ? '400px' : '100%'"
          class="popup-dialog modal fade popuppan in"
          :class="{ 'popup-absolute': !isMobile && (popup.top != 0 || popup.left != 0) }"
          :before-close="handleClose"
          style="display: block"
        >
          <PopupContent :popupData="popup" />
        </el-dialog>
        <div v-else class="position-absolute" style="z-index: 10000" :style="getPosition(popup)">
          <PopupContent :popupData="popup" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import PopupContent from "~/components/Dialog/PopupContent"

const popupInitService = feathers.service("/popup_init");
popupInitService.timeout = 60000;

export default {
  props: ["isVisibleSignup"],
  name: "popup",
  components: { PopupContent },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      screenWidth: "getScreenWidth",
      isShowedPopup: "getIsShowedPopup",
      popupList: "getPopupList",
			themeType: 'getThemeType',
      adminCode: "getAdminCode",
      isRenew: "getIsRenew"
    }),
  },
  watch: {
    currentUser(val) {
      if (this.currentUser != null && !this.isShowedPopup) {
        this.getList();
      }
    },
  },
  mounted() {
		if (this.themeType == 'red15' && this.$route.query.ref != undefined) {
			this.signupCode = this.$route.query.ref
		}

    // 홈페이지에서 팝업리스트 얻기
    this.getList();
  },
  data() {
    return {
      isShowPosition: false,
      signupCode: ""
    }
  },
  methods: {
    getList() {
      if (this.themeType != 'red15' && this.$router.currentRoute.name != "index") return;
      if (this.themeType == 'red15' && this.$router.currentRoute.name != "index" && this.$router.currentRoute.name != "Casino") return;
      if (this.themeType == 'red15' && this.$router.currentRoute.name == "Casino" && this.signupCode == this.adminCode) return

      if (!this.isShowedPopup && this.currentUser)
        this.$store.commit("SET_ISSHOWEDPOPUP", true);
      this.$store.commit("FORMAT_POPUPLIST")

      let userId = this.currentUser == null ? "" : this.currentUser._id;
      var query = { userId: userId, isRenew: this.isRenew };
      if (this.currentUser) query.beforeLogin=0;
      else query.beforeLogin=1;
      if (this.themeType == 'green') query.type=1;
      else query.type=0;

      popupInitService.find({ query: query })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
            return
          }
          if (res.data == null) return;
          let todayNotReadPopups = Cookies.get("popup");
          for (let index = 0; index < res.data.length; index++) {
            if (todayNotReadPopups !== undefined) {
              if (todayNotReadPopups.indexOf("|" + res.data[index]._id) > -1) {
                continue;
              }
            }
            this.$store.commit("SET_POPUPLIST", res.data[index]);
          }
          if (this.popupList.findIndex(popup => popup.top != 0 || popup.left != 0) > -1 && !this.isMobile)
            this.isShowPosition = true
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getPosition(popup) {
      return "top:" + popup.top + "px;" + "left:" + popup.left + "px"
    },
    handleClose() {},
  },
};
</script>
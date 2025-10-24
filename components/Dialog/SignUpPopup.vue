<template>
<client-only>
  <div>
    <el-dialog v-if="isUseSignUpPopup && dialogFormVisible" :visible.sync="dialogFormVisible" :width="screenWidth > 400 ? '400px' : '100%'" class="popup-dialog modal fade popuppan in" :before-close="handleClose" style="display: block">
      <div class="ok" :style="screenWidth > 400 ? 'width: 400px; margin-top: 105px;' : 'width: 100%; margin-top: 0px;'">
        <div class="modal-content">
          <div class="modal-body text-center p-0">
            <img :src="`/image/Popup/${themeType}/before-allow-poup.png`" width="100%">
            <div class="position-absolute cursor" style="right: 10px; top: 10px; width: 30px; height: 30px;" @click="onClickPopupClose"></div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default { 
  props: ["isVisibleSignup"],
  name: 'popup',
  computed: {
    ...mapGetters({ 
      currentUser: 'auth/currentUser',
      myIp: 'getYourIp'    ,
      isMobile: 'getIsMobile',
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      signUpPopupVisible: "getSignUpPopupVisible",
      isUseSignUpPopup: "getIsUseSignUpPopup"
    })
  },
  watch: {
    signUpPopupVisible(val){
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  data() {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
    onClickPopupClose() {
      this.dialogFormVisible = false
    },
    handleClose() {}
  },
}
</script>
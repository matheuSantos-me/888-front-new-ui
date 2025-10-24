<template>
<client-only>
  <div>
    <el-dialog v-if="isShowDialog" :visible.sync="isShowDialog" class="popup-dialog" :width="isMobile ? '90%' : '400px'">
      <div class="ok" :style="screenWidth > 400 ? 'width: 400px;' : 'width: 100%;'">
        <div class="modal-content">
          <div class="modal-header" :class="getBackColor(themeType, 1)">
            <h4 class="modal-title text-black">
              <strong><i class="fa fa-bullhorn m-l-5 m-r-10"></i>공지사항</strong>
            </h4>
          </div>
          <div class="modal-body text-center p-1 bg-white">
            <img :src="`/image/Casino/${themeType}/popup.png`" width="100%" />
          </div>
          <div class="modal-footer text-center" :class="getBackColor(themeType, 1)">
            <button type="button" class="btn btn-sm btn-inverse p-l-20 p-r-20 f-s-14" @click="onClickButton()">
              <strong>창닫기</strong>
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from "vuex";
import { getBackColor } from "@/assets/js/data/uicommon";

export default {
  name: "login",
  computed: {
    ...mapGetters({
      isVisible: 'casinomodal/isVisible',
      title: 'casinomodal/getTitle',
      content: 'casinomodal/getContent',
      buttonValue: 'casinomodal/getButtonValue',
      isMobile: 'getIsMobile',
			themeType: 'getThemeType',
      casinoInfo: "casinomodal/getCasinoInfo",
      screenWidth: "getScreenWidth",
    })
  },
  watch: {
    isVisible(val) {
      this.isShowDialog = true
    }
  },
  data() {
    return {
      inplayTimeCount: 0,
      calculateTime: null,
      isShowDialog: false,
      isLogoutMessage: false
    }
  },
  methods: {
    getBackColor,
    onClickButton() {
      this.isShowDialog = false
    }
  }
}
    
</script>
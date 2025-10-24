<template>
<client-only>
  <div>
    <fullscreen ref="fullscreen" @change="fullscreenChange">
      <el-dialog :visible.sync="dialogFormVisible" :before-close="handleClose" class="main-dialog casino-dialog" :custom-class="fullscreen ? 'fullscreen' : ''">
        <!-- 카지노창 -->
        <el-form class="bg-grey912 text-white auth-dialog height-full p-10" width="100%" autoComplete="on" label-position="left">
          <!-- 헤더 -->
          <el-row>
            <el-col :span="8" class="text-left p-l-10" :class="getTextColor(themeType, 1)">
              <i class="fa fa-circle"></i>{{isMobile ? '실행중' : '포커 실행중'}}
            </el-col>
            <el-col :span="8" class="float-left text-center" :class="getTextColor(themeType, 1)">
              <i class="fa fa-clock-o"></i>
              <span class="text-white">{{currentTime}}</span>
            </el-col>
            <el-col :span="8" class="text-right p-r-10">
              <i class="fa fa-expand m-r-10 f-s-16 cursor" :class="getTextColor(themeType, 1)" @click="toggle"></i>
              <img :src="`/image/Home/${themeType}/Close.png`" width="16" class="cursor" @click="onClickCloseCasino" style="margin-top: -3px;">
            </el-col>
          </el-row>
          <!-- 헤더 끝 -->
          <!-- 카지노 -->
          <el-row v-if="currentUser && currentUser.levelType == 'user'" class="casino-container m-t-5 height-100-pro-25" style="overflow:auto;-webkit-overflow-scrolling:touch">
            <iframe id="casinoFrame" :src="`https://poker.sportcore-games.com/poker-client/poker/login/${pokerId}/${currentUser.casinoUserID}`" width="100%" height="100%" frameborder="0" style="position:absolute; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
          </el-row>
          <!-- 카지노 끝 -->
        </el-form>
        <!-- 카지노창 끝 -->
      </el-dialog>
    </fullscreen>
  </div>
</client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import jQuery from "jquery";
import { getCurrentTime } from "@/assets/js/utils";
import { getTextColor } from '~/assets/js/data/uicommon'

export default {
  name: "casino",
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      isLogined: "auth/getIsLogined",
			themeType: 'getThemeType',
      pokerDialogVisible: "getPokerDialogVisible"
    })
  },
  data() {
    return {
      casinoUrl: '',
      dialogFormVisible: false,
      fullscreen: false,
      currentTime: '',
      pokerId: process.env.pokerID
    }
  },
  watch: {
    isLogined(val) {
      if (!val && this.dialogFormVisible) {
        this.onClickCloseCasino()
      }
    },
    pokerDialogVisible(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  mounted() {
    this.calculateTime = setInterval(() => {
      this.currentTime = this.getCurrentTime()
    }, 1000)
    if (this.isMobile) this.fullscreen = true
  },
  destroyed () {
    clearInterval(this.calculateTime)
  },
  methods: {
    getTextColor,
    getCurrentTime,
    // 카지노창 닫기
    async onClickCloseCasino() { 
      if (this.fullscreen) {
        this.fullscreen = false
        this.$refs['fullscreen'].toggle()
      }
      this.dialogFormVisible = false
    },
    toggle () {
      this.$refs['fullscreen'].toggle() // recommended
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    },
    handleClose() { }
  }
}
    
</script>
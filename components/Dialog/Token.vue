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
              <i class="fa fa-circle"></i>
              {{isMobile ? '실행중' : '라이브게임 실행중'}}
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
          <el-row class="casino-container m-t-5 height-100-pro-25" style="overflow:auto;-webkit-overflow-scrolling:touch">
            <iframe id="casinoFrame" width="100%" height="100%" scrolling="no" frameborder="0" style="position:absolute; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" allowFullScreen="true" :src="gameUrl"></iframe>
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

const tokenGameUrlService = feathers.service('token-gameurl')
tokenGameUrlService.timeout = 60000;

export default {
  name: "casino",
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      tokenDialogInfo: "getTokenDialogInfo",
      isLogined: "auth/getIsLogined",
			themeType: 'getThemeType'
    })
  },
  data() {
    return {
      gameUrl: '',
      dialogFormVisible: false,
      fullscreen: false,
      currentTime: ''
    }
  },
  watch: {
    isLogined(val) {
      if (!val && this.dialogFormVisible) {
        this.onClickCloseCasino()
      }
    },
    tokenDialogInfo(val){
      if(val && this.currentUser && this.currentUser.tokenId) {
        this.$nuxt.$loading.start()
        tokenGameUrlService.find({query: {type: val.type }}).then((res) => {
          if(res.code == 1) {
            this.gameUrl = res.data
            this.dialogFormVisible = true;
          } else {
            this.$message('점검중인 게임입니다.')
          }
          this.$nuxt.$loading.finish()
        })
      } else {
        this.$nuxt.$loading.finish()
        this.dialogFormVisible = false;
      }
    },
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
    onClickCloseCasino() {
      this.$nuxt.$loading.start()
      jQuery('#casinoFrame')[0].src = ''
      this.$store.commit("SET_TOKENDIALOGINFO", null)
      if (this.fullscreen) {
        this.fullscreen = false
        this.$refs['fullscreen'].toggle()
      }
      this.$nuxt.$loading.finish()
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
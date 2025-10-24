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
              <i class="fa fa-circle"></i>{{isMobile ? '실행중' : '라이브게임 실행중'}}
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
            <iframe id="casinoFrame" :src="casinoUrl" width="100%" height="100%" frameborder="0" style="position:absolute; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
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

const lobbyService = feathers.service('getLobbyUrl')
const accountBalanceService = feathers.service('getBalanceGame')
const gameUrlService = feathers.service('getGameUrl')
lobbyService.timeout = 60000;
accountBalanceService.timeout = 60000;
gameUrlService.timeout = 60000;

export default {
  name: "casino",
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      casinoDialogInfo: "getCasinoDialogInfo",
      isLogined: "auth/getIsLogined",
			themeType: 'getThemeType'
    })
  },
  data() {
    return {
      casinoUrl: '',
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
    async casinoDialogInfo(val){
      try {
        if(val && this.currentUser) {
          if(val.isLive) {
            let res = await lobbyService.find({query: { thirdPartyCode: val.thirdPartyCode, isMobile: this.isMobile }})            
            if(res.code == 1) {
              this.casinoUrl = res.data.lobbyUrl
              this.dialogFormVisible = true;
            } else {
              this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
            }
            this.$nuxt.$loading.finish()
          } else {
            let res = await gameUrlService.find({query: {
              thirdPartyCode: val.thirdPartyCode,
              gameId: val.gameId,
            }})
            if(res.code == 1) {
              this.casinoUrl = res.data.gameUrl
              this.dialogFormVisible = true;
            } else {
              this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
            }
            this.$nuxt.$loading.finish()
          }
        } else {
          this.dialogFormVisible = false;
          this.$nuxt.$loading.finish()
        }
      } catch (err) {
        this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
        this.dialogFormVisible = false;
        this.$nuxt.$loading.finish()
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
    async onClickCloseCasino() {
      this.$nuxt.$loading.start()
      jQuery('#casinoFrame')[0].src = ''
      this.$store.commit("SET_CASINODIALOGINFO", null)

      // 카지노 금액 업데이트
      let resBalance = await accountBalanceService.find().catch(err => { console.log(err.message) })
      if (resBalance.code != 1) {
        console.log(resBalance.message)
      }
      
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
    // 메시지 보여주기
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type
			})
		},
    handleClose() { }
  }
}
    
</script>
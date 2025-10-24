<template>
  <client-only>
    <div class="animated fadeInUpBig panel panel-inverse" 
      :class="{'no-bg': themeType == 'white'}">
      <div class="panel-heading p-0 width-full" :style="themeType == 'orange11' ? 'background-image: linear-gradient(to right, #040404 0%, #1a1a1a 50%, #040404 100%);' : 'background: none'">
        <img v-if="themeType == 'orange11'" :src="'/image/login/back-top.png'" :width="isMobile ? '100%' : '60%'" :class="{'m-b-50': isMobile}">
        <el-row :class="{'m-t-150': themeType == 'white'}">
          <el-row class="text-center">
            <img v-if="themeType == 'orange11' || themeType == 'white'" :src="`/image/Home/${themeType}/logo1.png`" :width="themeType == 'orange11' ? '120px' : '220px'">
          </el-row>
          <el-row v-if="themeType == 'orange11'" class="text-center f-s-14 m-t-10">
            <span :class="getTextColor(themeType, 1)">888 멤버쉽</span> 프라이빗 스포츠용품 쇼핑몰
          </el-row>
          <el-row class="display-center width-full">
            <!-- 로그인창 -->
            <el-form v-if="!isVisivleForgorPass" class="text-white" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" style="width: 294px;">
              <!-- 로그인 -->
              <el-row class="m-t-20">
                <el-form-item prop="userId">
                  <el-input name="userId" id="userId" type="text" :class="`login-input-${themeType}`" v-model="loginForm.userId" @keyup.enter.native="handleLogin" autoComplete="on" placeholder="아이디" />
                </el-form-item>
                <el-form-item prop="userPwd">
                  <el-input name="userPwd" id="userPwd" type="password" :class="`login-input-${themeType}`" v-model="loginForm.userPwd" @keyup.enter.native="handleLogin" autoComplete="off" placeholder="패스워드" />
                </el-form-item>
                <el-row class="text-center">
                  <el-button login-button type="primary" class="width-full float-left" :class="`${themeType}-button`" :loading="loading" @click.native.prevent="handleLogin">{{$t('common.words.login')}}</el-button>
                </el-row>
              </el-row>
              <!-- 로그인 끝 -->
            </el-form>
            <!-- 로그인창 끝 -->
          </el-row>
        </el-row>
        <el-row v-if="themeType == 'orange11'">
          <img :src="'/image/login/back-bottom.png'" :width="isMobile ? '100%' : '60%'" class="float-right" :class="{'m-t-50': isMobile}">
        </el-row>
      </div>
    </div>
  </client-only>
</template>

<script>

import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import Signup from '~/components/Auth/Signup'
import { getTextColor } from "@/assets/js/data/uicommon"

const userLoginService = feathers.service('/user-login')
const authService = feathers.service('authentication')

authService.timeout = 60000
userLoginService.timeout = 60000

export default { 
  layout: ({ isBlock }) => isBlock ? 'block' : 'empty',
  middleware: ['block'],
  components: { Signup },
  computed: {
    ...mapGetters({
      myIp: 'getYourIp',
      isMobile: "getIsMobile",
      themeType: 'getThemeType',
      signUpPopupVisible: "getSignupDialogVisible",
      isUseSignUpPopup: "getIsUseSignUpPopup",
      blockUserMessage: "getBlockUserMessage",
      isLogined: "auth/getIsLogined",
      isNewUser: "getIsNewUser",
      isUseLoginRecaptcha: 'getIsUseLoginRecaptcha'
    })
  },
  data() {
    const validateUserId = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('아이디를 입력하세요.'))
      } else {
        callback()
      }
    }
    const validatePwd = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('비밀번호를 4글자 이상 입력하세요.'))
      } else {
        callback()
      }
    }
    const validateuserPhoneNum = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('핸드폰 번호를 입력하세요.'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userId: '',                 // 유저아이디
        userPwd: ''                 // 비번
      },
      forgotPasswordForm: {
        userId: '',                 // 유저아이디
        userPhoneNum: '',           // 모바일번호
        userVerifyCode: '',         // 인증코드
        userNewPwd: '',             // 새비번
        userNewPwdConfirm: '',      // 새비번확인
      },
      isChangingPwd: false,         // 비번변경중상태
      isVisivleForgorPass: false,   // 비번변경창 보여주기
      dialogFormVisible: false,     // 로그인창 보여주기
      loginRules: {                 // 로그인룰
        userId: [{ required: true, trigger: 'blur', validator: validateUserId }],
        userPwd: [{ required: true, trigger: 'blur', validator: validatePwd }]
      },
      sendVerifyCodeRules: {        // 비번변경 인증룰
        userId: [{ required: true, trigger: 'blur', validator: validateUserId }],
        userPhoneNum: [{ required: true, trigger: 'blur', validator: validateuserPhoneNum }]
      },
      loading: false,               // 로그인중상태
      loadingSendCode: false,       // 인증코드발송중상태
      isCheckSMSVerifyCode: false,  // 인증하였는가
      isSendSMSVerifyCode: false,   // 인증코드를 보냈는가
      checkingSMSVerifyCode: false  // 인증코드확인중상태
    }
  },
  watch: {
    isLogined(val) {
      if (val == true) {
        this.loginForm.userId = '';
        this.loginForm.userPwd = '';
      }
    }
  },
  created() {
  },
  methods: {    
    getTextColor,
    // 회원가입 노출
    onClickSignup() {
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      if (!this.isMobile) {
        this.$store.commit('SET_SIGNUPDIALOGVISIBLE')
      } else {
        this.$router.push("/auth/signupDoor")
      }
    },
    // 로그인
    async handleLogin() {
      if (this.loading) return

      this.loading = true
      this.$nuxt.$loading.start()
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          if (this.isUseLoginRecaptcha) {
            this.$store.commit('SET_ISLOGINCAPTCHA', 1)
            this.$store.commit('SET_RECAPTCHAVALUE')
            this.$store.commit('SET_LOGINDATA', {
              id: this.loginForm.userId.trim().toLowerCase(),
              pass: this.loginForm.userPwd.trim()
            })
          } else {
            var resultData = ''
            var queryString = "?remoteip=" + window.location.hostname + 
                              "&userId=" + this.loginForm.userId.trim().toLowerCase() + 
                              "&password=" + this.loginForm.userPwd.trim() + 
                              '&isAdminDomain=0' +
                              '&IPAddress=' + this.myIp
                              
            await userLoginService.find({ query: {
              userId: this.loginForm.userId.trim().toLowerCase(),
              password: this.loginForm.userPwd.trim()
            }})
              .then((res) => { resultData = res })
              .catch((err) => { this.showMessage('알림메시지',`[오류메시지]: ${err.message}`, '닫기[Close]', 0) })
      
            if (resultData.code == 6) {
              if (this.isUseSignUpPopup) {
                this.$store.commit('SET_SIGNUPPOPUPVISIBLE')
              } else {
                this.showMessage('알림메시지', resultData.message, '닫기[Close]', 0)
              }
            } else if (resultData.code == 10) {
              // this.$store.commit("SET_LOGINDIALOGVISIBLE");
              // this.$store.commit("SET_LOGINSIDEVERIFY", true)
              // this.$store.commit("SET_LOGINSIDEUSERID", {userId: this.loginForm.userId.trim().toLowerCase(), password: this.loginForm.userPwd.trim() })
            } else if (resultData.code == 1) {
              await authService.create({ 
                userLoginId: this.loginForm.userId.trim().toLowerCase(), 
                password: this.loginForm.userPwd.trim(), 
                strategy: 'local'
              }).then(async (res) => {
                window.localStorage.setItem('feathers-jwt', res.accessToken)
                this.$store.commit('disableInitializableTTL')
                this.$store.commit('auth/SET_USER', resultData.data)
                this.$store.commit('auth/SET_ISLOGINED', true)
                this.$router.push("/")
              }).catch((err)=>{
                this.$router.push("/")
              })
            } else {
              this.showMessage( "알림메시지", resultData.message, "닫기[Close]", resultData.code == 1 ? 1 : 0 );
            }
          }
        }
        this.loading = false
        this.$nuxt.$loading.finish();
      })
    },
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		}
  }
}
</script>
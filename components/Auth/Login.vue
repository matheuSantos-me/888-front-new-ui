<template>
<client-only>
  <el-dialog :visible.sync="dialogFormVisible" class="main-dialog" :class="`dialog-${themeType}`" :width="getDialogWidth()" :before-close="handleClose">
    <img v-if="layoutType == 'layout2' && !isMobile" :src="`/image/login/login-${themeType}.png`" ref="loginImage" :class="`${themeType}-login-img`">
    <el-row>
      <!-- 로그인창 -->
      <el-form v-if="showMode == 0" class="width-full" :class="`bg-dialog-${themeType}`" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
        <!-- 헤더 -->
        <el-row v-if="layoutType != 'layout2' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="m-t-21">
          <el-col :span="22" class="text-center display-center">
            <el-row>
              <img
                :src="`/image/Home/${themeType}/LoginLogo.png`"
                :class="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'green' ? 'm-t-0' : 'm-t-7'"
                :height="getLogoImgHeight()" class="float-left">
              <div v-if="themeType != 'gold11'" class="float-left f-s-21 f-w-700 p-l-5 p-t-15" :class="getTextColor(themeType, 1)">
                로그인
              </div>
            </el-row>
          </el-col>
          <el-col :span="2" class="text-left">
            <img :src="`/image/Home/${themeType}/Close.png`" class="cursor m-t-10" @click="onClickCloseLogin">
          </el-col>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" class="text-left f-s-24">
          <span class="opacity-6">로그인</span>
          <img :src="'/image/multi.svg'" class="float-right cursor i-multi" @click="onClickCloseLogin">
        </el-row>
        <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="f-w-900" :class="[`text-${themeType}`, layoutType == 'layout6' ? 'f-s-13' : 'f-s-18']">
          <el-row class="text-center">
            <img :src="`/image/Home/${themeType}/LoginLogo.png`" :width="themeType == 'blue18' ? 200 : layoutType == 'layout3' && (themeType == 'yellow16' || themeType == 'yellow18') ? 200 : themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow14' ? 300 : 136">
            <img :src="'/image/multi.svg'" class="cursor i-multi" style="position: absolute; right: 0; top: 0;" @click="onClickCloseLogin">
          </el-row>
          <el-row class="text-center" :class="{'m-t-24': themeType != 'yellow15'}">
            {{layoutType == 'layout6' ? '로그인 후 이용할 수 있습니다.' : '로그인'}}
          </el-row>
        </el-row>
        <!-- 헤더 끝 -->
        <!-- 로그인 -->
        <el-row :class="`loginform-${themeType}`">
          <div v-if="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="m-b-12" :class="layoutType == 'layout2' ? 'opacity-6 m-t-40' : 'f-s-12 m-t-24'">아이디</div>
          <el-row>
            <el-form-item prop="userId">
              <el-input name="userId" :class="`input-${themeType}`" id="userId" type="text" v-model="loginForm.userId" @keyup.enter.native="handleLogin" autoComplete="on" placeholder="아이디" />
            </el-form-item>
          </el-row>
          <div v-if="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="m-b-12" :class="layoutType == 'layout2' ? 'opacity-6 m-t-40' : 'f-s-12 m-t-12'">비밀번호</div>
          <el-row>
            <el-form-item prop="userPwd">
              <el-input name="userPwd" :class="`input-${themeType}`" id="userPwd" type="password" v-model="loginForm.userPwd" @keyup.enter.native="handleLogin" autoComplete="off" placeholder="패스워드" />
            </el-form-item>
          </el-row>
          <el-row :class="{'m-t-20': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}">
            <el-row :class="{'p-l-8 p-r-8': themeType == 'yellow15'}">
              <el-button id="captcha" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :loading="loading" @click.native.prevent="handleLogin">
                <span>{{$t('common.words.login')}}</span>
              </el-button>
            </el-row>
            <el-row v-if="themeType == 'yellow15'" class="display-flex m-t-8" style="gap: 8px;">
              <a href="https://t.me/mbs7979" target="_blank" class="width-full" style="flex: 1 1 0;">
                <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}1-button`">
                  <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                  </div>
                  <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
                </div>
              </a>
              <a href="https://open.kakao.com/o/sEXApPUg" target="_blank" class="width-full" style="flex: 1 1 0;">
                <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}1-button`">
                  <div class="float-left">
                    <img :src="`/image/Question/kakao.png`" height="23" />
                  </div>
                  <div class="float-left m-l-10 p-t-3">카카오톡 문의</div>
                </div>
              </a>
            </el-row>
            <el-row v-if="themeType == 'gold11'" class="m-t-8">
              <a href="https://t.me/TGCS114" target="_blank" class="width-full">
                <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}-button`">
                  <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                  </div>
                  <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
                </div>
              </a>
            </el-row>
            <el-row v-if="themeType == 'blue15'" class="m-t-8">
              <a href="https://t.me/DrDr365" target="_blank" class="width-full">
                <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}-button`">
                  <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                  </div>
                  <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
                </div>
              </a>
            </el-row>
            <el-row v-if="themeType == 'red12'" class="m-t-8">
              <a href="https://t.me/hbman365" target="_blank" class="width-full">
                <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}-button`">
                  <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                  </div>
                  <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
                </div>
              </a>
            </el-row>
            <el-row v-if="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5'" :class="layoutType == 'layout2' ? 'm-t-24' : 'm-t-8'">
              <el-button type="primary" class="width-full" :class="`signup-button-${themeType}`" @click.native.prevent="onClickSignup">
                <span >회원가입</span>
              </el-button>
            </el-row>
          </el-row>
          <el-row v-if="layoutType != 'layout2' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="m-t-50 m-b-25 text-center">
            아직 회원이 아니신가요?<br>
            <span class="text-underline cursor f-s-18 f-w-700" :class="`go-sign-up-${themeType}`" @click="onClickSignup">회원가입 바로가기</span>
          </el-row>
          <el-row v-if="layoutType == 'layout6'" class="m-t-50 m-b-25 text-center">
            아직 {{themeType == 'yellow15' ? '멤버십' : '마추자'}} 회원이 아니신가요?
            <span class="cursor m-l-8" :class="`go-sign-up-${themeType}`" @click="onClickSignup">회원가입</span>
          </el-row>
        </el-row>
        <!-- 로그인 끝 -->
      </el-form>
      <!-- 로그인창 끝 -->
      <!-- 인증 -->
      <el-form v-if="showMode == 2" class="text-white auth-dialog width-full" :class="`bg-dialog-${themeType}`" autoComplete="on" :model="verifyForm" ref="verifyForm" label-position="left">
        <!-- 헤더 -->
        <el-row v-if="layoutType != 'layout2'" class="p-t-20">
          <el-col :span="22" class="text-center display-center">
            <img :src="`/image/Home/${themeType}/LoginLogo.png`" :class="themeType == 'orange11' ? 'm-t-0' : 'm-t-7'" :height="getLogoImgHeight()" class="float-left">
            <div class="f-s-21 f-w-700 p-l-5 p-t-15" :class="getTextColor(themeType, 1)">
              인증
            </div>
          </el-col>
          <el-col :span="2" class="text-left">
            <img :src="`/image/Home/${themeType}/Close.png`" class="cursor m-t-10" @click="onClickCloseVerify()">
          </el-col>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" class="text-left f-s-24">
          <span class="opacity-6">{{isSendSMSVerifyCode ? remainTime : "인증"}}</span>
          <img :src="'/image/multi.svg'" class="float-right cursor i-multi" @click="onClickCloseLogin">
        </el-row>
        <!-- 헤더 끝 -->
        <el-row class="m-t-35" :class="{'p-l-50 p-r-50': layoutType != 'layout2'}">
          <el-form-item class="m-b-5">
            <el-input name="userVerifyCode" :class="`input-${themeType}`" id="userVerifyCode" maxlength="6" v-model="verifyForm.verifyCode" placeholder="핸드폰 인증번호" />
            <el-button type="primary" class="position-absolute right-button width-80" :class="`${themeType}-button`" :loading="loadingSendSMS" :disabled="isSendSMSVerifyCode" @click="onClickSendLoginCode">코드 받기</el-button>
          </el-form-item>
          <el-row v-if="isSendSMSVerifyCode" class="text-right">{{remainTime}}</el-row>
          <el-row class="m-t-30 m-b-50 text-center">
            <el-button type="primary" class="width-full" :class="`${themeType}-button`" :loading="loadingSendCode" :disabled="!isSendSMSVerifyCode || verifyForm.verifyCode.length != 6" @click="onClickVerifyLoginCode">코드 인증</el-button>
          </el-row>
        </el-row>
      </el-form>
      <!-- 인증 끝 -->
    </el-row>
  </el-dialog>
</client-only>
</template>
<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { getTextColor } from "@/assets/js/data/uicommon";

const sendSMSVerifyService = feathers.service('/sendSMSUnconnect')
const smsLoginVerifyService = feathers.service('/verifyCodeUnconnect')
const userLoginService = feathers.service('/user-login')
const authService = feathers.service('authentication')

authService.timeout = 60000
sendSMSVerifyService.timeout = 60000
smsLoginVerifyService.timeout = 60000
userLoginService.timeout = 60000

export default {
  name: "login",
  computed: {
    ...mapGetters({
      myIp: 'getYourIp',
      isMobile: 'getIsMobile',
      loginDialogVisible: "getLoginDialogVisible",
      themeType: 'getThemeType',
      layoutType: 'getLayoutType',
      isUseSignUpPopup: "getIsUseSignUpPopup",
      blockUserMessage: "getBlockUserMessage",
      isUseAuth: "getIsUseAuth",
      loginResult: "getLoginResult",
      isLogined: "auth/getIsLogined",
      isNewUser: "getIsNewUser",
      isSendSMSVerifyCode: 'getIsSendSMSVerifyCode',
      isUseRecaptcha: 'getIsUseRecaptcha',
      isUseLoginRecaptcha: 'getIsUseLoginRecaptcha',
      loginSideVerify: "getLoginSideVerify",
      loginSideUserId: "getLoginSideUserId"
    })
  },
  data() {
    const validateUserId = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('아이디를 입력하세요.'))
      } else {
        callback()
      }
    }
    const validatePwd = (_rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('비밀번호를 4글자 이상 입력하세요.'))
      } else {
        callback()
      }
    }
    const validateuserPhoneNum = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('핸드폰 번호를 입력하세요.'))
      } else {
        callback()
      }
    }
    const validateMobileNumber = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('핸드폰번호 마지막 4자리수를 입력하세요.'))
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
      verifyForm: {
        verifyCode: ''
      },
      isSendLoginCode: false,       // 로그인인증코드를 발송했는가?
      isChangingPwd: false,         // 비번변경중상태
      isAuthing: false,
      showMode: 0,                  // 비번변경창 보여주기
      dialogFormVisible: false,     // 로그인창 보여주기
      loginRules: {                 // 로그인룰
        userId: [{ required: true, trigger: 'blur', validator: validateUserId }],
        userPwd: [{ required: true, trigger: 'blur', validator: validatePwd }]
      },
      sendVerifyCodeRules: {        // 비번변경 인증룰
        userId: [{ required: true, trigger: 'blur', validator: validateUserId }],
        userPhoneNum: [{ required: true, trigger: 'blur', validator: validateuserPhoneNum }]
      },
      remainTime: "4분 59초",
      remainSecs: 59,
      remainMins: 4,
      calculateTime: null,
      loading: false,               // 로그인중상태
      loadingSendSMS: false,        // 장기미접속자 인증코드 발송중
      loadingSendCode: false,       // 인증코드발송중상태
      isCheckSMSVerifyCode: false,  // 인증하였는가
    }
  },
  watch: {
    loginDialogVisible(_val){
      this.dialogFormVisible = true;
      if (this.loginSideVerify) {
        this.showMode = 2
      } else {
        this.showMode = 0
        if (this.layoutType == 'layout2' && !this.isMobile) {
          setTimeout(() => {
            this.$refs.loginImage.classList.add('login-img-ani')
          }, 500)
        }
      }
    },
    isLogined(val) {
      if (val == true) {
        this.loginForm.userId = '';
        this.loginForm.userPwd = '';
        this.dialogFormVisible = false
      }
    },
    loginSideVerify(val) {
      if (val) {
        this.showMode = 2
      } else {
        this.showMode = 0
      }
    },
    isSendSMSVerifyCode(val) {
      if (val) {
        this.remainMins = 4
        this.remainSecs = 59
      }
    },
    dialogFormVisible() {
      if (!this.dialogFormVisible && this.layoutType == 'layout2' && !this.isMobile) {
          this.$refs.loginImage.classList.remove('login-img-ani')
      }
    }
  },
  mounted() {
    this.$store.commit('SET_ISSENDSMSVERIFYCODE', false)
    this.calculateTime = setInterval(() => {
      this.currentTime = this.calculateRemainTime();
    }, 1000);
  },
  methods: {
    getTextColor,
    // 인증유효시간 계산
    calculateRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
        this.remainMins --;
        if (this.remainMins < 0) {
          this.remainMins = 4
          this.$store.commit('SET_ISSENDSMSVERIFYCODE', false)
        }
      }

      if (this.remainSecs < 10) this.remainTime = this.remainMins + "분 0" + this.remainSecs + "초"
      else this.remainTime = this.remainMins + "분 " + this.remainSecs + "초"
    },
    // 모달 가로 사이즈
    getDialogWidth() {
      if (this.isMobile) {
        return '95%'
      } else {
        if (this.layoutType == 'layout6') {
          return '450px'
        } else {
          return '490px'
        }
      }
    },
    // 로고 세로 사이즈
    getLogoImgHeight() {
      if (this.themeType == 'orange14') {
        return 33
      } else if (this.themeType == 'red14') {
        return 65
      } else if (this.themeType == 'orange11') {
        return 35
      } else {
        return 46
      }
    },
    // 비번변경 노출
    showForgotUserPwdDialog() {
      this.showMode = 1
    },
    // 로그인 닫기
    onClickCloseLogin() {
      this.loginForm.userId = '';
      this.loginForm.userPwd = '';
      this.dialogFormVisible = false
    },
    // 비번변경 닫기
    onClickCloseForgotPwd() {
      this.forgotPasswordForm.userId = ''
      this.forgotPasswordForm.userPhoneNum = ''
      this.forgotPasswordForm.userVerifyCode = ''
      this.forgotPasswordForm.userNewPwd = ''
      this.forgotPasswordForm.userNewPwdConfirm = ''
      this.showMode = 0
    },
    // 장기미접속자 인증 닫기
    onClickCloseVerify() {
      this.showMode = 0
      this.verifyForm.verifyCode = ''
      this.loginForm.userId = '';
      this.loginForm.userPwd = '';
      this.dialogFormVisible = false
      this.$store.commit('SET_ISSENDSMSVERIFYCODE', false)
    },
    // 회원가입 노출
    onClickSignup() {
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      if (!this.isMobile) {
        this.$store.commit('SET_SIGNUPDIALOGVISIBLE')
      } else {
        this.loginForm.userId = '';
        this.loginForm.userPwd = '';
        this.dialogFormVisible = false
        this.$router.push("/auth/signup")
      }
    },
    // 로그인
    async handleLogin(_event) {
      if (this.loading) return

      this.loading = true
      this.$nuxt.$loading.start()
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loginForm.userId = this.loginForm.userId.trim().toLowerCase()
          this.loginForm.userPwd = this.loginForm.userPwd.trim()
          if (this.isUseLoginRecaptcha) {
            this.$store.commit('SET_ISLOGINCAPTCHA', 1)
            this.$store.commit('SET_RECAPTCHAVALUE')
            this.$store.commit('SET_LOGINDATA', {
              id: this.loginForm.userId,
              pass: this.loginForm.userPwd
            })
          } else {
            var resultData = ''
            await userLoginService.find({ query: {
              userId: this.loginForm.userId,
              password: this.loginForm.userPwd
            }})
              .then((res) => { resultData = res })
              .catch((err) => { this.showMessage('알림메시지', `[오류메시지]: ${err.message}`, '닫기[Close]', 0) })

            if (resultData.code == 6) {
              if (this.isUseSignUpPopup) {
                this.$store.commit('SET_SIGNUPPOPUPVISIBLE')
              } else {
                this.showMessage('알림메시지', resultData.message, '닫기[Close]', 0)
              }
            } else if (resultData.code == 10) {
              // 모바일인증
              this.showMode = 2
            } else if (resultData.code == 1) {
              authService.create({ userLoginId: this.loginForm.userId, password: this.loginForm.userPwd, strategy: 'local' })
              .then(async (res) => {
                window.localStorage.setItem('feathers-jwt', res.accessToken)
                this.$store.commit('disableInitializableTTL')
                this.$store.commit('auth/SET_USER', resultData.data)
                this.$store.commit('auth/SET_ISLOGINED', true)
                this.$router.push("/")
              }).catch((_err)=>{
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
    // 장기미접속자 인증코드 보내기
    async onClickSendLoginCode() {
      try {
        if (this.loadingSendSMS) return

        this.loadingSendSMS = true
        this.$nuxt.$loading.start();
        let userId = this.loginForm.userId
        if (this.loginSideVerify) {
          userId = this.loginSideUserId.userId
        }
        this.$store.commit('SET_ISSENDSMSVERIFYCODE', false)
        if (this.isUseRecaptcha) {
          this.$store.commit('SET_SMSUSERID', userId)
          this.$store.commit('SET_ISLOGINCAPTCHA', 3)
          this.$store.commit('SET_RECAPTCHAVALUE')
        } else {
          let res = await sendSMSVerifyService.find({query: { userId: userId }})
          if (res.code == 1) {
            this.remainMins = 4
            this.remainSecs = 59
            this.$store.commit('SET_ISSENDSMSVERIFYCODE', true)
          }

          this.showMessage("알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0);
        }
        this.loadingSendSMS = false
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
        this.loadingSendSMS = false
        this.$nuxt.$loading.finish();
      }
    },
    // 장기미접속자 인증코드 확인
    async onClickVerifyLoginCode() {
      try {
        if (this.loadingSendCode) return

        this.loadingSendCode = true
        this.$nuxt.$loading.start();
        let userId = this.loginForm.userId
        let password = this.loginForm.userPwd
        if (this.loginSideVerify) {
          userId = this.loginSideUserId.userId
          password = this.loginSideUserId.password
        }
        if (!this.verifyForm.verifyCode) {
          this.loadingSendCode = false
          this.$nuxt.$loading.finish();
          return
        }

        this.isCheckSMSVerifyCode = false
        const smsVerifyInfo = await smsLoginVerifyService.find({query: {
          userId: userId,
          verifyCode: this.verifyForm.verifyCode.trim()
        }})

        if (smsVerifyInfo.code != 1){
          this.showMessage( "알림메시지", smsVerifyInfo.message, "닫기[Close]", smsVerifyInfo.code == 1 ? 1 : 0 );
        } else {
          this.isCheckSMSVerifyCode = true
          let res = await authService.create({ userLoginId: userId, password: password, strategy: 'local' })
          window.localStorage.setItem('feathers-jwt', res.accessToken)
          this.$store.commit('disableInitializableTTL')
          this.$store.commit('auth/SET_USER', res.user)
          this.$store.commit('auth/SET_ISLOGINED', true)
          this.$router.push("/")
        }
        this.loadingSendCode = false
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
        this.loadingSendCode = false
        this.$nuxt.$loading.finish();
      }
    },
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    },
    handleClose() {
    }
  }
}

</script>

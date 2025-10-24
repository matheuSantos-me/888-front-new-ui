<template>
  <div>
    <slot />
  </div>
</template>
<script>
import jQuery from 'jquery'
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";

const sendSMSService = feathers.service('/sendSMSSignup')
const sendSMSVerifyService = feathers.service('/sendSMSUnconnect')
const userLoginService = feathers.service('/user-login')
const authService = feathers.service('authentication')

authService.timeout = 60000
userLoginService.timeout = 60000
sendSMSService.timeout = 60000;
sendSMSVerifyService.timeout = 60000;

export default {  
  computed: {
    ...mapGetters({
      myIp: 'getYourIp',
      recaptchaValue: 'getRecaptchaValue',
      loginData: "getLoginData",
      isLoginCaptcha: "getIsLoginCaptcha",
      smsData: "getSmsData",
      smsUserId: "getSmsUserId",
      isUseSignUpPopup: "getIsUseSignUpPopup",
      blockUserMessage: "getBlockUserMessage",
    })
  },
  watch: {
    recaptchaValue(val) {
      this.verify()
    }
  },
  data() {
    return {
      obj: null
    }
  },
  mounted () {
    if (typeof window.initGeetest4 !== 'function') {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const URL = 'https://static.geetest.com/v4/gt4.js'
      const scriptHeat = document.createElement('script')
      scriptHeat.type = 'text/javascript'
      scriptHeat.src = URL
      document.body.appendChild(scriptHeat)
      scriptHeat.onload = () => {
        this.GeetestInit()
      }
    } else {
      this.GeetestInit()
    }
  },
  methods: {
    GeetestInit () {
      const o = {
        captchaId: process.env.captchaId,
        product: 'bind',
        language: 'kor'
      }
      window.initGeetest4(o, (captchaObj) => {
        this.obj = captchaObj
        // captchaObj.appendTo('#captcha')
        captchaObj.onReady(() => {
          this.$nuxt.$loading.finish();
        }).onSuccess( async () => {
          this.$nuxt.$loading.start()
          const capRes = captchaObj.getValidate()
          if (this.isLoginCaptcha == 1) {
            if (this.loginData == null) {
              this.$nuxt.$loading.finish();
              return
            }

            var resLogin = await userLoginService.find({ query: {
              userId: this.loginData.id,
              password: this.loginData.pass,
              lot_number: capRes.lot_number,
              captcha_output: capRes.captcha_output,
              pass_token: capRes.pass_token,
              gen_time: capRes.gen_time
            }}).catch((err) => { 
              this.showMessage('알림메시지', err.message, '닫기[Close]', 0)
            })
            
            if (resLogin.code == 6) {
              if (this.isUseSignUpPopup) {
                this.$store.commit('SET_SIGNUPPOPUPVISIBLE')
              } else {
                this.showMessage('알림메시지', resLogin.message, '닫기[Close]', 0)
              }
            } else if (resLogin.code == 10) {
              this.$store.commit("SET_LOGINDIALOGVISIBLE");
              this.$store.commit("SET_LOGINSIDEVERIFY", true)
              this.$store.commit("SET_LOGINSIDEUSERID", {userId: this.loginData.id.trim().toLowerCase(), password: this.loginData.pass.trim() })
            } else if (resLogin.code == 1) {
              await authService.create({ 
                userLoginId: this.loginData.id, 
                password: this.loginData.pass, 
                strategy: 'local'
              }).then(async (res) => {
                window.localStorage.setItem('feathers-jwt', res.accessToken)
                this.$store.commit('disableInitializableTTL')
                this.$store.commit('auth/SET_USER', resLogin.data)
                this.$store.commit('auth/SET_ISLOGINED', true)
                this.$router.push("/")
              }).catch((err)=>{
                this.$nuxt.$loading.finish();
                this.$router.push("/")
              })
            } else {
              this.showMessage( "알림메시지", resLogin.message, "닫기[Close]", resLogin.code == 1 ? 1 : 0 );
            }
          } else if (this.isLoginCaptcha == 2) {
            if (this.smsData == null) {
              this.$nuxt.$loading.finish();
              return
            }

            await sendSMSService.find({query: {
              mobileNumber: this.smsData.mobileNumber,
              lot_number: capRes.lot_number,
              captcha_output: capRes.captcha_output,
              pass_token: capRes.pass_token,
              gen_time: capRes.gen_time
            }})
            .then((resSendSMS) => {
              this.sendingSMSVerifyCode = false
              if(resSendSMS.code == 1){
                this.$store.commit('SET_ISSENDSMSVERIFYCODE', true)
              }
              this.showMessage( "알림메시지", resSendSMS.message, "닫기[Close]", resSendSMS.code == 1 ? 1 : 0 );
            })
            .catch((err) => {
              this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
            })
          } else if (this.isLoginCaptcha == 3) {
            if (this.smsUserId == null) {
              this.$nuxt.$loading.finish();
              return
            }
            await sendSMSVerifyService.find({query: {
              userId: this.smsUserId,
              lot_number: capRes.lot_number,
              captcha_output: capRes.captcha_output,
              pass_token: capRes.pass_token,
              gen_time: capRes.gen_time
            }})
            .then((resVerifySMS) => {
              this.sendingSMSVerifyCode = false
              if(resVerifySMS.code == 1) {
                this.$store.commit('SET_ISSENDSMSVERIFYCODE', true)
              }
              
              this.showMessage( "알림메시지", resVerifySMS.message, "닫기[Close]", resVerifySMS.code == 1 ? 1 : 0 );
            })
            .catch((err) => {
              this.showMessage( "알림메시지", err.message, "닫기[Close]",0 );
            })
          }
          this.$nuxt.$loading.finish();
        }).onError(() => {
        })
        jQuery('#captcha').click(() => {
        })
      })
    },
    verify() {
      if (this.obj) {
        this.obj.showBox()
      } else {
        // this.showMessage('알림메시지', "잠시 후 재시도 부탁드립니다.", '닫기[Close]', 2)
        setTimeout(() => {
          this.verify();
        }, 100)
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
    }
  }
}
</script>

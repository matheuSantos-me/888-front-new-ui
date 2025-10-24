<template>
  <client-only>
    <div class="position-absolute position-absolute-zindex-100 top-0 left-0 width-full height-full p-0 m-0">
      <div class="position-absolute position-absolute-zindex-1 bg-black-darker2 alpha-30 width-full height-full p-0 m-0"></div>
      <div class="position-absolute position-absolute-zindex-10 width-full height-full p-0 m-0">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <center>
                  <div class="col-md-3 col-sm-6 p-t-15" 
                    :class="{
                      'm-t-150 width-360': layoutType == 'layout1', 
                      'm-t-50 width-450' : (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && !isMobile, 
                      'm-t-50 width-full': (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && isMobile
                    }">
                    <div v-if="layoutType == 'layout1'" class="widget widget-stats p-0" :class="`bg-preview-${themeType}`">
                      <div class="stats-icon stats-icon-lg">
                        <i class="fa fa-gear fa-fw"></i>
                      </div>
                      <div class="stats-title f-s-16 m-t-25">
                        <strong>로그인 후 이용할 수 있습니다.</strong>
                      </div>
                      <div class="stats-number"></div>
                      <div class="stats-desc p-t-10 bg-white p-b-10">
                        <button
                          type="button"
                          class="tertiary m-0 width-100 text-center m-r-5 m-l-15 f-s-13 f-w-100"
                          :class="`preview-login-button-${themeType}`"
                          @click="onClickLogin"
                        >로그인</button>
                        <button
                          type="button"
                          class="secondary m-0 width-100 text-center p-l-0 p-r-0 f-s-13 f-w-100"
                          :class="`preview-signup-button-${themeType}`"
                          @click="onClickSignup"
                        >회원가입</button>
                      </div>
                    </div>
                    <el-row v-else style="box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.39); border-radius: 6px; padding:20px;" 
                      :style="themeType == 'yellow16' ? 'background: #0e1e31;' : themeType == 'blue19' ? 'background: #0e1628;' : themeType == 'blue11' ? 'background: #1a1a23;' : themeType == 'gold13' ? 'background: #020c17;' : themeType == 'yellow14' ? 'background: #252c48;' : 'background: #1E2024;'">
                      <el-row>
                        <img :src="`/image/Home/${themeType}/preview.png`" class="m-t-36" :width="isMobile || layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'blue18' ? '300px' : themeType == 'yellow15' ? '150px' : '364px'">
                      </el-row>
                      <el-row class="text-white" :class="{'m-t-48': layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'blue18'}">
                        로그인 후 이용할 수 있습니다.
                      </el-row>
                      <el-row class="m-t-36">
                        <button
                          type="button"
                          class="tertiary m-0 width-full text-center f-s-13 f-w-100"
                          :class="`preview-login-button-${themeType}`"
                          @click="onClickLogin"
                        >로그인</button>
                      </el-row>
                      <el-row :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-8' : 'm-t-16'">
                        <button
                          type="button"
                          class="secondary m-0 width-full text-center p-l-0 p-r-0 f-s-13 f-w-100"
                          :class="`preview-signup-button-${themeType}`"
                          @click="onClickSignup"
                        >회원가입</button>
                      </el-row>
                    </el-row>
                  </div>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isNewUser: "getIsNewUser"
    }),
  },
  methods: {
    // 로그인 페이지 가기
    onClickLogin() {
      this.$store.commit("SET_LOGINDIALOGVISIBLE");
      this.$store.commit("SET_LOGINSIDEVERIFY", false)
    },
    // 회원가입 페이지 가지
    onClickSignup() {
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      if (this.isMobile) {
        this.$router.push("/auth/signup")
      } else {
        this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
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
  },
};
</script>
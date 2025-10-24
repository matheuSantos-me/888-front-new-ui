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
                  <div class="col-md-3 col-sm-6 m-t-150 p-t-15" style="width: 360px">
                    <div v-if="layoutType != 'layout2' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="widget widget-stats p-0" :class="`bg-preview-${themeType}`">
                      <div class="stats-icon stats-icon-lg">
                        <i class="fa fa-gear fa-fw"></i>
                      </div>
                      <div class="stats-title f-s-16 m-t-25">
                        <strong>
                          현재 보유 카지노 캐쉬가 없습니다.<br /><br />
                          {{themeType != 'blue16' ? '머니이동' : '입금'}} 페이지로 이동하시겠습니까?
                        </strong>
                      </div>
                      <div class="stats-number"></div>
                      <div class="stats-desc bg-white p-t-10 p-b-10">
                        <button
                          type="button"
                          class="tertiary m-0 width-100 text-center m-r-5 m-l-15 f-s-13 f-w-100"
                          :class="`preview-login-button-${themeType}`"
                          @click="onClickOk"
                        >예</button>
                        <button
                          type="button"
                          class="secondary m-0 width-100 text-center p-l-0 p-r-0 f-s-13 f-w-100"
                          :class="`preview-signup-button-${themeType}`"
                          @click="close"
                        >아니오</button>
                      </div>
                    </div>
                    <div v-else :class="themeType == 'yellow16' ? 'bg-black38' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : 'bg-black29'" style="border-radius: 6px; color: #fff;" :style="layoutType == 'layout2' ? 'padding: 130px 0 32px 0;' : 'padding: 32px;'">
                      <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="m-b-24">
                        <img :src="`/image/Home/${themeType}/preview.png`" class="m-t-36" width="200px">
                      </el-row>
                      <el-row class="f-s-14">
                        현재 보유 카지노 캐쉬가 없습니다.
                        <br />
                        <br />머니이동 페이지로 이동하시겠습니까?
                      </el-row>
                      <el-row style="margin-top: 48px;">
                        <button
                          type="button"
                          class="tertiary m-0 width-100 text-center m-r-5 m-l-15 f-s-13 f-w-100"
                          :class="`casino-preview-login-button-${themeType}`"
                          @click="onClickOk"
                        >예</button>
                        <button
                          type="button"
                          class="secondary m-0 width-100 text-center p-l-0 p-r-0 f-s-13 f-w-100"
                          :class="`casino-preview-signup-button-${themeType}`"
                          @click="close"
                        >아니오</button>
                      </el-row>
                      <img v-if="layoutType == 'layout2'" :src="`/image/Casino/${themeType}/preview.svg`" style="position: absolute; top: -130px; left: calc(50% - 125px); width: 250px;">
                    </div>
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
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: "getLayoutType",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount"
    }),
  },
  methods: {
    // 머니이동페이지 이동
    onClickOk() {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
        return
      }
      this.$store.commit('SET_POKERREDIRECT', false)
      if (this.layoutType == 'layout2') {
        this.$store.commit('SET_ORANGEDIALOGVISIBLE')
        this.$store.commit('SET_ORANGEDIALOGTAB', 2)
      } else {
        if (this.themeType != 'blue16') {
          this.$router.push("/Money/MoneyMove")
        } else {
          this.$router.push("/Money/PayIn")
        }
      }
    },
    // 모달닫기
    close() {
      this.$emit("event");
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
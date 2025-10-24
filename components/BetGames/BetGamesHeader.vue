<template>
<div>
  <table width="100%" height="80" align="center">
    <tbody>
      <tr>
        <td class="t-line1" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(0)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">럭키7</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-pokesadari">LIVE</div>
        </td>
        <td class="t-line5" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(1)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">럭키6</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line3" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(2)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">럭키5</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line6" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(3)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">행운의바퀴</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line7" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(4)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">홀덤포커</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line8" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(5)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">바카라</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line9" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(6)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">1:1벳</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
        <td class="t-line10" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(7)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">주사위결투</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">LIVE</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  props: ["miniGameType"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount"
    })
  },
  methods: {
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    // 미니게임페이지 이동
    goToMiniGame(val, type) {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
        return
      }
      if (type == 0 && this.isMobile) {
        this.$store.commit("SET_SHOWMINITAB", true)
        return
      }
      switch (val) {
        case 0:
          this.$router.push("/BetGames/Lucky7")
          break
        case 1:
          this.$router.push("/BetGames/Lucky6")
          break
        case 2:
          this.$router.push("/BetGames/Lucky5")
          break
        case 3:
          this.$router.push("/BetGames/Wheel")
          break
        case 4:
          this.$router.push("/BetGames/Poker")
          break
        case 5:
          this.$router.push("/BetGames/Baccarat")
          break
        case 6:
          this.$router.push("/BetGames/Bet")
          break
        case 7:
          this.$router.push("/BetGames/DiceDuel")
          break
      }
    }
  }
};
</script>
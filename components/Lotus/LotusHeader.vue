<template>
<div>
  <table width="100%" height="80" align="center">
    <tbody>
      <tr>
        <td class="t-line3" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(0)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">바카라1</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-pokesadari">{{lotusBaccaratTime}}</div>
        </td>
        <td class="t-line1" :class="`mini-live-tmenu-${themeType}`" @click="goToMiniGame(1)">
          <div class="live-tmenu-name" :class="`text-contrast-${themeType}`">홀짝</div>
          <div class="live-tmenu-countdown" :class="`text-contrast-${themeType}`" id="timer-posadari">{{lotusEvenTime}}</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";

const miniTimeService = feathers.service('getMiniTime')
miniTimeService.timeout = 60000

export default {
  middleware: "authenticated",
  props: ["miniGameType"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      miniGameTabType: "getMiniGameType",
      gameSettings: "getGameSettings"
    })
  },
  data() {
    return {
      ntryMins: 0,
      ntrySecs: 0,
      boscore1Mins: 0,
      boscore1Secs: 0,
      boscore2Mins: 0,
      boscore2Secs: 0,
      boscore3Mins: 0,
      boscore3Secs: 0,
      lotusBaccaratSecs: 0,
      lotusEvenSecs: 0,
      lotusBaccaratTime: "00:00",
      lotusEvenTime: "00:00",
      calculateTime: null
    };
  },
  created() {
    miniTimeService.find()
      .then((res) => {
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.ntryMins = res.data.ntryMins;
        this.ntrySecs = res.data.ntrySecs;
        this.boscore1Mins = res.data.boscore1Mins;
        this.boscore1Secs = res.data.boscore1Secs;
        this.boscore2Mins = res.data.boscore2Mins;
        this.boscore2Secs = res.data.boscore2Secs;
        this.boscore3Mins = res.data.boscore3Mins;
        this.boscore3Secs = res.data.boscore3Secs;
        this.lotusBaccaratSecs = res.data.lotusBaccaratSecs;
        this.lotusEvenSecs = res.data.lotusEvenSecs;
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
  mounted() {
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime()
    }, 1000)
  },
  destroyed() {
    clearInterval(this.calculateTime)
  },
  methods: {
    calculateGameRemainTime() {
      this.ntrySecs --;
      if (this.ntrySecs < 0) {
        this.ntrySecs = 59
        this.ntryMins --;
        if (this.ntryMins < 0) this.ntryMins = 4
      }

      if (this.ntrySecs < 10) this.ntryTime = this.ntryMins + ":0" + this.ntrySecs
      else this.ntryTime = this.ntryMins + ":" + this.ntrySecs

      this.boscore1Secs--;
      if (this.boscore1Secs < 0) {
        this.boscore1Secs = 59
      }
      if (this.boscore1Secs < 10) this.boscore1Time = "00:0" + this.boscore1Secs
      else this.boscore1Time = "00:" + this.boscore1Secs

      this.boscore2Secs--;
      if (this.boscore2Secs < 0) {
        this.boscore2Secs = 59
        this.boscore2Mins--;
        if (this.boscore2Mins < 0) this.boscore2Mins = 1
      }
      if (this.boscore2Secs < 10) this.boscore2Time = this.boscore2Mins + ":0" + this.boscore2Secs
      else this.boscore2Time = this.boscore2Mins + ":" + this.boscore2Secs
      
      this.boscore3Secs--;
      if (this.boscore3Secs < 0) {
        this.boscore3Secs = 59
        this.boscore3Mins--;
        if (this.boscore3Mins < 0) this.boscore3Mins = 1
      }
      if (this.boscore3Secs < 10) this.boscore3Time = this.boscore3Mins + ":0" + this.boscore3Secs
      else this.boscore3Time = this.boscore3Mins + ":" + this.boscore3Secs

      this.lotusBaccaratSecs --;
      if (this.lotusBaccaratSecs < 0) {
        this.lotusBaccaratSecs = 49
      }

      if (this.lotusBaccaratSecs < 10) this.lotusBaccaratTime = "00:0" + this.lotusBaccaratSecs
      else this.lotusBaccaratTime = "00:" + this.lotusBaccaratSecs
      
      this.lotusEvenSecs --;
      if (this.lotusEvenSecs < 0) {
        this.lotusEvenSecs = 59
      }

      if (this.lotusEvenSecs < 10) this.lotusEvenTime = "00:0" + this.lotusEvenSecs
      else this.lotusEvenTime = "00:" + this.lotusEvenSecs
    },
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
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
          this.$router.push("/Lotus/Baccarat1")
          break
        case 1:
          this.$router.push("/Lotus/EvenOdd")
          break
      }
    }
  }
};
</script>
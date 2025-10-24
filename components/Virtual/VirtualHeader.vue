<template>
  <!-- 헤더 바톰 -->
  <el-row>
    <el-row v-if="layoutType != 'layout2'">
      <div class="width-20pro float-left" :class="[gameType === '0' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]">
        <div @click="goToVirtual(0)" class="line-bottom1 cursor">
          <div class="live-tmenu-name display-center name" :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
            <img :src="'/image/Virtual/Bet365.png'" width="25" class="m-r-5">
            축구
          </div>
        </div>
      </div>
      <div class="width-20pro float-left" :class="[gameType === '3' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]">
        <div @click="goToVirtual(3)" class="line-bottom8 cursor">
          <div class="live-tmenu-name display-center name" :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
            <img :src="'/image/Virtual/Bet365.png'" width="25" class="m-r-5">
            농구
          </div>
        </div>
      </div>
      <div class="width-20pro float-left" :class="[gameType === '4' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]">
        <div @click="goToVirtual(4)" class="line-bottom9 cursor">
          <div class="live-tmenu-name display-center name" :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
            <img :src="'/image/Virtual/Bet365.png'" width="25" class="m-r-5">
            야구
          </div>
        </div>
      </div>
      <div class="width-20pro float-left" :class="[gameType === '1' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]">
        <div @click="goToVirtual(1)" class="line-bottom6 cursor">
          <div class="live-tmenu-name display-center name" :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
            <img :src="'/image/Virtual/Bet365.png'" width="25" class="m-r-5">
            개경주
          </div>
        </div>
      </div>
      <div class="width-20pro float-left" :class="[gameType === '2' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]">
        <div @click="goToVirtual(2)" class="line-bottom7 cursor">
          <div class="live-tmenu-name display-center name" :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
            <img :src="'/image/Virtual/Bet365.png'" width="25" class="m-r-5">
            경마
          </div>
        </div>
      </div>
    </el-row>
    <el-row v-else :class="{'m-t-48': !isMobile}">
      <div class="cursor" :class="[gameType === '0' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]" @click="goToVirtual(0)">
        <el-row :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
          <div :class="isMobile ? 'width-full text-center' : 'float-left m-r-8'"><img :src="`/image/Virtual/${themeType}/football.png`" class="i-football"></div>
          <div :class="isMobile ? 'width-full text-center m-t-8' : 'float-left'">축구</div>
        </el-row>
      </div>
      <div class="cursor" :class="[gameType === '3' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]" @click="goToVirtual(3)">
        <el-row :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
          <div :class="isMobile ? 'width-full text-center' : 'float-left m-r-8'"><img :src="`/image/Virtual/${themeType}/basketball.png`" class="i-basketball"></div>
          <div :class="isMobile ? 'width-full text-center m-t-8' : 'float-left'">농구</div>
        </el-row>
      </div>
      <div class="cursor" :class="[gameType === '4' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]" @click="goToVirtual(4)">
        <el-row :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
          <div :class="isMobile ? 'width-full text-center' : 'float-left m-r-8'"><img :src="`/image/Virtual/${themeType}/basketball.png`" class="i-basketball"></div>
          <div :class="isMobile ? 'width-full text-center m-t-8' : 'float-left'">야구</div>
        </el-row>
      </div>
      <div class="cursor" :class="[gameType === '1' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]" @click="goToVirtual(1)">
        <el-row :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
          <div :class="isMobile ? 'width-full text-center' : 'float-left m-r-8'"><img :src="`/image/Virtual/${themeType}/dog.png`" class="i-dog"></div>
          <div :class="isMobile ? 'width-full text-center m-t-8' : 'float-left'">개경주</div>
        </el-row>
      </div>
      <div class="cursor" :class="[gameType === '2' ? `virtual-tab-${themeType}` : '', `virtual-tmenu-${themeType}`]" @click="goToVirtual(2)">
        <el-row :class="[isMobile ? 'p-t-5 p-b-5' :  'p-t-16 p-b-16']">
          <div :class="isMobile ? 'width-full text-center' : 'float-left m-r-8'"><img :src="`/image/Virtual/${themeType}/horse.png`" class="i-horse"></div>
          <div :class="isMobile ? 'width-full text-center m-t-8' : 'float-left'">경마</div>
        </el-row>
      </div>
    </el-row>
  </el-row>
  <!-- 헤더 바톰 끝 -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "authenticated",
  props: ["gameType"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      userInfo: 'auth/currentUser',
			themeType: 'getThemeType',
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      layoutType: "getLayoutType"
    })
  },
  middleware: ["auth", "i18n"],
  data() {
    return {
      powerTime: "00:00",
      kenoTime: "00:00",
      betEastTime: "00:00"
    };
  },
  methods: {
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    goToVirtual(val) {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
        return
      }
      switch (val) {
        case 0:
          this.$router.push("/VirtualSports/Football")
          break
        case 1:
          this.$router.push("/VirtualSports/Dog")
          break
        case 2:
          this.$router.push("/VirtualSports/Horse")
          break
        case 3:
          this.$router.push("/VirtualSports/Basketball")
          break
        case 4:
          this.$router.push("/VirtualSports/Baseball")
          break
      }
    }
  }
};
</script>
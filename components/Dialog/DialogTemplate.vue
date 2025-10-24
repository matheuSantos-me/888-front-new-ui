<template>
<client-only>
  <el-dialog :visible.sync="isShowDialog" class="template-dialog" :width="getWidth()" :before-close="handleClose">
    <div class="fade in" id="modal-alert">
      <div v-if="layoutType == 'layout1'" class="modal-content">
        <div class="display-inlineblock width-full modal-header">
          <div class="float-left"><h4 class="modal-title" id="modal-title"><strong>{{title}}</strong></h4></div>
        </div>
        <div class="modal-body" id="modal-body">
          <div v-if="buttonValue !== '배팅카운트'" class="alert alert-success m-b-0 bg-silver">
            <span v-for="(data, index) in content.split('|')" :key="index" class="text-inverse word-keep" :class="isMobile ? 'f-s-13' : 'f-s-17'">
              <strong>{{data}}<br></strong>
            </span>
          </div>
          <div v-else class="alert alert-success m-b-0">
            <div class="p-10 bg-black3 text-white">
              <div id="fractbtn">
                <strong><span class="label label-inverse f-s-16">{{inplayTimeCount}}</span><span class="f-s-16 m-t-15 m-l-5">라이브 스포츠 배팅 접수 중...</span></strong>
              </div>
            </div>
          </div>
        </div>
        <div v-if="buttonValue !== '배팅카운트'" class="width-full text-center modal-footer">
          <a class="btn btn-sm btn-block f-s-16 btn-primary" @click="onClickButton">
            <strong>{{buttonValue}}</strong>
          </a>
        </div>
      </div>
      <div v-else :class="themeType == 'yellow16' ? 'modal-content-yellow16' : 'modal-content-orange12'">
        <el-row style="font-size: 16px; line-height: 30px;" :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #33363D; padding-bottom: 16px;' : ''">
          {{layoutType == 'layout2' ? title : ''}}
          <img v-if="buttonValue !== '배팅카운트'" :src="'/image/multi.svg'" class="float-right m-t-3 cursor i-multi" @click="onClickButton()">
        </el-row>
        <el-row class="text-center">
          <el-row v-if="buttonValue != '배팅카운트'" :style="layoutType == 'layout2' ? 'padding: 48px 0 24px 0;' : 'padding: 24px 0;'">
            <img v-if="type == 0" :src="`/image/Ic_error.png`">
            <img v-if="type == 1" :src="`/image/Ic_success.png`">
            <img v-if="type == 2" :src="`/image/Ic_warning.png`">
          </el-row>
          <el-row v-if="buttonValue != '배팅카운트'">
            <el-row v-for="(data, index) in content.split('|')" :key="index" class="word-keep">
              {{data}}
            </el-row>
          </el-row>
          <el-row v-else class="display-center" style="padding: 48px 0 24px 0;">
            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                  <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="283"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                      M 50, 50
                      m -45, 0
                      a 45,45 0 1,0 90,0
                      a 45,45 0 1,0 -90,0
                    "
                  ></path>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">{{inplayTimeCount}}</span>
            </div>
          </el-row>
          <div v-if="buttonValue !== '배팅카운트'" class="b-r-6 p-t-10 p-b-10 cursor m-t-24" :class="`${themeType}-button`" @click="onClickButton()">
            {{buttonValue}}
          </div>
        </el-row>
      </div>
    </div>
  </el-dialog>
</client-only>
</template>

<script>
import { mapGetters } from "vuex";

const FULL_DASH_ARRAY = 283;

export default {
  name: "login",
  computed: {
    ...mapGetters({
      isVisible: 'dialog/isVisible',
      title: 'dialog/getTitle',
      content: 'dialog/getContent',
      buttonValue: 'dialog/getButtonValue',
      type: 'dialog/getType',
      isMobile: 'getIsMobile',
			themeType: 'getThemeType',
      layoutType: 'getLayoutType',
    })
  },
  watch: {
    isVisible(val) {
      this.isShowDialog = true
    },
    buttonValue(val) {
      if (val == '배팅카운트') {
        this.inplayTimeCount = this.content
        this.TIME_LIMIT = this.content
        this.calculateTime = setInterval(() => {
          this.getCurrentTime()
        }, 1000)
      }
    }
  },
  data() {
    return {
      inplayTimeCount: 0,
      calculateTime: null,
      isShowDialog: false,
      isLogoutMessage: false,
      timePassed: 0,
      TIME_LIMIT: 0
    }
  },
  methods: {
    onClickButton() {
      this.isShowDialog = false
    },
    getWidth() {
      if (this.isMobile) {
        return '90%'
      }
      return this.layoutType == 'layout2' || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6' ? '380px' : '600px'
    },
    calculateTimeFraction() {
      const rawTimeFraction = this.inplayTimeCount / this.TIME_LIMIT;
      return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    },
    setCircleDasharray() {
      const circleDasharray = `${(this.calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
      document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
    },
    getCurrentTime() {
      if (this.layoutType == 'layout2' || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
        // document.getElementById("base-timer-path-remaining").classList.add(this.themeType);
        this.timePassed = this.timePassed += 1;
        this.setCircleDasharray();
      }

      this.inplayTimeCount--
      if (this.inplayTimeCount < 0) this.inplayTimeCount = 0
      if (this.inplayTimeCount == 0) {
        clearInterval(this.calculateTime)
      }
    },
    handleClose() {
    }
  }
}
    
</script>
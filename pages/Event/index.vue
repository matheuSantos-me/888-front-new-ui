<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="layoutType == 'layout3' || (layoutType == 'layout5' && themeType != 'blue11') || layoutType == 'layout6' ? 'bg-grey923' : `panel-page-${themeType}`">
    <PageHeader v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :type="'event'" :isShowMobile="false" />
    <div class="panel-body height-100-pro" :class="[{'p-l-14 p-r-14': !isMobile && (layoutType == 'layout1' || themeType == 'yellow15')}, getPageBackColor(themeType, 1)]" style="position:relative;">
      <el-row v-if="currentUser">
        <el-row v-if="themeType == 'gold12' || themeType == 'yellow15' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange12' || themeType == 'blue12'">
          <img :src="(themeType == 'orange12' || themeType == 'blue12') && isMobile ? `/image/Event/${themeType}/bannerm.png` : `/image/Event/${themeType}/banner.png`" width="100%" id="bannerimg">
        </el-row>
        <el-row v-if="(themeType == 'yellow21' && isMobile) || themeType == 'gold12' || themeType == 'yellow15' || themeType == 'red15'" class="m-t-20 m-b-20">
            <div v-if="themeType == 'yellow21'" class="m-r-20" :class="[`event-tab-${themeType}`, {'on': eventType == 0}]" @click="onSelectEventType(0)">
              신규 이벤트
            </div>
            <div class="m-r-20" :class="[`event-tab-${themeType}`, {'on': eventType == 6}]" @click="onSelectEventType(6)">
              진행중 이벤트
            </div>
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 7}]" @click="onSelectEventType(7)">
              종료 이벤트
            </div>
        </el-row>
        <el-row v-if="layoutType == 'layout1' || themeType == 'yellow15' || ((layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'blue18') && isMobile)">
          <!-- 이벤트 리스트 -->
          <el-row v-if="themeType == 'blue13' || themeType == 'yellow11'">
            <img :src="`/image/Event/${themeType}/bannerm.png`" width="100%">
          </el-row>
          <NoticeBoard v-if="noticeBoardIsUse" class="m-t-8" />
          <el-row class="col-md-12 p-0 p-t-16" :class="{'p-l-16 p-r-16': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'blue18'}">
            <el-col :span="isMobile ? 24 : 12" :class="{'p-r-10': !isMobile}">
              <el-scrollbar id="sportsLeftScrollBarId" ref="sportsLeftScrollBar">
                <el-row v-if="themeType == 'blue18'" class="m-b-30 p-l-10 p-r-10 display-flex">
                  <div :class="`event-tab-${themeType}`" @click="onSelectEventType(0)">
                    신규 이벤트
                  </div>
                  <div :class="layoutType == 'layout6' ? `event-tab1-${themeType}` : `event-tab-${themeType}`" @click="onSelectEventType(1)">
                    통합 이벤트
                  </div>
                  <div :class="layoutType == 'layout6' ? `event-tab2-${themeType}` : `event-tab-${themeType}`" @click="onSelectEventType(2)">
                    특별 이벤트
                  </div>
                  <div :class="layoutType == 'layout6' ? `event-tab2-${themeType}` : `event-tab-${themeType}`" @click="onSelectEventType(5)">
                    시즌 이벤트
                  </div>
                </el-row>
                <el-row v-if="themeType == 'yellow18'">
                  <el-row>
                    <div style="width: calc(33.3% - 10px);" :class="[`event-tab-${themeType}`, {'on': eventType == 0}]" @click="onSelectEventType(0)">
                      신규 이벤트
                    </div>
                    <div style="width: calc(33.3% - 10px);" :class="[`event-tab-${themeType}`, {'on': eventType == 1}]" @click="onSelectEventType(1)">
                      통합 이벤트
                    </div>
                    <div style="width: calc(33.3% - 10px);" :class="[`event-tab-${themeType}`, {'on': eventType == 2}]" @click="onSelectEventType(2)">
                      특별 이벤트
                    </div>
                  </el-row>
                  <el-row class="p-t-10 p-b-10">
                    <div style="width: calc(50% - 10px);" :class="[`event-tab-${themeType}`, {'on': eventType == 3}]" @click="onSelectEventType(3)">
                      미니게임 이벤트
                    </div>
                    <div style="width: calc(50% - 10px);" :class="[`event-tab-${themeType}`, {'on': eventType == 4}]" @click="onSelectEventType(4)">
                      카지노 이벤트
                    </div>
                  </el-row>
                </el-row>
                <div v-for="(event, index) in eventList" v-if="event.eventType == eventType" :key="index" class="width-full m-b-20 cursor" :class="{'bg-black32 b-r-6 p-20': themeType == 'yellow14'}" @click="onSelectEvent(index)">
                  <el-row :class="{'p-t-29': !isMobile, 'p-t-25': isMobile && (layoutType == 'layout1' || themeType == 'yellow15')}" style="border-radius: 10px;" data-toggle="collapse" :data-target="'#event' + index" aria-expanded="false" :aria-controls="'event' + index">
                    <div v-if="themeType == 'yellow14'" :class="`event-no-${themeType}`">EVENT {{index + 1}}</div>
                    <img v-if="themeType != 'yellow14'" :src="event.imageUrl | filterEmblem" width="100%"
                      :class="[`event-image-${themeType}`, {'on': index === selectedEventIndex}]"  
                      style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 10px;">
                    <div v-if="layoutType == 'layout1' || themeType == 'yellow15'" :class="`event-no-${themeType}`">EVENT {{index + 1}}</div>
                    <div v-if="themeType == 'yellow14'" class="m-t-10 text-white">
                      {{eventList[index].title}}
                    </div>
                  </el-row>
                  <el-row v-if="isMobile && selectedEventIndex > -1" class="collapse"  :id="'event' + index">
                    <div class="p-t-29 " style="border-radius: 5px;" :style="themeType == 'white' ? 'background-color: #fff; border: 2px solid #000; padding: 45px 30px;' : 
                        layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'padding: 24px;' : 'background-color: #25292c; padding: 45px 30px;'">
                      <div class="f-s-24 f-w-700 m-b-20" :class="getTextColor(themeType, 1)">{{eventList[index].title}}</div>
                      <el-row v-if="eventList[index].contentUrl != ''">
                        <img :src="eventList[index].contentUrl | filterEmblem" width="100%" />
                      </el-row>
                      <div v-html="eventList[index].content"></div>
                    </div>
                  </el-row>
                </div>
              </el-scrollbar>
            </el-col>
            <el-col :span="12" class="p-l-10">
              <el-scrollbar id="sportsRightScrollBarId" ref="sportsRightScrollBar" class="m-b-14">
                <el-row v-if="!isMobile && eventList.length > 0">
                  <el-row v-if="selectedEventIndex > -1" class="p-t-29">
                    <div :class="`event-content-${themeType}`">
                      <el-row v-if="layoutType == 'layout2'" class="f-s-16 f-w-900 m-b-8" :class="getTextColor(themeType, 1)">EVENT {{selectedEventIndex + 1}}</el-row>
                      <div class="f-s-24 f-w-700 m-b-20" :class="[getTextColor(themeType, 1), {'text-white': layoutType == 'layout2'}]">{{eventList[selectedEventIndex].title}}</div>
                      <el-row v-if="eventList[selectedEventIndex].contentUrl != ''">
                        <img :src="eventList[selectedEventIndex].contentUrl | filterEmblem" width="100%" />
                      </el-row>
                      <div v-html="eventList[selectedEventIndex].content"></div>
                    </div>
                    <div v-if="layoutType != 'layout2'" :class="`event-no-${themeType}`">EVENT {{selectedEventIndex + 1}}</div>
                  </el-row>
                  <el-row class="text-center" style="margin-top: 100px; margin-bottom: 100px;">
                    <img :src="`/image/Event/${themeType}/logo.png`" width="50%">
                  </el-row>
                </el-row>
              </el-scrollbar>
            </el-col>
          </el-row>
          <!-- 이벤트 리스트 끝 -->
          <!-- 이벤트 리스트 존재하지 않는 경우 -->
          <el-row v-if="!eventList || eventList.length === 0" class="width-full display-center">
            <el-row class="p-t-24 p-b-48">
              <el-row v-if="layoutType == 'layout2'" class="text-center">
                <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24">
              </el-row>
              이벤트가 존재하지 않습니다.
            </el-row>
          </el-row>
          <!-- 이벤트 리스트 존재하지 않는 경우 -->
        </el-row>
        <el-row v-if="layoutType == 'layout2' && !isMobile" class="m-t-48">
          <NoticeBoard v-if="noticeBoardIsUse" class="m-t-8" />
          <div :class="`event-${themeType}`" v-for="(event, index) in eventList" v-if="event.eventType == eventType" :key="index" @click="onSelectEvent(index)">
            <el-row class="overflow-hidden">
              <img :class="`event-${themeType}` + '-img'" :src="event.imageUrl | filterEmblem" width="100%">
            </el-row>
            <el-row class="m-t-24 f-s-16 f-w-900" :class="`text-${themeType}`">
              Event {{index + 1}}
            </el-row>
            <el-row class="m-t-8 f-s-24 word-keep overflow-hidden" style="height: 70px;">
              {{event.title}}
            </el-row>
          </div>
        </el-row>
        <el-row v-if="(layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'blue18') && !isMobile">
          <el-row v-if="themeType != 'yellow18' && themeType != 'gold13'">
            <img :src="`/image/Event/${themeType}/banner.png`" width="100%">
          </el-row>
          <NoticeBoard v-if="noticeBoardIsUse" class="m-t-8" />
          <el-row v-if="themeType == 'blue18'" class="m-t-16 m-b-16 p-l-24 p-r-24" style="display: flex; -webkit-justify-content: space-between; justify-content: space-between;">
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 0}]" @click="onSelectEventType(0)">
              신규 이벤트
            </div>
            <div :class="[`event-tab1-${themeType}`, {'on': eventType == 1}]" @click="onSelectEventType(1)">
              통합 이벤트
            </div>
            <div :class="[`event-tab2-${themeType}`, {'on': eventType == 2}]" @click="onSelectEventType(2)">
              특별 이벤트
            </div>
            <div :class="[`event-tab2-${themeType}`, {'on': eventType == 5}]" @click="onSelectEventType(5)">
              시즌 이벤트
            </div>
          </el-row>
          <el-row v-if="themeType == 'yellow18'">
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 0}]" @click="onSelectEventType(0)">
              신규 이벤트
            </div>
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 1}]" @click="onSelectEventType(1)">
              통합 이벤트
            </div>
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 2}]" @click="onSelectEventType(2)">
              특별 이벤트
            </div>
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 3}]" @click="onSelectEventType(3)">
              미니게임 이벤트
            </div>
            <div :class="[`event-tab-${themeType}`, {'on': eventType == 4}]" @click="onSelectEventType(4)">
              카지노 이벤트
            </div>
          </el-row>
          <el-row v-if="themeType == 'yellow21' || themeType == 'gold12' || themeType == 'red15'" class="m-t-20 m-b-20">
              <div class="m-r-20" :class="[`event-tab-${themeType}`, {'on': eventType == 6}]" @click="onSelectEventType(6)">
                진행중 이벤트
              </div>
              <div :class="[`event-tab-${themeType}`, {'on': eventType == 7}]" @click="onSelectEventType(7)">
                종료 이벤트
              </div>
          </el-row>
          <el-row class="p-l-12 p-r-12 p-t-16 p-b-16" :class="{'max-w-1280': layoutType == 'layout5'}">
            <div :class="`event-${themeType}`" v-for="(event, index) in eventList" v-if="event.eventType == eventType" :key="index" @click="onSelectEvent(index)">
              <el-row>
                <!-- <el-row v-if="themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11' && themeType != 'yellow14'" class="overflow-hidden"> -->
                <el-row v-if="themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11'" class="overflow-hidden">
                  <img :class="`event-${themeType}` + '-img'" :src="event.imageUrl | filterEmblem" width="100%">
                </el-row>
                <el-row v-if="themeType != 'yellow18'" class="m-t-24 f-s-16 f-w-900" :class="`text-${themeType}`">
                  Event {{index + 1}}
                </el-row>
                <el-row v-if="themeType != 'yellow18'" class="m-t-8 f-s-24 word-keep overflow-hidden" style="height: 70px;">
                  {{event.title}}
                </el-row>
                <el-row v-if="themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11'" class="overflow-hidden">
                  <img :class="`event-${themeType}` + '-img'" :src="event.imageUrl | filterEmblem" width="100%">
                </el-row>
                <el-row class="event-over-yellow18">
                  <el-row class="display-center height-full">
                    클릭 시 상세내용 확인이 가능합니다.
                  </el-row>
                </el-row>
              </el-row>
            </div>
          </el-row>
        </el-row>
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser && themeType != 'orange11' && themeType != 'green'"/>
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import { linkImage } from '~/assets/js/data/datamanagement.js'
import Preview from '~/components/Auth/Preview.vue'
import { getTextColor, getPageBackColor } from '~/assets/js/data/uicommon.js'
import PageHeader from '~/components/Header/PageHeader'
import NoticeBoard from '~/components/Notice/NoticeBoard'

const eventService = feathers.service('/client-eventList');
eventService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    NoticeBoard,
    PageHeader,
    Preview       // 로그인유도 콤포넌트
  },
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isUseEventSignup: "getIsUseEventSignup",
      noticeBoardIsUse: "getNoticeBoardIsUse"
    })
  },
  data() {
    return {
      eventType: 0,             // 신규, 통합(마추자에서 통합이용)
      eventList: [],            // 이벤트 리스트
      selectedEventIndex: -1    // 선택된 이벤트 인덱스
    };
  },
  created() {
    if (this.currentUser) {
      if (this.isUseEventSignup) {
        let signupDate = new Date(this.currentUser.createdAt)
        let now = new Date()
        if (now.getTime() - signupDate.getTime() < 7 * 24 * 3600000) {
          this.eventType = 0
        } else {
          this.eventType = 1
        }
      }
    }
    if (this.themeType == 'blue18') {
      this.selectedEventIndex = 0
    }
    if (this.themeType == 'gold12' || this.themeType == 'yellow15' || this.themeType == 'red15') this.eventType = 6

    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.getList();
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Event')
    window.addEventListener('resize', this.myResizeFunc);
    if (this.currentUser) this.myResizeFunc()
  },
  destroyed() {
    window.removeEventListener('resize', this.myResizeFunc)
  },
  methods: {
    getTextColor,
    getPageBackColor,
    // 이벤트 리스트 얻기
    getList() {
      if (!this.currentUser) return 
      this.$nuxt.$loading.start()
      this.eventList = []
      eventService.find({ query: { type: this.themeType == 'green' ? 1 : 0}}).then((res) => {
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.eventList = res.data
        }
        this.$nuxt.$loading.finish()
      }).catch((err) => { 
        console.log(err.message);
        this.$nuxt.$loading.finish();
      })
    },
    // 이벤트 선택
    onSelectEvent(index) {
      if ((this.layoutType == 'layout2' || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.themeType == 'blue18') && !this.isMobile) {
        this.$store.commit('SET_EVENT', this.eventList[index])
        this.$store.commit('SET_EVENTDIALOGVISIBLE')
        return
      }
      this.selectedEventIndex = index
    },
    // 윈도우 리사이즈 이벤트
    myResizeFunc() {
      if (this.layoutType == 'layout2' || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.themeType == 'blue18') return
      if (this.themeType == 'yellow15' || this.themeType == 'blue12') {
        if (!this.isMobile) {
          if (this.themeType == 'yellow15') {
            document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight - 186 - document.getElementById("bannerimg").offsetHeight + "px";
            document.getElementById("sportsRightScrollBarId").style.height = window.innerHeight - 186 - document.getElementById("bannerimg").offsetHeight + "px";
          } else {
            document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight - 191 - document.getElementById("bannerimg").offsetHeight + "px";
            document.getElementById("sportsRightScrollBarId").style.height = window.innerHeight - 168 - document.getElementById("bannerimg").offsetHeight + "px";
          }
        } else {
          document.getElementById("sportsLeftScrollBarId").style.height = "auto";
        }
      } else {
        if (!this.isMobile) {
          document.getElementById("sportsLeftScrollBarId").style.height = window.innerHeight - 191 + "px";
          document.getElementById("sportsRightScrollBarId").style.height = window.innerHeight - 168 + "px";
        } else {
          document.getElementById("sportsLeftScrollBarId").style.height = "auto";
        }
      }
    },
    // 이벤트타입 선택
    onSelectEventType(type) {
      this.eventType = type
    }
  }
}
</script>
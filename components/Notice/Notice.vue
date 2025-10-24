<template>
  <div>
    <el-row :class="{ 'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile }">
      <el-row
        v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'"
        :class="{
          'm-t-5 m-b-5': isMobile && layoutType != 'layout2',
          'm-t-14 m-b-14': !isMobile && layoutType != 'layout2',
          'm-b-19': !isMobile && layoutType == 'layout2',
          'm-b-16': isMobile && layoutType == 'layout2'
        }"
      >
        <div class="float-left display-center" :class="{ 'width-50pro': isMobile, 'm-r-5': !isMobile }">
          <div :class="[{ on: category == 0, 'm-0': isMobile }, `gametype-button-${themeType}`]" style="width: 98%" @click="onClickCategory(0)">
            공지사항
          </div>
        </div>
        <div v-if="themeType != 'green'" class="float-left display-center" :class="{ 'width-50pro': isMobile, 'm-r-5': !isMobile }">
          <div :class="[{ on: category == 1, 'm-0': isMobile }, `gametype-button-${themeType}`]" style="width: 98%" @click="onClickCategory(1)">
            배팅규정
          </div>
        </div>
        <div v-if="noticeSettings.isUseExtendCategory" class="float-left display-center" :class="{ 'width-50pro m-t-4': isMobile, 'm-r-5': !isMobile }">
          <div :class="[{ on: category == 2, 'm-0': isMobile }, `gametype-button-${themeType}`]" style="width: 98%" @click="onClickCategory(2)">
            이용안내
          </div>
        </div>
        <div v-if="noticeSettings.isUseExtendCategory" class="float-left display-center" :class="{ 'width-50pro m-t-4': isMobile }">
          <div :class="[{ on: category == 3, 'm-0': isMobile }, `gametype-button-${themeType}`]" style="width: 98%" @click="onClickCategory(3)">
            {{themeType == 'gold12' ? '자주하는 질문' : 'FAQ'}}
          </div>
        </div>
      </el-row>
      <el-row v-else :class="isMobile ? 'm-t-5 m-b-5' : 'm-t-14 m-b-14'">
        <div class="float-left display-center" :class="themeType == 'yellow15' ? 'width-25pro' : 'width-33pro'">
          <div :class="[`notice-tab-${themeType}`, { on: category == -1 }]" style="width: 98%" @click="onClickCategory(-1)">
            종합
          </div>
        </div>
        <div class="float-left display-center" :class="themeType == 'yellow15' ? 'width-25pro' : 'width-33pro'">
          <div :class="[`notice-tab-${themeType}`, { on: category == 0 }]" style="width: 98%" @click="onClickCategory(0)">
            공지
          </div>
        </div>
        <div class="float-left display-center" :class="themeType == 'yellow15' ? 'width-25pro' : 'width-33pro'">
          <div :class="[`notice-tab-${themeType}`, { on: category == 1 }]" style="width: 98%" @click="onClickCategory(1)">
            규정
          </div>
        </div>
        <div v-if="themeType == 'yellow15'" class="float-left display-center" :class="themeType == 'yellow15' ? 'width-25pro' : 'width-33pro'">
          <div :class="[`notice-tab-${themeType}`, { on: category == 3 }]" style="width: 98%" @click="onClickCategory(3)">
            자주하는 질문
          </div>
        </div>
      </el-row>
      <el-row class="m-b-20">
        <div :class="`table-history-${themeType}`">
          <div class="table-header">
            <div v-if="!isMobile" class="text-center width-100">Number</div>
            <div
              class="text-center"
              :class="isMobile ? 'width-80' : 'width-130'"
            >
              타입
            </div>
            <div class="text-center table-history-flex-field">
              {{ noticeSettings.noticeTitle }}내용
            </div>
          </div>
          <el-row v-for="(notice, index) in filterNotices" :key="index" v-if="category == -1 || category == notice.noticeType">
            <el-row class="table-history-tr" :class="{ on: (layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && showId.findIndex((x) => x == notice._id) > -1) || ((layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1) }">
              <div v-if="!isMobile" class="text-center width-100 table-history-td-first">
                {{ index + 1 }}
              </div>
              <div class="display-center table-history-td" :class="isMobile ? 'width-80' : 'width-130'">
                {{ notice.noticeType | filterNoticeType }}
              </div>
              <div class="cursor text-left table-history-flex-field table-history-td" data-toggle="collapse" :data-target="'#notice' + index" :aria-controls="notice._id" @click="onShowContent(notice._id)">
                {{ notice.title }}
              </div>
            </el-row>
            <el-row>
              <div class="p-0 m-0" :class="themeType == 'gold12' ? 'text-center' : 'text-left'">
                <el-row class="collapse table-history-content" :id="'notice' + index">
                  <div class="p-20 width-full">
                    <p v-if="notice.imageUrl && notice.imageUrl != ''">
                      <img :src="notice.imageUrl | filterEmblem" :class="{ 'width-full': isMobile }" />
                    </p>
                    <p v-html="notice.content"></p>
                  </div>
                </el-row>
              </div>
            </el-row>
          </el-row>
        </div>
      </el-row>
      <el-row v-if="!isLoading && (!notices || notices.length == 0)" class="width-full display-center">
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          {{ noticeSettings.noticeTitle }}이 존재하지 않습니다.
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { linkImage } from "~/assets/js/data/datamanagement.js";

const noticeService = feathers.service("/client-noticeList");
noticeService.timeout = 60000;

export default {
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    },
    filterNoticeType(type) {
      let typeName;
      switch (type) {
        case 0:
          typeName = "공지사항";
          break;
        case 1:
          typeName = "배팅규정";
          break;
        case 2:
          typeName = "이용안내";
          break;
        case 3:
           typeName = "FAQ"
          break;
      }
      return typeName;
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      noticeSettings: "getNoticeSettings",
    }),
  },
  data() {
    return {
      category: -1,
      notices: [],
      selectedEventIndex: 0,
      isLoading: true,
      showId: [],
      filterNotices: []
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);

    // 초보자가이드를 이용안내로 설정
    if (
      this.$route.query.type != undefined &&
      this.$route.query.type == "guide"
    ) {
      this.category = 2;
    }

    if (this.themeType == "green") {
      this.category = 0;
    }
    this.getList();
  },
  methods: {
    getNoticesFromCategory() {
      if (this.category == -1) {
        this.filterNotices = this.notices
      } else {
        this.filterNotices = this.notices.filter(x => x.noticeType == this.category)
      }
    },
    onShowContent(id) {
      let index = this.showId.findIndex((x) => x == id);
      if (index > -1) {
        this.showId.splice(index);
      } else {
        this.showId.push(id);
      }
    },
    // 공지사항 리스트
    async getList() {
      if (!this.currentUser) return;
      this.$nuxt.$loading.start();
      this.isLoading = true;
      this.notices = [];
      await noticeService
        .find({ query: { type: this.themeType == "green" ? 1 : 0 } })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.notices = res.data;
            this.getNoticesFromCategory()
          }
          this.isLoading = false;
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.isLoading = false;
          this.$nuxt.$loading.finish();
        });
    },
    // 카테고리선택
    onClickCategory(val) {
      this.selectedEventIndex = 0;
      this.category = val;
      this.getNoticesFromCategory()
    },
    // 공지사항세부
    onSelectEvent(index) {
      this.selectedEventIndex = index;
    },
  },
};
</script>
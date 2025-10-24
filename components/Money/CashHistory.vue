<template>
  <div>
    <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
      <el-row class="col-md-12 p-0" :class="{ 'm-t-14': !isMobile && layoutType != 'layout2' }">
        <OwlCarousel v-if="layoutType == 'layout2'" :autoWidth="true" :nav="false" :dots="false" :margin="5">
          <div class="float-left display-center">
            <div :class="[category == -1 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(-1)">
              전체
            </div>
          </div>
          <div class="float-left display-center">
            <div :class="[category == 0 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(0)">
              스포츠캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino" class="float-left display-center">
            <div :class="[category == 1 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(1)">
              카지노캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino" class="float-left display-center">
            <div :class="[category == 7 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(7)">
              포커노캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino && themeType != 'blue16'" class="float-left display-center">
            <div :class="[category == 2 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(2)">
              머니이동
            </div>
          </div>
          <div class="float-left display-center">
            <div :class="[category == 3 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(3)">
              지인추천
            </div>
          </div>
          <div class="float-left display-center">
            <div :class="[category == 4 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(4)">
              출석보상
            </div>
          </div>
          <div class="float-left display-center">
            <div :class="[category == 5 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(5)">
              명예의 전당
            </div>
          </div>
          <div class="float-left display-center">
            <div :class="[category == 6 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(6)">
              포인트
            </div>
          </div>
        </OwlCarousel>
        <el-row v-else>
          <div class="float-left display-center" :class="{'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile}">
            <div style="width: 98%" :class="[category == -1 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(-1)">
              전체
            </div>
          </div>
          <div class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 0 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(0)">
              스포츠캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino" class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 1 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(1)">
              카지노캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino" class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 7 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(7)">
              포커캐쉬
            </div>
          </div>
          <div v-if="isAvailCasino && themeType != 'blue16'" class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 2 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(2)">
              머니이동
            </div>
          </div>
          <div class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 3 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(3)">
              지인추천
            </div>
          </div>
          <div class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 4 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(4)">
              출석보상
            </div>
          </div>
          <div class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 5 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(5)">
              명예의 전당
            </div>
          </div>
          <div class="float-left display-center" :class="{ 'width-50pro m-t-5': isMobile, 'm-r-5': !isMobile }">
            <div style="width: 98%" :class="[category == 6 ? 'on' : '', isMobile ? 'm-0' : '', `gametype-button-${themeType}`]" @click="onClickCategory(6)">
              포인트
            </div>
          </div>
        </el-row>
      </el-row>
      <el-row class="col-md-12 p-0 p-t-16">
        <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)" :class="`table-board-${themeType}`">
          <div class="table-header">
            <div class="text-center" :class="isMobile ? 'width-80' : 'width-210'">
              {{ isMobile ? "시간" : "발생시간" }}
            </div>
            <div class="text-center" :class="isMobile ? 'width-100' : 'width-130'">
              타입
            </div>
            <div class="text-center table-board-flex-field">내용</div>
            <div class="text-center" :class="isMobile ? 'width-100' : 'width-160'">
              금액
            </div>
            <div v-if="!isMobile" class="text-center width-210">보유캐쉬합</div>
          </div>
          <el-row v-for="(cash, index) in cashLogs" :key="index">
            <el-row class="table-board-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-board-td-first" :class="isMobile ? 'width-80' : 'width-210'" >
                {{ isMobile ? parseTime(cash.createdAt, "{m}-{d} {h}:{i}:{s}") : parseTime(cash.createdAt) }}
              </div>
              <div class="display-center table-board-td" :class="isMobile ? 'width-100' : 'width-130'" >
                {{ cash.moneyType | filterMoneyType }}
              </div>
              <div class="text-left f-w-700 table-board-td table-board-flex-field" :class="getColor(cash.amount)" >
                {{ cash.comment }}
              </div>
              <div class="display-center table-board-td f-w-700" :class="[isMobile ? 'width-100' : 'width-160', getColor(cash.amount)]">
                {{ currencyFormat(cash.amount, "원") }}
              </div>
              <div v-if="!isMobile" class="display-center table-board-td width-210">
                {{cash.holdingMoney != -1 ? currencyFormat(cash.holdingMoney, "원") : ""}}
              </div>
            </el-row>
          </el-row>
        </div>
        <el-row v-else v-for="(cash, index) in cashLogs" :key="index" style="background: #1f2124; border-radius: 6px; padding: 16px; margin-bottom: 16px;">
          <el-row class="m-b-16">
            <el-col :span="12">시간</el-col>
            <el-col :span="12" class="text-right">{{parseTime(cash.createdAt, "{m}-{d} {h}:{i}:{s}")}}</el-col>
          </el-row>
          <el-row class="m-b-16">
            <el-col :span="12">타입</el-col>
            <el-col :span="12" class="text-right">{{cash.moneyType | filterMoneyType}}</el-col>
          </el-row>
          <el-row class="m-b-16">
            <el-col :span="12">금액</el-col>
            <el-col :span="12" class="text-right" :class="getColor(cash.amount)">{{ currencyFormat(cash.amount, "원") }}</el-col>
          </el-row>
          <el-row class="m-b-16">
            <el-col :span="12">보유캐쉬합</el-col>
            <el-col :span="12" class="text-right">{{cash.holdingMoney != -1 ? currencyFormat(cash.holdingMoney, "원") : ""}}</el-col>
          </el-row>
          <el-row class="m-b-16">
            <el-col :span="12">내용</el-col>
          </el-row>
          <el-row class="text-left work-keep" :class="getColor(cash.amount)">{{ cash.comment }}</el-row>
        </el-row>
      </el-row>
      <el-row v-if="!cashLogs || cashLogs.length == 0" class="width-full display-center">
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          해당 게임에 배팅내역이 존재하지 않습니다.
        </el-row>
      </el-row>
      <el-row v-if="cashLogs && cashLogs.length > 0" class="display-inlineblock width-full m-t-24">
        <el-col :span="24">
          <div class="block">
            <el-pagination
              :class="`bet-history-paging-${themeType}`"
              align="center"
              :page-sizes="[5, 10, 20, 30, 50]"
              :page-size="listQuery.limit"
              :current-page.sync="listQuery.page"
              :pager-count="isMobile ? 5 : 9"
              background
              layout="prev, pager, next"
              :total="total"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, parseTime } from "~/assets/js/utils";
import OwlCarousel from "vue-owl-carousel";

const cashLogService = feathers.service("client-cashLog");
cashLogService.timeout = 60000;

export default {
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isAvailCasino: "getIsAvailCasino"
    }),
  },
  components: {
    OwlCarousel,
  },
  filters: {
    filterMoneyType(moneyType) {
      let result = "";
      switch (moneyType) {
        case 30: // 머니이동 스포츠출금
        case 31: // 머니이동 카지노입금
        case 32: // 머니이동 스포츠입금
        case 33: // 머니이동 카지노출금
          result = "머니이동";
          break;
        case 34: // 스포츠 수동캐쉬지급
        case 35: // 카지노 수동캐쉬지급
        case 36: // 포커 수동캐쉬지급
          result = "관리자지급";
          break;
        case 50: // 스포츠 보너스 없음
        case 52: // 스포츠첫충
        case 54: // 스포츠매충
        case 56: // 스포츠 입플
        case 80: // 스포츠출금,
        case 82: // 스포츠환수,
        case 100: // 스포츠배팅,
        case 101: // 스포츠당첨,
        case 102: // 스포츠낙첨,
        case 103: // 스포츠적특,
        case 104: // 스포츠배팅취소,
        case 105: // 실시간배팅,
        case 106: // 실시간당첨,
        case 107: // 실시간낙첨,
        case 108: // 실시간적특,
        case 109: // 실시간배팅취소,
        case 110: // 미니배팅,
        case 111: // 미니당첨,
        case 112: // 미니낙첨,
        case 113: // 미니적특,
        case 114: // 미니배팅취소,      
        case 115: // 가상스포츠배팅,
        case 116: // 가상스포츠당첨,
        case 117: // 가상스포츠낙첨,
        case 118: // 가상스포츠적특,
        case 119: // 가상스포츠배팅취소,
        case 125: // 파싱카지노배팅,
        case 126: // 파싱카지노당첨,
        case 127: // 파싱카지노낙첨,
        case 128: // 파싱카지노적특,
        case 129: // 파싱카지노배팅취소,
          result = "스포츠캐쉬";
          break;
        case 51: // 카지노 보너스 없음
        case 53: // 카지노첫충
        case 55: // 카지노매충
        case 57: // 카지노 입플
        case 81: // 카지노출금,
        case 83: // 카지노환수
        case 120: // 카지노배팅,
        case 121: // 카지노당첨,
        case 122: // 카지노낙첨,
        case 123: // 카지노적특,
        case 124: // 카지노배팅취소,
          result = "카지노캐쉬";
          break;
        case 58: // 어드민수동보너스, 
          result = "관리자보너스";
          break;
        case 59: // 출석현황보너스1(6일출석2일재입금), 
        case 60: // 출석현황보너스2(7일출석2일재입금), 
        case 72: // 월출석보너스,
          result = "출석보상";
          break;
        case 61: // 명예의 전당, 
          result = "명예의 전당";
          break;
        case 62: // 지인추천1-1, 
        case 63: // 지인추천1-2, 
        case 64: // 지인추천2, 
          result = "지인추천";
          break;
        case 65: // 가입머니, 
          result = "가입머니";
          break;
        case 66: // 레벨업, 
          result = "레벨업";
          break;
        case 67: // 페이백, 
          result = "페이백";
          break;
        case 68: // 롤링, 
          result = "롤링포인트";
          break;
        case 69: // 낙첨, 
          result = "낙첨포인트";
          break;
        case 70: // 위로금,
          result = "위로금";
          break;
        case 71: // 롤링쉐어,
          result = "파트너롤링 쉐어";
          break;
        case 73: // 쿠폰,
          result = "쿠폰";
          break;
        case 74: // 쿠폰,
          result = "신규보너스";
          break;
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 150:
        case 151:
        case 152:
        case 153:
        case 154:
        case 155:
        case 156:
        case 157:
        case 158:
        case 159:
          result = "포커캐쉬"
          break;
      }
      return result;
    },
  },
  data() {
    return {
      cashLogs: [], // 캐쉬내역
      total: 0, // 캐쉬내역 전체 갯수
      listQuery: {
        page: 1, // 현재 페이지 번호
        limit: 15, // 페이지당 노출 갯수
      },
      moneyType: "sports", // 머니타입
      requestMoney: "", // 신청금액
      category: -1,
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
    this.getList();
  },
  methods: {
    currencyFormat,
    parseTime,
    getColor(amount) {
      if (this.layoutType == "layout2" || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6')
        return amount < 0 ? "text-red902" : "text-blue906";
      return amount < 0 ? "text-red901" : "text-blue193";
    },
    // 캐쉬내역 얻기
    async getList() {
      try {
        if (!this.currentUser) return;
        this.$nuxt.$loading.start();
        this.cashLogs = [];

        let res = await cashLogService.find({
          query: { moneyType: this.category, page: this.listQuery.page },
        });
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.cashLogs = res.data.data;
          this.total = res.data.total;
        }
        this.$nuxt.$loading.finish();
      } catch (err) {
        console.log(err.message);
        this.$nuxt.$loading.finish();
      }
    },
    // 현재 페이지변경 이벤트
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 카테고리 선택
    onClickCategory(val) {
      this.category = val;
      this.getList();
    },
    // 메시지 보여주기
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type
			})
		}
  },
};
</script>
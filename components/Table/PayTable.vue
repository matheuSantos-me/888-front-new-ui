<template>
  <el-row :class="{ 'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile }">
    <el-row :class="`pay-table-header-${themeType}`">
      <div class="name">
        <span>{{ getTypeName() }}</span>
      </div>
      <div v-if="type != 'moneymove'" class="gametype-button-orange11 m-0" 
        :class="layoutType == 'layout2' ? 'grey3-button' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}-button` : 'red-button1'" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'position: absolute; right: 16px; top: 5px;' :'float: right;'" @click="onDeleteAll()">
        <div class="float-left">
          <img v-if="layoutType == 'layout1'" :src="'/image/Money/Delete.png'" :width="isMobile ? '15px' : '20px'" />
          <img v-else :src="layoutType == 'layout2' ? '/image/Money/Ic_delete.png' : '/image/Money/Ic_delete_other.png'" />
        </div>
        <div class="float-left m-l-10 p-t-3" :class="{ 'f-s-12': layoutType == 'layout2' }">
          3일전 내역 삭제
        </div>
      </div>
    </el-row>
    <div v-if="logs" class="col-md-12 p-0">
      <div class="col-md-12 p-0 m-0 width-full height-full display-inlineblock"
        :class="layoutType == 'layout2' ? 'm-t-12 m-b-24' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-b-24' : 'm-t-10 m-b-20'">
        <div v-if="type == 'payin'" :class="`table-history-${themeType}`">
          <div class="table-header">
            <div class="text-center" :style="isMobile ? 'width: 80px;' : 'width: 150px;'">
              신청시간
            </div>
            <div v-if="!isShowMobile" class="text-center" style="width: 70px">
              타입
            </div>
            <div class="text-center" :style="isMobile ? 'width: 80px;' : 'width: 100px;'">
              입금금액
            </div>
            <div class="text-center table-history-flex-field">보너스금액</div>
            <div v-if="!isShowMobile" class="text-center" style="width: 100px">
              합계
            </div>
            <div v-if="!isShowMobile" class="text-center" style="width: 150px">
              처리시간
            </div>
            <div class="text-center" :style="isMobile ? 'width: 90px;' : 'width: 100px;'">
              상태
            </div>
          </div>
          <el-row v-for="(log, index) in logs" :key="index">
            <el-row class="table-history-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-history-td-first" :style="isMobile ? 'width: 80px;' : 'width: 150px;'">
                <div class="word-keep text-center">{{ parseTime(log.createdAt) }}</div>
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 70px">
              {{ log.cashType === 0 ? "스포츠" : log.cashType == 1 ? "카지노" : log.cashType == 3 ? "보유캐쉬" : "포커" }}
              </div>
              <div class="display-center table-history-td" :style="isMobile ? 'width: 80px;' : 'width: 100px;'">
                {{ currencyFormat(log.payInfo.money, "원") }}
              </div>
              <div class="display-center table-history-td table-history-flex-field">
                <div class="word-keep">
                  {{currencyFormat(log.bonusMoney, "원")}}
                  <span v-if="log.bonusType != 0 && log.bonusType != 23">({{ getHistoryBonusName(log.bonusType, log.isEmergency) }})</span>
                </div>
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 100px">
                {{currencyFormat(log.payInfo.money + log.bonusMoney, "원")}}
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 150px">
                {{ parseTime(log.processAt) }}
              </div>
              <div class="display-center table-history-td" :style="isMobile ? 'width: 90px;' : 'width: 100px;'">
                <div class="width-80pro" :class="log.state | statusClassObject(themeType)">
                  {{ log.state == 0 ? "대기중" : log.state == 1 ? "취소" : log.state == 2 ? "처리완료" : "환수" }}
                </div>
              </div>
            </el-row>
          </el-row>
        </div>
        <div v-if="type == 'payout'" :class="`table-history-${themeType}`">
          <div class="table-header">
            <div class="text-center" :style="isMobile ? 'width: 90px;' : 'width: 255px;'">
              신청시간
            </div>
            <div v-if="!isShowMobile" class="text-center" :style="isMobile ? 'width: 70px;' : 'width: 215px;'">
              타입
            </div>
            <div class="text-center table-history-flex-field">출금금액</div>
            <div v-if="!isShowMobile" class="text-center" style="width: 290px">
              처리시간
            </div>
            <div class="text-center" :style="isMobile ? 'width: 90px;' : 'width: 165px;'">
              상태
            </div>
          </div>
          <el-row v-for="(log, index) in logs" :key="index">
            <el-row class="table-history-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-history-td-first" :style="isMobile ? 'width: 90px;' : 'width: 255px;'">
                <div class="word-keep text-center">{{ parseTime(log.createdAt) }}</div>
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" :style="isMobile ? 'width: 70px;' : 'width: 215px;'">
                <div class="word-keep">
                  {{ log.cashType === 0 ? "스포츠 지갑" : log.cashType == 1 ? "카지노 지갑" : "포커 지갑" }}
                </div>
              </div>
              <div class="display-center table-history-td table-history-flex-field">
                {{ currencyFormat(log.payInfo.money, "원") }}
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 290px">
                {{ log.state !== 0 ? parseTime(log.processAt) : "" }}
              </div>
              <div class="display-center table-history-td" :style="isMobile ? 'width: 90px;' : 'width: 165px;'">
                <div class="width-80pro" :class="log.state | statusClassObject(themeType)">
                  {{ log.state == 0 ? "대기중" : log.state == 1 ? "취소" : log.state == 2 ? "처리완료" : "환수" }}
                </div>
              </div>
            </el-row>
          </el-row>
        </div>
        <div v-if="type == 'moneymove'" :class="`table-history-${themeType}`">
          <div class="table-header">
            <div class="text-center table-history-flex-field">이동시간</div>
            <div class="text-center" :style="isShowMobile ? 'width: 120px;' : 'width: 265px;'">
              타입
            </div>
            <div class="text-center" :style="isShowMobile ? 'width: 140px;' : 'width: 205px;'">
              이동금액
            </div>
            <div v-if="!isShowMobile" class="text-center" style="width: 250px">
              이동 후 보유 스포츠캐쉬
            </div>
            <div v-if="!isShowMobile" class="text-center" style="width: 250px">
              이동 후 보유 카지노캐쉬
            </div>
          </div>
          <el-row v-for="(log, index) in logs" :key="index">
            <el-row class="table-history-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-history-td-first table-history-flex-field">
                <div class="word-keep text-center">
                  {{ parseTime(log.createdAt) }}
                </div>
              </div>
              <div class="display-center table-history-td" :style="isShowMobile ? 'width: 120px;' : 'width: 265px;'">
                {{ log.moveType === 0 ? "스포츠 > 카지노" : "카지노 > 스포츠" }}
              </div>
              <div class="display-center table-history-td" :style="isShowMobile ? 'width: 140px;' : 'width: 205px;'">
                {{ currencyFormat(log.money, "원") }}
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 250px">
                {{ log.state !== 0 ? currencyFormat(log.afterSportsMoney, "원") : "" }}
              </div>
              <div v-if="!isShowMobile" class="display-center table-history-td" style="width: 250px">
                {{ currencyFormat(log.afterCasinoMoney, "원") }}
              </div>
            </el-row>
          </el-row>
        </div>
      </div>
      <el-row v-if="logs.length > 0" class="display-inlineblock width-full">
        <el-pagination
          :class="`bet-history-paging-${themeType}`"
          align="center"
          :page-sizes="[5, 10, 20, 30, 50]"
          :page-size="limit"
          :current-page="currentPage"
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-row>
    </div>
    <el-row v-if="!logs || logs.length == 0" class="width-full display-center">
      <el-row class="p-t-24 p-b-48">
        <el-row v-if="layoutType == 'layout2'" class="text-center">
          <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
        </el-row>
        {{ getNoneText() }}
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, parseTime } from "~/assets/js/utils";
import { statusClassObject } from "~/assets/js/data/uicommon.js";
import cookies from '../../plugins/cookies';

const payCreateService = feathers.service("/client-payinout");
payCreateService.timeout = 60000

export default {
  props: ["type", "logs", "total", "limit", "page", "bonusSetting", "isShowMobile"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      payInSettings: "getPayInSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      payInPlus: "getPayInPlus",
      newUserBonus: "getNewUserBonus",
      emergencyPercentSports: "getEmergencyPercentSports",
      emergencyPercentCasino: "getEmergencyPercentCasino",
      emergencyMax: "getEmergencyMax"
    }),
  },
  filters: {
    statusClassObject: statusClassObject,
  },
  data() {
    return {
      loadingDelete: false,
      currentPage: 1
    }
  },
  methods: {
    parseTime,
    currencyFormat,
    getHistoryBonusName(type, isEmergency) {
      let bonusName = "";
      switch (type) {
        case 0:
          bonusName = "보너스 없음";
          break;
        case 1:
          bonusName = "스포츠 첫충";
          break;
        case 2:
          bonusName = "카지노 첫충";
          break;
        case 3:
          bonusName = "스포츠 매충";
          break;
        case 4:
          bonusName = "카지노 매충";
          break;
        case 13:
          bonusName = "입플 보너스";
          break;
        case 22:
          bonusName = "신규 보너스"
          break;
        case 23:
          bonusName = "포커 보너스 없음"
          break;
        case 24:
          bonusName = "포커 첫충";
          break;
        case 25:
          bonusName = "포커 매충";
          break;
      }
      if (isEmergency) bonusName = "돌발 보너스"
      return bonusName;
    },
    // 3일전 내역 삭제
    onDeleteAll() {
      if (this.loadingDelete) return
      
      if (!this.currentUser) {
        return;
      }
      this.loadingDelete = true
      this.$nuxt.$loading.start();
      payCreateService
        .remove(this.currentUser._id, {
          query: { payType: this.type == "payin" ? 0 : 1 },
        })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.$emit("deleteAll");
          }
          this.loadingDelete = false
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message)
          this.loadingDelete = false
          this.$nuxt.$loading.finish();
        });
    },
    // 현재 페이지변경 이벤트
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
      this.currentPage = val;
    },
    getTypeName() {
      if (this.type == "payin") return "입금내역";
      if (this.type == "payout") return "출금내역";
      return "머니이동내역";
    },
    getNoneText() {
      if (this.type == "payin") return "입금내역이 존재하지 않습니다.";
      else if (this.type == "payout") return "출금내역이 존재하지 않습니다.";
      else if (this.type == "moneymove")
        return "머니이동내역이 존재하지 않습니다.";
    },
    // 메시지 보여주기
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		}
  },
};
</script>
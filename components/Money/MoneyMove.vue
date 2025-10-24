<template>
  <div>
    <el-row v-if="layoutType == 'layout2'" class="display-center" style="border-bottom: 1px solid #292929">
      <el-row>
        <div :class="[{ on: tabType == 0 }, `tab-${themeType}`]" @click="onClickTab(0)">
          머니이동
        </div>
        <div :class="[{ on: tabType == 1 }, `tab-${themeType}`]" @click="onClickTab(1)">
          머니이동내역
        </div>
        <div v-if="isShowMobile" :class="[{ on: tabType == 2 }, `tab-${themeType}`]" @click="onClickTab(2)">
          머니이동규정
        </div>
      </el-row>
    </el-row>
    <el-row v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 0)" :class="{'display-flex': !isShowMobile}">
      <div :style="isShowMobile ? 'width: 100%;' : 'width: 58%;'" :class="{'p-r-35': !isShowMobile && layoutType != 'layout2', 'p-r-24': !isMobile && layoutType == 'layout2'}">
        <el-row v-if="(layoutType == 'layout2' && !isMobile) || layoutType == 'layout1'" class="f-w-700"
          :class="[{ 'display-center': isMobile, 'p-l-24': !isMobile && layoutType == 'layout2' }, layoutType == 'layout2' ? 'p-t-24 p-b-24' : 'p-t-20 p-b-20']">
          <div v-if="themeType != 'green'" class="float-left" :style="layoutType == 'layout2' ? 'background: #121214; width: calc(50% - 8px);' : 'margin-right: 40px;'">
            <el-row v-if="layoutType != 'layout2'">
              <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                <img :src="`/image/Money/${themeType}/SportsOn.png`" :style="!isMobile ? 'margin-top: -8px' : ''" />
                스포츠캐쉬
              </el-row>
              <el-row class="f-s-16 m-t-5" :class="getTextColor(themeType, 1)" style="padding-left: 28px">
                {{ currencyFormat(currentUser.cash.sportsmoney, "원") }}
              </el-row>
            </el-row>
            <el-row v-else style="padding: 16px 24px; border-radius: 6px">
              <div class="float-left display-center">
                <img :src="`/image/Money/${themeType}/SportsOn.png`" class="m-t-5" />
              </div>
              <div class="float-left f-s-12 p-l-24">
                <el-row> 스포츠캐쉬 </el-row>
                <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                  {{ currencyFormat(currentUser.cash.sportsmoney, "원") }}
                </el-row>
              </div>
            </el-row>
          </div>
          <div :style="layoutType == 'layout2' ? 'background: #121214; width: calc(50% - 8px); float: right;' : 'float: left; padding: 0 18px;'">
            <el-row v-if="layoutType != 'layout2'">
              <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                <img :src="`/image/Money/${themeType}/CasinoCash.png`" :style="!isMobile ? 'margin-top: -8px' : ''" />
                카지노캐쉬
                <span v-if="themeType == 'green'" :class="getTextColor(themeType, 1)">{{currencyFormat(currentUser.cash.casinomoney, "원")}}</span>
              </el-row>
              <el-row
                v-if="themeType != 'green'"
                class="f-s-16 m-t-5"
                :class="getTextColor(themeType, 1)"
                style="padding-left: 33px"
              >
                {{ currencyFormat(currentUser.cash.casinomoney, "원") }}
              </el-row>
            </el-row>
            <el-row v-else style="padding: 16px 24px; border-radius: 6px">
              <div class="float-right display-center">
                <img
                  :src="`/image/Money/${themeType}/CasinoCash.png`"
                  class="m-t-5"
                />
              </div>
              <div class="float-right f-s-12 p-r-24 text-right">
                <el-row> 카지노캐쉬 </el-row>
                <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                  {{ currencyFormat(currentUser.cash.casinomoney, "원") }}
                </el-row>
              </div>
            </el-row>
          </div>
        </el-row>
        <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" style="border-radius: 6px; padding: 16px 12px;" 
          :class="{
            'bg-black30': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6', 
            'bg-black39': themeType == 'yellow16', 
            'bg-black51': themeType == 'yellow14' || themeType == 'yellow11',
            'bg-blue903': themeType == 'gold13',
            'bg-black22': themeType == 'yellow18', 
            'bg-black35': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11',
            'bg-black41': themeType == 'yellow17',
            'bg-blue902': themeType == 'blue19',
            'bg-grey914': themeType == 'blue11'
          }">
          <el-row class="f-s-14" :class="`text-${themeType}`">
            보유캐쉬
          </el-row>
          <el-row class="f-s-13 m-t-12" style="display: flex; justify-content: space-between;">
            <div :class="`wallet-type-${themeType}`">
              <el-row>
                <div :class="isMobile ? 'width-full' : 'float-left'">
                  <img :src="`/image/Home/${themeType}/sportscash.png`" width="24" class="m-r-4">
                  스포츠캐쉬
                </div>
                <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">
                  {{currencyFormat(currentUser.cash.sportsmoney, '원')}}
                </div>
              </el-row>
            </div>
            <div :class="`wallet-type-${themeType}`">
              <el-row>
                <div :class="isMobile ? 'width-full' : 'float-left'">
                  <img :src="`/image/Home/${themeType}/casinocash.png`" width="24" class="m-r-4">
                  카지노캐쉬
                </div>
                <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">
                  {{currencyFormat(currentUser.cash.casinomoney, '원')}}
                </div>
              </el-row>
            </div>
          </el-row>
        </el-row>
        <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
        <el-row v-if="layoutType == 'layout1'" :class="`pay-panel-item-${themeType}`">
          <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="f-w-700 m-b-12" :class="isMobile ? 'f-s-16' : 'f-s-22'">
            캐쉬이동선택
          </el-row>
          <el-row v-else class="f-s-14 m-b-12" :class="`text-${themeType}`">
            캐쉬이동선택
          </el-row>
          <el-row>
            <el-col :span="isMobile ? 24 : 10">
              <div class="main-select cursor p-12 f-s-15" :class="[{ 'width-full': isMobile, 'bg-white shadow': !isBlackMode }, `border-1-${themeType}`]" @click="showMoneyTypePanel">
                <span>{{ moneyType == 0 ? "스포츠캐쉬" : "카지노캐쉬" }}</span>
                <img :src="`/image/Money/${themeType}/Down.png`" width="15" class="float-right m-t-7" />
              </div>
              <div v-show="isVisibleMoneyType" class="main-select-drop" :class="{'width-full': isMobile, 'bg-white shadow': !isBlackMode}" style="width: 41.66667%">
                <el-row class="p-5 p-b-0">
                  <div :class="`main-select-drop-item-${themeType}`" @click="onSelectMoneyType(0)">
                    <img :src="`/image/Money/${themeType}/sports.png`" class="float-left m-r-13" />
                    <div class="main-select-text p-0 height-22">스포츠캐쉬</div>
                  </div>
                </el-row>
                <el-row class="p-5 p-b-0">
                  <div :class="`main-select-drop-item-${themeType}`" @click="onSelectMoneyType(1)">
                    <img :src="`/image/Money/${themeType}/casino.png`" class="float-left m-r-10" />
                    <div class="main-select-text p-0 height-22">카지노캐쉬</div>
                  </div>
                </el-row>
              </div>
            </el-col>
            <el-col :span="isMobile ? 24 : 4" class="text-center">
              <img :src="`/image/Money/${themeType}/Icon.png`" class="m-t-10 m-b-10 m-l-22 m-r-22"
                :class="{'width-18': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}"
                id="money-move-img"
              />
            </el-col>
            <el-col :span="isMobile ? 24 : 10">
              <div class="width-full p-12 f-s-15" :class="[`border-1-${themeType}`, !isBlackMode ? 'bg-white shadow' : 'bg-grey907']" style="border-radius: 3px">
                {{ moneyType == 0 ? "카지노캐쉬" : "스포츠캐쉬" }}
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" :class="`pay-panel-item-${themeType}`">
          <el-row class="f-s-14 m-b-12" :class="`text-${themeType}`">
            캐쉬이동선택
          </el-row>
          <el-row>
            <el-col :span="isMobile ? 24 : 11">
              <div
                class="main-select cursor p-8 f-s-15"
                :class="[{ 'width-full': isMobile}, `border-2-${themeType}`]"
                :style="
                  layoutType == 'layout3' && themeType != 'yellow16' ? 'background: #101216;' : 
                  layoutType == 'layout3' && themeType == 'yellow16' ? 'background: #0e1e31;' : 
                  themeType == 'yellow17' ? 'background: #1b1b1b;' :
                  themeType == 'blue19' ? 'background: #0e1628;' : themeType == 'blue11' ? 'background: #1a1a23;' : 'background: #030917;'"
                @click="showMoneyTypePanel"
              >
                <img :src="moneyType == 0 ? `/image/Money/${themeType}/sports.png` : `/image/Money/${themeType}/casino.png`" width="28" />
                <span>{{ moneyType == 0 ? "스포츠캐쉬" : "카지노캐쉬" }}</span>
                <img :src="`/image/Money/${themeType}/Down.png`" width="15" class="float-right m-t-10" />
              </div>
              <div
                v-show="isVisibleMoneyType"
                class="main-select-drop"
                :class="{'width-full': isMobile}"
                style="width: 45.8%; background: #181a20;"
              >
                <el-row class="p-5 p-b-0">
                  <div :class="`main-select-drop-item-${themeType}`" @click="onSelectMoneyType(0)">
                    <img :src="`/image/Money/${themeType}/sports.png`" width="28" class="float-left m-r-13 img-sports" />
                    <div class="main-select-text p-0 height-22">스포츠캐쉬</div>
                  </div>
                </el-row>
                <el-row class="p-5 p-b-0">
                  <div :class="`main-select-drop-item-${themeType}`" @click="onSelectMoneyType(1)">
                    <img :src="`/image/Money/${themeType}/casino.png`" width="28" class="float-left m-r-10 img-casino" />
                    <div class="main-select-text p-0 height-22">카지노캐쉬</div>
                  </div>
                </el-row>
              </div>
            </el-col>
            <el-col :span="isMobile ? 24 : 2" class="display-center" :class="{'m-b-8': isMobile}">
              <img
                :src="`/image/Money/${themeType}/Icon.png`"
                :class="{'width-18': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}"
                class="m-t-15"
                id="money-move-img"
              />
            </el-col>
            <el-col :span="isMobile ? 24 : 11">
              <div class="width-full p-8 f-s-15" :class="layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17 border-2-yellow20' : `bg-${themeType} border-2-${themeType}`" style="border-radius: 3px; color: #000;" 
                :style="isMobile ? 'text-align: left;' : 'text-align: right;'">
                <img v-if="isMobile" :src="moneyType == 0 ? `/image/Money/${themeType}/casino-on.png` : `/image/Money/${themeType}/sports-on.png`" width="28" />
                {{ moneyType == 0 ? "카지노캐쉬" : "스포츠캐쉬" }}
                <img v-if="!isMobile" :src="moneyType == 0 ? `/image/Money/${themeType}/casino-on.png` : `/image/Money/${themeType}/sports-on.png`" width="28" />
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" class="p-t-24 p-b-24" :class="isMobile ? 'p-l-16 p-r-16' : 'p-l-24'">
          <el-row style="background: #19191c; border-radius: 6px; padding: 12px 16px; font-size: 14px;">
            <span class="float-left">{{moneyType == 0 ? "스포츠캐쉬에서" : "카지노캐쉬에서"}}</span>
            <span class="float-right">{{moneyType == 0 ? "카지노캐쉬로" : "스포츠캐쉬로"}}</span>
            <img :src="`/image/Money/${themeType}/move.svg`" class="moneymove-button" @click="onChangeMoneyType()" />
          </el-row>
        </el-row>
        <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
        <el-row :class="`pay-panel-item-${themeType}`">
          <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="f-w-700" :class="isMobile ? 'f-s-16' : 'f-s-22'">
            이동금액
          </el-row>
          <el-row v-else class="f-s-14" :class="`text-${themeType}`">
            이동금액
          </el-row>
          <el-row :class="layoutType == 'layout2' ? 'm-t-24' : 'm-t-20'">
            <input
              type="text"
              placeholder="이동금액 입력"
              readonly
              v-model="requestMoney"
              :class="`pay-input-${themeType}`"
            />
          </el-row>
          <el-row :class="layoutType == 'layout2' ? 'm-t-24 m-b-24' : 'm-t-15 m-b-15'">
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="
                isMobile
                  ? 'width: calc(25% - 4px) !important;'
                  : 'width: calc(14.2% - 4px) !important;'
              "
              @click="onClickRequestMoney(10000)"
              >1만원</el-button
            >
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(30000)"
              >3만원</el-button
            >
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(100000)"
              >10만원</el-button
            >
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(500000)"
              >50만원</el-button
            >
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(1000000)"
              >100만원</el-button
            >
            <el-button
              v-if="isMobile"
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(3000000)"
              >300만원</el-button
            >
            <el-button
              type="primary"
              class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney('max')"
              >맥스</el-button
            >
            <div
              type="primary"
              class="float-right text-center p-0 height-35 m-l-2 m-r-2 cursor m-t-2"
              :class="layoutType == 'layout2' ? 'grey3-button' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}-button` : 'red-button1'"
              :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
              @click="onClickRequestMoney(0)"
            >
              <img :src="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '/image/Money/Ic_delete_other.png' : '/image/Money/Delete.png'"
                :class="layoutType == 'layout2' ? 'm-t-5' : 'm-t-3'"
              />
            </div>
          </el-row>
          <el-row :class="{'p-b-48': layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'}">
            <el-button type="primary" class="p-t-15" 
              :class="layoutType == 'layout2' ? `width-full ${themeType}-button` : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}1-button` : 'green-button2'" :loading="loadingMove" @click="onSendMoneyMoveRequest">머니이동 신청</el-button>
          </el-row>
        </el-row>
        <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
      </div>
      <div v-if="!isShowMobile" class="f-s-13" :class="`rule-bg-${themeType}`" style="width: 42%;">
        <el-row>
          <MoneyMoveRule />
        </el-row>
      </div>
    </el-row>
    <el-row v-if="isShowMobile && tabType == 2" class="p-16">
      <MoneyMoveRule />
    </el-row>
    <PayTable
      v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 1)"
      :type="'moneymove'"
      :logs="moneyMoveLogs"
      :total="total"
      :limit="listQuery.limit"
      :page="listQuery.page"
      :isShowMobile="isShowMobile"
      @pageChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat } from "~/assets/js/utils";
import { getTextColor } from "~/assets/js/data/uicommon";
import MoneyMoveRule from "~/components/Money/MoneyMoveRule";
import PayTable from "~/components/Table/PayTable";

const moneyMoveService = feathers.service("/client-money-move");
const reqService = feathers.service("/client-request");
const casinoBalanceService = feathers.service("getBalanceTotal");
const mainService = feathers.service("main");

moneyMoveService.timeout = 60000;
casinoBalanceService.timeout = 60000;
reqService.timeout = 60000;

export default {
  props: ["isShowMobile"],
  components: {
    MoneyMoveRule,
    PayTable,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      isBlackMode: 'getIsBlackMode',
      layoutType: 'getLayoutType'
    }),
  },
  data() {
    return {
      moneyMoveLogs: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 8,
      },
      isVisibleMoneyType: false,
      isVisibleRule: false, // 입금규정패널 보여주기 상태
      moneyType: 0,
      requestMoney: "", // 신청금액
      sportsMoney: 0,
      casinoMoney: 0,
      tabType: 0,
      loadingMove: false,
      isUpdatedCasinoMoney: false,
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    if ((this.themeType == "blue18") && !this.isMobile) {
      this.isVisibleRule = true;
    }

    this.getList();

    if (!this.currentUser) return

    mainService.off('moneyMoveCreated')
    mainService.on('moneyMoveCreated', (res) => {
      this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      if (res.code == 1) {
        if (this.moneyMoveLogs.length > 8) {
          this.moneyMoveLogs.splice(this.moneyMoveLogs.length - 1, 1);
          this.moneyMoveLogs.unshift(res.data);
        } else {
          this.moneyMoveLogs.unshift(res.data);
        }
        this.total++;
        this.requestMoney = "";
      }
      this.loadingMove = false
      this.$nuxt.$loading.finish();
    })

    // 카지노머니 리프리쉬
    if (!this.gameSettings.Casino.gameStatus_manual)
      return;

    casinoBalanceService.timeout = 30000;
    casinoBalanceService.find().then((res) => {
      if (res.code != 1) {
        console.log(res.message)
      } else {
        this.isUpdatedCasinoMoney = true;
        this.sportsMoney = this.currentUser.cash.sportsmoney;
        this.casinoMoney = this.currentUser.cash.casinomoney;
        if (this.casinoMoney > this.sportsMoney) this.moneyType = 1;
      }
    });
  },
  methods: {
    currencyFormat,
    getTextColor,
    // 머니이동내역얻기
    async getList() {
      try {
        this.moneyMoveLogs = [];
        if (!this.currentUser) return;

        let res = await moneyMoveService.find({
          query: { page: this.listQuery.page },
        });
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.moneyMoveLogs = res.data.data;
        this.total = res.data.total;
      } catch (err) {
        console.log(err.message);
      }
    },
    // 머니이동 요청
    async onSendMoneyMoveRequest() {
      try {
        if (this.loadingMove) return

        this.loadingMove = true
        this.$nuxt.$loading.start();
        if (!this.currentUser) {
          this.loadingMove = false
          this.$nuxt.$loading.finish();
          return;
        }
        let money = parseInt(String(this.requestMoney).replace(/,/gi, ""));
        if (money <= 0 || this.requestMoney == "") {
          this.showMessage("알림메시지", "이동금액을 입력하세요.", "닫기[Close]", 2);
          this.loadingMove = false
          this.$nuxt.$loading.finish();
          return;
        }
        if (this.moneyType == 0 && this.currentUser.cash.sportsmoney < money) {
          this.showMessage("알림메시지", "스포츠머니 잔액이 부족합니다.", "닫기[Close]", 2);
          this.loadingMove = false
          this.$nuxt.$loading.finish();
          return;
        }
        if (this.moneyType == 1 && this.currentUser.cash.casinomoney < money) {
          this.showMessage("알림메시지", "카지노머니 잔액이 부족합니다.", "닫기[Close]", 2);
          this.loadingMove = false
          this.$nuxt.$loading.finish();
          return;
        }
        let data = {
          requestType: 2,
          moveType: this.moneyType, // 신청형태. 0: 스포츠>카지노, 1: 카지노>스포츠
          money: money, // 이동금액
        };
        let res = await reqService.patch(null, data)
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loadingMove = false
          this.$nuxt.$loading.finish();
        }
      } catch (err) {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
        this.loadingMove = false
        this.$nuxt.$loading.finish();
      }
    },
    // 머니이동 규정현시
    showRule() {
      this.isVisibleRule = !this.isVisibleRule;
    },
    // 머니타입선택창 노출
    showMoneyTypePanel() {
      this.isVisibleMoneyType = !this.isVisibleMoneyType;
    },
    // 머니타입선택
    onSelectMoneyType(val) {
      this.moneyType = val;
      this.isVisibleMoneyType = false;
    },
    onChangeMoneyType() {
      if (this.moneyType == 0) this.moneyType = 1;
      else this.moneyType = 0;
    },
    // 현재 페이지변경
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 배팅금액 선택
    onClickRequestMoney(val) {
      // 로그인하지 않은 경우 리턴
      if (this.currentUser == null) {
        return;
      }
      let userMoney =
        this.moneyType == 0
          ? this.currentUser.cash.sportsmoney
          : this.currentUser.cash.casinomoney;
      if (this.currentUser) {
        if (val == "max") {
          // 맥스버튼 누른 경우
          this.requestMoney = userMoney;
        } else if (val == 0) {
          // 초기화 버튼 누른 경우
          this.requestMoney = 0;
          return;
        } else {
          // 금액 버튼 누른 경우
          let money = String(this.requestMoney).replace(/,/gi, "");
          if (money == "") money = 0;
          money = parseInt(money) + val;
          this.requestMoney = money;
        }
      }
      this.onChangeRequestMoney();
    },
    // 배팅머니 변경시 포맷
    onChangeRequestMoney() {
      if (this.requestMoney !== "") {
        let money = parseInt(String(this.requestMoney).replace(/,/gi, ""));
        let userMoney =
          this.moneyType == 0
            ? this.currentUser.cash.sportsmoney
            : this.currentUser.cash.casinomoney;
        if (userMoney < money) {
          this.showMessage(
            "알림메시지",
            "신청하신 금액이 보유한 금액을 초과합니다.",
            "닫기[Close]",
            2
          );
          this.requestMoney = "";
          return;
        }
        if (this.moneyType == 0) {
          this.sportsMoney -= money;
          this.casinoMoney += money;
        } else {
          this.sportsMoney += money;
          this.casinoMoney -= money;
        }
      }
      let val = this.currencyFormat(this.requestMoney, "");
      val = val.substring(0, val.length - 1);
      if (val == "0") val = "";
      this.requestMoney = val;
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
    onClickTab(val) {
      this.tabType = val;
    },
  },
};
</script>

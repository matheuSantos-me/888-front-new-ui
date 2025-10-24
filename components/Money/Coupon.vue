<template>
  <div>
    <el-row>
      <el-row v-if="layoutType == 'layout2'" class="display-center" style="border-bottom: 1px solid #292929">
        <el-row>
          <div :class="[{'on': tabType == 0}, `tab-${themeType}`]" @click="onClickTab(0)">
            사용가능
          </div>
          <div :class="[{'on': tabType == 1}, `tab-${themeType}`]" @click="onClickTab(1)">
            사용내역
          </div>
        </el-row>
      </el-row>
      <el-row v-else>
        <div class="float-left display-center" :class="{ 'width-25pro m-t-5': isMobile, 'm-r-5': !isMobile }">
          <div style="width: 98%" :class="[{'on': tabType == 0, 'm-0': isMobile}, `gametype-button-${themeType}`]" @click="onClickTab(0)">
            사용가능
          </div>
        </div>
        <div class="float-left display-center" :class="{ 'width-25pro m-t-5': isMobile, 'm-r-5': !isMobile }">
          <div style="width: 98%" :class="[{'on': tabType == 1, 'm-0': isMobile}, `gametype-button-${themeType}`]" @click="onClickTab(1)">
            사용내역
          </div>
        </div>
      </el-row>
      <el-row v-if="tabType == 0" :class="{'p-12': layoutType == 'layout2'}">
        <el-row>
          <div v-for="(coupon, index) in couponList" :key="index" class="coupon-item">
            <div class="left-panel" :class="layoutType != 'layout2' ? `border-1-${themeType}` : ''">
              <el-row class="f-s-20" :class="getTextColor(themeType)">
                {{coupon.type != 0 ? '' : currencyFormat(coupon.money, '원') + " - "}}{{coupon.couponName}}
              </el-row>
              <el-row class="m-t-24">
                지급날짜: {{parseTime(coupon.createdAt)}}
              </el-row>
              <el-row>
                만료날짜: {{parseTime(coupon.expireAt)}}
              </el-row>
            </div>
            <div class="right-panel" :class="layoutType != 'layout2' ? `border-1-${themeType}` : ''" @click="processCoupon(coupon._id, coupon.type)">
              <el-row class="text-center">
                <img :src="'/image/Money/coupon-use.png'" width="36" class="img-coupon">
              </el-row>
              <el-row class="m-t-24 f-s-14">
                사용하기
              </el-row>
            </div>
          </div>
        </el-row>
        <el-row class="f-s-14 m-t-30 m-b-30">
          <el-col v-if="isWeekAttendance && attIsUseAutoMode" class="p-l-8 p-r-8" :span="isMobile ? 24 : 8">
            <el-row class="m-b-16">
              출석포인트
            </el-row>
            <el-row class="text-center p-16 p-l-24 p-r-24" style="border-radius: 6px;" :style="themeType == 'gold13' ? 'background: #141517;' : 'background: #141517;'">
              <el-row>금주 예상 출석 포인트</el-row>
              <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                {{attDataNow ? currencyFormat(attDataNow.attBonus, '원') : '0 원'}}
              </el-row>
              <el-row>지난주 출석 포인트</el-row>
              <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                {{attData ? currencyFormat(attData.attBonus, '원') : '0 원'}}
                  <div v-if="attData && attData.state == 2" style="position: absolute; right: 10px; top: 10px; color: #000; border-radius: 4px; padding: 5px;" :class="`bg-${themeType}`">지급완료</div>
              </el-row>
              <el-row class="f-s-10 m-t-8 m-b-16" style="height: 14px;"></el-row>
              <el-row class="f-s-10">
                <el-button v-if="attData" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="attData.state != 0" @click.native.prevent="processBonus(attData._id, 5)">
                  {{attData.state == 0 ? '지급받기' : '지급완료'}}
                </el-button>
                <el-button v-else type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="true">>
                  지급완료
                </el-button>
              </el-row>
            </el-row>
          </el-col>
          <el-col v-if="isUseRolling" class="p-l-8 p-r-8" :span="isMobile ? 24 : 8">
            <el-row class="m-b-16">
              롤링포인트
            </el-row>
            <el-row class="text-center p-16 p-l-24 p-r-24" style="border-radius: 6px;" :style="themeType == 'gold13' ? 'background: #0a1c30;' : 'background: #141517;'">
              <el-row v-if="isShowRollingMoney">
                <el-row>금주 예상 롤링 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{rollingDataNow ?  currencyFormat(rollingDataNow.bonusAmount, '원') : '0 원'}}
                </el-row>
                <el-row>지난주 롤링 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{rollingData ?  currencyFormat(rollingData.bonusAmount, '원') : '0 원'}}
                  <div v-if="rollingData && rollingData.state == 2" style="position: absolute; right: 10px; top: 10px; color: #000; border-radius: 4px; padding: 5px;" :class="`bg-${themeType}`">지급완료</div>
                </el-row>
                <el-row class="f-s-10 m-t-8 m-b-16">*누적금액 및 누적 포인트는 00시마다 업데이트됩니다.</el-row>
              </el-row>
              <el-row v-if="rollIsUseAutoMode" class="f-s-10">
                <el-button v-if="rollingData" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="rollingData.state != 0" @click.native.prevent="processBonus(rollingData._id, 6)">
                  {{rollingData.state == 0 ? '지급받기' : '지급완료'}}
                </el-button>
                <el-button v-else type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="true">>
                  지급완료
                </el-button>
              </el-row>
            </el-row>
          </el-col>
          <el-col v-if="isUseLost" class="p-l-8 p-r-8" :span="isMobile ? 24 : 8">
            <el-row class="m-b-16">
              낙첨포인트
            </el-row>
            <el-row class="text-center p-16 p-l-24 p-r-24" style="border-radius: 6px;" :style="themeType == 'gold13' ? 'background: #0a1c30;' : 'background: #141517;'">
              <el-row v-if="isShowLostMoney">
                <el-row>금주 예상 낙첨 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{lostDataNow ?  currencyFormat(lostDataNow.bonusAmount, '원') : '0 원'}}
                </el-row>
                <el-row>지난주 낙첨 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{lostData ?  currencyFormat(lostData.bonusAmount, '원') : '0 원'}}
                  <div v-if="lostData && lostData.state == 2" style="position: absolute; right: 10px; top: 10px; color: #000; border-radius: 4px; padding: 5px;" :class="`bg-${themeType}`">지급완료</div>
                </el-row>
                <el-row class="f-s-10 m-t-8 m-b-16">*누적금액 및 누적 포인트는 00시마다 업데이트됩니다.</el-row>
              </el-row>
              <el-row v-if="lostIsUseAutoMode" class="f-s-10">
                <el-button v-if="lostData" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="lostData.state != 0" @click.native.prevent="processBonus(lostData._id, 7)">
                  {{lostData.state == 0 ? '지급받기' : '지급완료'}}
                </el-button>
                <el-button v-else type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="true">>
                  지급완료
                </el-button>
              </el-row>
            </el-row>
          </el-col>
          <el-col v-if="isUsePayback" class="p-l-8 p-r-8" :span="isMobile ? 24 : 8">
            <el-row class="m-b-16">
              페이백
            </el-row>
            <el-row class="text-center p-16 p-l-24 p-r-24" style="border-radius: 6px;" :style="themeType == 'gold13' ? 'background: #0a1c30;' : 'background: #141517;'">
              <el-row v-if="isShowPaybackMoney">
                <el-row>금주 예상 페이백 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{paybackDataNow ?  currencyFormat(paybackDataNow.bonusAmount, '원') : '0 원'}}
                </el-row>
                <el-row>지난주 페이백 포인트</el-row>
                <el-row class="b-r-6 p-16 m-t-16 m-b-16" :class="getTextColor(themeType, 0)" style="background: #101012;">
                  {{paybackData ?  currencyFormat(paybackData.bonusAmount, '원') : '0 원'}}
                  <div v-if="paybackData && paybackData.state == 2" style="position: absolute; right: 10px; top: 10px; color: #000; border-radius: 4px; padding: 5px;" :class="`bg-${themeType}`">지급완료</div>
                </el-row>
                <el-row class="f-s-10 m-t-8 m-b-16">*누적금액 및 누적 포인트는 00시마다 업데이트됩니다.</el-row>
              </el-row>
              <el-row v-if="paybackIsUseAutoMode" class="f-s-10">
                <el-button v-if="paybackData" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="paybackData.state != 0" @click.native.prevent="processBonus(paybackData._id, 8)">
                  {{paybackData.state == 0 ? '지급받기' : '지급완료'}}
                </el-button>
                <el-button v-else type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :disabled="true">
                  지급완료
                </el-button>
              </el-row>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
      <CouponTable v-if="tabType == 1" :logs="couponHistoryList" :bonusSetting="bonusSetting" :total="total" :limit="listQuery.limit" :page="listQuery.page" :isShowMobile="isShowMobile" @pageChange="handleCurrentChange" />
    </el-row>
    <!-- 나우코인전환 끝 -->
  </div>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import CouponTable from "~/components/Table/CouponTable"
import { getTextColor } from '~/assets/js/data/uicommon.js'
import { currencyFormat, parseTime } from '~/assets/js/utils'

const couponService = feathers.service('/client-coupon')
const pointService = feathers.service('/client-point')
const reqService = feathers.service("/client-request");
const mainService = feathers.service("main");

couponService.timeout = 60000
pointService.timeout = 60000
reqService.timeout = 60000;

export default {
  props: ["isShowMobile"],
  components: {
    CouponTable
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      bonusRolling: "getBonusRolling",
      isUseRolling: "getIsUseRolling",
      isUseLost: "getIsUseLost",
      isUsePayback: "getIsUsePayback",
      isShowRollingMoney: "getIsShowRollingMoney",
      isShowLostMoney: "getIsShowLostMoney",
      isShowPaybackMoney: "getIsShowPaybackMoney",
      isWeekAttendance: "getIsWeekAttendance",
      attIsUseAutoMode: "getAttIsUseAutoMode",
      paybackIsUseAutoMode: "getPaybackIsUseAutoMode",
      rollIsUseAutoMode: "getRollIsUseAutoMode",
      lostIsUseAutoMode: "getLostIsUseAutoMode",
      roulleteIndex: "getRoulleteIndex",
    })
  },
  watch: {
    bonusRolling(val) {
      this.getBonusRolling()
    }
  },
  data() {
    return {
      couponList: [],                 // 쿠폰사용가능내역
      couponHistoryList: [],          // 쿠폰내역
      attData: null,
      rollingData: null,
      lostData: null,
      paybackData: null,
      attDataNow: null,
      rollingDataNow: null,
      lostDataNow: null,
      paybackDataNow: null,
      total: 0,                       // 입금내역 전체 갯수
      listQuery:{
        page: 1,                      // 현재 페이지 번호
        limit: 8                      // 페이지당 노출 갯수
      },
      bonusSetting: null,
      tabType: 0,
      loadingCoupon: false
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.getBonusRolling()
    this.getCouponList();
    this.getCouponHistoryList();
    this.getPointList();
    
    mainService.off('couponCreated')
    mainService.on('couponCreated', (res) => {
      if (res.code == 1) {
        if (res.data.idxRoullete == 0) {
          this.showMessage( "알림메시지", res.message,  "닫기[Close]", res.code == 1 ? 1 : 0 );
        }
        this.$store.commit("SET_ROULLETEINDEX", res.data.idxRoullete)
        let index = this.couponList.findIndex(x => x._id == res.data.id)
        if (index > -1) {
          this.couponList.splice(index, 1)
        }
      } else {
        this.$store.commit("SET_ROULLETEINDEX", this.roulleteIndex - 1)
        this.showMessage( "알림메시지", res.message,  "닫기[Close]", res.code == 1 ? 1 : 0 );
      }
      this.loadingCoupon = false
      this.$nuxt.$loading.finish();
    })
    mainService.off('weekCreated')
    mainService.on('weekCreated', (res) => {
      this.showMessage( "알림메시지", res.message,  "닫기[Close]", res.code == 1 ? 1 : 0 );
      if (res.code == 1) {
        if (res.type == 5) this.attData.state = 2
        if (res.type == 6) this.rollingData.state = 2
        if (res.type == 7) this.lostData.state = 2
        if (res.type == 8) this.paybackData.state = 2
      }
      this.$nuxt.$loading.finish();
    })
  },
  methods: {
    parseTime,
    getTextColor,
    currencyFormat,
    // 입금요청 처리
    async processCoupon(id, type) {
      try {
        if (!this.currentUser) {
          return;
        }
        if (type == 1) {
          this.$store.commit('SET_ROULLETEID', id)
          this.$store.commit('SET_ROULLETEINDEX', 0)
          this.$store.commit('SET_ROULLETEDIALOGVISIBLE')
          return
        }
        if (this.loadingCoupon) return

        this.loadingCoupon = true
        this.$nuxt.$loading.start();
        let res = await reqService.patch(id, {id: id, requestType: 4})
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loadingCoupon = false
          this.$nuxt.$loading.finish();
        }
      } catch (err) {
        this.showMessage( "알림메시지", err.message,  "닫기[Close]", 0 );
        this.loadingCoupon = false
        this.$nuxt.$loading.finish();
      }
    },
    async processBonus(id, type) {
      try {
        if (!this.currentUser) return;

        this.$nuxt.$loading.start();
        let res = await reqService.patch(id, {requestType: type})
        if (res.code != 1) this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
        
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage( "알림메시지", err.message,  "닫기[Close]", 0 );
        this.$nuxt.$loading.finish();
      }
    },
    // 유저레벨에 따르는 보너스롤링셋팅
    getBonusRolling() {
      if (!this.currentUser) return
      this.bonusSetting = this.bonusRolling.data[this.bonusRolling.data.findIndex(b => b.level == this.currentUser.level)]
    },
    handleClose() {
    },
    // 현재 페이지변경 이벤트
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getCouponHistoryList()
    },
    // 입금내역 얻기
    async getCouponList() {
      try {
        this.couponList = []
        if (!this.currentUser) return

        let res = await couponService.find({ query: { type: 0, page: 1 } })
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.couponList = res.data.data
        }
      } catch (err) {
          console.log(err.message)
      }
    },
    // 입금내역 얻기
    async getCouponHistoryList() {
      try {
        this.couponHistoryList = []
        if (!this.currentUser) return
        let res = await couponService.find({ query: { type: 1, page: this.listQuery.page } })
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.couponHistoryList = res.data.data
          this.total = res.data.total
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    async getPointList() {
      try {
        let res = await pointService.find()
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.rollingData = res.data.rollingPrev
          this.lostData = res.data.lostPrev
          this.paybackData = res.data.paybackPrev
          this.attData = res.data.attendancePrev
          this.rollingDataNow = res.data.rollingNow
          this.lostDataNow = res.data.lostNow
          this.paybackDataNow = res.data.paybackNow
          this.attDataNow = res.data.attendanceNow
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    },
    onClickTab(val) {
      this.tabType = val
      this.getCouponList()
      this.getCouponHistoryList()
    }
  }
}
</script>
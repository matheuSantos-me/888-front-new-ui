<template>
  <el-row :class="{ 'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile }">
    <div v-if="logs" class="col-md-12 p-0">
      <div class="col-md-12 p-0 m-0 width-full height-full display-inlineblock" :class="layoutType == 'layout2' ? 'm-t-12 m-b-24' : 'm-t-10 m-b-20'">
        <div :class="`table-coupon-${themeType}`">
          <div class="table-header">
            <div class="text-center" :style="isMobile ? 'width: 80px;' : 'width: 150px;'">
              지급받은 날짜
            </div>
            <div class="text-center table-coupon-flex-field" :style="isMobile ? 'width: 80px;' : 'width: 100px;'">
              쿠폰금액
            </div>
            <div class="text-center" :style="isMobile ? 'width: 90px;' : 'width: 100px;'">
              상태
            </div>
            <div v-if="!isShowMobile" class="text-center" style="width: 150px">
              사용/만료 날짜
            </div>
          </div>
          <el-row v-for="(log, index) in logs" :key="index">
            <el-row class="table-coupon-tr">
              <div class="display-center table-coupon-td-first" :style="isMobile ? 'width: 80px;' : 'width: 150px;'">
                <div class="word-keep text-center">{{ parseTime(log.createdAt) }}</div>
              </div>
              <div class="display-center table-coupon-td table-coupon-flex-field" :style="isMobile ? 'width: 80px;' : 'width: 100px;'">
                {{ currencyFormat(log.money, "원") }}
              </div>
              <div class="display-center table-coupon-td" :style="isMobile ? 'width: 90px;' : 'width: 100px;'">
                <div class="width-80pro" :class="log.state | statusClassObject(themeType)">
                  {{ log.state === 0 ? "대기중" : log.state === 1 ? "회수" : log.state === 2 ? "사용완료" : "만료" }}
                </div>
              </div>
              <div v-if="!isShowMobile" class="display-center table-coupon-td" style="width: 150px">
                {{ parseTime(log.resultAt) }}
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
        쿠폰내역이 존재하지 않습니다.
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, parseTime } from "~/assets/js/utils";
import { statusClassObject } from "~/assets/js/data/uicommon.js";

export default {
  props: ["logs", "total", "limit", "page", "bonusSetting", "isShowMobile"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      payInSettings: "getPayInSettings",
      themeType: "getThemeType",
      layoutType: "getLayoutType"
    }),
  },
  filters: {
    statusClassObject: statusClassObject,
  },
  methods: {
    parseTime,
    currencyFormat,
    // 현재 페이지변경 이벤트
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    }
  },
};
</script>
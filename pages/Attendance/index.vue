<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" 
    :class="[
      `panel-page-${themeType}`, 
      {'p-0': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19'}
    ]" 
    :style="layoutType == 'layout5' ? 'max-width: 1920px;' : ''">
    <PageHeader v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'blue12' && themeType != 'yellow19'" :type="'attendance'" :isShowMobile="false" />
    <div class="panel-body position-relative height-100-pro" 
      :class="[{ 'p-l-14 p-r-14': !isMobile && (layoutType == 'layout1' || layoutType == 'layout2') }, getPageBackColor(themeType, 1), `text-contrast-${themeType}`]">
      <el-row v-if="currentUser">
        <el-row v-if="isWeekAttendance" :class="{'p-8': (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19') && isMobile}">
          <!-- 출석현황 설명 -->
          <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'orange13' && themeType != 'red11' && themeType != 'blue15' && themeType != 'red12' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19'"
            :class="{ 'display-center': !isMobile, 'm-t-48': layoutType == 'layout2' && !isMobile }"
            :style="layoutType == 'layout2' ? 'background: linear-gradient(180deg, rgba(255, 74, 0, 0) 61.14%, rgba(255, 74, 0, 0.1) 129.62%); border-radius: 6px; padding: 24px 0;' : 'margin-bottom: 46px; padding: 18px;'">
            <div :class="`attendance-comment-left-${themeType}`">
              <img :src="`/image/Attendance/${themeType}/Main.png`" :class="{ 'width-full': layoutType != 'layout2' }" />
            </div>
            <div class="float-left p-t-16" :class="[isMobile ? 'f-s-12' : 'f-s-13 p-l-40', {'p-8 text-center': layoutType == 'layout2' && isMobile}]" :style="isMobile ? '' : 'flex: 1 1;'">
              <el-row :class="isMobile ? 'text-center' : 'text-left'">
                <img v-if="themeType == 'orange11' || themeType == 'green'" :src="'/image/Attendance/logo-text.png'" />
                <div v-if="themeType == 'orange12'" class="f-s-24 f-w-700">
                  888 열심히 살았다
                </div>
                <div v-if="themeType == 'blue16'" class="f-s-24 f-w-700">
                  <span class="text-blue-1">스테이</span> 출석체크 이벤트!
                </div>
                <div v-if="themeType == 'yellow13'" class="f-s-24 f-w-700">
                  <span class="text-yellow13-1">심슨</span> 출석체크 이벤트!
                </div>
                <div v-if="themeType == 'purple11'" class="f-s-24 f-w-700">
                  <span class="text-purple11">쇼미더벳</span> 출석체크 이벤트!
                </div>
                <div v-if="themeType == 'purple12'" class="f-s-24 f-w-700">
                  <span class="text-purple12">히츠벳</span> 출석체크 이벤트!
                </div>
              </el-row>
              <el-row class="m-t-22 m-b-16 word-keep f-s-15">
                한 주간의 출석현황을 체크하여 차주 월요일 최대 100,000원까지 출석보상을 지급하는 이벤트입니다.
              </el-row>
              <el-row class="word-keep f-s-13" :class="[getTextColor(themeType, 1)]" style="line-height: 20px">
                일주일간 7일출석 + 최소 재입금 2회 이상 7일간의 1회 평균입금액의 {{ attendanceSetting.percent1 }}%<br />
                {{`일주일간 6일출석 + 최소 재입금 2회 이상 6일간의 1회 평균입금액의 ${attendanceSetting.percent2}%`}}
              </el-row>
            </div>
          </el-row>
          <el-row v-else :class="{'m-b-24': isMobile}">
            <el-row>
              <img v-if="themeType != 'blue12'" :src="`/image/Attendance/${themeType}/banner.png`" width="100%">
              <img v-else :src="isMobile ? `/image/Attendance/${themeType}/bannerm.png` : `/image/Attendance/${themeType}/banner.png`" width="100%">
              <div v-if="themeType == 'blue13'" class="carousel-caption-blue13 display-center">
                <div class="text-white text-center">
                  <img :src="`/image/Home/${themeType}/logo3.png`" width="385">
                  <p class="fadeInUpBig animated">
                    <strong>강남에서 매일 <span style="color: #e0be1c">출석체크!</span><br>출석만 해도 보상금지급!</strong>
                  </p>
                </div>
              </div>
            </el-row>
            <div v-if="themeType == 'yellow11'" class="carousel-caption-yellow11">
              <div class="text-white text-center">
                <img :src="`/image/Home/${themeType}/logo3.png`">
                <p class="fadeInUpBig animated">
                  <strong>레드불의 강력한 출석 보너스!</strong>
                </p>
              </div>
            </div>
            <el-row v-if="themeType != 'blue15' && themeType != 'red12'" class="text-center f-s-14 m-t-12 m-b-12 word-keep">
              한 주간의 출석현황을 체크하여 차주 월요일 최대 {{currencyFormat(attendanceSetting.maxAmount, "원")}}까지 출석보상을 지급하는 이벤트입니다.<br><br>
              일주일간 7일출석 + 최소 재입금 2회 이상 7일간의 1회 평균입금액의 {{ attendanceSetting.percent1 }}%<br>
              <span v-if="layoutType != 'layout6'">일주일간 6일출석 + 최소 재입금 2회 이상 6일간의 1회 평균입금액의 {{ attendanceSetting.percent2 }}%<br></span>
              출석보너스의 최대 지급액의 한도는 {{currencyFormat(attendanceSetting.maxAmount, "원")}}까지 지급됩니다.<br>
              출석은 입금하시면 자동으로 체크됩니다.
            </el-row>
          </el-row>
          <!-- 출석현황 설명 끝 -->
          <el-row :class="{'max-w-1280': layoutType == 'layout5'}" :style="layoutType == 'layout2' ? 'background: #161819; border-radius: 6px; margin-top: 24px; overflow: hidden;' : (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19') && !isMobile ? 'padding: 32px;' : ''">
            <el-row :class="{
              'bg-black35': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
              'bg-black41': themeType == 'yellow17', 
              'bg-blue902': themeType == 'blue19', 
              'bg-grey914': themeType == 'blue11', 
              'bg-black29': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow11') || layoutType == 'layout6',
              'bg-black49': themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19', 
              'bg-black39': themeType == 'yellow16', 
              'bg-black51': themeType == 'yellow11', 
              'bg-black22': themeType == 'yellow18'}" 
              :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? 'border-radius: 6px; padding-bottom: 24px;' :''">
              <!-- 월몇주차 -->
              <el-row
                v-if="weekNumberMonth"
                class="f-w-700"
                :class="[isMobile ? 'text-center' : 'text-left p-l-30', layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? `f-s-18 text-${themeType}` : 'f-s-22']"
                :style="layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' ? 'border-top: 2px solid #2f3438; padding-top: 38px;' : 'text-align: center !important; padding-top: 24px;'"
              >
                <img v-if="layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19'" :src="'/image/Attendance/Prev.png'" style="margin-top: -5px" class="m-r-3" />
                {{ weekNumberMonth.year }}년 <span :class="getTextColor(themeType, 1)">{{ weekNumberMonth.month }}월 {{ weekNumberMonth.weekNo }}주</span>
                <img v-if="layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19'" :src="'/image/Attendance/Next.png'" style="margin-top: -5px" class="m-l-3" />
              </el-row>
              <!-- 월몇주차 끝 -->
              <!-- 미션1 타이틀 -->
              <el-row
                class="f-w-700"
                :class="[
                  isMobile ? 'text-center width-full' : 'p-l-30', layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? `f-s-18 text-${themeType}` : 'f-s-22',
                  {
                    'text-center width-full': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19',
                    'text-left': layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' && !isMobile,
                  },
                ]"
                :style="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType != 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? 'margin: 24px 0 24px 0' : 'margin: 44px 0 22px 0'"
              >
                {{layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? '<출석현황>' : '미션 1. 첫입금 출석현황'}}
              </el-row>
              <!-- 미션1 타이틀 끝 -->
              <!-- 피시 출석현황 상태 -->
              <el-row v-if="!isMobile">
                <el-row v-if="attendance" class="text-center f-s-14"
                  :class="[
                    { 'p-l-30 p-r-30': !isMobile && layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19', 
                      'p-l-24 p-r-24': !isMobile && (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19') },
                  ]"
                  :style="layoutType == 'layout2' ? 'margin-bottom: 24px;' : ''">
                  <div v-for="(day, dayIndex) in attendance.days" :key="dayIndex" class="float-left p-l-5 p-r-5"
                    :class="{ 
                      'width-14pro': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6', 
                      'm-t-24': layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' }">
                    <el-row :class="`bg-attendance-weekday-${themeType}`">
                      {{ dayIndex | filterKoreanWeekOfDay }}
                    </el-row>
                    <el-row :class="{'b-r-6 overflow-hidden': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}">
                      <el-row v-if="layoutType != 'layout2'" class="text-right p-r-5" :class="[`bg-attendance-main-${themeType}`]">
                        {{ getAttendanceDate(dayIndex) }}
                      </el-row>
                      <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                        <img v-if="dayIndex < weekday || (dayIndex == weekday && day.count > 0)" width="100%" style="max-width: 104px"
                          :src="day.count > 0 ? `/image/Attendance/${themeType}/Attendance.png` : `/image/Attendance/${themeType}/Absence.png`" />
                        <img v-else :src="'/image/Attendance/none.png'" width="100%" style="max-width: 104px" />
                      </el-row>
                      <el-row v-if="layoutType == 'layout2'" class="text-center p-b-16" :class="[`bg-attendance-main-${themeType}`]">
                        {{ getAttendanceDate(dayIndex) }}
                      </el-row>
                    </el-row>
                  </div>
                </el-row>
                <el-row v-else class="text-center f-s-14" :class="{ 'p-l-30 p-r-30': !isMobile }" style="margin-bottom: 22px">
                  <div v-for="(day, dayIndex) in dayList" :key="dayIndex" class="attendance-1"
                    :class="{ 'width-14pro': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' }">
                    <el-row :class="`bg-attendance-weekday-${themeType}`">
                      {{ dayIndex | filterKoreanWeekOfDay }}
                    </el-row>
                    <el-row v-if="layoutType != 'layout2'" class="text-right p-r-5" :class="[`bg-attendance-main-${themeType}`]">
                      {{ getAttendanceDate(dayIndex) }}
                    </el-row>
                    <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                      <img v-if="dayIndex < weekday" :src="`/image/Attendance/${themeType}/Absence.png`" width="100%" style="max-width: 104px" />
                      <img v-else :src="'/image/Attendance/none.png'" width="100%" style="max-width: 104px" />
                    </el-row>
                    <el-row v-if="layoutType == 'layout2'" class="text-center p-b-16" :class="[`bg-attendance-main-${themeType}`]">
                      {{ getAttendanceDate(dayIndex) }}
                    </el-row>
                  </div>
                </el-row>
              </el-row>
              <!-- 피시 출석현황 상태 끝 -->
              <!-- 모바일 출석현황 상태 -->
              <el-row v-if="isMobile">
                <div class="display-center width-50pro float-left m-t-20" v-for="(index) in dayList" :key="`mAttendance${index}`">
                  <div>
                    <el-row class="text-center m-b-10" :class="`bg-attendance-weekday-${themeType}`">
                      {{ index | filterKoreanWeekOfDay }}
                    </el-row>
                    <el-row v-if="layoutType != 'layout2'" class="text-right p-r-5" :class="`bg-attendance-main-${themeType}`">
                      {{ getAttendanceDate(index) }}
                    </el-row>
                    <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                      <img v-if="index <= weekday" :src="attendance && attendance.days[index].count > 0 ? `/image/Attendance/${themeType}/Attendance.png` : `/image/Attendance/${themeType}/Absence.png`" width="104" />
                      <div v-else style="width: 104px; height: 104px"></div>
                    </el-row>
                    <el-row v-if="layoutType == 'layout2'" class="text-center p-b-16" :class="[`bg-attendance-main-${themeType}`]">
                      {{ getAttendanceDate(index) }}
                    </el-row>
                  </div>
                </div>
              </el-row>
              <!-- 모바일 출석현황 상태 끝 -->
            </el-row>
            <!-- 미션2 -->
            <div v-if="layoutType != 'layout2'" class="m-b-50 display-inlineblock width-full" 
              :class="{ 'p-l-30': !isMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' }" 
              :style="(layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19') && !isShowMobile ? 'display: flex !important; justify-content: space-between; margin-top: 32px;' : ''">
              <div :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? `attendance2-panel-left-${themeType}` : 'attendance2-panel-left'">
                <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19'" class="f-s-22 f-w-700" :class="isMobile ? 'text-center' : 'text-left'" style="margin-bottom: 22px">
                  미션 2. 재입금 2회미션
                </el-row>
                <el-row v-if="(layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19') && weekNumberMonth" class="f-s-18 f-w-700 text-center" :class="`text-${themeType}`" style="margin-bottom: 22px">
                  {{ weekNumberMonth.year }}년 {{ weekNumberMonth.month }}월 {{ weekNumberMonth.weekNo }}주 재입금 현황
                </el-row>
                <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19'" class="m-b-16">
                  7일 내내 입금을 하셨더라도 재입금 미션을 완료하지 않는다면<br>
                  출석체크 이벤트 대상에서 제외됩니다.
                </el-row>
                <el-row class="display-center f-s-14">
                  <div class="float-left">
                    <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                      재입금 1회
                    </el-row>
                    <el-row class="m-t-10 text-right p-r-5" :class="`bg-attendance-main-${themeType}`">
                      1
                    </el-row>
                    <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                      <img v-if="attendance" :src="attendance && attendance.days.findIndex((day) => day.count > 1) > -1 ? `/image/Attendance/${themeType}/Re-payin.png` : `/image/Attendance/${themeType}/Re-payin-no.png`" width="104" />
                      <div v-else style="width: 104px; height: 104px"></div>
                    </el-row>
                  </div>
                  <div class="float-left m-l-10">
                    <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                      재입금 2회
                    </el-row>
                    <el-row class="m-t-10 text-right p-r-5" :class="`bg-attendance-main-${themeType}`">
                      2
                    </el-row>
                    <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                      <img v-if="attendance" :src="attendance && attendance.days.filter((day) => day.count > 1).length > 1 ? `/image/Attendance/${themeType}/Re-payin.png` : `/image/Attendance/${themeType}/Re-payin-no.png`" width="104" />
                      <div v-else style="width: 104px; height: 104px"></div>
                    </el-row>
                  </div>
                </el-row>
              </div>
              <div v-if="!isMobile && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19'" class="float-left" style="height: 270px; border-right: 2px solid #2f343a"></div>
              <div :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? `attendance2-panel-right-${themeType}` : 'attendance2-panel-right'">
                <el-row class="f-w-700" :class="[isMobile || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? 'text-center' : 'text-left', layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? `f-s-18 text-${themeType}` : 'f-s-22']" style="margin-bottom: 22px">
                  보너스 지급 예상 통계
                </el-row>
                <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19'" class="m-b-16">
                  7일 내내 입금을 하셨더라도 재입금 미션을 완료하지 않는다면<br>
                  출석체크 이벤트 대상에서 제외됩니다.
                </el-row>
                <el-row class="display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'">
                  <div class="float-left" :class="isMobile ? 'width-144' : 'width-200'">
                    <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                      금주 1회 입금 평균액
                    </el-row>
                    <el-row class="m-t-10" :class="`bg-attendance-main-${themeType}`" style="height: 145px; padding-top: 65px">
                      {{ currencyFormat(averageMoney, "원") }}
                    </el-row>
                  </div>
                  <div class="float-left m-l-10" :class="isMobile ? 'width-144' : 'width-200'">
                    <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                      올출석시 예상 보너스
                    </el-row>
                    <el-row class="m-t-10" :class="`bg-attendance-main-${themeType}`" style="height: 145px; padding-top: 65px">
                      {{ currencyFormat(expectedMoney, "원") }}
                    </el-row>
                  </div>
                </el-row>
              </div>
            </div>
            <div v-else class="m-b-48 display-inlineblock width-full" :class="{ 'p-l-30': !isMobile }">
              <div :class="`attendance2-panel-left-${themeType}`">
                <div class="display-inlineblock" :class="{'float-right': !isMobile}">
                  <el-row class="f-s-22 f-w-700 text-center" style="margin-bottom: 24px">
                    미션 2. 재입금 2회미션
                  </el-row>
                  <el-row class="f-s-14">
                    <div class="float-right b-r-6 overflow-hidden">
                      <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                        재입금 2회
                      </el-row>
                      <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                        <img v-if="attendance" :src="attendance && attendance.days.filter((day) => day.count > 1).length > 1 ? `/image/Attendance/${themeType}/Re-payin.png` : `/image/Attendance/${themeType}/Re-payin-no.png`" width="104" />
                        <div v-else style="width: 104px; height: 104px"></div>
                      </el-row>
                      <el-row class="text-center p-r-5" :class="`bg-attendance-main-${themeType}`">
                        2
                      </el-row>
                    </div>
                    <div class="float-right m-r-10 b-r-6 overflow-hidden">
                      <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                        재입금 1회
                      </el-row>
                      <el-row class="p-l-20 p-r-20 p-b-20" :class="`bg-attendance-main-${themeType}`">
                        <img v-if="attendance" :src="attendance && attendance.days.findIndex((day) => day.count > 1) > -1 ? `/image/Attendance/${themeType}/Re-payin.png` : `/image/Attendance/${themeType}/Re-payin-no.png`" width="104" />
                        <div v-else style="width: 104px; height: 104px"></div>
                      </el-row>
                      <el-row class="text-center p-r-5" :class="`bg-attendance-main-${themeType}`">
                        1
                      </el-row>
                    </div>
                  </el-row>
                </div>
              </div>
              <div class="attendance2-panel-center">
                <div style="position: absolute; left: calc(50% + 8px); bottom: 180px; border: 2px solid #f56406; width: 16px; height: 16px; border-radius: 50%;"></div>
              </div>
              <div :class="`attendance2-panel-right-${themeType}`">
                <div class="display-inlineblock" :class="{'float-left': !isMobile}">
                  <el-row class="f-s-22 f-w-700 text-center" style="margin-bottom: 24px">
                    보너스 지급 예상 통계
                  </el-row>
                  <el-row :class="{'f-s-12': isMobile, 'f-s-14': !isMobile && themeType != 'white'}">
                    <div class="float-left m-r-10 b-r-6 overflow-hidden" :class="isMobile ? 'width-144' : 'width-200'">
                      <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                        올출석시 예상 보너스
                      </el-row>
                      <el-row :class="`bg-attendance-main-${themeType}`" style="height: 145px; padding-top: 65px">
                        {{ currencyFormat(expectedMoney, "원") }}
                      </el-row>
                    </div>
                    <div class="float-left b-r-6 overflow-hidden" :class="isMobile ? 'width-144' : 'width-200'">
                      <el-row class="p-t-5 p-b-5" :class="`bg-attendance-weekday-${themeType}`">
                        금주 1회 입금 평균액
                      </el-row>
                      <el-row :class="`bg-attendance-main-${themeType}`" style="height: 145px; padding-top: 65px">
                        {{ currencyFormat(averageMoney, "원") }}
                      </el-row>
                    </div>
                  </el-row>
                </div>
              </div>
            </div>
            <!-- 미션2 끝 -->
          </el-row>
        </el-row>
        <!-- 키링 -->
        <el-row v-if="!isWeekAttendance && attendance" class="m-b-30">
          <el-row v-if="themeType == 'red12' || themeType == 'orange13' || themeType == 'yellow20' || themeType == 'blue15' || themeType == 'gold12' || themeType == 'red15' || themeType == 'orange12' || themeType == 'yellow15'" class="m-b-20">
            <img :src="`/image/Attendance/${themeType}/banner.jpg`" width="100%">
          </el-row>
          <el-row v-if="themeType == 'blue13'">
            <img :src="`/image/Attendance/${themeType}/banner.png`" width="100%">
            <div v-if="themeType == 'blue13'" class="carousel-caption-blue13 display-center">
              <!-- <div class="text-white text-center">
                <img :src="`/image/Home/${themeType}/logo3.png`" width="385">
                <p class="fadeInUpBig animated">
                  <strong>레드벨벳에서 매일 <span style="color: #e0be1c">출석체크!</span><br>출석만 해도 보상금지급!</strong>
                </p>
              </div> -->
            </div>
          </el-row>
          <div class="width-full cursor" @click="requestAttendance()" style="position: relative;">
            <div class="width-full p-10 f-s-16 f-w-700 text-center text-gold" :class="`bg-black-button-${themeType}`">
              <span>{{ today }} ({{ weekday | filterKoreanWeekOfDay }}) 출석체크 및 보상받기</span>
              <img :src="'/image/Attendance/check.png'" width="20" />
            </div>
            <div v-if="!isMobile" class="position-absolute text-white" style="right: 10px; top: 13px">
              <el-row>
                *일 기준 {{ currencyFormat(attendanceSetting.monthMinMoney, "원") }} 이상 입금 시 지급
              </el-row>
            </div>
          </div>
          <el-row :class="isMobile ? 'p-t-5' : 'p-t-20'">
            <el-row v-if="!isMobile">
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-red905" :class="`bg-attendance-week-${themeType}`">
                  일요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  월요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  화요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  수요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  목요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  금요일
                </div>
              </div>
              <div class="float-left p-l-2 p-r-2 width-14pro text-center">
                <div class="p-t-5 p-b-5 text-white" :class="`bg-attendance-week-${themeType}`">
                  토요일
                </div>
              </div>
            </el-row>
            <div v-for="(week, weekIndex) in attendance.data" :key="weekIndex" class="m-t-2">
              <div v-for="(day, dayIndex) in week.week" v-if="(day.date != -1 && isMobile) || !isMobile" :key="dayIndex" class="float-left text-center p-t-2 p-b-2" :class="isMobile ? 'width-50pro p-l-5 p-r-5' : 'width-14pro p-l-2 p-r-2'">
                <div class="p-t-5 p-b-5 text-red905" :class="day.date == -1 ? `bg-attendance-none-${themeType}` : `bg-attendance-${themeType}`">
                  <el-row class="text-right p-r-10 height-17" :class="`text-${themeType}`">
                    {{ day.date != -1 ? day.date : "" }}
                  </el-row>
                  <el-row class="text-center p-t-5 p-b-10" :class="`text-${themeType}`">
                    <img :src="getImageUrl(day)" width="50%" />
                  </el-row>
                  <el-row v-if="day.bonusMoney > 0" class="p-t-4 p-b-4 height-25"
                    :class="{
                      'text-black bg-gold11': themeType == 'gold11',
                      'text-blue16 bg-blue16': themeType == 'blue16',
                      'text-black bg-gold-grad': themeType == 'gold12',
                      'text-black bg-yellow20': themeType == 'red15',
                      'text-white bg-red12': themeType == 'red12',
                      'text-white bg-blue15': themeType == 'blue15',
                      'text-primary': themeType == 'red15',
                      'text-red15': themeType == 'yellow18'
                    }"
                    style="border-radius: 5px">
                    {{ day.bonusMoney }} 포인트 지급완료
                  </el-row>
                  <el-row v-else class="text-black p-t-4 p-b-4 height-25" :class="day.date == -1 ? `bg-attendance-none-${themeType}` : `bg-attendance-${themeType}`" style="border-radius: 5px"></el-row>
                </div>
              </div>
            </div>
          </el-row>
        </el-row>
        <!-- 키링 끝 -->
      </el-row>
      <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
    </div>
  </div>
  <Preview v-show="!currentUser" />
</el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, convertToKoreanTime } from "~/assets/js/utils";
import Preview from "~/components/Auth/Preview.vue";
import { getTextColor, getPageBackColor} from "~/assets/js/data/uicommon";
import PageHeader from "~/components/Header/PageHeader";

const attendanceService = feathers.service("client-attendance");
const reqService = feathers.service("/client-request");
const mainService = feathers.service("main");

attendanceService.timeout = 60000
reqService.timeout = 60000;

export default {
  layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    PageHeader,
    Preview, // 로그인유도 콤포넌트
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      attendanceSetting: "getAttendance",
      screenWidth: "getScreenWidth",
      isWeekAttendance: "getIsWeekAttendance"
    }),
  },
  filters: {
    filterKoreanWeekOfDay(day) {
      let weekOfDay = "";
      switch (day) {
        case 0:
          weekOfDay = "월";
          break;
        case 1:
          weekOfDay = "화";
          break;
        case 2:
          weekOfDay = "수";
          break;
        case 3:
          weekOfDay = "목";
          break;
        case 4:
          weekOfDay = "금";
          break;
        case 5:
          weekOfDay = "토";
          break;
        case 6:
          weekOfDay = "일";
          break;
      }
      return weekOfDay;
    },
  },
  watch: {
    screenWidth(val) {
      this.initframe()
    }
  },
  data() {
    return {
      attendance: null, // 출석현황 데이타
      averageMoney: 0, // 1회 평균입금액
      expectedMoney: 0, // 예상 지급금액
      weekNumberMonth: null, // 월 몇주차
      expectedMoney: 0,
      weekday: 0,
      dayList: [0, 1, 2, 3, 4, 5, 6],
      monday: convertToKoreanTime(new Date()),
      today: null,
      isShowMobile: false,
      now: convertToKoreanTime(new Date()),
      loadingAttendance: false
    };
  },
  created() {
    this.getAttendance();

    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Attendance')
    this.initframe()
    
    mainService.off('attendanceCreated')
    mainService.on('attendanceCreated', (res) => {
      this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      if (res.code == 1) {
        this.attendance = res.data;
      }
      this.loadingAttendance = false
      this.$nuxt.$loading.finish();
    })
  },
  updated() {
    this.$store.commit("initTimeLeft");
  },
  methods: {
    currencyFormat,
    getTextColor,
    getPageBackColor,
    convertToKoreanTime,
    // 프레임사이즈 설정
    initframe() {   
      if (this.screenWidth > 1440) {
        this.isShowMobile = false
      } else {
        this.isShowMobile = true
      }
    },
    // 이미지주소 얻기
    getImageUrl(day) {
      if (day.total >= this.attendanceSetting.monthMinMoney) {
        return "/image/Attendance/" + this.themeType + "/Attendance.png";
      } else {
        if (day.date == -1 || day.date > this.now.getDate()) {
          return "/image/Attendance/empty.png";
        }
        return "/image/Attendance/" + this.themeType + "/Absence2.png";
      }
    },
    // 출석현황 리스트 얻기
    async getAttendance() {
      try {
        if (!this.currentUser) return;
        let res = await attendanceService.find();
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        if (this.isWeekAttendance) {
          let tempAverageMoney = 0;
          if (res.data.attendances[0]) {
            // 출석현황 데이타가 있는경우 1회평균입금액 계산
            let weekPayInCount = 0;
            for (
              let dayIdx = 0;
              dayIdx < res.data.attendances[0].days.length;
              dayIdx++
            ) {
              weekPayInCount += res.data.attendances[0].days[dayIdx].count;
            }
            tempAverageMoney = parseInt(
              res.data.attendances[0].weektotal / weekPayInCount
            );
          }
          this.attendance = res.data.attendances[0];
          this.weekNumberMonth = res.data.weekNumberMonth;
          this.averageMoney = tempAverageMoney;
          this.weekday = res.data.weekday;
          this.monday = res.data.monday;

          // 올 출석시 예상지급금액은 30%로 계산
          this.expectedMoney =
            this.averageMoney * this.attendanceSetting.percent1 * 0.01;
          if (this.expectedMoney > this.attendanceSetting.maxAmount)
            this.expectedMoney = this.attendanceSetting.maxAmount;
        } else {
          this.attendance = res.data.attendances;
          this.today = res.data.today;
          this.weekday = res.data.weekday;
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    // 출석체크
    async requestAttendance() {
      try {
        if (this.loadingAttendance) return

        this.loadingAttendance = true
        this.$nuxt.$loading.start();
        let res = await reqService.patch(null, {requestType: 3})
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loadingAttendance = false
          this.$nuxt.$loading.finish();
        }
      } catch (err) {
        this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
        this.loadingAttendance = false
        this.$nuxt.$loading.finish();
      }
    },
    getAttendanceDate(index) {
      let date = new Date(this.monday)
      date = new Date(date.getTime() - (9 * 60) * 60000)
      date.setDate(date.getDate() + index)
      return date.getDate()
    },
    // 메시지 모달
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
  },
};
</script>
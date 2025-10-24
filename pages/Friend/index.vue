<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="layoutType != 'layout3' && ((layoutType != 'layout5' && themeType != 'blue11') || themeType == 'blue11') && layoutType != 'layout6' ? `panel-page-${themeType}` : 'p-0 bg-grey923'">
    <PageHeader v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'red15'" :type="'friend'" :isShowMobile="isShowMobile" />
    <div class="panel-body height-100-pro" style="position: relative"
      :class="[{ 'p-l-14 p-r-14': !isMobile && layoutType == 'layout1' }, getPageBackColor(themeType, 1), `text-contrast-${themeType}`]">
      <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'orange13' || themeType == 'gold12' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15'">
        <img v-if="themeType != 'yellow15' && themeType != 'blue12'" :src="`/image/Friend/${themeType}/banner.jpg`" width="100%">
        <img v-else :src="isMobile ? `/image/Friend/${themeType}/bannerm.jpg` : `/image/Friend/${themeType}/banner.jpg`" width="100%">
        <div v-if="themeType == 'blue13'" class="carousel-caption-blue13 display-center">
          <!-- <div class="text-white text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" width="385">
            <p class="fadeInUpBig animated">
              <strong>지인들도 <span style="color: #e0be1c">레드벨벳</span>으로 데려오자!</strong><br>지인추천 시 쏟아지는 혜택들~!
            </p>
          </div> -->
        </div>
        <div v-if="themeType == 'yellow11'" class="carousel-caption-yellow11">
          <div class="text-white text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`">
            <p class="fadeInUpBig animated">
              <strong>지인추천 시 보너스!</br>추천할수록 쏟아지는 레드불 보너스</strong>
            </p>
          </div>
        </div>
      </el-row>
      <el-row v-if="currentUser" 
        :class="{
          'p-8': (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12') && isMobile,
          'p-l-32 p-r-32': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12') && !isMobile,
          'max-w-1280': layoutType == 'layout5'
        }">
        <!-- 지인추천 이벤트 설명 -->
        <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red12' && themeType != 'blue15' && themeType != 'red11' && themeType != 'orange13' && themeType != 'gold12' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'red15' && themeType != 'gold12'" class="p-24 p-l-18 p-r-18"
          :class="{ 'display-flex': !isMobile, 'm-t-48': !isMobile && layoutType == 'layout2', 'm-t-8': isMobile && layoutType == 'layout2' }"
          :style="layoutType == 'layout2' ? 'background: linear-gradient(180deg, rgba(255, 74, 0, 0) 61.14%, rgba(255, 74, 0, 0.1) 129.62%); border-radius: 6px;' : ''">
          <div :class="`friend-main-${themeType}`">
            <img :src="`/image/Friend/${themeType}/logo.png`" :class="{ 'm-r-24': layoutType == 'layout2' && !isMobile, 'width-full': layoutType != 'layout2' }" />
            <img v-if="layoutType == 'layout2'" :src="`/image/Friend/${themeType}/left1.png`" style="position: absolute; left: 5%;" :style="isMobile ? 'top: 7%' : 'top: 10%'" />
            <img v-if="layoutType == 'layout2'" :src="`/image/Friend/${themeType}/left2.png`" style="position: absolute; left: 10%;" :style="isMobile ? 'top: 45%' : 'top: 70%'" />
            <img v-if="layoutType == 'layout2'" :src="`/image/Friend/${themeType}/right1.png`" style="position: absolute; right: 10%;" :style="isMobile ? 'top: 7%' : 'top: 10%'" />
            <img v-if="layoutType == 'layout2'" :src="`/image/Friend/${themeType}/right2.png`" style="position: absolute; right: 5%;" :style="isMobile ? 'top: 45%' : 'top: 70%'" />
          </div>
          <div :class="[isMobile ? 'width-full text-center' : 'float-left', {'p-l-24 p-r-24': layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)}]"
            :style="isMobile ? 'padding-bottom: 24px;' : 'padding-top: 90px; flex: 1 1;'">
            <el-row class="f-w-700 m-t-22 m-b-16" :class="`friend-title-${themeType}`">
              {{ solutionTitle }}의 지인추천 이벤트
            </el-row>
            <el-row v-if="themeType != 'red15' && themeType != 'blue16' && themeType != 'gold12'" class="word-keep f-s-16" style="line-height: 20px">
              회원님의 실지인을 추천하여
              <span :class="getTextColor(themeType, 1)">가입코드 {{ adminCode }}</span>
              기재 후 추천아이디로 회원님의 아이디를 기재하여 가입을 성사시키면
              업계 최고 혜택을 지급하는 이벤트입니다.
            </el-row>
            <el-row v-if="themeType == 'red15' || themeType == 'blue16'" class="word-keep f-s-16" style="line-height: 20px">
              회원님의 실지인을 추천하여 추천아이디로 회원님의 아이디를 기재하여
              가입을 성사시키면 업계 최고 혜택을 지급하는 이벤트입니다.
              지인추천을 원하시면 고객센터로 문의하시기바랍니다^^
            </el-row>
          </div>
        </el-row>
        <!-- 지인추천 이벤트 설명 끝 -->
        <!-- 지인추천 이벤트1 설명 -->
        <el-row v-if="!currentUser.isBlockFriend1">
          <el-row v-if="
            layoutType != 'layout3' && 
            layoutType != 'layout5' && 
            layoutType != 'layout6' && 
            themeType != 'red13' && 
            themeType != 'red14' && 
            themeType != 'yellow12' && 
            themeType != 'orange14' && 
            themeType != 'blue12' && 
            themeType != 'yellow19' && 
            themeType != 'red15' && 
            themeType != 'gold12'" class="p-12 m-t-24" :class="{'display-center': !isMobile, 'bg-grey916': layoutType == 'layout2'}">
            <div :class="isMobile ? 'width-full text-center' : 'float-left'" style="width: calc(50% - 44px)" :style="isMobile ? '' : 'margin-top: -40px'">
              <el-row
                v-if="
                  themeType != 'orange12' &&
                  themeType != 'blue14' &&
                  themeType != 'blue17' &&
                  themeType != 'yellow13' &&
                  themeType != 'orange13' &&
                  themeType != 'red12' &&
                  themeType != 'blue15' &&
                  themeType != 'red11' &&
                  themeType != 'purple11' &&
                  themeType != 'red13' &&
                  themeType != 'red14' &&
                  themeType != 'yellow12' &&
                  themeType != 'orange14' &&
                  themeType != 'blue12' &&
                  themeType != 'yellow19' &&
                  themeType != 'purple12' &&
                  themeType != 'gold12'
                "
                class="f-s-22 f-w-700 m-b-10">
                <span :class="getTextColor(themeType, 1)">지인추천 보너스 혜택</span>1.
              </el-row>
              <el-row v-if="layoutType == 'layout2' && isMobile">
                <el-row class="text-orange902 f-s-22 f-w-900 m-b-8">지인추천 보너스 혜택 1.</el-row>
                <el-row class="f-s-20">지인 추천하고 최대 30만원 받자!</el-row>
                <el-row><img :src="`/image/Friend/${themeType}/arrow-a.png`" class="m-t-24 m-b-24"></el-row>
              </el-row>
              <img v-if="layoutType != 'layout2'" :src="`/image/Friend/${themeType}/event1.png`" style="width: 100%" />
              <img v-if="layoutType == 'layout2' && !isMobile" :src="`/image/Friend/${themeType}/event1.svg`" style="width: 100%" />
            </div>
            <div :class="isMobile ? 'width-full' : 'float-left'" class="text-center" style="width: 88px">
              <img v-if="themeType == 'orange11' || themeType == 'green'" :src="`/image/Friend/${themeType}/arrow.png`" :class="{ 'ele-rotate m-t-5 m-b-5': isMobile }" />
            </div>
            <div :class="[isMobile ? 'width-full' : 'float-left', `friend-comment-${themeType}`]">
              <el-row class="f-s-26 f-w-700 text-center" :class="{ 'text-orange12': layoutType == 'layout2' }">보너스 지급 조건</el-row>
              <el-row class="m-t-20 word-keep">
                <p v-html="friendSetting.event1.rule"></p>
              </el-row>
            </div>
          </el-row>
          <el-row v-else class="text-center word-keep" :class="isMobile ? 'f-s-13' : 'f-s-14'">
            <el-row v-if="themeType != 'yellow21' && themeType != 'gold12' && themeType != 'yellow15'" style="padding: 16px 0px 40px 0px;">
              회원님의 실지인을 추천하여 가입코드 {{themeType == 'red15' ? '' : adminCode}} 기재 후<br>
              추천아이디로 회원님의 아이디를 기재하여 가입을 성사시키면 업계 최고 혜택을 지급하는 이벤트입니다.
            </el-row>
            <el-row v-if="themeType == 'yellow21'" style="padding: 16px 0px 40px 0px;">
              회원님의 가입코드를 받으신 후 실지인을 추천하여<br>
              해당 코드 기입 후 회원님의 아이디를 기재하여 가입을 성사시키면 업계 최고 혜택을 지급하는 이벤트입니다.
            </el-row>
            <el-row v-if="themeType == 'yellow15'" style="padding: 16px 0px 40px 0px;">
              지인 가입 코드는 1:1 문의로 발급 가능하며 추천아이디로 회원님의 아이디를 기재하여 가입을 성사시키면 업계 최고 혜택을 지급하는 이벤트입니다
            </el-row>
            <el-row v-if="themeType == 'gold12'" style="padding: 16px 0px 40px 0px;">
              고객센터 1:1 문의시 가입코드를 발급해드리고 있으며 업계 최고 혜택을 지급하는 이벤트입니다.
            </el-row>
            <el-row v-for="(rule, ruleIndex) in friend1Rule" :key="`rule2-${ruleIndex}`">
              <el-row v-if="ruleIndex % 2 == 0 && themeType != 'yellow14'" class="p-12 b-r-6 f-s-16" :class="[`text-${themeType}`, (layoutType == 'layout3' && themeType != 'yellow11') || layoutType == 'layout6' ? 'bg-black29' : themeType == 'yellow17' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : themeType == 'yellow11' ? 'bg-black51' : themeType == 'yellow18' ? 'bg-black22' : 'bg-black35']">
                {{rule}}
              </el-row>
              <el-row v-else class="p-12">
                {{rule}}
              </el-row>
            </el-row>
          </el-row>
        </el-row>
        <!-- 지인추천 이벤트1 설명 끝 -->
        <!-- 지인추천 이벤트1 리스트 -->
        <el-row v-if="!currentUser.isBlockFriend1">
          <el-row class="f-s-16 f-w-700 p-16 p-l-24" 
            :class="[`border-bottom-1-${themeType} text-${themeType}`, {
              'bg-black30': themeType == 'yellow20' || themeType == 'red13' || themeType == 'blue13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12' || themeType == 'yellow21' ||  themeType == 'yellow16',
              'bg-blue903': themeType == 'gold13',
              'bg-black51': themeType == 'yellow11' || themeType == 'yellow14',
              'bg-black22': themeType == 'yellow18',
              'bg-black41': themeType == 'yellow17',
              'bg-blue902': themeType == 'blue19',
              'bg-grey914': themeType == 'blue11'
            }]" 
            :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12' ? 'border-radius: 6px 6px 0px 0px; margin-top: 36px; text-align: center;' : ''"> 지인 입금 현황 </el-row>
          <el-row>
            <div :class="`table-history-${themeType}`">
              <div class="table-header">
                <div class="display-center" :style="isMobile ? 'width: 70px;' : 'width: 160px;'">
                  지인 아이디
                </div>
                <div v-if="!isMobile" class="display-center" style="width: 160px">
                  닉네임
                </div>
                <div v-if="!isMobile" class="display-center" style="width: 160px">
                  가입일
                </div>
                <div class="display-center" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                  입금수
                </div>
                <div class="display-center table-history-flex-field">입금액</div>
                <div class="text-center" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                  1번 보너스지급 현황
                </div>
                <div class="text-center" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                  2번보너스지급현황
                </div>
              </div>
              <el-row v-for="(event1, index1) in eventList1" :key="index1">
                <el-row class="table-history-tr">
                  <div class="text-center table-history-td-first" :style="isMobile ? 'width: 70px;' : 'width: 160px;'">
                    {{ event1.userLoginId }}
                  </div>
                  <div v-if="!isMobile" class="text-center table-history-td" style="width: 160px">
                    {{ event1.nickname }}
                  </div>
                  <div v-if="!isMobile" class="text-center table-history-td" style="width: 160px">
                    {{ event1.allowedAt | parseTime }}
                  </div>
                  <div class="text-center table-history-td" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                    {{ event1.payIn.count }}
                  </div>
                  <div class="text-center table-history-td table-history-flex-field">
                    {{ currencyFormat(event1.payIn.money, "원") }}
                  </div>
                  <div class="text-center table-history-td" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                    <div v-if="event1.friendEventState1 !== null && event1.friendEventState1 !== undefined" :class="(event1.friendEventState1 + 1) | statusClassObject(themeType)">
                      {{!event1.friendEventState1 || event1.friendEventState1 === 0 ? "미지급" : "지급완료"}}
                    </div>
                    <div v-else class="status-lose">미지급</div>
                  </div>
                  <div class="text-center table-history-td" :style="isMobile ? 'width: 60px;' : 'width: 160px;'">
                    <div v-if="event1.friendEventState1 !== null && event1.friendEventState1 !== undefined" :class="(event1.friendEventState2 + 1) | statusClassObject(themeType)">
                      {{!event1.friendEventState2 || event1.friendEventState2 === 0 ? "미지급" : "지급완료"}}
                    </div>
                    <div v-else class="status-lose">미지급</div>
                  </div>
                </el-row>
              </el-row>
            </div>
          </el-row>
          <el-row v-if="!eventList1 || eventList1.length === 0" class="width-full display-center">
            <el-row class="p-t-24 p-b-48">
              <el-row v-if="layoutType == 'layout2'" class="text-center">
                <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
              </el-row>
              아직 추천된 지인이 없습니다.
            </el-row>
          </el-row>
          <el-row v-if="eventList1 && eventList1.length > 0" class="display-inlineblock width-full p-30">
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
        <!-- 지인추천 이벤트1 리스트 -->
        <!-- 지인추천 이벤트2 설명 -->
        <el-row v-if="!currentUser.isBlockFriend2 && friendSetting.event2.isUse" :style="layoutType == 'layout1' ? 'border-top: 2px solid #2f3438' : ''">
          <el-row v-if="
            layoutType != 'layout3' && 
            layoutType != 'layout5' && 
            layoutType != 'layout6' && 
            themeType != 'red13' && 
            themeType != 'red14' && 
            themeType != 'yellow12' && 
            themeType != 'orange14' && 
            themeType != 'blue12' && 
            themeType != 'yellow19' && 
            themeType != 'red15' && 
            themeType != 'gold12'" class="p-12" :class="{'display-center': !isMobile, 'bg-grey916': layoutType == 'layout2'}">
            <div
              :class="isMobile ? 'width-full text-center' : 'float-left'"
              style="width: calc(50% - 44px)"
              :style="isMobile ? '' : 'margin-top: -40px'"
            >
              <el-row
                v-if="
                  themeType != 'orange12' &&
                  themeType != 'blue14' &&
                  themeType != 'blue17' &&
                  themeType != 'yellow13' &&
                  themeType != 'red15' &&
                  themeType != 'gold12' &&
                  themeType != 'orange13' &&
                  themeType != 'red12' &&
                  themeType != 'blue15' &&
                  themeType != 'red11' &&
                  themeType != 'purple11' &&
                  themeType != 'red13' &&
                  themeType != 'red14' &&
                  themeType != 'yellow12' &&
                  themeType != 'orange14' &&
                  themeType != 'blue12' &&
                  themeType != 'yellow19' &&
                  themeType != 'purple12'
                "
                class="f-s-22 f-w-700 m-b-10"
              >
                <span :class="getTextColor(themeType, 1)">지인추천 보너스 혜택</span>2.
              </el-row>
              <el-row v-if="layoutType == 'layout2' && isMobile">
                <el-row class="text-orange902 f-s-22 f-w-900 m-b-8">지인추천 보너스 혜택 2.</el-row>
                <el-row class="f-s-20">지인 추천하고 나도 주정산받자!</el-row>
                <el-row><img :src="`/image/Friend/${themeType}/arrow-a.png`" class="m-t-24 m-b-24"></el-row>
              </el-row>
              <img
                v-if="layoutType != 'layout2'"
                :src="`/image/Friend/${themeType}/event2.png`"
                style="width: 100%"
              />
              <img
                v-if="layoutType == 'layout2' && !isMobile"
                :src="`/image/Friend/${themeType}/event1.svg`"
                style="width: 100%"
              />
            </div>
            <div
              :class="isMobile ? 'width-full' : 'float-left'"
              class="text-center"
              style="width: 88px"
            >
              <img
                v-if="themeType == 'orange11' || themeType == 'green'"
                :src="`/image/Friend/${themeType}/arrow.png`"
                :class="{ 'ele-rotate m-t-5 m-b-5': isMobile }"
              />
            </div>
            <div
              :class="[
                isMobile ? 'width-full' : 'float-left',
                `friend-comment-${themeType}`,
              ]"
            >
              <el-row
                class="f-s-26 f-w-700 text-center"
                :class="{ 'text-orange12': layoutType == 'layout2' }"
                >보너스 지급 조건</el-row
              >
              <el-row class="m-t-20">
                <p v-html="friendSetting.event2.rule"></p>
              </el-row>
            </div>
          </el-row>
          <el-row v-else class="text-center word-keep" :class="isMobile ? 'f-s-13' : 'f-s-14'">
            <el-row v-for="(rule, ruleIndex) in friend2Rule" :key="`rule2-${ruleIndex}`">
              <el-row v-if="ruleIndex % 2 == 0" class="p-12 b-r-6 f-s-16" 
                :class="[`text-${themeType}`, (layoutType == 'layout3' && themeType != 'yellow14' && themeType != 'yellow11') || layoutType == 'layout6' ? 'bg-black29' : themeType == 'yellow17' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : themeType == 'yellow18' ? 'bg-black22' : 'bg-black35']">
                {{rule}}
              </el-row>
              <el-row v-else class="p-12">
                {{rule}}
              </el-row>
            </el-row>
          </el-row>
        </el-row>
        <!-- 지인추천 이벤트2 설명 끝 -->
        <!-- 지인추천 이벤트2 리스트 -->
        <el-row v-if="!currentUser.isBlockFriend2 && friendSetting.event2.isUse" :class="{'m-t-24 m-b-24': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12'}" :style="layoutType == 'layout2' ? 'background: #141617; margin-top: 24px;' : ''">
          <el-row class="f-s-16" :class="{ 'display-center p-t-24 p-b-24': layoutType == 'layout2', 'm-b-8': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'orange14' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'red15' || themeType == 'gold12' }">
            <el-row>
              <div class="float-left"
                :class="[
                  { on: selectedTab === 0, 'm-r-24': layoutType == 'layout2' },
                  `friend-tab-${themeType}`,
                ]"
                @click="onClickTab(0)"
              >
                금주 정산예정
              </div>
              <div
                class="float-right"
                :class="[{ on: selectedTab === 1 }, `friend-tab-${themeType}`]"
                @click="onClickTab(1)"
              >
                정산완료내역
              </div>
            </el-row>
          </el-row>
          <el-row :style="
            layoutType == 'layout1' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'red15' ? 'border: 1px solid #616161' : 
            themeType == 'yellow20' ? 'background: #101216; border-top: 1px solid #f3ba2f;' : 
            themeType == 'red13' ? 'background: #101216; border-top: 1px solid #c00015;' : 
            themeType == 'red14' ? 'background: #101216; border-top: 1px solid #de00d3;' : 
            themeType == 'yellow12' ? 'background: #101216; border-top: 1px solid #ffc600;' : 
            themeType == 'orange14' ? 'background: #101216; border-top: 1px solid #f8850f;' : 
            themeType == 'blue12' ? 'background: #101216; border-top: 1px solid #478ee7;' : 
            themeType == 'yellow19' ? 'background: #101216; border-top: 1px solid #f3ba2f;' : 
            themeType == 'red15' ? 'background: #101216; border-top: 1px solid #2b0103;' : 
            themeType == 'blue13' ? 'background: #101216; border-top: 1px solid #328edb;' : 
            themeType == 'gold13' ? 'background: #0a1c30; border-top: 1px solid #f2b705;' : 
            themeType == 'yellow11' ? 'background: #11162b; border-top: 1px solid #ffcd00;' : 
            themeType == 'yellow14' ? 'background: #11162b; border-top: 1px solid #ff0000;' : 
            themeType == 'yellow18' ? 'background: #101010; border-top: 1px solid #f4b95c;' : 
            themeType == 'yellow21' ? 'background: #101216; border-top: 1px solid #edab56;' : 
            themeType == 'yellow16' ? 'background: #101216; border-top: 1px solid #f3ba2f;' : 
            themeType == 'blue18' ? 'background: #101216; border-top: 1px solid #1f7aff;' : 
            themeType == 'yellow15' ? 'background: #101216; border-top: 1px solid #edbb35;' : 
            themeType == 'yellow17' ? 'background: #0f0f0f; border-top: 1px solid #ffb600;' : 
            themeType == 'blue19' ? 'background: #0e1628; border-top: 1px solid #a5d7e8;' : 
            themeType == 'blue11' ? 'background: #1a1a23; border-top: 1px solid #2ca0e2;' : ''">
            <el-row class="f-s-14" :class="[`friend2-comment-${themeType}`, layoutType == 'layout2' ? 'p-24' : 'p-20 p-t-40']">
              <el-col :span="isShowMobile || layoutType == 'layout2' ? 24 : 8" :class="isShowMobile ? 'text-center m-b-10' : 'text-left'">
                <el-row class="f-s-16 f-w-700" :class="[getTextColor(themeType, 1), { 'text-center': layoutType == 'layout2' }]">
                  지인 주정산 현황표
                </el-row>
                <el-row v-if="weekData" class="m-t-5 m-b-5" :class="{ 'text-center': layoutType == 'layout2' }">
                  {{ weekData[2].year }}년 {{ weekData[2].month }}월
                  {{ weekData[2].weekNo }}주차 예상 수익금액:
                  <span :class="getTextColor(themeType, 1)">
                    {{currentList ? currencyFormat((currentList.totalPayInAmount - currentList.totalPayOutAmount) * friendSetting.event2.percent * 0.01, "원") : "0 원"}}
                  </span>
                </el-row>
                <el-row v-if="weekData" class="f-s-16" :class="{ 'text-center m-b-24': layoutType == 'layout2' }">
                  {{ weekData[0] | parseTime("{m}") }}월
                  {{ weekData[0] | parseTime("{d}") }}일(월) ~
                  {{ weekData[1] | parseTime("{m}") }}월
                  {{ weekData[1] | parseTime("{d}") }}일(일)
                </el-row>
              </el-col>
              <div v-if="layoutType != 'layout2'">
                <el-col v-if="!isMobile" :span="isShowMobile ? 6 : 4" class="text-center">
                  <el-row :class="getTextColor(themeType, 1)">
                    입금 합계
                  </el-row>
                  <el-row class="width-98pro p-15 m-t-10" :class="!isBlackMode ? 'bg-yellow901' : 'bg-grey917'">
                    <span class="text-blue905">
                      {{currentList ? currencyFormat(currentList.totalPayInAmount, "원") : "0 원"}}
                    </span>
                    ({{ currentList ? currentList.totalPayInCount : 0 }})
                  </el-row>
                </el-col>
                <el-col v-if="!isMobile" :span="isShowMobile ? 6 : 4" class="text-center">
                  <el-row :class="getTextColor(themeType, 1)">
                    출금 합계
                  </el-row>
                  <el-row class="width-98pro p-15 m-t-10" :class="!isBlackMode ? 'bg-yellow901' : 'bg-grey917'">
                    <span class="text-red901">
                      {{currentList ? currencyFormat(currentList.totalPayOutAmount, "원") : "0 원"}}
                    </span>
                    ({{ currentList ? currentList.totalPayOutCount : 0 }})
                  </el-row>
                </el-col>
                <el-col v-if="!isMobile" :span="isShowMobile ? 6 : 4" class="text-center">
                  <el-row :class="getTextColor(themeType, 1)">
                    승률 합계
                  </el-row>
                  <el-row class="width-98pro p-15 m-t-10 text-blue905" :class="!isBlackMode ? 'bg-yellow901' : 'bg-grey917'">
                    {{currentList ? currencyFormat(currentList.totalPayInAmount - currentList.totalPayOutAmount, "원") : "0 원"}}
                  </el-row>
                </el-col>
                <el-col :span="isMobile ? 24 : isShowMobile ? 6 : 4" class="text-center">
                  <el-row :class="getTextColor(themeType, 1)">
                    정산 예정 금액
                  </el-row>
                  <el-row class="width-98pro p-15 m-t-10 text-red905" :class="!isBlackMode ? 'bg-yellow901' : 'bg-grey917'">
                    {{currentList ? currencyFormat((currentList.totalPayInAmount - currentList.totalPayOutAmount) * friendSetting.event2.percent * 0.01, "원") : "0 원"}}
                  </el-row>
                </el-col>
              </div>
            </el-row>
            <el-row v-if="layoutType == 'layout2'" class="display-center m-b-24">
              <el-row>
                <div v-if="!isMobile" class="text-center float-left p-l-12 p-r-12">
                  <el-row :class="getTextColor(themeType, 1)">
                    입금 합계
                  </el-row>
                  <el-row class="m-t-10" style="padding: 12px 50px; border-radius: 24px; background: #1e2224;">
                    <span class="text-blue905">{{ currentList ? currencyFormat(currentList.totalPayInAmount, "원") : "0 원" }}</span>
                    ({{ currentList ? currentList.totalPayInCount : 0 }})
                  </el-row>
                </div>
                <div v-if="!isMobile" class="text-center float-left p-l-12 p-r-12">
                  <el-row :class="getTextColor(themeType, 1)">
                    출금 합계
                  </el-row>
                  <el-row class="m-t-10" style="padding: 12px 50px; border-radius: 24px; background: #1e2224;">
                    <span class="text-red901">{{ currentList ? currencyFormat(currentList.totalPayOutAmount, "원") : "0 원" }}</span>
                    ({{ currentList ? currentList.totalPayOutCount : 0 }})
                  </el-row>
                </div>
                <div
                  v-if="!isMobile"
                  class="text-center float-left p-l-12 p-r-12"
                >
                  <el-row :class="getTextColor(themeType, 1)">
                    승률 합계
                  </el-row>
                  <el-row
                    class="m-t-10 text-blue905"
                    style="
                      padding: 12px 50px;
                      border-radius: 24px;
                      background: #1e2224;
                    "
                  >
                    {{
                      currentList
                        ? currencyFormat(
                            currentList.totalPayInAmount -
                              currentList.totalPayOutAmount,
                            "원"
                          )
                        : "0 원"
                    }}
                  </el-row>
                </div>
                <div class="text-center float-left p-l-12 p-r-12">
                  <el-row :class="getTextColor(themeType, 1)">
                    정산 예정 금액
                  </el-row>
                  <el-row
                    class="m-t-10 text-red901"
                    style="
                      padding: 12px 50px;
                      border-radius: 24px;
                      background: #1e2224;
                    "
                  >
                    {{ currentList ? currencyFormat((currentList.totalPayInAmount - currentList.totalPayOutAmount) * friendSetting.event2.percent * 0.01, "원") : "0 원" }}
                  </el-row>
                </div>
              </el-row>
            </el-row>
            <el-row>
              <div
                v-if="selectedTab === 0 && currentList && currentList.userList"
                :class="`table-history-${themeType}`"
              >
                <div class="table-header">
                  <div class="text-center table-history-flex-field">
                    지인 아이디
                  </div>
                  <div
                    v-if="!isMobile"
                    class="text-center"
                    style="width: 160px"
                  >
                    닉네임
                  </div>
                  <div
                    v-if="!isMobile"
                    class="text-center"
                    style="width: 160px"
                  >
                    가입일
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    입금총액
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    출금총액
                  </div>
                  <div class="text-center" style="width: 160px">
                    승률(입금-출금)
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    정산예정
                  </div>
                </div>
                <el-row
                  v-for="(event21, index21) in currentList.userList"
                  :key="index21"
                >
                  <el-row class="table-history-tr">
                    <div
                      class="
                        text-center
                        table-history-td-first table-history-flex-field
                      "
                    >
                      {{ event21.userLoginId }}
                    </div>
                    <div
                      v-if="!isMobile"
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      {{ event21.userNickName }}
                    </div>
                    <div
                      v-if="!isMobile"
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      {{ event21.userSignupDate | parseTime }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                    >
                      {{ currencyFormat(event21.userWeekPayInAmount, "원") }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                    >
                      {{ currencyFormat(event21.userWeekPayOutAmount, "원") }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      {{
                        currencyFormat(
                          event21.userWeekPayInAmount -
                            event21.userWeekPayOutAmount,
                          "원"
                        )
                      }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                    >
                      {{ currencyFormat((event21.userWeekPayInAmount - event21.userWeekPayOutAmount) * friendSetting.event2.percent * 0.01, "원") }}
                    </div>
                  </el-row>
                </el-row>
              </div>
              <div
                v-else-if="selectedTab === 1 && prevList"
                :class="`table-history-${themeType}`"
              >
                <div class="table-header">
                  <div class="text-center table-history-flex-field">기간</div>
                  <div
                    v-if="!isMobile"
                    class="text-center"
                    :style="isMobile ? 'width: 60px;' : 'width: 160px;'"
                  >
                    입금총액
                  </div>
                  <div
                    v-if="!isMobile"
                    class="text-center"
                    :style="isMobile ? 'width: 60px;' : 'width: 160px;'"
                  >
                    출금총액
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    승률(입금-출금)
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    지급액
                  </div>
                  <div
                    class="text-center"
                    :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                  >
                    상태
                  </div>
                </div>
                <el-row v-for="(event22, index22) in prevList" :key="index22">
                  <el-row class="table-history-tr">
                    <div
                      class="
                        text-center
                        table-history-td-first table-history-flex-field
                      "
                    >
                      {{ event22.createdAt | parseTime }}
                    </div>
                    <div
                      v-if="!isMobile"
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      {{ currencyFormat(event22.totalPayInAmount, "원") }}
                    </div>
                    <div
                      v-if="!isMobile"
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      {{ currencyFormat(event22.totalPayOutAmount, "원") }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                    >
                      {{
                        currencyFormat(
                          event22.totalPayInAmount - event22.totalPayOutAmount,
                          "원"
                        )
                      }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      :style="isMobile ? 'width: 90px;' : 'width: 160px;'"
                    >
                      {{ currencyFormat(event22.bonusAmount, "원") }}
                    </div>
                    <div
                      class="text-center table-history-td"
                      style="width: 160px"
                    >
                      <div
                        :class="event22.state | statusClassObject(themeType)"
                      >
                        {{ getStateName(event22.state) }}
                      </div>
                    </div>
                  </el-row>
                </el-row>
                <el-row
                  v-if="!event22 || event22.length === 0"
                  class="width-full display-center"
                >
                  <el-row class="p-t-24 p-b-48">
                    <el-row v-if="layoutType == 'layout2'" class="text-center">
                      <img
                        :src="`/image/Home/${themeType}/logo3.png`"
                        class="m-b-24"
                      />
                    </el-row>
                    내역이 존재하지 않습니다.
                  </el-row>
                </el-row>
              </div>
            </el-row>
            <el-row class="p-t-12 word-keep"
              :class="[
                {
                  'text-left p-l-30 p-r-30': isMobile,
                  'text-right': !isMobile && layoutType != 'layout2',
                  'text-center': !isMobile && layoutType == 'layout2',
                },
                getTextColor(themeType, 1),
                `friend2-comment-${themeType}`,
              ]"
            >
              월요일부터 일요일까지의 입금 - 출금액을 자동계산하여 월요일 자정에
              자동지급되며 정산받을 금액이 마이너스일경우 매주 월요일 자정에
              0으로 초기화 됩니다.
            </el-row>
            <el-row class="display-inlineblock width-full p-24" :class="`friend2-comment-${themeType}`">
              <el-col :span="24">
                <div class="block">
                  <el-pagination
                    v-if="selectedTab === 1"
                    :class="`bet-history-paging-${themeType}`"
                    align="center"
                    :page-sizes="[5, 10, 20, 30, 50]"
                    :page-size="prevListQuery.limit"
                    :current-page.sync="prevListQuery.page"
                    :pager-count="isMobile ? 5 : 9"
                    background
                    layout="prev, pager, next"
                    :total="prevTotal"
                    @current-change="handleCurrentChangePrevList"
                  >
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <!-- 지인추천 이벤트2 리스트 끝 -->
        <!-- 지난주 정산지급 현황 -->
        <el-row v-if="friendSetting.event2.isUse && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'red14' && themeType != 'yellow12' && themeType != 'orange14' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'red15' && themeType != 'gold12'" :style="layoutType == 'layout2' ? 'background: #141617; padding-top: 24px; margin-top: 24px;': 'margin-top: 40px;'">
          <el-row class="f-s-16 f-w-700 m-b-24 p-l-20" :class="{ 'text-center': isMobile || layoutType == 'layout2' }" v-if="weekData">
            <span :class="getTextColor(themeType, 1)">지인추천 추천인 정산지급 현황</span><br />
            {{ weekData[2].year }}년 {{ weekData[2].month }}월 {{ weekData[2].weekNo }}주차
          </el-row>
          <el-row :class="{ 'display-center': layoutType == 'layout2' }">
            <el-row :class="{ 'width-full': layoutType != 'layout2' }">
              <div :class="[`friend-total-${themeType}`, {'m-r-14': layoutType != 'layout2'}]">
                <el-row class="top" :class="`border-2-${themeType}`">
                  <img :src="`/image/Friend/${themeType}/money.png`" />
                  정산금 30만원이상
                </el-row>
                <el-row class="bottom">
                  {{ prevWeekStatus ? prevWeekStatus.count1 : 0 }}명
                </el-row>
              </div>
              <div :class="[{ 'm-t-20': isMobile, 'm-r-14': layoutType != 'layout2' }, `friend-total-${themeType}`]">
                <el-row class="top" :class="`border-2-${themeType}`">
                  <img :src="`/image/Friend/${themeType}/money.png`" />
                  정산금 100만원이상
                </el-row>
                <el-row class="bottom">
                  {{ prevWeekStatus ? prevWeekStatus.count2 : 0 }}명
                </el-row>
              </div>
              <div :class="[{ 'm-t-20': isMobile, 'm-r-14': layoutType != 'layout2' }, `friend-total-${themeType}`]">
                <el-row class="top" :class="`border-2-${themeType}`">
                  <img :src="`/image/Friend/${themeType}/money.png`" />
                  정산금 200만원이상
                </el-row>
                <el-row class="bottom">
                  {{ prevWeekStatus ? prevWeekStatus.count3 : 0 }}명
                </el-row>
              </div>
              <div :class="[{ 'm-t-20': isMobile }, `friend-total-${themeType}`]">
                <el-row class="top" :class="`border-2-${themeType}`">
                  <img :src="`/image/Friend/${themeType}/money.png`" />
                  정산금 300만원이상
                </el-row>
                <el-row class="bottom">
                  {{ prevWeekStatus ? prevWeekStatus.count4 : 0 }}명
                </el-row>
              </div>
            </el-row>
          </el-row>
          <el-row
            class="m-t-24 m-b-24 word-keep"
            :class="[
              {
                'text-left p-l-30 p-r-30': isMobile,
                'text-right': !isMobile && layoutType != 'layout2',
                'text-center': !isMobile && layoutType == 'layout2',
              },
              getTextColor(themeType, 1),
            ]"
            style="line-height: 20px"
          >
            보너스 정산대금은 포인트가 아닌 현금입금으로 적용되기 때문에
            추천인의 총판과 본사 추천인 모두가 윈윈할수 있도록 기획
            되었습니다.<br />
            정산금의 롤링규정은 스포츠 다폴
            {{ payOutSettings.rollingSportsTwoFolder }}% / 실시간 다폴
            {{ payOutSettings.rollingLiveTwoFolder }}% / 스포츠 단폴
            {{ payOutSettings.rollingSportsOneFolder }}% / 실시간 단폴
            {{ payOutSettings.rollingLiveOneFolder }}% / 미니게임
            {{ payOutSettings.rollingMini }}% / 가상스포츠
            {{ payOutSettings.rollingVirtual }}% / 카지노
            {{ payOutSettings.rollingCasino }}%의 롤링규정을 적용받습니다.
          </el-row>
        </el-row>
        <!-- 지난주 정산지급 현황 끝 -->
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
import { currencyFormat, parseTime } from "~/assets/js/utils";
import {
  statusClassObject,
  getTextColor,
  getPageBackColor,
} from "~/assets/js/data/uicommon";
import Preview from "~/components/Auth/Preview.vue";
import PageHeader from "~/components/Header/PageHeader";

const friend1Service = feathers.service("client-friend1");
const friend2Service = feathers.service("client-friend2");
const weekService = feathers.service("/client-getWeekData");
const currentWeekService = feathers.service("/client-weekevent");
friend1Service.timeout = 60000
friend2Service.timeout = 60000
weekService.timeout = 60000
currentWeekService.timeout = 60000

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
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      solutionTitle: "getSolutionTitle",
      adminCode: "getAdminCode",
      friendSetting: "getFriend",
      payOutSettings: "getPayOutSettings"
    }),
  },
  filters: {
    statusClassObject: statusClassObject,
    parseTime: parseTime,
  },
  data() {
    return {
      eventList1: [], // 지인추천 이벤트1 리스트
      currentList: [], // 지인추천 이벤트2 금주 정산예정 리스트
      prevList: [], // 지인추천 이벤트2 정산완료내역 리스트
      selectedTab: 0, // 지인추천 이벤트2 탭 인덱스
      total: 0, // 지인추천 이벤트1 전체 갯수
      currentTotal: 0, // 지인추천 이벤트2 금주 정산예정 전체 갯수
      prevTotal: 0, // 지인추천 이벤트2 정산완료내역 전체 갯수
      isShowMobile: false, // 낮은 해상도인가?
      listQuery: {
        page: 1,
        limit: 8,
      },
      currentListQuery: {
        page: 1,
        limit: 8,
      },
      prevListQuery: {
        page: 1,
        limit: 8,
      },
      weekData: null, // 월 몇주차
      prevWeekStatus: null, // 지난주 정산완료내역
      friend1Rule: [],
      friend2Rule: []
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
    this.getEventList1();
    this.getCurrentList();
    this.getPrevList();
    this.getWeekData();
  },
  updated() {
    this.$store.commit("initTimeLeft");
  },
  watch: {
    screenWidth(val) {
      this.initframe();
    },
  },
  mounted() {
    if (this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6' || this.themeType == 'red13' || this.themeType == 'red14' || 
        this.themeType == 'yellow12' || this.themeType == 'orange14' || this.themeType == 'blue12' || this.themeType == 'yellow19' || this.themeType == 'red15' || 
        this.themeType == 'gold12') {
          let tempRule = this.friendSetting.event1.rule
          tempRule = tempRule.replaceAll("<p>", "")
          this.friend1Rule = tempRule.split("</p>")
          this.friend1Rule.splice(this.friend1Rule.length - 1)

          tempRule = this.friendSetting.event2.rule
          tempRule = tempRule.replaceAll("<p>", "")
          this.friend2Rule = tempRule.split("</p>")
          this.friend2Rule.splice(this.friend2Rule.length - 1)
    }

		this.$store.commit('SET_CURRENTPAGENAME', 'Friend')
    this.initframe();
  },
  methods: {
    getPageBackColor,
    getTextColor,
    currencyFormat,
    // 낮은 해상도 체크
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false;
      } else {
        this.isShowMobile = true;
      }
    },
    // 월 몇주차인가 얻기
    getWeekData() {
      weekService.find().then((res) => {
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.weekData = res.data;
        }
      });
    },
    // 지인추천 이벤트1 리스트 얻기
    getEventList1() {
      this.eventList1 = [];
      if (!this.currentUser) return;
      var query = {
        userId: this.currentUser._id,
        page: this.listQuery.page,
      };
      this.eventList1 = [];
      friend1Service
        .find({ query: query })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.eventList1 = res.data.data;
            this.total = res.data.total;
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // 지인추천 이벤트2 금주 정산예정 리스트 얻기
    getCurrentList() {
      this.currentList = [];
      if (!this.currentUser) return;
      currentWeekService
        .find()
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.currentList = res.data.currentList;
            this.prevWeekStatus = res.data.prevWeekStatus;
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // 지인추천 이벤트2 정산완료내역 얻기
    getPrevList() {
      this.prevList = [];
      if (!this.currentUser) return;
      var query = {
        limit: this.prevListQuery.limit || 8,
        page: this.prevListQuery.page,
      };
      this.prevList = [];
      friend2Service
        .find({ query: query })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.prevList = res.data.data;
            this.prevTotal = res.data.total;
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // 지인추천 이벤트1 현재 페이지 선택 이벤트
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getEventList1();
    },
    // 지인추천 이벤트2 금주 정산예정 현재 페이지 선택 이벤트
    handleCurrentChangeCurrentList(val) {
      this.currentListQuery.page = val;
      this.getCurrentList();
    },
    // 지인추천 이벤트2 정산완료내역 현재 페이지 선택 이벤트
    handleCurrentChangePrevList(val) {
      this.prevListQuery.page = val;
      this.getPrevList();
    },
    // 지인추천 이벤트2 탭선택
    onClickTab(type) {
      this.selectedTab = type;
    },
    // 지급상태명 얻기
    getStateName(state) {
      let stateName = "미지급";
      switch (state) {
        case 1:
          stateName = "취소";
          break;
        case 2:
          stateName = "지급완료";
          break;
      }
      return stateName;
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
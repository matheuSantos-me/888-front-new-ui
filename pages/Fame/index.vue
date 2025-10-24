<template>
<el-row class="width-full">
  <div class="animated fadeInUpBig panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-body height-100-pro p-2" :class="[getPageBackColor(themeType), `text-contrast-${themeType}`]" style="position:relative;">
      <el-row v-if="fameSettings.isUseFame">
        <el-row v-if="currentUser && 
                      (oddsList && oddsList.length > 0) || 
                      (winMoneyList && winMoneyList.length > 0) || 
                      (rollingList && rollingList.length > 0) || 
                      (bettingCountList && bettingCountList.length > 0)">
          <el-row class="p-0">
            <img :src="`/image/Fame/banner-${themeType}.png`" style="width: 100%">
          </el-row>
          <el-row :class="isMobile ? '' : 'p-l-14 p-r-14'">
            <el-row v-if="!isMobile && layoutType != 'layout2'" class="width-full m-t-15 m-b-15" :class="themeType == 'white' ? 'border-t-b-1-white' : 'border-t-b-1'"></el-row>
            <el-row>
              <el-row v-if="!isMobile" class="f-s-14" :class="{'text-center m-t-24': layoutType == 'layout2'}">
                명예의전당 순위는 1시간 마다 업데이트되며 매일 자정을 기준으로 최종 업데이트 됩니다.<br>
                익일 문의주시면 각 순위에 맞게 보너스 머니를 지급해드립니다.
              </el-row>
              <el-row class="f-w-700" :class="isMobile ? 'f-s-20 m-t-10 m-b-10 text-center' : 'f-s-26 m-t-30 m-b-15'">
                {{koreanMonth}}월 {{koreanDay}}일 명예의전당
              </el-row>
            </el-row>
            <el-row v-if="oddsList.length > 0">
              <el-row class="p-15 p-t-8 p-b-8 m-b-15" :class="getBackColor(themeType, 1)" style="border-radius: 3px;">
                <img :src="'/image/Fame/odds.png'" class="float-left m-r-1">
                <div class="float-left f-s-18 f-w-700 p-t-4 m-l-15">배당률 순위 TOP 5</div>
                <div class="float-left p-t-7 f-s-14" :class="isMobile ? ' m-l-0' : 'm-l-40'">당일 가장 높은 배당률에 당첨된 5명의 유저</div>
              </el-row>
              <el-row class="m-b-50">
                <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)" :class="`table-betlog-${themeType}`">
                  <div class="table-header">
                    <div class="text-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">순위</div>
                    <div class="text-center table-betlog-flex-field">아이디</div>
                    <div v-if="fameSettings.isShowNickname" class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">닉네임</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">배당률</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">보너스 예정 지급액</div>
                  </div>
                  <el-row v-for="(fameData, index) in oddsList" :key="index">
                    <el-row class="table-betlog-tr">
                      <div class="text-center table-betlog-td-first display-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">
                        <img v-if="layoutType != 'layout2'" :src="'/image/Fame/' + fameData.rank + '.png'" :width="layoutType == 'layout6' ? '30px' : '100%'">
                        <span v-else><img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16"> {{fameData.rank}}</span>
                      </div>
                      <div class="text-left table-betlog-td table-betlog-flex-field display-center">
                        {{ fameData.userLoginId | filterUserId }}
                      </div>
                      <div v-if="fameSettings.isShowNickname" class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.nickname }}
                      </div>
                      <div class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        <el-col class="text-right" :span="6">
                          <img v-if="fameData.sportBetlog" :src="'/image/BettingHistory/eye.png'" class="cursor" data-toggle="collapse" :data-target="'#result' + fameData._id" aria-expanded="false" :aria-controls="'result' + fameData._id" />
                        </el-col>
                        <el-col class="text-center"  :span="18">
                          {{ fameData.data }}
                        </el-col>
                      </div>
                      <div class="table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.bonus | currencyFormat('원') }}
                      </div>
                    </el-row>
                    <el-row>
                      <div class="collapse table-betlog-content" :id="'result' + fameData._id">
                        <SportBetLog v-if="fameData.sportBetlog" :sportBetLog="fameData.sportBetlog" gameType="fame" :canUserProcess="false" />
                      </div>
                    </el-row>
                  </el-row>
                </div>
                <el-row v-else v-for="(fameData, index) in oddsList" :key="index" style="background: #1F2124; border-radius: 6px; padding: 48px 16px 16px 16px; margin-top: 48px;">
                  <el-row class="m-b-16">
                    <div class="float-left">아이디</div>
                    <div class="float-right">{{ fameData.userLoginId | filterUserId }}</div>
                  </el-row>
                  <el-row class="m-b-16">
                    <div class="float-left">배당률</div>
                    <div class="float-right">{{ fameData.data }}</div>
                  </el-row>
                  <el-row>
                    <div class="float-left">보너스 예정 지급액</div>
                    <div class="float-right">{{ fameData.bonus | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row style="position: absolute; left: calc(50% - 32px); top: -20px;">
                    <img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16" width="64px">
                    <div class="float-right f-s-24 f-w-900" style="line-height: 0;">{{fameData.rank}}</div>
                  </el-row>
                </el-row>
                <!-- 내역 존재하지 않을때 -->
                <el-row v-if="!oddsList || oddsList.length === 0" class="display-table width-full text-center p-20 m-b-20" style="border-bottom: 1px solid #252a30">
                  내역이 존재하지 않습니다.
                </el-row>
                <!-- 내역 존재하지 않을때 끝 -->
              </el-row>
            </el-row>
            <el-row v-if="winMoneyList.length > 0">
              <el-row class="p-15 p-t-8 p-b-8 m-b-15" :class="getBackColor(themeType, 1)" style="border-radius: 3px;">
                <img :src="'/image/Fame/winmoney.png'" class="float-left m-r-8">
                <div class="float-left f-s-18 f-w-700 p-t-4 m-l-15">당첨금액 순위 TOP 5</div>
                <div class="float-left p-t-7 f-s-14" :class="isMobile ? ' m-l-0' : 'm-l-20'">당일 가장 높은 당첨금액에 당첨된 5명의 유저</div>
              </el-row>
              <el-row class="m-b-50">
                <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)" :class="`table-betlog-${themeType}`">
                  <div class="table-header">
                    <div class="text-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">순위</div>
                    <div class="text-center table-betlog-flex-field">아이디</div>
                    <div v-if="fameSettings.isShowNickname" class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">닉네임</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">당첨금액</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">보너스 예정 지급액</div>
                  </div>
                  <el-row v-for="(fameData, index) in winMoneyList" :key="index">
                    <el-row class="table-betlog-tr">
                      <div class="text-center table-betlog-td-first display-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">
                        <img v-if="layoutType != 'layout2'" :src="'/image/Fame/' + fameData.rank + '.png'" :width="layoutType == 'layout6' ? '30px' : '100%'">
                        <span v-else><img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16"> {{fameData.rank}}</span>
                      </div>
                      <div class="text-left table-betlog-td table-betlog-flex-field display-center">
                        {{ fameData.userLoginId | filterUserId }}
                      </div>
                      <div v-if="fameSettings.isShowNickname" class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.nickname }}
                      </div>
                      <div class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        <el-col class="text-right" :span="6">
                          <img v-if="fameData.sportBetlog" :src="'/image/BettingHistory/eye.png'" class="cursor" data-toggle="collapse" :data-target="'#result' + fameData._id" aria-expanded="false" :aria-controls="'result' + fameData._id" />
                        </el-col>
                        <el-col class="text-center"  :span="18">
                          {{ fameData.data | currencyFormat('원') }}
                        </el-col>
                      </div>
                      <div class="table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.bonus | currencyFormat('원') }}
                      </div>
                    </el-row>
                    <el-row>
                      <div class="collapse table-betlog-content" :id="'result' + fameData._id">
                        <SportBetLog v-if="fameData.sportBetlog" :sportBetLog="fameData.sportBetlog" gameType="fame" />
                      </div>
                    </el-row>
                  </el-row>
                </div>
                <el-row v-else v-for="(fameData, index) in winMoneyList" :key="index" style="background: #1F2124; border-radius: 6px; padding: 48px 16px 16px 16px; margin-top: 48px;">
                  <el-row class="m-b-16">
                    <div class="float-left">아이디</div>
                    <div class="float-right">{{ fameData.userLoginId | filterUserId }}</div>
                  </el-row>
                  <el-row class="m-b-16">
                    <div class="float-left">당첨금액</div>
                    <div class="float-right">{{ fameData.data | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row>
                    <div class="float-left">보너스 예정 지급액</div>
                    <div class="float-right">{{ fameData.bonus | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row style="position: absolute; left: calc(50% - 32px); top: -20px;">
                    <img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16" width="64px">
                    <div class="float-right f-s-24 f-w-900" style="line-height: 0;">{{fameData.rank}}</div>
                  </el-row>
                </el-row>
                <!-- 내역 존재하지 않을때 -->
                <el-row v-if="!winMoneyList || winMoneyList.length === 0" class="display-table width-full text-center p-20 m-b-20" style="border-bottom: 1px solid #252a30">
                  내역이 존재하지 않습니다.
                </el-row>
                <!-- 내역 존재하지 않을때 끝 -->
              </el-row>
            </el-row>
            <el-row v-if="rollingList.length > 0">
              <el-row class="p-15 p-t-8 p-b-8 m-b-15" :class="getBackColor(themeType, 1)" style="border-radius: 3px;">
                <img :src="'/image/Fame/rolling.png'" class="float-left">
                <div class="float-left f-s-18 f-w-700 p-t-4 m-l-15">롤링금액 순위 TOP 5</div>
                <div class="float-left p-t-7 f-s-14" :class="isMobile ? ' m-l-0' : 'm-l-20'">당일 가장 높은 누적 배팅금액을 보유한 5명의 유저</div>
              </el-row>
              <el-row class="m-b-50">
                <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)" :class="`table-betlog-${themeType}`">
                  <div class="table-header">
                    <div class="text-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">순위</div>
                    <div class="text-center table-betlog-flex-field">아이디</div>
                    <div v-if="fameSettings.isShowNickname" class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">닉네임</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">롤링금액</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">보너스 예정 지급액</div>
                  </div>
                  <el-row v-if="rollingList" v-for="(fameData, index) in rollingList" :key="index">
                    <el-row class="table-betlog-tr">
                      <div class="text-center table-betlog-td-first display-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">
                        <img v-if="layoutType != 'layout2'" :src="'/image/Fame/' + fameData.rank + '.png'" :width="layoutType == 'layout6' ? '30px' : '100%'">
                        <span v-else><img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16"> {{fameData.rank}}</span>
                      </div>
                      <div class="text-left table-betlog-td table-betlog-flex-field display-center">
                        {{ fameData.userLoginId | filterUserId }}
                      </div>
                      <div v-if="fameSettings.isShowNickname" class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.nickname }}
                      </div>
                      <div class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.data | currencyFormat('원') }}
                      </div>
                      <div class="table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.bonus | currencyFormat('원') }}
                      </div>
                    </el-row>
                  </el-row>
                </div>
                <el-row v-else v-for="(fameData, index) in rollingList" :key="index" style="background: #1F2124; border-radius: 6px; padding: 48px 16px 16px 16px; margin-top: 48px;">
                  <el-row class="m-b-16">
                    <div class="float-left">아이디</div>
                    <div class="float-right">{{ fameData.userLoginId | filterUserId }}</div>
                  </el-row>
                  <el-row class="m-b-16">
                    <div class="float-left">롤링금액</div>
                    <div class="float-right">{{ fameData.data | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row>
                    <div class="float-left">보너스 예정 지급액</div>
                    <div class="float-right">{{ fameData.bonus | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row style="position: absolute; left: calc(50% - 32px); top: -20px;">
                    <img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16" width="64px">
                    <div class="float-right f-s-24 f-w-900" style="line-height: 0;">{{fameData.rank}}</div>
                  </el-row>
                </el-row>
                <!-- 내역 존재하지 않을때 -->
                <el-row v-if="!rollingList || rollingList.length === 0" class="display-table width-full text-center p-20 m-b-20" style="border-bottom: 1px solid #252a30">
                  내역이 존재하지 않습니다.
                </el-row>
                <!-- 내역 존재하지 않을때 끝 -->
              </el-row>
            </el-row>
            <el-row v-if="miniWinCountList.length > 0">
              <el-row class="p-15 p-t-8 p-b-8 m-b-15" :class="getBackColor(themeType, 1)" style="border-radius: 3px;">
                <img :src="'/image/Fame/accumulation.png'" class="float-left m-r-3">
                <div class="float-left f-s-18 f-w-700 p-t-4 m-l-15">미니게임 연속 당첨횟수 순위 TOP 5</div>
                <div class="float-left p-t-7 f-s-14" :class="isMobile ? ' m-l-0' : 'm-l-20'">당일 가장많이 미니게임 연속당첨 된 5명의 유저</div>
              </el-row>
              <el-row class="m-b-50">
                <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)" :class="`table-betlog-${themeType}`">
                  <div class="table-header">
                    <div class="text-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">순위</div>
                    <div class="text-center table-betlog-flex-field">아이디</div>
                    <div v-if="fameSettings.isShowNickname" class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">닉네임</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">배팅횟수</div>
                    <div class="text-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">보너스 예정 지급액</div>
                  </div>
                  <el-row v-if="miniWinCountList" v-for="(fameData, index) in miniWinCountList" :key="index">
                    <el-row class="table-betlog-tr">
                      <div class="text-center table-betlog-td-first display-center" :style="isShowMobile ? 'width: 50px' : 'width: 90px'">
                        <img v-if="layoutType != 'layout2'" :src="'/image/Fame/' + fameData.rank + '.png'" :width="layoutType == 'layout6' ? '30px' : '100%'">
                        <span v-else><img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16"> {{fameData.rank}}</span>
                      </div>
                      <div class="text-left table-betlog-td table-betlog-flex-field display-center">
                        {{ fameData.userLoginId | filterUserId }}
                      </div>
                      <div v-if="fameSettings.isShowNickname" class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.nickname }}
                      </div>
                      <div class="text-white table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.data }} 회
                      </div>
                      <div class="table-betlog-td display-center" :style="isShowMobile ? 'width: 80px' : 'width: 160px'">
                        {{ fameData.bonus | currencyFormat('원') }}
                      </div>
                    </el-row>
                  </el-row>
                </div>
                <el-row v-else v-for="(fameData, index) in miniWinCountList" :key="index" style="background: #1F2124; border-radius: 6px; padding: 48px 16px 16px 16px; margin-top: 48px;">
                  <el-row class="m-b-16">
                    <div class="float-left">아이디</div>
                    <div class="float-right">{{ fameData.userLoginId | filterUserId }}</div>
                  </el-row>
                  <el-row class="m-b-16">
                    <div class="float-left">배팅횟수</div>
                    <div class="float-right">{{ fameData.data }} 회</div>
                  </el-row>
                  <el-row>
                    <div class="float-left">보너스 예정 지급액</div>
                    <div class="float-right">{{ fameData.bonus | currencyFormat('원') }}</div>
                  </el-row>
                  <el-row style="position: absolute; left: calc(50% - 32px); top: -20px;">
                    <img :src="'/image/Fame/' + fameData.rank + '.svg'" class="m-r-16" width="64px">
                    <div class="float-right f-s-24 f-w-900" style="line-height: 0;">{{fameData.rank}}</div>
                  </el-row>
                </el-row>
                <!-- 내역 존재하지 않을때 -->
                <el-row v-if="!miniWinCountList || miniWinCountList.length === 0" class="display-table width-full text-center p-20 m-b-20" style="border-bottom: 1px solid #252a30">
                  내역이 존재하지 않습니다.
                </el-row>
                <!-- 내역 존재하지 않을때 끝 -->
              </el-row>
            </el-row>
          </el-row>
        </el-row>
        <el-row v-else :class="`bg-logo-${themeType}`"></el-row>
      </el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
  <Check v-if="currentUser && !fameSettings.isUseFame" :themeType="themeType" />
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import { round10, currencyFormat } from '~/assets/js/utils'
import { getBackColor, getPageBackColor } from '~/assets/js/data/uicommon'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check.vue'
import SportBetLog from '~/components/BettingHistory/SportBetLog.vue'

const fameService = feathers.service('/client-fame');
fameService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    Preview,       // 로그인유도 콤포넌트
    Check,
    SportBetLog
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      screenWidth: "getScreenWidth",
      themeType: "getThemeType",
      fameSettings: "getFameSettings",
      layoutType: "getLayoutType"
    })
  },
  filters: {
    currencyFormat,
    filterOdds( ods ) { return round10( ods , -2) },
    filterGameTitle( strMatchId ){
      var strTitle = ''
      var arrParts = strMatchId.split('-')
      strTitle = arrParts[0] + '-' + arrParts[1] + '-' + arrParts[2] + ' [ ' + arrParts[3] + ' ]  ' + arrParts[4]
      return strTitle
    },
    filterMyBet( nMyBet ){
      var arrResult = []
      if ( nMyBet % 10 === 1) arrResult.push('대');
      else if ( nMyBet % 10 === 2) arrResult.push('중');
      else if ( nMyBet % 10 === 3) arrResult.push('소');
      if ( nMyBet % 100 >= 20 ) arrResult.push('일반볼 오버');
      else if ( nMyBet % 100 >= 10 ) arrResult.push('일반볼 언더');
      if ( nMyBet % 1000 >= 200 ) arrResult.push('일반볼 짝');
      else if ( nMyBet % 1000 >= 100 ) arrResult.push('일반볼 홀');
      if ( nMyBet % 10000 >= 2000 ) arrResult.push('파워볼 오버');
      else if ( nMyBet % 10000 >= 1000 ) arrResult.push('파워볼 언더');
      if ( nMyBet % 100000 >= 20000 ) arrResult.push('파워볼 짝');
      else if ( nMyBet % 100000 >= 10000 ) arrResult.push('파워볼 홀');
      return arrResult.join(" & ")
    },
    filterChoiceLabel ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 'PBALL-ODD': strLabel += '파워볼 홀'; break;
        case 'PBALL-EVEN': strLabel += '파워볼 짝'; break;
        case 'PBALL-UNDER': strLabel += '파워볼 언더'; break;
        case 'PBALL-OVER': strLabel += '파워볼 오버'; break;
        case 'NBALL-ODD': strLabel += '일반볼 홀'; break;
        case 'NBALL-EVEN': strLabel += '일반볼 짝'; break;
        case 'NBALL-UNDER': strLabel += '일반볼 언더'; break;
        case 'NBALL-OVER': strLabel += '일반볼 오버'; break;
        case 'NBALL-HIGH': strLabel += '일반볼 대'; break;
        case 'NBALL-NORMAL': strLabel += '일반볼 중'; break;
        case 'NBALL-LOW': ; strLabel += '일반볼 소'; break;
      }
      return strLabel;
    },
    filterResult ( result ){
      if ( !result.powerBall || result.normalBalls.length<1 ) return ''
      var strResult = result.normalBalls + ' & ' + result.powerBall;
      return strResult;
    },
    filterUserId (userId) {
      let res = userId.substring(0, 2)
      for (let index = 3; index < userId.length; index++) {
        res += "*"
      }
      return res
    }
  },
  data() {
    return {
      gameCategory: 'mini',
      gameType: 'PowerBall',
      oddsList: [],
      winMoneyList: [],
      rollingList: [],
      miniWinCountList: [],
      winningList: [],
      bettingCountList: [],
      total: 0,
      koreanMonth: 1,
      koreanDay: 1,
      isShowMobile: false,
      listLoading: false,
      listQuery:{
        gameType: 'PowerBall',
        userLoginId: '',
        page: 1,
        limit: 8
      },
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1)
    this.getList();
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Fame')
    this.initframe()
  },
  watch: {
    screenWidth(val) {
      this.initframe()
    }
  },
  methods: {
    getBackColor,
    getPageBackColor,
    // 프레임사이즈 설정
    initframe() {
      if (this.screenWidth > 1440) {
        this.isShowMobile = false
      } else {
        this.isShowMobile = true
      }
    },
    // 명예의 전당 리스트 얻기
    getList() {
      if (!this.currentUser) return 
      this.oddsList = []
      this.winMoneyList = []
      this.rollingList = []
      //this.bettingCountList = []

      fameService.find()
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.oddsList = res.data.oddsList
            this.winMoneyList = res.data.winMoneyList
            this.rollingList = res.data.rollingList
            this.miniWinCountList = res.data.miniWinCountList
            this.koreanMonth = res.data.month
            this.koreanDay = res.data.day
          }
        })
        .catch((err) => { console.log(err.message); })
    }
  }
}
</script>
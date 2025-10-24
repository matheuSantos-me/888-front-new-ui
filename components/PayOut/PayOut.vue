<template>
  <div>
    <el-row>
      <el-row v-if="layoutType == 'layout2'" class="display-center" style="border-bottom: 1px solid #292929">
        <el-row>
          <div :class="[{ on: tabType == 0 }, `tab-${themeType}`]" @click="onClickTab(0)">
            출금
          </div>
          <div :class="[{ on: tabType == 1 }, `tab-${themeType}`]" @click="onClickTab(1)">
            출금내역
          </div>
          <div v-if="isShowMobile" :class="[{ on: tabType == 2 }, `tab-${themeType}`]" @click="onClickTab(2)">
            출금규정
          </div>
        </el-row>
      </el-row>
      <el-row v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 0)" :class="{'display-flex': !isShowMobile}">
        <div :style="isShowMobile ? 'width: 100%;' : 'width: 58%;'" :class="{'p-r-35': !isShowMobile && layoutType != 'layout2','p-r-24': !isMobile && layoutType == 'layout2'}">
          <el-row v-if="layoutType == 'layout2' && !isMobile" class="f-w-700 p-t-24 p-b-24 p-l-24">
            <div style="background: #121214; width: calc(33.3% - 8px); float: left; margin-right: 12px;">
              <el-row style="padding: 16px 24px; border-radius: 6px">
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
            <div style="background: #121214; width: calc(33.3% - 8px); float: left; margin-right: 12px;">
              <el-row style="padding: 16px 24px; border-radius: 6px">
                <div class="float-left display-center">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" class="m-t-5" />
                </div>
                <div class="float-left f-s-12 p-l-24">
                  <el-row> 카지노캐쉬 </el-row>
                  <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(currentUser.cash.casinomoney, "원") }}
                  </el-row>
                </div>
              </el-row>
            </div>
            <div style="background: #121214; width: calc(33.3% - 8px); float: left;">
              <el-row style="padding: 16px 24px; border-radius: 6px">
                <div class="float-left display-center">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" class="m-t-5" />
                </div>
                <div class="float-left f-s-12 p-l-24">
                  <el-row> 포커캐쉬 </el-row>
                  <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(currentUser.cash.pokermoney, "원") }}
                  </el-row>
                </div>
              </el-row>
            </div>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" class="m-t-20 f-w-700 p-b-20" :class="isMobile ? 'p-l-20 p-r-20' : 'p-l-50 p-r-50'">
            <el-row v-if="themeType != 'green'" class="f-w-700 m-b-20" :class="isMobile ? 'f-s-16' : 'f-s-22'">
              출금 지갑선택
            </el-row>
            <el-row class="display-flex" style="gap: 8px;">
              <div v-if="themeType != 'green'" class="wallet-type m-r-12" :class="[cashType == 0 ? `on-${themeType}` : '']" @click="onSelectCashType(0)">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img v-if="!isMobile" :src="cashType == 0 ? `/image/Money/${themeType}/SportsOn.png` : `/image/Money/${themeType}/SportsOff.png`" style="margin-top: -8px" width="20" />
                  <span :class="[`moneymove-cash-${themeType}`, { active: cashType == 0 }]">스포츠캐쉬</span>
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="[`moneymove-cash-${themeType}`, { active: cashType == 0 }]">
                  {{ currencyFormat(currentUser.cash.sportsmoney, "원") }}
                </el-row>
              </div>
              <div v-if="isAvailCasino && themeType != 'green'" class="wallet-type m-r-12" :class="cashType == 1 ? `on-${themeType}` : ''" @click="onSelectCashType(1)">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img v-if="!isMobile" :src="cashType == 1 ? `/image/Money/${themeType}/CasinoCash.png` : `/image/Money/${themeType}/CasinoCashOff.png`" style="margin-top: -8px" />
                  <span :class="[`moneymove-cash-${themeType}`, { active: cashType == 1 }]">카지노캐쉬</span>
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="[`moneymove-cash-${themeType}`, { active: cashType == 1 }]">
                  {{ currencyFormat(currentUser.cash.casinomoney, "원") }}
                </el-row>
              </div>
              <div v-if="isUsePoker && themeType != 'green'" class="wallet-type" :class="cashType == 2 ? `on-${themeType}` : ''" @click="onSelectCashType(2)">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img v-if="!isMobile" :src="cashType == 2 ? `/image/Money/${themeType}/CasinoCash.png` : `/image/Money/${themeType}/CasinoCashOff.png`" style="margin-top: -8px" />
                  <span :class="[`moneymove-cash-${themeType}`, { active: cashType == 2 }]">포커캐쉬</span>
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="[`moneymove-cash-${themeType}`, { active: cashType == 2 }]">
                  {{ currencyFormat(currentUser.cash.pokermoney, "원") }}
                </el-row>
              </div>
              <div v-if="themeType == 'green'" class="cursor on-green'" :class="isMobile ? 'f-s-16' : 'f-s-22'" @click="onSelectCashType(1)">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" style="margin-top: -8px" />
                  <span :class="[`moneymove-cash-${themeType}`, 'active']">카지노캐쉬</span>
                  <span class="f-s-16 m-t-5" :class="[`moneymove-cash-${themeType}`, 'active']">{{currencyFormat(currentUser.cash.casinomoney, "원")}}</span>
                </el-row>
              </div>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout2'" class="m-t-24 f-w-700 p-b-24" :class="isMobile ? 'p-l-16 p-r-16' : 'p-l-24 p-r-24'">
            <div class="payout-radio" :class="{ on: cashType == 0 }" @click="onSelectCashType(0)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">스포츠캐쉬</div>
            </div>
            <div class="payout-radio m-l-24" :class="{ on: cashType == 1 }" @click="onSelectCashType(1)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">카지노캐쉬</div>
            </div>
            <div class="payout-radio m-l-24" :class="{ on: cashType == 2 }" @click="onSelectCashType(2)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">포커캐쉬</div>
            </div>
          </el-row>
          <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" style="border-radius: 6px; padding: 16px; 12px;" 
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
              출금지갑 선택
            </el-row>
            <div class="width-full f-s-13 m-t-12 display-flex" style="justify-content: space-between; gap: 8px;">
              <div :class="[{ on: cashType == 0 }, `payout-radio-${themeType}`]" @click="onSelectCashType(0)">
                <el-row>
                  <div :class="isMobile ? 'width-full' : 'float-left'">
                    <img :src="`/image/Home/${themeType}/sportscash.png`" width="24">
                    스포츠캐쉬
                  </div>
                  <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">{{currencyFormat(currentUser.cash.sportsmoney, '원')}}</div>
                </el-row>
              </div>
              <div :class="[{ on: cashType == 1 }, `payout-radio-${themeType}`]" @click="onSelectCashType(1)">
                <el-row>
                  <div :class="isMobile ? 'width-full' : 'float-left'">
                    <img :src="`/image/Home/${themeType}/casinocash.png`" width="24">
                    카지노캐쉬
                  </div>
                  <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">{{currencyFormat(currentUser.cash.casinomoney, '원')}}</div>
                </el-row>
              </div>
              <div v-if="isUsePoker" :class="[{ on: cashType == 2 }, `payout-radio-${themeType}`]" @click="onSelectCashType(2)">
                <el-row>
                  <div :class="isMobile ? 'width-full' : 'float-left'">
                    <img :src="`/image/Home/${themeType}/casinocash.png`" width="24">
                    포커캐쉬
                  </div>
                  <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">{{currencyFormat(currentUser.cash.pokermoney, '원')}}</div>
                </el-row>
              </div>
            </div>
          </el-row>
          <el-row v-if="payOutSettings.isUseAutoRollng && (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6')" :class="`pay-panel-item-${themeType}`">
            <el-row>
              <el-row class="f-s-16 f-w-700">
                <span :class="`text-${themeType}`">롤링현황</span> - {{ getBonusName() }}
              </el-row>
              <el-row v-if="(cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100)" class="p-8 p-t-6 p-b-6 f-s-11 m-t-18 m-b-8" style="border-radius: 4px"
                :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'blue19' || themeType == 'blue11' ? 'text-white' : 'text-black']">
                100% 완료
              </el-row>
              <el-row v-else class="f-s-11 m-t-18 m-b-8" style="border-radius: 4px" :style="
                layoutType == 'layout3' || layoutType == 'layout6' ? 'background-color: #14161b;' : themeType == 'yellow17' ? 'background-color: #1b1b1b;' : themeType == 'blue19' || themeType == 'blue11' ? 'background-color: #030917;' : 'background-color: #030917;'">
                <el-row class="p-8 p-t-6 p-b-6" style="border-radius: 4px; min-width: 150px" :style="{ width: cashType == 2 ? rollingPercentPoker : rollingPercent + '%' }"
                  :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'blue19' || themeType == 'blue11' ? 'text-white' : 'text-black']">
                  {{ cashType == 2 ? rollingPercentPoker : rollingPercent }}% 진행중
                </el-row>
              </el-row>
              <el-row class="m-b-10">
                *아래 남은 롤링금액을 참고하시기 바랍니다
              </el-row>
              <div v-if="cashType != 2" style="display: flex; justify-content: space-between;">
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/sports.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                      스포츠-단폴 / 실시간
                    </el-row>
                    <el-row v-else class="m-t-3 m-b-5">
                      스포츠-단폴<br />실시간
                    </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ currencyFormat(money4Rolling.sports, "원") }}
                  </el-row>
                </div>
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/sports.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                      스포츠-멀티
                    </el-row>
                    <el-row v-else class="m-t-3 m-b-5"> 스포츠<br />멀티 </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ currencyFormat(money4Rolling.multi, "원") }}
                  </el-row>
                </div>
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/mini.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                      미니게임 / 가상스포츠
                    </el-row>
                    <el-row v-else class="m-t-3 m-b-5">
                      미니게임<br />가상스포츠
                    </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ currencyFormat(money4Rolling.mini, "원") }}
                  </el-row>
                </div>
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/casino.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                      카지노 / 슬롯
                    </el-row>
                    <el-row v-else class="m-t-3 m-b-5"> 카지노<br />슬롯 </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ currencyFormat(money4Rolling.casino, "원") }}
                  </el-row>
                </div>
              </div>
              <div v-if="cashType == 2" style="display: flex; justify-content: space-between;">
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/casino.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row class="m-t-3 m-b-5">
                      핸드 수
                    </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ money4Rolling.pokerHands }}
                  </el-row>
                </div>
                <div :class="`rolling-button-${themeType}`">
                  <el-row :class="`rolling-button-content-${themeType}`">
                    <el-row>
                      <img :src="`/image/Money/${themeType}/casino.png`" :width="isMobile ? 40 : 50" />
                    </el-row>
                    <el-row class="m-t-3 m-b-5">
                      포커 배팅금
                    </el-row>
                  </el-row>
                  <el-row class="f-s-11 m-t-8" style="border-radius: 4px;"
                    :class="[layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' ? 'bg-yellow17' : `bg-${themeType}`, themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' ? 'text-white' : 'text-black']">
                    {{ currencyFormat(money4Rolling.pokerAmount, "원") }}
                  </el-row>
                </div>
              </div>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
          <el-row :class="`pay-panel-item-${themeType}`">
            <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="f-w-700" :class="isMobile ? 'f-s-16' : 'f-s-22'">
              출금신청금액
            </el-row>
            <el-row v-else class="f-w-700" :class="isMobile ? 'f-s-16' : `f-s-14 text-${themeType}`">
              출금신청 금액
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'm-t-24' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-16' : 'm-t-20'">
              <input
                type="text"
                placeholder="출금(환전) 금액"
                :readonly="!payOutSettings.isUseAutoInput"
                v-on:keyup="onChangeRequestMoney()"
                v-model="requestMoney"
                :class="`pay-input-${themeType}`"
              />
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'm-t-24' : 'm-t-15'">
              <el-button
                type="primary"
                class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
                :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
                :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
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
                v-if="themeType=='gold11' || themeType=='red12' || themeType=='blue15'"
                type="primary"
                class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2"
                :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`"
                :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
                @click="onClickRequestMoney(10000000)"
                >1000만원</el-button
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
                class="float-right text-center p-0 height-35 m-l-2 m-r-2 m-t-2 cursor"
                :class="layoutType == 'layout2' ? 'grey3-button' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}-button` : 'red-button1'"
                :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'"
                @click="onClickRequestMoney(0)"
              >
                <img :src="layoutType == 'layout2' ? '/image/Money/Ic_delete.png' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '/image/Money/Ic_delete_other.png' : '/image/Money/Delete.png'"
                  :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-5' : 'm-t-3'"
                />
              </div>
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'p-t-24 p-b-24' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-48' : 'p-b-30 m-t-40'">
              <el-button
                v-if="isCanPayOut"
                type="primary"
                class="f-s-16 f-w-700 p-10 p-l-30 p-r-30"
                :disabled="(cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100) ? false : true"
                :class="{
                  'orange12-button width-full': layoutType == 'layout2',
                  'yellow201-button': themeType == 'yellow20',
                  'blue131-button': themeType == 'blue13',
                  'gold131-button': themeType == 'gold13',
                  'yellow111-button': themeType == 'yellow11',
                  'yellow141-button': themeType == 'yellow14',
                  'yellow181-button': themeType == 'yellow18',
                  'yellow211-button': themeType == 'yellow21',
                  'yellow161-button': themeType == 'yellow16',
                  'blue181-button': themeType == 'blue18',
                  'yellow151-button': themeType == 'yellow15',
                  'yellow171-button': themeType == 'yellow17',
                  'blue191-button': themeType == 'blue19',
                  'blue191-button': themeType == 'blue11',
                  'green-button2': !isBlackMode,
                  'red-button1': themeType != 'white' && layoutType == 'layout1'
                }"
                @click="onSendPayOutRequest"
                >{{ (cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100) ? "출금신청" : "롤링 완료 후 출금가능합니다." }}</el-button
              >
              <span v-else :class="getTextColor(themeType, 1)"><i class="fa fa-paper-plane m-r-5"></i>{{ cantPayOutReason }}</span>
            </el-row>
            <el-row
              v-if="((rollingPercent != 100 && cashType != 2) || (rollingPercentPoker != 100 && cashType == 2)) && layoutType != 'layout2'"
              class="position-absolute width-full height-full f-s-15"
              style="display: flex; justify-content: center; align-items: center; left: 0; top: 0;"
              :style="!isBlackMode ? 'background-color: rgba(255, 255, 255, 0.9);' : 'background-color: rgba(0, 0, 0, 0.9);'"
            >
              <div class="p-20 p-t-14 p-b-14 display-inlineblock text-center">
                <img :src="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `/image/Money/block1.png` : '/image/Money/block.png'" />
                <div class="m-t-20">롤링 완료 후 출금가능합니다.</div>
              </div>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
          <el-row v-if="payOutSettings.isUseAutoRollng && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :class="`pay-panel-item-${themeType}`">
            <el-row v-if="layoutType != 'layout2'" class="p-15" :class="!isBlackMode ? 'bg-white shadow' : 'bg-grey908'">
              <el-row class="f-s-16 f-w-700">
                {{ getBonusName() }} - <span :class="getTextColor(themeType, 1)">{{currencyFormat(cashType == 2 ? currentUser.cash.pokerLastDeposit : currentUser.cash.bonusMoney, "원")}}</span>
              </el-row>
              <el-row v-if="(cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100)" class="m-t-20">
                <img :src="'/image/Money/complete.png'" class="float-left" />
                <div class="float-left m-l-10">
                  <el-row class="f-s-15 f-w-700" style="color: #70a10a">완료</el-row>
                  <el-row class="f-s-12">*롤링을 완료했으므로 출금이 가능합니다.</el-row>
                </div>
              </el-row>
              <el-row v-else class="m-t-20">
                <img :src="`/image/Money/${themeType}/progress.png`" class="float-left" />
                <div class="float-left m-l-10">
                  <el-row class="f-s-15 f-w-700" :class="getTextColor(themeType, 1)">진행중</el-row>
                  <el-row :class="isMobile ? 'f-s-10' : 'f-s-12'">*나머지 보너스 롤링을 완료하셔야 출금이 가능합니다.</el-row>
                </div>
              </el-row>
              <el-row v-if="(cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100)" class="p-18 p-t-7 p-b-7 f-s-14 m-t-15 m-b-15" style="background-color: #70a10a; border-radius: 10px">
                100% 완료
              </el-row>
              <el-row v-else class="f-s-14 m-t-15 m-b-15" style="background-color: #fff; border-radius: 10px" :style="!isBlackMode ? 'border: 1px solid #000' : ''">
                <el-row class="p-18 p-t-7 p-b-7" :class="[getBackColor(themeType, 1), getTextColor(themeType, 2),]"
                  style="border-radius: 10px; min-width: 150px" :style="{ width: cashType == 2 ? rollingPercentPoker : rollingPercent + '%' }">
                  {{ cashType == 2 ? rollingPercentPoker : rollingPercent }}% 진행중
                </el-row>
              </el-row>
              <el-row class="m-b-10">
                보너스 롤링완료까지 필요한 배팅금액:
              </el-row>
              <el-row v-if="themeType != 'green' && cashType != 2" style="display: flex">
                <div class="m-r-10" :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/sports.png`" />
                  </el-row>
                  <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                    스포츠-단폴 / 실시간
                  </el-row>
                  <el-row v-else class="m-t-3 m-b-5">
                    스포츠-단폴<br />실시간
                  </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(money4Rolling.sports, "원") }}
                  </el-row>
                </div>
                <div class="m-r-10" :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/sports.png`" />
                  </el-row>
                  <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                    스포츠-멀티
                  </el-row>
                  <el-row v-else class="m-t-3 m-b-5"> 스포츠<br />멀티 </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(money4Rolling.multi, "원") }}
                  </el-row>
                </div>
                <div class="m-r-10" :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/mini.png`" />
                  </el-row>
                  <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                    미니게임 / 가상스포츠
                  </el-row>
                  <el-row v-else class="m-t-3 m-b-5">
                    미니게임<br />가상스포츠
                  </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(money4Rolling.mini, "원") }}
                  </el-row>
                </div>
                <div :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/casino.png`" />
                  </el-row>
                  <el-row v-if="!isMobile" class="m-t-3 m-b-5">
                    카지노 / 슬롯
                  </el-row>
                  <el-row v-else class="m-t-3 m-b-5"> 카지노<br />슬롯 </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(money4Rolling.casino, "원") }}
                  </el-row>
                </div>
              </el-row>
              <el-row v-if="themeType != 'green' && cashType == 2" style="display: flex">
                <div class="m-r-10" :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/sports.png`" />
                  </el-row>
                  <el-row class="m-t-3 m-b-5">
                    핸드 수
                  </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ money4Rolling.pokerHands }}
                  </el-row>
                </div>
                <div :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row>
                    <img :src="`/image/Money/${themeType}/sports.png`" />
                  </el-row>
                  <el-row class="m-t-3 m-b-5">
                    포커 배팅금
                  </el-row>
                  <el-row :class="getTextColor(themeType, 1)">
                    {{ currencyFormat(money4Rolling.pokerAmount, "원") }}
                  </el-row>
                </div>
              </el-row>
              <el-row v-if="themeType == 'green'" style="display: flex">
                <div class="m-r-10 width-full" :class="!isBlackMode ? 'rolling-button-white' : 'rolling-button'">
                  <el-row class="float-left p-l-20">
                    <img :src="`/image/Money/${themeType}/casino.png`" />
                    <span class="m-t-3 m-b-5 m-l-10"> 카지노 / 슬롯 </span>
                    <span :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.sports, "원") }}
                    </span>
                  </el-row>
                </div>
              </el-row>
            </el-row>
            <el-row v-else class="word-keep" style="border-radius: 6px; padding: 16px" :style="isMobile ? 'background: #202024;' : 'background: #141417;'">
              <div class="float-left" :style="isMobile ? 'width: 100%' : 'width: 40%'">
                <el-row>
                  {{ getBonusName() }} - 
                  <span :class="getTextColor(themeType, 1)">{{currencyFormat(cashType == 2 ? currentUser.cash.pokerLastDeposit : currentUser.cash.bonusMoney, "원")}}</span>
                </el-row>
                <el-row v-if="(cashType != 2 && rollingPercent == 100) || (cashType == 2 && rollingPercentPoker == 100)" class="m-t-20">
                  <div class="float-left" style="width: 24px">
                    <img :src="`/image/Money/${themeType}/100.png`" class="m-t-10" />
                  </div>
                  <div class="float-left p-l-10" style="width: calc(100% - 24px)">
                    <el-row class="f-s-15 f-w-700" style="color: #70a10a">완료</el-row>
                    <el-row class="f-s-12">*롤링을 완료했으므로 출금이 가능합니다.</el-row>
                  </div>
                </el-row>
                <el-row v-else :class="isMobile ? 'm-t-16 m-b-16' : 'm-t-35'">
                  <div class="float-left" style="width: 24px">
                    <img :src="`/image/Money/${themeType}/Ic_error.png`" class="m-t-15" />
                  </div>
                  <div class="float-left p-l-10" style="width: calc(100% - 24px)">
                    <el-row class="f-s-15 f-w-700" :class="getTextColor(themeType, 1)">진행중</el-row>
                    <el-row :class="isMobile ? 'f-s-10' : 'f-s-12'">*{{isMobile ? '' : '우측의'}} 남은 롤링을 참고하시기 바랍니다.</el-row>
                  </div>
                </el-row>
              </div>
              <div class="float-left" :style="isMobile ? 'width: 100%' : 'width: 60%'">
                <el-row class="f-s-12 text-right">
                  {{ this.rollingText }}
                </el-row>
                <el-row class="f-s-14 m-t-8" style="border-radius: 6px" :style="isMobile ? 'background-color: #121212;' : 'background-color: #1f1f24;'">
                  <el-row class="p-18 p-t-7 p-b-7" style="background: linear-gradient(270.12deg, #f46406 1.24%, rgba(244, 100, 6, 0) 101.07%); border-radius: 6px;"
                    :class="[getTextColor(themeType, 2)]" :style="{ width: cashType == 2 ? rollingPercentPoker : rollingPercent + '%' }">
                  </el-row>
                </el-row>
                <el-row v-if="themeType != 'green' && cashType != 2" style="display: flex">
                  <div class="m-r-10" :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5">
                      스포츠-단폴<br />실시간
                    </el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.sports, "원") }}
                    </el-row>
                  </div>
                  <div class="m-r-10" :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5"> 스포츠<br />멀티 </el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.multi, "원") }}
                    </el-row>
                  </div>
                  <div class="m-r-10" :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5">
                      미니게임<br />가상스포츠
                    </el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.mini, "원") }}
                    </el-row>
                  </div>
                  <div :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5"> 카지노<br />슬롯 </el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.casino, "원") }}
                    </el-row>
                  </div>
                </el-row>
                <el-row v-if="themeType != 'green' && cashType == 2" style="display: flex">
                  <div class="m-r-10" :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5">핸드 수</el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ money4Rolling.pokerHands }}
                    </el-row>
                  </div>
                  <div class="m-r-10" :class="`rolling-button-${themeType}`">
                    <el-row class="m-t-3 m-b-5">포커 배팅금</el-row>
                    <el-row :class="getTextColor(themeType, 1)">
                      {{ currencyFormat(money4Rolling.pokerAmount, "원") }}
                    </el-row>
                  </div>
                </el-row>
              </div>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
        </div>
        <div v-if="!isShowMobile" class="f-s-13" :class="`rule-bg-${themeType}`" style="width: 42%;">
          <PayOutRule v-if="isVisibleRule" />
          <PayRuleClose v-else :type="'payout'" :themeType="themeType" @event="showRule()" />
        </div>
      </el-row>
      <PayTable
        v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 1)"
        :type="'payout'"
        :logs="payOutLogs"
        :bonusSetting="null"
        :total="total"
        :limit="listQuery.limit"
        :page="listQuery.page"
        :isShowMobile="isShowMobile"
        @pageChange="handleCurrentChange"
        @deleteAll="deleteAll"
      />
    </el-row>
    <el-row v-if="isShowMobile && tabType == 2" class="p-16">
      <PayOutRule />
    </el-row>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat } from "~/assets/js/utils";
import {
  getTextColor,
  getBackColor
} from "~/assets/js/data/uicommon";
import PayOutRule from "~/components/PayOut/PayOutRule";
import PayTable from "~/components/Table/PayTable";
import PayRuleClose from "~/components/Money/PayRuleClose.vue";

const payLogClientService = feathers.service("client_payLog");
const payCreateService = feathers.service("/client-payinout");
const reqService = feathers.service("/client-request");
const casinoBalanceService = feathers.service("getBalanceTotal");
const mainService = feathers.service("main");

payLogClientService.timeout = 60000;
payCreateService.timeout = 60000
casinoBalanceService.timeout = 60000
reqService.timeout = 60000

export default {
  props: ["isShowMobile"],
  components: {
    PayOutRule,
    PayTable,
    PayRuleClose,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      bonusRolling: "getBonusRolling",
      payInSettings: "getPayInSettings",
      payOutSettings: "getPayOutSettings",
      gameSettings: "getGameSettings",
      isAvailCasino: "getIsAvailCasino",
      isUsePoker: "getIsUsePoker",
      pokerRedirect: "getPokerRedirect"
    }),
  },
  watch: {
    pokerRedirect(val) {
      if (this.pokerRedirect && this.isUsePoker) {
        this.cashType = 2
      } else {
        this.cashType = 0
      }
    }
  },
  data() {
    return {
      payOutLogs: [], // 출금내역
      todayPayOutLogs: [], // 오늘출금내역
      total: 0,
      isVisibleRule: false, // 출금규정패널 보여주기 상태
      listQuery: {
        page: 1,
        limit: 8,
      },
      isRollingComplete: true,
      rollingPercent: 100,
      rollingPercentPoker: 100,
      cashType: 0,
      requestMoney: "",
      isCanPayOut: true,
      cantPayOutReason: "",
      isUpdatedCasinoMoney: false,
      tabType: 0,
      loadingPayOut: false,
      rollingText: "",
      money4Rolling: {
        sports: 0,
        multi: 0,
        mini: 0,
        casino: 0,
        pokerAmount: 0,
        pokerHands: 0
      },
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);

    if ((this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') && !this.isMobile) this.isVisibleRule = true;
    if (this.themeType == "green") this.cashType = 1;

    if (this.pokerRedirect && this.isUsePoker) {
      this.cashType = 2
    }

    this.getList();

    if (!this.currentUser) return

    mainService.off("payInOutUpdated");
    mainService.on("payInOutUpdated", (patchData) => {
      let index = this.payOutLogs.findIndex((log) => log._id == patchData._id);
      if (index > -1) {
        this.payOutLogs[index].updatedAt = patchData.updatedAt;
        this.payOutLogs[index].state = patchData.state;
        if (patchData.state == 2) {
          this.isCanPayOut = false;
          this.cantPayOutReason = "재환전 대기시간은 " + this.payOutSettings.payOutDelay + "분입니다.";
        }
      }
    });

    mainService.off('payCreated')
    mainService.on('payCreated', (res) => {
      this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      if (res.code != 1) {
        this.loadingPayOut = false
        this.$nuxt.$loading.finish();
        return;
      }
      if (this.payOutLogs.length > 8) {
        this.payOutLogs.splice(this.payOutLogs.length - 1, 1);
        this.payOutLogs.unshift(res.data.payInfo);
      } else {
        this.payOutLogs.unshift(res.data.payInfo);
      }
      this.total++;
      this.isCanPayOut = false;
      this.cantPayOutReason = "출금(환전) 처리대기 중인 요청 건이 존재합니다.";
      this.loadingPayOut = false
      this.$nuxt.$loading.finish();
    })

    // 카지노머니 리프리쉬
    if (!this.isAvailCasino || !this.gameSettings.Casino.gameStatus_manual)
      return;
    
    casinoBalanceService.timeout = 30000;
    casinoBalanceService.find().then((res) => {
      if (res.code != 1) {
        console.log(res.message)
      } else {
        this.isUpdatedCasinoMoney = true;
      }
    });
  },
  destroyed() {
    mainService.off("payInOutUpdated");
  },
  methods: {
    currencyFormat,
    getTextColor,
    getBackColor,
    getRollingPercent() {
      let percent = this.rollingPercent
      if (this.cashType == 2) percent = this.rollingPercentPoker
      this.rollingText = `${percent}% ${percent == 100 ? '완료' : '진행중'}`;
    },
    // 출금요청 보내기
    async onSendPayOutRequest() {
      if (this.loadingPayOut) return
      
      if (!this.currentUser) {
        return;
      }
      this.loadingPayOut = true
      this.$nuxt.$loading.start();
      if (this.themeType == 'blue13' || this.themeType == 'yellow11' || this.layoutType == 'layout2') {
        let res = await payCreateService.find()
        if (res.code != 1) {
          this.showMessage("알림메시지", `잠시후 요청해주세요.|${res.message}`, "닫기[Close]", 2);
          this.loadingPayOut = false
          this.$nuxt.$loading.finish();
        } else {
          this.$nuxt.$loading.finish();
          if (res.data >= 10) {
            this.$confirm('현재 출금 대기 인원이 15명 이상으로 30분 이상 소요될 수 있습니다. 출금 신청 하시겠습니까?', '알림메시지', {
              confirmButtonText: '출금 신청',
              cancelButtonText: '취소',
              type: 'warning'
            }).then(() => {
              this.processPayOut()
            }).catch(() => {
              this.loadingPayOut = false
            });
          } else {
            this.processPayOut()
          }
        }
      } else {
        this.processPayOut()
      }
    },
    async processPayOut() {
      try {
        this.$nuxt.$loading.start();
        let money = parseInt(String(this.requestMoney).replace(/,/gi, ""));
        if (money <= 0 || this.requestMoney == "") {
          this.showMessage("알림메시지", "출금(환전) 금액을 입력하세요.", "닫기[Close]", 2);
          this.loadingPayOut = false
          this.$nuxt.$loading.finish();
          return;
        }
        let data = {
          requestType: 1,
          payType: 1, // 신청형태. 0: 입금, 1: 출금
          bonusType: 0, // 0: 보너스없음. 1: 스포츠첫충10% 2: 카지노첫충6%, 3:스포츠매충6%, 4:카지노첫충4%, 5: 어드민수동보너스
          cashType: this.cashType, // 0: 스포츠지갑, 1: 카지노지갑.
          payInfo: {
            money: money, // 신청금액 혹은 어드민보너스금액
          },
        };

        let res = await reqService.patch(null, data)
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loadingPayOut = false
          this.$nuxt.$loading.finish();
        }
      } catch (err) {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
        this.loadingPayOut = false
        this.$nuxt.$loading.finish();
      }
    },
    // 보너스명 얻기
    getBonusName() {
      if (!this.currentUser) return "";

      let bonus = this.bonusRolling.data[this.bonusRolling.data.findIndex((b) => b.level == this.currentUser.level)];
      let bonusName = "";
      let percent = 0;
      if (this.cashType != 2) {
        switch (this.currentUser.cash.bonusType) {
          case 0:
            bonusName = "보너스를 선택하지 않음.";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionNoBonus})`
            break;
          case 1:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[0].rollingEndPercent : bonus.rollings[0].rollingPercent;
            bonusName = "스포츠 첫충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionSportsFirstBonus})`
            break;
          case 2:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[2].rollingEndPercent : bonus.rollings[2].rollingPercent;
            bonusName = "카지노 첫충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionCasinoFirstBonus})`
            break;
          case 3:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[1].rollingEndPercent : bonus.rollings[1].rollingPercent;
            bonusName = "스포츠 매충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionSportsEachBonus})`
            break;
          case 4:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[3].rollingEndPercent : bonus.rollings[3].rollingPercent;
            bonusName = "카지노 매충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionCasinoEachBounus})`
            break;
          case 5:
            bonusName = "관리자수동 보너스";
            break;
          case 6:
            bonusName = "출석현황 보너스";
            break;
          case 8:
            bonusName = "명예의 전당 보너스";
            break;
          case 9:
            bonusName = "지인추천 보너스";
            break;
          case 12:
            bonusName = "가입머니";
            break;
          case 13:
            bonusName = "입플 보너스";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionPlusBonus})`
            break;
          case 21:
            bonusName = "쿠폰";
            break;
          case 22:
            bonusName = "신규 보너스"
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionNewUserBonus})`
            break;
        }
      } else {
        switch (this.currentUser.cash.bonusTypePoker) {
          case 23:
            bonusName = "보너스를 선택하지 않음.";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionPokerNoBonus})`
            break;
          case 24:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[4].rollingEndPercent : bonus.rollings[4].rollingPercent;
            bonusName = "포커 첫충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionPokerFirstBonus})`
            break;
          case 25:
            percent = this.currentUser.cash.isWeekEnd ? bonus.rollings[5].rollingEndPercent : bonus.rollings[5].rollingPercent;
            bonusName = "포커 매충 " + percent + "%";
            if (this.layoutType == 'layout6') bonusName += ` (${this.payInSettings.cautionPokerEachBonus})`
            break;
        }
      }
      return bonusName;
    },
    // 출금규정 보여주기
    showRule() {
      this.isVisibleRule = !this.isVisibleRule;
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
    // 출금내역 얻기
    async getList() {
      try {
        if (!this.currentUser) return;
        this.payOutLogs = [];
        this.todayPayOutLogs = [];

        let res = await payLogClientService.find({
          query: { payType: 1, page: this.listQuery.page },
        });
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.payOutLogs = res.data.payLogs.data;
        this.todayPayOutLogs = res.data.todayPayOutLogs.data;
        if (res.data.isExistThreeHoursLog == 1) {
          this.isCanPayOut = false;
          this.cantPayOutReason = "재환전 대기시간은 " + this.payOutSettings.payOutDelay + "분입니다.";
        } else {
          if (this.todayPayOutLogs.length > 0) {
            if (this.todayPayOutLogs.findIndex((log) => log.state == 0) > -1) {
              this.isCanPayOut = false;
              this.cantPayOutReason = "출금(환전) 처리대기 중인 요청 건이 존재합니다.";
            }
          }
        }
        this.total = res.data.payLogs.total;
        this.rollingPercent = res.data.completeRollingPercent;
        this.rollingPercentPoker = res.data.completeRollingPercentPoker
        this.money4Rolling = res.data.money4Rolling;
        this.getRollingPercent()
      } catch (err) {
        console.log(err.message);
      }
    },
    // 현재 페이지 변경
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 지갑선택
    onSelectCashType(type) {
      this.cashType = type;
      this.getRollingPercent()
      this.onClickRequestMoney(0);
    },
    // 배팅금액선택시
    onClickRequestMoney(val) {
      // 로그인하지 않은 경우 리턴
      if (this.currentUser == null) return;

      let userMoney = this.cashType == 0 ? this.currentUser.cash.sportsmoney : this.cashType == 1 ? this.currentUser.cash.casinomoney : this.currentUser.cash.pokermoney;
      if (this.currentUser) {
        if (val == "max") {
          // 맥스버튼 누른 경우
          this.requestMoney = parseInt(userMoney / 10000) * 10000;
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
    // 3일전 내역 삭제
    deleteAll(id, index) {
      this.getList();
      this.showMessage("알림메시지", "3일전 출금내역이 삭제되었습니다.", "닫기[Close]", 1);
    },
    // 배팅머니 변경시 포맷
    onChangeRequestMoney() {
      let money = parseInt(String(this.requestMoney).replace(/,/gi, ""));
      let userMoney = this.cashType == 0 ? this.currentUser.cash.sportsmoney : this.cashType == 1 ? this.currentUser.cash.casinomoney : this.currentUser.cash.pokermoney;
      if (userMoney < money) {
        this.showMessage("알림메시지", "신청하신 금액이 보유한 금액을 초과합니다.", "닫기[Close]", 2);
        this.requestMoney = "";
        return;
      }
      let val = this.currencyFormat(this.requestMoney, "");
      val = val.substring(0, val.length - 1);
      if (val == "0") val = "";
      this.requestMoney = val;
    },
    onClickTab(val) {
      this.tabType = val;
    },
  },
};
</script>
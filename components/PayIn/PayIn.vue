<template>
  <div>
    <el-row>
      <el-row v-if="layoutType == 'layout2'" class="display-center" style="border-bottom: 1px solid #292929">
        <el-row>
          <div :class="[{'on': tabType == 0}, `tab-${themeType}`]" @click="onClickTab(0)">
            입금
          </div>
          <div :class="[{'on': tabType == 1}, `tab-${themeType}`]" @click="onClickTab(1)">
            입금내역
          </div>
          <div v-if="isShowMobile" :class="[{'on': tabType == 2}, `tab-${themeType}`]" @click="onClickTab(2)">
            입금규정
          </div>
        </el-row>
      </el-row>
      
      <el-row v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 0)" :class="{'display-flex': !isShowMobile}">
        <div :style="isShowMobile ? 'width: 100%;' : 'width: 58%;'" :class="{'p-r-35' : !isShowMobile && layoutType != 'layout2', 'p-r-24': !isMobile && layoutType == 'layout2'}">
          <el-row v-if="layoutType == 'layout2' && !isMobile" class="f-w-700" 
            :class="[{'display-center' : isMobile, 'p-l-24': !isMobile && layoutType == 'layout2'}, layoutType == 'layout2' ? 'p-t-24 p-b-24' : 'p-t-20 p-b-20']">
            <div v-if="themeType != 'green'" class="float-left" :style="layoutType == 'layout2' ? 'background: #121214; width: calc(33.3% - 8px); margin-right: 12px;' : 'margin-right: 40px;'">
              <el-row v-if="layoutType != 'layout2'">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img :src="`/image/Money/${themeType}/SportsOn.png`" :style="!isMobile ? 'margin-top: -8px' : ''"> 스포츠캐쉬
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="getTextColor(themeType, 1)" style="padding-left: 28px">
                  {{currencyFormat(currentUser.cash.sportsmoney, '원')}}
                </el-row>
              </el-row>
              <el-row v-else style="padding: 16px 24px; border-radius: 6px;">
                <div class="float-left display-center">
                  <img :src="`/image/Money/${themeType}/SportsOn.png`" class="m-t-5">
                </div>
                <div class="float-left f-s-12 p-l-24">
                  <el-row>
                    스포츠캐쉬
                  </el-row>
                  <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                    {{currencyFormat(currentUser.cash.sportsmoney, '원')}}
                  </el-row>
                </div>
              </el-row>
            </div>
            <div v-if="isAvailCasino" class="float-left" :style="layoutType == 'layout2' ? 'background: #121214; width: calc(33.3% - 8px); margin-right: 12px;' : 'padding: 0 18px;'">
              <el-row v-if="layoutType != 'layout2'">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" :style="!isMobile ? 'margin-top: -8px' : ''"> 카지노캐쉬
                  <span v-if="themeType == 'green'" :class="getTextColor(themeType, 1)">{{currencyFormat(currentUser.cash.casinomoney, '원')}}</span>
                </el-row>
                <el-row v-if="themeType != 'green'" class="f-s-16 m-t-5" :class="getTextColor(themeType, 1)" style="padding-left: 33px">
                  {{currencyFormat(currentUser.cash.casinomoney, '원')}}
                </el-row>
              </el-row>
              <el-row v-else style="padding: 16px 24px; border-radius: 6px;">
                <div class="float-left display-center">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" class="m-t-5">
                </div>
                <div class="float-left f-s-12 p-l-24 text-left">
                  <el-row>
                    카지노캐쉬
                  </el-row>
                  <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                    {{currencyFormat(currentUser.cash.casinomoney, '원')}}
                  </el-row>
                </div>
              </el-row>
            </div>
            <div v-if="isUsePoker" class="float-left" :style="layoutType == 'layout2' ? 'background: #121214; width: calc(33.3% - 8px);' : 'margin-right: 40px;'">
              <el-row v-if="layoutType != 'layout2'">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" :style="!isMobile ? 'margin-top: -8px' : ''"> 포커캐쉬
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="getTextColor(themeType, 1)" style="padding-left: 28px">
                  {{currencyFormat(currentUser.cash.pokermoney, '원')}}
                </el-row>
              </el-row>
              <el-row v-else style="padding: 16px 24px; border-radius: 6px;">
                <div class="float-left display-center">
                  <img :src="`/image/Money/${themeType}/CasinoCash.png`" class="m-t-5">
                </div>
                <div class="float-left f-s-12 p-l-24">
                  <el-row>
                    포커캐쉬
                  </el-row>
                  <el-row class="f-s-14" :class="getTextColor(themeType, 1)">
                    {{currencyFormat(currentUser.cash.pokermoney, '원')}}
                  </el-row>
                </div>
              </el-row>
            </div>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" class="m-t-20 f-w-700 p-b-20" :class="isMobile ? 'p-l-20 p-r-20' : 'p-l-50 p-r-50'">
            <el-row v-if="themeType != 'green'" class="f-w-700 m-b-20" :class="isMobile ? 'f-s-16' : 'f-s-22'">
              입금 지갑선택
            </el-row>
            <el-row class="display-flex" style="gap: 8px;">
              <div v-if="themeType != 'green'" class="wallet-type" :class="[cashType == 0 ? `on-${themeType}` : '']" @click="onSelectCashType(0)">
                <el-row :class="isMobile ? 'f-s-16' : 'f-s-22'">
                  <img v-if="!isMobile" :src="cashType == 0 ? `/image/Money/${themeType}/SportsOn.png` : `/image/Money/${themeType}/SportsOff.png`" style="margin-top: -8px" width="20" />
                  <span :class="[`moneymove-cash-${themeType}`, { active: cashType == 0 }]">스포츠캐쉬</span>
                </el-row>
                <el-row class="f-s-16 m-t-5" :class="[`moneymove-cash-${themeType}`, { active: cashType == 0 }]">
                  {{ currencyFormat(currentUser.cash.sportsmoney, "원") }}
                </el-row>
              </div>
              <div v-if="isAvailCasino && themeType != 'green'" class="wallet-type" :class="cashType == 1 ? `on-${themeType}` : ''" @click="onSelectCashType(1)">
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
          <el-row v-if="themeType == 'orange12'" class="m-t-24 f-w-700 p-b-24" :class="isMobile ? 'p-l-16 p-r-16' : 'p-l-24 p-r-24'">
            <div class="payout-radio" :class="{ on: cashType == 0 }" @click="onSelectCashType(0)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">스포츠캐쉬</div>
            </div>
            <div class="payout-radio m-l-24" :class="{ on: cashType == 1 }" @click="onSelectCashType(1)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">카지노캐쉬</div>
            </div>
            <div v-if="isUsePoker" class="payout-radio m-l-24" :class="{ on: cashType == 2 }" @click="onSelectCashType(2)">
              <img :src="`/image/Money/${themeType}/radio0.svg`" class="float-left m-r-8" />
              <div class="float-left m-t-3">포커캐쉬</div>
            </div>
          </el-row>
          <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" style="border-radius: 6px; padding: 16px 12px;" 
            :class="{
              'bg-black30': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6', 
              'bg-black39': themeType == 'yellow16', 
              'bg-black22': themeType == 'yellow18', 
              'bg-black51': themeType == 'yellow14' || themeType == 'yellow11', 
              'bg-blue903': themeType == 'gold13', 
              'bg-black35': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
              'bg-black41': themeType == 'yellow17',
              'bg-blue902': themeType == 'blue19',
              'bg-grey914': themeType == 'blue11'}">
            <el-row class="f-s-14" :class="`text-${themeType}`">
              입금 지갑 선택
            </el-row>
            <el-row class="m-t-12 f-s-13" style="display: flex; justify-content: space-between; gap: 8px;">
              <div v-if="isUsePoker" :class="[{ on: cashType == 3 }, `payout-radio-${themeType}`]" @click="onSelectCashType(3)">
                <el-row>
                  <div :class="isMobile ? 'width-full' : 'float-left'">
                    <img :src="`/image/Home/${themeType}/casinocash.png`" width="24" class="m-r-4">
                    보유캐쉬
                  </div>
                  <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">
                    {{currencyFormat(currentUser.cash.balancemoney, '원')}}
                  </div>
                </el-row>
              </div>
              <div :class="[{ on: cashType == 0 }, `payout-radio-${themeType}`]" @click="onSelectCashType(0)">
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
              <div :class="[{ on: cashType == 1 }, `payout-radio-${themeType}`]" @click="onSelectCashType(1)">
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
              <div v-if="isUsePoker" :class="[{ on: cashType == 2 }, `payout-radio-${themeType}`]" @click="onSelectCashType(2)">
                <el-row>
                  <div :class="isMobile ? 'width-full' : 'float-left'">
                    <img :src="`/image/Home/${themeType}/casinocash.png`" width="24" class="m-r-4">
                    포커캐쉬
                  </div>
                  <div :class="[isMobile ? 'width-full text-center' : 'float-right m-t-2', `text-${themeType}`]">
                    {{currencyFormat(currentUser.cash.pokermoney, '원')}}
                  </div>
                </el-row>
              </div>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
          <el-row :class="[
            {
              'display-center': isMobile && layoutType != 'layout2',
              'p-l-50 p-r-50': !isMobile && layoutType != 'layout2',
              'p-l-16 p-r-16': isMobile && layoutType == 'layout2',
              'p-l-24': !isMobile && layoutType == 'layout2'
            }, 
            layoutType == 'layout2' ? 'p-t-24 p-b-24' : layoutType == 'layout5' ? 'p-t-16 p-b-0' : 'p-t-20 p-b-20']">
            <el-row v-if="!isUseQuickQuestion" class="f-w-700" :class="isMobile ? 'f-s-12' : 'f-s-14'">
              ※ <span :class="getTextColor(themeType, 1)">계좌문의</span>는 입금신청 시 자동으로 관리자에게 신청됩니다.
            </el-row>
            <el-row v-else class="f-w-700" :class="isMobile ? 'f-s-12' : 'f-s-14'">
              <el-button type="primary" class="float-left width-160" :loading="loadingCustomer" @click="onClickSendQuestion(0)">빠른계좌문의</el-button>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
          <el-row :class="`pay-panel-item-${themeType}`">
            <el-row v-if="layoutType == 'layout1'" class="f-w-700 m-b-12" :class="isMobile ? 'f-s-16' : 'f-s-22'">
              <div class="float-left">보너스 선택</div>
            </el-row>
            <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="f-s-14 p-b-24" :class="`text-${themeType}`">
              보너스 선택 <span class="text-white">- {{getBonusName()}}</span>
            </el-row>
            <el-row v-if="bonusSetting && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'">
              <el-col :span="24">
                <div class="main-select cursor p-12" 
                  :class="[
                    isMobile ? 'f-s-12' : 'f-s-15', 
                    { 'bg-white shadow': !isBlackMode, 'bg-grey918': layoutType == 'layout2' && !isMobile, 'bg-grey920': layoutType == 'layout2' && isMobile}
                  ]" @click="showBonusPanel">
                  <span>{{getBonusName()}}</span>
                  <img v-if="layoutType != 'layout2'" :src="`/image/Money/${themeType}/Down.png`" class="float-right m-t-7">
                  <i v-else id="collapse-0" class="fa m-t-3 float-right fa-chevron-down text-white"></i>
                </div>
                <div v-show="isVisibleBonusPanel" class="main-select-drop" 
                  :class="{ 'bg-white shadow': !isBlackMode, 'bg-grey918': layoutType == 'layout2' && !isMobile, 'bg-grey920': layoutType == 'layout2' && isMobile}">
                  <el-row v-if="cashType != 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(0)">
                    <div :class="`main-select-no-img-${themeType}`"></div>
                    <div class="main-select-text display-center-vertical" :style="payInSettings.cautionNoBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        보너스를 선택하지 않음.
                      </el-row>
                      <el-row v-if="payInSettings.cautionNoBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionNoBonus}}
                      </el-row>
                    </div>
                    </div>
                  </el-row>
                  <el-row v-else class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(23)">
                    <div :class="`main-select-no-img-${themeType}`"></div>
                    <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerNoBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        보너스를 선택하지 않음.
                      </el-row>
                      <el-row v-if="payInSettings.cautionPokerNoBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionPokerNoBonus}}
                      </el-row>
                    </div>
                    </div>
                  </el-row>
                  <el-row v-if="canSelectBonus.payInPlus && !currentUser.isBlockBonus && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(13)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPlusBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row v-if="layoutType != 'layout2' && themeType != 'blue13' && themeType != 'yellow11'" class="width-full text-left">
                            입플 보너스 - 최대 {{currencyFormat(payInPlus.maxMoney, '원')}}까지.
                          </el-row>
                          <el-row v-if="layoutType == 'layout2' || themeType == 'blue13' || themeType == 'yellow11'" class="width-full text-left">
                            스포츠 - 신규 첫충 보너스(입플) - 최대 {{currencyFormat(payInPlus.maxMoney, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionPlusBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionPlusBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="canSelectBonus.newUserBonus && !currentUser.isBlockBonus && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(22)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionNewUserBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            신규 보너스 - 최대 {{currencyFormat(newUserBonus.maxMoney, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionNewUserBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionNewUserBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(0) && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(1)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionSportsFirstBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            스포츠 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[0].rollingEndPercent > 0 ? bonusSetting.rollings[0].rollingEndPercent : bonusSetting.rollings[0].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayIn, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionSportsFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionSportsFirstBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(1) && cashType == 1" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(2)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionCasinoFirstBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            카지노 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[2].rollingEndPercent > 0 ? bonusSetting.rollings[2].rollingEndPercent : bonusSetting.rollings[2].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayInCasino, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionCasinoFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionCasinoFirstBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(24) && cashType == 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(24)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerFirstBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            포커 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[4].rollingEndPercent > 0 ? bonusSetting.rollings[4].rollingEndPercent : bonusSetting.rollings[4].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayInPoker, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionPokerFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionPokerFirstBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(2) && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(3)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionSportsEachBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            스포츠 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[1].rollingEndPercent > 0 ? bonusSetting.rollings[1].rollingEndPercent : bonusSetting.rollings[1].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayIn, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionSportsEachBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionSportsEachBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(3) && cashType == 1" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(4)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionCasinoEachBounus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            카지노 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[3].rollingEndPercent > 0 ? bonusSetting.rollings[3].rollingEndPercent : bonusSetting.rollings[3].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayInCasino, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionCasinoEachBounus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionCasinoEachBounus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(25) && cashType == 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(25)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerEachBonus != '' ? 'flex-direction: column;' : ''">
                          <el-row class="width-full text-left">
                            포커 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[5].rollingEndPercent > 0 ? bonusSetting.rollings[5].rollingEndPercent : bonusSetting.rollings[5].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayInPoker, '원')}}까지.
                          </el-row>
                          <el-row v-if="payInSettings.cautionPokerEachBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                            {{payInSettings.cautionPokerEachBonus}}
                          </el-row>
                      </div>
                    </div>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <!-- this is the row wher we put the code cahnge values  -->
            <el-row v-if="bonusSetting && (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6')">
              <div style="display: flex; justify-content: space-around;">
                <!-- new tab code is present under this section -->
                <div v-if="cashType == 3" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 0}]" 
                @click="onSelectBonus(3)"
                >
                  <!-- <div>helllo show the valuews</div> -->
                  <div :class="`pay-bonus-button-${themeType}`">
                      <img :src="`/image/Money/${themeType}/no.png`" class="img-bonus-no">
                    </div>
                    <el-row class="text-center f-s-11 p-t-8">보너스 없음</el-row>
                </div>

                <div v-if="cashType != 3">
                  <div v-if="cashType != 2" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 0}]" @click="onSelectBonus(0)">
                    <div :class="`pay-bonus-button-${themeType}`">
                      <img :src="`/image/Money/${themeType}/no.png`" class="img-bonus-no">
                    </div>
                    <el-row class="text-center f-s-11 p-t-8">보너스 없음</el-row>
                  </div>
                  <div v-else :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 23}]" @click="onSelectBonus(23)">
                    <div :class="`pay-bonus-button-${themeType}`">
                      <img :src="`/image/Money/${themeType}/no.png`" class="img-bonus-no">
                    </div>
                    <el-row class="text-center f-s-11 p-t-8">보너스 없음</el-row>
                  </div>
                </div>
                <div v-if="canSelectBonus.payInPlus && !currentUser.isBlockBonus && cashType == 0" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 13}]" @click="onSelectBonus(13)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/plus.png`" class="img-bonus-plus">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">입플 보너스</el-row>
                </div>
                <div v-if="canSelectBonus.newUserBonus && !currentUser.isBlockBonus && cashType == 0" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 22}]" @click="onSelectBonus(22)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/plus.png`" class="img-bonus-plus">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">신규 보너스</el-row>
                </div>
                <div v-if="getCanSelectBonus(0) && cashType == 0" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 1}]" @click="onSelectBonus(1)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/sports.png`" class="img-bonus-sports">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">스포츠 첫충 {{isWeekEnd && bonusSetting.rollings[0].rollingEndPercent > 0 ? bonusSetting.rollings[0].rollingEndPercent : bonusSetting.rollings[0].rollingPercent}}%</el-row>
                </div>
                <div v-if="getCanSelectBonus(1) && cashType == 1" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 2}]" @click="onSelectBonus(2)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/casino.png`" class="img-bonus-casino">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">카지노 첫충 {{isWeekEnd && bonusSetting.rollings[2].rollingEndPercent > 0 ? bonusSetting.rollings[2].rollingEndPercent : bonusSetting.rollings[2].rollingPercent}}%</el-row>
                </div>
                <div v-if="getCanSelectBonus(24) && cashType == 2" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 24}]" @click="onSelectBonus(24)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/casino.png`" class="img-bonus-casino">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">포커 첫충 {{isWeekEnd && bonusSetting.rollings[4].rollingEndPercent > 0 ? bonusSetting.rollings[4].rollingEndPercent : bonusSetting.rollings[4].rollingPercent}}%</el-row>
                </div>
                <div v-if="getCanSelectBonus(2) && cashType == 0" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 3}]" @click="onSelectBonus(3)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/sports.png`" class="img-bonus-sports">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">스포츠 매충 {{isWeekEnd && bonusSetting.rollings[1].rollingEndPercent > 0 ? bonusSetting.rollings[1].rollingEndPercent : bonusSetting.rollings[1].rollingPercent}}%</el-row>
                </div>
                <div v-if="getCanSelectBonus(3) && cashType == 1" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 4}]" @click="onSelectBonus(4)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/casino.png`" class="img-bonus-casino">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">카지노 매충 {{isWeekEnd && bonusSetting.rollings[3].rollingEndPercent > 0 ? bonusSetting.rollings[3].rollingEndPercent : bonusSetting.rollings[3].rollingPercent}}%</el-row>
                </div>
                <div v-if="getCanSelectBonus(25) && cashType == 2" :class="[`pay-bonus-item-${themeType}`, {'on': bonusType == 25}]" @click="onSelectBonus(25)">
                  <div :class="`pay-bonus-button-${themeType}`">
                    <img :src="`/image/Money/${themeType}/casino.png`" class="img-bonus-casino">
                  </div>
                  <el-row class="text-center f-s-11 p-t-8">포커 매충 {{isWeekEnd && bonusSetting.rollings[5].rollingEndPercent > 0 ? bonusSetting.rollings[5].rollingEndPercent : bonusSetting.rollings[5].rollingPercent}}%</el-row>
                </div>
              </div>
            </el-row>
            <el-row v-if="getCanSelectBonus(4) && themeType != 'yellow15'" :class="[layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-32' : 'm-t-16', getTextColor(themeType, 1)]">
              {{themeType == 'orange14' ? '*카지노 보너스를 선택하시면, 카지노캐쉬로 즉시 지급처리 됩니다.' : themeType == 'gold12' ? '*보너스 미지급 선택시 최소 롤링으로 적용됩니다.' : '*카지노를 주로 이용하실 회원님은 반드시 카지노 보너스를 선택하셔야 합니다.'}}
            </el-row>
            <el-row v-if="themeType == 'gold11'" :class="[getTextColor(themeType, 1)]" class="m-t-8">
              *스포츠보너스 5% 로 충전후 카지노이용시 충전금액에 롤링1000% 이용하셔야합니다.<br>
              *스포츠보너스 15% 충전 후 미니게임, 카지노 이용 시 원금제외 보너스는 모두 몰수됩니다.<br>
            </el-row>
            <el-row v-if="themeType == 'gold11'" :class="[getTextColor(themeType, 1)]" class="m-t-8">
              *첫 입금보너스 5%, 최대 1.000,000원까지.<br>
              *포커보너스 5% 충전 시 롤링 300% , 200 핸드 이용하셔야합니다.<br>
            </el-row>
            <el-row v-if="themeType == 'red12' || themeType == 'blue15'" :class="[getTextColor(themeType, 1)]" class="m-t-8">
              *스포츠보너스 선택 후 카지노이용 시 롤링 1000% 입니다.
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
          <el-row :class="`pay-panel-item-${themeType}`">
            <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="f-w-700" :class="isMobile ? 'f-s-16' : 'f-s-22'">
              입금신청 금액
            </el-row>
            <el-row v-else class="f-s-14" :class="`text-${themeType}`">
              입금신청 금액
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'm-t-24' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-16' : 'm-t-20'">
              <input type="text" placeholder= "입금(충전) 금액" :readonly="!payInSettings.isUseAutoInput" v-on:keyup="onChangeRequestMoney()" v-model="requestMoney" :class="`pay-input-${themeType}`"> 
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'm-t-24' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-7 m-b-12' : 'm-t-15'">
              <el-button v-if="payInSettings.isUseThousandButton" type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(1000)">1천원</el-button>
              <el-button type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(10000)">1만원</el-button>
              <el-button v-if="!payInSettings.isUseThousandButton" type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(30000)">3만원</el-button>
              <el-button type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(50000)">5만원</el-button>
              <el-button type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(100000)">10만원</el-button>
              <el-button type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(500000)">50만원</el-button>
              <el-button type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(1000000)">100만원</el-button>
              <el-button v-if="isMobile || themeType == 'blue15' || themeType == 'red12' || themeType == 'gold11'" type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(3000000)">300만원</el-button>
              <el-button v-if="themeType == 'blue15' || themeType == 'red12' || themeType == 'gold11'" type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(5000000)">500만원</el-button>
              <el-button v-if="themeType == 'blue15' || themeType == 'red12' || themeType == 'gold11'" type="primary" class="float-left p-0 height-35 m-l-2 m-r-2 m-t-2" :class="layoutType == 'layout2' ? 'grey3-button' : `${themeType}-button`" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(10000000)">1000만원</el-button>
              <div type="primary" class="float-right p-0 m-l-2 m-r-2 cursor m-t-2 height-35 text-center" :class="layoutType == 'layout2' ? 'grey3-button' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}-button` : 'red-button1'" :style="isMobile ? 'width: calc(25% - 4px) !important;' : 'width: calc(14.2% - 4px) !important;'" @click="onClickRequestMoney(0)">
                <img :src="layoutType == 'layout2' ? '/image/Money/Ic_delete.png' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '/image/Money/Ic_delete_other.png' : '/image/Money/Delete.png'" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-t-5' : 'm-t-3'">
              </div>
            </el-row>
            <el-row v-if="layoutType == 'layout3' || themeType == 'blue18'" class="p-b-24">
              {{themeType == 'yellow21' || themeType == 'yellow14' ? '※ 빠른계좌문의 > 입금 > 입금 신청순으로 해주시면 가장 신속하게 처리됩니다 .' : '※ 계좌문의는 입금신청 시 자동으로 관리자에게 신청됩니다.'}}
            </el-row>
            <el-row :class="layoutType == 'layout2' ? 'm-t-48 m-b-48' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'p-b-30 m-t-40'">
              <el-button v-if="isCanPayIn" type="primary" 
                :class="layoutType == 'layout2' ? `${themeType}-button width-full` : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}1-button` : 'green-button2'" :loading="loadingPayIn" @click="onSendPayInRequest(0)">입금신청</el-button>
              <!-- <el-button v-if="isCanPayIn && themeType == 'orange13'" type="primary" class="green-button3">
                <a :href="getCoinUrl()" style="text-decoration: none !important;" target="_blank">
                  <img :src="'/image/Money/white/Coin.png'" width="21">코인입금
                </a>
              </el-button>
              <el-button v-if="isCanPayIn && themeType == 'orange13'" type="primary" class="green-button3" @click="onExchangeTraderCoin">
                <img :src="'/image/Money/white/CoinEx.png'" width="21">코인전환
              </el-button> -->
              <!-- <el-button v-if="isCanPayIn && (themeType == 'red11')" type="primary" class="green-button3">
                <a href="https://onepay1.co.kr/onepay/v2/join_done.do?shop_code=920220385" style="text-decoration: none !important;" target="_blank">
                  <img :src="'/image/Money/white/Coin.png'" width="21">코인회원가입
                </a>
              </el-button> -->
              <!-- <form v-if="themeType == 'blue16' && currentUser.level >= 1 && currentUser.level <= 15" class="float-left m-r-10" target="_blank" ref="frm" name="frm" method="post" action="http://1one-pay.com/api_asp/" v-on:submit="submit">
                <input name="codes" style="display: none;" value="9frrg8fnjkula6o3" >
                <input name="ids" style="display: none;" :value="currentUser.userLoginId" >
                <input name="names" style="display: none;" :value="currentUser.bank.userName" >
                <input name="banknames" style="display: none;" :value="currentUser.bank.name" >
                <input name="banknums" style="display: none;" :value="currentUser.bank.accountNumber" >
                <button type="submit" class="green-button3"><img :src="'/image/Money/white/Coin.png'" width="21">코인입금</button>
              </form> -->
              <span v-if="!isCanPayIn" :class="getTextColor(themeType, 1)"><i class="fa fa-paper-plane m-r-5"></i>입금(충전) 처리대기 중인 요청 건이 존재합니다.</span>
            </el-row>
          </el-row>
          <el-row v-if="layoutType == 'layout1'" :style="!isBlackMode ? 'border-top: 1px solid #a2a2a2; border-bottom: 1px solid #a2a2a2;' : 'border-top: 2px solid #172027; border-bottom: 1px solid #000;'"></el-row>
        </div>
        <div v-if="!isShowMobile" class="f-s-13" :class="`rule-bg-${themeType}`" style="width: 42%;">
          <PayInRule v-if="isVisibleRule" />
          <PayRuleClose v-else :type="'payin'" :themeType="themeType" @event="showRule()" />
        </div>
      </el-row>
      <PayTable v-if="layoutType != 'layout2' || (layoutType == 'layout2' && tabType == 1)" :type="'payin'" :logs="payInLogs" :bonusSetting="bonusSetting" :total="total" :limit="listQuery.limit" :page="listQuery.page" :isShowMobile="isShowMobile" @pageChange="handleCurrentChange" @deleteAll="deleteAll" />
    </el-row>
    <!-- 나우코인전환 -->
    <div v-if="dialogFormVisible" class="coin-div">
      <div class="coin-dialog" :before-close="handleClose" style="border-radius: 10px;">
        <!-- 헤더 -->
        <el-row class="p-t-10 p-b-10" style="background: #ffcc00">
          <el-col :span="22" class="text-center display-center">
            <el-row>
              <div class="float-left f-s-24 f-w-900 p-l-5" :class="getTextColor(themeType, 1)">
                코인전환
              </div>
            </el-row>
          </el-col>
          <el-col :span="2" class="text-left">
            <div class="position-absolute p-5 text-black f-s-14 f-w-700 cursor" style="right: 20px; top: 10px; border-radius: 5px;" @click="onClickCloseCoinDialog()">X</div>
          </el-col>
          </el-row>
          <!-- 헤더 끝 -->
          <!-- 로그인 -->
          <el-row class="m-t-35 p-l-10 p-r-10">
            <el-row v-if="bonusSetting">
              <el-col :span="24">
                <div class="main-select cursor p-12 'f-s-12" :class="[{'bg-white shadow': !isBlackMode}]" @click="showCoinBonusPanel">
                  <span>{{getBonusName()}}</span>
                  <img :src="`/image/Money/${themeType}/Down.png`" class="float-right m-t-7">
                </div>
                <div v-show="isVisibleCoinBonusPanel" class="main-select-drop" :class="{'bg-white shadow': !isBlackMode}">
                  <el-row v-if="cashType != 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(0)">
                      <div :class="`main-select-no-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionNoBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        보너스를 선택하지 않음.
                      </el-row>
                      <el-row v-if="payInSettings.cautionNoBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionNoBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-else class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(23)">
                      <div :class="`main-select-no-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerNoBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        보너스를 선택하지 않음.
                      </el-row>
                      <el-row v-if="payInSettings.cautionPokerNoBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionPokerNoBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="canSelectBonus.payInPlus && !currentUser.isBlockBonus && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(13)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPlusBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        입플 보너스 - 최대 {{currencyFormat(payInPlus.maxMoney, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionPlusBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionPlusBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="canSelectBonus.newUserBonus && !currentUser.isBlockBonus && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(22)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionNewUserBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        신규 보너스 - 최대 {{currencyFormat(newUserBonus.maxMoney, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionNewUserBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionNewUserBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(0) && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(1)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionSportsFirstBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        스포츠 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[0].rollingEndPercent > 0 ? bonusSetting.rollings[0].rollingEndPercent : bonusSetting.rollings[0].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayIn, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionSportsFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionSportsFirstBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(1) && cashType == 1" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(2)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionCasinoFirstBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        카지노 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[2].rollingEndPercent > 0 ? bonusSetting.rollings[2].rollingEndPercent : bonusSetting.rollings[2].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayInCasino, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionCasinoFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionCasinoFirstBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(24) && cashType == 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(24)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerFirstBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        포커 - 첫 입금보너스 {{isWeekEnd && bonusSetting.rollings[4].rollingEndPercent > 0 ? bonusSetting.rollings[4].rollingEndPercent : bonusSetting.rollings[4].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForFirstPayInPoker, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionPokerFirstBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionPokerFirstBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(2) && cashType == 0" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(3)">
                      <div :class="`main-select-sports-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionSportsEachBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        스포츠 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[1].rollingEndPercent > 0 ? bonusSetting.rollings[1].rollingEndPercent : bonusSetting.rollings[1].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayIn, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionSportsEachBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionSportsEachBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(3) && cashType == 1" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(4)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionCasinoEachBounus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        카지노 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[3].rollingEndPercent > 0 ? bonusSetting.rollings[3].rollingEndPercent : bonusSetting.rollings[3].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayInCasino, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionCasinoEachBounus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionCasinoEachBounus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                  <el-row v-if="getCanSelectBonus(25) && cashType == 2" class="p-5">
                    <div :class="`main-select-drop-item-${themeType}`" @click="onSelectBonus(25)">
                      <div :class="`main-select-casino-img-${themeType}`"></div>
                      <div class="main-select-text display-center-vertical" :style="payInSettings.cautionPokerEachBonus != '' ? 'flex-direction: column;' : ''">
                      <el-row class="width-full text-left">
                        포커 - 매 입금보너스 {{isWeekEnd && bonusSetting.rollings[5].rollingEndPercent > 0 ? bonusSetting.rollings[5].rollingEndPercent : bonusSetting.rollings[5].rollingPercent}}%, 최대 {{currencyFormat(payInSettings.maxMoneyForEachPayInPoker, '원')}}까지.
                      </el-row>
                      <el-row v-if="payInSettings.cautionPokerEachBonus != ''" class="text-left width-full" :class="[{'text-red905': !isBlackMode}, isMobile ? 'f-s-11' : 'f-s-13 m-t-5']">
                        {{payInSettings.cautionPokerEachBonus}}
                      </el-row>
                      </div>
                    </div>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8" class="m-t-10 f-s-14 f-w-900 text-black">보유 코인</el-col>
              <el-col :span="16">
                <el-input class="float-left coin-input" v-model="remainCoin" autoComplete="on" placeholder="개" :disabled="true" />
              </el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8" class="m-t-10 f-s-14 f-w-900 text-black">전환할 코인</el-col>
              <el-col :span="16">
                <el-input class="float-left coin-input" v-model="requestCoin" :disabled="false" @input="onKeyUpMobile" autoComplete="off" placeholder="개" />
              </el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-button id="captcha" type="primary" class="width-full white2-button" :loading="loadingPayIn" @click.native.prevent="onSendPayInRequest(1)">
                <img :src="'/image/Money/white/CoinEx.png'" width="21">코인전환
              </el-button>
          </el-row>
        </el-row>
        <!-- 로그인 끝 -->
      </div>
    </div>
    <el-row v-if="isShowMobile && tabType == 2" class="p-16">
      <PayInRule />
    </el-row>
    <!-- 나우코인전환 끝 -->
  </div>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import PayInRule from '~/components/PayIn/PayInRule'
import PayTable from "~/components/Table/PayTable"
import PayRuleClose from "~/components/Money/PayRuleClose.vue"
import { getTextColor } from '~/assets/js/data/uicommon.js'
import { currencyFormat } from '~/assets/js/utils'

const payCreateService = feathers.service('/client-request');
const payLogClientService = feathers.service('client_payLog')
const adminCustomerService = feathers.service('/client-customercenter')
const byeCoinService = feathers.service('client-byecoin')
const traderCoinService = feathers.service('client-tradercoin')
const coinMallService = feathers.service('client-coinmall')
const casinoBalanceService = feathers.service('getBalanceTotal')
const mainService = feathers.service('main')

payCreateService.timeout = 60000
payLogClientService.timeout = 60000
adminCustomerService.timeout = 60000
byeCoinService.timeout = 60000
coinMallService.timeout = 60000
traderCoinService.timeout = 60000
casinoBalanceService.timeout = 60000

export default {
  props: ["isShowMobile"],
  components: {
    PayInRule,
    PayTable,
    PayRuleClose
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      custmerDelay: "getCustmerDelay",
      isUseAutoAnswer: "getIsUseAutoAnswer",
      payInSettings: "getPayInSettings",
      isUseQuickQuestion: "getIsUseQuickQuestion",
      bonusRolling: "getBonusRolling",
      payInPlus: "getPayInPlus",
      newUserBonus: "getNewUserBonus",
      isAvailCasino: "getIsAvailCasino",
      isUseNoteRead: "getIsUseNoteRead",
      gameSettings: "getGameSettings",
      noteCount: "getNoteCount",
      isUsePoker: "getIsUsePoker",
      pokerRedirect: "getPokerRedirect"
    })
  },
  watch: {
    bonusRolling(val) {
      this.getBonusRolling()
    },
    pokerRedirect(val) {
      if (this.pokerRedirect && this.isUsePoker) {
        this.cashType = 2
        this.bonusType = 23
      } else {
        this.cashType = 0
        this.bonusType = 0
      }
    }
  },
  data() {

    return {
      isVisibleCoinBonusPanel: false,
      isVisibleBonusPanel: false,     // 보너스패널 보여주기 상태
      isVisibleRule: false,           // 입금규정패널 보여주기 상태
      bonusType: 0,                   // 보너스타입
      payInLogs: [],                  // 입금내역
      total: 0,                       // 입금내역 전체 갯수
      listQuery:{
        page: 1,                      // 현재 페이지 번호
        limit: 8                      // 페이지당 노출 갯수
      },
      isCanPayIn: true,               // 입금신청가능상태
      requestMoney: '',               // 신청금액
      isUpdatedCasinoMoney: false,
      bonusSetting: null,
      dialogFormVisible: false,
      isWeekEnd: false,
      remainCoin: 0,
      requestCoin: 0,
      tabType: 0,
      cashType: 0,
      coinWindow: null,
      canSelectBonus: {
        FirstSport: false,
        FirstCasino: false,
        FirstPoker: false,
        EachSport: false,
        EachCasino: false,
        EachPoker: false,
        payInPlus: false,
        newUserBonus: false
      },
      loadingCustomer: false,
      loadingPayIn: false,
      loadingCoin: false
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.getBonusRolling()
    this.getList();
    

    if ((this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') && !this.isMobile) {
      this.isVisibleRule = true
    }

    if (this.pokerRedirect && this.isUsePoker) {
      this.cashType = 2
      this.bonusType = 23
    }

    if (!this.currentUser) return

    // 입출금내역 패치
    mainService.off('payInOutUpdated')
    mainService.on('payInOutUpdated', (patchData) => {
      let index = this.payInLogs.findIndex(log => log._id == patchData._id)
      if (index > -1) {
        this.payInLogs[index].updatedAt = patchData.updatedAt
        this.payInLogs[index].state = patchData.state
        this.payInLogs[index].bonusType = patchData.bonusType
        this.isCanPayIn = true
      }
    })

    mainService.off('payCreated')
    mainService.on('payCreated', (res) => {
      this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      this.requestCoin = 0
      this.remainCoin = 0
      this.isVisibleCoinBonusPanel = false
      this.bonusType = 0;
      this.requestMoney = '';
      this.loadingPayIn = false
      this.$nuxt.$loading.finish()
      if (res.code == 1) {
        if(this.payInLogs.length > 8) {
          this.payInLogs.splice(this.payInLogs.length - 1, 1)
          this.payInLogs.unshift(res.data.payInfo)
        } else {
          this.payInLogs.unshift(res.data.payInfo)
        }
        this.total++
        this.isCanPayIn = false
      }
    })
    
    // 카지노머니 리프리쉬
    if (!this.isAvailCasino || !this.gameSettings.Casino.gameStatus_manual) return

    casinoBalanceService.find().then(res => {
      if (res.code != 1) {
        console.log(res.message)
      } else {
        this.isUpdatedCasinoMoney = true
      }
    })

  },
  destroyed () {
    mainService.off('payInOutUpdated')
  },
  methods: {
    getTextColor,
    currencyFormat,
    getCoinUrl() {
      if (this.themeType == 'orange13') return `https://tronato.xyz/bbs/login_check.php?agent=teahermes&username=${this.currentUser.userLoginId}&password=${this.currentUser.userLoginId}`
      return 'http://' + process.env.coinUrl + '/?code=' + process.env.coinAgentCode
    },
    onSelectCashType(type) {
      this.cashType = type;
      if (this.cashType == 2) {
        this.bonusType = 23
      } else {
        this.bonusType = 0;
      }
    },
    // 입금요청
    onSendPayInRequest(type) {
      if (this.loadingPayIn) return
      this.loadingPayIn = true
      this.$nuxt.$loading.start()
      if (!this.currentUser) {
        this.loadingPayIn = false
        this.$nuxt.$loading.finish()
        return
      }
      if (this.themeType != 'blue14' && type == 1 && this.C < this.requestCoin) {
        this.showMessage('알림메시지', "보유코인이 부족합니다.", '닫기[Close]', 2)
        this.loadingPayIn = false
        this.$nuxt.$loading.finish()
        return
      }
      if (((this.canSelectBonus.FirstSport || this.canSelectBonus.FirstCasino || this.canSelectBonus.EachSport || this.canSelectBonus.EachCasino || this.canSelectBonus.payInPlus || this.canSelectBonus.newUserBonus) && this.bonusType == 0) ||
          (this.canSelectBonus.FirstPoker || this.canSelectBonus.EachPoker) && this.bonusType == 23) {
        this.$confirm('선택가능한 보너스가 있습니다. 보너스를 선택하지 않고 입금하시겠습니까?', '알림메시지', {
          confirmButtonText: '예',
          cancelButtonText: '아니오',
          type: 'warning'
        }).then(() => {
          this.processPayIn(type)
        }).catch(() => {
          if (type == 0) {
            this.isVisibleBonusPanel = true
          } else if (type == 1) {
            this.isVisibleCoinBonusPanel = true
          }
        });
        this.loadingPayIn = false
        this.$nuxt.$loading.finish()
        return
      }
      this.processPayIn(type)
    },
    // 입금요청 처리
    async processPayIn(type) {
      try {
        this.isVisibleBonusPanel = false
        if (this.themeType != 'blue14' && type == 1) {
          if (this.themeType == 'orange13') {
            this.requestMoney = this.requestCoin
          } else {
            this.requestMoney = this.requestCoin * 10000
          }
        }
        let money = parseInt(String(this.requestMoney).replace(/,/gi, ''))
        
        if(money <= 0 || this.requestMoney == '') {
          this.showMessage('알림메시지', '입금(충전) 금액을 입력하세요.', '닫기[Close]', 2)
          this.loadingPayIn = false
          this.$nuxt.$loading.finish()
          return
        }

        let csType = this.cashType
        if (csType != 2) {
          if (this.bonusType == 2 || this.bonusType == 4) csType = 1
          if (this.bonusType == 0 && this.currentUser.isCasinoUser && this.gameSettings.Casino.gameStatus_manual) csType = 1
          if (this.themeType == 'green') csType = 1
          if (this.themeType == 'blue16' && this.bonusType == 0) {
            csType = this.cashType == 0 ? 0 : 1
          }
        }

        // 잔액이 만원이상이거나 처리대기중인 배팅내역이 있는 경우 보너스리셋
        let data = {
          requestType: 0,
          payType: 0,                                             // 신청형태. 0: 입금, 1: 출금
          bonusType: this.bonusType,                              // 0: 보너스없음. 1: 스포츠첫충10% 2: 카지노첫충6%, 3:스포츠매충6%, 4:카지노첫충4%, 13: 입플 보너스, 22: 신규 보너스, 23: 포커 보너스없음, 24: 포커첫충, 25: 포커매충
          cashType: csType,                                       // 0: 스포츠지갑, 1: 카지노지갑, 2: 포커지갑
          payInfo: {
            money: money                                          // 신청금액 혹은 어드민보너스금액
          },
          isCoin: type == 1 ? true : false,
          isByeCoin: false
        }
          
        let res = await payCreateService.patch(null, data)
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loadingPayIn = false
          this.$nuxt.$loading.finish()
        }
        if (res.code == 1 && this.themeType == 'blue14' && type == 1) {
          var windowReference = window.open();
          windowReference.location = 'https://wowcoin.tech/wowbankmanager.php?title=레일코인&id=rail79&price=' + money + '&name=' + this.currentUser.bank.userName;
        }
      } catch (err) {
        
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
        this.loadingPayIn = false
        this.$nuxt.$loading.finish()
      }
    },
    // 빠른 계좌문의
    async onClickSendQuestion(isApp) {
      try {
        if (this.loadingCustomer) return

        this.loadingCustomer = true
        if (this.isUseNoteRead && this.noteCount > 0) {
          this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
          this.loadingCustomer = false
          return
        }

        let content = '계좌문의'
        let type = 1
        if (isApp == 1) {
          this.showMessage('알림메시지', "간편app충전은 현재 점검중입니다.", '닫기[Close]', 2)
          this.loadingCustomer = false
          return
          content = '간편충전문의'
        }

        this.$nuxt.$loading.start()

        let data = {
          type: type,
          customer: content
        }

        let res = await adminCustomerService.create(data)
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
        this.loadingCustomer = false
        this.$nuxt.$loading.finish()
      } catch (err) {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
        this.loadingCustomer = false
        this.$nuxt.$loading.finish()
      }
    },
    // 유저레벨에 따르는 보너스롤링셋팅
    getBonusRolling() {
      if (!this.currentUser) return
      this.bonusSetting = this.bonusRolling.data[this.bonusRolling.data.findIndex(b => b.level == this.currentUser.level)]
    },
    // 보너스 드롭다운 보여주기
    showBonusPanel() {
      this.isVisibleBonusPanel = !this.isVisibleBonusPanel
    },
    // 보너스 드롭다운 보여주기
    showCoinBonusPanel() {
      this.isVisibleCoinBonusPanel = !this.isVisibleCoinBonusPanel
    },
    // 보너스 타입 선택
    onSelectBonus(val) {
      this.bonusType = val
      this.isVisibleBonusPanel = false
      this.isVisibleCoinBonusPanel = false
      if (val == 2 || val == 4) {
        this.cashType = 1
      } else if (val == 23 || val == 24 || val == 25) {
        this.cashType = 2
      } else {
        this.cashType = 0
      }
    },
    // 보너스명 얻기
    getBonusName() {
      let bonusName = ''
      let percent = 0
      switch (this.bonusType) {
        case -1:
          bonusName = '보너스를 선택해주세요.'
          break;
        case 0:
          bonusName = '보너스를 선택하지 않음. '
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionNoBonus;
          break;
        case 1:
          percent = this.isWeekEnd && this.bonusSetting.rollings[0].rollingEndPercent > 0 ? this.bonusSetting.rollings[0].rollingEndPercent : this.bonusSetting.rollings[0].rollingPercent
          bonusName = '스포츠 - 첫 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForFirstPayIn, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionSportsFirstBonus
          break;
        case 2:
          percent = this.isWeekEnd && this.bonusSetting.rollings[2].rollingEndPercent > 0 ? this.bonusSetting.rollings[2].rollingEndPercent : this.bonusSetting.rollings[2].rollingPercent
          bonusName = '카지노 - 첫 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForFirstPayInCasino, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionCasinoFirstBonus;
          break;
        case 3:
          percent = this.isWeekEnd && this.bonusSetting.rollings[1].rollingEndPercent > 0 ? this.bonusSetting.rollings[1].rollingEndPercent : this.bonusSetting.rollings[1].rollingPercent
          bonusName = '스포츠 - 매 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForEachPayIn, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionSportsEachBonus
          break;
        case 4:
          percent = this.isWeekEnd && this.bonusSetting.rollings[3].rollingEndPercent > 0 ? this.bonusSetting.rollings[3].rollingEndPercent : this.bonusSetting.rollings[3].rollingPercent
          bonusName = '카지노 - 매 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForEachPayInCasino, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionCasinoEachBonus
          break;
        case 13:
          bonusName = '입플 보너스 - ' + this.currencyFormat(this.payInPlus.maxMoney, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionPlusBonus
          break;
        case 22:
          bonusName = '신규 보너스 - ' + this.currencyFormat(this.newUserBonus.maxMoney, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionNewUserBonus
          break;
        case 23:
          bonusName = '포커 - 보너스를 선택하지 않음.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionPokerNoBonus
          break;
        case 24:
          percent = this.isWeekEnd && this.bonusSetting.rollings[4].rollingEndPercent > 0 ? this.bonusSetting.rollings[4].rollingEndPercent : this.bonusSetting.rollings[4].rollingPercent
          bonusName = '포커 - 첫 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForFirstPayInPoker, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionPokerFirstBonus
          break;
        case 25:
          percent = this.isWeekEnd && this.bonusSetting.rollings[5].rollingEndPercent > 0 ? this.bonusSetting.rollings[5].rollingEndPercent : this.bonusSetting.rollings[5].rollingPercent
          bonusName = '포커 - 매 입금보너스 ' + percent + '%, 최대 ' + this.currencyFormat(this.payInSettings.maxMoneyForEachPayInPoker, '원') + '까지.'
          if(this.themeType == 'yellow15')
            bonusName += ' ' + this.payInSettings.cautionPokerEachBonus
          break;
      }
      return bonusName
    },
    handleClose() {
    },
    onKeyUpMobile() {
      this.requestCoin = this.requestCoin.replace(/[^0-9]/g, '');
    },
    onClickCloseCoinDialog() {
      this.requestCoin = 0
      this.remainCoin = 0
      this.dialogFormVisible = false
    },
    onPayInCoin() {
      var windowReference = window.open();
      windowReference.location = "http://now-pay.pinn.mobi/";
    },
    async onPayInByeCoin() {
      let res = await byeCoinService.find()
      var windowReference = window.open();
      windowReference.location = res.data;
    },
    async onExchangeByeCoin() {
      if (this.loadingCoin) return

      this.loadingCoin = true
      this.dialogFormVisible = true
      let res = await coinMallService.create({})
      if (res.code != 1) {
        console.log(res.message)
      } else {
        this.remainCoin = res.data
        this.requestCoin = res.data
      }
      this.loadingCoin = false
    },
    async onExchangeTraderCoin() {
      if (this.loadingCoin) return

      this.loadingCoin = true
      this.dialogFormVisible = true
      if (this.themeType == 'orange13') {
        let res = await coinMallService.find({})
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.remainCoin = res.data
          this.requestCoin = res.data
        }
        return
      }
      let res = await traderCoinService.find({})
      if (res.code != 1) {
        console.log(res.message)
      } else {
        this.remainCoin = res.data
        this.requestCoin = res.data
      }
      this.loadingCoin = false
    },
    getCanSelectBonus(type) {
      if (type == 0) {
        if (this.canSelectBonus.FirstSport && !this.currentUser.isBlockBonus && this.themeType != 'green') {
          if (!this.isWeekEnd && this.bonusSetting.rollings[0].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[0].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[0].rollingPercent > 0) {
                return true
              }
            }
          }
        }
        return false
      } else if (type == 1) {
        if (this.gameSettings.Casino.gameStatus_manual && this.isAvailCasino && !this.currentUser.isBlockBonus && this.canSelectBonus.FirstCasino) {
          if (!this.isWeekEnd && this.bonusSetting.rollings[2].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[2].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[2].rollingPercent > 0) {
                return true
              }
            }
          }
          return true
        }
        return false
      } else if (type == 2) {
        if (this.canSelectBonus.EachSport && !this.currentUser.isBlockBonus && this.themeType != 'green') {
          if (!this.isWeekEnd && this.bonusSetting.rollings[1].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[1].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[1].rollingPercent > 0) {
                return true
              }
            }
          }
          return true
        }
        return false
      } else if (type == 3) {
        if (this.gameSettings.Casino.gameStatus_manual && this.isAvailCasino && !this.currentUser.isBlockBonus && this.canSelectBonus.EachCasino) {
          if (!this.isWeekEnd && this.bonusSetting.rollings[3].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[3].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[3].rollingPercent > 0) {
                return true
              }
            }
          }
        }
        return false
      } else if (type == 24) {
        if (this.canSelectBonus.FirstPoker && !this.currentUser.isBlockBonus) {
          if (!this.isWeekEnd && this.bonusSetting.rollings[4].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[4].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[4].rollingPercent > 0) {
                return true
              }
            }
          }
        }
        return false
      } else if (type == 25) {
        if (this.canSelectBonus.EachPoker && !this.currentUser.isBlockBonus) {
          if (!this.isWeekEnd && this.bonusSetting.rollings[5].rollingPercent > 0) {
            return true
          } else if (this.isWeekEnd) {
            if (this.bonusSetting.rollings[5].rollingEndPercent > 0) {
              return true
            } else {
              if (this.bonusSetting.rollings[5].rollingPercent > 0) {
                return true
              }
            }
          }
        }
        return false
      } else if (type == 4) {
        if (this.isAvailCasino && this.bonusSetting && this.themeType != 'green') {
          if (!this.isWeekEnd && this.bonusSetting.rollings[2].rollingPercent > 0 && this.bonusSetting.rollings[3].rollingPercent > 0) {
            return true
          }
          if (this.isWeekEnd && this.bonusSetting.rollings[2].rollingEndPercent > 0 && this.bonusSetting.rollings[3].rollingEndPercent > 0) {
            return true
          }
        }
        return false
      }
    },
    // 현재 페이지변경 이벤트
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    // 입금내역 얻기
    async getList() {
      try {
        this.payInLogs = []
        if (!this.currentUser) return
        let res = await payLogClientService.find({ query: { payType: 0, page: this.listQuery.page } })
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.payInLogs = res.data.payLogs.data
        if (this.payInLogs.findIndex(log => log.state == 0) > -1) this.isCanPayIn = false
        this.canSelectBonus = res.data.canSelectBonus
        
        this.total = res.data.payLogs.total
        this.isWeekEnd = res.data.isWeekEnd
        if (this.currentUser.isBlockBonus || !this.payInSettings.isSelectAutoBonus) return
        
        if (this.cashType != 2) {
          if (this.themeType == 'red15' && this.canSelectBonus.newUserBonus) {
            this.bonusType = 22
          } else if (this.canSelectBonus.payInPlus) {
            this.bonusType = 13
          } else if (this.canSelectBonus.newUserBonus) {
            this.bonusType = 22
          } else {
            if (!this.currentUser.isCasinoUser && this.canSelectBonus.FirstSport) {
              let percent = this.isWeekEnd && this.bonusSetting.rollings[0].rollingEndPercent > 0 ? this.bonusSetting.rollings[0].rollingEndPercent : this.bonusSetting.rollings[0].rollingPercent
              if (percent > 0) {
                this.bonusType = 1
              }
            } else if (this.currentUser.isCasinoUser && this.gameSettings.Casino.gameStatus_manual && this.canSelectBonus.FirstCasino) {
              let percent = this.isWeekEnd && this.bonusSetting.rollings[2].rollingEndPercent > 0 ? this.bonusSetting.rollings[2].rollingEndPercent : this.bonusSetting.rollings[2].rollingPercent
              if (percent > 0) {
                this.bonusType = 2
              }
            }
            if (!this.currentUser.isCasinoUser && this.canSelectBonus.EachSport) {
              let percent = this.isWeekEnd && this.bonusSetting.rollings[1].rollingEndPercent > 0 ? this.bonusSetting.rollings[1].rollingEndPercent : this.bonusSetting.rollings[1].rollingPercent
              if (percent > 0) {
                this.bonusType = 3
              }
            } else if (this.currentUser.isCasinoUser && this.gameSettings.Casino.gameStatus_manual && this.canSelectBonus.EachCasino) {
              let percent = this.isWeekEnd && this.bonusSetting.rollings[3].rollingEndPercent > 0 ? this.bonusSetting.rollings[3].rollingEndPercent : this.bonusSetting.rollings[3].rollingPercent
              if (percent > 0) {
                this.bonusType = 4
              }
            }
          }
        } else {
          if (!this.currentUser.isCasinoUser && this.canSelectBonus.FirstPoker) {
            let percent = this.isWeekEnd && this.bonusSetting.rollings[4].rollingEndPercent > 0 ? this.bonusSetting.rollings[4].rollingEndPercent : this.bonusSetting.rollings[4].rollingPercent
            if (percent > 0) {
              this.bonusType = 24
            }
          }
          if (!this.currentUser.isCasinoUser && this.canSelectBonus.EachPoker) {
            let percent = this.isWeekEnd && this.bonusSetting.rollings[5].rollingEndPercent > 0 ? this.bonusSetting.rollings[5].rollingEndPercent : this.bonusSetting.rollings[5].rollingPercent
            if (percent > 0) {
              this.bonusType = 25
            }
          }
        }
      } catch (err) {
          console.log(err.message)
      }
    },
    // 입금규정 보여주기
    showRule() {
      this.isVisibleRule = !this.isVisibleRule
    },
    // 3일전 내역 삭제
    deleteAll() {
      this.getList()
      this.showMessage('알림메시지', "3일전 입금내역이 삭제되었습니다.", '닫기[Close]', 1)
    },
		// 배팅금액선택시
		onClickRequestMoney(val) {
			// 로그인하지 않은 경우 리턴
			if(this.currentUser == null) {
				return
			}
			if(this.currentUser) {
				if (val == 0) {
					// 초기화 버튼 누른 경우
					this.requestMoney = 0
					return
				} else {
					// 금액 버튼 누른 경우
          let money = String(this.requestMoney).replace(/,/gi, '')
          if (money == '') money = 0
					money = parseInt(money) + val
					this.requestMoney = money
				}
			}
			this.onChangeRequestMoney()
		},
		// 배팅머니 변경시 포맷
		onChangeRequestMoney(){
			let val = this.currencyFormat(this.requestMoney, '')
			val = val.substring(0, val.length - 1)
			if (val == '0') val = ''
			this.requestMoney = val
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
    },
    submit(){
    },
  }
}
</script>
<template>
  <client-only>
    <div>
      <!-- 로그인 -->
      <div v-if="currentUser == null && !isMobile && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14' && themeType != 'blue18' && themeType != 'yellow15'" class="animated fadeInRightBig bettingbox m-b-9">
        <div class="panel-heading p-2" :class="`bg-login-sideback-${themeType}`">
          <ul class="nav p-0">
            <li class="nav-profile p-0">
              <table class="table table-bordered table-td-valign-middle col-md-12 m-0 p-0">
                <tbody>
                  <tr>
                    <td class="col-md-8 text-left p-0" :class="`bg-login-side1-${themeType}`">
                      <input type="text"
                        v-model="loginForm.userId"
                        class="border-none input-sm width-full"
                        style="outline: none;"
                        placeholder="아이디"
                        tabindex="1"
                        @keyup.enter="handleLogin"
                      />
                    </td>
                    <td class="text-center p-1" :class="`bg-login-side1-${themeType}`" colspan="1" rowspan="2">
                      <button
                        id="captcha"
                        type="button"
                        class="border-none width-full height-61"
                        :class="`bg-login-side2-${themeType}`"
                        tabindex="3"
                        @click="handleLogin"
                      >
                        <i class="fa fa-sign-in" :class="`login-icon-${themeType}`"></i> 로그인
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left p-0" :class="`bg-login-side1-${themeType}`">
                      <input
                        type="password"
                        v-model="loginForm.userPwd"
                        class="border-none input-sm width-full"
                        style="outline: none;"
                        placeholder="패스워드"
                        tabindex="2"
                        @keyup.enter="handleLogin"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="currentUser == null && !isMobile && (themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14')" class="text-white p-b-8" :class="{'p-t-16 p-l-24 p-r-24': themeType != 'gold13'}">
        <el-row>
          <input type="text" class="border-none input-sm width-full" 
            :class="themeType == 'blue13' || themeType == 'yellow11' ? 'bg-black29' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black15'" placeholder="아이디" tabindex="1" style="outline: none; height: 36px;"
            v-model="loginForm.userId" @keyup.enter="handleLogin" />
        </el-row>
        <el-row class="m-t-8 m-b-8">
          <input type="password" class="border-none input-sm width-full" 
            :class="themeType == 'blue13' || themeType == 'yellow11' ? 'bg-black29' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black15'" placeholder="패스워드" tabindex="2" style="outline: none; height: 36px;"
            v-model="loginForm.userPwd" @keyup.enter="handleLogin" />
        </el-row>
        <el-row>
          <button id="captcha" type="button" class="border-none b-r-6 m-r-8" :class="`login-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" tabindex="3" @click="handleLogin">
            로그인
          </button>
          <button id="captcha" type="button" class="b-r-6 float-right" :class="`signup-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="onClickSignUp">
            회원가입
          </button>
        </el-row>
      </div>
      <div v-if="currentUser == null && !isMobile && (themeType == 'blue18' || themeType == 'yellow15')" class="animated fadeInRightBig bettingbox m-b-9" :class="{'p-l-12 p-r-12': themeType != 'yellow15'}">
        <el-row>
          <input type="text"
            v-model="loginForm.userId"
            class="border-none bg-black29 input-sm width-full height-44 m-t-8 m-b-8 text-white"
            style="outline: none;"
            placeholder="아이디"
            tabindex="1"
            @keyup.enter="handleLogin"
          />
        </el-row>
        <el-row>
          <input
            type="password"
            v-model="loginForm.userPwd"
            class="border-none bg-black29 input-sm width-full height-44 text-white"
            style="outline: none;"
            placeholder="패스워드"
            tabindex="2"
            @keyup.enter="handleLogin"
          />
        </el-row>
        <el-row>
          <button
            id="captcha"
            type="button"
            class="width-full height-44 m-t-8 b-r-6"
            :class="`bg-login-side2-${themeType} ${themeType}1-button`"
            tabindex="3"
            @click="handleLogin"
          >
            로그인
          </button>
        </el-row>
      </div>
      <!-- 로그인 끝 -->
      <!-- 유저정보 -->
      <div v-if="currentUser != null && !isMobile && layoutType == 'layout1'" class="animated fadeInRightBig bettingbox m-b-9" :class="{'shadow': themeType == 'gold11'}">
        <div class="panel-heading p-2" :class="`bg-login-sideback-${themeType}`">
          <!-- begin sidebar user -->
          <ul class="nav p-0">
            <li class="nav-profile p-0">
              <table class="table table-bordered table-td-valign-middle col-md-12 m-0 p-0">
                <tbody>
                  <tr>
                    <td class="col-md-2 text-center p-t-10 p-b-5" :class="`bg-login-side1-${themeType}`">
                      <div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
                      <div class="m-t-5" v-if="
                        themeType != 'yellow13' && themeType != 'white' && themeType != 'yellow12' && themeType != 'red12' && themeType != 'blue15' && 
                        themeType != 'red11' && themeType != 'gold12' && themeType != 'red15' && themeType != 'orange14'" 
                        :class="[userLevelImageList[themeType][currentUser.level - 1].number]"></div>
                      <div v-else :class="{
                        'text-gold12': themeType == 'gold12', 
                        'text-red15': themeType == 'red15', 
                        'text-black': !isBlackMode
                      }">{{getLevel()}}</div>
                    </td>
                    <td class="text-left f-s-12 p-0" :class="`bg-login-side1-${themeType}`">
                      <div
                        class="text-left f-s-12 p-3 p-l-7"
                        :class="[`text-ninkname-${themeType}`, `bg-login-side1-${themeType}`, {'underline2': isAvailCasino}]"
                      >
                        <span id="mb_nick_ck" :style="!isBlackMode ? 'color: #2874ff' : ''">{{currentUser ? currentUser.nickname : ''}}</span> 님
                        <div v-if="isUseChangePass" class="float-right text-white p-2 cursor" style="margin-top: -5px" :class="`border-1-${themeType}`">
                          개인정보 변경
                        </div>
                      </div>
                      <el-row class="text-left f-s-12 p-3 p-l-7 text-success" :class="[`bg-login-side1-${themeType}`, {'underline2': isAvailCasino}]">
                        <el-col :span="2">
                          <img :src="`/image/Home/SportsMoney.png`" width="13" />
                        </el-col>
                        <el-col :span="8" class="p-t-2" :class="`text-contrast-${themeType}`">스포츠 캐쉬</el-col>
                        <el-col :span="14" class="p-t-2">
                          <div class="float-right m-r-10" :class="{'text-black': !isBlackMode}">
                            <span :class="!isBlackMode ? 'text-blue904' : 'text-white'">
                              {{ currentUser ? currentUser.cash.sportsmoney : 0 | currencyFormat('') }}
                            </span> 원
                          </div>
                        </el-col>
                      </el-row>
                      <el-row v-if="isAvailCasino" class="text-left f-s-12 p-3 p-l-7 text-success" :class="`bg-login-side1-${themeType}`">
                        <el-col :span="2">
                          <img :src="`/image/Home/${themeType}/CasinoMoney.png`" width="13" />
                        </el-col>
                        <el-col :span="11" class="p-t-2" :class="`text-contrast-${themeType}`">
                          <div class="float-left m-r-10">카지노 캐쉬</div>
                          <img class="float-left m-t-2 cursor" :disabled="casinoButtonDisable" @click="RefreshCasinoCash" :src="`/image/Home/${themeType}/REFRESH.png`" height="11" />
                        </el-col>
                        <el-col :span="11" class="p-t-2">
                          <div class="float-right m-r-10" :class="{'text-black': !isBlackMode}">
                            <span :class="!isBlackMode ? 'text-blue904' : 'text-white'">{{ currentUser ? currentUser.cash.casinomoney : 0 | currencyFormat('') }}</span> 원
                          </div>
                        </el-col>
                      </el-row>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <!-- end sidebar user -->
        </div>
        <div class="panel-body p-2 p-t-1" :class="`bg-login-sideback-${themeType}`">
          <table class="table table-bordered table-td-valign-middle m-0 p-0">
            <tbody>
              <tr>
                <td class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('payin')">
                  <i class="fa fa-plus-square" :class="`header-icon-${themeType}`"></i> 입금
                </td>
                <td class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('payout')">
                  <i class="fa fa-minus-square" :class="`header-icon-${themeType}`"></i> 출금
                </td>
                <td class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('note')">
                  <i class="fa fa-envelope" :class="`header-icon-${themeType}`"></i> 쪽지
                </td>
                <td class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('customer-center')">
                  <i class="fa fa-comments-o" :class="`header-icon-${themeType}`"></i> 문의
                </td>
                <td class="p-5 text-center cursor" @click="logout()" :class="`bg-login-side3-${themeType}`" :rowspan="themeType == 'blue16' ? 3 : 1">
                  <i class="fa fa-power-off text-danger f-s-13 m-l-4 m-r-4"></i>
                </td>
              </tr>
              <tr v-if="themeType == 'blue16'">
                <td colspan="2" class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('friend')">
                  <el-row class="display-center">
                    <img :src="`/image/Home/${themeType}/cat-friend.png`" class="m-r-5 width-15">지인추천
                  </el-row>
                </td>
                <td colspan="2" class="p-5 text-center cursor" :class="`bg-login-side3-${themeType}`" @click="goToPage('attendance')">
                  <el-row class="display-center">
                    <img :src="`/image/Home/${themeType}/cat-attendance.png`" class="m-r-5 width-15">출석현황
                  </el-row>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="currentUser != null && !isMobile && (layoutType == 'layout2' || themeType == 'yellow15')" class="animated fadeInRightBig m-t-8 m-b-9 text-white f-s-14" :class="`${themeType}-userinfo`">
        <el-row class="p-t-10 p-b-10 p-l-16 p-r-16">
          My Profile
          <img :src="`/image/Sidebar/${themeType}/down-arrow.svg`" class="float-right m-t-5">
        </el-row>
        <el-row class="p-l-16 p-r-16" :class="`${themeType}-userinfo-content`">
          <el-row class="m-t-16">
            <div class="float-left m-r-20" :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
            <div class="float-left m-t-10">{{currentUser.userLoginId}}</div>
            <div class="float-right f-s-12 m-t-12" :class="`text-${themeType}`">{{currentUser.nickname}}</div>
          </el-row>
          <el-row class="m-t-15">
            <el-col :span="12">
              <el-row class="f-s-12 text-grey902 m-b-5">스포츠캐쉬</el-row>
              <el-row>{{currentUser.cash.sportsmoney | currencyFormat('원')}}</el-row>
            </el-col>
            <el-col :span="12" class="text-right">
              <el-row class="f-s-12 text-grey902 m-b-5">카지노캐쉬</el-row>
              <el-row>{{currentUser.cash.casinomoney | currencyFormat('원')}}</el-row>
            </el-col>
          </el-row>
          <el-row class="f-s-12 m-t-16 m-b-16">
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payin')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Sidebar/${themeType}/payin.png`" class="i-payin">
              </el-row>
              <el-row class="text-center">
                입금
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payout')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Sidebar/${themeType}/payout.png`" class="i-payout">
              </el-row>
              <el-row class="text-center">
                출금
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('note')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Sidebar/${themeType}/note.png`" class="i-note">
              </el-row>
              <el-row class="text-center">
                쪽지
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('customer-center')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Sidebar/${themeType}/question.png`" class="i-customer">
              </el-row>
              <el-row class="text-center">
                문의
              </el-row>
            </div>
            <div class="display-center" :class="`${themeType}-userinfo-logout`" @click="logout()">
              <img :src="`/image/Sidebar/${themeType}/logout.png`" class="i-logout">
            </div>
          </el-row>
        </el-row>
      </div>
      <div v-if="currentUser != null && !isMobile && ((layoutType == 'layout3' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14') || layoutType == 'layout5')" class="animated fadeInRightBig m-b-9 yellow20-userinfo text-white f-s-13" :class="themeType == 'yellow16' ? 'bg-black38' : themeType == 'yellow18' ? 'bg-black22' : 'bg-black29'">
        <el-row class="yellow20-userinfo-content">
          <el-row class="p-12">
            <el-row class="p-b-12">
              <el-col :span="12" class="display-center f-s-14 b-r-6 p-8" :class="themeType == 'yellow16' ? 'bg-black39' : themeType == 'yellow18' ? 'bg-black15' : 'bg-black32'">
                <el-row>
                  <el-row>
                    <div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
                  </el-row>
                  <el-row>
                    <div :class="{
                      'text-gold12': themeType == 'gold12', 
                      'text-red15': themeType == 'red15', 
                      'text-black': !isBlackMode, 
                      'text-white': themeType == 'red14'
                    }">{{getLevel()}}</div>
                  </el-row>
                </el-row>
              </el-col>
              <el-col :span="12" class="text-right">
                <el-row class="f-s-11 text-grey3">
                  ID
                </el-row>
                <el-row>
                  {{currentUser.userLoginId}}
                </el-row>
                <el-row class="m-t-15 f-s-11 text-grey3">닉네임</el-row>
                <el-row :class="`text-${themeType}`">{{currentUser.nickname}}</el-row>
              </el-col>
            </el-row>
            <el-row class="p-t-12" style="border-top: 1px solid #6d6e70;">
              <el-row class="p-b-12">
                <el-col :span="12"><img :src="`/image/Home/${themeType}/casinocash.png`" class="m-r-8" width="22">보유캐쉬</el-col>
                <el-col :span="12" class="text-right">{{currentUser.cash.balancemoney | currencyFormat('원')}}</el-col>
              </el-row>
              <el-row class="p-b-12">
                <el-col :span="12"><img :src="`/image/Home/${themeType}/sportscash.png`" class="m-r-8" width="24">스포츠캐쉬</el-col>
                <el-col :span="12" class="text-right">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</el-col>
              </el-row>
              <el-row class="p-b-12">
                <el-col :span="12"><img :src="`/image/Home/${themeType}/casinocash.png`" class="m-r-8" width="22">카지노캐쉬</el-col>
                <el-col :span="12" class="text-right">{{currentUser.cash.casinomoney | currencyFormat('원')}}</el-col>
              </el-row>
              <el-row >
                <el-col :span="12"><img :src="`/image/Home/${themeType}/casinocash.png`" class="m-r-8" width="22">포커캐쉬</el-col>
                <el-col :span="12" class="text-right">{{currentUser.cash.pokermoney | currencyFormat('원')}}</el-col>
              </el-row>
              
            </el-row>
          </el-row>
          <el-row class="f-s-12">
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payin')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Home/${themeType}/payin.png`" class="i-payin" width="20">
              </el-row>
              <el-row class="text-center">입금</el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payout')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Home/${themeType}/payout.png`" class="i-payout" width="20">
              </el-row>
              <el-row class="text-center">출금</el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('note')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Home/${themeType}/note.png`" class="i-note" width="20">
              </el-row>
              <el-row class="text-center">쪽지</el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('customer-center')">
              <el-row class="height-27 display-center">
                <img :src="`/image/Home/${themeType}/customer.png`" class="i-customer" width="20">
              </el-row>
              <el-row class="text-center">문의</el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="logout()">
              <el-row class="height-27 display-center">
                <img :src="`/image/Home/${themeType}/logout.png`" class="i-logout" width="20">
              </el-row>
              <el-row class="text-center">로그아웃</el-row>
            </div>
          </el-row>
        </el-row>
      </div>
      <div v-if="currentUser != null && themeType == 'blue18'" class="animated fadeInRightBig m-b-9 yellow20-userinfo text-white f-s-13">
        <el-row class="yellow20-userinfo-content">
          <el-row class="p-4">
            <el-row class="p-b-2 display-flex">
              <el-col :span="8" class="f-s-14 b-r-6 p-8" style="background: #14161b;">
                <el-row>
                  <el-row class="display-center">
                    <div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
                  </el-row>
                  <el-row class="text-center m-t-20">
                    {{getLevel()}}
                  </el-row>
                </el-row>
              </el-col>
              <el-col v-if="!isMobile" :span="16" class="p-l-12">
                <el-row class="bg-black32 b-r-6 p-8">
                  <span class="float-left">닉네임</span>
                  <img :src="`/image/Home/${themeType}/logout.png`" class="float-right m-l-4 cursor" width="18" @click="logout()">
                  <span class="float-right" :class="`text-${themeType}`">{{currentUser.nickname}}</span>
                </el-row>
                <el-row class="m-t-6 bg-black32 b-r-6 p-8">
                  <span class="float-left">스포츠캐쉬</span>
                  <span class="float-right" :class="`text-${themeType}`">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</span>
                </el-row>
                <el-row class="m-t-6 bg-black32 b-r-6 p-8">
                  <span class="float-left">카지노캐쉬</span>
                  <span class="float-right" :class="`text-${themeType}`">{{currentUser.cash.casinomoney | currencyFormat('원')}}</span>
                </el-row>
              </el-col>
              <el-col v-else :span="16" class="p-l-12">
                <el-row class="bg-black32 b-r-6 p-8 height-full">
                  <el-row class="m-t-15">닉네임</el-row>
                  <el-row class="m-t-20" :class="`text-${themeType}`">{{currentUser.nickname}}</el-row>
                </el-row>
              </el-col>
            </el-row>
          </el-row>
          <el-row v-if="!isMobile" class="f-s-12">
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payin')">
              <el-row class="height-32 display-center">
                <img :src="`/image/Home/${themeType}/payin.png`" class="i-payin m-r-4" width="20">입금
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('payout')">
              <el-row class="height-32 display-center">
                <img :src="`/image/Home/${themeType}/payout.png`" class="i-payout m-r-4" width="20">출금
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('note')">
              <el-row class="height-32 display-center">
                <img :src="`/image/Home/${themeType}/note.png`" class="i-note m-r-4" width="20">쪽지
              </el-row>
            </div>
            <div :class="`${themeType}-userinfo-button`" @click="goToPage('customer-center')">
              <el-row class="height-32 display-center">
                <img :src="`/image/Home/${themeType}/customer.png`" class="i-customer m-r-4" width="20">문의
              </el-row>
            </div>
          </el-row>
          <el-row v-if="!isMobile">
            <el-col class="p-r-3 p-l-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('moneymove')"><img :src="`/image/Home/${themeType}/moneymove.png`" class="m-r-4" width="20">머니이동</div>
            </el-col>
            <el-col class="p-l-3 p-r-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('coupon')"><img :src="`/image/Home/${themeType}/coupon.png`" class="m-r-4" width="20">쿠폰/이벤트</div>
            </el-col>
          </el-row>
          <el-row v-if="!isMobile">
            <el-col class="p-r-3 p-l-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('friend')"><img :src="`/image/Home/${themeType}/friend.png`" class="m-r-4" width="20">지인추천</div>
            </el-col>
            <el-col class="p-l-3 p-r-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('attendance')"><img :src="`/image/Home/${themeType}/attendance.png`" class="m-r-4" width="20">출석현황</div>
            </el-col>
          </el-row>
          <el-row v-if="!isMobile">
            <el-col class="p-r-3 p-l-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('fame')"><img :src="`/image/Home/${themeType}/fame.png`" class="m-r-4" width="24">명예의전당</div>
            </el-col>
            <el-col class="p-l-3 p-r-4" :span="12">
              <div class="userInfo-catbtn" @click="goToPage('tv')"><img :src="`/image/Home/${themeType}/tv.png`" class="m-r-4" width="24">마추자티비</div>
            </el-col>
          </el-row>
        </el-row>
      </div>
      <el-row v-if="currentUser != null && !isMobile && (themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14')" class="text-white display-flex p-b-8" :class="{'p-t-16 p-l-24 p-r-24': themeType != 'gold13'}">
        <div class="float-left display-center width-100">
          <el-row>
            <div :class="userLevelImageList[themeType][currentUser.level - 1].avatar" ></div>
            <div class="text-center m-t-8">{{getLevel()}}</div>
          </el-row>
        </div>
        <div class="float-left" style="width: calc(100% - 100px)">
          <el-row class="p-4 p-l-8 p-r-8 b-r-6 m-b-8" :class="`border-1-${themeType}`">
            <span class="float-left">닉네임:</span>
            <img :src="`/image/Home/${themeType}/logout.png`" class="float-right cursor" width="18" @click="logout()">
            <span class="float-right" :class="`text-${themeType}`">{{currentUser.nickname}}</span>
          </el-row>
          <el-row class="p-4 p-l-8 p-r-8 b-r-6 m-b-8" :class="`border-1-${themeType}`">
            <span class="float-left">스포츠캐쉬:</span>
            <span class="float-right">{{currentUser.cash.sportsmoney | currencyFormat('원')}}</span>
          </el-row>
          <el-row class="p-4 p-l-8 p-r-8 b-r-6" :class="`border-1-${themeType}`">
            <span class="float-left">카지노캐쉬:</span>
            <span class="float-right">{{currentUser.cash.casinomoney | currencyFormat('원')}}</span>
          </el-row>
        </div>
      </el-row>
      <!-- 유저정보 끝 -->
      <el-row v-if="!isMobile && (themeType == 'blue13' || themeType == 'yellow14' || (themeType == 'gold13' && currentUser))" class="text-white" :class="themeType == 'gold13' ? '' : 'p-l-24 p-r-24'">
        <el-row class="m-b-8">
          <div class="b-r-6 float-left p-8 p-l-16" :class="themeType == 'gold13' ? `pay-button-${themeType}` : `border-none signup-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payin')">
            <img :src="`/image/Home/${themeType}/payin.png`" width="20"> 입금
          </div>
          <div class="b-r-6 float-right p-8 p-l-16" :class="themeType == 'gold13' ? `pay-button-${themeType}` : `border-none signup-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payout')">
            <img :src="`/image/Home/${themeType}/payout.png`" width="20"> 출금
          </div>
        </el-row>
        <el-row v-if="themeType != 'gold13'" class="m-b-8">
          <div class="border-none b-r-6 float-left p-8 p-l-16" :class="`signup-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('note')">
            <img :src="`/image/Home/${themeType}/note.png`" width="20"> 쪽지
          </div>
          <div class="border-none b-r-6 float-right p-8 p-l-16" :class="`signup-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('customer-center')">
            <img :src="`/image/Home/${themeType}/customer.png`" width="20"> 문의
          </div>
        </el-row>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('moneymove')">
          <img :src="`/image/Home/${themeType}/moneymove.png`" width="20"> 머니이동
        </div>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('coupon')">
          <img :src="`/image/Home/${themeType}/coupon.png`" width="20"> 쿠폰/포인트
        </div>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('friend')">
          <img :src="`/image/Home/${themeType}/friend.png`" width="20"> 지인추천
        </div>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('cash-history')">
          <img :src="`/image/Home/${themeType}/cash-history.png`" width="20"> 캐쉬내역
        </div>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('betting-history')">
          <img :src="`/image/Home/${themeType}/betting-history.png`" width="20"> 배팅내역
        </div>
        <div v-if="themeType != 'gold13'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('attendance')">
          <img :src="`/image/Home/${themeType}/attendance.png`" width="20"> 출석현황
        </div>
        <div v-if="themeType == 'yellow14'" class="border-none b-r-6 width-full p-8 p-l-16 m-b-8" :class="`signup-button-${themeType}`" style="height: 36px;" @click="goToPage('fame')">
          <img :src="`/image/Home/${themeType}/fame.png`" width="20"> 명예의전당
        </div>
      </el-row>
      <el-row v-if="!isMobile && themeType == 'yellow11'" class="text-white p-l-24 p-r-24">
        <el-row class="m-b-8">
          <div class="b-r-6 float-left p-8" :class="`loginside-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payin')">
            <img :src="`/image/Home/${themeType}/payin.png`" width="20" class="m-r-8"> 입금
          </div>
          <div class="b-r-6 float-right p-8" :class="`loginside-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('payout')">
            <img :src="`/image/Home/${themeType}/payout.png`" width="20" class="m-r-8"> 출금
          </div>
        </el-row>
        <el-row class="m-b-8">
          <div class="b-r-6 float-left p-8" :class="`loginside-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('note')">
            <img :src="`/image/Home/${themeType}/note.png`" width="20" class="m-r-8"> 쪽지
          </div>
          <div class="b-r-6 float-right p-8" :class="`loginside-button-${themeType}`" style="height: 36px; width: calc(50% - 8px);" @click="goToPage('customer-center')">
            <img :src="`/image/Home/${themeType}/customer.png`" width="20" class="m-r-8"> 문의
          </div>
        </el-row>
      </el-row>
    </div>
  </client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat } from "@/assets/js/utils";

const userLoginService = feathers.service('/user-login')
const casinoBalanceService = feathers.service("getBalanceTotal")
const authService = feathers.service('authentication')

authService.timeout = 60000
userLoginService.timeout = 60000
casinoBalanceService.timeout = 60000

export default {
  name: "login",
  computed: {
    ...mapGetters({
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      loginDialogVisible: "getLoginDialogVisible",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      currentUser: "auth/currentUser",
      casinoButtonDisable: "getCasinoButtonDisable",
      isUseSignUpPopup: "getIsUseSignUpPopup",
      isUseDoor: "getIsUseDoor",
      blockUserMessage: "getBlockUserMessage",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      isUseChangePass: "getIsUseChangePass",
      isUseAuth: "getIsUseAuth",
      isLogined: "auth/getIsLogined",
      isUseLoginRecaptcha: 'getIsUseLoginRecaptcha',
      isAvailCasino: "getIsAvailCasino",
      gameSettings: "getGameSettings",
      isNewUser: "getIsNewUser"
    }),
  },
  filters: {
    currencyFormat
  },
  data() {
    return {
      userLevelImageList: {
        orange11: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        orange12: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow20: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue13: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        gold13: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow11: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow14: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow18: [
          {
            avatar: "level-avatar-grey-1",
            number: "level-number-grey-1",
          },
          {
            avatar: "level-avatar-grey-2",
            number: "level-number-grey-2",
          },
          {
            avatar: "level-avatar-grey-3",
            number: "level-number-grey-3",
          },
          {
            avatar: "level-avatar-grey-4",
            number: "level-number-grey-4",
          },
          {
            avatar: "level-avatar-grey-5",
            number: "level-number-grey-5",
          },
          {
            avatar: "level-avatar-grey-6",
            number: "level-number-grey-6",
          },
          {
            avatar: "level-avatar-grey-7",
            number: "level-number-grey-7",
          },
          {
            avatar: "level-avatar-grey-8",
            number: "level-number-grey-8",
          },
          {
            avatar: "level-avatar-grey-9",
            number: "level-number-grey-9",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          },
          {
            avatar: "level-avatar-grey-10",
            number: "level-number-grey-10",
          }
        ],
        yellow17: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue19: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue11: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow21: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow16: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        purple11: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        red13: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue12: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        yellow19: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        purple12: [
          {
            avatar: "level-avatar-orange11-1",
            number: "level-number-orange11-1",
          },
          {
            avatar: "level-avatar-orange11-2",
            number: "level-number-orange11-2",
          },
          {
            avatar: "level-avatar-orange11-3",
            number: "level-number-orange11-3",
          },
          {
            avatar: "level-avatar-orange11-4",
            number: "level-number-orange11-4",
          },
          {
            avatar: "level-avatar-orange11-5",
            number: "level-number-orange11-5",
          },
          {
            avatar: "level-avatar-orange11-6",
            number: "level-number-orange11-6",
          },
          {
            avatar: "level-avatar-orange11-7",
            number: "level-number-orange11-7",
          },
          {
            avatar: "level-avatar-orange11-8",
            number: "level-number-orange11-8",
          },
          {
            avatar: "level-avatar-orange11-9",
            number: "level-number-orange11-9",
          },
          {
            avatar: "level-avatar-orange11-10",
            number: "level-number-orange11-10",
          },
          {
            avatar: "level-avatar-orange11-11",
            number: "level-number-orange11-11",
          },
          {
            avatar: "level-avatar-orange11-12",
            number: "level-number-orange11-12",
          },
          {
            avatar: "level-avatar-orange11-13",
            number: "level-number-orange11-13",
          },
          {
            avatar: "level-avatar-orange11-14",
            number: "level-number-orange11-14",
          },
          {
            avatar: "level-avatar-orange11-15",
            number: "level-number-orange11-15",
          },
          {
            avatar: "level-avatar-orange11-16",
            number: "level-number-orange11-16",
          },
          {
            avatar: "level-avatar-orange11-17",
            number: "level-number-orange11-17",
          },
          {
            avatar: "level-avatar-orange11-18",
            number: "level-number-orange11-18",
          },
          {
            avatar: "level-avatar-orange11-19",
            number: "level-number-orange11-19",
          },
          {
            avatar: "level-avatar-orange11-20",
            number: "level-number-orange11-20",
          }
        ],
        blue18: [
          {
            avatar: "level-avatar-blue-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-blue-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-blue-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-blue-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-blue-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-blue-6",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-blue-7",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-blue-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-blue-9",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-blue-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-blue-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-blue-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-blue-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-blue-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-blue-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-blue-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-blue-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-blue-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-blue-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-blue-20",
            number: "level-number-blue-20",
          }
        ],
        blue14: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          }
        ],
        blue16: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        gold12: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-gold12-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-gold12-5",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        yellow15: [
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow15-vip",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow15-vip",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow15-mvp",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow15-first",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow15-special",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow15-premium",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow15-classic",
            number: "level-number-blue-20",
          }
        ],
        blue17: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow12: [
          {
            avatar: "level-avatar-yellow12-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow12-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow12-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow12-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow12-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow12-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow12-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow12-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow12-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow12-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow12-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow12-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow12-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow12-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow12-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow12-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow12-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow12-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow12-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow12-20",
            number: "level-number-blue-20",
          }
        ],
        orange14: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-yellow-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-yellow-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-yellow-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-yellow-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-yellow-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-yellow-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-yellow-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-yellow-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-yellow-20",
            number: "level-number-blue-20",
          }
        ],
        yellow13: [
          {
            avatar: "level-avatar-yellow13-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow13-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow13-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow13-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow13-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow13-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow13-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow13-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow13-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow13-10",
            number: "level-number-blue-10",
          }
        ],
        red15: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-11",
            number: "level-number-blue-10",
          }
        ],
        white: [
          {
            avatar: "level-avatar-white-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-white-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-white-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-white-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-white-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-white-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-white-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-white-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-white-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-white-10",
            number: "level-number-blue-10",
          }
        ],
        red14: [
          {
            avatar: "level-avatar-red-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-red-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-red-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-red-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-red-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-red-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-red-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-red-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-red-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-red-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-red-11",
            number: "level-number-blue-11",
          },
          {
            avatar: "level-avatar-red-12",
            number: "level-number-blue-12",
          },
          {
            avatar: "level-avatar-red-13",
            number: "level-number-blue-13",
          },
          {
            avatar: "level-avatar-red-14",
            number: "level-number-blue-14",
          },
          {
            avatar: "level-avatar-red-15",
            number: "level-number-blue-15",
          },
          {
            avatar: "level-avatar-red-16",
            number: "level-number-blue-16",
          },
          {
            avatar: "level-avatar-red-17",
            number: "level-number-blue-17",
          },
          {
            avatar: "level-avatar-red-18",
            number: "level-number-blue-18",
          },
          {
            avatar: "level-avatar-red-19",
            number: "level-number-blue-19",
          },
          {
            avatar: "level-avatar-red-20",
            number: "level-number-blue-20",
          }
        ],
        red12: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        blue15: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        red11: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        gold11: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ],
        orange13: [
          {
            avatar: "level-avatar-yellow-1",
            number: "level-number-blue-1",
          },
          {
            avatar: "level-avatar-yellow-2",
            number: "level-number-blue-2",
          },
          {
            avatar: "level-avatar-yellow-3",
            number: "level-number-blue-3",
          },
          {
            avatar: "level-avatar-yellow-4",
            number: "level-number-blue-4",
          },
          {
            avatar: "level-avatar-yellow-5",
            number: "level-number-blue-5",
          },
          {
            avatar: "level-avatar-yellow-6",
            number: "level-number-blue-6",
          },
          {
            avatar: "level-avatar-yellow-7",
            number: "level-number-blue-7",
          },
          {
            avatar: "level-avatar-yellow-8",
            number: "level-number-blue-8",
          },
          {
            avatar: "level-avatar-yellow-9",
            number: "level-number-blue-9",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          },
          {
            avatar: "level-avatar-yellow-10",
            number: "level-number-blue-10",
          }
        ]
      },
      loginForm: {
        userId: "",
        userPwd: "",
      },
      loadingCasinoMoney: false,
      loadingLogin: false
    };
  },
  watch: {
    isLogined(val) {
      if (val == true) {
        this.loginForm.userId = '';
        this.loginForm.userPwd = '';
      }
    }
  },
  methods: {
    // 회원가입
    onClickSignUp() {
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
    },
    // 로그인
    async handleLogin() {
      try {
        if (this.loadingLogin) return
        
        this.loadingLogin = true
        this.$nuxt.$loading.start()
        this.loginForm.userId = this.loginForm.userId.trim().toLowerCase()
        this.loginForm.userPwd = this.loginForm.userPwd.trim()
        if (this.loginForm.userId == "" || this.loginForm.userPwd == "") {
          this.showMessage('알림메시지', "아이디, 비번을 입력해주세요.", '닫기[Close]', 2)
          this.loadingLogin = false
          this.$nuxt.$loading.finish();
          return
        }

        if (this.isUseLoginRecaptcha) {
          this.$store.commit('SET_ISLOGINCAPTCHA', 1)
          this.$store.commit('SET_RECAPTCHAVALUE')
          this.$store.commit('SET_LOGINDATA', {
            id: this.loginForm.userId,
            pass: this.loginForm.userPwd
          })
        } else {
          var resultData = await userLoginService.find({ query: {
            userId: this.loginForm.userId,
            password: this.loginForm.userPwd
          } })
    
          if (resultData.code == 6) {
            if (this.isUseSignUpPopup) {
              this.$store.commit('SET_SIGNUPPOPUPVISIBLE')
            } else {
              this.showMessage('알림메시지', resultData.message, '닫기[Close]', 0)
            }
          } else if (resultData.code == 10) {
            this.$store.commit("SET_LOGINDIALOGVISIBLE");
            this.$store.commit("SET_LOGINSIDEVERIFY", true)
            this.$store.commit("SET_LOGINSIDEUSERID", {userId: this.loginForm.userId, password: this.loginForm.userPwd })
          } else if (resultData.code == 1) {
            let resAuth = await authService.create({ 
              userLoginId: this.loginForm.userId.trim().toLowerCase(), 
              password: this.loginForm.userPwd.trim(), 
              strategy: 'local' 
            })
            window.localStorage.setItem('feathers-jwt', resAuth.accessToken)
            this.$store.commit('disableInitializableTTL')
            this.$store.commit('auth/SET_USER', resultData.data)
            this.$store.commit('auth/SET_ISLOGINED', true)
            this.$router.push("/")
          } else {
            this.showMessage( "알림메시지", resultData.message, "닫기[Close]", resultData.code == 1 ? 1 : 0 );
          }
        }
        this.loadingLogin = false
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage('알림메시지', `[오류메시지]: ${err.message}`, '닫기[Close]', 0)
        this.loadingLogin = false
        this.$nuxt.$loading.finish();
      }
    },
    // 로그아웃
    logout() {
      this.$store.dispatch("auth/logout");
      if (this.isUseDoor) this.$router.push("/Auth/Login")
    },
    // 카지노 금액 업데이트
    async RefreshCasinoCash() {
      //카지노 머니를 멤버에로 collect한다.
      if (this.currentUser && this.gameSettings?.Casino.gameStatus_manual && !this.loadingCasinoMoney) {
        this.loadingCasinoMoney = true
        this.$nuxt.$loading.start()
        this.$store.dispatch("setCashButton");

        let resBalance = await casinoBalanceService.find().catch(err => {
          console.log(err.message)
        });
        if (resBalance.code != 1) {
          console.log(resBalance.message)
        }
        this.loadingCasinoMoney = false
        this.$nuxt.$loading.finish();
      }
    },
    // 메시지모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    // 레벨
    getLevel() {
      if (this.currentUser) {
        let level = this.currentUser.level
        if (this.themeType == 'orange12' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
          if (level >= 6 && level <= 10) {
            level -= 5
          }
          if (level >= 11 && level <= 15) {
            level -= 10
          }
        }
        if (this.themeType == 'yellow12') {
          if (level == 1) return '브론즈'
          if (level == 2) return '실버l'
          if (level == 3) return '실버ll'
          if (level == 4) return '골드l'
          if (level == 5) return '골드ll'
          if (level == 6) return '플래티넘'
          if (level == 7) return '다이아'
          if (level == 8) return '마스터'
          if (level == 9) return '챌린저'
        }
        if (level < 10) {
          return `LV. 0${level}`
        } else {
          return `LV. ${level}`
        }
      }
    },
    // 페이지 이동
    goToPage(val) {
      switch (val) {
        case "payin":
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          this.$store.commit('SET_POKERREDIRECT', false)
          if (this.layoutType == 'layout2') {
            this.$store.commit('SET_ORANGEDIALOGVISIBLE')
            this.$store.commit('SET_ORANGEDIALOGTAB', 0)
          } else {
            this.$router.push("/Money/PayIn")
          }
          break;
        case "payout":
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          this.$store.commit('SET_POKERREDIRECT', false)
          if (this.layoutType == 'layout2') {
            this.$store.commit('SET_ORANGEDIALOGVISIBLE')
            this.$store.commit('SET_ORANGEDIALOGTAB', 1)
          } else {
            this.$router.push("/Money/PayOut")
          }
          break;
        case "customer-center":
          if (this.isUseNoteRead && this.noteCount > 0) {
            this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
            return
          }
          if (this.layoutType == 'layout2') {
            this.$store.commit('SET_ORANGEDIALOGVISIBLE')
            this.$store.commit('SET_ORANGEDIALOGTAB', 4)
          } else {
            this.$router.push("/Customer")
          }
          break;
        case "note":
          if (this.layoutType == 'layout2') {
            this.$store.commit('SET_ORANGEDIALOGVISIBLE')
            this.$store.commit('SET_ORANGEDIALOGTAB', 3)
          } else {
            this.$router.push("/Note")
          }
          break;
        case "tv":
          this.$router.push("/TV")
          break;
        case "attendance":
          this.$router.push("/Attendance")
          break;
        case "fame":
          this.$router.push("/Fame")
          break;
        case "friend":
          this.$router.push("/Friend")
          break;
        case "moneymove":
          if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 2)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
              this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Money/MoneyMove")
					}
          break;
        case "coupon":
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 9)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
              this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Coupon")
					}
          break;
        case "betting-history":
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 5)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
              this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/BettingHistory/Sports")
					}
          break;
        case "cash-history":
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 7)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
              this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          } else {
						this.$router.push("/Money/CashHistory")
					}
          break;
      }
    },
  },
};
</script>
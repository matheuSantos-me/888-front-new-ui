<template>
  <div>
    <!-- 피씨버젼 -->
    <div v-if="!isMobile" class="animated fadeInDownBig container-fluid" :class="[`bg-headernav-${themeType}`, {'headernav-green': themeType == 'green'}]">
      <div v-if="layoutType == 'layout2'" class="float-left p-0 m-0 p-l-10 p-r-10 p-t-24 cursor" @click="onClickShowLeftPanel()">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.3335H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M1 6H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M1 10.667H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
      </div>
      <!-- 로고 -->
      <div class="p-0 m-0 pull-left height-full display-center"
        :style="themeType == 'blue13' ? 'width: 300px; padding-right: 20px !important;' : themeType == 'yellow11' ? 'width: 300px; padding-right: 30px !important;' : themeType == 'yellow16' || themeType == 'yellow20' || themeType == 'yellow21' ? 'width: 304px;' : ''">
        <div class="m-0 pull-left" :class="themeType == 'yellow21' ? 'p-l-20' : 'p-0'" @click="goToPage(17)">
          <img class="cursor" :src="`/image/Home/${themeType}/logo1.png`" alt="LOGO" :style="getLogStyle()" />
          <img v-if="themeType == 'orange11' || themeType == 'green' || themeType == 'orange12'" id="companyimg" class="m-l-10 m-t-13 cursor float-right" :src="`/image/CompanyName.png`" />
        </div>
      </div>
      
      <div v-if="themeType == 'orange12' || themeType == 'blue17' || themeType == 'orange14' || (layoutType == 'layout3' && themeType != 'yellow18') || layoutType == 'layout5' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'blue12' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'yellow19' || themeType == 'red11'" 
        class="top-menu" :class="`top-menu-${themeType}`" :style="themeType == 'blue13' ? 'display:flex; flex-direction: row; justify-content: center;' + 'width: ' + menuWidth + 'px': layoutType == 'layout2' ? 'width: ' + menuWidth + 'px' : 'flex: 1 1;'">
        <el-row :class="{'display-center': (layoutType != 'layout3' && layoutType != 'layout5') || (themeType == 'gold13')}">
          <div class="top-menu-in" :class="`top-menu-in-${themeType}`">
            <ul class="nav" :class="{'height-100': themeType == 'blue17' || themeType == 'orange14' || themeType == 'red11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'yellow19' || layoutType == 'layout5'}" style="padding:0px; font-weight:bold; color:#ffffff;">
              <li v-if="themeType == 'yellow20' || themeType == 'yellow21' || themeType == 'yellow16'" @mouseover="mouseOver">
                <img :src="`/image/Home/${themeType}/${isVisibleMenubar ? 'menu-on.png' : 'menu.png'}`" class="top-menu-icon-yello4 cursor">
              </li>
              <li v-for="(menu, index) in topMenu" v-if="menu.type != -1" class="f-s-15 text-center cursor" :class="[`over-${themeType}`, index == 0 ? `header-button-first-${themeType}` : index == topMenu.filter(x => x.type != -1).length - 1 ? `header-button-last-${themeType}` : `header-button-${themeType}`]" @click="goToPage(menu.type)" @mouseover="mouseLeave">
                <a> <span :class="`header-button-color-${themeType}`">{{menu.title}}</span> </a>
              </li>
            </ul>
          </div>
        </el-row>
      </div>
      <!-- 로고 끝 -->
      <!-- begin header navigation right -->
      <div class="collapse navbar-collapse pull-right p-0 m-0" :class="`headernav-right-${themeType}`">
        <div class="form-group form-inline m-0 p-0 height-full">
          <!-- begin header navigation right -->
          <ul v-if="layoutType != 'layout3' && layoutType != 'layout6' && themeType != 'red13' && themeType != 'yellow19'" class="nav navbar-nav m-0 text-right">
            <li class="m-r-7" id="header-time">
              <div class="p-1 m-0 f-s-12 p-0 m-0 text-gray" :class="layoutType == 'layout2' ? 'm-t-5' : 'm-t-7'">
                <span v-if="layoutType != 'layout2'" class="pull-left m-r-3">
                  <img :src="`/image/clock_icon.png`" />
                </span>
                <span class="pull-left m-t-1" id="todaynowtime">
                  <p :class="[!isBlackMode ? 'text-black' : 'text-white2', layoutType == 'layout2' ? 'f-s-14' : 'f-s-13']">{{this.currentTime}}</p>
                </span>
              </div>
            </li>
            
            <li v-if="layoutType != 'layout2'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(12)" >
                  <i class="fa fa-plus-square" :class="`header-icon-${themeType}`"></i> 입금
                </button>
              </div>
            </li>

            <li v-if="layoutType != 'layout2'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(13)" >
                  <i class="fa fa-minus-square" :class="`header-icon-${themeType}`"></i> 출금
                </button>
              </div>
            </li>

            <li 
              v-if="
                themeType == 'orange11' || 
                themeType == 'purple11' || 
                themeType == 'red13' || 
                themeType == 'blue12' || 
                themeType == 'yellow19' || 
                themeType == 'purple12' || 
                themeType == 'gold12' || 
                themeType == 'gold11' || 
                themeType == 'red15' || 
                themeType == 'white' || 
                themeType == 'red14' || 
                themeType == 'yellow12' || 
                themeType == 'red12' || 
                themeType == 'blue15' || 
                themeType == 'orange13' || 
                themeType == 'green' || 
                themeType == 'blue14' || 
                themeType == 'orange14' || 
                themeType =='yellow17' || 
                themeType =='blue19' || 
                themeType =='blue11'
              ">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(9)" >
                  <i class="fa fa-envelope" :class="`header-icon-${themeType}`"></i> 쪽지
                </button>
              </div>
            </li>
            <li 
              v-if="
                themeType == 'orange11' || 
                themeType == 'purple11' || 
                themeType == 'red13' || 
                themeType == 'blue12' || 
                themeType == 'yellow19' || 
                themeType == 'purple12' || 
                themeType == 'gold12' || 
                themeType == 'gold11' || 
                themeType == 'red15' || 
                themeType == 'white' || 
                themeType == 'red14' || 
                themeType == 'yellow12' || 
                themeType == 'red12' || 
                themeType == 'blue15' || 
                themeType == 'orange13' || 
                themeType == 'green' || 
                themeType == 'blue14' || 
                themeType == 'orange14' || 
                themeType =='yellow17' || 
                themeType =='blue19' || 
                themeType =='blue11'
              ">
              <div class="btn-group p-1 m-0 m-t-6 float-left">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(8)" >
                  <i class="fa fa-comments-o" :class="`header-icon-${themeType}`"></i> 문의
                </button>
              </div>
              <div v-if="themeType != 'green'" class="float-left p-1 m-0 m-t-9" :class="`header-icon-${themeType}`">|</div>
            </li>
            
            <li v-if="isAvailCasino && themeType != 'green' && themeType != 'orange12' && themeType != 'blue16'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(14)" >
                  <i class="fa fa-retweet" :class="`header-icon-${themeType}`"></i> 머니이동
                </button>
              </div>
            </li>

            <li v-if="(isUseCoupon || isUseRolling || isUseLost || isUsePayback) && themeType != 'orange12' && themeType != 'orange14' && themeType != 'red15'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(27)" >
                  <img :src="`/image/Coupon/header/${themeType}.png`" width="15px"> 쿠폰/포인트
                </button>
              </div>
            </li>
            <li v-if="themeType == 'red15'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(18)" >
                  <i class="fa fa-envelope" :class="`header-icon-${themeType}`"></i> 캐쉬내역
                </button>
              </div>
            </li>
            <li v-if="themeType == 'blue16' || themeType == 'yellow13'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(9)" >
                  <i class="fa fa-envelope" :class="`header-icon-${themeType}`"></i> 쪽지
                </button>
              </div>
            </li>
            <li v-if="themeType == 'blue16' || themeType == 'yellow13'">
              <div class="btn-group p-1 m-0 m-t-6 float-left">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(8)">
                  <i class="fa fa-comments-o" :class="`header-icon-${themeType}`"></i> 문의
                </button>
              </div>
            </li>
            <li class="notice-menu" v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'gold12' || themeType == 'gold11' || themeType == 'red15' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'blue14' || themeType == 'orange14' || themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11'">
              <div class="btn-group p-1 m-0 m-t-6 float-left">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(7)">
                  <i class="fa fa-history" :class="`header-icon-${themeType}`"></i> 배팅내역
                </button>
              </div>
            </li>
            <li class="notice-menu" v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'gold12' || themeType == 'gold11' || themeType == 'red15' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'blue14' || themeType == 'orange14' || themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11'">
              <div class="float-left p-1 m-0 m-t-9" :class="`header-icon-${themeType}`">|</div>
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(6)">
                  <i class="fa fa-calendar-check" :class="`header-icon-${themeType}`"></i> 이벤트
                </button>
              </div>
            </li>
            <li class="notice-menu" v-if="themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'gold12' || themeType == 'gold11' || themeType == 'red15' || themeType == 'white' || themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'blue14' || themeType == 'orange14' || themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11'">
              <div class="btn-group p-1 m-0 m-t-6">
                <button type="button" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="goToPage(5)">
                  <i class="fa fa-tree" :class="`header-icon-${themeType}`"></i> {{noticeSettings.noticeTitle}}
                </button>
              </div>
            </li>
            <li>
              <div class="btn-group p-1 m-0 m-t-1">
                <button type="button" v-if="turnOnSound" class="btn btn-xs no-bg m-0" :class="`header-text-${themeType}`" @click="onClickVolume">
                  <img :src="`/image/Home/${themeType}/volume-on.png`" width="25" />
                </button>
                <button
                  type="button"
                  v-else
                  class="btn btn-xs no-bg m-0"
                  :class="`header-text-${themeType}`"
                  @click="onClickVolume"
                >
                  <img :src="`/image/Home/${themeType}/volume-off.png`" width="25" />
                </button>
              </div>
            </li>
            
            <li v-if="layoutType == 'layout5'">
              <img :src="`/image/Home/${themeType}/${showRightPanelYellow4 ? 'profile-on.png' : 'profile.png'}`" class="cursor" @click="onShowRightPanelYellow4()">
            </li>

            <li v-if="currentUser == null">
              <div class="btn-group p-0 m-0">
                <button
                  type="button"
                  class="tertiary m-0 width-100 text-center m-r-5 m-l-15"
                  :class="`header-button-login-${themeType}`"
                  @click="onClickLogin()"
                >로그인</button>
              </div>
            </li>

            <li v-if="currentUser == null">
              <div class="btn-group p-0 m-0">
                <center>
                  <button
                    type="button"
                    class="secondary m-0 width-100 text-center p-l-0 p-r-0"
                    :class="`header-button-signup-${themeType}`"
                    @click="onClickSignUp()"
                  >회원가입</button>
                </center>
              </div>
            </li>

            <li v-if="currentUser">
              <div class="btn-group p-0 m-0">
                <center>
                  <button
                    type="button"
                    class="tertiary text-white m-0 width-100 text-center m-r-5 m-l-15"
                    :class="`header-button-login-${themeType}`"
                    @click="logout()"
                  >로그아웃</button>
                </center>
              </div>
            </li>
          </ul>
          <ul v-if="layoutType == 'layout3' || layoutType == 'layout6' || themeType == 'red13' || themeType == 'yellow19'" class="nav navbar-nav m-0 text-right">
            <li v-if="currentUser == null">
              <div class="btn-group p-0 m-0">
                <button
                  type="button"
                  class="tertiary m-0 width-100 text-center m-r-5 m-l-15"
                  :class="`header-button-login-${themeType}`"
                  @click="onClickLogin()"
                >로그인</button>
              </div>
            </li>
            
            <li v-if="currentUser == null">
              <div class="btn-group p-0 m-0">
                <center>
                  <button
                    type="button"
                    class="secondary m-0 text-center"
                    :class="[`header-button-signup-${themeType}`, themeType != 'blue18' && themeType != 'yellow15' && themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19' ? 'p-l-0 p-r-0' : 'p-l-16 p-r-16']"
                    @click="onClickSignUp()"
                  >회원가입</button>
                </center>
              </div>
            </li>

            <li v-if="currentUser">
              <div class="btn-group p-0 m-0">
                <center>
                  <button
                    type="button"
                    class="tertiary text-white m-0 width-100 text-center m-r-5 m-l-15"
                    :class="`header-button-login-${themeType}`"
                    @click="logout()"
                  >로그아웃</button>
                </center>
              </div>
            </li>
          </ul>
          <!-- end header navigation right -->
        </div>
      </div>
      <!-- end header navigation right -->
    </div>
    <el-row v-if="layoutType == 'layout5' && !isMobile" class="width-full f-s-13 f-w-900 float-right p-5" :class="themeType == 'blue19' || themeType == 'blue11' ? 'text-white' : 'text-black'" style="height: 34px;"
      :style="themeType == 'yellow17' ? 'background: #ce6200;' : themeType == 'blue19' ? 'background: #244473;' : themeType == 'blue11' ? 'background: #302ce2;' : 'background: #f5c32c;'">
      <div class="float-left m-l-5">
        <img :src="`/image/Home/${themeType}/${showLeftPanel ? 'menu-on.png' : 'menu.png'}`" class="cursor" @click="onClickShowLeftPanel()" />
      </div>
      <div v-if="currentUser" class="float-right">
        <div class="float-left p-3 p-l-12 p-r-12 b-r-6" :class="`text-${themeType}`" style="background: #030917;">
          LV. 0{{currentUser.level}}
        </div>
        <div class="float-left p-3 p-l-12 p-r-12">
          ID: {{currentUser.userLoginId}}
        </div>
        <div class="float-left p-3 p-l-12 p-r-12">
          닉네임: {{currentUser.nickname}}
        </div>
        <div class="float-left p-1 p-l-12 p-r-12 b-r-6 m-r-16" :style="themeType == 'blue19' || themeType == 'blue11' ? 'border: 1px solid #fff;' : 'border: 1px solid #000;'">
          <img :src="`/image/Home/${themeType}/sportscash-b.png`" width="16" />
          스포츠캐쉬: {{currencyFormat(currentUser.cash.sportsmoney, "원")}}
        </div>
        <div class="float-left p-1 p-l-12 p-r-12 b-r-6 m-r-11" :style="themeType == 'blue19' || themeType == 'blue11' ? 'border: 1px solid #fff;' : 'border: 1px solid #000;'">
          <img :src="`/image/Home/${themeType}/casinocash-b.png`" width="16" />
          카지노캐쉬: {{currencyFormat(currentUser.cash.casinomoney, "원")}}
        </div>
      </div>
    </el-row>
    <div v-if="(themeType == 'yellow20' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14' || themeType == 'yellow21' || themeType == 'yellow16') && isVisibleMenubar" class="menubar" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <table>
        <tbody>
          <tr>
            <td class="menubar-td" @click="goToPage(12)">
              <img :src="`/image/Home/${themeType}/payin.png`" width="22px" class="m-r-12 img-menubar-payin">입금
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(13)">
              <img :src="`/image/Home/${themeType}/payout.png`" width="22px" class="m-r-12 img-menubar-payout">출금
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(14)">
              <img :src="`/image/Home/${themeType}/moneymove.png`" width="22px" class="m-r-12 img-menubar-moneymove">머니이동
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
          </tr>
          <tr>
            <td class="menubar-td" @click="goToPage(8)">
              <img :src="`/image/Home/${themeType}/customer.png`" width="22px" class="m-r-12 img-menubar-customer">문의
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(9)">
              <img :src="`/image/Home/${themeType}/note.png`" width="22px" class="m-r-12 img-menubar-note">쪽지함
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(6)">
              <img :src="`/image/Home/${themeType}/event.png`" width="22px" class="m-r-12 img-menubar-event">이벤트
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
          </tr>
          <tr>
            <td class="menubar-td" @click="goToPage(27)">
              <img :src="`/image/Home/${themeType}/coupon.png`" width="22px" class="m-r-12 img-menubar-coupon">쿠폰/포인트
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(11)">
              <img :src="`/image/Home/${themeType}/attendance.png`" width="22px" class="m-r-12 img-menubar-attendance">출석현황
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(10)">
              <img :src="`/image/Home/${themeType}/friend.png`" width="22px" class="m-r-12 img-menubar-friend">지인추천
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
          </tr>
          <tr>
            <td class="menubar-td" @click="goToPage(5)">
              <img :src="`/image/Home/${themeType}/notice.png`" width="22px" class="m-r-12 img-menubar-notice">공지/규정
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(7)">
              <img :src="`/image/Home/${themeType}/betting-history.png`" width="22px" class="m-r-12 img-menubar-betting-history">배팅내역
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
            <td class="menubar-td" @click="goToPage(18)">
              <img :src="`/image/Home/${themeType}/cash-history.png`" width="22px" class="m-r-12 img-menubar-cash-history">캐쉬내역
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
          </tr>
          <tr v-if="themeType == 'yellow20'">
            <td class="menubar-td" @click="goToPage(15)">
              <img :src="`/image/Home/${themeType}/fame.png`" width="22px" class="m-r-12 img-menubar-fame">명예의전당
              <img :src="`/image/Home/${themeType}/arrow-left.png`" width="18" class="img-arrow-left">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 피씨버젼 끝 -->
    <!-- 모바일버젼 -->
    <div v-if="isMobile" :class="`header-mob-${themeType}`">
      <el-row v-if="layoutType == 'layout1'">
        <el-col 
          :span="
            themeType == 'gold11' || 
            themeType == 'orange13' || 
            themeType == 'red12' || 
            themeType == 'blue15' || 
            themeType == 'red11' || 
            themeType == 'blue16' || 
            themeType == 'blue17' || 
            themeType == 'orange14' ? 6 : 9
          " class="p-l-3" 
          :class="`header-mob-left-${themeType}`">
          <img :src="`/image/Home/Menu/${themeType}/menu-icon.png`" width="30" class="m-r-10 cursor" @click="onClickShowLeftPanel()" />
          <img :src="`/image/Home/Menu/${themeType}/refresh-icon.png`" width="17" class="cursor" @click="refresh" />
        </el-col>
        <el-col 
          :span="
            themeType == 'gold11' || 
            themeType == 'orange13' || 
            themeType == 'red12' || 
            themeType == 'blue15' || 
            themeType == 'red11' || 
            themeType == 'blue16' || 
            themeType == 'blue17' || 
            themeType == 'orange14' ? 12 : 6
          " class="text-center p-t-8">
          <img v-if="themeType == 'orange11'" :src="`/image/Home/orange11/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'orange13'" :src="`/image/Home/orange13/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'purple11'" :src="`/image/Home/purple11/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'red13'" :src="`/image/Home/red13/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'blue12'" :src="`/image/Home/blue12/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'yellow19'" :src="`/image/Home/yellow19/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'purple12'" :src="`/image/Home/purple12/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'blue18'" :src="`/image/Home/blue18/logo1.png`" height="11" class="cursor m-t-6" @click="goToPage(17)" />
          <img v-if="themeType == 'yellow15'" :src="`/image/Home/yellow15/logo1.png`" height="11" class="cursor m-t-6" @click="goToPage(17)" />
          <img v-if="themeType == 'blue14'" :src="`/image/Home/blue14/logo1.png`" height="25" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'blue16'" :src="`/image/Home/blue16/logo1.png`" height="25" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'gold12'" :src="`/image/Home/gold12/logo1.png`" height="30" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'blue17'" :src="`/image/Home/blue17/logo1.png`" height="30" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'orange14'" :src="`/image/Home/orange14/logo1.png`" height="30" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'yellow13'" :src="`/image/Home/yellow13/logo1.png`" height="30" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'red15'" :src="`/image/Home/red15/logo1.png`" height="30" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'white'" :src="`/image/Home/white/logo2.png`" height="25" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'red14'" :src="`/image/Home/red14/logo2.png`" height="45" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'yellow12'" :src="`/image/Home/yellow12/logo2.png`" height="45" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'red12'" :src="`/image/Home/red12/logo2.png`" height="45" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'blue15'" :src="`/image/Home/blue15/logo2.png`" height="45" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'red11'" :src="`/image/Home/red11/logo2.png`" height="27" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'gold11'" :src="`/image/Home/gold11/logo1.png`" height="40" class="cursor" @click="goToPage(17)" />
          <img v-if="themeType == 'green'" :src="`/image/Home/green/logo1.png`" height="27" class="cursor" @click="goToPage(17)" />
        </el-col>
        <el-col 
          :span="
            themeType == 'gold11' || 
            themeType == 'orange13' || 
            themeType == 'red12' || 
            themeType == 'blue15' || 
            themeType == 'red11' || 
            themeType == 'blue16' || 
            themeType == 'blue17' || 
            themeType == 'orange14' ? 6 : 9
          " class="text-right p-r-8" :class="`header-mob-right-${themeType}`">
          <img v-if="currentUser" :src="`/image/Home/logout.png`" height="30" class="m-l-5 cursor float-right" @click="logout()" />
          <img v-if="canChat" :src="`/image/Home/chat.png`" height="30" class="float-right cursor" @click="onClickOpenChat()" />
          <div v-if="isUseChangePass" class="f-s-11 float-right text-white p-2 cursor m-t-4" :class="`border-1-${themeType}`">개인정보변경</div>
        </el-col>
      </el-row>
      <el-row v-if="layoutType == 'layout2'">
        <div class="float-left p-0 m-0 p-l-16 p-t-24 cursor" @click="onClickShowLeftPanel()">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.3335H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M1 6H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M1 10.667H13" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
        </div>
        <img v-if="layoutType == 'layout2'" :src="`/image/Home/${themeType}/logo1.png`" height="32" class="cursor m-l-24 m-t-14" @click="goToPage(17)" />
        <button
          v-if="!currentUser"
          type="button"
          class="secondary m-0 width-100 text-center b-r-6 p-10 height-38 float-right m-r-16 m-l-8 m-t-12"
          :class="`header-button-signup-${themeType}`"
          @click="onClickSignUp()"
        >회원가입</button>
        <button
          v-if="!currentUser"
          type="button"
          class="tertiary m-0 width-100 text-center b-r-6 p-10 height-38 float-right m-t-12"
          :class="`header-button-login-${themeType}`"
          @click="onClickLogin()"
        >로그인</button>
        <img v-if="currentUser" :src="`/image/Home/Ic_profile.png`" class="float-right m-r-16 m-t-16" @click="goToPage(34)">
      </el-row>
      <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" style="height: 62px; display: flex">
        <div style="float: left; height: 100%; padding: 12px; display: flex; align-items: center;">
          <img class="cursor" height="20" @click="onClickShowLeftPanel()"
           :src="`/image/Home/${themeType}/${isVisibleMenubar ? 'menu-on.png' : 'menu.png'}`">
        </div>
        <div style="float: left; height: 100%; display: flex; align-items: center; flex: 1 1 0px; justify-content: center;">
          <img class="cursor" :src="`/image/Home/${themeType}/logo1.png`" alt="LOGO" @click="goToPage(17)"
            :height="themeType == 'yellow18' || themeType == 'blue18' || themeType == 'gold13' ? 25 : themeType == 'yellow21' ? 33 : themeType == 'yellow16' || themeType == 'yellow15' ? 60 : 40" />
          <img v-if="themeType!='yellow15'" :src="`/image/Home/${themeType}/REFRESH.png`" width="17" class="cursor m-l-24" @click="refresh" />
        </div>
        <div style="float: right; height: 100%; display: flex; align-items: center; padding-right: 12px;">
          <img class="cursor float-right" :src="`/image/Home/${themeType}/profile.png`" alt="LOGO" width="45" @click="onShowRightPanelYellow4()" />
        </div>
      </el-row>
    </div>
    <!-- 모바일버젼 끝 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  currencyFormat,
  getCurrentTime,
  getMiniAddress
} from "@/assets/js/utils";

export default {
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      isCollapsed: "getIsClientCollapsed",
      adminDomains: "getAdminDomains",
      currentUser: "auth/currentUser",
      noteCount: "getNoteCount",
      turnOnSound: "getTurnOnSound",
      showLeftPanel: "getShowLeftPanel",
      showRightPanel: "getShowRightPanel",
      showRightPanelYellow4: "getShowRightPanelYellow4",
      screenWidth: "getScreenWidth",
      isShowChatDialog: "getIsShowChatDialog",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      canChat: "getCanChat",
      noticeSettings: "getNoticeSettings",
      isUseDoor: "getIsUseDoor",
      isUseNoteRead: "getIsUseNoteRead",
      isUseChangePass: "getIsUseChangePass",
      isAvailCasino: "getIsAvailCasino",
      isNewUser: "getIsNewUser",
      betSlipList: "betslip/getBetSlipList",
      isDivideCasino: "getIsDivideCasino",
      gameSettings: "getGameSettings",
			isUseCoupon: "getIsUseCoupon",
      isUseRolling: "getIsUseRolling",
      isUseLost: "getIsUseLost",
      isUsePoker: "getIsUsePoker",
      isUsePayback: "getIsUsePayback",
      topMenu: "getTopMenu",
      currentPageName: "getCurrentPageName"
    }),
  },
  watch: {
    screenWidth() {
      this.menuWidth = this.screenWidth - 620;
    }
  },
  data() {
    return {
      isVisibleLogin: false,
      signupDialogVisibleCount: 0,
      isVolumeOn: true,
      currentTime: "",
      menuWidth: 0,
      isVisibleMenubar: false,
      imageUrl: ""
    };
  },
  mounted() {
    this.calculateTime = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    this.menuWidth = this.screenWidth - 620;
  },
  destroyed() {
    clearInterval(this.calculateTime);
  },
  methods: {
		currencyFormat,
    getCurrentTime,
    getMiniAddress,
    getLogStyle() {
      if (this.themeType == 'orange12' || this.themeType == 'blue18') {
        return 'height: 30px;'
      } else if (this.themeType == 'orange11' || this.themeType == 'green') {
        return 'height: 37px;'
      } else if (this.themeType == 'yellow13' || this.themeType == 'yellow20' || this.themeType == 'yellow18' || this.themeType == 'orange13') {
        return 'height: 40px;'
      } else if (this.themeType == 'purple11' || this.themeType == 'yellow11' || this.themeType == 'purple12' || this.themeType == 'blue14' || this.themeType == 'blue16' || this.themeType == 'gold11' || this.themeType == 'red11') {
        return 'height: 45px;'
      } else if (this.themeType == 'gold13' || this.themeType == 'white' || this.themeType == 'yellow17' || this.themeType == 'blue19' || this.themeType == 'blue11') {
        return 'height: 50px;'
      } else if (this.themeType == 'gold12') {
        return 'height: 58px;'
      } else if (this.themeType == 'blue15') {
        return 'height: 60px;'
      } else if (this.themeType == 'blue17' || this.themeType == 'red12' || this.themeType == 'blue13') {
        return 'height: 70px;'
      } else if (this.themeType == 'yellow16' || this.themeType == 'red13' || this.themeType == 'red14' || this.themeType == 'yellow12' || this.themeType == 'orange14' || this.themeType == 'blue12' || this.themeType == 'yellow19' || this.themeType == 'yellow14') {
        return 'height: 80px;'
      } else if (this.themeType == 'yellow21' || this.themeType == 'red15' || this.themeType == 'yellow15') {
        return 'height: 100px;'
      }
    },
    refresh() {
      window.location.reload(true);
    },
		mouseOver() {
			this.isVisibleMenubar = true
		},
		mouseLeave() {
			this.isVisibleMenubar = false
    },
    onShowRightPanel() {
      this.$store.commit("SET_SHOWRIGHTPANEL", !this.showRightPanel);
    },
    onShowRightPanelYellow4() {
      this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", !this.showRightPanelYellow4);
    },
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
		goToPage(val) {
			switch (val) {
				case 0:		// 스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/Sports")
					break
				case 1:		// 실시간
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if ((this.themeType == 'red15' || this.themeType == 'gold11' || this.themeType == 'yellow14' || this.themeType == 'gold11' || this.themeType == 'red12' || this.themeType == 'blue15') && !this.currentUser) {
						this.showMessage('알림메시지', "로그인 후 이용 가능합니다.", '닫기[Close]', 2)
						return
					}

					this.$store.commit("sports/Init_QUERYLIST")
					this.$router.push("/LiveSports")
					break
				case 2:		// 미니게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
          			this.$router.push(this.getMiniAddress(this.gameSettings, this.themeType))
					break
				case 3:		// 가상스포츠
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/VirtualSports/Football")
					break
				case 4:		// 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Casino")
					break
				case 5:		// 공지사항
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 6)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Notice")
					}
					break
				case 6:		// 이벤트
					this.$router.push("/Event")
					break
				case 7:		// 배팅내역
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
					break
				case 8:		// 문의
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 4)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Customer")
					}
					break
				case 9:		// 쪽지
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 3)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Note")
					}
					break
				case 10:	// 지인추천
					this.$router.push("/Friend")
					break
				case 11:	// 출석현황
					this.$router.push("/Attendance")
					break
				case 12:	// 입금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
     			 	this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 0)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayIn")
					}
					break
				case 13:	// 출금
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
     			 	this.$store.commit('SET_POKERREDIRECT', false)
					if (this.layoutType == 'layout2') {
						if (this.currentUser) {
							this.$store.commit('SET_ORANGEDIALOGVISIBLE')
							this.$store.commit('SET_ORANGEDIALOGTAB', 1)
						} else {
							this.$store.commit("SET_LOGINDIALOGVISIBLE");
      						this.$store.commit("SET_LOGINSIDEVERIFY", false)
						}
          			} else {
						this.$router.push("/Money/PayOut")
					}
					break
				case 14:	// 머니이동
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
					break
				case 15:	// 명예의 전당
					this.$router.push("/Fame")
					break
				case 16:	// 스코어
					this.$router.push("/GameResult")
					break
				case 17:	// 홈페이지
					this.$router.push("/")
					break
				case 18:	// 캐쉬내역
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
					break
				case 19:	// TV
					if (this.themeType == 'yellow14') {
						var windowReference = window.open();
						windowReference.location = 'https://bigwin.livenst.com/banana/livescore/livescore/';
						return
					}
					if (this.themeType == 'gold13') {
						var windowReference = window.open();
						windowReference.location = 'https://totodot79.com/index.php?pa=sports';
						return
         			}
					this.$router.push("/TV")
					break
				case 20: 	// FX
					this.$router.push("/Mini/Fx")
					break
				case 21:	// 별다리
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/BoscoreLadder1")
					break
				case 22:	// 토큰
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/TokenPowerBall")
					break
				case 23:	// 로투스
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Lotus/Baccarat1")
					break
				case 24:	// 벳게임
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
          			this.$router.push("/BetGames/Baccarat")
					break
				case 25: 	// 888Sport
					var windowReference = window.open();
					windowReference.location = 'https://' + this.sportDomain;
					break
				case 26: 	// 1분 FX
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/NamedFX1")
					break
				case 27:	// 쿠폰/포인트
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
					break
				case 28:	// EOS
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/EOSPowerBall1")
					break
				case 29:	// 동행복권
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/Mini/CompanionKenoLadder")
					break
				case 30:	// MGM				
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					this.$router.push("/MGM/MGMBaccarat1")
					break
				case 31:	// 포커
					this.$router.push("/Poker")
					break;
				case 32:	// 라이브 카지노
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 1}})
					break
				case 33:	// 슬롯
					if (this.isUseNoteRead && this.noteCount > 0) {
						this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
						return
					}
					if (!this.isAvailCasino) {
						this.showMessage('알림메시지', "업데이트 준비중", '닫기[Close]', 2)
						return
					}
					this.$router.push({path: "/Casino", query: {type: 2}})
					break
				case 34:
					this.$store.commit('SET_ORANGEDIALOGVISIBLE')
          			this.$store.commit('SET_ORANGEDIALOGTAB', 8)
					break
        case 74:
					this.$router.push("/FuturesTrading")
					break;	
				case 75:	
					this.$router.push("/InsightBets")
					break;	
			}
		},
    onClickVolume() {
      this.$store.commit("SET_TURNONSOUND", !this.turnOnSound);
    },
    onClickLogin() {
      this.$store.commit("SET_LOGINDIALOGVISIBLE");
      this.$store.commit("SET_LOGINSIDEVERIFY", false)
    },
    onClickSignUp() {
      if (!this.isNewUser) {
        this.showMessage('알림메시지', "현재 신규가입이 불가능합니다.|고객센터로 문의 부탁드립니다.", '닫기[Close]', 2)
        return
      }
      if (this.isMobile) {
        this.$router.push("/auth/signup")
      } else {
        this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
      if (this.isUseDoor) this.$router.push("/Auth/Login")
    },
    onClickShowLeftPanel() {
      this.$store.commit("SET_SHOWLEFTPANEL", !this.showLeftPanel);
      if (this.isMobile && this.showRightPanel) {
        this.$store.commit("SET_SHOWRIGHTPANEL", !this.showRightPanel);
      }
      if (this.isMobile && this.showRightPanelYellow4) {
        this.$store.commit("SET_SHOWRIGHTPANELYELLOW4", !this.showRightPanelYellow4);
      }
    },
    onClickOpenChat() {
      this.$store.commit("SET_ISSHOWCHATDIALOG", !this.isShowChatDialog);
    },
  },
};
</script>
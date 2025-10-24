<template>
  <client-only>
    <el-row :class="{'display-flex': layoutType == 'layout6'}">
      <div v-if="layoutType == 'layout6' && !isMobile" class="bg-grey923">
        <el-row :class="`signup-img-${themeType}`">
          <img :src="`/image/login/signup-${themeType}.png`" height="100%">
          <el-row v-if="themeType == 'blue18'" class="display-center" style="position: absolute; top: 0; left: 0; width: 100%; text-align: center; color: #fff; height: 100%;line-height: 26px;">
            <el-row>
              마추자는 여러분께 Betting의 진정한 가치를<br>
              선물합니다. 그 어디보다 빠르고 쉬운<br>
              플렛폼을 제공 합니다. 마추자에서 당신의<br>
              가치에 품격을 더 해 보세요. 진보된<br>
              기술력의 차이를 마추자가<br>
              만들어 갑니다. <br><br>
              충환전 무제한<br>
              스포츠 멀티배팅 이벤트<br>
              머니 리워드 포인트<br>
              레벨업 축하금<br><br><br><br><br><br><br><br><br>
              이미 회원이시라면 <span class="cursor text-underline" :class="`text-${themeType}`" @click="onClickLogin()">로그인</span> 하세요
            </el-row>
          </el-row>
        </el-row>
      </div>
      <el-form class="text-white auth-dialog signup" :class="isMobile ? `bg-signdialogm-${themeType}` : `bg-signdialog-${themeType}`"
        autoComplete="on" :model="signupForm" :rules="signupRules" ref="signupForm" label-position="left">
        <!-- 헤더 -->
        <el-row v-if="!isMobile && layoutType == 'layout1'" class="m-t-21">
          <el-col :span="22" class="text-center display-center">
            <el-row>
              <img :src="`/image/Home/${themeType}/LoginLogo.png`" :class=" themeType == 'orange11' ? 'm-t-0' : 'm-t-7'"
                :height="getLogoImgHeight()" class="float-left" />
              <div class="f-s-21 f-w-700 p-l-5 p-t-15 float-left" :class="getTextColor(themeType, 1)">
                회원가입
              </div>
            </el-row>
          </el-col>
          <el-col :span="2" class="text-center">
            <img :src="`/image/Home/${themeType}/Close.png`" class="cursor m-t-10" @click="onClickClose" />
          </el-col>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" class="text-left" :class="isMobile ? 'f-s-20' : 'f-s-24'">
          <span class="opacity-6">회원가입</span>
          <img v-if="!isMobile" :src="'/image/multi.svg'" class="float-right cursor i-multi" @click="onClickClose" />
        </el-row>
        <el-row v-if="(layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && !isMobile" class="p-b-36">
          <el-row class="text-center">
            <img v-if="layoutType != 'layout6'" :src="`/image/Home/${themeType}/preview.png`" :width="themeType == 'yellow16' || themeType == 'yellow18' ? 200 : themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow14' ? 300 : 140">
            <img v-if="!isMobile" :src="'/image/multi.svg'" class="float-right cursor i-multi" style="position: absolute; top: 0; right: 0;" @click="onClickClose" />
          </el-row>
          <el-row v-if="layoutType != 'layout6'" class="text-center f-s-22 f-w-900 m-t-20" :class="`text-${themeType}`">회원가입</el-row>
        </el-row>
        <!-- 헤더 끝 -->
        <el-row :class="`sign-content-${themeType}`">
          <el-row>
            <el-row>
              <el-col :span="layoutType == 'layout2' || (layoutType == 'layout6' && isMobile) ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="UserName" :class="`signup-color-${themeType}`">아이디</label>
                  </span>
                  <el-form-item class="item-sign" prop="userId">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="userId"
                      minlength="4"
                      maxlength="12"
                      v-model="signupForm.userId"
                      @input="onKeyUpId"
                      @keyup.enter.native="onClickCheckId"
                      autoComplete="on"
                      placeholder="4~12자의 영문, 숫자를 입력해주세요."
                    />
                  </el-form-item>
                  <el-button
                    v-if="layoutType == 'layout2'"
                    login-button
                    type="primary"
                    :class="`${themeType}-button`"
                    :loading="loadingCheckId"
                    @click.native.prevent="onClickCheckId"
                    style="position: absolute; right: 4px; height: 36px;"
                    :style="isMobile ? 'top: 20px' : 'top: 23px;'"
                  >
                    중복확인
                  </el-button>
                </div>
              </el-col>
              <el-col v-if="layoutType != 'layout2'" :span="12">
                <el-button
                  v-if="layoutType != 'layout6'"
                  login-button
                  type="primary"
                  class="m-t-18 m-l-5"
                  :class="themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`"
                  :loading="loadingCheckId"
                  @click.native.prevent="onClickCheckId">
                  중복확인
                </el-button>
                <div v-if="layoutType == 'layout6' && !isMobile" class="tl_reg_item">
                  <span class="lbl_reg popup_lbl">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="FirstName" :class="`signup-color-${themeType}`">닉네임</label>
                  </span>
                  <el-form-item class="item-sign" prop="nickname">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="nickname"
                      minlength="2"
                      maxlength="6"
                      v-model="signupForm.nickname"
                      @input="onKeyUpNickname"
                      @keyup.enter.native="onClickCheckNickName"
                      autoComplete="on"
                      placeholder="2~6자의 한글 닉네임을 입력해주세요."
                    />
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="isMobile ? 24 : 12">
                <div class="tl_reg_item">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="Password" :class="`signup-color-${themeType}`">
                      비밀번호
                      <span class="f-s-11">(#&+ 은 보안상 입력 불가)</span>
                    </label>
                  </span>
                  <el-form-item class="item-sign" prop="password">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="password"
                      type="password"
                      v-model="signupForm.password"
                      autoComplete="off"
                      placeholder="비밀번호를 입력해주세요."
                    />
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="isMobile ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="PasswordValidation" :class="`signup-color-${themeType}`">비밀번호 확인</label>
                  </span>
                  <el-form-item class="item-sign" prop="passwordCheck">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="passwordCheck"
                      type="password"
                      v-model="signupForm.passwordCheck"
                      autoComplete="off"
                      placeholder="다시 한번 비밀번호를 입력해주세요."
                    />
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="layoutType != 'layout6' || (layoutType == 'layout6' && isMobile)">
              <el-col :span="layoutType == 'layout2' || (layoutType == 'layout6' && isMobile) ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="FirstName" :class="`signup-color-${themeType}`">닉네임</label>
                  </span>
                  <el-form-item class="item-sign" prop="nickname">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="nickname"
                      minlength="2"
                      maxlength="6"
                      v-model="signupForm.nickname"
                      @input="onKeyUpNickname"
                      @keyup.enter.native="onClickCheckNickName"
                      autoComplete="on"
                      placeholder="2~6자의 한글 닉네임을 입력해주세요."
                    />
                  </el-form-item>
                  <el-button
                    v-if="layoutType == 'layout2'"
                    login-button
                    type="primary"
                    :class="`${themeType}-button`"
                    :loading="loadingCheckName"
                    @click.native.prevent="onClickCheckNickName"
                    style="position: absolute; right: 4px; height: 36px;"
                    :style="isMobile ? 'top: 20px' : 'top: 23px;'"
                  >
                    중복확인
                  </el-button>
                </div>
              </el-col>
              <el-col v-if="layoutType != 'layout2' && layoutType != 'layout6'" :span="12">
                <el-button
                  login-button
                  type="primary"
                  class="m-t-18 m-l-5"
                  :class="themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`"
                  :loading="loadingCheckName"
                  @click.native.prevent="onClickCheckNickName"
                >
                  중복확인
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="layoutType == 'layout2' || (layoutType == 'layout6' && isMobile) ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="Mobile" :class="`signup-color-${themeType}`">휴대폰 번호(-없이)</label>
                  </span>
                  <el-form-item class="item-sign" prop="mobileNumber">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        :class="`input-${themeType}`"
                        name="mobileNumber"
                        maxlength="11"
                        v-model="signupForm.mobileNumber"
                        @input="onKeyUpMobile"
                        @keyup.enter.native="doSendSMSVerifyCode"
                        autoComplete="on"
                        placeholder="휴대폰 번호를 입력해주세요."
                        style="width: 100%"
                      />
                      <el-button
                        v-if="layoutType == 'layout2' || layoutType == 'layout6'"
                        :class="`${themeType}-button`"
                        type="primary"
                        @click.native.prevent="doSendSMSVerifyCode"
                        :loading="loadingSendCode"
                        style="position: absolute; right: 4px; top: 3px; height: 36px;"
                      >
                        인증번호발송
                      </el-button>
                    </el-row>

                  </el-form-item>
                </div>
              </el-col>
              <el-col v-if="layoutType != 'layout2' && layoutType != 'layout6'" :span="12">
                <el-button
                  v-if="layoutType != 'layout6'"
                  class="m-t-18 m-l-5"
                  :class="themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`"
                  type="primary"
                  @click.native.prevent="doSendSMSVerifyCode"
                  :loading="loadingSendCode">
                  인증번호발송
                </el-button>
                <div v-if="layoutType == 'layout6' && !isMobile" class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <label for="FirstName" :class="`signup-color-${themeType}`">SMS 인증코드</label>
                    <span lass="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                  </span>
                  <el-form-item class="item-sign">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        :class="`input-${themeType}`"
                        name="mobileNumber"
                        v-model="inputSMSVerifyCode"
                        autoComplete="on"
                        placeholder="SMS 인증코드"
                        style="width: 100%"
                      />
                    </el-row>
                  </el-form-item>
                  <el-button
                    v-if="layoutType == 'layout2'"
                    :class="`${themeType}-button`"
                    type="primary"
                    :disabled="isCheckSMSVerifyCode"
                    @click="doCheckSMSVerifyCode"
                    :loading="loadingCheckCode"
                    style="position: absolute; right: 4px; height: 36px;"
                    :style="isMobile ? 'top: 20px' : 'top: 23px;'"
                  >
                    {{ isCheckSMSVerifyCode ? "확인됨" : "확인" }}
                  </el-button>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="isSendSMSVerifyCode">
              <el-col :span="layoutType == 'layout2' ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <label for="FirstName" :class="`signup-color-${themeType}`">SMS 인증코드</label>
                    <span lass="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                  </span>
                  <el-form-item class="item-sign">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        :class="`input-${themeType}`"
                        name="mobileNumber"
                        v-model="inputSMSVerifyCode"
                        autoComplete="on"
                        placeholder="SMS 인증코드"
                        style="width: 100%"
                      />
                    </el-row>
                  </el-form-item>
                  <el-button
                    v-if="layoutType == 'layout2'"
                    :class="`${themeType}-button`"
                    type="primary"
                    :disabled="isCheckSMSVerifyCode"
                    @click="doCheckSMSVerifyCode"
                    :loading="loadingCheckCode"
                    style="position: absolute; right: 4px; height: 36px;"
                    :style="isMobile ? 'top: 20px' : 'top: 23px;'"
                  >
                    {{ isCheckSMSVerifyCode ? "확인됨" : "확인" }}
                  </el-button>
                </div>
              </el-col>
              <el-col v-if="layoutType != 'layout2'" :span="12">
                <el-button
                  class="m-t-18 m-l-5"
                  :class="themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`"
                  type="primary"
                  :disabled="isCheckSMSVerifyCode"
                  @click="doCheckSMSVerifyCode"
                  :loading="loadingCheckCode"
                >
                  {{ isCheckSMSVerifyCode ? "확인됨" : "확인" }}
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="isMobile ? 24 : 12">
                <div class="tl_reg_item">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="BankId" :class="`signup-color-${themeType}`">은행명</label>
                    <span v-if="themeType == 'red15' || themeType == 'gold12' || themeType == 'yellow21'" class="f-s-12">[미성년자 절대이용불가]</span>
                  </span>
                  <el-select
                    v-model="signupForm.bankName"
                    placeholder="===은행 선택==="
                    class="input-sign"
                    :class="[{'width-full': isMobile}, `input-${themeType}`]"
                  >
                    <el-option v-for="item in bankList" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </div>
              </el-col>
              <el-col :span="isMobile ? 24 : 12" :class="{ 'm-t-10': isMobile }">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="AccountNumber" :class="`signup-color-${themeType}`">계좌번호(-없이)</label>
                  </span>
                  <el-form-item class="item-sign" prop="accountNumber">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="accountNumber"
                      @input="onKeyUpAccountNumber"
                      v-model="signupForm.accountNumber"
                      autoComplete="off"
                      placeholder="계좌번호를 입력해주세요."
                    />
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="themeType == 'blue14' || themeType == 'blue16'" class="text-red m-b-20">
              카오뱅크 3355, 7979, 7777 및 신한은행 562 가입불가
            </el-row>
            <el-row>
              <el-col :span="isMobile || (layoutType != 'layout2' && layoutType != 'layout6') ? 24 : 12">
                <div class="tl_reg_item">
                  <span class="lbl_reg popup_lbl" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="AccountHolder" :class="`signup-color-${themeType}`">예금주(한글만)</label>
                  </span>
                  <el-form-item class="item-sign" prop="bankUserName">
                    <el-input
                      class="input-sign"
                      :class="`input-${themeType}`"
                      name="bankUserName"
                      maxlength="6"
                      @input="onKeyUpBankUserName"
                      v-model="signupForm.bankUserName"
                      autoComplete="off"
                      placeholder="계좌 예금주를 입력해주세요."
                    />
                  </el-form-item>
                </div>
              </el-col>
              <el-col v-if="layoutType == 'layout2' || layoutType == 'layout6'" :span="isMobile ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="lbl_reg popup_lbl word-keep" :class="{ 'opacity-6': layoutType == 'layout2' }">
                    <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                    <label for="chongpanCode" :class="`signup-color-${themeType}`">가입코드</label>
                    <span v-if="themeType == 'yellow15'"> [ 가입코드가 없는경우 "77" 를 입력해주세요 ]</span>
                  </span>
                  <el-form-item class="item-sign" prop="chongpanCode">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        :class="`input-${themeType}`"
                        name="chongpanCode"
                        v-model="signupForm.chongpanCode"
                        @input="onChangeChongPanCode"
                        style="width: 100%"
                        v-bind:readonly="hasChongpanCode"
                        placeholder="영문, 숫자를 입력해주세요."
                        autoComplete="on"
                      />
                    </el-row>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="layoutType != 'layout2' && layoutType != 'layout6'">
              <el-col :span="isMobile ? 24 : 24">
                <div class="tl_reg_item">
                  <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                  <span class="lbl_reg popup_lbl">
                    <label for="chongpanCode" :class="`signup-color-${themeType}`">
                      가입코드
                      <span v-if="themeType == 'yellow21'"> [ 가입코드가 없는경우 "222" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'yellow14'"> [ 가입코드가 없는경우 "010" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'red15'"> [ 가입코드가 없는경우 "1234" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'gold12' || themeType == 'red12'"> [ 가입코드가 없는경우 "77" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'gold11' || themeType == 'blue15'"> [ 가입코드가 없는경우 "00" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'red14' || themeType == 'blue12'"> [ 가입코드가 없는경우 "1002" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'yellow19'"> [ 가입코드가 없는경우 "7080" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'blue17'"> [ 가입코드가 없는경우 "1001" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'yellow12'"> [ 가입코드가 없는경우 "1111" 를 입력해주세요 ]</span>
                      <span v-if="themeType == 'yellow11' || themeType == 'blue13' || themeType == 'yellow13'"> [ 가입코드가 없는경우 "000" 를 입력해주세요 ]</span>
                    </label>
                  </span>
                  <el-form-item class="item-sign" prop="chongpanCode">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        :class="`input-${themeType}`"
                        name="chongpanCode"
                        v-model="signupForm.chongpanCode"
                        @input="onChangeChongPanCode"
                        style="width: 100%"
                        v-bind:readonly="hasChongpanCode"
                        placeholder="영문, 숫자를 입력해주세요."
                        autoComplete="on"
                      />
                    </el-row>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="showFriendId">
              <el-col :span="isMobile || layoutType == 'layout2' ? 24 : 12">
                <div class="tl_reg_item" :class="{ 'width-full': layoutType == 'layout2' }">
                  <span class="tl_input_popup_required" :class="`signup-color-${themeType}`">*</span>
                  <span class="lbl_reg popup_lbl">
                    <label for="friendId" :class="`signup-color-${themeType}`">추천인 아이디</label>
                  </span>
                  <el-form-item class="item-sign" prop="friendId">
                    <el-row :gutter="5">
                      <el-input
                        class="input-sign verify-sign"
                        name="friendId"
                        @input="onKeyUpFrinedId"
                        v-model="signupForm.friendId"
                        @keyup.enter.native="onClickCheckFriendId"
                        style="width: 100%"
                        placeholder="영문, 숫자를 입력해주세요."
                        autoComplete="on"
                      />
                    </el-row>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="themeType == 'orange12'" class="p-t-12 p-b-12">
              <span> [ 가입코드가 없는경우 "000" 를 입력해주세요 ]</span>
            </el-row>
            <el-row class="m-b-40">
              <el-button type="primary" :loading="loading" :class="[themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`, { 'width-full': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' || isMobile, 'width-150': layoutType == 'layout1' && !isMobile}]"
                @click.native.prevent="handlesignup" style="height: 40px">
                회원가입
              </el-button>
            </el-row>
          </el-row>
        </el-row>
      </el-form>
    </el-row>
  </client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { getTextColor } from "@/assets/js/data/uicommon";

const smsVerifyService = feathers.service("/verifyCodeSignup");
const signupService = feathers.service("/signup");
const sendSMSService = feathers.service("/sendSMSSignup");
const userExistCheckService = feathers.service("/user-exist-check");
smsVerifyService.timeout = 60000;
signupService.timeout = 60000;
sendSMSService.timeout = 60000;
userExistCheckService.timeout = 60000;

export default {
  props: ["isVisibleSignup"],
  name: "signup",
  computed: {
    ...mapGetters({
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      siteChongpanCode: "getSiteChongpanCode",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      solutionTitle: "getSolutionTitle",
      adminCode: "getAdminCode",
      isUseRecaptcha: "getIsUseRecaptcha",
      isSendSMSVerifyCode: "getIsSendSMSVerifyCode",
      referrer: "getReferrer",
      payInSettings: "getPayInSettings"
    }),
  },
  data() {
    // 아이디 유효성검사
    const validateUserId = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("아이디를 입력하세요."));
      } else {
        callback();
      }
    };
    // 비밀번호 유효성검사
    const validatePassword = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("비밀번호를 입력하세요"));
      } else {
        if (value.length < 4) {
          callback(new Error("비밀번호를 4글자 이상 입력하세요."));
        } else {
          callback();
        }
      }
    };
    // 비밀번호확인 유효성검사
    const validatePasswordCheck = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("다시 한번 비밀번호를 입력하세요."));
      } else {
        if (value != this.signupForm.password) {
          callback(new Error("비밀번호가 일치하지 않습니다."));
        } else {
          callback();
        }
      }
    };
    // 닉네임 유효성검사
    const validateNickname = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("닉네임을 입력하세요."));
      } else if (value.length < 2) {
        callback(new Error("최소 2글자를 입력하세요."));
      } else if (value.length > 6) {
        callback(new Error("최대 6글자를 입력하세요."));
      } else {
        callback();
      }
    };
    // 모바일번호 유효성검사
    const validateMobileNumber = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("모바일번호를 입력하세요."));
      } else {
        callback();
      }
    };
    // 은행명 유효성검사
    const validateBankname = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("은행명을 선택하세요."));
      } else {
        callback();
      }
    };
    // 계좌번호 유효성검사
    const validateAccountNumber = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("계좌번호를 입력하세요."));
      } else {
        callback();
      }
    };
    // 예금주 유효성검사
    const validateBankUsername = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("예금주를 입력하세요."));
      } else if (value.length < 2) {
        callback(new Error("최소 2글자를 입력하세요."));
      } else {
        callback();
      }
    };
    // 가입코드 유효성검사
    const validateChongpanCode = (_rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("가입코드를 입력하세요."));
      } else if (value.length < 2) {
        callback(new Error("최소 2글자를 입력하세요."));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        userId: "",
        password: "",
        passwordCheck: "",
        nickname: "",
        mobileNumber: "",
        bankName: "",
        accountNumber: "",
        bankUserName: "",
        bitcoinAddress: "",
        chongpanCode: "",
        friendId: "",
        site: ["B"],
      },
      inputSMSVerifyCode: "",
      isCheckSMSVerifyCode: false,
      isCheckId: false,
      isCheckNickName: false,
      checkingSignupCode: false,
      loadingSendCode: false,
      loadingCheckCode: false,
      loadingCheckId: false,
      loadingCheckName: false,
      signupRules: {
        userId: [
          { required: true, trigger: "blur", validator: validateUserId },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        passwordCheck: [
          { required: true, trigger: "blur", validator: validatePasswordCheck },
        ],
        nickname: [
          { required: true, trigger: "blur", validator: validateNickname },
        ],
        mobileNumber: [
          { required: true, trigger: "blur", validator: validateMobileNumber },
        ],
        bankName: [
          { required: true, trigger: "blur", validator: validateBankname },
        ],
        accountNumber: [
          { required: true, trigger: "blur", validator: validateAccountNumber },
        ],
        bankUserName: [
          { required: true, trigger: "blur", validator: validateBankUsername },
        ],
        chongpanCode: [
          { required: true, trigger: "blur", validator: validateChongpanCode },
        ],
      },
      loading: false,
      isConfirmSignupCode: false,
      signup_code: "",
      checkedFailureCode: false,
      isCheckingSignupCode: false,
      showFriendId: false,
      hasChongpanCode: false,
      verifyCode: "",
      bankList: []
    };
  },
  mounted() {
    if (this.siteChongpanCode != this.adminCode) {
      this.signupForm.chongpanCode = this.siteChongpanCode;
      this.hasChongpanCode = true;
    }

    for (let index = 0; index < this.payInSettings?.bankList.length; index++) {
      this?.bankList.push({
        value: this.payInSettings?.bankList[index],
        label: this.payInSettings?.bankList[index]
      })
    }
  },
  methods: {
    getTextColor,
    // 로고 세로 사이즈
    getLogoImgHeight() {
      if (this.themeType == 'orange14') {
        return 33;
      } else if (this.themeType == "red14") {
        return 65;
      } else if (this.themeType == "orange11" || this.themeType == 'orange13') {
        return 36
      } else {
        return 46;
      }
    },
    // 회원가입창 닫기
    onClickClose() {
      this.signupForm.userId = "";
      this.signupForm.password = "";
      this.signupForm.passwordCheck = "";
      this.signupForm.nickname = "";
      this.signupForm.mobileNumber = "";
      this.signupForm.bankName = "";
      this.signupForm.accountNumber = "";
      this.signupForm.bankUserName = "";
      this.signupForm.bitcoinAddress = "";
      this.signupForm.chongpanCode = "";
      this.signupForm.site = ["B"];
      this.isCheckSMSVerifyCode = false;
      this.isConfirmSignupCode = false;
      this.isCheckNickName = false;
      this.isCheckId = false;
      this.signup_code = "";
      this.inputSMSVerifyCode = "";
      this.$store.commit("SET_ISSENDSMSVERIFYCODE", false);
      this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
    },
    // 회원가입
    handlesignup() {
      if (this.loading) return

      this.loading = true;
      this.$refs.signupForm.validate(async valid => {
        if (valid) {
          if (this.layoutType != 'layout6' && !this.isCheckId) {
            this.showMessage("알림메시지", "아이디 중복확인 버튼을 클릭해주시기 바랍니다.", "닫기[Close]", 2);
            this.loading = false;
            return;
          }
          if (this.layoutType != 'layout6' && !this.isCheckNickName) {
            this.showMessage("알림메시지", "닉네임 중복확인 버튼을 클릭해주시기 바랍니다.", "닫기[Close]", 2);
            this.loading = false;
            return;
          }
          if (!this.isCheckSMSVerifyCode) {
            this.showMessage("알림메시지", "인증번호 발송 버튼을 클릭하여 sms인증을 해주시기 바랍니다.", "닫기[Close]", 2);
            this.loading = false;
            return;
          }
          // 추천인 아이디가 있으면 디비에 보관.
          var dataSet = {
            site: this.signupForm.site,
            userLoginId: this.signupForm.userId.trim().toLowerCase(),
            password: this.signupForm.password.trim(),
            nickname: this.signupForm.nickname.trim(),
            mobileNumber: this.signupForm.mobileNumber.trim(),
            chongpanCode: this.signupForm.chongpanCode.trim().toLowerCase(),
            bank: {
              name: this.signupForm.bankName.trim(),
              accountNumber: this.signupForm.accountNumber.trim(),
              userName: this.signupForm.bankUserName.trim(),
            },
            friendId: this.signupForm.friendId.trim().toLowerCase(),
            registeredIp: this.myIp,
            verifyCode: this.inputSMSVerifyCode,
            referrer: this.referrer,
          };

          // 카지노도메인에서 카지노유저셋팅
          if (this.themeType == "green") {
            dataSet.isCasinoUser = true;
          }

          await signupService
            .create(dataSet)
            .then((response) => {
              this.showMessage( "알림메시지", response.message, "닫기[Close]", response.code == 1 ? 1 : 0 );
              if (response.resultCode == 1) {
                if (!this.isMobile) this.onClickClose();
                this.$router.push("/");
              }
            })
            .catch((_err) => {
              this.loading = false;
              this.showMessage("알림메시지", "회원가입 실패하였습니다.", "닫기[Close]", 0);
            });
        }
        this.loading = false;
      });
    },
    // 인증코드보내기
    async doSendSMSVerifyCode() {
      if (this.loadingSendCode) return

      this.loadingSendCode = true
      this.$nuxt.$loading.start();
      this.signupForm.mobileNumber = this.signupForm.mobileNumber.trim();
      if ( this.signupForm.mobileNumber.length < 10 || this.signupForm.mobileNumber.length > 11 ) {
        this.showMessage("알림메시지", "정확한 휴대폰 번호를 입력해주세요.", "닫기[Close]", 2);
        this.loadingSendCode = false
        this.$nuxt.$loading.finish();
        return;
      }
      this.$store.commit("SET_ISSENDSMSVERIFYCODE", false);

      if (this.isUseRecaptcha) {
        this.$store.commit("SET_SMSDATA", {
          mobileNumber: this.signupForm.mobileNumber,
        });
        this.$store.commit("SET_ISLOGINCAPTCHA", 2);
        this.$store.commit("SET_RECAPTCHAVALUE");
      } else {
        await sendSMSService
          .find({ query: {
            mobileNumber: this.signupForm.mobileNumber
          } })
          .then((res) => {
            if (res.code == 1) {
              this.$store.commit("SET_ISSENDSMSVERIFYCODE", true);
            }

            this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
          })
          .catch((err) => {
            this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
          });
      }
      this.loadingSendCode = false;
      this.$nuxt.$loading.finish();
    },
    // 인증코드확인
    async doCheckSMSVerifyCode() {
      try {
        if (this.loadingCheckCode) return

        this.loadingCheckCode = true;
        this.$nuxt.$loading.start();
        if (!this.inputSMSVerifyCode) {
          this.loadingCheckCode = false
          this.$nuxt.$loading.finish();
          return;
        }
        this.signupForm.mobileNumber = this.signupForm.mobileNumber.trim();
        this.isCheckSMSVerifyCode = false;
        const res = await smsVerifyService.find({
          query: {
            mobileNumber: this.signupForm.mobileNumber,
            verifyCode: this.inputSMSVerifyCode,
          },
        });

        if (res.code == 1) {
          this.isCheckSMSVerifyCode = true;
        }

        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
        this.loadingCheckCode = false;
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
        this.loadingCheckCode = false;
        this.$nuxt.$loading.finish();
      }
    },
    // 아이디 중복확인
    async onClickCheckId() {
      try {
        if (this.loadingCheckId) return

        this.loadingCheckId = true;
        this.$nuxt.$loading.start();
        if ( this.signupForm.userId.length < 4 || this.signupForm.userId.length > 12 ) {
          this.showMessage("알림메시지", "ID는 영어와 숫자 조합만 가능합니다(4~12자).", "닫기[Close]", 2);
          this.loadingCheckId = false;
          this.$nuxt.$loading.finish();
          return;
        }

        let res = await userExistCheckService.find({ query: {userId: this.signupForm.userId.toLowerCase()} })
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
        if (res.code == 1) {
          this.isCheckId = true;
        }
        this.loadingCheckId = false;
        this.$nuxt.$loading.finish();
      } catch (error) {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
      }
    },
    // 닉네임 중복확인
    async onClickCheckNickName() {
      if (this.loadingCheckName) return

      this.loadingCheckName = true;
      this.$nuxt.$loading.start();
      this.signupForm.nickname = this.signupForm.nickname.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g, "");
      this.signupForm.nickname = this.signupForm.nickname.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, "");
      this.signupForm.nickname = this.signupForm.nickname.replace(/([^가-힣\x20])/g, '');
      if (this.signupForm.nickname.length < 2 || this.signupForm.nickname.length > 6) {
        this.showMessage("알림메시지", "닉네임은 한글만 가능합니다(2~6자).|00000은 사용할수 있는 닉네임입니다.", "닫기[Close]", 2);
        this.loadingCheckName = false;
        this.$nuxt.$loading.finish();
        return;
      }


      let resultData = "";
      await userExistCheckService.find({ query: {nickName: this.signupForm.nickname} })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            resultData = res.data;
          }
        })
        .catch((err) => {
          this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
        });

      if (resultData == true) {
        this.showMessage("알림메시지", "이미 사용중인 닉네임입니다.", "닫기[Close]", 0);
      } else if (resultData == false) {
        this.isCheckNickName = true;
        this.showMessage("알림메시지", "사용하실수 있는 닉네임입니다.", "닫기[Close]", 1);
      }
      this.loadingCheckName = false;
      this.$nuxt.$loading.finish();
    },
    // 가입코드7979입력인가 체크
    onChangeChongPanCode(_value) {
      this.signupForm.chongpanCode = this.signupForm.chongpanCode.replace(/[^a-zA-Z-0-9]/g, "");
      if (this.signupForm.chongpanCode.toLowerCase() == this.adminCode) {
        this.showFriendId = true;
      } else {
        this.showFriendId = false;
      }
    },
    // 아이디 입력 체크 (영문, 숫자만 가능)
    onKeyUpId() {
      this.signupForm.userId = this.signupForm.userId.replace(/[^a-zA-Z0-9]/g, "");
    },
    // 지인아이디 입력 체크 (영문, 숫자만 가능)
    onKeyUpFrinedId() {
      this.signupForm.friendId = this.signupForm.friendId.replace(/[^a-zA-Z-0-9]/g, "");
    },
    // 닉네임 입력 체크 (한글만 가능)
    onKeyUpNickname() {
      this.signupForm.nickname = this.signupForm.nickname.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g, "");
    },
    // 예금주 입력 체크 (한글만 가능)
    onKeyUpBankUserName() {
      this.signupForm.bankUserName = this.signupForm.bankUserName.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g, "");
    },
    // 핸드폰번호 입력 체크 (숫자만 가능)
    onKeyUpMobile() {
      this.signupForm.mobileNumber = this.signupForm.mobileNumber.replace(/[^0-9]/g, "");
    },
    // 계좌번호 입력 체크 (숫자만 가능)
    onKeyUpAccountNumber() {
      this.signupForm.accountNumber = this.signupForm.accountNumber.replace(/[^0-9]/g, "");
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
    onClickLogin() {
      this.$store.commit("SET_LOGINDIALOGVISIBLE");
      this.$store.commit("SET_SIGNUPDIALOGVISIBLE");
    },
    handleClose() {},
  },
};
</script>

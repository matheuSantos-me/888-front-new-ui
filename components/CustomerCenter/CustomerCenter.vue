<template>
  <div>
    <el-row :class="{ 'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile }">
      <!-- 헤더 -->
      <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" class="p-0" :class="[{'b-r-6 bg-grey913 p-8': layoutType == 'layout2' && !isMobile}, layoutType == 'layout2' ? '' : 'm-t-5 m-b-10']">
        <div v-if="!isMobile" class="float-left f-w-700 p-t-9 f-s-16">
          고객센터 문의하기
        </div>
        <div v-if="isMobile && !isUseQuickQuestion" class="width-full m-0 f-s-12" :class="{ 'p-10 display-center': !isMobile }">
          ※ <span :class="getTextColor(themeType, 1)">계좌문의</span>는 입금신청 시 자동으로 관리자에게 신청됩니다.
        </div>
        <div v-if="themeType == 'red15' && !isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/MCL6666'" target="_blank">
            <div class="gametype-button-orange11 telegram-button display-center" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'blue15' && !isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/DrDr365'" target="_blank">
            <div class="gametype-button-orange11 telegram-button display-center" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'red12' && !isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/hbman365'" target="_blank">
            <div class="gametype-button-orange11 telegram-button display-center" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'gold11' && !isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/TGCS114'" target="_blank">
            <div class="gametype-button-orange11 telegram-button display-center" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div
          v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)"
          class="float-right display-center"
          :class="{ 'width-50pro m-0': isMobile, 'm-r-5': !isMobile && layoutType != 'layout2' }"
          data-toggle="collapse"
          data-target="#write-panel"
          aria-expanded="false"
          aria-controls="write-panel">
          <div class="gametype-button-orange11 display-center" :class="[layoutType == 'layout2' ? 'green-button4 m-0' : 'green-button1']" :style="isMobile ? 'width: 98%' : ''">
            <div class="float-left">
              <img :src="`/image/Question/quest.png`" height="23" />
            </div>
            <div class="float-left m-l-10 p-t-3">문의하기(글쓰기)</div>
          </div>
        </div>
        <div v-if="!isMobile && !isUseQuickQuestion" class="float-right display-center p-10">
          ※ <span :class="getTextColor(themeType, 1)">계좌문의</span>는 입금신청 시 자동으로 관리자에게 신청됩니다.
        </div>
        <div v-if="isUseQuickQuestion" class="float-right display-center" :class="{'width-50pro m-0': isMobile}">
          <div class="gametype-button-orange11 blue-button display-center" @click="onClickSendQuestion(1)" :style="isMobile ? 'width: 98%' : ''">
            <div class="float-left">
              <img :src="`/image/Question/quick.png`" />
            </div>
            <div class="float-left m-l-10 p-t-3">빠른계좌문의</div>
          </div>
        </div>
        <div v-if="themeType == 'red15' && isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/MCL5555'" target="_blank" class="width-full display-center">
            <div class="gametype-button-orange11 telegram-button display-center m-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'blue15' && isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/DrDr365'" target="_blank" class="width-full display-center">
            <div class="gametype-button-orange11 telegram-button display-center m-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'red12' && isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/hbman365'" target="_blank" class="width-full display-center">
            <div class="gametype-button-orange11 telegram-button display-center m-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
        <div v-if="themeType == 'gold11' && isMobile" class="float-right display-center" :class="{ 'width-full m-0': isMobile }">
          <a :href="'https://t.me/TGCS114'" target="_blank" class="width-full display-center">
            <div class="gametype-button-orange11 telegram-button display-center m-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
        </div>
      </el-row>
      <el-row v-else class="text-center p-t-16 p-b-16 f-s-14" 
        :class="[
          `text-${themeType}`, 
          `border-bottom-1-${themeType}`, 
          (layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6' ? 'bg-black30' : themeType == 'yellow18' ? 'bg-black22' : themeType == 'yellow17' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black35'
        ]" 
        style="height: 53px; border-radius: 6px 6px 0px 0px;">
        {{isMobile || themeType == 'yellow15' ? '' : '문의'}}
        <el-row style="position: absolute; top: 8px; right: 0; width: 100%" :style="isMobile ? 'display: flex; gap: 8px;' : ''">
          <div v-if="themeType == 'yellow15' && !isMobile" class="float-right display-center height-38" :class="{'width-50pro m-0': isMobile}">
            <a href="https://open.kakao.com/o/sEXApPUg" target="_blank">
              <div class="display-center p-6 p-l-16 p-r-16 b-r-6 m-r-12 cursor" :class="`${themeType}1-button`" :style="isMobile ? 'width: 98%' : ''">
                <div class="float-left">
                    <img :src="`/image/Question/kakao.png`" height="23" />
                </div>
                <div class="float-left m-l-10 p-t-3">카카오톡 문의</div>
              </div>
            </a>
          </div>
          <div v-if="themeType == 'yellow15' && !isMobile" class="float-left m-l-12 display-center height-38" :class="{'width-50pro m-0': isMobile}">
            <a href="https://t.me/+LMVhzufBlX80YzBl" target="_blank">
              <div class="display-center p-6 p-l-16 p-r-16 b-r-6 m-r-12 cursor" :class="`${themeType}1-button`" :style="isMobile ? 'width: 98%' : ''">
                <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                </div>
                <div class="float-left m-l-10 p-t-3">텔레그램 공지채널</div>
              </div>
            </a>
          </div>
          <div v-if="themeType == 'yellow15' && !isMobile" class="float-right display-center height-38" :class="{'width-50pro m-0': isMobile}">
            <a href="https://t.me/mbs7979" target="_blank">
              <div class="display-center p-6 p-l-16 p-r-16 b-r-6 m-r-12 cursor" :class="`${themeType}1-button`" :style="isMobile ? 'width: 98%' : ''">
                <div class="float-left">
                    <img :src="`/image/Question/telegram.png`" height="23" />
                </div>
                <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
              </div>
            </a>
          </div>
          <div v-if="(themeType == 'blue18') && !isMobile" class="float-right display-center height-38" :class="{ 'width-full m-0': isMobile }">
            <a href="https://t.me/machuja" target="_blank">
              <div class="gametype-button-orange11 telegram-button display-center m-b-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
                <div class="float-left">
                  <img :src="`/image/Question/telegram.png`" height="23" />
                </div>
                <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
              </div>
            </a>
          </div>
          <div class="float-right b-r-6 cursor height-38" :class="[isMobile ? '' : 'm-r-12', `${themeType}1-button`]" :style="isMobile ? 'flex: 1 1 0;' : ''"
            data-toggle="collapse" data-target="#write-panel" aria-expanded="false" aria-controls="write-panel">
            <el-row class="display-center height-full p-6 p-l-16 p-r-16">
              <div class="float-left m-r-6">
                <img :src="`/image/Question/quest.png`" height="20" />
              </div>
              문의하기
            </el-row>
          </div>
          <div v-if="isUseQuickQuestion" class="float-right height-38" :style="isMobile ? 'flex: 1 1 0;' : 'margin-right: 12px;'">
            <div class="display-center p-6 p-l-16 p-r-16 b-r-6 cursor" :class="`${themeType}1-button`" @click="onClickSendQuestion(1)">
              <div class="float-left">
                <img :src="`/image/Question/quick.png`" />
              </div>
              <div class="float-left m-l-10 p-t-3">빠른계좌문의</div>
            </div>
          </div>
          <div v-if="themeType != 'blue18' && themeType != 'yellow15' && !isMobile" class="f-s-10 m-t-10 m-r-8 float-right" :style="isMobile ? 'flex: 1 1 0;' : ''">※ 계좌문의는 입금신청 시 자동으로 관리자에게 신청됩니다.</div>
        </el-row>
      </el-row>
      <el-row v-if="(themeType == 'blue18') && isMobile" class="display-center">
        <a href="https://t.me/machuja" target="_blank" class="width-full display-center">
          <div class="gametype-button-orange11 telegram-button display-center m-0" :class="isMobile ? 'p-t-8 p-b-8' : 'p-t-5 p-b-5'" :style="isMobile ? 'width: 98%' : ''">
            <div class="float-left">
              <img :src="`/image/Question/telegram.png`" height="23" />
            </div>
            <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
          </div>
        </a>
      </el-row>
      <el-row v-if="themeType == 'yellow15' && isMobile" class="display-flex m-t-4 m-b-4" style="gap: 8px;">
          <a href="https://t.me/mbs7979" target="_blank" class="width-full" style="flex: 1 1 0;">
            <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}1-button`">
              <div class="float-left">
                <img :src="`/image/Question/telegram.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">텔레그램 문의</div>
            </div>
          </a>
          <a href="https://open.kakao.com/o/sEXApPUg" target="_blank" class="width-full" style="flex: 1 1 0;">
            <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}1-button`">
              <div class="float-left">
                <img :src="`/image/Question/kakao.png`" height="23" />
              </div>
              <div class="float-left m-l-10 p-t-3">카카오톡 문의</div>
            </div>
          </a>
      </el-row>
      <el-row v-if="themeType == 'yellow15' && isMobile" class="display-flex m-t-4 m-b-4" style="gap: 8px;">
        <a href="https://t.me/play7711" target="_blank" class="width-full" style="flex: 1 1 0;">
          <div class="display-center m-0 p-t-8 p-b-8 b-r-6" :class="`${themeType}1-button`">
            <div class="float-left">
              <img :src="`/image/Question/telegram.png`" height="23" />
            </div>
            <div class="float-left m-l-10 p-t-3">텔레그램 공지채널</div>
          </div>
        </a>
        <a class="width-full" style="flex: 1 1 0;"></a>
      </el-row>
      <el-row>
      </el-row>
      <!-- 헤더 끝 -->
      <!-- 1:1 문의 -->
      <div class="collapse" id="write-panel">
        <el-row class="display-inlineblock width-full">
          <textarea
            v-if="themeType != 'blue18' && layoutType == 'layout1'"
            v-model="questContent"
            class="width-full p-10"
            :style="!isBlackMode ? 'background-color: #fff; border: 1px solid #000; height: 150px;' : 'background-color: #2c353c; border: 1px solid #000; height: 150px;'"
            placeholder="해당 영역에 문의내용을 입력해주세요.
매너 있는 채팅을 부탁드리며 '욕설 및 협박' 등의 내용을 기재 시 회원자격이 박탈됩니다."
          ></textarea>
          <textarea
            v-if="layoutType == 'layout3' || layoutType == 'layout5' || themeType == 'yellow15'"
            v-model="questContent"
            class="width-full p-10"
            :class="`border-1-${themeType}`"
            style="background: #101216; height: 150px;"
            placeholder="해당 영역에 문의내용을 입력해주세요.
매너 있는 채팅을 부탁드리며 '욕설 및 협박' 등의 내용을 기재 시 회원자격이 박탈됩니다."
          ></textarea>
          <textarea
            v-if="layoutType == 'layout2'"
            v-model="questContent"
            class="width-full p-12 bg-grey913 m-t-12"
            style="border: 1px solid #666666; height: 250px; border-radius: 6px"
            placeholder="해당 영역에 문의내용을 입력해주세요.
매너 있는 채팅을 부탁드리며 '욕설 및 협박' 등의 내용을 기재 시 회원자격이 박탈됩니다."
          ></textarea>
          <textarea
            v-if="themeType == 'blue18'"
            v-model="questContent"
            class="width-full p-10"
            style="
              background-color: #2c353c;
              border: 1px solid #000;
              height: 150px;
            "
            placeholder="안녕하세요. '마추자' 운영진 입니다.
문의주시는 사항 신속하게 답변 도와 드리겠습니다.
'욕설 및 협박' 등의 내용은 운영진이 마음이 많이 아파요.

항상 최선을 다하는 '마추자' 운영진 되겟습니다."
          ></textarea>
        </el-row>
        <el-row class="text-center">
          <div
            v-if="layoutType != 'layout2'"
            class="text-center p-15 f-w-700 cursor f-s-14"
            :class="[
              getBackColor(themeType, 1), 
              layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `${themeType}1-button b-r-6 m-b-4'` : themeType == 'gold12' ? 'text-black' : '']"
            :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'border: 2px solid #fff'"
            @click="onClickSendQuestion(0)"
          >
            {{layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '문의하기' : '1 : 1 문의 등록하기'}}
          </div>
          <div
            v-else
            class="text-center f-w-700 cursor f-s-14 b-r-6 position-absolute p-8"
            :class="`${themeType}-button`"
            style="bottom: 24px; left: calc(50% - 80px); width: 160px"
            @click="onClickSendQuestion(0)"
          >
            1 : 1 문의 등록하기
          </div>
        </el-row>
      </div>
      <!-- 1:1 문의 끝 -->
      <!-- 자동문의 -->
      <el-row v-if="themeType == 'blue18'" class="m-t-6">
        <el-row v-if="!isMobile">
          <div v-for="autoCustom in autoCustoms" :key="autoCustom._id" class="gametype-button-orange11 auto-custom-button display-center f-w-900" @click="onClickAutoCustom(autoCustom.content)">
            {{ autoCustom.content }}
          </div>
        </el-row>
        <el-row v-else>
          <el-row class="select-autocustom" data-toggle="collapse" data-target="#auto-custom" aria-expanded="false" aria-controls="auto-custom">
            이벤트 자동문의
            <img class="float-right m-t-5" :src="`/image/Question/Down.png`" width="20px" />
          </el-row>
          <el-row class="collapse" id="auto-custom" style="border-top: 1px solid #000; background: #008dd5; width: calc(100% - 4px); margin-left: 2px; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; padding: 8px 0;">
            <div v-for="(autoCustom, index) in autoCustoms" :key="autoCustom._id" class="autocustomitem" @click="onClickAutoCustom(autoCustom.content)">
              <div :class="index % 2 == 0 ? 'autocustom-item1' : 'autocustom-item2'">
                {{ autoCustom.content }}
              </div>
            </div>
          </el-row>
        </el-row>
      </el-row>
      <!-- 자동문의 끝 -->
      <!-- 문의 리스트 -->
      <el-row class="col-md-12 p-0" :class="layoutType == 'layout2' ? 'p-t-12 p-b-12' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-b-12' : 'p-t-18 p-b-20'">
        <div :class="`table-board-${themeType}`">
          <div class="table-header">
            <div class="text-center" :style="isMobile ? 'width: 90px' : 'width: 240px'">
              문의시간
            </div>
            <div class="text-left table-board-flex-field p-l-5">내용</div>
            <div class="text-center" :style="isMobile ? 'width: 70px' : 'width: 180px'">
              {{ isMobile ? "상태" : "답변상태" }}
            </div>
            <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 180px'">
              {{ isMobile ? "읽음" : "읽음상태" }}
            </div>
            <div class="text-center" :style="isMobile ? 'width: 40px' : 'width: 100px'"></div>
          </div>
          <el-row v-for="(customerCenter, index) in customerCenters" :key="index">
            <el-row class="table-board-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div class="display-center table-board-td-first text-center" :style="isMobile ? 'width: 90px' : 'width: 240px'">
                {{ customerCenter.createdAt | parseTime }}
              </div>
              <div class="text-left table-board-td table-board-flex-field cursor"
                data-toggle="collapse"
                :data-target="'#customer-center' + index"
                aria-expanded="false"
                :aria-controls="'customer-center' + index"
                @click="onClickRead(customerCenter)">
                  {{ customerCenter.customer }}
              </div>
              <div class="text-white table-board-td display-center" :style="isMobile ? 'width: 70px' : 'width: 180px'">
                <div :class="customerCenter.answered | statusCustomerClassObject(themeType)">
                  {{ customerCenter.answered ? "답변완료" : "답변대기" }}
                </div>
              </div>
              <div class="text-white table-board-td display-center" :style="isMobile ? 'width: 60px' : 'width: 180px'">
                <div :class="[getReadStatusClass(customerCenter.isRead), isMobile ? 'width-full' : 'width-80']">
                  {{ customerCenter.isRead ? "읽음" : "대기" }}
                </div>
              </div>
              <div class="table-board-td display-center" :style="isMobile ? 'width: 40px' : 'width: 100px'">
                <div class="red-button1 cursor display-center"
                  v-if="layoutType == 'layout1' && customerCenter.isRead && customerCenter.answered"
                  :class="isMobile ? 'width-30 height-25' : 'width-50 height-28'"
                  @click="onDeleteCustomer(customerCenter._id, index)"
                >
                  <img :src="`/image/Money/Delete.png`" :width="isMobile ? '12px' : '12px'" />
                </div>
                <img v-if="(layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && customerCenter.isRead && customerCenter.answered"
                  :src="`/image/Money/${layoutType == 'layout2' ? 'Ic_delete.png' : 'Ic_delete_other.png'}`" class="cursor" @click="onDeleteCustomer(customerCenter._id, index)"
                />
              </div>
            </el-row>
            <el-row>
              <div v-if="customerCenter.answered == true" class="collapse table-board-content" :id="'customer-center' + index">
                <el-row class="p-10 p-t-0 p-b-20" style="display: flex">
                  <div
                    v-if="customerCenter.account != '' && customerCenter.account != null"
                    class="float-right display-center green-button1 gametype-button-orange11"
                    @click="saveAccount(customerCenter.account)"
                    >
                    <div class="float-left">계좌복사</div>
                  </div>
                </el-row>
                <el-row class="p-10 p-t-0 p-b-20 text-left" style="white-space: pre-line">
                  <p v-html="customerCenter.support"></p>
                </el-row>
              </div>
            </el-row>
          </el-row>
        </div>
      </el-row>
      <!-- 문의 리스트 끝 -->
      <!-- 문의 존재하지 않는 경우 -->
      <el-row
        v-if="!customerCenters || customerCenters.length == 0"
        class="width-full display-center"
      >
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          1:1문의가 존재하지 않습니다.
        </el-row>
      </el-row>
      <!-- 문의 존재하지 않는 경우 끝 -->
    </el-row>
    <div
      v-if="layoutType == 'layout2' && isMobile"
      class="display-center"
      style="position: absolute; right: 24px; bottom: 24px; background: #11b485; width: 68px; height: 68px; border-radius: 50%;"
      data-toggle="collapse" data-target="#write-panel" aria-expanded="false" aria-controls="write-panel">
      <img :src="`/image/Question/${themeType}/question.svg`" />
    </div>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { parseTime } from "~/assets/js/utils";
import {
  statusCustomerClassObject,
  getTextColor,
  getBackColor
} from "~/assets/js/data/uicommon.js";

const customerService = feathers.service("client-customercenter");
const autoCustomService = feathers.service("client-autocustom");
customerService.timeout = 60000;
autoCustomService.timeout = 60000;

export default {
  filters: {
    parseTime: parseTime,
    statusCustomerClassObject: statusCustomerClassObject,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      custmerCount: "getCustmerCount",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      custmerDelay: "getCustmerDelay",
      isUseAutoAnswer: "getIsUseAutoAnswer",
      isUseQuickQuestion: "getIsUseQuickQuestion",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount"
    }),
  },
  data() {
    return {
      customerCenters: [],            // 문의 리스트
      autoCustoms: [],                // 자동문의 리스트
      questContent: "",               // 문의 내용
      loadingCreateCustomer: false,
      loadingDeleteCustomer: false
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
    this.getList();

    if (this.themeType == "blue18" || this.themeType == 'yellow15') {
      this.getAutoCustomList();
    }
  },
  methods: {
    getBackColor,
    getTextColor,
    saveAccount(account) {
      navigator.clipboard.writeText(account);
      this.showMessage("알림메시지", "계좌번호가 복사되었습니다.", "닫기[Close]");
    },
    // 읽음상태 CSS 클래스 얻기
    getReadStatusClass(isRead) {
      if (this.layoutType == "layout2" || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
        return isRead ? "status-win-orange12" : "status-wait-orange12";
      } else {
        return isRead ? "status-cancel-request" : "status-no";
      }
    },
    // 문의 리스트 얻기
    getList() {
      if (!this.currentUser) return;
      this.$nuxt.$loading.start();
      this.customerCenters = [];

      customerService
        .find({ query: { type: 1 } })
        .then(async (res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.customerCenters = res.data;
            this.addLink();
          }
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.$nuxt.$loading.finish();
        });
    },
    addLink() {
      try {
        for (let i = 0; i < this.customerCenters.length; i++) {
          let answer = this.customerCenters[i].support
          let index = answer.indexOf("http")
          let posList = []
          while (index > -1) {
            let lastIndex = answer.indexOf("\n", index)
            if (lastIndex == -1) lastIndex = answer.length
            posList.push({start: index, end: lastIndex})
            index = answer.indexOf("http", lastIndex)
          }
          if (posList.length == 0) continue;
          let res = ""
          for (let k = 0; k < posList.length; k++) {
            let url = answer.substring(posList[k].start, posList[k].end)
            if (k == posList.length - 1) {
              res += `${answer.substring(posList[k - 1].end + 1, posList[k].start)}<a href="${url}" target="_blank">${url}</a>${answer.substring(posList[k].end, answer.length)}`
            } else if (k == 0) {
              res = `${answer.substring(0, posList[k].start)}<a href="${url}" target="_blank">${url}</a>${answer.substring(posList[k].end, posList[k + 1].start)}`
            } else {
              res += `${answer.substring(posList[k - 1].end + 1, posList[k].start)}<a href="${url}" target="_blank">${url}</a>${answer.substring(posList[k].end, posList[k + 1].start)}`
            }
          }
          this.customerCenters[i].support = res
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    // 자동문의 리스트 얻기
    async getAutoCustomList() {
      try {
        if (!this.currentUser) return;
        this.$nuxt.$loading.start();
        this.autoCustoms = [];

        let res = await autoCustomService.find();
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.autoCustoms = res.data;
        }
        this.$nuxt.$loading.finish();
      } catch (err) {
        console.log(err.message);
        this.$nuxt.$loading.finish();
      }
    },
    // 문의요청
    async onClickSendQuestion(type) {
      try {
        if (this.loadingCreateCustomer) return

        this.loadingCreateCustomer = true
        if (this.isUseNoteRead && this.noteCount > 0) {
          this.showMessage("알림메시지", "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", "닫기[Close]");
          this.loadingCreateCustomer = false
          return;
        }

        this.$nuxt.$loading.start();
        if (type != 1 && this.questContent == "") {
          this.loadingCreateCustomer = false
          this.$nuxt.$loading.finish();
          return;
        }

        let data = {
          type: type,
          customer: type == 1 ? "계좌문의" : this.questContent,
        };

        let res = await customerService.create(data);
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
        this.loadingCreateCustomer = false
        this.$nuxt.$loading.finish();
        if (res.code != 1) {
          return;
        }
        this.customerCenters.unshift(res.data);
        this.questContent = "";
      } catch (err) {
        this.showMessage( "알림메시지", err.message, "닫기[Close]", 0 );
        this.loadingCreateCustomer = false
        this.$nuxt.$loading.finish();
      }
    },
    // 자동문의요청
    async onClickAutoCustom(autoCustom) {
      try {
        if (this.loadingCreateCustomer) return

        this.loadingCreateCustomer = true
        if (this.isUseNoteRead && this.noteCount > 0) {
          this.showMessage("알림메시지", "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", "닫기[Close]");
          this.loadingCreateCustomer = false
          return;
        }

        this.$nuxt.$loading.start();
        $("#auto-custom").collapse("hide");
        let data = {
          type: 0,
          customer: autoCustom,
        };
        let res = await customerService.create(data);
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
        this.loadingCreateCustomer = false
        this.$nuxt.$loading.finish();
        if (res.code == 1) {
          this.customerCenters.unshift(res.data);
        }
      } catch (err) {
        this.showMessage( "알림메시지", err.message, 0 );
        this.loadingCreateCustomer = false
        this.$nuxt.$loading.finish();
      }
    },
    // 문의답변 읽음상태 설정
    async onClickRead(customer) {
      if (customer.answered && !customer.isRead) {
        customer.isRead = true;
        await customerService.patch(customer._id, { isRead: true });
        if (this.custmerCount > 0)
          this.$store.commit("SET_CUSTOMERCOUNT", this.custmerCount - 1);
      }
    },
    // 문의삭제
    onDeleteCustomer(id, index) {
      if (this.loadingDeleteCustomer) return

      if (!this.currentUser) {
        return;
      }
      this.loadingDeleteCustomer = true
      customerService.patch(id, { isDeleted: true }).then((res) => {
        if (res.code != 1) {
          this.showMessage("알림메시지", res.message, "닫기[Close]");
        } else {
          this.customerCenters.splice(index, 1);
          this.showMessage("알림메시지", "문의내역이 삭제되었습니다.", "닫기[Close]");
        }
        this.loadingDeleteCustomer = false
      }).catch(err => {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]");
        this.loadingDeleteCustomer = false
      })
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    }
  },
};
</script>

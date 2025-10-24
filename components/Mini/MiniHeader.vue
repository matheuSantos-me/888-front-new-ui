<template>
  <el-row id="miniheader" ref="miniheader">
    <el-row>
      <el-row :class="{ 'm-t-48': layoutType == 'layout2' && !isMobile }" :style="layoutType == 'layout2' ? 'background: #16171A; border-radius: 6px 6px 0px 0px; overflow: hidden;' : ''">
        <div v-if="themeType == 'purple12' && gameSettings.Mini.boscore" class="float-left" :class="[isMobile ? mobileWidths[4] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 4 ? ` on-${themeType}` : '']"
            @click="onSelectMini(4)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-boscore.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">보스코어</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.ntry" class="float-left" :class="[isMobile ? mobileWidths[0] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 0 ? ` on-${themeType}` : '',]"
            @click="onSelectMini(0)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-ntry.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">엔트리</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.named" class="float-left" :class="[isMobile ? mobileWidths[1] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 1 ? ` on-${themeType}` : '']"
            @click="onSelectMini(1)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-named.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">네임드</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.livescore" class="float-left" :class="[isMobile ? mobileWidths[2] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 2 ? ` on-${themeType}` : '']"
            @click="onSelectMini(2)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-livescore.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">라이브 스코어</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.bubble" class="float-left" :class="[isMobile ? mobileWidths[3] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 3 ? ` on-${themeType}` : '']"
            @click="onSelectMini(3)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-bubble.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">보글</div>
          </div>
        </div>
        <div v-if="themeType != 'purple12' && gameSettings.Mini.boscore" class="float-left" :class="[isMobile ? mobileWidths[4] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 4 ? ` on-${themeType}` : '']"
            @click="onSelectMini(4)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-boscore.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">보스코어</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.sureman" class="float-left" :class="[isMobile ? mobileWidths[5] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 10 ? ` on-${themeType}` : '']"
            @click="onSelectMini(10)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-sureman.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">슈어맨</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.companion" class="float-left" :class="[isMobile ? mobileWidths[6] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 11 ? ` on-${themeType}` : '']"
            @click="onSelectMini(11)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-companion.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">동행복권</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.sportcore" class="float-left" :class="[isMobile ? mobileWidths[7] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 7 ? ` on-${themeType}` : '']"
            @click="onSelectMini(7)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-core.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">스포츠코어</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.token" class="float-left" :class="[isMobile ? mobileWidths[8] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 12 ? ` on-${themeType}` : '']"
            @click="onSelectMini(12)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-token.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">토큰게임</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.mgm" class="float-left" :class="[isMobile ? mobileWidths[9] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 13 ? ` on-${themeType}` : '']"
            @click="onSelectMini(13)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-mgm.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">MGM</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.lotus && themeType != 'red15' && themeType != 'blue15' && themeType != 'red12' && themeType != 'gold11'" class="float-left" :class="[isMobile ? mobileWidths[10] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 5 ? ` on-${themeType}` : '']"
            @click="onSelectMini(5)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-lotus.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">로투스</div>
          </div>
        </div>
        <div v-if="gameSettings.Mini.betgames && themeType != 'red15' && themeType != 'gold12'" class="float-left" :class="[isMobile ? mobileWidths[11] : getTopWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
          <div :class="[layoutType == 'layout2' ? `mini-header-top-button-${themeType}` : 'mini-header-top-button', miniGameTabType == 6 ? ` on-${themeType}` : '']"
            @click="onSelectMini(6)">
            <div :class="{ 'width-full': layoutType == 'layout2' && isMobile }">
              <img :src="`/image/mini/logo-betgames.png`" :width="layoutType == 'layout2' ? 24 : 30" :class="layoutType == 'layout2' && !isMobile ? 'm-r-16' : 'm-r-5'" />
            </div>
            <div :class="{'width-full m-t-4': layoutType == 'layout2' && isMobile}">벳게임</div>
          </div>
        </div>
      </el-row>
      <el-row v-if="!isMobile" :class="`border-2-${themeType}`">
        <el-row v-if="(miniGameType >= 0 && miniGameType <= 4) || (miniGameType >= 20 && miniGameType <= 24)">
          <el-row v-if="gameSettings.PowerBall.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 0}]" @click="goToMiniGame(0)">파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.NtryPLadder.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 1}]" @click="goToMiniGame(1)">파워사다리</div>
          </el-row>
          <el-row v-if="gameSettings.NtryKLadder.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 2}]" @click="goToMiniGame(2)">키노사다리</div>
          </el-row>
          <el-row v-if="gameSettings.NtrySpeedKeno.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 3}]" @click="goToMiniGame(3)">스피드키노</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall1.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 20}]" @click="goToMiniGame(20)">EOS 파워볼 1분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall2.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 21}]" @click="goToMiniGame(21)">EOS 파워볼 2분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall3.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 22}]" @click="goToMiniGame(22)">EOS 파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall4.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 23}]" @click="goToMiniGame(23)">EOS 파워볼 4분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall5.isVisible" class="float-left" :class="[getNtryWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 24}]" @click="goToMiniGame(24)">EOS 파워볼 5분</div>
          </el-row>
        </el-row>
        <el-row v-if="(miniGameType >= 5 && miniGameType <= 10) || (miniGameType >= 38 && miniGameType <= 41) || (miniGameType >= 69 && miniGameType <= 70)">
          <el-row v-if="gameSettings.NamedRacing.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 10}]" @click="goToMiniGame(10)">달팽이 레이싱</div>
          </el-row>
          <el-row v-if="gameSettings.NamedPowerBall3.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 38}]" @click="goToMiniGame(38)">네임드 파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedPowerBall5.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 39}]" @click="goToMiniGame(39)">네임드 파워볼 5분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedLadder3.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 40}]" @click="goToMiniGame(40)">네임드 사다리 3분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedLadder5.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 41}]" @click="goToMiniGame(41)">네임드 사다리 5분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedRedPowerBall.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 69}]" @click="goToMiniGame(69)">네임드 레드파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.NamedRedLadder.isVisible" class="float-left" :class="[getNamedWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 70}]" @click="goToMiniGame(70)">네임드 레드사다리</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 11 && miniGameType <= 13">
          <el-row v-if="gameSettings.LivescorePowerFreeKick.isVisible" class="float-left" :class="[getLivescoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 11}]" @click="goToMiniGame(11)">파워프리킥</div>
          </el-row>
          <el-row v-if="gameSettings.LivescoreSpeedHomeRun.isVisible" class="float-left" :class="[getLivescoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 12}]" @click="goToMiniGame(12)">스피드홈런</div>
          </el-row>
          <el-row v-if="gameSettings.LivescorePowerSpeedDunk.isVisible" class="float-left" :class="[getLivescoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 13}]" @click="goToMiniGame(13)">파워스피드덩크</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 14 && miniGameType <= 15">
          <el-row v-if="gameSettings.BubblePowerBall.isVisible" class="float-left" :class="[getBubbleWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 14}]" @click="goToMiniGame(14)">보글파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.BubbleLadder.isVisible" class="float-left" :class="[getBubbleWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 15}]" @click="goToMiniGame(15)">보글사다리</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 16 && miniGameType <= 19">
          <el-row v-if="gameSettings.BoscoreLadder1.isVisible" class="float-left" :class="[getBoscoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 16}]" @click="goToMiniGame(16)">1분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscoreLadder2.isVisible" class="float-left" :class="[getBoscoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 17}]" @click="goToMiniGame(17)">2분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscoreLadder3.isVisible" class="float-left" :class="[getBoscoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 18}]" @click="goToMiniGame(18)">3분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscorePowerBall.isVisible" class="float-left" :class="[getBoscoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 19}]" @click="goToMiniGame(19)">1분 파워볼</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 25 && miniGameType <= 26">
          <el-row v-if="gameSettings.LotusBaccarat1.isVisible" class="float-left" :class="[getLotusWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 25}]" @click="goToMiniGame(25)">바카라1</div>
          </el-row>
          <el-row v-if="gameSettings.LotusEvenOdd.isVisible" class="float-left" :class="[getLotusWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 26}]" @click="goToMiniGame(26)">홀짝</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 64 && miniGameType <= 68">
          <el-row v-if="gameSettings.MGMBaccarat1.isVisible" class="float-left" :class="[getMGMWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 64}]" @click="goToMiniGame(64)">바카라1</div>
          </el-row>
          <el-row v-if="gameSettings.MGMBaccarat2.isVisible" class="float-left" :class="[getMGMWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 65}]" @click="goToMiniGame(65)">바카라2</div>
          </el-row>
          <el-row v-if="gameSettings.MGMBaccarat3.isVisible" class="float-left" :class="[getMGMWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 66}]" @click="goToMiniGame(66)">바카라3</div>
          </el-row>
          <el-row v-if="gameSettings.MGMEvenOdd.isVisible" class="float-left" :class="[getMGMWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 67}]" @click="goToMiniGame(67)">홀짝</div>
          </el-row>
          <el-row v-if="gameSettings.MGMGoStop.isVisible" class="float-left" :class="[getMGMWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 68}]" @click="goToMiniGame(68)">고스톱</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 27 && miniGameType <= 34">
          <el-row v-if="gameSettings.BetGameLucky7.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 32}]" @click="goToMiniGame(32)">럭키7</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameLucky6.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 33}]" @click="goToMiniGame(33)">럭키6</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameLucky5.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 34}]" @click="goToMiniGame(34)">럭키5</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameWheel.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 30}]" @click="goToMiniGame(30)">행운의바퀴</div>
          </el-row>
          <el-row v-if="gameSettings.BetGamePoker.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 28}]" @click="goToMiniGame(28)">홀덤포커</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameBaccarat.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 27}]" @click="goToMiniGame(27)">바카라</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameBet.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 29}]" @click="goToMiniGame(29)">1:1벳</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameDiceDuel.isVisible" class="float-left" :class="[getBetGamesWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 31}]" @click="goToMiniGame(31)">주사위결투</div>
          </el-row>
        </el-row>
        <el-row v-if="(miniGameType >= 35 && miniGameType <= 37) || (miniGameType >= 50 && miniGameType <= 51)">
          <el-row v-if="gameSettings.CoreHillo.isVisible" class="float-left" :class="[getSportCoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 36}]" @click="goToMiniGame(36)">하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.CoreDice.isVisible" class="float-left" :class="[getSportCoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 37}]" @click="goToMiniGame(37)">다이스</div>
          </el-row>
          <el-row v-if="gameSettings.CoreCrash.isVisible" class="float-left" :class="[getSportCoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 35}]" @click="goToMiniGame(35)">투더문</div>
          </el-row>
          <el-row v-if="gameSettings.CoreMHillo.isVisible" class="float-left" :class="[getSportCoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 50}]" @click="goToMiniGame(50)">멀티하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.CoreMine.isVisible" class="float-left" :class="[getSportCoreWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 51}]" @click="goToMiniGame(51)">지뢰게임</div>
          </el-row>
        </el-row>
        <el-row v-if="(miniGameType >= 42 && miniGameType <= 47) || (miniGameType >= 71 && miniGameType <= 73)">
          <el-row v-if="gameSettings.SurePowerBall1.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 42}]" @click="goToMiniGame(42)">슈어파워볼 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SurePowerBall2.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 43}]" @click="goToMiniGame(43)">슈어파워볼 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SurePowerBall3.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 44}]" @click="goToMiniGame(44)">슈어파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder1.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 45}]" @click="goToMiniGame(45)">슈어사다리 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder2.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 46}]" @click="goToMiniGame(46)">슈어사다리 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder3.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 47}]" @click="goToMiniGame(47)">슈어사다리 3분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing1.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 71}]" @click="goToMiniGame(71)">슈어레이싱 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing2.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 72}]" @click="goToMiniGame(72)">슈어레이싱 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing3.isVisible" class="float-left" :class="[getSuremanWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 73}]" @click="goToMiniGame(73)">슈어레이싱 3분</div>
          </el-row>
        </el-row>
        <el-row v-if="(miniGameType >= 48 && miniGameType <= 49) || (miniGameType >= 52 && miniGameType <= 53)">
          <el-row v-if="gameSettings.CompanionSpeedKeno.isVisible" class="float-left" :class="[getCompanionWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 48}]" @click="goToMiniGame(48)">동행스피드키노</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionKenoLadder.isVisible" class="float-left" :class="[getCompanionWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 49}]" @click="goToMiniGame(49)">동행키노사다리</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionPowerBall.isVisible" class="float-left" :class="[getCompanionWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 52}]" @click="goToMiniGame(52)">동행파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionPowerLadder.isVisible" class="float-left" :class="[getCompanionWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 53}]" @click="goToMiniGame(53)">동행파워사다리</div>
          </el-row>
        </el-row>
        <el-row v-if="miniGameType >= 54 && miniGameType <= 63">
          <el-row v-if="gameSettings.TokenPowerBall.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 54}]" @click="goToMiniGame(54)">토큰파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRoullete.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 55}]" @click="goToMiniGame(55)">토큰룰렛</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHilo.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 56}]" @click="goToMiniGame(56)">토큰하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHilo5.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 57}]" @click="goToMiniGame(57)">토큰하이로우5</div>
          </el-row>
          <el-row v-if="gameSettings.TokenGraph.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 58}]" @click="goToMiniGame(58)">토큰그래프</div>
          </el-row>
          <el-row v-if="gameSettings.TokenBaccarat.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 59}]" @click="goToMiniGame(59)">토큰바카라</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHorse.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 60}]" @click="goToMiniGame(60)">토큰가상경마</div>
          </el-row>
          <el-row v-if="gameSettings.TokenWheel.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 61}]" @click="goToMiniGame(61)">토큰휠</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRacing3.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 62}]" @click="goToMiniGame(62)">토큰레이싱3</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRacing4.isVisible" class="float-left" :class="[getTokenWidth(), { 'p-l-2 p-r-2': layoutType == 'layout1' }]">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 63}]" @click="goToMiniGame(63)">토큰레이싱4</div>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <el-row v-if="isMobile && (layoutType == 'layout2' || themeType == 'orange14')" :style="'width: ' + screenWidth + 'px'">
      <el-row v-if="(miniGameType >= 0 && miniGameType <= 4) || (miniGameType >= 20 && miniGameType <= 24)">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.PowerBall.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 0}]" @click="goToMiniGame(0)">파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.NtryPLadder.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 1}]" @click="goToMiniGame(1)">파워사다리</div>
          </el-row>
          <el-row v-if="gameSettings.NtryKLadder.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 2}]" @click="goToMiniGame(2)">키노사다리</div>
          </el-row>
          <el-row v-if="gameSettings.NtrySpeedKeno.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 3}]" @click="goToMiniGame(3)">스피드키노</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall1.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 20}]" @click="goToMiniGame(20)">EOS 파워볼 1분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall2.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 21}]" @click="goToMiniGame(21)">EOS 파워볼 2분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall3.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 22}]" @click="goToMiniGame(22)">EOS 파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall4.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 23}]" @click="goToMiniGame(23)">EOS 파워볼 4분</div>
          </el-row>
          <el-row v-if="gameSettings.EOSPowerBall5.isVisible" class="float-left" :class="getNtryWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 24}]" @click="goToMiniGame(24)">EOS 파워볼 5분</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="(miniGameType >= 5 && miniGameType <= 10) || (miniGameType >= 38 && miniGameType <= 41) || (miniGameType >= 69 && miniGameType <= 70)">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.NamedRacing.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 10}]" @click="goToMiniGame(10)">달팽이 레이싱</div>
          </el-row>
          <el-row v-if="gameSettings.NamedPowerBall3.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 38}]" @click="goToMiniGame(38)">네임드 파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedPowerBall5.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 39}]" @click="goToMiniGame(39)">네임드 파워볼 5분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedLadder3.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 40}]" @click="goToMiniGame(40)">네임드 사다리 3분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedLadder5.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 41}]" @click="goToMiniGame(41)">네임드 사다리 5분</div>
          </el-row>
          <el-row v-if="gameSettings.NamedRedPowerBall.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 69}]" @click="goToMiniGame(69)">네임드 레드파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.NamedRedLadder.isVisible" class="float-left" :class="getNamedWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 70}]" @click="goToMiniGame(70)">네임드 레드사다리</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 11 && miniGameType <= 13">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.LivescorePowerFreeKick.isVisible" class="float-left" :class="getLivescoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 11}]" @click="goToMiniGame(11)">파워프리킥</div>
          </el-row>
          <el-row v-if="gameSettings.LivescoreSpeedHomeRun.isVisible" class="float-left" :class="getLivescoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 12}]" @click="goToMiniGame(12)">스피드홈런</div>
          </el-row>
          <el-row v-if="gameSettings.LivescorePowerSpeedDunk.isVisible" class="float-left" :class="getLivescoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 13}]" @click="goToMiniGame(13)">파워스피드덩크</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 14 && miniGameType <= 15">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.BubblePowerBall.isVisible" class="float-left" :class="getBubbleWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 14}]" @click="goToMiniGame(14)">보글파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.BubbleLadder.isVisible" class="float-left" :class="getBubbleWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 15}]" @click="goToMiniGame(15)">보글사다리</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 16 && miniGameType <= 19">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.BoscoreLadder1.isVisible" class="float-left" :class="getBoscoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 16}]" @click="goToMiniGame(16)">1분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscoreLadder2.isVisible" class="float-left" :class="getBoscoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 17}]" @click="goToMiniGame(17)">2분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscoreLadder3.isVisible" class="float-left" :class="getBoscoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 18}]" @click="goToMiniGame(18)">3분 별다리</div>
          </el-row>
          <el-row v-if="gameSettings.BoscorePowerBall.isVisible" class="float-left" :class="getBoscoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 19}]" @click="goToMiniGame(19)">1분 파워볼</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 25 && miniGameType <= 26">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.LotusBaccarat1.isVisible" class="float-left" :class="getLotusWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 25}]" @click="goToMiniGame(25)">바카라1</div>
          </el-row>
          <el-row v-if="gameSettings.LotusEvenOdd.isVisible" class="float-left" :class="getLotusWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 26}]" @click="goToMiniGame(26)">홀짝</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 64 && miniGameType <= 68">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.MGMBaccarat1.isVisible" class="float-left" :class="getMGMWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 64}]" @click="goToMiniGame(64)">바카라1</div>
          </el-row>
          <el-row v-if="gameSettings.MGMBaccarat2.isVisible" class="float-left" :class="getMGMWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 65}]" @click="goToMiniGame(65)">바카라2</div>
          </el-row>
          <el-row v-if="gameSettings.MGMBaccarat3.isVisible" class="float-left" :class="getMGMWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 66}]" @click="goToMiniGame(66)">바카라3</div>
          </el-row>
          <el-row v-if="gameSettings.MGMEvenOdd.isVisible" class="float-left" :class="getMGMWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 67}]" @click="goToMiniGame(67)">홀짝</div>
          </el-row>
          <el-row v-if="gameSettings.MGMGoStop.isVisible" class="float-left" :class="getMGMWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 68}]" @click="goToMiniGame(68)">고스톱</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 27 && miniGameType <= 34">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.BetGameLucky7.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 32}]" @click="goToMiniGame(32)">럭키7</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameLucky6.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 33}]" @click="goToMiniGame(33)">럭키6</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameLucky5.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 34}]" @click="goToMiniGame(34)">럭키5</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameWheel.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 30}]" @click="goToMiniGame(30)">행운의바퀴</div>
          </el-row>
          <el-row v-if="gameSettings.BetGamePoker.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 28}]" @click="goToMiniGame(28)">홀덤포커</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameBaccarat.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 27}]" @click="goToMiniGame(27)">바카라</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameBet.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 29}]" @click="goToMiniGame(29)">1:1벳</div>
          </el-row>
          <el-row v-if="gameSettings.BetGameDiceDuel.isVisible" class="float-left" :class="getBetGamesWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 31}]" @click="goToMiniGame(31)">주사위결투</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="(miniGameType >= 35 && miniGameType <= 37) || (miniGameType >= 50 && miniGameType <= 51)">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.CoreHillo.isVisible" class="float-left" :class="getSportCoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 36}]" @click="goToMiniGame(36)">하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.CoreDice.isVisible" class="float-left" :class="getSportCoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 37}]" @click="goToMiniGame(37)">다이스</div>
          </el-row>
          <el-row v-if="gameSettings.CoreCrash.isVisible" class="float-left" :class="getSportCoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 35}]" @click="goToMiniGame(35)">투더문</div>
          </el-row>
          <el-row v-if="gameSettings.CoreMHillo.isVisible" class="float-left" :class="getSportCoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 50}]" @click="goToMiniGame(50)">멀티하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.CoreMine.isVisible" class="float-left" :class="getSportCoreWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 51}]" @click="goToMiniGame(51)">지뢰게임</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="(miniGameType >= 42 && miniGameType <= 47) || (miniGameType >= 71 && miniGameType <= 73)">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.SurePowerBall1.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 42}]" @click="goToMiniGame(42)">슈어파워볼 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SurePowerBall2.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 43}]" @click="goToMiniGame(43)">슈어파워볼 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SurePowerBall3.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 44}]" @click="goToMiniGame(44)">슈어파워볼 3분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder1.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 45}]" @click="goToMiniGame(45)">슈어사다리 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder2.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 46}]" @click="goToMiniGame(46)">슈어사다리 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SureLadder3.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 47}]" @click="goToMiniGame(47)">슈어사다리 3분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing1.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 71}]" @click="goToMiniGame(71)">슈어레이싱 1분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing2.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 72}]" @click="goToMiniGame(72)">슈어레이싱 2분</div>
          </el-row>
          <el-row v-if="gameSettings.SureRacing3.isVisible" class="float-left" :class="getSuremanWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 73}]" @click="goToMiniGame(73)">슈어레이싱 3분</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="(miniGameType >= 48 && miniGameType <= 49) || (miniGameType >= 52 && miniGameType <= 53)">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.CompanionSpeedKeno.isVisible" class="float-left" :class="getCompanionWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 48}]" @click="goToMiniGame(48)">동행스피드키노</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionKenoLadder.isVisible" class="float-left" :class="getCompanionWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 49}]" @click="goToMiniGame(49)">동행키노사다리</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionPowerBall.isVisible" class="float-left" :class="getCompanionWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 52}]" @click="goToMiniGame(52)">동행파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.CompanionPowerLadder.isVisible" class="float-left" :class="getCompanionWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 53}]" @click="goToMiniGame(53)">동행파워사다리</div>
          </el-row>
        </OwlCarousel>
      </el-row>
      <el-row v-if="miniGameType >= 54 && miniGameType <= 63">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <el-row v-if="gameSettings.TokenPowerBall.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 54}]" @click="goToMiniGame(54)">토큰파워볼</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRoullete.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 55}]" @click="goToMiniGame(55)">토큰룰렛</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHilo.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 56}]" @click="goToMiniGame(56)">토큰하이로우</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHilo5.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 57}]" @click="goToMiniGame(57)">토큰하이로우5</div>
          </el-row>
          <el-row v-if="gameSettings.TokenGraph.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 58}]" @click="goToMiniGame(58)">토큰그래프</div>
          </el-row>
          <el-row v-if="gameSettings.TokenBaccarat.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 59}]" @click="goToMiniGame(59)">토큰바카라</div>
          </el-row>
          <el-row v-if="gameSettings.TokenHorse.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 60}]" @click="goToMiniGame(60)">토큰가상경마</div>
          </el-row>
          <el-row v-if="gameSettings.TokenWheel.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 61}]" @click="goToMiniGame(61)">토큰휠</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRacing3.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 62}]" @click="goToMiniGame(62)">토큰레이싱3</div>
          </el-row>
          <el-row v-if="gameSettings.TokenRacing4.isVisible" class="float-left" :class="getTokenWidth()">
            <div :class="[`mini-header-bottom-button-${themeType}`, {'on': miniGameType == 63}]" @click="goToMiniGame(63)">토큰레이싱4</div>
          </el-row>
        </OwlCarousel>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import OwlCarousel from "vue-owl-carousel";

const miniTimeService = feathers.service('getMiniTime')
miniTimeService.timeout = 60000

export default {
  middleware: "authenticated",
  props: ["miniGameType", "remainMins", "remainSecs"],
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      miniGameTabType: "getMiniGameType",
      gameSettings: "getGameSettings",
      screenWidth: "getScreenWidth"
    }),
  },
  components: {
    OwlCarousel,
  },
  watch: {
    remainMins(val) {},
    remainSecs(val) {
      if (this.miniGameType == 4) {
        this.betEastRemainSecs = val;
      }
    },
    screenWidth(val) {
      this.getMiniMenuHeader()
      this.getTopWidth();
    }
  },
  data() {
    return {
      ntryMins: 0,
      ntrySecs: 0,
      kenoMins: 0,
      kenoSecs: 0,
      boscore1Mins: 0,
      boscore1Secs: 0,
      boscore2Mins: 0,
      boscore2Secs: 0,
      boscore3Mins: 0,
      boscore3Secs: 0,
      lotusBaccaratSecs: 0,
      lotusEvenSecs: 0,
      eos1Mins: 0,
      eos1Secs: 0,
      eos2Mins: 0,
      eos2Secs: 0,
      eos3Mins: 0,
      eos3Secs: 0,
      eos4Mins: 0,
      eos4Secs: 0,
      eos5Mins: 0,
      eos5Secs: 0,
      ntryTime: "00:00",
      kenoTime: "00:00",
      boscore1Time: "00:00",
      boscore2Time: "00:00",
      boscore3Time: "00:00",
      lotusBaccaratTime: "00:00",
      lotusEvenTime: "00:00",
      eos1Time: "00:00",
      eos2Time: "00:00",
      eos3Time: "00:00",
      eos4Time: "00:00",
      eos5Time: "00:00",
      betEastRemainSecs: 0,
      betEastRemainTime: "00:00",
      calculateTime: null,
      mobileWidths: [
        "width-33pro",
        "width-33pro",
        "width-33pro",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2",
        "width-33pro m-t-2"
      ],
    };
  },
  created() {
    miniTimeService.find()
      .then((res) => {
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        this.ntryMins = res.data.ntryMins;
        this.ntrySecs = res.data.ntrySecs;
        this.kenoMins = res.data.kenoMins;
        this.kenoSecs = res.data.kenoSecs;
        this.boscore1Mins = res.data.boscore1Mins;
        this.boscore1Secs = res.data.boscore1Secs;
        this.boscore2Mins = res.data.boscore2Mins;
        this.boscore2Secs = res.data.boscore2Secs;
        this.boscore3Mins = res.data.boscore3Mins;
        this.boscore3Secs = res.data.boscore3Secs;
        this.lotusBaccaratSecs = res.data.lotusBaccaratSecs;
        this.lotusEvenSecs = res.data.lotusEvenSecs;
        this.eos1Mins = res.data.eos1Mins;
        this.eos1Secs = res.data.eos1Secs;
        this.eos2Mins = res.data.eos2Mins;
        this.eos2Secs = res.data.eos2Secs;
        this.eos3Mins = res.data.eos3Mins;
        this.eos3Secs = res.data.eos3Secs;
        this.eos4Mins = res.data.eos4Mins;
        this.eos4Secs = res.data.eos4Secs;
        this.eos5Mins = res.data.eos5Mins;
        this.eos5Secs = res.data.eos5Secs;
      })
      .catch((err) => {
        console.log(err.message)
      });
  },
  mounted() {
    this.getMiniMenuHeader()
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime();
    }, 1000);

    this.getTopWidth();
  },
  destroyed() {
    clearInterval(this.calculateTime);
  },
  methods: {
    getMiniMenuHeader() {
      this.$store.commit("SET_MINIMENU_HEIGHT", this.$refs.miniheader.$el.clientHeight + 30);
    },
    calculateGameRemainTime() {
      this.ntrySecs--;
      if (this.ntrySecs < 0) {
        this.ntrySecs = 59;
        this.ntryMins--;
        if (this.ntryMins < 0) this.ntryMins = 4;
      }

      if (this.ntrySecs < 10)
        this.ntryTime = this.ntryMins + ":0" + this.ntrySecs;
      else this.ntryTime = this.ntryMins + ":" + this.ntrySecs;

      this.kenoSecs--;
      if (this.kenoSecs < 0) {
        this.kenoSecs = 59;
        this.kenoMins--;
        if (this.kenoMins < 0) this.kenoMins = 4;
      }

      if (this.kenoSecs < 10)
        this.kenoTime = this.kenoMins + ":0" + this.kenoSecs;
      else this.kenoTime = this.kenoMins + ":" + this.kenoSecs;

      this.boscore1Secs--;
      if (this.boscore1Secs < 0) {
        this.boscore1Secs = 59;
      }
      if (this.boscore1Secs < 10)
        this.boscore1Time = "00:0" + this.boscore1Secs;
      else this.boscore1Time = "00:" + this.boscore1Secs;

      this.boscore2Secs--;
      if (this.boscore2Secs < 0) {
        this.boscore2Secs = 59;
        this.boscore2Mins--;
        if (this.boscore2Mins < 0) this.boscore2Mins = 1;
      }
      if (this.boscore2Secs < 10)
        this.boscore2Time = this.boscore2Mins + ":0" + this.boscore2Secs;
      else this.boscore2Time = this.boscore2Mins + ":" + this.boscore2Secs;

      this.boscore3Secs--;
      if (this.boscore3Secs < 0) {
        this.boscore3Secs = 59;
        this.boscore3Mins--;
        if (this.boscore3Mins < 0) this.boscore3Mins = 2;
      }
      if (this.boscore3Secs < 10)
        this.boscore3Time = this.boscore3Mins + ":0" + this.boscore3Secs;
      else this.boscore3Time = this.boscore3Mins + ":" + this.boscore3Secs;

      this.lotusBaccaratSecs--;
      if (this.lotusBaccaratSecs < 0) {
        this.lotusBaccaratSecs = 49;
      }

      if (this.lotusBaccaratSecs < 10)
        this.lotusBaccaratTime = "00:0" + this.lotusBaccaratSecs;
      else this.lotusBaccaratTime = "00:" + this.lotusBaccaratSecs;

      this.eos1Secs--;
      if (this.eos1Secs < 0) {
        this.eos1Secs = 59;
      }
      if (this.eos1Secs < 10)
        this.eos1Time = this.eos1Mins + ":0" + this.eos1Secs;
      else this.eos1Time = this.eos1Mins + ":" + this.eos1Secs;
      
      this.eos2Secs--;
      if (this.eos2Secs < 0) {
        this.eos2Secs = 59;
        this.eos2Mins--;
        if (this.eos2Mins < 0) this.eos2Mins = 1;
      }
      if (this.eos2Secs < 10)
        this.eos2Time = this.eos2Mins + ":0" + this.eos2Secs;
      else this.eos2Time = this.eos2Mins + ":" + this.eos2Secs;
      
      this.eos3Secs--;
      if (this.eos3Secs < 0) {
        this.eos3Secs = 59;
        this.eos3Mins--;
        if (this.eos3Mins < 0) this.eos3Mins = 2;
      }
      if (this.eos3Secs < 10)
        this.eos3Time = this.eos3Mins + ":0" + this.eos3Secs;
      else this.eos3Time = this.eos3Mins + ":" + this.eos3Secs;
      
      this.eos4Secs--;
      if (this.eos4Secs < 0) {
        this.eos4Secs = 59;
        this.eos4Mins--;
        if (this.eos4Mins < 0) this.eos4Mins = 3;
      }
      if (this.eos4Secs < 10)
        this.eos4Time = this.eos4Mins + ":0" + this.eos4Secs;
      else this.eos4Time = this.eos4Mins + ":" + this.eos4Secs;
      
      this.eos5Secs--;
      if (this.eos5Secs < 0) {
        this.eos5Secs = 59;
        this.eos5Mins--;
        if (this.eos5Mins < 0) this.eos5Mins = 3;
      }
      if (this.eos5Secs < 10)
        this.eos5Time = this.eos5Mins + ":0" + this.eos5Secs;
      else this.eos5Time = this.eos5Mins + ":" + this.eos5Secs;
    },
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
    onSelectMini(type) {
      if (this.isMobile && this.layoutType != 'layout2' && this.themeType != 'orange14') {
        this.$store.commit("SET_MINIGAMETYPE", type);
        this.$store.commit("SET_SHOWMINITAB", true);
        return;
      }
      if (type == 0) {
        if (this.gameSettings.PowerBall.isVisible) {
          this.goToMiniGame(0, 0);
        } else if (this.gameSettings.NtryPLadder.isVisible) {
          this.goToMiniGame(1, 0);
        } else if (this.gameSettings.NtryKLadder.isVisible) {
          this.goToMiniGame(2, 0);
        } else if (this.gameSettings.NtrySpeedKeno.isVisible) {
          this.goToMiniGame(3, 0);
        } else if (this.gameSettings.EOSPowerBall1.isVisible) {
          this.goToMiniGame(20, 0);
        } else if (this.gameSettings.EOSPowerBall2.isVisible) {
          this.goToMiniGame(21, 0);
        } else if (this.gameSettings.EOSPowerBall3.isVisible) {
          this.goToMiniGame(22, 0);
        } else if (this.gameSettings.EOSPowerBall4.isVisible) {
          this.goToMiniGame(23, 0);
        } else if (this.gameSettings.EOSPowerBall5.isVisible) {
          this.goToMiniGame(24, 0);
        }
      } else if (type == 1) {
        if (this.gameSettings.NamedRacing.isVisible) {
          this.goToMiniGame(10, 0);
        } else if (this.gameSettings.NamedPowerBall3.isVisible) {
          this.goToMiniGame(38, 0);
        } else if (this.gameSettings.NamedPowerBall5.isVisible) {
          this.goToMiniGame(39, 0);
        } else if (this.gameSettings.NamedLadder3.isVisible) {
          this.goToMiniGame(40, 0);
        } else if (this.gameSettings.NamedLadder5.isVisible) {
          this.goToMiniGame(41, 0);
        } else if (this.gameSettings.NamedRedPowerBall.isVisible) {
          this.goToMiniGame(69, 0);
        } else if (this.gameSettings.NamedRedLadder.isVisible) {
          this.goToMiniGame(70, 0);
        }
      } else if (type == 2) {
        if (this.gameSettings.LivescorePowerFreeKick.isVisible) {
          this.goToMiniGame(11, 0);
        } else if (this.gameSettings.LivescoreSpeedHomeRun.isVisible) {
          this.goToMiniGame(12, 0);
        } else if (this.gameSettings.LivescorePowerSpeedDunk.isVisible) {
          this.goToMiniGame(13, 0);
        }
      } else if (type == 3) {
        if (this.gameSettings.BubblePowerBall.isVisible) {
          this.goToMiniGame(14, 0);
        } else if (this.gameSettings.BubbleLadder.isVisible) {
          this.goToMiniGame(15, 0);
        }
      } else if (type == 4) {
        if (this.gameSettings.BoscoreLadder1.isVisible) {
          this.goToMiniGame(16, 0);
        } else if (this.gameSettings.BoscoreLadder2.isVisible) {
          this.goToMiniGame(17, 0);
        } else if (this.gameSettings.BoscoreLadder3.isVisible) {
          this.goToMiniGame(18, 0);
        } else if (this.gameSettings.BoscorePowerBall.isVisible) {
          this.goToMiniGame(19, 0);
        }
      } else if (type == 5) {
        if (this.gameSettings.LotusBaccarat1.isVisible) {
          this.goToMiniGame(25, 0);
        } else if (this.gameSettings.LotusEvenOdd.isVisible) {
          this.goToMiniGame(26, 0);
        }
      } else if (type == 6) {
        this.goToMiniGame(27, 0);
      } else if (type == 7) {
        this.goToMiniGame(36, 0);
      } else if (type == 8) {
        this.goToMiniGame(0, 0);
      } else if (type == 9) {
        this.goToMiniGame(20, 0);
      } else if (type == 10) {
        if (this.gameSettings.SurePowerBall1.isVisible) {
          this.goToMiniGame(42, 0);
        } else if (this.gameSettings.SurePowerBall2.isVisible) {
          this.goToMiniGame(43, 0);
        } else if (this.gameSettings.SurePowerBall3.isVisible) {
          this.goToMiniGame(44, 0);
        } else if (this.gameSettings.SureLadder1.isVisible) {
          this.goToMiniGame(45, 0);
        } else if (this.gameSettings.SureLadder2.isVisible) {
          this.goToMiniGame(46, 0);
        } else if (this.gameSettings.SureLadder3.isVisible) {
          this.goToMiniGame(47, 0);
        } else if (this.gameSettings.SureRacing1.isVisible) {
          this.goToMiniGame(71, 0);
        } else if (this.gameSettings.SureRacing2.isVisible) {
          this.goToMiniGame(72, 0);
        } else if (this.gameSettings.SureRacing3.isVisible) {
          this.goToMiniGame(73, 0);
        }
      } else if (type == 11) {
        if (this.gameSettings.CompanionSpeedKeno.isVisible) {
          this.goToMiniGame(48, 0);
        } else if (this.gameSettings.CompanionKenoLadder.isVisible) {
          this.goToMiniGame(49, 0);
        } else if (this.gameSettings.CompanionPowerBall.isVisible) {
          this.goToMiniGame(52, 0);
        } else if (this.gameSettings.CompanionPowerLadder.isVisible) {
          this.goToMiniGame(53, 0);
        }
      } else if (type == 12) {
        if (this.gameSettings.TokenPowerBall.isVisible) {
          this.goToMiniGame(54, 0);
        } else if (this.gameSettings.TokenRoullete.isVisible) {
          this.goToMiniGame(55, 0);
        } else if (this.gameSettings.TokenHilo.isVisible) {
          this.goToMiniGame(56, 0);
        } else if (this.gameSettings.TokenHilo5.isVisible) {
          this.goToMiniGame(57, 0);
        } else if (this.gameSettings.TokenGraph.isVisible) {
          this.goToMiniGame(58, 0);
        } else if (this.gameSettings.TokenBaccarat.isVisible) {
          this.goToMiniGame(59, 0);
        } else if (this.gameSettings.TokenHorse.isVisible) {
          this.goToMiniGame(60, 0);
        } else if (this.gameSettings.TokenWheel.isVisible) {
          this.goToMiniGame(61, 0);
        } else if (this.gameSettings.TokenRacing3.isVisible) {
          this.goToMiniGame(62, 0);
        } else if (this.gameSettings.TokenRacing4.isVisible) {
          this.goToMiniGame(63, 0);
        }
      } else if (type == 13) {
        if (this.gameSettings.MGMBaccarat1.isVisible) {
          this.goToMiniGame(64, 0);
        } else if (this.gameSettings.MGMBaccarat2.isVisible) {
          this.goToMiniGame(65, 0);
        } else if (this.gameSettings.MGMBaccarat3.isVisible) {
          this.goToMiniGame(66, 0);
        } else if (this.gameSettings.MGMEvenOdd.isVisible) {
          this.goToMiniGame(67, 0);
        } else if (this.gameSettings.MGMGoStop.isVisible) {
          this.goToMiniGame(68, 0);
        }
      }
    },
    goToMiniGame(val) {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage("알림메시지", "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", "닫기[Close]", 2);
        return;
      }
      switch (val) {
        case 0: // 파워볼
          this.$router.push("/Mini/PowerBall");
          break;
        case 1: // 파워사다리
          this.$router.push("/Mini/PowerLadder");
          break;
        case 2: // 키노사다리
          this.$router.push("/Mini/KenoLadder");
          break;
        case 3: // 스피드키노
          this.$router.push("/Mini/SpeedKeno");
          break;
        case 4: // 바이넨스
          this.$router.push("/Mini/Fx");
          break;
        case 5: // FX 1분
          this.$router.push("/Mini/NamedFX1");
          break;
        case 6: // FX 2분
          this.$router.push("/Mini/NamedFX2");
          break;
        case 7: // FX 3분
          this.$router.push("/Mini/NamedFX3");
          break;
        case 8: // FX 4분
          this.$router.push("/Mini/NamedFX4");
          break;
        case 9: // FX 5분
          this.$router.push("/Mini/NamedFX5");
          break;
        case 10: // 달팽이레이싱
          this.$router.push("/Mini/NamedRacing");
          break;
        case 11: // 파워프리킥
          this.$router.push("/Mini/LivescorePowerFreeKick");
          break;
        case 12: // 스피드홈런
          this.$router.push("/Mini/LivescoreSpeedHomeRun");
          break;
        case 13: // 파워스피드덩크
          this.$router.push("/Mini/LivescorePowerSpeedDunk");
          break;
        case 14: // 보글파워볼
          this.$router.push("/Mini/BubblePowerBall");
          break;
        case 15: // 보글사다리
          this.$router.push("/Mini/BubbleLadder");
          break;
        case 16: // 1분 별다리
          this.$router.push("/Mini/BoscoreLadder1");
          break;
        case 17: // 2분 별다리
          this.$router.push("/Mini/BoscoreLadder2");
          break;
        case 18: // 3분 별다리
          this.$router.push("/Mini/BoscoreLadder3");
          break;
        case 19: // 1분 파워볼
          this.$router.push("/Mini/BoscorePowerBall");
          break;
        case 20: // EOS 파워볼 1분
          this.$router.push("/Mini/EOSPowerBall1");
          break;
        case 21: // EOS 파워볼 2분
          this.$router.push("/Mini/EOSPowerBall2");
          break;
        case 22: // EOS 파워볼 3분
          this.$router.push("/Mini/EOSPowerBall3");
          break;
        case 23: // EOS 파워볼 4분
          this.$router.push("/Mini/EOSPowerBall4");
          break;
        case 24: // EOS 파워볼 5분
          this.$router.push("/Mini/EOSPowerBall5");
          break;
        case 25: // 로투스 바카라
          this.$router.push("/Lotus/Baccarat1");
          break;
        case 26: // 로투스 홀짝
          this.$router.push("/Lotus/EvenOdd");
          break;
        case 27: // 벳게임 바카라
          this.$router.push("/BetGames/Baccarat");
          break;
        case 28: // 벳게임 포커
          this.$router.push("/BetGames/Poker");
          break;
        case 29: // 벳게임 1:1벳
          this.$router.push("/BetGames/Bet");
          break;
        case 30: // 벳게임 행운의 바퀴
          this.$router.push("/BetGames/Wheel");
          break;
        case 31: // 벳게임 주사위결투
          this.$router.push("/BetGames/DiceDuel");
          break;
        case 32: // 벳게임 럭키7
          this.$router.push("/BetGames/Lucky7");
          break;
        case 33: // 벳게임 럭키6
          this.$router.push("/BetGames/Lucky6");
          break;
        case 34: // 벳게임 럭키5
          this.$router.push("/BetGames/Lucky5");
          break;
        case 35: // 투더문
          this.$router.push("/Mini/Crash");
          break;
        case 36: // 하이로우
          this.$router.push("/Mini/Hillo");
          break;
        case 37: // 다이스
          this.$router.push("/Mini/Dice");
          break;
        case 38: // 네임드 파워볼 3분
          this.$router.push("/Mini/NamedPowerBall3");
          break;
        case 39: // 네임드 파워볼 5분
          this.$router.push("/Mini/NamedPowerBall5");
          break;
        case 40: // 네임드 사다리 3분
          this.$router.push("/Mini/NamedLadder3");
          break;
        case 41: // 네임드 사다리 5분
          this.$router.push("/Mini/NamedLadder5");
          break;
        case 42: // 슈어파워볼 1분
          this.$router.push("/Mini/SurePowerBall1");
          break;
        case 43: // 슈어파워볼 2분
          this.$router.push("/Mini/SurePowerBall2");
          break;
        case 44: // 슈어파워볼 3분
          this.$router.push("/Mini/SurePowerBall3");
          break;
        case 45: // 슈어사다리 1분
          this.$router.push("/Mini/SureLadder1");
          break;
        case 46: // 슈어사다리 2분
          this.$router.push("/Mini/SureLadder2");
          break;
        case 47: // 슈어사다리 3분
          this.$router.push("/Mini/SureLadder3");
          break;
        case 48: // 동행스피드키노
          this.$router.push("/Mini/CompanionSpeedKeno");
          break;
        case 49: // 동행키노사다리
          this.$router.push("/Mini/CompanionKenoLadder");
          break;
        case 50: // 멀티하이로우
          this.$router.push("/Mini/MHillo");
          break;
        case 51: // 지뢰게임
          this.$router.push("/Mini/Mine");
          break;
        case 52: // 동행파워볼
          this.$router.push("/Mini/CompanionPowerBall");
          break;
        case 53: // 동행파워사다리
          this.$router.push("/Mini/CompanionPowerLadder");
          break;
        case 54: // 토큰파워볼
          this.$router.push("/Mini/TokenPowerBall");
          break;
        case 55: // 토큰룰렛
          this.$router.push("/Mini/TokenRoullete");
          break;
        case 56: // 토큰하이로우
          this.$router.push("/Mini/TokenHilo");
          break;
        case 57: // 토큰하이로우5
          this.$router.push("/Mini/TokenHilo5");
          break;
        case 58: // 토큰그래프
          this.$router.push("/Mini/TokenGraph");
          break;
        case 59: // 토큰바카라
          this.$router.push("/Mini/TokenBaccarat");
          break;
        case 60: // 토큰가상경마
          this.$router.push("/Mini/TokenHorse");
          break;
        case 61: // 토큰휠
          this.$router.push("/Mini/TokenWheel");
          break;
        case 62: // 토큰레이싱3
          this.$router.push("/Mini/TokenRacing3");
          break;
        case 63: // 토큰레이싱4
          this.$router.push("/Mini/TokenRacing4");
          break;
        case 64: // MGM 바카라1
          this.$router.push("/MGM/MGMBaccarat1");
          break;
        case 65: // MGM 바카라2
          this.$router.push("/MGM/MGMBaccarat2");
          break;
        case 66: // MGM 바카라3
          this.$router.push("/MGM/MGMBaccarat3");
          break;
        case 67: // MGM 바카라홀짝
          this.$router.push("/MGM/MGMEvenOdd");
          break;
        case 68: // MGM 고스톱
          this.$router.push("/MGM/MGMGoStop");
          break;
        case 69: // 네임드 레드파워볼
          this.$router.push("/Mini/NamedRedPowerBall");
          break;
        case 70: // 네임드 레드사다리
          this.$router.push("/Mini/NamedRedLadder");
          break;
        case 71: // 슈어레이싱 1분
          this.$router.push("/Mini/SureRacing1");
          break;
        case 72: // 슈어레이싱 2분
          this.$router.push("/Mini/SureRacing2");
          break;
        case 73: // 슈어레이싱 3분
          this.$router.push("/Mini/SureRacing3");
          break;
      }
    },
    getTopWidth() {
      let showCount = 0;
      if (this.gameSettings.Mini.ntry) showCount++;
      if (this.gameSettings.Mini.named) showCount++;
      if (this.gameSettings.Mini.livescore) showCount++;
      if (this.gameSettings.Mini.bubble) showCount++;
      if (this.gameSettings.Mini.boscore) showCount++;
      if (this.gameSettings.Mini.lotus && this.themeType != 'red15' && this.themeType != 'blue15' && this.themeType != 'red12' && this.themeType != 'gold11') showCount++;
      if (this.gameSettings.Mini.betgames && this.themeType != 'gold12' && this.themeType != 'red15') showCount++;
      if (this.gameSettings.Mini.sportcore) showCount++;
      if (this.gameSettings.Mini.sureman) showCount++;
      if (this.gameSettings.Mini.companion) showCount++;
      if (this.gameSettings.Mini.token) showCount++;
      if (this.gameSettings.Mini.mgm) showCount++;

      if (!this.isMobile) {
        if (this.layoutType == "layout2") return "width-130";
        if (showCount == 12) return "width-8pro";
        if (showCount == 11) return "width-9pro";
        if (showCount == 10) return "width-10pro";
        if (showCount == 9) return "width-11pro";
        if (showCount == 8) return "width-12pro";
        if (showCount == 7) return "width-14pro";
        if (showCount == 6) return "width-16pro";
        else if (showCount == 5) return "width-20pro";
        else if (showCount == 4) return "width-25pro";
        else if (showCount == 3) return "width-33pro";
        else if (showCount == 2) return "width-50pro";
        else return "width-full";
      } else {
        let temp = []
        if (showCount == 10) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-full m-t-2"
          ];
        } else if (showCount == 9) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2"
          ];
        } else if (showCount == 8) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-50pro m-t-2",
            "width-50pro m-t-2"
          ];
        } else if (showCount == 7) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-50pro m-t-2",
            "width-50pro m-t-2",
            "width-50pro m-t-2",
            "width-50pro m-t-2",
          ];
        } else if (showCount == 6) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
            "width-33pro m-t-2",
          ];
        } else if (showCount == 5) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro",
            "width-50pro m-t-2",
            "width-50pro m-t-2"
          ];
        } else if (showCount == 4) {
          temp = [
            "width-50pro",
            "width-50pro",
            "width-50pro m-t-2",
            "width-50pro m-t-2"
          ];
        } else if (showCount == 3) {
          temp = [
            "width-33pro",
            "width-33pro",
            "width-33pro"
          ];
        } else if (showCount == 2) {
          temp = [
            "width-50pro",
            "width-50pro"
          ];
        } else {
          temp = [
            "width-full"
          ];
        }

        let wIdx = 0
        if (this.gameSettings.Mini.ntry) {
          this.mobileWidths[0] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.named) {
          this.mobileWidths[1] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.livescore) {
          this.mobileWidths[2] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.bubble) {
          this.mobileWidths[3] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.boscore) {
          this.mobileWidths[4] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.sureman) {
          this.mobileWidths[5] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.companion) {
          this.mobileWidths[6] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.sportcore) {
          this.mobileWidths[7] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.token) {
          this.mobileWidths[8] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.mgm) {
          this.mobileWidths[9] = temp[wIdx]
        }
        if (this.gameSettings.Mini.lotus) {
          this.mobileWidths[10] = temp[wIdx]
          wIdx++
        }
        if (this.gameSettings.Mini.betgames) {
          this.mobileWidths[11] = temp[wIdx]
          wIdx++
        }
      }
    },
    getNtryWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.PowerBall.isVisible) count++;
      if (this.gameSettings.NtryPLadder.isVisible) count++;
      if (this.gameSettings.NtryKLadder.isVisible) count++;
      if (this.gameSettings.NtrySpeedKeno.isVisible) count++;
      if (this.gameSettings.EOSPowerBall1.isVisible) count++;
      if (this.gameSettings.EOSPowerBall2.isVisible) count++;
      if (this.gameSettings.EOSPowerBall3.isVisible) count++;
      if (this.gameSettings.EOSPowerBall4.isVisible) count++;
      if (this.gameSettings.EOSPowerBall5.isVisible) count++;
      if (count == 9) return "width-11pro";
      if (count == 8) return "width-12pro";
      if (count == 7) return "width-14pro";
      if (count == 6) return "width-16pro";
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getNamedWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.NamedRacing.isVisible) count++;
      if (this.gameSettings.NamedPowerBall3.isVisible) count++;
      if (this.gameSettings.NamedPowerBall5.isVisible) count++;
      if (this.gameSettings.NamedLadder3.isVisible) count++;
      if (this.gameSettings.NamedLadder5.isVisible) count++;
      if (this.gameSettings.NamedRedPowerBall.isVisible) count++;
      if (this.gameSettings.NamedRedLadder.isVisible) count++;
      if (count == 8) return "width-12pro";
      if (count == 7) return "width-14pro";
      if (count == 6) return "width-16pro";
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getLivescoreWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.LivescorePowerFreeKick.isVisible) count++;
      if (this.gameSettings.LivescoreSpeedHomeRun.isVisible) count++;
      if (this.gameSettings.LivescorePowerSpeedDunk.isVisible) count++;
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getBubbleWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.BubblePowerBall.isVisible) count++;
      if (this.gameSettings.BubbleLadder.isVisible) count++;
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getBoscoreWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.BoscoreLadder1.isVisible) count++;
      if (this.gameSettings.BoscoreLadder2.isVisible) count++;
      if (this.gameSettings.BoscoreLadder3.isVisible) count++;
      if (this.gameSettings.BoscorePowerBall.isVisible) count++;
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getLotusWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.LotusBaccarat1.isVisible) count++;
      if (this.gameSettings.LotusEvenOdd.isVisible) count++;
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getMGMWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.MGMBaccarat1.isVisible) count++;
      if (this.gameSettings.MGMBaccarat2.isVisible) count++;
      if (this.gameSettings.MGMBaccarat3.isVisible) count++;
      if (this.gameSettings.MGMEvenOdd.isVisible) count++;
      if (this.gameSettings.MGMGoStop.isVisible) count++;
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getBetGamesWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.BetGameDiceDuel.isVisible) count++;
      if (this.gameSettings.BetGameWheel.isVisible) count++;
      if (this.gameSettings.BetGameLucky7.isVisible) count++;
      if (this.gameSettings.BetGameLucky6.isVisible) count++;
      if (this.gameSettings.BetGameLucky5.isVisible) count++;
      if (this.gameSettings.BetGameBaccarat.isVisible) count++;
      if (this.gameSettings.BetGamePoker.isVisible) count++;
      if (this.gameSettings.BetGameBet.isVisible) count++;
      if (count == 8) return "width-12pro";
      if (count == 7) return "width-14pro";
      if (count == 6) return "width-16pro";
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getSportCoreWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.CoreCrash.isVisible) count++;
      if (this.gameSettings.CoreHillo.isVisible) count++;
      if (this.gameSettings.CoreDice.isVisible) count++;
      if (this.gameSettings.CoreMHillo.isVisible) count++;
      if (this.gameSettings.CoreMine.isVisible) count++;
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getSuremanWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.SurePowerBall1.isVisible) count++;
      if (this.gameSettings.SurePowerBall2.isVisible) count++;
      if (this.gameSettings.SurePowerBall3.isVisible) count++;
      if (this.gameSettings.SureLadder1.isVisible) count++;
      if (this.gameSettings.SureLadder2.isVisible) count++;
      if (this.gameSettings.SureLadder3.isVisible) count++;
      if (this.gameSettings.SureRacing1.isVisible) count++;
      if (this.gameSettings.SureRacing2.isVisible) count++;
      if (this.gameSettings.SureRacing3.isVisible) count++;
      if (count == 9) return "width-11pro";
      if (count == 8) return "width-12pro";
      if (count == 7) return "width-14pro";
      if (count == 6) return "width-16pro";
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getCompanionWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.CompanionSpeedKeno.isVisible) count++;
      if (this.gameSettings.CompanionKenoLadder.isVisible) count++;
      if (this.gameSettings.CompanionPowerBall.isVisible) count++;
      if (this.gameSettings.CompanionPowerLadder.isVisible) count++;
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    },
    getTokenWidth() {
      if (this.isMobile && (this.layoutType == 'layout2' || this.themeType == 'orange14')) return

      let count = 0;
      if (this.gameSettings.TokenPowerBall.isVisible) count++;
      if (this.gameSettings.TokenRoullete.isVisible) count++;
      if (this.gameSettings.TokenHilo.isVisible) count++;
      if (this.gameSettings.TokenHilo5.isVisible) count++;
      if (this.gameSettings.TokenGraph.isVisible) count++;
      if (this.gameSettings.TokenBaccarat.isVisible) count++;
      if (this.gameSettings.TokenHorse.isVisible) count++;
      if (this.gameSettings.TokenWheel.isVisible) count++;
      if (this.gameSettings.TokenRacing3.isVisible) count++;
      if (this.gameSettings.TokenRacing4.isVisible) count++;
      if (count == 10) return "width-10pro";
      if (count == 9) return "width-11pro";
      if (count == 8) return "width-12pro";
      if (count == 7) return "width-14pro";
      if (count == 6) return "width-16pro";
      if (count == 5) return "width-20pro";
      if (count == 4) return "width-25pro";
      if (count == 3) return "width-33pro";
      if (count == 2) return "width-50pro";
      return "width-full";
    }
  },
};
</script>
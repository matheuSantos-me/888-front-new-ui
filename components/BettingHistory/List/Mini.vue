<template>
  <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
    <!-- 배팅내역 서브 탭 -->
    <el-row v-if="layoutType == 'layout1'" class="col-md-12 p-0" :class="{'m-t-14': layoutType != 'layout2'}">
      <div v-if="gameSettings.Mini.ntry && gameSettings.PowerBall.isVisible" :class="[gameType == 'PowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('PowerBall')">
        파워볼
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.NtryPLadder.isVisible" :class="[gameType == 'NtryPLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtryPLadder')">
        파워사다리
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.NtryKLadder.isVisible" :class="[gameType == 'NtryKLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtryKLadder')">
        키노사다리
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.NtrySpeedKeno.isVisible" :class="[gameType == 'NtrySpeedKeno' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtrySpeedKeno')">
        스피드키노
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall1.isVisible" :class="[gameType == 'EOSPowerBall1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall1')">
        EOS 파워볼 1분
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall2.isVisible" :class="[gameType == 'EOSPowerBall2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall2')">
        EOS 파워볼 2분
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall3.isVisible" :class="[gameType == 'EOSPowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall3')">
        EOS 파워볼 3분
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall4.isVisible" :class="[gameType == 'EOSPowerBall4' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall4')">
        EOS 파워볼 4분
      </div>
      <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall5.isVisible" :class="[gameType == 'EOSPowerBall5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall5')">
        EOS 파워볼 5분
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedRacing.isVisible" :class="[gameType == 'NamedRacing' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRacing')">
        달팽이레이싱
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall3.isVisible" :class="[gameType == 'NamedPowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedPowerBall3')">
        네임드 파워볼 3분
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall5.isVisible" :class="[gameType == 'NamedPowerBall5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedPowerBall5')">
        네임드 파워볼 5분
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedLadder3.isVisible" :class="[gameType == 'NamedLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedLadder3')">
        네임드 사다리 3분
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedLadder5.isVisible" :class="[gameType == 'NamedLadder5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedLadder5')">
        네임드 사다리 5분
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedRedPowerBall.isVisible" :class="[gameType == 'NamedRedPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRedPowerBall')">
        네임드 레드파워볼
      </div>
      <div v-if="gameSettings.Mini.named && gameSettings.NamedRedLadder.isVisible" :class="[gameType == 'NamedRedLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRedLadder')">
        네임드 레드사다리
      </div>
      <div v-if="gameSettings.Mini.livescore && gameSettings.LivescorePowerFreeKick.isVisible" :class="[gameType == 'LivescorePowerFreeKick' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescorePowerFreeKick')">
        파워프리킥
      </div>
      <div v-if="gameSettings.Mini.livescore && gameSettings.LivescoreSpeedHomeRun.isVisible" :class="[gameType == 'LivescoreSpeedHomeRun' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescoreSpeedHomeRun')">
        스피드홈런
      </div>
      <div v-if="gameSettings.Mini.livescore && gameSettings.LivescorePowerSpeedDunk.isVisible" :class="[gameType == 'LivescorePowerSpeedDunk' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescorePowerSpeedDunk')">
        파워스피드덩크
      </div>
      <div v-if="gameSettings.Mini.bubble && gameSettings.BubblePowerBall.isVisible" :class="[gameType == 'BubblePowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BubblePowerBall')">
        보글파워볼
      </div>
      <div v-if="gameSettings.Mini.bubble && gameSettings.BubbleLadder.isVisible" :class="[gameType == 'BubbleLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BubbleLadder')">
        보글사다리
      </div>
      <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder1.isVisible" :class="[gameType == 'BoscoreLadder1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder1')">
        1분 별다리
      </div>
      <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder2.isVisible" :class="[gameType == 'BoscoreLadder2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder2')">
        2분 별다리
      </div>
      <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder3.isVisible" :class="[gameType == 'BoscoreLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder3')">
        3분 별다리
      </div>
      <div v-if="gameSettings.Mini.boscore && gameSettings.BoscorePowerBall.isVisible" :class="[gameType == 'BoscorePowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscorePowerBall')">
        1분 파워볼
      </div>
      <div v-if="themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15' && gameSettings.Mini.lotus && gameSettings.LotusBaccarat1.isVisible" 
        :class="[gameType == 'LotusBaccarat1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LotusBaccarat1')">
        로투스 바카라1
      </div>
      <div v-if="themeType != 'gold11' && themeType != 'red15' && themeType != 'red12' && themeType != 'blue15' && gameSettings.Mini.lotus && gameSettings.LotusEvenOdd.isVisible" 
        :class="[gameType == 'LotusEvenOdd' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LotusEvenOdd')">
        로투스 홀짝
      </div>
      <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat1.isVisible" :class="[gameType == 'MGMBaccarat1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat1')">
        MGM 바카라1
      </div>
      <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat2.isVisible" :class="[gameType == 'MGMBaccarat2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat2')">
        MGM 바카라2
      </div>
      <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat3.isVisible" :class="[gameType == 'MGMBaccarat3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat3')">
        MGM 바카라3
      </div>
      <div v-if="gameSettings.Mini.mgm && gameSettings.MGMEvenOdd.isVisible" :class="[gameType == 'MGMEvenOdd' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMEvenOdd')">
        MGM 홀짝
      </div>
      <div v-if="gameSettings.Mini.mgm && gameSettings.MGMGoStop.isVisible" :class="[gameType == 'MGMGoStop' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMGoStop')">
        MGM 고스톱
      </div>
      <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreCrash.isVisible" :class="[gameType == 'CoreCrash' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreCrash')">
        투더문
      </div>
      <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreHillo.isVisible" :class="[gameType == 'CoreHillo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreHillo')">
        하이로우
      </div>
      <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreDice.isVisible" :class="[gameType == 'CoreDice' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreDice')">
        다이스
      </div>
      <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreMHillo.isVisible" :class="[gameType == 'CoreMHillo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreMHillo')">
        멀티하이로우
      </div>
      <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreMine.isVisible" :class="[gameType == 'CoreMine' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreMine')">
        지뢰게임
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall1.isVisible" :class="[gameType == 'SurePowerBall1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall1')">
        슈어파워볼 1분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall2.isVisible" :class="[gameType == 'SurePowerBall2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall2')">
        슈어파워볼 2분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall3.isVisible" :class="[gameType == 'SurePowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall3')">
        슈어파워볼 3분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder1.isVisible" :class="[gameType == 'SureLadder1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder1')">
        슈어사다리 1분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder2.isVisible" :class="[gameType == 'SureLadder2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder2')">
        슈어사다리 2분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder3.isVisible" :class="[gameType == 'SureLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder3')">
        슈어사다리 3분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing1.isVisible" :class="[gameType == 'SureRacing1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing1')">
        슈어레이싱 1분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing2.isVisible" :class="[gameType == 'SureRacing2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing2')">
        슈어레이싱 2분
      </div>
      <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing3.isVisible" :class="[gameType == 'SureRacing3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing3')">
        슈어레이싱 3분
      </div>
      <div v-if="gameSettings.Mini.companion && gameSettings.CompanionSpeedKeno.isVisible" :class="[gameType == 'CompanionSpeedKeno' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionSpeedKeno')">
        동행복권 스피드키노
      </div>
      <div v-if="gameSettings.Mini.companion && gameSettings.CompanionKenoLadder.isVisible" :class="[gameType == 'CompanionKenoLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionKenoLadder')">
        동행복권 키노사다리
      </div>
      <div v-if="gameSettings.Mini.companion && gameSettings.CompanionPowerBall.isVisible" :class="[gameType == 'CompanionPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionPowerBall')">
        동행복권 파워볼
      </div>
      <div v-if="gameSettings.Mini.companion && gameSettings.CompanionPowerLadder.isVisible" :class="[gameType == 'CompanionPowerLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionPowerLadder')">
        동행복권 파워사다리
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenPowerBall.isVisible" :class="[gameType == 'TokenPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenPowerBall')">
        토큰파워볼
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenRoullete.isVisible" :class="[gameType == 'TokenRoullete' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRoullete')">
        토큰룰렛
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenHilo.isVisible" :class="[gameType == 'TokenHilo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHilo')">
        토큰하이로우
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenHilo5.isVisible" :class="[gameType == 'TokenHilo5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHilo5')">
        토큰하이로우5
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenGraph.isVisible" :class="[gameType == 'TokenGraph' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenGraph')">
        토큰그래프
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenBaccarat.isVisible" :class="[gameType == 'TokenBaccarat' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenBaccarat')">
        토큰바카라
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenHorse.isVisible" :class="[gameType == 'TokenHorse' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHorse')">
        토큰가상경마
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenWheel.isVisible" :class="[gameType == 'TokenWheel' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenWheel')">
        토큰휠
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenRacing3.isVisible" :class="[gameType == 'TokenRacing3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRacing3')">
        토큰레이싱3
      </div>
      <div v-if="gameSettings.Mini.token && gameSettings.TokenRacing4.isVisible" :class="[gameType == 'TokenRacing4' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRacing4')">
        토큰레이싱4
      </div>
    </el-row>
    <el-row v-if="layoutType == 'layout2'" class="col-md-12 p-0" :class="{'m-t-14': layoutType != 'layout2'}">
      <OwlCarousel :autoWidth="true" :nav="false" :dots="false" :margin="isMobile ? 12 : 24">
        <div v-if="gameSettings.Mini.ntry && gameSettings.PowerBall.isVisible" :class="[gameType == 'PowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('PowerBall')">
          파워볼
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.NtryPLadder.isVisible" :class="[gameType == 'NtryPLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtryPLadder')">
          파워사다리
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.NtryKLadder.isVisible" :class="[gameType == 'NtryKLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtryKLadder')">
          키노사다리
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.NtrySpeedKeno.isVisible" :class="[gameType == 'NtrySpeedKeno' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NtrySpeedKeno')">
          스피드키노
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall1.isVisible" :class="[gameType == 'EOSPowerBall1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall1')">
          EOS 파워볼 1분
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall2.isVisible" :class="[gameType == 'EOSPowerBall2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall2')">
          EOS 파워볼 2분
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall3.isVisible" :class="[gameType == 'EOSPowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall3')">
          EOS 파워볼 3분
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall4.isVisible" :class="[gameType == 'EOSPowerBall4' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall4')">
          EOS 파워볼 4분
        </div>
        <div v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall5.isVisible" :class="[gameType == 'EOSPowerBall5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('EOSPowerBall5')">
          EOS 파워볼 5분
        </div>
        <!-- <div v-if="gameSettings.Mini.named && gameSettings.NamedFX1.isVisible" :class="[gameType == 'NamedFX1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedFX1')">
          FX 1분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedFX2.isVisible" :class="[gameType == 'NamedFX2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedFX2')">
          FX 2분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedFX3.isVisible" :class="[gameType == 'NamedFX3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedFX3')">
          FX 3분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedFX4.isVisible" :class="[gameType == 'NamedFX4' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedFX4')">
          FX 4분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedFX5.isVisible" :class="[gameType == 'NamedFX5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedFX5')">
          FX 5분
        </div> -->
        <div v-if="gameSettings.Mini.named && gameSettings.NamedRacing.isVisible" :class="[gameType == 'NamedRacing' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRacing')">
          달팽이레이싱
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall3.isVisible" :class="[gameType == 'NamedPowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedPowerBall3')">
          네임드 파워볼 3분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall5.isVisible" :class="[gameType == 'NamedPowerBall5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedPowerBall5')">
          네임드 파워볼 5분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedLadder3.isVisible" :class="[gameType == 'NamedLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedLadder3')">
          네임드 사다리 3분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedLadder5.isVisible" :class="[gameType == 'NamedLadder5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedLadder5')">
          네임드 사다리 5분
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedRedPowerBall.isVisible" :class="[gameType == 'NamedRedPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRedPowerBall')">
          네임드 레드파워볼
        </div>
        <div v-if="gameSettings.Mini.named && gameSettings.NamedRedLadder.isVisible" :class="[gameType == 'NamedRedLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('NamedRedLadder')">
          네임드 레드사다리
        </div>
        <div v-if="gameSettings.Mini.livescore && gameSettings.LivescorePowerFreeKick.isVisible" :class="[gameType == 'LivescorePowerFreeKick' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescorePowerFreeKick')">
          파워프리킥
        </div>
        <div v-if="gameSettings.Mini.livescore && gameSettings.LivescoreSpeedHomeRun.isVisible" :class="[gameType == 'LivescoreSpeedHomeRun' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescoreSpeedHomeRun')">
          스피드홈런
        </div>
        <div v-if="gameSettings.Mini.livescore && gameSettings.LivescorePowerSpeedDunk.isVisible" :class="[gameType == 'LivescorePowerSpeedDunk' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LivescorePowerSpeedDunk')">
          파워스피드덩크
        </div>
        <div v-if="gameSettings.Mini.bubble && gameSettings.BubblePowerBall.isVisible" :class="[gameType == 'BubblePowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BubblePowerBall')">
          보글파워볼
        </div>
        <div v-if="gameSettings.Mini.bubble && gameSettings.BubbleLadder.isVisible" :class="[gameType == 'BubbleLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BubbleLadder')">
          보글사다리
        </div>
        <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder1.isVisible" :class="[gameType == 'BoscoreLadder1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder1')">
          1분 별다리
        </div>
        <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder2.isVisible" :class="[gameType == 'BoscoreLadder2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder2')">
          2분 별다리
        </div>
        <div v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder3.isVisible" :class="[gameType == 'BoscoreLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscoreLadder3')">
          3분 별다리
        </div>
        <div v-if="gameSettings.Mini.boscore && gameSettings.BoscorePowerBall.isVisible" :class="[gameType == 'BoscorePowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('BoscorePowerBall')">
          1분 파워볼
        </div>
        <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreCrash.isVisible" :class="[gameType == 'CoreCrash' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreCrash')">
          투더문
        </div>
        <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreHillo.isVisible" :class="[gameType == 'CoreHillo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreHillo')">
          하이로우
        </div>
        <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreDice.isVisible" :class="[gameType == 'CoreDice' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreDice')">
          다이스
        </div>
        <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreMHillo.isVisible" :class="[gameType == 'CoreMHillo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreMHillo')">
          멀티하이로우
        </div>
        <div v-if="gameSettings.Mini.sportcore && gameSettings.CoreMine.isVisible" :class="[gameType == 'CoreMine' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CoreMine')">
          지뢰게임
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall1.isVisible" :class="[gameType == 'SurePowerBall1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall1')">
          슈어파워볼 1분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall2.isVisible" :class="[gameType == 'SurePowerBall2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall2')">
          슈어파워볼 2분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall3.isVisible" :class="[gameType == 'SurePowerBall3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SurePowerBall3')">
          슈어파워볼 3분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder1.isVisible" :class="[gameType == 'SureLadder1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder1')">
          슈어사다리 1분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder2.isVisible" :class="[gameType == 'SureLadder2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder2')">
          슈어사다리 2분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureLadder3.isVisible" :class="[gameType == 'SureLadder3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureLadder3')">
          슈어사다리 3분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing1.isVisible" :class="[gameType == 'SureRacing1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing1')">
          슈어레이싱 1분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing2.isVisible" :class="[gameType == 'SureRacing2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing2')">
          슈어레이싱 1분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.SureRacing3.isVisible" :class="[gameType == 'SureRacing3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('SureRacing3')">
          슈어레이싱 1분
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.CompanionSpeedKeno.isVisible" :class="[gameType == 'CompanionSpeedKeno' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionSpeedKeno')">
          동행복권 스피드키노
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.CompanionKenoLadder.isVisible" :class="[gameType == 'CompanionKenoLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionKenoLadder')">
          동행복권 키노사다리
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.CompanionPowerBall.isVisible" :class="[gameType == 'CompanionPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionPowerBall')">
          동행복권 파워볼
        </div>
        <div v-if="gameSettings.Mini.sureman && gameSettings.CompanionPowerLadder.isVisible" :class="[gameType == 'CompanionPowerLadder' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('CompanionPowerLadder')">
          동행복권 파워사다리
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenPowerBall.isVisible" :class="[gameType == 'TokenPowerBall' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenPowerBall')">
          토큰파워볼
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenRoullete.isVisible" :class="[gameType == 'TokenRoullete' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRoullete')">
          토큰룰렛
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenHilo.isVisible" :class="[gameType == 'TokenHilo' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHilo')">
          토큰하이로우
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenHilo5.isVisible" :class="[gameType == 'TokenHilo5' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHilo5')">
          토큰하이로우5
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenGraph.isVisible" :class="[gameType == 'TokenGraph' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenGraph')">
          토큰그래프
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenBaccarat.isVisible" :class="[gameType == 'TokenBaccarat' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenBaccarat')">
          토큰바카라
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenHorse.isVisible" :class="[gameType == 'TokenHorse' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenHorse')">
          토큰가상경마
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenWheel.isVisible" :class="[gameType == 'TokenWheel' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenWheel')">
          토큰휠
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenRacing3.isVisible" :class="[gameType == 'TokenRacing3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRacing3')">
          토큰레이싱3
        </div>
        <div v-if="gameSettings.Mini.token && gameSettings.TokenRacing4.isVisible" :class="[gameType == 'TokenRacing4' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('TokenRacing4')">
          토큰레이싱4
        </div>
        <div v-if="gameSettings.Mini.lotus && gameSettings.LotusBaccarat1.isVisible" :class="[gameType == 'LotusBaccarat1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LotusBaccarat1')">
          로투스 바카라1
        </div>
        <div v-if="gameSettings.Mini.lotus && gameSettings.LotusEvenOdd.isVisible" :class="[gameType == 'LotusEvenOdd' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('LotusEvenOdd')">
          로투스 홀짝
        </div>
        <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat1.isVisible" :class="[gameType == 'MGMBaccarat1' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat1')">
          MGM 바카라1
        </div>
        <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat2.isVisible" :class="[gameType == 'MGMBaccarat2' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat2')">
          MGM 바카라2
        </div>
        <div v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat3.isVisible" :class="[gameType == 'MGMBaccarat3' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMBaccarat3')">
          MGM 바카라3
        </div>
        <div v-if="gameSettings.Mini.mgm && gameSettings.MGMEvenOdd.isVisible" :class="[gameType == 'MGMEvenOdd' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMEvenOdd')">
          MGM 홀짝
        </div>
        <div v-if="gameSettings.Mini.mgm && gameSettings.MGMGoStop.isVisible" :class="[gameType == 'MGMGoStop' ? 'on' : '', `gametype-button-${themeType}`]" @click="onClickGameType('MGMGoStop')">
          MGM 고스톱
        </div>
      </OwlCarousel>
    </el-row>
    <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" 
      :class="[`text-${themeType} border-bottom-1-${themeType}`, 
        (layoutType == 'layout3' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6' ? 'bg-black30' : themeType == 'yellow18' ? 'bg-black22' : themeType == 'yellow17' ? 'bg-black41' : themeType == 'blue19' ? 'bg-blue902' : themeType == 'blue11' ? 'bg-grey914' : themeType == 'gold13' ? 'bg-blue903' : themeType == 'yellow14' || themeType == 'yellow11' ? 'bg-black51' : 'bg-black35'
      ]" :style="isMobile? 'height: 85px;': 'height: 53px;'" style="padding: 16px; text-align: center; font-size: 14px; margin-top: 8px; border-radius: 6px 6px 0px 0px;">
      {{isMobile ? '' : '배팅내역'}}
      <div style="position: absolute; left: 16px; top: 8px;">
        <el-select v-if="gameSettings.Mini.ntry" v-model="gameType1" placeholder="Select" @change="handleSelectGames1" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.PowerBall.isVisible" label="파워볼" value="PowerBall" @click="onClickGameType('PowerBall')"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.NtryPLadder.isVisible" label="파워사다리" value="NtryPLadder"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.NtryKLadder.isVisible" label="키노사다리" value="NtryKLadder"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.NtrySpeedKeno.isVisible" label="스피드키노" value="NtrySpeedKeno"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall1.isVisible" label="EOS 파워볼 1분" value="EOSPowerBall1"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall2.isVisible" label="EOS 파워볼 2분" value="EOSPowerBall2"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall3.isVisible" label="EOS 파워볼 3분" value="EOSPowerBall3"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall4.isVisible" label="EOS 파워볼 4분" value="EOSPowerBall4"></el-option>
          <el-option v-if="gameSettings.Mini.ntry && gameSettings.EOSPowerBall5.isVisible" label="EOS 파워볼 5분" value="EOSPowerBall5"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.boscore" v-model="gameType2" placeholder="Select" @change="handleSelectGames2" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder1.isVisible" label="1분 별다리" value="BoscoreLadder1"></el-option>
          <el-option v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder2.isVisible" label="2분 별다리" value="BoscoreLadder2"></el-option>
          <el-option v-if="gameSettings.Mini.boscore && gameSettings.BoscoreLadder3.isVisible" label="3분 별다리" value="BoscoreLadder3"></el-option>
          <el-option v-if="gameSettings.Mini.boscore && gameSettings.BoscorePowerBall.isVisible" label="1분 파워볼" value="BoscorePowerBall"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.lotus" v-model="gameType3" placeholder="Select" @change="handleSelectGames3" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.lotus && gameSettings.LotusBaccarat1.isVisible" label="로투스 바카라1" value="LotusBaccarat1"></el-option>
          <el-option v-if="gameSettings.Mini.lotus && gameSettings.LotusEvenOdd.isVisible" label="로투스 홀짝" value="LotusEvenOdd"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.mgm" v-model="gameType9" placeholder="Select" @change="handleSelectGames9" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat1.isVisible" label="MGM 바카라1" value="MGMBaccarat1"></el-option>
          <el-option v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat2.isVisible" label="MGM 바카라2" value="MGMBaccarat2"></el-option>
          <el-option v-if="gameSettings.Mini.mgm && gameSettings.MGMBaccarat3.isVisible" label="MGM 바카라3" value="MGMBaccarat3"></el-option>
          <el-option v-if="gameSettings.Mini.mgm && gameSettings.MGMEvenOdd.isVisible" label="MGM 홀짝" value="MGMEvenOdd"></el-option>
          <el-option v-if="gameSettings.Mini.mgm && gameSettings.MGMGoStop.isVisible" label="MGM 고스톱" value="MGMGoStop"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.sportcore" v-model="gameType4" placeholder="Select" @change="handleSelectGames4" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.sportcore && gameSettings.CoreCrash.isVisible" label="투더문" value="CoreCrash"></el-option>
          <el-option v-if="gameSettings.Mini.sportcore && gameSettings.CoreHillo.isVisible" label="하이로우" value="CoreHillo"></el-option>
          <el-option v-if="gameSettings.Mini.sportcore && gameSettings.CoreDice.isVisible" label="다이스" value="CoreDice"></el-option>
          <el-option v-if="gameSettings.Mini.sportcore && gameSettings.CoreMHillo.isVisible" label="멀티하이로우" value="CoreMHillo"></el-option>
          <el-option v-if="gameSettings.Mini.sportcore && gameSettings.CoreMine.isVisible" label="지뢰게임" value="CoreMine"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.named" v-model="gameType6" placeholder="Select" @change="handleSelectGames6" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedRacing.isVisible" label="달팽이 레이싱" value="NamedRacing"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall3.isVisible" label="네임드 파워볼 3분" value="NamedPowerBall3"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedPowerBall5.isVisible" label="네임드 파워볼 5분" value="NamedPowerBall5"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedLadder3.isVisible" label="네임드 사다리 3분" value="NamedLadder3"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedLadder5.isVisible" label="네임드 사다리 5분" value="NamedLadder5"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedRedPowerBall.isVisible" label="네임드 레드파워볼" value="NamedRedPowerBall"></el-option>
          <el-option v-if="gameSettings.Mini.named && gameSettings.NamedRedLadder.isVisible" label="네임드 레드사다리" value="NamedRedLadder"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.sureman" v-model="gameType5" placeholder="Select" @change="handleSelectGames5" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall1.isVisible" label="슈어파워볼 1분" value="SurePowerBall1"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall2.isVisible" label="슈어파워볼 2분" value="SurePowerBall2"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SurePowerBall3.isVisible" label="슈어파워볼 3분" value="SurePowerBall3"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureLadder1.isVisible" label="슈어사다리 1분" value="SureLadder1"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureLadder2.isVisible" label="슈어사다리 2분" value="SureLadder2"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureLadder3.isVisible" label="슈어사다리 3분" value="SureLadder3"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureRacing1.isVisible" label="슈어레이싱 1분" value="SureRacing1"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureRacing2.isVisible" label="슈어레이싱 2분" value="SureRacing2"></el-option>
          <el-option v-if="gameSettings.Mini.sureman && gameSettings.SureRacing3.isVisible" label="슈어레이싱 3분" value="SureRacing3"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.companion" v-model="gameType7" placeholder="Select" @change="handleSelectGames7" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.Mini.companion && gameSettings.CompanionSpeedKeno.isVisible" label="동행스피드키노" value="CompanionSpeedKeno"></el-option>
          <el-option v-if="gameSettings.Mini.companion && gameSettings.CompanionKenoLadder.isVisible" label="동행키노사다리" value="CompanionKenoLadder"></el-option>
          <el-option v-if="gameSettings.Mini.companion && gameSettings.CompanionPowerBall.isVisible" label="동행스피드키노" value="CompanionPowerBall"></el-option>
          <el-option v-if="gameSettings.Mini.companion && gameSettings.CompanionPowerLadder.isVisible" label="동행키노사다리" value="CompanionPowerLadder"></el-option>
        </el-select>
        <el-select v-if="gameSettings.Mini.token" v-model="gameType8" placeholder="Select" @change="handleSelectGames8" :class="`mini-select-${themeType}`" size="medium">
          <el-option v-if="gameSettings.TokenPowerBall.isVisible" label="토큰파워볼" value="TokenPowerBall"></el-option>
          <el-option v-if="gameSettings.TokenRoullete.isVisible" label="토큰룰렛" value="TokenRoullete"></el-option>
          <el-option v-if="gameSettings.TokenHilo.isVisible" label="토큰하이로우" value="TokenHilo"></el-option>
          <el-option v-if="gameSettings.TokenHilo5.isVisible" label="토큰하이로우5" value="TokenHilo5"></el-option>
          <el-option v-if="gameSettings.TokenGraph.isVisible" label="토큰그래프" value="TokenGraph"></el-option>
          <el-option v-if="gameSettings.TokenBaccarat.isVisible" label="토큰바카라" value="TokenBaccarat"></el-option>
          <el-option v-if="gameSettings.TokenHorse.isVisible" label="토큰가상경마" value="TokenHorse"></el-option>
          <el-option v-if="gameSettings.TokenWheel.isVisible" label="토큰휠" value="TokenWheel"></el-option>
          <el-option v-if="gameSettings.TokenRacing3.isVisible" label="토큰레이싱3" value="TokenRacing3"></el-option>
          <el-option v-if="gameSettings.TokenRacing4.isVisible" label="토큰레이싱4" value="TokenRacing4"></el-option>
        </el-select>
      </div>
    </el-row>
    <!-- 배팅내역 서브 탭 끝 -->
    <!-- 배팅내역 -->
    <div class="col-md-12 p-0">
      <div class="col-md-12 p-0 m-0 m-t-10 m-b-20 width-full height-full display-inlineblock">
        <el-row v-if="betLogs && !log.isDeleted" v-for="(log, index) in betLogs" :key="index">
          <MiniBetLog :betLog="log" />
        </el-row>
      </div>
      <el-row v-if="betLogs && betLogs.length > 0" class="display-inlineblock width-full">
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
      <el-row v-if="!betLogs || betLogs.length == 0" class="width-full display-center">
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          해당 게임에 배팅내역이 존재하지 않습니다.
        </el-row>
      </el-row>
    </div>
    <!-- 배팅내역 끝 -->
  </el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import MiniBetLog from "~/components/BettingHistory/MiniBetLog";
import OwlCarousel from 'vue-owl-carousel'

const miniGameBetLogsService = feathers.service("miniBetting");
const mainService = feathers.service("main");
miniGameBetLogsService.timeout = 60000;

export default {
  components: {
    MiniBetLog, // 미니게임 배팅내역 콤포넌트
    OwlCarousel
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      gameSettings: "getGameSettings"
    }),
  },
  data() {
    return {
      gameType: "PowerBall", // 게임타입
      betLogs: [], // 배팅내역
      total: 0, // 배팅내역 전체갯수
      gameType1: '파워볼',
      gameType2: '보스코어',
      gameType3: '로투스',
      gameType4: '스포츠코어',
      gameType5: '슈어맨',
      gameType6: '네임드',
      gameType7: '동행복권',
      gameType8: '토큰게임',
      gameType9: 'MGM',
      listQuery: {
        gameType: "",
        userLoginId: "",
        page: 1,
        limit: 8,
      },
    };
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);
    this.getList();

    // 파워볼 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogPowerBall");
    mainService.on("miniBetLogPowerBall", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // 파워사다리 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNtryPLadder");
    mainService.on("miniBetLogNtryPLadder", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // 키노사다리 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNtryKLadder");
    mainService.on("miniBetLogNtryKLadder", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // 스피드키노 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNtrySpeedKeno");
    mainService.on("miniBetLogNtrySpeedKeno", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 1분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogEOSPowerBall1");
    mainService.on("miniBetLogEOSPowerBall1", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 2분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogEOSPowerBall2");
    mainService.on("miniBetLogEOSPowerBall2", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 3분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogEOSPowerBall3");
    mainService.on("miniBetLogEOSPowerBall3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 4분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogEOSPowerBall4");
    mainService.on("miniBetLogEOSPowerBall4", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogEOSPowerBall5");
    mainService.on("miniBetLogEOSPowerBall5", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedPowerBall3");
    mainService.on("miniBetLogNamedPowerBall3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedPowerBall5");
    mainService.on("miniBetLogNamedPowerBall5", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedLadder3");
    mainService.on("miniBetLogNamedLadder3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedLadder5");
    mainService.on("miniBetLogNamedLadder5", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedRedPowerBall");
    mainService.on("miniBetLogNamedRedPowerBall", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogNamedRedLadder");
    mainService.on("miniBetLogNamedRedLadder", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSurePowerBall1");
    mainService.on("miniBetLogSurePowerBall1", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSurePowerBall2");
    mainService.on("miniBetLogSurePowerBall2", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSurePowerBall3");
    mainService.on("miniBetLogSurePowerBall3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureLadder1");
    mainService.on("miniBetLogSureLadder1", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureLadder2");
    mainService.on("miniBetLogSureLadder2", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureLadder3");
    mainService.on("miniBetLogSureLadder3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureRacing1");
    mainService.on("miniBetLogSureRacing1", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureRacing2");
    mainService.on("miniBetLogSureRacing2", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogSureRacing3");
    mainService.on("miniBetLogSureRacing3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogCompanionSpeedKeno");
    mainService.on("miniBetLogCompanionSpeedKeno", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogCompanionKenoLadder");
    mainService.on("miniBetLogCompanionKenoLadder", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogCompanionPowerBall");
    mainService.on("miniBetLogCompanionPowerBall", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogCompanionPowerLadder");
    mainService.on("miniBetLogCompanionPowerLadder", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenPowerBall");
    mainService.on("miniBetLogTokenPowerBall", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenRoullete");
    mainService.on("miniBetLogTokenRoullete", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenHilo");
    mainService.on("miniBetLogTokenHilo", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenHilo5");
    mainService.on("miniBetLogTokenHilo5", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenGraph");
    mainService.on("miniBetLogTokenGraph", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenBaccarat");
    mainService.on("miniBetLogTokenBaccarat", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenHorse");
    mainService.on("miniBetLogTokenHorse", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenWheel");
    mainService.on("miniBetLogTokenWheel", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenRacing3");
    mainService.on("miniBetLogTokenRacing3", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // EOS 파워볼 5분 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogTokenRacing4");
    mainService.on("miniBetLogTokenRacing4", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
    // 배팅내역 정산후 결과 패치
    mainService.off("miniBetLogBetEastFootball");
    mainService.on("miniBetLogBetEastFootball", (betLog) => {
      this.betLogs.forEach((item) => {
        if (item._id == betLog._id) {
          item.status = betLog.status;
          item.betResult = betLog.betResult;
          item.earnMoney = betLog.earnMoney;
        }
      });
    });
  },
  destroyed() {
    mainService.off("miniBetLogPowerBall");
    mainService.off("miniBetLogNtryPLadder");
    mainService.off("miniBetLogNtryKLadder");
    mainService.off("miniBetLogNtrySpeedKeno");
    mainService.off("miniBetLogEOSPowerBall1");
    mainService.off("miniBetLogEOSPowerBall2");
    mainService.off("miniBetLogEOSPowerBall3");
    mainService.off("miniBetLogEOSPowerBall4");
    mainService.off("miniBetLogEOSPowerBall5");
    mainService.off("miniBetLogNamedPowerBall3");
    mainService.off("miniBetLogNamedPowerBall5");
    mainService.off("miniBetLogNamedLadder3");
    mainService.off("miniBetLogNamedLadder5");
    mainService.off("miniBetLogNamedRedPowerBall");
    mainService.off("miniBetLogNamedRedLadder");
    mainService.off("miniBetLogSurePowerBall1");
    mainService.off("miniBetLogSurePowerBall2");
    mainService.off("miniBetLogSurePowerBall3");
    mainService.off("miniBetLogSureLadder1");
    mainService.off("miniBetLogSureLadder2");
    mainService.off("miniBetLogSureLadder3");
    mainService.off("miniBetLogSureRacing1");
    mainService.off("miniBetLogSureRacing2");
    mainService.off("miniBetLogSureRacing3");
    mainService.off("miniBetLogCompanionSpeedKeno");
    mainService.off("miniBetLogCompanionKenoLadder");
    mainService.off("miniBetLogCompanionPowerBall");
    mainService.off("miniBetLogCompanionPowerLadder");
    mainService.off("miniBetLogTokenPowerBall");
    mainService.off("miniBetLogTokenRoullete");
    mainService.off("miniBetLogTokenHilo");
    mainService.off("miniBetLogTokenHilo5");
    mainService.off("miniBetLogTokenGraph");
    mainService.off("miniBetLogTokenBaccarat");
    mainService.off("miniBetLogTokenHorse");
    mainService.off("miniBetLogTokenWheel");
    mainService.off("miniBetLogTokenRacing3");
    mainService.off("miniBetLogTokenRacing4");
    mainService.off("miniBetLogBetEastFootball");
  },
  methods: {
    // 배팅내역 리스트 얻기
    getList() {
      if (!this.currentUser) return;
      this.$nuxt.$loading.start();
      this.betLogs = [];

      var query = {
        limit: this.listQuery.limit || 8,
        page: this.listQuery.page,
      };
      if (this.gameType !== "") query.gameType = this.gameType;

      miniGameBetLogsService
        .find({ query: query })
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.betLogs = res.data.data;
            this.total = res.data.total;
          }
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.$nuxt.$loading.finish();
        });
    },
    // 현재 페이지 선택
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 게임타입선택
    onClickGameType(val) {
      this.gameType = val;
      this.getList();
    },
    // 엔트리 게임선택
    handleSelectGames1(){
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType1;
      this.getList();
    },
    // 보스코어 게임선택
    handleSelectGames2(){
      this.gameType1 = "엔트리"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType2;
      this.getList();
    },
    // 로투스 게임선택
    handleSelectGames3(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType3;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames4(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType4;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames5(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType5;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames6(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType6;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames7(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType8 = "토큰게임"
      this.gameType9 = "MGM"
      this.gameType = this.gameType7;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames8(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType9 = "MGM"
      this.gameType = this.gameType8;
      this.getList();
    },
    // 스포츠코어 게임선택
    handleSelectGames9(){
      this.gameType1 = "엔트리"
      this.gameType2 = "보스코어"
      this.gameType3 = "로투스"
      this.gameType4 = "스포츠코어"
      this.gameType5 = "슈어맨"
      this.gameType6 = "네임드"
      this.gameType7 = "동행복권"
      this.gameType8 = "토큰게임"
      this.gameType = this.gameType9;
      this.getList();
    },
    // 메시지 모달
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
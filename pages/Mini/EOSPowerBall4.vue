<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="`panel-page-${themeType}`">
    <div class="panel-heading games-navigation p-0 height-5" :class="{'bg-orange12-page': layoutType == 'layout2'}">
      <MiniHeader :miniGameType="23" />
    </div>
    <div class="panel-body position-relative height-full" :class="`mini-page-bg-${themeType}`" data-height="100%">
      <Check v-show="!isCheck" :themeType="themeType" />
      <div class="bg-black-darker">
        <div class="panel-collapse collapse in playerbox3 minibg">
          <div id="mini-game-frame-container">
            <div id="mini-game-frame-container-in">
              <iframe id="myframe" :src="baseUrl" width="830" height="641" scrolling="no" frameborder="0" class="mini-game-frame"></iframe>
            </div>
          </div>
          <!-- 배팅패널 -->
          <el-col class="mini-bet-panel">
            <el-row>
              <el-row class="p-5 height-50">
                <el-col class="height-full bg-brown text-brown f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" :span="4">회차</el-col>
                <el-col class="height-full bg-brown1 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" style="border-right: 2px solid #996148" :span="8">{{currentGameInfo ? currentGameInfo.round : 0}}회차 ({{currentGameInfo ? currentGameInfo.times : 0}})</el-col>
                <el-col class="height-full bg-brown text-brown f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-14'" style="border-left: 2px solid #996148" :span="4">
                  {{miniBettingEndText}}
                </el-col>
                <el-col class="height-full bg-brown1 f-w-700 display-center" :class="isMobile ? 'f-s-12' : 'f-s-15'" :span="8">{{remainTime}}</el-col>
              </el-row>
              <el-row v-if="gameSettings.EOSPowerBall4.canBetMix" style="border-top: 5px solid #f4e1c0;">
                <el-col :span="12">
                  <div :class= "betType === 0 ? 'mini-bet-type-on' : 'mini-bet-type'" @click="onSelectBetType(0)">일반배팅</div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <div :class= "betType === 0 ? 'mini-bet-type' : 'mini-bet-type-on'" @click="onSelectBetType(1)">조합배팅</div>
                  </el-row>
                </el-col>
              </el-row>
              <!-- 일반배팅 -->
              <el-row v-if="betType === 0">
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}">
                      {{gameSettings.EOSPowerBall4.canBetMix ? '파워볼' : '파워볼 홀짝'}}
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('power-odd', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/odd.png'"></el-row>
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('power-even', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/even.png'"></el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.canBetNumber" :span="getSpan()">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-under', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/under.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">4.5</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.canBetNumber" :span="getSpan()">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-over', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/over.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">4.5</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row v-if="!gameSettings.EOSPowerBall4.canBetNumber" class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}">
                      {{gameSettings.EOSPowerBall4.canBetNumber ? '파워볼' : '파워볼 언더오버'}}
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('power-under', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/under.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">4.5</el-row>
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('power-over', gameSettings.EOSPowerBall4.powerBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/over.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">4.5</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}">
                      {{gameSettings.EOSPowerBall4.canBetNumber ? '일반볼' : '일반볼 홀짝'}}
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-odd', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/odd.png'"></el-row>
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-even', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/even.png'"></el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.canBetNumber" :span="getSpan()">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-under', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/under.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">72.5</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.canBetNumber" :span="getSpan()">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-over', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/over.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">72.5</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row v-if="!gameSettings.EOSPowerBall4.canBetNumber" class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}">
                      {{gameSettings.EOSPowerBall4.canBetNumber ? '일반볼' : '일반볼 언더오버'}}
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-under', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/under.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">72.5</el-row>
                    </div>
                  </el-col>
                  <el-col :span="getSpan()">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-over', gameSettings.EOSPowerBall4.normalBallOdds)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallOdds | filterOdds()}}</el-row>
                      <el-row :class="gameSettings.EOSPowerBall4.canBetNumber? 'm-t-12': ''"><img class="mini-bet-img" :src="'/image/mini/over.png'"></el-row>
                      <el-row class="f-w-700 mini-bet-base">72.5</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name word-keep" :class="{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}">
                      일반볼 구간별
                    </div>
                  </el-col>
                  <el-col :class="isMobile ? 'width-33pro' : 'width-27pro'">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-big', gameSettings.EOSPowerBall4.normalBallSize.high)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallSize.high | filterOdds()}}</el-row>
                      <el-row class="f-s-23 f-w-700 m-t-5">대</el-row>
                      <el-row class="mini-bet-base">81-130</el-row>
                      <img class="float-left mini-bet-img-size m-l-1" :class="{'m-t-m-14': !gameSettings.EOSPowerBall4.canBetNumber}" :src="'/image/mini/big.png'">
                    </div>
                  </el-col>
                  <el-col :class="isMobile ? 'width-33pro' : 'width-27pro'">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-middle', gameSettings.EOSPowerBall4.normalBallSize.normal)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallSize.normal | filterOdds()}}</el-row>
                      <el-row class="f-s-23 f-w-700 m-t-5">중</el-row>
                      <el-row class="mini-bet-base">65-80</el-row>
                      <img class="float-left mini-bet-img-size m-l-1" :class="{'m-t-m-14': !gameSettings.EOSPowerBall4.canBetNumber}" :src="'/image/mini/middle.png'">
                    </div>
                  </el-col>
                  <el-col :class="isMobile ? 'width-33pro' : 'width-27pro'">
                    <div class="mini-bet-button" :class="[{'height-79': !gameSettings.EOSPowerBall4.canBetNumber}, `mini-bet-button-${themeType}`]" @click="onClickBetButton('normal-small', gameSettings.EOSPowerBall4.normalBallSize.low)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallSize.low | filterOdds()}}</el-row>
                      <el-row class="f-s-23 f-w-700 m-t-5">소</el-row>
                      <el-row class="mini-bet-base">15-64</el-row>
                      <img class="float-left mini-bet-img-size m-l-1" :class="{'m-t-m-14': !gameSettings.EOSPowerBall4.canBetNumber}" :src="'/image/mini/small.png'">
                    </div>
                  </el-col>
                </el-row>
                <el-row v-if="gameSettings.EOSPowerBall4.canBetNumber" class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-140': !isMobile}">
                      파워볼 숫자
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 24 : 20">
                    <el-row>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-0', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/0.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-1', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/1.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-2', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/2.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-3', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/3.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-4', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/4.png'"></el-row>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row class="m-t-10">
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-5', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/5.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-6', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/6.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-7', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/7.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-8', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/8.png'"></el-row>
                        </div>
                      </el-col>
                      <el-col class="width-20pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-num-9', gameSettings.EOSPowerBall4.powerBallNumber)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBallNumber | filterOdds()}}</el-row>
                          <el-row class="m-t-8"><img class="mini-bet-num-img" :src="'/image/mini/9.png'"></el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-row>
              <!-- 일반배팅 끝 -->
              <!-- 조합배팅 -->
              <el-row v-else>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name">
                      파워볼 조합
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-odd-over', gameSettings.EOSPowerBall4.powerBall_OO_EU)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBall_OO_EU | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-over.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+오버</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-odd-under', gameSettings.EOSPowerBall4.powerBall_OU_EO)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBall_OU_EO | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-under.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+언더</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-even-over', gameSettings.EOSPowerBall4.powerBall_OU_EO)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBall_OU_EO | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-over.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+오버</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('power-even-under', gameSettings.EOSPowerBall4.powerBall_OO_EU)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.powerBall_OO_EU | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-under.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+언더</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name">
                      일반볼 조합
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-odd-over', gameSettings.EOSPowerBall4.normalBall_OO_EU)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBall_OO_EU | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-over.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+오버</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-odd-under', gameSettings.EOSPowerBall4.normalBall_OU_EO)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBall_OU_EO | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-under.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+언더</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-even-over', gameSettings.EOSPowerBall4.normalBall_OU_EO)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBall_OU_EO | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-over.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+오버</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-even-under', gameSettings.EOSPowerBall4.normalBall_OO_EU)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBall_OO_EU | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-under.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+언더</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name">
                      파워볼 일반볼 조합
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('odd-odd', gameSettings.EOSPowerBall4.mixBall)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.mixBall | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-odd.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+홀</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('odd-even', gameSettings.EOSPowerBall4.mixBall)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.mixBall | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/odd-even.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">홀+짝</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('even-odd', gameSettings.EOSPowerBall4.mixBall)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.mixBall | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-odd.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+홀</el-row>
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 6 : 5">
                    <div class="mini-bet-button" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('even-even', gameSettings.EOSPowerBall4.mixBall)">
                      <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.mixBall | filterOdds()}}</el-row>
                      <el-row class="m-t-12"><img :src="'/image/mini/even-even.png'"></el-row>
                      <el-row class="f-s-18 f-w-700">짝+짝</el-row>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="mini-bet-row">
                  <el-col :span="isMobile ? 24 : 4">
                    <div class="mini-bet-type-name" :class="{'height-140' : !isMobile}">
                      일반볼 조합
                    </div>
                  </el-col>
                  <el-col :span="isMobile ? 24 : 20">
                    <el-row>
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-odd-small', gameSettings.EOSPowerBall4.normalBallMix.small)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.small | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/odd-small.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">홀+소</el-row>
                        </div>
                      </el-col>
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-odd-middle', gameSettings.EOSPowerBall4.normalBallMix.middle)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.middle | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/odd-middle.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">홀+중</el-row>
                        </div>
                      </el-col>
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-odd-big', gameSettings.EOSPowerBall4.normalBallMix.big)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.big | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/odd-big.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">홀+대</el-row>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row class="m-t-10">
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-even-small', gameSettings.EOSPowerBall4.normalBallMix.small)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.small | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/even-small.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">짝+소</el-row>
                        </div>
                      </el-col>
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-even-middle', gameSettings.EOSPowerBall4.normalBallMix.middle)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.middle | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/even-middle.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">짝+중</el-row>
                        </div>
                      </el-col>
                      <el-col class="width-33pro">
                        <div class="mini-bet-button height-65" :class="`mini-bet-button-${themeType}`" @click="onClickBetButton('normal-even-big', gameSettings.EOSPowerBall4.normalBallMix.big)">
                          <el-row class="mini-bet-odds-value">{{gameSettings.EOSPowerBall4.normalBallMix.big | filterOdds()}}</el-row>
                          <el-row class="m-t-5"><img :src="'/image/mini/even-big.png'"></el-row>
                          <el-row class="f-s-14 f-w-700">짝+대</el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-row>
              <!-- 조합배팅 끝 -->
              <!-- 로크 -->
              <div v-show="!isBetAvailable" class="mini-bet-lock display-center">
                <img :src="layoutType == 'layout2' ? '/image/Mini/Ic_lock.png' : '/image/mini/Lock-Icon.png'">
              </div>
              <!-- 로크 끝 -->
            </el-row>
          </el-col>
          <!-- 배팅패널 끝 -->
        </div>
      </div>
      <el-row v-show="currentUser" class="m-t-13 display-inlineblock width-full">
        <el-row>
          <el-col :span="24">
            <div class="cursor" :class="`mini-history-tab-${themeType}`" @click="onClickHistoryTab(0)">EOS 파워볼 4분 배팅내역</div>
          </el-col>
        </el-row>
        <el-row class="m-l-3 m-b-10" style="width: calc(100% - 6px);" :class="{'bg-grey924 p-12': layoutType == 'layout2'}">
          <div v-if="betLogs && betLogs.length > 0" :class="`table-mbetlog-${themeType}`">
            <div class="table-header">
              <div class="text-center" :style="isMobile ? 'width: 70px' : 'width: 140px'">시간</div>
              <div class="text-center table-mbetlog-flex-field">배팅정보</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 110px'">배팅액</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">배팅접수</div>
              <div v-if="!isMobile" class="text-center" style="width: 100px">배팅결과</div>
              <div v-if="!isMobile" class="text-center" style="width: 110px">적중금액</div>
              <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">상태결과</div>
            </div>
            <el-row v-for="(betLog, index) in betLogs" :key="index">
              <el-row class="table-mbetlog-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
                <div class="display-center table-mbetlog-td-first" :style="isMobile ? 'width: 70px' : 'width: 140px'">
                  {{isMobile ? parseTime(betLog.createdAt, '{m}-{d} {h}:{i}') : parseTime(betLog.createdAt, '{y}-{m}-{d} {h}:{i}')}}
                </div>
                <div class="display-center table-mbetlog-td table-mbetlog-flex-field">
                  {{betLog.betInfo}} - {{betLog.round}} ({{betLog.times}}) 회차
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 110px'">
                  {{ betLog.betMoney | currencyFormat() }}
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">
                  <span :class="betLog.betType | betTypeClassObject()">
                    {{ filterBetType(betLog.gameType, betLog.betType) }}
                  </span>
                </div>
                <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width: 100px">
                  <span :class="betLog.betResult | betTypeClassObject()">
                    {{ filterBetType(betLog.gameType, betLog.betResult) }}
                  </span>
                </div>
                <div v-if="!isMobile" class="table-mbetlog-td display-center" style="width: 110px">
                  {{ betLog.earnMoney | currencyFormat() }}
                </div>
                <div class="table-mbetlog-td display-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">
                  <div :class="betLog.status | statusClassObject(themeType)">
                    {{betLog.status === 0 ? '대기' :betLog.status === 1? '낙첨' : betLog.status === 2? '당첨' : '취소'}}
                  </div>
                </div>
              </el-row>
            </el-row>
          </div>
          <el-row v-if="betLogs && betLogs.length == 0" class="p-20 text-white">
            <el-row v-if="layoutType == 'layout2'" class="text-center m-b-30">
              <img :src="'/image/Mini/noslip.svg'">
            </el-row>
            <el-row class="text-center">
              해당 게임에 배팅내역이 존재하지 않습니다.
            </el-row>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
  <Preview v-show="!currentUser"/>
</el-row>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import { currencyFormat, parseTime, filterOdds } from '~/assets/js/utils'
import { filterBetType } from '~/assets/js/data/datamanagement.js'
import { statusClassObject, betTypeClassObject } from '~/assets/js/data/uicommon.js'
import MiniHeader from '~/components/Mini/MiniHeader.vue'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check'

const popupRouter = "EOSPowerBall4"

const minigameInfoService = feathers.service('getMiniGameInfo')
const mainService = feathers.service('main')

minigameInfoService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  components: {
    MiniHeader,   // 미니게임 헤더 콤포넌트
    Preview,      // 로그인유도 콤포넌트
    Check
  },
  filters: {
    currencyFormat,
    filterOdds,
    statusClassObject,
    betTypeClassObject
  },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      currentUser: 'auth/currentUser',                        // 유저정보
      screenWidth: "getScreenWidth",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      EOSPowerBall4Bet: "getEOSPowerBall4Bet",
      miniBettingEndText: "getMiniBettingEndText"
    })
  },
  data() {
    return {
      isBetAvailable: true,                                       // 배팅가능상태
      baseUrl: "https://ntry.com/scores/eos_powerball/4min/main.php",               // 파워볼 중계 URL
      remainTime: "00:00",                                        // 회차 남은시간
      currentGameInfo: null,                                      // 현재 회차정보
      betLogs: null,                                              // 배팅내역
      betType: 0,                                                 // 배팅타입 일반인가 조합인가
      historyType: 0,                                             // 지난회차인가 배팅내역인가
      gameType: "EOSPowerBall4",                                  // 게임타입
      remainMins: 0,
      remainSecs: 0,
      calculateTime: null,
      isCheck: true
    };
  },
  watch: {
    EOSPowerBall4Bet(val) {
      this.isBetAvailable = !Boolean(val)
    },
    gameSettings(val) {
      this.isBetAvailable = !Boolean(val.gameStatus_socket || val.EOSPowerBall4.gameStatus_auto || val.EOSPowerBall4.gameStatus_manual)
      this.isCheck = !Boolean(val.gameStatus_socket || val.EOSPowerBall4.gameStatus_manual)
    },
    isBetAvailable(val){
      this.deleteBettingSlip()
    },
    screenWidth(val) {
      this.initframe()
    }
  },
  updated(){
    this.$store.commit('initTimeLeft')
  },
  created() {
    if (!this.gameSettings.EOSPowerBall4.isVisible || !this.gameSettings.Mini.ntry) this.$router.push("/")
    
    this.getInitInfo()
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Mini-EOSPowerBall4')
    this.initframe()
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
    this.$store.commit("SET_MINIGAMETYPE", 0)

    // 게임셋팅정보 배팅슬립정보 설정
    let userLevel = this.currentUser ? this.currentUser.level : 2
    let levelSetting = this.gameSettings.EOSPowerBall4.levelSetting[this.gameSettings.EOSPowerBall4.levelSetting.findIndex(setting => setting.level == userLevel)]

    this.isBetAvailable = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.EOSPowerBall4.gameStatus_auto | this.gameSettings.EOSPowerBall4.gameStatus_manual)
    this.isCheck = !Boolean(this.gameSettings.gameStatus_socket | this.gameSettings.EOSPowerBall4.gameStatus_manual)

    this.$store.commit("betslip/SET_MIN_BET_MONEY", levelSetting.minBetMoney)
    this.$store.commit("betslip/SET_MAX_BET_MONEY", levelSetting.maxBetMoney)
    this.$store.commit("betslip/SET_MAX_WIN_MONEY", levelSetting.maxWinMoney)
    this.$store.commit("betslip/SET_MAX_BET_ODDS", levelSetting.maxOdds)
    
    this.deleteBettingSlip()

    // 회차 남은 시간 계산
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime()
    }, 1000)

    // 미니게임 새 회차정보 패치
    mainService.off('miniGameEOSPowerBall4Round'),
    mainService.on('miniGameEOSPowerBall4Round', ( currentGameInfo ) => {
      if(currentGameInfo) {
        this.currentGameInfo.times = currentGameInfo.times
        this.currentGameInfo.round = currentGameInfo.round
        this.currentGameInfo._id = currentGameInfo.gameId
        this.isBetAvailable = !Boolean(currentGameInfo.status)
        let data = currentGameInfo.data
      }
      else {
        this.isBetAvailable = false    //베팅 불가상태
      }
    })

    // 회차시작이벤트
    mainService.off('miniGameEOSPowerBall4Time')
    mainService.on('miniGameEOSPowerBall4Time', (state) => {
      this.remainMins = 3
      this.remainSecs = 59
    })

    // 배팅내역 창조시 배팅내역에 추가
    mainService.off('miniBetLogCreated')
    mainService.on('miniBetLogCreated', (betLog) => {
      if (betLog.gameType === this.gameType && betLog.userid === this.currentUser._id) {
        if(this.betLogs.length > 8) {
          this.betLogs.splice(this.betLogs.length - 1, 1)
          this.betLogs.unshift(betLog)
        } else {
          this.betLogs.unshift(betLog)
        }
      }
    })

    // 배팅내역 정산후 결과 패치
    mainService.off('miniBetLogEOSPowerBall4')
    mainService.on('miniBetLogEOSPowerBall4', (betLog) => {
      this.betLogs.forEach(item => {
        if (item._id === betLog._id) {
          item.status = betLog.status
          item.betResult = betLog.betResult
          item.earnMoney = betLog.earnMoney
        }
      });
    })
  },
  destroyed () {
    clearInterval(this.calculateTime)
    mainService.off('miniGameEOSPowerBall4Round')
    mainService.off('miniGameEOSPowerBall4Time')
    mainService.off('miniBetLogCreated')
    mainService.off('miniBetLogEOSPowerBall4')
  },
  methods: {
    filterBetType,
    parseTime,
    // 페이지 로딩시 게임타입과 유저레벨에 따르는 게임셋팅값과 현재 회차정보, 지난 회차, 배팅내역을 얻는다
    async getInitInfo() {
      try {
        let res = await minigameInfoService.find({ query: { gameType: popupRouter }})
        
        if (res.code != 1) {
          console.log(res.message)
          return
        }

        this.currentGameInfo = res.data.currentGame                        // 현재 회차정보

        // 현재 회차정보 설정
        if(!this.currentGameInfo) {
          this.currentGameInfo = {
            times: null,
            round: null
          }
          this.isBetAvailable = false
        } else {
          this.remainMins = this.currentGameInfo.remainMins
          this.remainSecs = this.currentGameInfo.remainSecs
        }
        
        this.$store.commit("SET_MiniBet", {gameType: this.gameType, status: res.data.betChance})
        if (res.data.betLogs != null) this.betLogs = res.data.betLogs.data      // 배팅내역
      } catch (err) {
        console.log(err.message)
      }
    },
    // 프레임사이즈 설정
    initframe() {
      if (this.isMobile) {
        let s = window.innerWidth / 589;
        let aleft = (-1) * (1 - s) * 415 - s * 241;
        let atop = (-1) *(1 - s) * 320;
        let aheight = s * 641;
        jQuery('#myframe').css('left', aleft);
        jQuery('#myframe').css('top', atop);
        jQuery('#myframe').css('transform', "scale(" + s + "," + s + ")");
        jQuery('#mini-game-frame-container-in').css('height', aheight);
      } else {
        if (this.screenWidth > 1600) {
          jQuery('#myframe').css('left', 0);
          jQuery('#myframe').css('transform', "scale(1, 1)");
        } else if (this.screenWidth > 1440 && this.screenWidth <= 1600) {
          jQuery('#myframe').css('left', -241);
        } else if (this.screenWidth <= 1440) {
          jQuery('#myframe').css('transform', "scale(1, 1) translateX(-241px)");
        }
        
        jQuery('#myframe').css('top', 0);
        jQuery('#mini-game-frame-container-in').css('height', 641);
      }
    },
    // 배팅하기
    onClickBetButton(betType, odds) {
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return
      }

      if (!this.isBetAvailable) {
        this.showMessage('알림메시지', "배팅을 할수 없는 상태입니다.", '닫기[Close]', 2)
        return
      }

      // 현재 회차정보를 얻지 못한 경우
      if (this.currentGameInfo === null) {
        this.showMessage('알림메시지', "현재 회차정보를 얻지 못하여 배팅을 할수 없습니다.", '닫기[Close]', 2)
        return
      }
      // 배팅슬립 초기화
      this.deleteBettingSlip()

      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.gameType,
        gameId: this.currentGameInfo._id,
        betType: betType,
        times: this.currentGameInfo.times,
        round: this.currentGameInfo.round,
        leagueName: "파워볼",
        betTypeName: "파워볼-" + this.currentGameInfo.round + " (" + this.currentGameInfo.times + ") 회차",
        betName: this.getBetNameFromType(betType),
        odds: odds
      }
      this.$store.commit('betslip/SET_BETSLIPLIST', data)
    },
    // 베팅타입으로 부터 디테일정보 얻기
    getBetNameFromType ( strTeamName ){
      var strLabel = '';
      switch (strTeamName){
        case 'power-odd': strLabel += '홀 (파워볼 홀/짝 맞추기)'; break;
        case 'power-even': strLabel += '짝 (파워볼 홀/짝 맞추기)'; break;
        case 'power-under': strLabel += '언더 (파워볼 언더/오버 맞추기)'; break;
        case 'power-over': strLabel += '오버 (파워볼 언더/오버 맞추기)'; break;
        case 'normal-odd': strLabel += '홀 (일반볼 홀/짝 맞추기)'; break;
        case 'normal-even': strLabel += '짝 (일반볼 홀/짝 맞추기)'; break;
        case 'normal-under': strLabel += '언더 (일반볼 언더/오버 맞추기)'; break;
        case 'normal-over': strLabel += '오버 (일반볼 언더/오버 맞추기)'; break;
        case 'normal-big': strLabel += '대 (일반볼 구간 맞추기)'; break;
        case 'normal-middle': strLabel += '중 (일반볼 구간 맞추기)'; break;
        case 'normal-small': ; strLabel += '소 (일반볼 구간 맞추기)'; break;
        case 'power-num-0': ; strLabel += '0 (파워볼 숫자 맞추기)'; break;
        case 'power-num-1': ; strLabel += '1 (파워볼 숫자 맞추기)'; break;
        case 'power-num-2': ; strLabel += '2 (파워볼 숫자 맞추기)'; break;
        case 'power-num-3': ; strLabel += '3 (파워볼 숫자 맞추기)'; break;
        case 'power-num-4': ; strLabel += '4 (파워볼 숫자 맞추기)'; break;
        case 'power-num-5': ; strLabel += '5 (파워볼 숫자 맞추기)'; break;
        case 'power-num-6': ; strLabel += '6 (파워볼 숫자 맞추기)'; break;
        case 'power-num-7': ; strLabel += '7 (파워볼 숫자 맞추기)'; break;
        case 'power-num-8': ; strLabel += '8 (파워볼 숫자 맞추기)'; break;
        case 'power-num-9': ; strLabel += '9 (파워볼 숫자 맞추기)'; break;
        case 'power-odd-over': ; strLabel += '홀+오버 (파워볼 홀+언더/오버 맞추기)'; break;
        case 'power-odd-under': ; strLabel += '홀+언더 (파워볼 홀+언더/오버 맞추기)'; break;
        case 'power-even-over': ; strLabel += '짝+오버 (파워볼 짝+언더/오버 맞추기)'; break;
        case 'power-even-under': ; strLabel += '짝+언더 (파워볼 짝+언더/오버 맞추기)'; break;
        case 'normal-odd-over': ; strLabel += '홀+오버 (일반볼 홀+언더/오버 맞추기)'; break;
        case 'normal-odd-under': ; strLabel += '홀+언더 (일반볼 홀+언더/오버 맞추기)'; break;
        case 'normal-even-over': ; strLabel += '짝+오버 (일반볼 짝+언더/오버 맞추기)'; break;
        case 'normal-even-under': ; strLabel += '짝+언더 (일반볼 짝+언더/오버 맞추기)'; break;
        case 'odd-odd': ; strLabel += '홀+홀 (파워볼 일반볼 조합 맞추기)'; break;
        case 'odd-even': ; strLabel += '홀+짝 (파워볼 일반볼 조합 맞추기)'; break;
        case 'even-odd': ; strLabel += '짝+홀 (파워볼 일반볼 조합 맞추기)'; break;
        case 'even-even': ; strLabel += '짝+짝 (파워볼 일반볼 조합 맞추기)'; break;
        case 'normal-odd-small': ; strLabel += '홀+소 (일반볼 조합 맞추기)'; break;
        case 'normal-odd-middle': ; strLabel += '홀+중 (일반볼 조합 맞추기)'; break;
        case 'normal-odd-big': ; strLabel += '홀+대 (일반볼 조합 맞추기)'; break;
        case 'normal-even-small': ; strLabel += '짝+소 (일반볼 조합 맞추기)'; break;
        case 'normal-even-middle': ; strLabel += '짝+중 (일반볼 조합 맞추기)'; break;
        case 'normal-even-big': ; strLabel += '짝+대 (일반볼 조합 맞추기)'; break;
      }
      return strLabel;
    },
    // 경기시간계산
    calculateGameRemainTime() {
      this.remainSecs --;
      if (this.remainSecs < 0) {
        this.remainSecs = 59
        this.remainMins --;
        if (this.remainMins < 0) this.remainMins = 3
      }

      if (this.remainSecs < 10) this.remainTime = this.remainMins + ":0" + this.remainSecs
      else this.remainTime = this.remainMins + ":" + this.remainSecs
    },
    // 배팅슬립 삭제
    deleteBettingSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", [])
    },
    // 일반 조합배팅 탭선택
    onSelectBetType(val) {
      this.betType = val
    },
    // 지난 회차, 배팅내역 탭선택
    onClickHistoryTab(val) {
      this.historyType = val
    },
    // 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    },
    // span 얻기
    getSpan() {
      if (this.gameSettings.EOSPowerBall4.canBetNumber) {
        return this.isMobile ? 6 : 5
      } else {
        return this.isMobile ? 12 : 10
      }
    }
  }
}
</script>

<style lang="css" src="~/assets/css/mini.css"></style>
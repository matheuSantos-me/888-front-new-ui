<template>
<el-row class="width-full">
  <div class="animated fadeInDown panel panel-inverse" :class="[`panel-page-${themeType}`, {'p-0 max-w-1920': layoutType == 'layout5'}]">
    <div class="panel-heading width-full" :class="[getPageBackColor(themeType), {'p-4': layoutType != 'layout2', 'p-8': layoutType == 'layout2' && isMobile}]">
      <!-- 배너 시작 -->
      <el-row>
        <img v-if="(themeType != 'green' && themeType != 'yellow20' && themeType != 'red12' && themeType != 'blue17' && themeType != 'gold11' && themeType != 'orange14' && layoutType != 'layout2' && themeType != 'gold13' && themeType != 'yellow17' && themeType != 'blue15' && themeType != 'blue19' && themeType != 'blue11' && themeType != 'yellow11' && themeType != 'blue13' && themeType != 'red15' && themeType != 'blue12') || (themeType == 'blue19' && isMobile) || (themeType == 'yellow17' && !isMobile)" 
          :src="`/image/Casino/${themeType}/banner.png`"  :id="themeType == 'yellow20' ? 'main-banner-img' : ''" :class="{'width-full' : themeType != 'yellow20'}">
        <img v-if="themeType == 'orange12' || themeType == 'yellow20' || themeType == 'blue17' || themeType == 'blue12' || themeType == 'red12' || themeType == 'gold11' || themeType == 'orange14' || themeType == 'blue15' || themeType == 'blue11' || themeType == 'yellow11' || themeType == 'blue13' || themeType == 'red15'" 
          :src="isMobile ? `/image/Casino/${themeType}/banner-mob.png` : `/image/Casino/${themeType}/banner.png`" class="width-full">
        <img v-if="themeType == 'green' && type == 1" :src="`/image/Casino/${themeType}/Live-Casino-Banner.jpg`" class="width-full">
        <img v-if="themeType == 'green' && type == 2" :src="`/image/Casino/${themeType}/Slot-Games-Banner.jpg`" class="width-full">
        <div v-if="themeType == 'blue13'" class="carousel-caption-blue13">
          <!-- <div class="text-white text-left" :class="isMobile ? 'p-l-10' : 'p-l-50'">
            <img :src="`/image/Home/${themeType}/logo3.png`" :style="isMobile ? 'width: 150px' : 'width: 385px'">
            <p class="fadeInUpBig animated">
              <strong>공정성이 검증된 글로벌 메이저 영상사 제공<br></strong>
            </p>
          </div> -->
        </div>
        <div v-if="themeType == 'yellow11'" class="carousel-caption-yellow11">
          <div class="text-white text-left p-l-50">
            <img :src="`/image/Home/${themeType}/logo3.png`">
            <p class="fadeInUpBig animated">
              <strong>더 높은 곳에 도달할 수 있도록</br><span style="padding-left: 163px;">날개를 달아줄게요.</span></strong>
            </p>
          </div>
        </div>
      </el-row>
      <div v-if="layoutType == 'layout2' || themeType == 'yellow15'" :class="isMobile ? 'm-t-24 m-b-12' : 'm-t-48'" class="width-full">
        <OwlCarousel v-if="isMobile" :autoWidth="true" :nav="false" :dots="false" :margin="isMobile ? 16 : 24">
          <div :class="[{'on': type == 0}, `casino-tab-${themeType}`]" @click="onSelectType(0)">
            <img :src="`/image/Casino/${themeType}/main.png`" class="img-main width-16 float-left">
            <div class="float-left m-l-12">Main</div>
          </div>
          <div :class="[{'on': type == 1}, `casino-tab-${themeType}`]" @click="onSelectType(1)">
            <img :src="`/image/Casino/${themeType}/live.png`" class="img-live width-16 float-left">
            <div class="float-left m-l-12">라이브 카지노</div>
          </div>
          <div :class="[{'on': type == 2}, `casino-tab-${themeType}`]" @click="onSelectType(2)">
            <img :src="`/image/Casino/${themeType}/slot.png`" class="img-slot width-24 float-left">
            <div class="float-left m-l-12">슬롯 게임</div>
          </div>
        </OwlCarousel>
        <el-row v-if="isMobile" class="m-t-24">
          <div style="border: 1px solid #585858; border-radius: 24px; padding: 12px 24px; display: inline-block;" @click="onShowProvider()">
            게임사 선택 <i class="fa fa-chevron-down m-l-24"></i>
          </div>
        </el-row>
        <el-row v-if="!isMobile">
          <div class="m-r-24" :class="[{'on': type == 0}, `casino-tab-${themeType}`]" @click="onSelectType(0)">
            <div class="float-left"><img :src="`/image/Casino/${themeType}/main.png`" class="img-main"></div>
            <div class="float-left m-l-12 m-t-2">Main</div>
          </div>
          <div class="m-r-24" :class="[{'on': type == 1}, `casino-tab-${themeType}`]" @click="onSelectType(1)">
            <div class="float-left"><img :src="`/image/Casino/${themeType}/live.png`" class="img-live"></div>
            <div class="float-left m-l-12 m-t-2">라이브 카지노</div>
          </div>
          <div class="m-r-24" :class="[{'on': type == 2}, `casino-tab-${themeType}`]" @click="onSelectType(2)">
            <div class="float-left"><img :src="`/image/Casino/${themeType}/slot.png`" class="img-slot"></div>
            <div class="float-left m-l-12 m-t-2">슬롯 게임</div>
          </div>
          <div :class="[{'on': isShowProvider}, `casino-tab-${themeType}`]" @click="onShowProvider()" data-toggle="collapse" data-target="#provider">
            <div class="float-left"><img :src="`/image/Casino/${themeType}/provider.png`" class="img-provider"></div>
            <div class="float-left m-l-12 m-t-2">게임사</div>
          </div>
        </el-row>
        <el-row v-if="!isMobile" class="m-t-24 collapse" id="provider">
          <div v-for="item in gameList" :key="item.Id" class="m-t-8 m-r-8" :class="[{'on': item.Id == selectedGames}, `casino-tab-${themeType}`]" @click="onSelectProvider(item.Id)">
            <div class="float-left m-t-2">{{item.Game}}</div>
          </div>
        </el-row>
      </div>
      <!-- 배너 끝 -->
      <el-row v-if="type == 0 || type == 1">
        <!-- 라이브 카지노 설명 -->
        <el-row v-if="layoutType != 'layout2' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14'" :class="`casino-banner-${themeType}`">
          <div class="float-left">
            <img :src="`/image/Casino/${themeType}/CardGame.png`" class="m-l-20 m-r-16" :class="`casino-banner-img-${themeType}`">
          </div>
          <div class="float-left" :style="isMobile ? 'width: 60%' : ''">
            <el-row class="f-w-700" :class="`casino-banner-text-${themeType}`">
              라이브 카지노
              <span v-if="themeType != 'yellow20'" class="f-s-14" :class="themeType == 'gold12' || themeType == 'yellow19' || themeType == 'yellow12' ? 'text-black' : 'text-white'">
                {{themeType == 'gold12' ? '공정성이 보장되는 라이브 카지노 게임 제공사가 준비되어 있습니다.' : '총 16개의 라이브 카지노 게임 제공사가 준비되어 있습니다.'}}
              </span>
            </el-row>
          </div>
        </el-row>
        <el-row v-if="layoutType == 'layout6' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14'" :class="[`casino-banner-${themeType}`]" class="height-48">
          <div class="float-left m-t-10 m-l-20">라이브 카지노</div>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" :class="isMobile ? 'm-t-12 m-b-12 f-s-14' : 'm-t-24 m-b-24 f-s-16'">
          <div class="float-left"><img :src="`/image/Casino/${themeType}/live.png`"></div>
          <div class="float-left m-l-12 m-t-2">라이브 카지노</div>
        </el-row>
        <!-- 라이브 카지노 설명 끝 -->
        <!-- 라이브 카지노 리스트 -->
        <el-row v-if="layoutType == 'layout5'">
          <el-row class="max-w-1280 m-t-24" :class="isMobile ? 'f-s-13' : 'f-s-20'">
            <el-row class="display-center">
              <img :src="`/image/Casino/${themeType}/CardGame.png`" :class="isMobile ? 'm-r-8' : 'm-r-16'" :width="isMobile ? 36 : 48">
              {{solutionTitle}}에서 제공하는 8개의 글로벌 카지노 영상사
            </el-row>
            <el-row class="display-center">
              테이블 카지노 영상사 바로 입장하기
            </el-row>
            <el-row style="display: flex; gap: 10px; margin: 24px 0;">
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(77, 0, true)">
                <img :src="'/image/bottom/black/Evolution.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(71, 0, true)">
                <img :src="'/image/bottom/black/Asia.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(1, 0, true)">
                <img :src="'/image/bottom/black/Vivo.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(69, 0, true)">
                <img :src="'/image/bottom/black/Micro.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(9, 0, true)">
                <img :src="'/image/bottom/black/Oriental.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(28, 0, true)">
                <img :src="'/image/bottom/black/Dream.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(5, 0, true)">
                <img :src="'/image/bottom/black/Sexy.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(62, 0, true)">
                <img :src="'/image/bottom/black/Taishan.png'" :height="isMobile ? '70%' : '100%'">
              </div>
            </el-row>
            <el-row v-if="isMobile" style="display: flex; gap: 10px; margin: 24px 0;">
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(9, 0, true)">
                <img :src="'/image/bottom/black/Oriental.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(28, 0, true)">
                <img :src="'/image/bottom/black/Dream.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(5, 0, true)">
                <img :src="'/image/bottom/black/Sexy.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(62, 0, true)">
                <img :src="'/image/bottom/black/Taishan.png'" :height="isMobile ? '70%' : '100%'">
              </div>
            </el-row>
            <el-row style="display: flex; gap: 10px; margin: 24px 0;">
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(15, 0, true)">
                <img :src="'/image/bottom/black/bbin.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(4, 0, true)">
                <img :src="'/image/bottom/black/allbet-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(66, 0, true)">
                <img :src="'/image/bottom/black/better-live-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(63, 0, true)">
                <img :src="'/image/bottom/black/dowinn-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(61, 0, true)">
                <img :src="'/image/bottom/black/motivaiton-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(73, 0, true)">
                <img :src="'/image/bottom/black/Prag.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(53, 0, true)">
                <img :src="'/image/bottom/black/skywind-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`" @click="onSelectGame(12, 0, true)">
                <img :src="'/image/bottom/black/wm-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
            </el-row>
            <el-row v-if="isMobile" style="display: flex; gap: 10px; margin: 24px 0;">
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(61, 0, true)">
                <img :src="'/image/bottom/black/motivaiton-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(73, 0, true)">
                <img :src="'/image/bottom/black/Prag.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(53, 0, true)">
                <img :src="'/image/bottom/black/skywind-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
              <div :class="`casino-button-${themeType}`" @click="onSelectGame(12, 0, true)">
                <img :src="'/image/bottom/black/wm-casino.png'" :height="isMobile ? '70%' : '100%'">
              </div>
            </el-row>
          </el-row>
          <OwlCarousel v-if="(themeType != 'blue19' && themeType != 'blue11') || ((themeType == 'blue19' || themeType == 'blue11') && !isMobile)" :items="isMobile ? 1 : themeType == 'blue19' || themeType == 'blue11' ? 4 : 2" :center="true" :loop="true" :nav="true" :dots="true" :margin="16" class="owl-casino">
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Evolution.png`" @click="onSelectGame(77, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Asia.png`" @click="onSelectGame(71, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Vivo.png`" @click="onSelectGame(1, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Micro.png`" @click="onSelectGame(69, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Oriental.png`" @click="onSelectGame(9, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Dream.png`" @click="onSelectGame(28, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Sexy.png`" @click="onSelectGame(5, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Taishan.png`" @click="onSelectGame(62, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Bbin.png`" @click="onSelectGame(15, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Allbet.png`" @click="onSelectGame(4, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Beter.png`" @click="onSelectGame(66, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Dowinn.png`" @click="onSelectGame(63, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Motivation.png`" @click="onSelectGame(61, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Pragmatic.png`" @click="onSelectGame(73, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/Sky.png`" @click="onSelectGame(53, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/banner/${themeType}/carousel/WM.png`" @click="onSelectGame(12, 0, true)">
            </div>
          </OwlCarousel>
        </el-row>
        <el-row v-if="themeType == 'gold13'">
          <OwlCarousel :items="isMobile ? 3 : 4" :center="false" :loop="false" :nav="true" :dots="true" :margin="16" :autoplay="true" class="owl-gold13">
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Evolution-banner.png`" @click="onSelectGame(77, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Asia-banner.png`" @click="onSelectGame(71, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Vivo-banner.png`" @click="onSelectGame(1, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Micro-banner.png`" @click="onSelectGame(69, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Oriental-banner.png`" @click="onSelectGame(9, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Dream-banner.png`" @click="onSelectGame(28, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Sexy-banner.png`" @click="onSelectGame(5, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Taishan-banner.png`" @click="onSelectGame(62, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Bbin-banner.png`" @click="onSelectGame(15, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/All-banner.png`" @click="onSelectGame(4, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Beter-banner.png`" @click="onSelectGame(66, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Dowinn-banner.png`" @click="onSelectGame(63, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Motivation-banner.png`" @click="onSelectGame(61, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Pragmatic-banner.png`" @click="onSelectGame(73, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/Sky-banner.png`" @click="onSelectGame(53, 0, true)">
            </div>
            <div>
              <img class="cursor" :src="`/image/casino/${themeType}/WM-banner.png`" @click="onSelectGame(12, 0, true)">
            </div>
          </OwlCarousel>
        </el-row>
        <el-row v-if="layoutType != 'layout5' && themeType != 'gold13'" class="text-center">
          <div v-for="(game, index) in liveCasinos" :key="`livecasino${index}`" v-if="getGameVisible(game.id)" class="live-game" 
            :class="layoutType == 'layout2' || themeType == 'blue13' || themeType == 'yellow11' ? `live-game-cont-${themeType}` : 'live-game-cont'" 
            @click="onSelectGame(game.id, 0, true)"> 
            <el-row :class="[{'b-r-6 overflow-hidden': layoutType == 'layout2'}, `live-game-btn-${themeType}`]">
              <img :src="`/image/Casino/${themeType}/${game.name}-banner.png`" width="100%" class="live-game-img">
              <el-row v-if="layoutType == 'layout2'" class="casino-over"></el-row>
              <el-row v-if="layoutType == 'layout2'" class="casino-comment">
                <div class="float-left m-t-8">{{getGameName(game.id)}}</div>
                <img v-if="layoutType == 'layout2'" :src="`/image/Home/${themeType}/arrow1.png`" class="float-right m-t-10">
              </el-row>
              <div v-if="getGameStatus(game.id, true) === 0" :class="`live-banner-${themeType}`"></div>
              <img v-if="getGameStatus(game.id, true) === 0 && layoutType != 'layout2' && layoutType != 'layout6' && themeType != 'blue13' && themeType != 'yellow11'" :src="'/image/Casino/play.png'" class="live-play">
              <div v-if="getGameStatus(game.id, true) === 0 && layoutType == 'layout2'" :class="`live-play-${themeType}`">
                <el-row>{{getGameName(game.id)}}</el-row>
                <div class="live-play-button">Play Now</div>
              </div>
              <img v-if="getGameStatus(game.id, true) === 1 && layoutType != 'layout2'" :src="'/image/Casino/check.png'" class="live-check">
              <div v-if="getGameStatus(game.id, true) === 1 && layoutType != 'layout2'" class="live-check-banner" :class="{'border-radius-20': themeType == 'orange11'}"></div>
              <el-row v-if="getGameStatus(game.id, true) === 1 && layoutType == 'layout2'" :class="`live-check-${themeType}`">
                <el-row>
                  <img :src="`/image/Casino/${themeType}/Check.png`" style="margin-top: 20%">
                </el-row>
                <el-row class="m-t-10 f-s-16">점검중</el-row>
              </el-row>
              <el-row v-if="layoutType == 'layout6'" class="live-game-layout6">
                {{getGameName(game.id)}}
              </el-row>
              <div v-if="themeType == 'blue13' || themeType == 'yellow11'" class="display-center" style="flex: 1 1;">
                <div :class="`casino-live-button-${themeType}`">{{getGameName(game.id)}}</div>
              </div>
            </el-row>
          </div>
        </el-row>
        <!-- 라이브 카지노 리스트 끝 -->
      </el-row>
      <el-row v-if="type == 0 || type == 2">
        <!-- 슬롯게임 설명 -->
        <el-row v-if="layoutType != 'layout2' && layoutType != 'layout5' && layoutType != 'layout6' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14'" :class="`casino-banner-${themeType}`">
          <div class="float-left">
            <img :src="`/image/Casino/${themeType}/Slot.png`" class="m-l-20 m-r-16" :class="`casino-banner-slot-${themeType}`">
          </div>
          <div class="float-left" :style="isMobile ? 'width: 60%' : ''">
            <el-row class="f-w-700" :class="`casino-banner-text-${themeType}`">
              슬롯 게임
              <span v-if="themeType != 'orange11' && themeType != 'white' && themeType != 'yellow20'" class="f-s-14" :class="themeType == 'gold12' || themeType == 'yellow19' || themeType == 'yellow12' ? 'text-black' : 'text-white'">공정성이 보장되는 1000여가지 메이저 슬롯들이 인기순으로 정렬</span>
            </el-row>
            <el-row v-if="themeType == 'orange11' || themeType == 'white'" class="f-w-700 m-t-5" 
              :class="{'text-red904': themeType == 'white'}">
              공정성이 보장되는 1000여가지 메이저 슬롯들이 인기순으로 정렬
            </el-row>
          </div>
          <div :class="`slot-select-container-${themeType}`">
            <el-select v-model="selectedGames" placeholder="Select" @change="handleSelectGames" :class="`slot-select-${themeType}`">
              <el-option v-for="item in gameList" :key="item.Id" :label="item.Game" :value="item.Id"></el-option>
            </el-select>
          </div>
          <div style="background: #0b0d10; padding: 4px" :class="isMobile ? 'width-full display-center': 'float-right m-r-16 b-r-6'">
            <input type="text" id="keywd" v-model="listQuery.searchKey" style="height: 34px; background: #14161b; color: #fff; font-size: 14px; border: 1px solid #14161b;" placeholder="게임명 검색" @keydown="onKeyDownSearchKey">
					  <button type="button" class="btn btn-sm m-t-m-3 m-l-2" style="background: #0b0d10 !important; color: #fff !important;" @click="onClickSearch"><i class="fa fa-search"></i></button>
          </div>
        </el-row>
        <el-row v-if="layoutType == 'layout6' || themeType == 'blue13' || themeType == 'gold13' || themeType == 'yellow11' || themeType == 'yellow14'" :class="[`casino-banner-${themeType}`, {'height-48': !isMobile}]">
          <div class="p-t-10 p-l-20 float-left">슬롯 게임</div>
          <div class="m-r-20" :class="`slot-select-container-${themeType}`">
            <el-select v-model="selectedGames" placeholder="Select" @change="handleSelectGames" :class="`slot-select-${themeType}`">
              <el-option v-for="item in gameList" :key="item.Id" :label="item.Game" :value="item.Id"></el-option>
            </el-select>
          </div>
          <div style="background: #0b0d10; padding: 4px" :class="isMobile ? 'width-full display-center': 'float-right m-r-16 b-r-6'">
            <input type="text" id="keywd" v-model="listQuery.searchKey" style="height: 34px; background: #14161b; color: #fff; font-size: 14px; border: 1px solid #14161b;" placeholder="게임명 검색" @keydown="onKeyDownSearchKey">
					  <button type="button" class="btn btn-sm m-t-m-3 m-l-2" style="background: #0b0d10 !important; color: #fff !important;" @click="onClickSearch"><i class="fa fa-search"></i></button>
          </div>
        </el-row>
        <el-row v-if="layoutType == 'layout2'" :class="isMobile ? 'm-b-12 m-t-12 f-s-14' : 'm-b-24 m-t-24 f-s-16'">
          <div class="float-left"><img :src="`/image/Casino/${themeType}/slot.png`"></div>
          <div class="float-left m-l-12 m-t-2">슬롯 게임</div>
          <div style="background: #0b0d10; padding: 4px" :class="isMobile ? 'width-full display-center': 'float-right m-r-16 b-r-6'">
            <input type="text" id="keywd" v-model="listQuery.searchKey" style="height: 34px; background: #14161b; color: #fff; font-size: 14px; border: 1px solid #14161b;" placeholder="게임명 검색" @keydown="onKeyDownSearchKey">
					  <button type="button" class="btn btn-sm m-t-m-3 m-l-2" style="background: #0b0d10 !important; color: #fff !important;" @click="onClickSearch"><i class="fa fa-search"></i></button>
          </div>
        </el-row>
        <el-row v-if="layoutType == 'layout5'">
          <el-row class="max-w-1280 m-t-46" :class="isMobile ? 'f-s-13' : 'f-s-20'">
            <el-row class="display-center">
              <img :src="`/image/Casino/${themeType}/Slot.png`" :class="isMobile ? 'm-r-8' : 'm-r-16'" :width="isMobile ? 36 : 48">
              {{isMobile ? solutionTitle + '에서 제공하는 9개의 메이저 슬롯사,' : solutionTitle + '에서 제공하는 9개의 메이저 슬롯사, 3천개가 넘는 슬롯게임'}}
            </el-row>
            <el-row v-if="isMobile" class="display-center">
              {{solutionTitle}}에서 제공하는 9개의 메이저 슬롯사,
            </el-row>
            <el-row class="display-center">
              슬롯게임 바로 입장하기
            </el-row>
            <el-row style="display: flex; gap: 10px;" :style="isMobile ? 'margin: 16px 0;' : 'margin: 48px 0;'">
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Prag.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(8)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Micro.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(70)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/cq9.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(23)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Haba.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(24)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/playstar.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(29)">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Game.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(30)">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/boongo.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(37)">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Evo.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(40)">
              </div>
              <div v-if="!isMobile" :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Play.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(78)">
              </div>
            </el-row>
            <el-row v-if="isMobile" style="display: flex; gap: 10px; margin: 16px 0;">
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Game.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(30)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/boongo.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(37)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Evo.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(40)">
              </div>
              <div :class="`casino-button-${themeType}`">
                <img :src="'/image/bottom/black/Play.png'" :height="isMobile ? '60%' : '100%'" @click="onSelectProvider(78)">
              </div>
            </el-row>
          </el-row>
        </el-row>
        <!-- 슬롯게임 설명 끝 -->
        <!-- 슬롯게임 리스트 -->
        <el-row class="text-center" :class="{'max-w-1280': layoutType == 'layout5'}">
          <div v-for="(game, gameIndex) in subGames" v-if="getGameStatus(game.thirdPartyCode, false) === 0" :key="gameIndex" :class="layoutType == 'layout2' ? `slot-game-cont-${themeType}` : 'slot-game-cont'" @click="onSelectGame(game.thirdPartyCode, game.id, false)">
            <el-row :class="{'b-r-6 overflow-hidden': layoutType == 'layout2'}">
              <el-row class="live-game">
                <el-row>
                  <img :src="getImageUrl(game.img)" width="100%">
                  <el-row v-if="layoutType == 'layout2'" class="casino-over" style="bottom: 0"></el-row>
                  <div v-if="getGameStatus(game.thirdPartyCode, false) === 0 && layoutType != 'layout2'" :class="`live-banner-${themeType}`"></div>
                  <img v-if="getGameStatus(game.thirdPartyCode, false) === 0 && layoutType != 'layout2'" :src="'/image/Casino/play.png'" class="live-play">
                  <img v-if="getGameStatus(game.thirdPartyCode, false) === 1" :src="'/image/Casino/check.png'" class="live-check">
                  <div v-if="getGameStatus(game.thirdPartyCode, false) === 1" class="live-check-banner" :class="{'border-radius-20': themeType == 'orange11'}" style="border-radius: 0"></div>
                </el-row>
                <el-row v-if="layoutType == 'layout2'" class="casino-over" style="bottom: 0"></el-row>
                <el-row :class="{'casino-comment': layoutType == 'layout2'}">
                  <el-row class="text-left text-overflow" :class="{'text-black f-s-14 f-w-900': themeType == 'white', 'm-t-10': layoutType != 'layout2'}">
                    {{game.nameKo != '' ? game.nameKo : game.nameEn}}
                  </el-row>
                  <el-row class="text-left text-overflow" :class="[{'text-red904 f-w-900': themeType == 'white'}, isMobile ? 'm-t-0' : 'm-t-5']" style="color: #686b6e;">
                    {{game.gameName.toUpperCase()}}
                    <img v-if="layoutType == 'layout2'" :src="`/image/Home/${themeType}/arrow1.png`" class="float-right">
                  </el-row>
                </el-row>
                <div v-if="getGameStatus(game.thirdPartyCode, false) === 0 && layoutType == 'layout2'" :class="`live-banner-${themeType}`"></div>
                <div v-if="getGameStatus(1, true) === 0 && layoutType == 'layout2'" :class="`live-play-${themeType}`">
                  <el-row>{{game.nameKo}}</el-row>
                  <el-row class="f-s-12 m-t-4">{{game.gameName.toUpperCase()}}</el-row>
                  <div class="live-play-button">Play Now</div>
                </div>
              </el-row>
            </el-row>
          </div>
        </el-row>
        <!-- 슬롯게임 리스트 끝 -->
        <!-- 슬롯게임 더보기 버튼 -->
        <el-row class="display-inlineblock width-full m-b-20 m-t-10">
          <el-col :span="24" class="text-center">
            <el-button type="primary" size="mini" :loading="loading" 
              :class="[
                layoutType != 'layout2' && layoutType != 'layout5' ? `${themeType}-button` : 
                layoutType == 'layout5' ? `${themeType}1-button` : `p-b-10 text-white signup-button-${themeType}`, 
                { 'text-red904 f-s-14 f-w-900': themeType == 'white' }
              ]" round
              @click.native.prevent="handleCurrentChange" :disabled="subGames.length === total" :style="layoutType != 'layout2' ? 'width: 60% !important;' : ''">
              슬롯 더 보기 <span class="f-s-16" v-if="layoutType == 'layout2'">+</span> <i v-if="layoutType != 'layout2'" class="fa fa-sync m-l-5 f-s-16"></i>
            </el-button>
          </el-col>
        </el-row>
        <!-- 슬롯게임 더보기 버튼 끝 -->
      </el-row>
    </div>
  </div>
  <Preview v-show="currentUser === null"/>
  <CasinoPreview v-show="!isClosedCasino" @event="closeCasinoPreview"/>
</el-row>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { linkImage } from "~/assets/js/data/datamanagement";
import Preview from '~/components/Auth/Preview.vue'
import CasinoPreview from '~/components/CasinoPreview.vue'
import { getPageBackColor } from '~/assets/js/data/uicommon'
import OwlCarousel from 'vue-owl-carousel'

const casinoGameService = feathers.service('getCasinoGames')
const casinoSubGamesService = feathers.service('getCasinoSubGames')
const lobbyService = feathers.service('getLobbyUrl')
const gameService = feathers.service('getGameUrl')
casinoGameService.timeout = 60000
casinoSubGamesService.timeout = 60000
lobbyService.timeout = 60000
gameService.timeout = 60000

export default {
	layout: ({ isBlock }) => (isBlock ? "block" : "client"),
  middleware: ["block"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      isDivideCasino: "getIsDivideCasino",
      gameSettings: "getGameSettings",
      isAvailCasino: "getIsAvailCasino",
      solutionTitle: "getSolutionTitle",
      selectedProvider: "getSelectedProvider",
      layoutType: "getLayoutType"
    })
  },
  components: {
    Preview, CasinoPreview, OwlCarousel
  },
  data() {
    return {
      gameList: [],                             // 게임사 리스트
      subGames: [],                             // 슬롯게임 리스트
      selectedGames: [],                        // 슬롯게임을 위한 선택된 게임사 아이디
      listQuery:{
        page: 1,
        limit: 50,
        searchKey: ""
      },
      total: 0,                                 // 전체 슬롯게임 갯수
      loading: false,                           // 슬롯게임 더보기 클릭시 게임로딩중
      isClosedCasino: true,                     // 카지노 보유금액이 5천원미만 카지노 이용할수 없음
      liveGameList: [],                         // 라이브게임 리스트
      type: 0,
      isShowProvider: false,
      liveCasinos: [
        // { id: 45, name: "Evolution" },
        { id: 77, name: "Evolution" },
        { id: 71, name: "Asia" },
        { id: 1, name: "Vivo" },
        { id: 69, name: "Micro" },
        { id: 9, name: "Oriental" },
        { id: 28, name: "Dream" },
        { id: 5, name: "Sexy" },
        { id: 62, name: "TaiShan" },
        { id: 15, name: "Bbin" },
        { id: 4, name: "All" },
        { id: 66, name: "Beter" },
        { id: 63, name: "Dowinn" },
        { id: 61, name: "Motivation" },
        { id: 73, name: "Pragmatic" },
        { id: 53, name: "Sky" },
        { id: 12, name: "WM" },
      ]
    };
  },
  watch: {
    "$route.query.type"(value) {
      this.type = value
    },
    selectedProvider() {
      this.onSelectProvider(this.selectedProvider)
    }
  },
  mounted() {
		this.$store.commit('SET_CURRENTPAGENAME', 'Casino')
		if (this.$route.query.type != undefined) {
      if (this.$route.query.type < 3) {
			  this.type = this.$route.query.type
      } else {
        this.selectedGames = parseInt(this.$route.query.type)
      }
		}

		if (this.themeType == 'red15' && this.$route.query.ref != undefined) {
			this.$store.commit("SET_SITECHONGPANCODE", this.$route.query.ref)
		}

    if (this.isAvailCasino && this.currentUser && this.currentUser.cash.casinomoney < 5000 && this.themeType != 'green') {
      this.isClosedCasino = false
    }
    if (this.isDivideCasino && this.type == 0) this.type = 1
    this.getGameList()
    this.getSubGameList()
		let prevButton = document.getElementsByClassName('owl-prev')
		let nextButton = document.getElementsByClassName('owl-next')
		if (prevButton && prevButton[0] && nextButton && nextButton[0]) {
			prevButton[0].innerText = ""
			nextButton[0].innerText = ""
		}
  },
  created() {
    this.$store.commit("betslip/SET_BETSLIPLIST", [])
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 0)
  },
  updated() {
    this.$store.commit("initTimeLeft");
  },
  methods: {
    getPageBackColor,
    onKeyDownSearchKey(event) {
      if (event.keyCode == 13) {
        this.subGames = []
        this.getSubGameList()
      }
    },
    onClickSearch() {
      this.subGames = []
      this.getSubGameList()
    },
    // 게임타입선택
    onSelectType(val) {
      this.type = val
    },
    // 게임사리스트 보여주기
    onShowProvider() {
      if (this.isMobile) {
        this.$store.commit('SET_PROVIDERDIALOGVISIBLE')
      } else {
        this.isShowProvider = !this.isShowProvider
      }
    },
    // 게임선택
    async onSelectGame(thirdPartyCode, gameId, isLive) {
      // 점검중일때처리
      if (this.getGameStatus(thirdPartyCode, isLive) === 1) return
      
      this.$nuxt.$loading.start()
      let casinoInfo = null
      if(thirdPartyCode != -1) {
        casinoInfo = {
          thirdPartyCode: thirdPartyCode,
          gameId: gameId,
          isLive: isLive
        }
      }
      if (this.isMobile && casinoInfo.isLive && thirdPartyCode == 45 && gameId == 0) {
        let thirdPartyCode = casinoInfo.thirdPartyCode
        let param = {
          thirdPartyCode: thirdPartyCode,
          isMobile: this.isMobile
        }
        
        lobbyService.find({query: param}).then((res) => {
          if(res.code == 1) {
            var windowReference = window.open();
            windowReference.location = res.data.lobbyUrl;
          } else {
            this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
          }
          this.$nuxt.$loading.finish()
        })
      } else if (thirdPartyCode == 14) {        
        gameService.find({query: {
          thirdPartyCode: thirdPartyCode,
          gameId: gameId
        }}).then((res) => {
          if(res.code == 1) {
            var newPage = window.open('', '_blank');
            newPage.document.open();
            newPage.document.write(res.data.gameUrl);//Execute HTML Code
            newPage.document.close();
          } else {
            this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
          }
          this.$nuxt.$loading.finish()
        })
      } else {
        this.$store.commit("SET_CASINODIALOGINFO", casinoInfo)
      }
    },
    // 게임 점검상태 얻기
    getGameStatus(thirdPartyCode, type) {
      if (!this.gameSettings.Casino.gameStatus_manual) return 1

      if (type === true) {
        let index = this.liveGameList.findIndex(game => game.Id === thirdPartyCode)
        if (index > -1) {
          return this.liveGameList[index].status
        }
      } else {
        let index = this.gameList.findIndex(game => game.Id === thirdPartyCode)
        if (index > -1) {
          return this.gameList[index].status
        }
      }
      return 1
    },
    getGameVisible(thirdPartyCode) {
      let index = this.liveGameList.findIndex(game => game.Id == thirdPartyCode)
      if (index > -1) {
        return this.liveGameList[index].visible
      }
      return false
    },
    getGameName(thirdPartyCode) {
      let index = this.liveGameList.findIndex(game => game.Id == thirdPartyCode)
      if (index > -1) {
        return this.liveGameList[index].Game != '' ? this.liveGameList[index].Game : this.liveGameList[index].name
      }
      return ""
    },
    // 현재 페이지 선택
    handleCurrentChange() {
      this.listQuery.page ++
      this.getSubGameList()
    },
    // 슬롯게임 리스트 얻기
    getSubGameList() {
      this.$nuxt.$loading.start()
      this.loading = true
      let query = {
        thirdPartyCodes: this.selectedGames,
        limit: this.listQuery.limit,
        skip: this.listQuery.limit * (this.listQuery.page - 1),
        isMobile: this.isMobile,
        searchKey: this.listQuery.searchKey
      }
      
      casinoSubGamesService.find({query: query}).then(res => {
        if (res.code != 1) {
          console.log(res.message)
        } else {
          res.data.subGames.forEach(game => { this.subGames.push(game) });
          this.total = res.data.total
        }
        this.$nuxt.$loading.finish()
        this.loading = false
      }).catch(err => {
        this.$nuxt.$loading.finish()
        this.loading = false
      })
    },
    // 게임사 리스트 얻기 (라이브, 슬롯)
    getGameList() {
      casinoGameService.find({query: {slot: true}}).then(res => {
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        for(let i = 0; i < res.data.length; i++) {
          let game = {
            Id: res.data[i].thirdPartyCode,
            Game: res.data[i].nameKo,
            status: res.data[i].status
          }
          this.gameList.push(game)
        }
        let all = {
          Id: 0,
          Game: '모든 게임사',
          status: 0
        }
        this.gameList.unshift(all)
        this.selectedGames = this.gameList[0].Id
      })
      casinoGameService.find({query: {slot: false}}).then(res => {
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        for(let i = 0; i < res.data.length; i++) {
          let game = {
            Id: res.data[i].thirdPartyCode,
            name: res.data[i].name,
            Game: res.data[i].nameKo,
            status: res.data[i].status,
            visible: res.data[i].visible
          }
          this.liveGameList.push(game)
        }
      })
    },
    // 슬롯게임 게임사 선택
    handleSelectGames(){
      this.subGames.splice(0, this.subGames.length)
      this.listQuery.page = 1
      this.getSubGameList()
    },
    // 게임사선택
    onSelectProvider(id) {
      if (this.layoutType == 'layout2' && id != 0) this.type = 2
      if (this.layoutType == 'layout2' && id == 0) this.type = 0
      this.selectedGames = id
      this.handleSelectGames()
    },
    // 게임 배너 이미지 얻기
    getImageUrl(url) {
      let imgUrl = "";
      if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
        imgUrl = url;
      } else {
        imgUrl = linkImage(url);
      }
      return imgUrl;
    },
    // 카지노 이용 불가처리
    closeCasinoPreview() {
      this.isClosedCasino = true
    },
    // 메시지 보여주기
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		}
  }
}
</script>
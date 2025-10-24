<template>
  <div>
    <el-row v-if="layoutType != 'layout2'" class="display-inlineblock width-full">
      <el-row v-if="gameType == 0" :class="`virtual-left-league-${themeType}`">
        <div class="float-left m-r-15">
          <img v-if="layoutType != 'layout2'" :src="'/image/Sports/League/6046.png'" height="24" class="float-left" />
          <img v-else :src="`/image/Virtual/${themeType}/football.png`" class="float-left p-l-16 m-t-16" />
        </div>
        <div :style="layoutType == 'layout2' ? 'width: calc(100% - 47px); float: left;' : ''">
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'All' }]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Premiership' }]" @click="onFilterLeague('Premiership')">
            프리미어쉽
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Superleague' }]" @click="onFilterLeague('Superleague')">
            슈퍼리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Euro Cup' }]" @click="onFilterLeague('Euro Cup')">
            유로컵
          </div>
        </div>
      </el-row>
      <el-row v-if="gameType == 1" :class="`virtual-left-league-${themeType}`">
        <div class="float-left m-r-15">
          <img v-if="layoutType != 'layout2'" :src="'/image/Sports/League/48242.png'" height="24" class="float-left" />
          <img v-else :src="`/image/Virtual/${themeType}/basketball.png`" class="float-left p-l-16 m-t-16" />
        </div>
        <div :style="layoutType == 'layout2' ? 'width: calc(100% - 47px); float: left;' : ''">
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Baker Gardens', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('Baker Gardens')">
            베이커 가든스
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Waterport Arena', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('Waterport Arena')">
            워터포트 아레나
          </div>
        </div>
      </el-row>
      <el-row v-if="gameType == 2" :class="`virtual-left-league-${themeType}`">
        <div class="float-left m-r-15">
          <img v-if="layoutType != 'layout2'" :src="'/image/Virtual/dog.png'" height="24" class="float-left" />
          <img v-else :src="`/image/Virtual/${themeType}/dog.png`" class="float-left p-l-16 m-t-16" />
        </div>
        <div :style="layoutType == 'layout2' ? 'width: calc(100% - 47px); float: left;' : ''">
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Goldenhill Park', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('Goldenhill Park')">
            골든힐 파크
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Hillside Park', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('Hillside Park')">
            힐사이드
          </div>
        </div>
      </el-row>
      <el-row v-if="gameType == 3" :class="`virtual-left-league-${themeType}`">
        <div class="float-left m-r-15">
          <img v-if="layoutType != 'layout2'" :src="'/image/Virtual/horse.png'" height="24" class="float-left" />
          <img v-else :src="`/image/Virtual/${themeType}/horse.png`" class="float-left p-l-16 m-t-16" />
        </div>
        <div :style="layoutType == 'layout2' ? 'width: calc(100% - 47px); float: left;' : ''">
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All', 'width-20pro': layoutType == 'layout2'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Britannia Way', 'width-20pro': layoutType == 'layout2'}]" @click="onFilterLeague('Britannia Way')">
            브리타니아...
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Festival Downs', 'width-20pro': layoutType == 'layout2'}]" @click="onFilterLeague('Festival Downs')">
            페스티발...
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Victoria Park', 'width-20pro': layoutType == 'layout2'}]" @click="onFilterLeague('Victoria Park')">
            빅토리아...
          </div>
          <!-- <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Aintree Park', 'width-20pro': layoutType == 'layout2'}]" @click="onFilterLeague('Aintree Park')">
            아인트리...
          </div> -->
        </div>
      </el-row>
      <el-row v-if="gameType == 4" :class="`virtual-left-league-${themeType}`">
        <div class="float-left m-r-15">
          <img v-if="layoutType != 'layout2'" :src="'/image/Sports/League/154914.png'" height="24" class="float-left" />
          <img v-else :src="`/image/Virtual/${themeType}/basketball.png`" class="float-left p-l-16 m-t-16" />
        </div>
        <div :style="layoutType == 'layout2' ? 'width: calc(100% - 47px); float: left;' : ''">
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Brandon Field', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('Brandon Field')">
            브랜든 필드
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'North Stadium', 'width-33pro': layoutType == 'layout2'}]" @click="onFilterLeague('North Stadium')">
            노스 스타디움
          </div>
        </div>
      </el-row>
    </el-row>
    <el-row v-else class="display-inlineblock width-full">
      <el-row v-if="gameType == 0" :class="`virtual-left-league-${themeType}`">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <div>
            <img :src="`/image/Virtual/${themeType}/football.png`" class="float-left p-l-16 p-r-16 m-t-16" />
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'All' }]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Premiership' }]" @click="onFilterLeague('Premiership')">
            프리미어쉽
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Superleague' }]" @click="onFilterLeague('Superleague')">
            슈퍼리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, { on: filterType === 'Euro Cup' }]" @click="onFilterLeague('Euro Cup')">
            유로컵
          </div>
        </OwlCarousel>
      </el-row>
      <el-row v-if="gameType == 1" :class="`virtual-left-league-${themeType}`">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <div>
            <img :src="`/image/Virtual/${themeType}/basketball.png`" class="float-left p-l-16 p-r-16 m-t-16" />
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Baker Gardens'}]" @click="onFilterLeague('Baker Gardens')">
            베이커 가든스
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Waterport Arena'}]" @click="onFilterLeague('Waterport Arena')">
            워터포트 아레나
          </div>
        </OwlCarousel>
      </el-row>
      <el-row v-if="gameType == 2" :class="`virtual-left-league-${themeType}`">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <div>
            <img :src="`/image/Virtual/${themeType}/dog.png`" class="float-left p-l-16 p-r-16 m-t-16" />
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Goldenhill Park'}]" @click="onFilterLeague('Goldenhill Park')">
            골든힐 파크
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Hillside Park'}]" @click="onFilterLeague('Hillside Park')">
            힐사이드
          </div>
        </OwlCarousel>
      </el-row>
      <el-row v-if="gameType == 3" :class="`virtual-left-league-${themeType}`">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <div>
            <img :src="`/image/Virtual/${themeType}/horse.png`" class="float-left p-l-16 p-r-16 m-t-16" />
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Britannia Way'}]" @click="onFilterLeague('Britannia Way')">
            브리타니아
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Festival Downs'}]" @click="onFilterLeague('Festival Downs')">
            페스티발
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Victoria Park'}]" @click="onFilterLeague('Victoria Park')">
            빅토리아
          </div>
          <!-- <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Aintree Park'}]" @click="onFilterLeague('Aintree Park')">
            아인트리
          </div> -->
        </OwlCarousel>
      </el-row>
      <el-row v-if="gameType == 4" :class="`virtual-left-league-${themeType}`">
        <OwlCarousel :autoWidth="true" :nav="false" :dots="false">
          <div>
            <img :src="`/image/Virtual/${themeType}/basketball.png`" class="float-left p-l-16 p-r-16 m-t-16" />
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'All'}]" @click="onFilterLeague('All')">
            모든 리그
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'Brandon Field'}]" @click="onFilterLeague('Brandon Field')">
            브랜든 필드
          </div>
          <div :class="[`virtula-league-tab-${themeType}`, {on: filterType === 'North Stadium'}]" @click="onFilterLeague('North Stadium')">
            노스 스타디움
          </div>
        </OwlCarousel>
      </el-row>
    </el-row>
    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%">
      <div v-for="(game, gameIndex) in currentGame" :key="gameIndex">
        <div v-if="game.status !== 4 && ((filterType !== 'All' && game.leagueName === filterType) || filterType === 'All')"
          class="m-0 width-full"
          :class="`virtual-left-bg-${themeType}`"
          style="overflow: hidden; width: auto"
        >
          <!-- 리그정보 -->
          <el-row v-if="gameType == 0 || gameType == 1 || gameType == 4" class="f-s-11 cursor" :class="`virtual-left-leagueinfo-${themeType}`">
            <div class="pull-left f-s-12 width-full height-full f-w-700 text-gray">
              <img v-if="gameType == 0" :src="'/image/Sports/League/6046.png'" height="24" class="float-left m-r-5 m-l-10" :class="{ 'm-t-6': layoutType != 'layout2' }" />
              <img v-if="gameType == 1" :src="'/image/Sports/League/48242.png'" height="24" class="float-left m-r-5 m-l-10" :class="{ 'm-t-6': layoutType != 'layout2' }" />
              <img :src="'/image/Virtual/Bet365.png'" width="25" class="float-left m-r-5" :class="{ 'm-t-6': layoutType != 'layout2' }" />
              <span :class="`virtual-league-text-${themeType}`">BET365 {{ game.leagueName | convertToKorean }} - {{ game.leagueName }}</span>
            </div>
          </el-row>
          <el-row v-if="
              (gameType == 2 || gameType == 3) &&
              (themeType == 'orange11' ||
                themeType == 'orange12' ||
                themeType == 'purple11' ||
                themeType == 'red13' ||
                themeType == 'blue12' ||
                themeType == 'yellow19' ||
                themeType == 'purple12' ||
                themeType == 'gold12' ||
                themeType == 'gold11' ||
                themeType == 'red12' ||
                themeType == 'blue15' ||
                themeType == 'red11' ||
                themeType == 'red15' ||
                themeType == 'yellow20' ||
                themeType == 'blue13' ||
                themeType == 'gold13' ||
                themeType == 'yellow11' ||
                themeType == 'yellow14' ||
                themeType == 'yellow18' ||
                themeType == 'yellow21' ||
                themeType == 'yellow16' ||
                themeType == 'yellow17' ||
                themeType == 'blue19' ||
                themeType == 'blue11')
            "
            class="f-s-11 cursor"
            :class="`virtual-left-leagueinfo-${themeType}`"
          >
            <div class="pull-left f-s-12 width-full height-full text-gray f-w-700">
              <img v-if="gameType == 2" :src="'/image/Virtual/dog.png'" height="24" class="float-left m-t-6 m-r-5 m-l-10" />
              <img v-if="gameType == 3" :src="'/image/Virtual/horse.png'" height="24" class="float-left m-t-6 m-r-5 m-l-10" />
              <img :src="'/image/Virtual/Bet365.png'" width="25" class="float-left m-t-6 m-r-5" />
              <span class="m-t-10 float-left" :class="`virtual-league-text-${themeType}`">BET365 {{ game.leagueName | convertToKorean }} - {{ game.leagueName }}</span>
            </div>
          </el-row>
          <div
            v-if="
              (gameType == 2 || gameType == 3) &&
              themeType != 'orange11' &&
              themeType != 'orange12' &&
              themeType != 'purple11' &&
              themeType != 'red13' &&
              themeType != 'blue12' &&
              themeType != 'yellow19' &&
              themeType != 'purple12' &&
              themeType != 'gold12' &&
              themeType != 'gold11' &&
              themeType != 'red12' &&
              themeType != 'blue15' &&
              themeType != 'red11' &&
              themeType != 'red15' &&
              themeType != 'yellow20' &&
              themeType != 'blue13' &&
              themeType != 'gold13' &&
              themeType != 'yellow11' &&
              themeType != 'yellow14' &&
              themeType != 'yellow18' &&
              themeType != 'yellow21' &&
              themeType != 'yellow16' &&
              themeType != 'yellow17' &&
              themeType != 'blue19' &&
              themeType != 'blue11'
            "
            class="f-s-11 cursor"
            :class="`virtual-left-leagueinfo-${themeType}`"
            @click="onCollapse(gameIndex)"
            data-toggle="collapse"
            :data-target="'#league' + gameIndex"
            aria-expanded="false"
            :aria-controls="'league' + gameIndex"
          >
            <div class="pull-left f-s-12 width-full height-full text-gray f-w-700">
              <img v-if="gameType == 2" :src="'/image/Virtual/dog.png'" height="24" class="float-left m-t-6 m-r-5 m-l-10" />
              <img v-if="gameType == 3" :src="'/image/Virtual/horse.png'" height="24" class="float-left m-t-6 m-r-5 m-l-10" />
              <img :src="'/image/Virtual/Bet365.png'" width="25" class="float-left m-t-6 m-r-5" />
              <span class="m-t-10 float-left" :class="`virtual-league-text-${themeType}`">BET365 {{ game.leagueName | convertToKorean }} - {{ game.leagueName }}</span>
              <div :class="themeType == 'orange11' ? 'collapse-up-orange11' : 'collapse-up-blue'" :id="'collapseleague-' + gameIndex" class="m-t-7 m-r-10"></div>
            </div>
          </div>
          <!-- 리그정보 끝 -->
          <!-- 경기리스트 -->
          <el-row v-if="gameType == 0 || gameType == 1 || gameType == 4">
            <div class="display-inlineblock width-full" :class="{'p-l-5 p-r-5': layoutType != 'layout3' && layoutType != 'layout6'}">
              <div class="col-md-12 position-relative p-b-6" :class="`virtual-sports2box-${themeType}`">
                <!-- 헤더 -->
                <el-row class="f-s-11"
                  :class="{
                    'sports2boxtop-orange11-prematch': layoutType == 'layout1',
                    'sports2boxtop-orange12-prematch p-t-8 p-b-8': themeType == 'orange12',
                    'sports2boxtop-yellow20-prematch': themeType == 'yellow20',
                    'sports2boxtop-blue13-prematch': themeType == 'blue13',
                    'sports2boxtop-gold13-prematch': themeType == 'gold13',
                    'sports2boxtop-yellow11-prematch': themeType == 'yellow11',
                    'sports2boxtop-yellow14-prematch': themeType == 'yellow14',
                    'sports2boxtop-yellow18-prematch': themeType == 'yellow18',
                    'sports2boxtop-yellow21-prematch': themeType == 'yellow21',
                    'sports2boxtop-yellow16-prematch': themeType == 'yellow16',
                    'sports2boxtop-yellow17-prematch': themeType == 'yellow17',
                    'sports2boxtop-blue19-prematch': themeType == 'blue19',
                    'sports2boxtop-blue11-prematch': themeType == 'blue11'
                  }"
                >
                  <div :class="`virtual-sports2boxtopin-left-${themeType}`">
                    <span :class="`text-contrast-${themeType}`">
                      {{ isShowMobile ? "" : "경기 시간 - " }}
                      {{ game.gameDateTime | parseTimeKorean("{y}-{m}-{d} {h}:{i}") }}
                    </span>
                  </div>
                  <div class="pull-right" :class="`virtual-sports2boxtopin-right-${themeType}`">
                    <div class="btn btn-xs f-s-13 posrightbtnclass text-center"
                      :class="[
                        { 'width-130 p-b-2 on': layoutType != 'layout2' },
                        `show-detail-odds-${themeType}`,
                        getTextColor(themeType, 2),
                        !isBlackMode ? 'bg-yellow' : 'bg-black-main1',
                      ]"
                    >
                      <center>
                        <span class="hva-txt">배팅마감: {{ game.remainTime }}</span>
                      </center>
                    </div>
                  </div>
                </el-row>
                <!-- 헤더 끝 -->
                <!-- 승무패 -->
                <div class="col-md-12 p-0" :class="[layoutType == 'layout2' ? 'm-b-8' : 'm-b-1', {'p-l-8 p-r-8': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}]">
                  <div class="glist btn-group col-md-12 p-0 p-t-3 width-full" :style="layoutType == 'layout2' ? 'background: #1F2124; border-radius: 0px 0px 6px 6px; padding: 8px !important;' : ''">
                    <ul class="list-box-g col-md-12 height-38">
                      <li class="home-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 1) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 1, game.fullTimeHomeOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-team">
                              <div class="float-left text-overflow width-full">
                                {{ game.homeTeamName }}
                              </div>
                            </li>
                            <li class="hva-txt main-odd-val float-left">
                              <img v-if="!isMobile" :src="'/image/Sports/1x2.png'" style="margin-top: -2px" class="m-r-10" />
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.fullTimeHomeOdds, userOdds))}}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vs-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 2) > -1,
                            },
                            isMobile ? `btn-sports-vs mob-odd-btn btn-mobile-${themeType}` : `btn-sports btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 2, game.fullTimeDrawOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt">
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{gameType == 0 || gameType == 4 ? filterOdds(processUserOdds(game.fullTimeDrawOdds, userOdds)) : "VS"}}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="away-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 3) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 3, game.fullTimeAwayOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-val float-left text-left">
                              <span :class="{ 'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.fullTimeAwayOdds, userOdds))}}
                              </span>
                              <img v-if="!isMobile" :src="'/image/Sports/1x2.png'" style="margin-top: -2px" class="m-l-10" />
                            </li>
                            <li class="hva-txt main-odd-team float-right text-right">
                              <div class="float-right text-overflow width-full">
                                {{ game.awayTeamName }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 승무패 끝 -->
                <!-- 핸디캡 -->
                <div v-if="gameType == 1" class="col-md-12 p-0" :class="[layoutType == 'layout2' ? 'm-b-8' : 'm-b-1', {'p-l-8 p-r-8': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}]">
                  <div class="glist btn-group col-md-12 p-0 p-t-3 width-full" :style="layoutType == 'layout2' ? 'background: #1F2124; border-radius: 0px 0px 6px 6px; padding: 8px !important;' : ''">
                    <ul class="list-box-g col-md-12 height-38">
                      <li class="home-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 4) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 4, game.handicapHomeOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-team">
                              <div class="float-left text-overflow">
                                {{ game.homeTeamName }}
                              </div>
                            </li>
                            <li class="hva-txt main-odd-val float-left">
                              <img v-if="!isMobile" :src="'/image/Sports/h.png'" style="margin-top: -2px" class="m-r-12" />
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.handicapHomeOdds, userOdds))}}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vs-t">
                        <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn" :class="`btn-vs-${themeType}`">
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt">
                              <span :class="[getTextColor(themeType, 1), {'f-w-900': themeType == 'gold11' || themeType == 'orange14'}]">
                                {{ game.handicapOptionPoint }}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="away-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 5) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 5, game.handicapAwayOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-val float-left text-left">
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.handicapAwayOdds, userOdds))}}
                              </span>
                              <img v-if="!isMobile" :src="'/image/Sports/h.png'" style="margin-top: -2px" class="m-l-12" />
                            </li>
                            <li class="hva-txt main-odd-team float-right text-right">
                              <div class="float-right text-overflow">
                                {{ game.awayTeamName }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 핸디캡 끝 -->
                <!-- 언오버 -->
                <div class="col-md-12 p-0" :class="{'p-l-8 p-r-8': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}">
                  <div class="glist btn-group col-md-12 p-0 p-t-3 width-full" :style="layoutType == 'layout2' ? 'background: #1F2124; border-radius: 0px 0px 6px 6px; padding: 8px !important;' : ''">
                    <ul class="list-box-g col-md-12 height-38">
                      <li class="home-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 7) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 7, game.totalHomeOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-team">
                              <div class="float-left text-overflow">
                                오버
                              </div>
                            </li>
                            <li class="hva-txt main-odd-val float-left">
                              <i v-if="!isMobile" class="fa fa-arrow-up m-0 m-r-10 f-s-10 text-red905"></i>
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.totalHomeOdds, userOdds))}}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="vs-t">
                        <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn" :class="`btn-vs-${themeType}`">
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt">
                              <span :class="[getTextColor(themeType, 1), {'f-w-900': themeType == 'gold11' || themeType == 'orange14'}]">
                                {{ game.totalOptionPoint }}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="away-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                          :class="[
                            {
                              active: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.leagueName === game.leagueName && slip.round === game.round && slip.number === 6 ) > -1,
                            },
                            { 
                              'btn-sports-vs mob-odd-btn': isMobile,
                              'btn-sports': !isMobile,
                              'p-l-8 p-r-8': layoutType == 'layout2'
                            },
                            isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                          ]"
                          @click="onClickBetButton(game, 6, game.totalAwayOdds)"
                        >
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-val float-left text-left">
                              <span :class="{'f-w-900': themeType == 'gold11'}">
                                {{filterOdds(processUserOdds(game.totalAwayOdds, userOdds))}}
                              </span>
                              <i v-if="!isMobile" class="fa fa-arrow-down m-0 m-l-10 f-s-10 text-blue902"></i>
                            </li>
                            <li class="hva-txt main-odd-team float-right text-right">
                              <div class="float-right text-overflow">
                                언더
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 언오버 끝 -->
              </div>
            </div>
            <div v-if="!isBetAvailable || game.status === 3" class="position-absolute width-full height-full text-center p-t-40" style="left: 0; top: 0; background-color: rgba(0, 0, 0, 0.6)">
              <img :src="`/image/Sports/${themeType}/Lock.png`" width="80" />
            </div>
          </el-row>
          <el-row v-if="gameType == 2 || gameType == 3">
            <el-row class="text-white" :class="{'p-l-5 p-r-5': layoutType != 'layout3' || layoutType != 'layout6'}">
              <el-row :class="`virtualrun-sports2box-${themeType}`">
                <!-- 헤더 -->
                <el-row :class="`virtualrun-sports2boxtop-${themeType}`" data-toggle="collapse"
                  :data-target="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '#league' + gameIndex : ''"
                  aria-expanded="false" :aria-controls="'league' + gameIndex">
                  <div :class="`virtualrun-sports2boxtopin-left-${themeType}`">
                    <span :class="`text-contrast-${themeType}`">
                      {{ isShowMobile ? "" : "경기 시간 - " }}{{ game.gameDateTime | parseTimeKorean }}
                    </span>
                  </div>
                  <div :class="`virtualrun-sports2boxtopin-right-${themeType}`">
                    <button type="button" class="btn btn-xs f-s-13 posrightbtnclass text-center bg-black-darker1 p-b-2" :class="`virtual-show-detail-odds-${themeType}`">
                      <center>
                        <span class="hva-txt">배팅마감: {{ game.remainTime }}</span>
                      </center>
                    </button>
                  </div>
                </el-row>
                <!-- 헤더 끝 -->
                <!-- 메인배당 -->
                <el-row class="m-b-1 m-b-10 m-t-2"
                  :class="
                    themeType == 'orange12' ||
                    themeType == 'blue16' ||
                    themeType == 'yellow13' ||
                    themeType == 'red15' ||
                    themeType == 'yellow20' ||
                    themeType == 'blue13' ||
                    themeType == 'gold13' ||
                    themeType == 'yellow11' ||
                    themeType == 'yellow14' ||
                    themeType == 'yellow18' ||
                    themeType == 'yellow21' ||
                    themeType == 'yellow16' ||
                    themeType == 'yellow17' ||
                    themeType == 'blue19' ||
                    themeType == 'blue11' ||
                    themeType == 'white' ||
                    themeType == 'red14' ||
                    themeType == 'yellow12' ||
                    themeType == 'orange13' ||
                    themeType == 'blue14'
                      ? 'p-l-1 p-r-1'
                      : 'p-l-5 p-r-5'
                  "
                >
                  <div
                    v-if="
                      themeType == 'orange11' ||
                      themeType == 'purple11' ||
                      themeType == 'red13' ||
                      themeType == 'blue12' ||
                      themeType == 'yellow19' ||
                      themeType == 'purple12' ||
                      themeType == 'gold12' ||
                      themeType == 'gold11' ||
                      themeType == 'red12' ||
                      themeType == 'blue15' ||
                      themeType == 'red11' ||
                      themeType == 'red15'
                    "
                    class="p-10 cursor"
                    style="background-color: #0e7e60"
                    @click="onCollapse(gameIndex)"
                    data-toggle="collapse"
                    :data-target="'#league' + gameIndex"
                    aria-expanded="false"
                    :aria-controls="'league' + gameIndex"
                  >
                    {{ game.leagueName | convertToKorean }} -
                    {{ game.leagueName }}
                    <div :class="themeType == 'orange11' ? 'collapse-up-orange11' : 'collapse-up-blue'" :id="'collapseleague-' + gameIndex"></div>
                  </div>
                  <div class="float-right collapse league-odds"
                    :class="{
                      show: gameIndex < 1,
                      'width-full': isMobile || (themeType != 'orange11' && themeType != 'purple11' && themeType != 'red13' && themeType != 'blue12' && themeType != 'yellow19' && themeType != 'purple12' && !isMobile),
                      'width-95pro': (themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12') && !isMobile,
                    }"
                    :id="'league' + gameIndex"
                  >
                    <div
                      v-for="(odd, oddIndex) in game.oddsList"
                      :key="oddIndex"
                      @click="onClickBetButtonSingle(game, oddIndex + 1, odd.name, odd.odd)"
                      :class="[`virtual-odds-${themeType}`,
                        { on: betSlipList.findIndex((slip) => slip.eventId === game.eventId && slip.betTypeName === game.leagueName && slip.round === game.round && slip.number === oddIndex + 1) > -1, }                        ]"
                    >
                      <el-row class="p-7 p-l-16 p-r-16">
                        <img :src="'/image/Virtual/Dog/' + odd.number + '.png'" class="m-r-5" />
                        {{ odd.name }}
                        <span class="float-right p-t-2" :class="{'f-w-900': themeType == 'gold11'}">
                          {{filterOdds(processUserOdds(odd.odd, userOdds))}}
                        </span>
                        <div v-if="!isBetAvailable || game.status === 3" class="text-center" :class="`odd-lock-${themeType}`">
                          <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" class="m-t-3" />
                        </div>
                      </el-row>
                    </div>
                  </div>
                </el-row>
                <!-- 메인배당 끝 -->
              </el-row>
            </el-row>
          </el-row>
          <!-- 경기리스트 끝 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getTextColor } from "~/assets/js/data/uicommon.js";
import {
  parseTimeKorean,
  filterOdds,
  processUserOdds,
  convertToKorean,
} from "~/assets/js/utils";
import OwlCarousel from "vue-owl-carousel";

// gameType 0: 축구 1: 농구 2: 개경주 3: 경마 4: 야구
export default {
  props: ["currentGame", "isShowMobile", "isBetAvailable", "gameType"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount",
      betSlipList: "betslip/getBetSlipList",
      gameSettings: "getGameSettings",
    }),
  },
  components: {
    OwlCarousel,
  },
  filters: {
    parseTimeKorean,
    convertToKorean,
  },
  data() {
    return {
      filterType: "All",
      userOdds: 0,
      calculateTime: null,
    };
  },
  destroyed() {
    clearInterval(this.calculateTime);
  },
  mounted() {
    if (this.currentUser) {
      if (this.gameType == 0) {
        let index = this.gameSettings.VSoccer.levelSetting.findIndex((setting) => setting.level == this.currentUser.level);
        if (index > -1) {
          this.userOdds = this.gameSettings.VSoccer.levelSetting[index].userOdds;
        }
      } else if (this.gameType == 1) {
        let index = this.gameSettings.VBasket.levelSetting.findIndex((setting) => setting.level == this.currentUser.level);
        if (index > -1) {
          this.userOdds = this.gameSettings.VBasket.levelSetting[index].userOdds;
        }
      } else if (this.gameType == 2) {
        let index = this.gameSettings.VDogRace.levelSetting.findIndex(setting => setting.level == this.currentUser.level)
        if (index > -1) {
          this.userOdds = this.gameSettings.VDogRace.levelSetting[index].userOdds
        }
      } else if (this.gameType == 3) {
        let index = this.gameSettings.VHorseRace.levelSetting.findIndex(setting => setting.level == this.currentUser.level)
        if (index > -1) {
          this.userOdds = this.gameSettings.VHorseRace.levelSetting[index].userOdds
        }
      } else if (this.gameType == 4) {
        let index = this.gameSettings.VBaseball.levelSetting.findIndex((setting) => setting.level == this.currentUser.level);
        if (index > -1) {
          this.userOdds = this.gameSettings.VBaseball.levelSetting[index].userOdds;
        }
      }
    }

    // 회차 남은 시간 계산
    this.calculateTime = setInterval(() => {
      this.calculateGameRemainTime();
    }, 1000);
  },
  methods: {
    filterOdds,
    getTextColor,
    processUserOdds,
    onFilterLeague(type) {
      this.filterType = type;
    },
    // 배팅하기
    onClickBetButton(game, betType, odds) {
      if (game.status === 3) return;
      if (this.gameType == 1 && betType == 2) return

      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      if (!this.isBetAvailable) {
        this.showMessage("알림메시지", "배팅을 할수 없는 상태입니다.", "닫기[Close]", 2);
        return;
      }

      // 배팅슬립에 배팅정보 추가
      let betName;
      let marketName;
      switch (betType) {
        case 1:
          betName = "승무패 - " + game.homeTeamName;
          marketName = "승무패";
          break;
        case 2:
          betName = "승무패 - 무승부";
          marketName = "승무패";
          break;
        case 3:
          betName = "승무패 - " + game.awayTeamName;
          marketName = "승무패";
          break;
        case 4:
          betName = "핸디캡(" + game.handicapOptionPoint + ") - " + game.homeTeamName;
          marketName = "핸디캡";
          break;
        case 5:
          betName = "핸디캡(" + -game.handicapOptionPoint + ") - " + game.awayTeamName;
          marketName = "핸디캡";
          break;
        case 6:
          betName = "언오버(" + game.totalOptionPoint + ") - " + "언더";
          marketName = "언오버";
          break;
        case 7:
          betName = "언오버(" + game.totalOptionPoint + ") - " + "오버";
          marketName = "언오버";
          break;
      }

      let type = this.gameType == 1 ? 4 : this.gameType == 4 ? 5 : 1;
      let data = {
        gameType: type,
        leagueName: game.leagueName,
        betTypeName: game.homeTeamName + " vs " + game.awayTeamName,
        betName: betName + "|" + game.homeTeamName + " vs " + game.awayTeamName,
        odds: this.processUserOdds(odds, this.userOdds),
        eventId: game.eventId,
        round: game.round,
        number: betType,
        marketName: marketName,
      };      
      let sIndex = this.betSlipList.findIndex((slip) => slip.leagueName === game.leagueName && slip.eventId === game.eventId && slip.round === game.round && slip.betName == data.betName);
      if (sIndex > -1) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", sIndex);
          return;
      }

      let index = this.betSlipList.findIndex((slip) => slip.leagueName === game.leagueName && slip.eventId === game.eventId && slip.round === game.round);
      if (index > -1) {
        if (this.betSlipList[index].betName === data.betName) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", index);
          return;
        }
        if (this.gameType == 1 && this.gameSettings.VBasket.isUseSameBet) {
          let marketSameIndex = this.betSlipList.findIndex((slip) => slip.leagueName === game.leagueName && slip.eventId === game.eventId && slip.round === game.round && slip.marketName == data.marketName);
          if (marketSameIndex > -1) {
            data.SlipIndex = marketSameIndex;
            this.$store.commit("betslip/UPDATE_VIRTULAL_BETSLIPONE", data);
          } else {
            if (this.betSlipList.filter((slip) => slip.leagueName === game.leagueName && slip.eventId === game.eventId && slip.round === game.round).length > 1) {
              return
            }
            if (
              this.gameSettings.VBasket.cross.victory1 &&
              ((this.betSlipList[index].marketName == "승무패" && data.marketName == "언오버") || (this.betSlipList[index].marketName == "언오버" && data.marketName == "승무패"))
            ) {
              this.$store.commit("betslip/SET_BETSLIPLIST", data);
            }
            if (
              this.gameSettings.VBasket.cross.handicap &&
              ((this.betSlipList[index].marketName == "핸디캡" && data.marketName == "언오버") || (this.betSlipList[index].marketName == "언오버" && data.marketName == "핸디캡"))
            ) {
              this.$store.commit("betslip/SET_BETSLIPLIST", data);
            }
          }
        } else {
          data.SlipIndex = index;
          this.$store.commit("betslip/UPDATE_VIRTULAL_BETSLIPONE", data);
        }
      } else {
        // if (this.gameType == 0 || this.gameType == 4) {
        //   let uoIndex = this.betSlipList.findIndex((slip) => slip.marketName === "언오버");
        //   if (uoIndex > -1) {
        //     this.showMessage("알림메시지", `가상${this.gameType == 4 ? '야구' : '축구'}는 승무패 조합만 가능합니다.`, "닫기[Close]", 2);
        //     return;
        //   } else {
        //     if (this.betSlipList.length > 0 && marketName === "언오버") {
        //       this.showMessage("알림메시지", `가상${this.gameType == 4 ? '야구' : '축구'}는 승무패 조합만 가능합니다.`, "닫기[Close]", 2);
        //       return;
        //     }
        //   }
        // }
        this.$store.commit("betslip/SET_BETSLIPLIST", data);
      }
    },
    onClickBetButtonSingle(game, number, name, odds) {
      if (game.status === 3) return;

      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      if (!this.isBetAvailable) {
        this.showMessage("알림메시지", "배팅을 할수 없는 상태입니다.", "닫기[Close]", 2);
        return;
      }

      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.gameType == 2 ? 3 : 2,
        leagueName: this.gameType == 2 ? "개경주" : "경마",
        betTypeName: game.leagueName,
        betName: number + " - " + name,
        odds: this.processUserOdds(odds, this.userOdds),
        eventId: game.eventId,
        round: game.round,
        number: number,
        marketName: "승무패",
      };

      this.$store.commit("betslip/SET_BETSLIPLIST", []);
      this.$store.commit("betslip/SET_BETSLIPLIST", data);
    },
    // 경기시간계산
    calculateGameRemainTime() {
      if (!this.currentGame) return;
      for (let index = 0; index < this.currentGame.length; index++) {
        let game = this.currentGame[index];
        if (game.remainMins === 0 && game.remainSecs === 0) continue;
        game.remainSecs--;
        if (game.remainSecs < 0) {
          game.remainSecs = 59;
          game.remainMins--;
          if (game.remainMins < 0) game.remainMins = 0;
        }
        this.setReaminTime(game);
      }
    },
    setReaminTime(game) {
      if (game.remainSecs < 10)
        game.remainTime = game.remainMins + ":0" + game.remainSecs;
      else game.remainTime = game.remainMins + ":" + game.remainSecs;
    },
    onCollapse(leagueId) {
      let element = document.getElementById("collapseleague-" + leagueId);
      if (this.themeType == "orange11") {
        if (element.classList.contains("collapse-up-orange11")) {
          element.classList.remove("collapse-up-orange11");
          element.classList.add("collapse-down-orange11");
        } else {
          element.classList.remove("collapse-down-orange11");
          element.classList.add("collapse-up-orange11");
        }
      } else {
        if (element.classList.contains("collapse-up-blue")) {
          element.classList.remove("collapse-up-blue");
          element.classList.add("collapse-down-blue");
        } else {
          element.classList.remove("collapse-down-blue");
          element.classList.add("collapse-up-blue");
        }
      }

      let elements = document.getElementsByClassName("league-odds");
      for (let index = 0; index < elements.length; index++) {
        if (
          elements[index].classList.contains("show") &&
          elements[index].id !== "league" + leagueId
        ) {
          elements[index].classList.remove("show");
        }
      }
    },
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
  },
};
</script>
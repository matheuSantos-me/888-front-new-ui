<template>
  <client-only>
    <div id="righttemp" ref="righttemp">
      <div v-if="selectedGame" class="display-inlineblock width-full">
        <!-- 팀정보 -->
        <div class="col-md-12 width-full" :class="[`v-box1-agero-${sportsType}-${themeType}`]">
          <iframe v-if="isUseNewTracker && baseUrl != ''" id="myframe" :src="baseUrl" width="100%" :height="iHeight" scrolling="no" frameborder="0"></iframe>
          <div v-if="!isUseNewTracker && selectedGame.Fixture.Sport.Id !== 687890" v-show="!trackerError" :id="'tracker-' + selectedGame.FixtureId"
            :class="{'m-t-5' : isMobile}" style="clear: both;"></div>
          <!-- 프리매치 -->
          <el-row v-if="layoutType == 'layout1' && sportsType === 'prematch' && (selectedGame.Fixture.Sport.Id === 687890 || trackerError)"
            class="width-full f-s-14 text-left sports-right-panel-title display-inlineblock" id="RIGHT_TITLE"
            :class="[isMobile ? 'm-b-2 m-t-2' : 'm-b-18', themeType == 'white' ? 'bg-grey904 text-black' : 'bg-black17']">
            <div class="float-left display-center p-l-10 p-r-10" :class="isMobile ? 'height-42' : 'height-60'" style="width: calc(50% - 30px)">
              <img v-if="selectedGame.Fixture.Participants[0].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[0].ImageUrl)"
                width="40" class="float-left m-r-5 p-r-10" :class="{'display-none' : isMobile}" />
              <div class="f-s-16 f-w-700 float-left" :style="isMobile ? 'width: 100%' : 'width: calc(100% - 60px)'">{{selectedGame.Fixture.Participants[0].Name}}</div>
            </div>
            <div class="float-left text-center" style="width: 60px;">
              <img :src="`/image/Sports/${themeType}/vs.png`" :height="isMobile ? 42 : 60" />
            </div>
            <div class="float-left display-center text-right p-l-10 p-r-10" :class="isMobile ? 'height-42' : 'height-60'" style="width: calc(50% - 30px)">
              <div class="f-s-16 f-w-700 float-right" :style="isMobile ? 'width: 100%' : 'width: calc(100% - 60px)'">{{selectedGame.Fixture.Participants[1].Name}}</div>
              <img v-if="selectedGame.Fixture.Participants[1].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[1].ImageUrl)"
                width="40" class="m-l-5 p-l-10 float-right" :class="{'display-none' : isMobile}" />
            </div>
          </el-row>
          <!-- 프리매치 끝 -->
          <!-- 인플레이 -->
          <el-row v-if="layoutType == 'layout1' && sportsType === 'inplay' && (selectedGame.Fixture.Sport.Id === 687890 || trackerError)"
            class="col-md-12 width-full f-s-14 text-left sports-right-panel-title" id="RIGHT_TITLE" style="height: 228px; background-color: #030303; border-top: 0"
            :class="isMobile ? 'm-b-2 m-t-2' : 'm-b-18'">
            <el-col :span="6" class="text-center display-center height-full">
              <el-row style="display: table-cell; vertical-align: middle;">
                <el-row>
                  <img v-if="selectedGame.Fixture.Participants[0].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[0].ImageUrl)" height="40" />
                </el-row>
                <el-row class="f-s-20 f-w-700 m-l-5 text-white m-t-15">{{selectedGame.Fixture !== undefined ? selectedGame.Fixture.Participants[0].Name : ''}}</el-row>
              </el-row>
            </el-col>
            <el-col :span="12" class="text-center f-s-12 text-white">
              <el-row class="m-t-12">{{selectedGame.Fixture.StartDate | parseTime('{y}년 {m}월 {d}일')}}</el-row>
              <el-row class="m-t-4">{{selectedGame.Fixture.StartDate | parseTime('{h}:{i}:{s}')}}</el-row>
              <el-row class="f-s-16 m-t-15" :class="getTextColor(themeType, 1)">{{ selectedGame.Livescore ? selectedGame.Livescore.Scoreboard.StatusDescription : ''}}</el-row>
              <el-row class="f-s-26 f-w-700 m-t-30">
                {{ selectedGame.Livescore ? selectedGame.Livescore.Scoreboard.Results[0].Value : '0'}} : {{ selectedGame.Livescore ? selectedGame.Livescore.Scoreboard.Results[1].Value : '0'}}
              </el-row>
              <el-row class="m-t-20" style="display: flex; flex-direction: row; justify-content: center;" v-if="selectedGame.Livescore">
                <div v-for="(period, periodIndex) in selectedGame.Livescore.Periods" :key="periodIndex" class="p-r-5 p-l-5">
                  <el-row>{{period.StatusDescription}}</el-row>
                  <el-row class="m-t-4">{{period.Results[0].Value}}:{{period.Results[1].Value}}</el-row>
                </div>
              </el-row>
            </el-col>
            <el-col :span="6" class="text-center display-center height-full">
              <el-row style="display: table-cell; vertical-align: middle;">
                <el-row>
                  <img v-if="selectedGame.Fixture.Participants[1].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[1].ImageUrl)" height="40" />
                </el-row>
                <el-row class="f-s-20 f-w-700 m-l-5 text-white m-t-15">{{selectedGame.Fixture !== undefined ? selectedGame.Fixture.Participants[1].Name : ''}}</el-row>
              </el-row>
            </el-col>
          </el-row>
          <!-- 인플레이 끝 -->
          <el-row class="text-white f-s-14 m-b-8" v-if="(layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && sportsType === 'prematch' && (selectedGame.Fixture.Sport.Id === 687890 || trackerError)">
            <el-row style="background: #1F2124; border-radius: 6px 6px 0px 0px; padding: 10px 16px;">
              {{selectedGame.Fixture.League.Name}}
            </el-row>
            <el-row>
              <img :src="`/image/Sports/${themeType}/info.png`" width="100%">
              <div class="display-center" style="position: absolute; left: 5%; top: 5%; width: 90%; height: 90%; background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(19px); border-radius: 8px;">
                <div class="width-half float-left p-r-8">
                  <img v-if="selectedGame.Fixture.Participants[0].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[0].ImageUrl)"
                    width="40" class="float-right m-l-16 p-r-10" :class="{'display-none' : isMobile}" />
                  <div class="f-s-16 f-w-700 float-right text-right" :style="isMobile ? 'width: 100%' : 'width: calc(100% - 60px)'">{{selectedGame.Fixture.Participants[0].Name}}</div>
                </div>:
                <div class="width-half float-left p-l-8">
                  <img v-if="selectedGame.Fixture.Participants[1].ImageUrl" :src="filterEmblem(selectedGame.Fixture.Participants[1].ImageUrl)"
                    width="40" class="m-r-16 p-l-10 float-left" :class="{'display-none' : isMobile}" />
                  <div class="f-s-16 f-w-700 float-left text-left" :style="isMobile ? 'width: 100%' : 'width: calc(100% - 60px)'">{{selectedGame.Fixture.Participants[1].Name}}</div>
                </div>
              </div>
            </el-row>
          </el-row>
          <!-- 팀정보 끝 -->
          <!-- 탭 -->
          <el-row class="display-flex width-full" :class="isMobile ? 'm-b-2 m-t-5' : 'm-b-9'">
            <div v-for="(marketTab, index) in marketTabList" :key="index" v-if="selectedGame.Markets.findIndex(market => market.TabId === marketTab._id) > -1"
              :class="[{'on': oddsCategory === marketTab._id}, `odds-main-type-tab-${themeType}`]">
              <div
                :class="{
                  'odds-main-type-tab-in-white': themeType == 'white', 
                  'odds-main-type-tab-in-orange12': layoutType == 'layout2', 
                  'odds-main-type-tab-in-yellow17': themeType == 'yellow17', 
                  'odds-main-type-tab-in-blue19': themeType == 'blue19', 
                  'odds-main-type-tab-in-blue11': themeType == 'blue11', 
                  'odds-main-type-tab-in': themeType != 'white' && layoutType != 'layout2' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11'
                }"
                @click="onClickOddsCategoryTab(marketTab._id, index)"
                style="border-left: 0"
              >{{marketTab.name}}</div>
            </div>
          </el-row>
          <!-- 탭 끝 -->
          <!-- 배당 -->
          <div class="col-md-12 width-full v-box1" :class="{'border-none': layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}">
            <div class="col-md-12 width-full" :class="`v-box2-${themeType}`">
              <!-- 일반배당 -->
              <div
                v-for="(market, marketIndex) in selectedGame.Markets"
                :key="marketIndex"
                v-if="
                  market && market.Visible && market.BetLines && 
                  market.BetLines.filter(line => line.Bets && line.Bets.findIndex(bet => bet && bet.Status === 1) > -1).length > 0 && 
                  market.BetLines.filter(line => line.Bets && line.Bets[0] && line.Bets[0].Status === 4).length !== market.BetLines.length && 
                  market.TabId === oddsCategory"
                class="col-md-12 p-0 width-full"
              >
                <el-row :class="{'m-b-8': layoutType == 'layout2'}">
                  <!-- 배당헤더 -->
                  <ul
                    class="col-md-12 width-full cursor"
                    :class="`sub-title-${themeType}`"
                    style="font-size: 10pt !important;"
                    data-toggle="collapse"
                    :data-target="'#market' + selectedGame.FixtureId + '-' + market.Id"
                    aria-expanded="false"
                    :aria-controls="'market' + selectedGame.FixtureId + '-' + market.Id"
                    @click="onCollapse(market.Id)"
                  >
                    <i
                      class="fa m-t-3 float-right"
                      :class="{
                        'text-orange11' : themeType == 'orange11' && market.Collapse,
                        'text-orange13' : themeType == 'orange13' && market.Collapse,
                        'text-purple11' : themeType == 'purple11' && market.Collapse,
                        'text-red13' : themeType == 'red13' && market.Collapse,
                        'text-blue12' : themeType == 'blue12' && market.Collapse,
                        'text-yellow19' : themeType == 'yellow19' && market.Collapse,
                        'text-purple12' : themeType == 'purple12' && market.Collapse,
                        'text-blue16': themeType == 'blue16' && market.Collapse,
                        'text-gold12': themeType == 'gold12' && market.Collapse,
                        'text-blue17': themeType == 'blue17' && market.Collapse,
                        'text-orange14': themeType == 'orange14' && market.Collapse,
                        'text-yellow17': themeType == 'yellow17' && market.Collapse,
                        'text-blue19': themeType == 'blue19' && market.Collapse,
                        'text-blue11': themeType == 'blue11' && market.Collapse,
                        'text-yellow-1': themeType == 'white' && market.Collapse,
                        'text-red12': themeType == 'red12' && market.Collapse,
                        'text-blue15': themeType == 'blue15' && market.Collapse,
                        'text-red11': themeType == 'red11' && market.Collapse,
                        'text-gold11': themeType == 'gold11' && market.Collapse,
                        'text-orange14': themeType == 'orange14' && market.Collapse,
                        'text-yellow13-1': themeType == 'yellow13' && market.Collapse,
                        'text-red15': themeType == 'red15' && market.Collapse,
                        'fa-chevron-down': market.Collapse,
                        'fa-chevron-up text-white': !market.Collapse && themeType != 'white',
                        'fa-chevron-up text-yellow-1': !market.Collapse && themeType == 'white'}"
                      :id="'collapse-' + selectedGame.FixtureId + '-' + market.Id"
                    ></i>
                    <span class="f-s-13" :class="`sports-color-${themeType}`">{{market.Name}}</span>
                  </ul>
                  <!-- 배당헤더 끝 -->
                  <!-- 배당 -->
                  <div class="width-full m-0 p-0 collapse" :class="{'show': market.Collapse}" aria-expanded="false" :id="'market' + selectedGame.FixtureId + '-' + market.Id">
                    <div class="width-full display-inlineblock"
                      :class="{'p-b-7': isMobile && layoutType != 'layout2', 'p-b-12': !isMobile && layoutType != 'layout2'}"
                      :style="layoutType == 'layout2' ? 'background: #181A1C; padding: 8px; border-radius: 0px 0px 6px 6px;' : 'padding: 0'"
                    >
                      <ul v-for="(bet, betIndex) in market.BetLines" :key="betIndex"
                        v-if="bet.Bets[0] && bet.Bets[0].Status !== 4 && bet.Bets.findIndex(bet => bet && bet.Status === 1) > -1"
                        class="list-box-g2 col-md-12 width-full m-t-0">
                        <li class="hva_bt_sub1">
                          <div v-if="bet.Bets[0]" class="display-inlineblock btn-main btn-block btn-btn"
                            :class="[
                              {'active': betSlipList.findIndex(slip => slip.BetId == bet.Bets[0].Id) > -1}, 
                              {'p-2 p-t-10 p-b-10 btn-sports-detail-mob': isMobile}, 
                              {'f-s-10' : isMobile && bet.Bets[0].Name.length > 4}, 
                              {'f-s-12' : isMobile && bet.Bets[0].Name.length < 5}, 
                              {'p-l-8 p-r-8 f-s-12 btn-sports-detail': !isMobile},
                              isMobile ? `btn-odds-mobile-${themeType}` : `btn-odds-${themeType}`
                            ]"
                            @click="onClickBetButton(market.Id, market.Name, bet.Bets[0])">
                            <ul class="list-box-g2 col-md-12">
                              <el-col :span="17" class="hva-txt text-left p-0" style="overflow-x: auto">
                                <span>{{bet.Bets[0].Name}}</span>
                                <span class="m-l-10" :class="`odds-basic-${themeType}`">{{bet.Bets[0].Line}}</span>
                              </el-col>
                              <el-col :span="7" class="hva-txt text-right p-0" :class="{'f-w-900': themeType == 'gold11'}">
                                <span>{{filterOdds(processUserOdds(bet.Bets[0].Price, userOdds))}}</span>
                              </el-col>
                              <img v-show="bet.Bets[0].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" />
                              <img v-show="bet.Bets[0].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" />
                            </ul>
                            <div v-show="bet.Bets[0].Status !== 1" class="display-center" :class="`odd-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" />
                            </div>
                          </div>
                          <div v-else
                            class="btn btn-sports-detail-null btn-block btn-btn p-l-8 p-r-8"
                            :class="isMobile ? 'p-t-10 p-b-10 height-39 f-s-10' : 'f-s-12'"
                          ></div>
                        </li>
                        <li v-if="bet.Bets[2]" class="hva_bt_sub1">
                          <div v-if="bet.Bets[2]"
                            class="display-inlineblock btn-main btn-block btn-btn"
                            :class="[
                              {'active': betSlipList.findIndex(slip => slip.BetId == bet.Bets[2].Id) > -1}, 
                              {'p-2 p-t-10 p-b-10 btn-sports-detail-mob': isMobile}, 
                              {'f-s-10' : isMobile && bet.Bets[2].Name.length > 4}, 
                              {'f-s-12' : isMobile && bet.Bets[2].Name.length < 5}, 
                              {'p-l-8 p-r-8 f-s-12 btn-sports-detail': !isMobile},
                              isMobile ? `btn-odds-mobile-${themeType}` : `btn-odds-${themeType}`
                            ]"
                            @click="onClickBetButton(market.Id, market.Name, bet.Bets[2])">
                            <ul class="list-box-g2 col-md-12">
                              <el-col :span="17" class="hva-txt text-left p-0" style="overflow-x: auto">
                                <span>{{bet.Bets[2].Name}}</span>
                                <span class="m-l-10" :class="`odds-basic-${themeType}`">{{bet.Bets[0].Line}}</span>
                              </el-col>
                              <el-col :span="7" class="hva-txt text-right p-0" :class="{'f-w-900': themeType == 'gold11'}">
                                <span>{{filterOdds(processUserOdds(bet.Bets[2].Price, userOdds))}}</span>
                              </el-col>
                              <img v-show="bet.Bets[2].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" />
                              <img v-show="bet.Bets[2].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" />
                            </ul>
                            <div v-show="bet.Bets[2].Status !== 1" class="display-center" :class="`odd-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" />
                            </div>
                          </div>
                        </li>
                        <li v-if="bet.Bets[2] === null" class="hva_bt_sub1">
                          <div
                            class="display-inlineblock btn btn-sports-detail-null btn-block btn-btn p-l-8 p-r-8"
                            :class="[isMobile ? 'p-t-10 p-b-10 height-39 f-s-10' : 'f-s-12', {'btn-basic-white': themeType == 'white'}]"
                          ></div>
                        </li>
                        <li class="hva_bt_sub1">
                          <div v-if="bet.Bets[1]"
                            class="display-inlineblock btn-main btn-block btn-btn"
                            :class="[
                              {'active': betSlipList.findIndex(slip => slip.BetId == bet.Bets[1].Id) > -1}, 
                              {'p-2 p-t-10 p-b-10 btn-sports-detail-mob': isMobile}, 
                              {'f-s-10' : isMobile && bet.Bets[1].Name.length > 4}, 
                              {'f-s-12' : isMobile && bet.Bets[1].Name.length < 5}, 
                              {'p-l-8 p-r-8 f-s-12 btn-sports-detail': !isMobile},
                              isMobile ? `btn-odds-mobile-${themeType}` : `btn-odds-${themeType}`
                            ]"
                            @click="onClickBetButton(market.Id, market.Name, bet.Bets[1])">
                            <ul class="list-box-g2 col-md-12">
                              <el-col :span="17" class="hva-txt text-left p-0" style="overflow-x: auto">
                                <span>{{bet.Bets[1].Name}}</span>
                                <span class="m-l-10" :class="`odds-basic-${themeType}`">{{bet.Bets[1].Line}}</span>
                              </el-col>
                              <el-col :span="7" class="hva-txt text-right p-0" :class="{'f-w-900': themeType == 'gold11'}">
                                <span>{{filterOdds(processUserOdds(bet.Bets[1].Price, userOdds))}}</span>
                              </el-col>
                              <img v-show="bet.Bets[1].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" />
                              <img v-show="bet.Bets[1].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" />
                            </ul>
                            <div v-show="bet.Bets[1].Status !== 1" class="display-center" :class="`odd-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" />
                            </div>
                          </div>
                          <div v-else class="display-inlineblock btn btn-sports-detail-null btn-block btn-btn p-l-8 p-r-8"
                            :class="isMobile ? 'p-t-10 p-b-10 height-39 f-s-10' : 'f-s-12'"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 배당 -->
                </el-row>
              </div>
              <!-- 일반배당 끝 -->
              <!-- 크로스배당 -->
              <div
                v-if="(
                  (sportsType == 'prematch' && gameSettings.Sports.isUseCrossBasketball && selectedGame.Fixture.Sport.Id == 48242 && selectedOddsCategoryIndex == 0) || 
                  (sportsType == 'prematch' && gameSettings.Sports.isUseCrossBaseball && selectedGame.Fixture.Sport.Id == 154914 && selectedOddsCategoryIndex == 0) || 
                  (sportsType == 'inplay' && gameSettings.Live.isUseCrossBasketball && selectedGame.Fixture.Sport.Id == 48242 && selectedOddsCategoryIndex == 1)) && 
                  selectedGame.Cross && 
                  selectedGame.Cross.CrossLines && 
                  selectedGame.Cross.CrossLines.filter(betLine => betLine.CrossBets.findIndex(bet => bet.Status === 1) > -1).length > 0"
                class="col-md-12 p-0 width-full"
              >
                <el-row :class="{'m-b-8': layoutType == 'layout2'}">
                  <!-- 배당헤더 -->
                  <ul class="col-md-12 width-full cursor" :class="`sub-title-${themeType}`" data-toggle="collapse" aria-expanded="false"
                    :data-target="'#market' + selectedGame.FixtureId + '-' + '0'"
                    :aria-controls="'market' + selectedGame.FixtureId + '-' + '0'"
                    @click="onCollapse(0)"
                  >
                    <i
                      class="fa m-t-3 float-right"
                      :class="{
                        'text-orange11' : themeType == 'orange11',
                        'text-orange13' : themeType == 'orange13',
                        'text-purple11' : themeType == 'purple11',
                        'text-red13' : themeType == 'red13',
                        'text-blue12' : themeType == 'blue12',
                        'text-yellow19' : themeType == 'yellow19',
                        'text-purple12' : themeType == 'purple12',
                        'text-blue16': themeType == 'blue16',
                        'text-gold12': themeType == 'gold12',
                        'text-blue17': themeType == 'blue17',
                        'text-orange14': themeType == 'orange14',
                        'text-yellow17': themeType == 'yellow17',
                        'text-blue19': themeType == 'blue19',
                        'text-blue11': themeType == 'blue11',
                        'text-yellow': themeType == 'white',
                        'text-red12': themeType == 'red12',
                        'text-blue15': themeType == 'blue15',
                        'text-red11': themeType == 'red11',
                        'text-gold11': themeType == 'gold11',
                        'text-orange14': themeType == 'orange14',
                        'text-yellow13-1': themeType == 'yellow13',
                        'text-red15': themeType == 'red15',
                        'fa-chevron-up text-white': themeType != 'white',
                        'fa-chevron-up text-yellow-1': themeType == 'white'}"
                      :id="'collapse-' + selectedGame.FixtureId + '-' + '0'"
                    ></i>
                    <span class="f-s-13" :class="getTextColor(themeType, 1)">{{selectedGame.Cross.CrossName}}</span>
                  </ul>
                  <!-- 배당헤더 끝 -->
                  <!-- 배당 -->
                  <ul
                    class="market-odds col-md-1 width-full collapse show" aria-expanded="false"
                    :class="{'m-0 p-0 p-b-7': isMobile && layoutType != 'layout2', 'm-0 p-0 p-b-12': !isMobile && layoutType != 'layout2'}"
                    :id="'market' + selectedGame.FixtureId + '-' + '0'"
                    :style="layoutType == 'layout2' ? 'background: #181A1C; padding: 8px; border-radius: 0px 0px 6px 6px;' : 'padding: 0'"
                  >
                    <ul
                      v-for="(betLine, betLineIndex) in selectedGame.Cross.CrossLines"
                      :key="betLineIndex"
                      v-if="betLine.CrossBets.findIndex(bet => bet && bet.Status === 1) > -1"
                      class="list-box-g2 col-md-12 width-full m-t-0">
                      <li class="hva_bt_sub1">
                        <div
                          v-if="betLine.CrossBets[0]"
                          class="display-inlineblock btn-main btn-block btn-btn f-s-12"
                          :class="[
                            {'active': betSlipList.findIndex(slip => slip.BetId == betLine.CrossBets[0].id) > -1}, 
                            {'p-2 p-t-10 p-b-10 btn-sports-detail-mob': isMobile}, 
                            {'p-l-8 p-r-8 btn-sports-detail': !isMobile},
                            isMobile ? `btn-odds-mobile-${themeType}` : `btn-odds-${themeType}`
                          ]"
                          @click="onClickCrossBetButton(betLine.CrossBets[0])">
                          <div class="list-box-g2 col-md-12">
                            <el-col :span="17" class="hva-txt text-left p-0">
                              <el-row>
                                {{betLine.CrossBets[0].Name1}}
                                <span v-if="betLine.CrossBets[0].Baseline1">
                                  (<span :class="`odds-basic-${themeType}`">{{betLine.CrossBets[0].Baseline1}}</span>)
                                </span> +
                              </el-row>
                              <el-row>
                                {{betLine.CrossBets[0].Name2}}(
                                <span :class="`odds-basic-${themeType}`">{{betLine.CrossBets[0].Baseline2}}</span>)
                              </el-row>
                            </el-col>
                            <el-col :span="7" class="hva-txt text-right p-0 float-right p-t-7" :class="{'f-w-900': themeType == 'gold11'}">
                              {{filterOdds(processUserOdds(processUserOdds(betLine.CrossBets[0].Price, userOdds), userOdds))}}
                            </el-col>
                            <img v-show="betLine.CrossBets[0].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" style="top: calc(-50% + 11px);" />
                            <img v-show="betLine.CrossBets[0].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" style="top: calc(50% + 11px);" />
                          </div>
                          <div v-show="betLine.CrossBets[0].Status !== 1" class="p-t-13 display-center" :class="`odd-lock-${themeType}`">
                            <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" />
                          </div>
                        </div>
                        <div v-else class="display-inlineblock btn btn-sports-detail-null btn-block btn-btn p-l-8 p-r-8"></div>
                      </li>
                      <li class="hva_bt_sub1">
                        <div
                          v-if="betLine.CrossBets[1]"
                          class="display-inlineblock btn-main btn-block btn-btn f-s-12"
                          :class="[
                            {'active': betSlipList.findIndex(slip => slip.BetId == betLine.CrossBets[1].id) > -1}, 
                            {'p-2 p-t-10 p-b-10 btn-sports-detail-mob': isMobile}, 
                            {'p-l-8 p-r-8 btn-sports-detail': !isMobile},
                            isMobile ? `btn-odds-mobile-${themeType}` : `btn-odds-${themeType}`
                          ]"
                          @click="onClickCrossBetButton(betLine.CrossBets[1])">
                          <div class="list-box-g2 col-md-12">
                            <el-col :span="17" class="hva-txt text-left p-0">
                              <el-row>
                                {{betLine.CrossBets[1].Name1}}
                                <span v-if="betLine.CrossBets[1].Baseline1">
                                  (
                                  <span :class="`odds-basic-${themeType}`">{{betLine.CrossBets[1].Baseline1}}</span>)
                                </span> +
                              </el-row>
                              <el-row>
                                {{betLine.CrossBets[1].Name2}}(
                                <span :class="`odds-basic-${themeType}`">{{betLine.CrossBets[1].Baseline2}}</span>)
                              </el-row>
                            </el-col>
                            <el-col :span="7" class="hva-txt text-right p-0 float-right p-t-7" :class="{'f-w-900': themeType == 'gold11'}">
                              {{filterOdds(processUserOdds(processUserOdds(betLine.CrossBets[1].Price, userOdds), userOdds))}}
                            </el-col>
                            <img v-show="betLine.CrossBets[1].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" style="top: calc(-50% + 11px);" />
                            <img v-show="betLine.CrossBets[1].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" style="top: calc(50% + 11px);" />
                          </div>
                          <div v-show="betLine.CrossBets[1].Status !== 1" class="p-t-13 display-center" :class="`odd-lock-${themeType}`">
                            <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" />
                          </div>
                        </div>
                        <div v-else class="display-inlineblock btn btn-sports-detail-null btn-block btn-btn p-l-8 p-r-8"></div>
                      </li>
                    </ul>
                  </ul>
                  <!-- 배당 -->
                </el-row>
              </div>
              <!-- 크로스배당 끝 -->
            </div>
          </div>
          <!-- 배당 끝 -->
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { filterOdds, parseTime, processUserOdds } from "~/assets/js/utils";
import { linkImage } from "~/assets/js/data/datamanagement.js";
import { getTextColor } from "@/assets/js/data/uicommon"

const mainService = feathers.service("main")
const sportsFixtureService = feathers.service("getSportsFixture")
sportsFixtureService.timeout = 60000;

export default {
  props: ["sportsType", "isBetAvailable", "fixtureId", "isShowMobile"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      selectedFixtureId: "sports/getSelectedFixtureId",
      betSlipList: "betslip/getBetSlipList",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      gameSettings: "getGameSettings",
      isUseNewTracker: "getIsUseNewTracker",
      screenWidth: "getScreenWidth",
      sportsAPI: "getSportsAPI"
    }),
  },
  filters: {
    parseTime
  },
  watch: {
    selectedFixtureId(val) {
      // 낮은 해상도에서 선택된 경기를 삭제
      if (
        !this.isShowMobile &&
        (val === -1 || (this.fixtureId && this.fixtureId !== val))
      ) {
        this.selectedGame = null;
        return;
      }
      // 경기 아이디 설정 및 상세정보 얻기
      this.gameId = this.selectedFixtureId;
      this.getFixture();
    },
    screenWidth(val) {
      this.initFrame()
    }
  },
  data() {
    return {
      baseUrl: '',
      oddsCategory: null, // 선택된 마켓탭 아이디
      selectedOddsCategoryIndex: 0, // 선택된 마켓탭 인덱스
      selectedGame: null, // 경기정보
      gameId: -1, // 경기아이디
      marketTabList: [], // 스포츠 타입 및 종목에 따르는 마켓탭 리스트
      trackerError: false,
      userOdds: 0,
      iHeight: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initFrame()
    })
    if (this.currentUser) {
      if (this.sportsType == "prematch") {
        let index = this.gameSettings.Sports.levelSetting.findIndex(setting => setting.level == this.currentUser.level)
        if (index > -1) {
          this.userOdds = this.gameSettings.Sports.levelSetting[index].userOdds
        }
      } else {
        let index = this.gameSettings.Live.levelSetting.findIndex(setting => setting.level == this.currentUser.level)
        if (index > -1) {
          this.userOdds = this.gameSettings.Live.levelSetting[index].userOdds
        }
      }
    }

    // props로 부터 경기아이디를 받은 경우 경기아이디 설정
    if (this.fixtureId) this.gameId = this.fixtureId;

    // 경기상세정보 얻기
    this.getFixture();

    if (this.sportsType == "prematch") {
      // 프리매치 패치
      mainService.on("UpdatePrematch", (data) => {
        this.prematchUpdate(data);
      });
    } else {
      // 실시간패치
        mainService.on("UpdateInplay", (data) => {
        this.inplayUpdate(data);
      });
    }
  },
  methods: {
    filterOdds,
    getTextColor,
    processUserOdds,
    initFrame() {
      if (!this.isUseNewTracker) return

      let jbWidth1 = this.isMobile ? this.$refs.righttemp.clientWidth - 10 : this.$refs.righttemp.clientWidth - 20
      this.iHeight = (404/800*jbWidth1) + 142
    },
    filterEmblem(filename) {
      if (this.sportsAPI) return filename
      return linkImage(filename);
    },
    // 경기상세정보 얻기
    getFixture() {
      // 경기가 선택되지 않으면 리턴
      this.trackerError = false;
      if (this.gameId === -1) return;

      this.$nuxt.$loading.start();
      this.selectedGame = null;

      sportsFixtureService.find({ query: {
        fixtureid: this.gameId,
        sportstype: this.sportsType
      }})
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
            this.$nuxt.$loading.finish();
            return
          }
          console.log("getFixture", res.data)
          if (res.data.fixture) {
            this.selectedGame = res.data.fixture;
            this.marketTabList = res.data.marketTab.data;
            if (this.isUseNewTracker) {
              this.initFrame()
              if (res.data.theSportsIds != '-1') {
                if (this.selectedGame.Fixture.Sport.Id == 6046) {           // 축구
                  this.baseUrl = "https://widgets-v2.thesports01.com/ko/pro/football?profile=74m1gh9pdspuomw&uuid=" + res.data.theSportsIds
                } else if (this.selectedGame.Fixture.Sport.Id == 48242) {   // 농구
                  this.baseUrl = "https://widgets.thesports01.com/ko/3D/basketball?profile=4jrn1tyo1i9u0qp&uuid=" + res.data.theSportsIds
                } else if (this.selectedGame.Fixture.Sport.Id == 154830) {  // 배구
                  this.baseUrl = "https://widgets.thesports01.com/ko/3D/volleyball?profile=1nh9pdszh2edvgg8&uuid=" + res.data.theSportsIds
                } else if (this.selectedGame.Fixture.Sport.Id == 35232) {   // 아이스하키
                  this.baseUrl = "https://widgets.thesports01.com/ko/3D/ice-hockey?profile=zyb36ea9hv10gdpn&uuid=" + res.data.theSportsIds
                } else if (this.selectedGame.Fixture.Sport.Id == 154914) {   // 야구
                  this.baseUrl = "https://widgets.thesports01.com/ko/baseball?profile=1eryvs7e3h2udrw&uuid=" + res.data.theSportsIds
                } else {
                  this.baseUrl = ''
                  this.trackerError = true
                }
              } else {
                this.baseUrl = ''
                this.trackerError = true
              }
            } else {
              setTimeout(this.createTracker, 1000);
            }

            this.SortMarketTab();
            this.SortMarket();
          }
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.$nuxt.$loading.finish();
        });
    },
    // 마켓탭정렬
    SortMarketTab() {
      this.marketTabList.sort(function (a, b) {
        // 내림차순
        return a.sortNum - b.sortNum;
      });
      this.oddsCategory = this.marketTabList[0]._id;
    },
    // 마켓정렬
    SortMarket() {
      this.selectedGame.Markets.sort(function (a, b) {
        // 내림차순
        return a.SortNum - b.SortNum;
      });
    },
    // 트래커 창조
    createTracker() {
      STATSCOREWidgets.onLoad(err => {
        if (err) {
          switch (err.type) {
            case 'NetworkError':
              break;
            case 'BrowserNotSupported':
              break;
          }
          this.trackerErrorHandle();
          console.log(err);
          return;
        }

        const element = document.getElementById("tracker-" + this.gameId);
        const configurationId = process.env.trackerId;
        const inputData = { eventId: 'm:' + this.gameId, language: 'ko' };
        const options = {};
        const widget = new window.STATSCOREWidgets.WidgetGroup(element, configurationId, inputData, options);
        widget.on('error', e => { this.trackerErrorHandle() });
      });
    },
    // 트래커 오류 핸들링
    trackerErrorHandle() {
      this.trackerError = true;
    },
    // 프리매치 패치
    prematchUpdate(prematchData) {
      if (prematchData.type === 3) {
        this.AddMarket(prematchData); // 마켓추가
      } else if (prematchData.type === 8) {
        this.AddBet(prematchData); // 배당추가 (마켓을 다시 보냄)
      } else if (prematchData.type === 10) {
        this.UpdateCross(prematchData); // 크로스 전체 업뎃
      } else if (prematchData.type === 11) {
        this.DeleteCross(prematchData); // 크로스 삭제
      }
    },
    // 인플레이 패치
    inplayUpdate(inplayData) {
      if (inplayData.type === 5) {
        this.UpdateLiveSocre(inplayData);
      } else if (inplayData.type === 6) {
        this.AddMarket(inplayData);
      } else if (inplayData.type === 8) {
        this.AddBet(inplayData);
      } else if (inplayData.type === 10) {
        this.UpdateCross(inplayData); // 크로스 전체 업뎃
      } else if (inplayData.type === 11) {
        this.DeleteCross(inplayData); // 크로스 삭제
      }
    },
    // 라이브스코어 패치
    UpdateLiveSocre(patchData) {
      if (!this.selectedGame) return;
      if (this.selectedGame.FixtureId === patchData.data.FixtureId) {
        this.selectedGame.Livescore.Scoreboard.Time = patchData.data.LiveScore.Scoreboard.Time;
        this.selectedGame.Livescore.Scoreboard.StatusDescription = patchData.data.LiveScore.Scoreboard.StatusDescription;
        this.selectedGame.Livescore.Scoreboard.Results[0].Value = patchData.data.LiveScore.Scoreboard.Results[0].Value;
        this.selectedGame.Livescore.Scoreboard.Results[1].Value = patchData.data.LiveScore.Scoreboard.Results[1].Value;
        if (!patchData.data.LiveScore || !patchData.data.LiveScore.Periods)
          return;
        for (let index = 0; index < patchData.data.LiveScore.Periods.length; index++) {
          if (index >= this.selectedGame.Livescore.Periods.length) {
            this.selectedGame.Livescore.Periods.push(patchData.data.LiveScore.Periods[index]);
          } else {
            this.selectedGame.Livescore.Periods[index].StatusDescription = patchData.data.LiveScore.Periods[index].StatusDescription;
            this.selectedGame.Livescore.Periods[index].Results[0].Value = patchData.data.LiveScore.Periods[index].Results[0].Value;
            this.selectedGame.Livescore.Periods[index].Results[1].Value = patchData.data.LiveScore.Periods[index].Results[1].Value;
          }
        }
      }
    },
    // 마켓추가
    AddMarket(patchData) {
      if (!this.selectedGame || this.selectedGame.FixtureId != patchData.data.FixtureId)
        return;

      this.selectedGame.Markets.push(patchData.data.Market);
      this.SortMarket();
    },
    // 배팅옵션추가
    AddBet(patchData) {
      if (
        !this.selectedGame ||
        this.selectedGame.FixtureId != patchData.data.FixtureId
      )
        return;
      let marketIndex = this.selectedGame.Markets.findIndex(
        (market) => market.Id === patchData.data.data.Id
      );
      if (marketIndex > -1) {
        let market = this.selectedGame.Markets;
        this.selectedGame.Markets.splice(marketIndex, 1);
      }
      this.selectedGame.Markets.push(patchData.data.data);
      this.SortMarket();
    },
    // 크로스 업뎃
    UpdateCross(patchData) {
      if ( !this.selectedGame || this.selectedGame.FixtureId != patchData.data.FixtureId )
        return;
      if (this.selectedGame.Cross && this.selectedGame.Cross.CrossLines)
        this.selectedGame.Cross.CrossLines.splice( 0, this.selectedGame.Cross.CrossLines.length );
      if ( this.selectedGame.Cross == null || this.selectedGame.Cross == undefined )
        this.selectedGame.Cross = { CrossLines: [] };
      this.selectedGame.Cross.CrossName = patchData.data.Cross.CrossName;
      this.selectedGame.Cross.Status = patchData.data.Cross.Status;
      this.selectedGame.Cross.Period = patchData.data.Cross.Period;
      for ( let lineIndex = 0; lineIndex < patchData.data.Cross.CrossLines.length; lineIndex++ ) {
        this.selectedGame.Cross.CrossLines.push( patchData.data.Cross.CrossLines[lineIndex] );
        for ( let betIndex = 0; betIndex < this.selectedGame.Cross.CrossLines[lineIndex].CrossBets.length; betIndex++ ) {
          let bet = this.selectedGame.Cross.CrossLines[lineIndex].CrossBets[betIndex];
          bet.Name1 = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Name1;
          bet.Name2 = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Name2;
          bet.Baseline1 = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Baseline1;
          bet.Baseline2 = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Baseline2;
          bet.Price = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Price;
          bet.Status = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].Status;
          bet.UpDown = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].UpDown;
          bet._id = patchData.data.Cross.CrossLines[lineIndex].CrossBets[betIndex].id
        }
      }
    },
    // 크로스 삭제
    DeleteCross(patchData) {
      if (!this.selectedGame || this.selectedGame.FixtureId != patchData.data.FixtureId)
        return;
      this.selectedGame.Cross = null;
    },
    // 배팅하기
    onClickBetButton(marketId, marketName, bet) {
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      if (!this.isBetAvailable) {
        this.showMessage( "알림메시지", "배팅을 할수 없는 상태입니다.", "닫기[Close]", 2 );
        return;
      }

      // 현재 회차정보를 얻지 못한 경우
      if (bet.Status !== 1) {
        this.showMessage( "알림메시지", "선택한 배팅옵션이 배팅할수 없는 상태입니다.", "닫기[Close]", 2 );
        return;
      }

      if (this.betSlipList.filter(slip => slip.FixtureId == this.selectedGame.FixtureId).length == 2) return

      // 배팅슬립에 배팅정보 추가
      let betName;
      if (bet.Line && bet.Line !== "") {
        betName = marketName + "(" + bet.Line + ") - " + bet.Name;
      } else {
        betName = marketName + " - " + bet.Name;
      }
      let data = {
        gameType: this.sportsType,
        SportId: this.selectedGame.Fixture.Sport.Id,
        FixtureId: this.selectedGame.FixtureId,
        MarketId: marketId, // 0: 크로스, .. 해당 마켓 아이디가 들어감...
        BetId: bet.Id, // MarketId=0 일때  CrossBet._id값이 들어간다.
        Bets: [
          {
            Id: bet.Id, // 배당 아이디
          },
        ],
        LeagueName: this.selectedGame.Fixture.League.Name,
        HomeName: this.selectedGame.Fixture.Participants[0].Name,
        AwayName: this.selectedGame.Fixture.Participants[1].Name,
        BetName: betName,
        odds: this.processUserOdds(bet.Price, this.userOdds),
        Status: bet.Status,
      };

      let index = this.betSlipList.findIndex( (slip) => slip.FixtureId === this.selectedGame.FixtureId );
      if (index > -1) {
        if (this.betSlipList[index].BetId === data.BetId) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", index);
          return;
        }
        let sameMarketIndex = this.betSlipList.findIndex(slip => slip.FixtureId == this.selectedGame.FixtureId && slip.MarketId == data.MarketId)
        if (sameMarketIndex > -1) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", sameMarketIndex);
          this.$store.commit("betslip/SET_BETSLIPLIST", data);
          return;
        }
        this.$store.commit("betslip/DELETE_BETSLIPONE", index);
      }
      this.$store.commit("betslip/SET_BETSLIPLIST", data);
    },
    // 크로스 배팅하기
    onClickCrossBetButton(bet) {
      console.log('crossbet', bet);
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      if (!this.isBetAvailable) {
        this.showMessage( "알림메시지", "배팅을 할수 없는 상태입니다.", "닫기[Close]", 2 );
        return;
      }

      // 현재 회차정보를 얻지 못한 경우
      if (bet.Status !== 1) {
        this.showMessage( "알림메시지", "선택한 배팅옵션이 배팅할수 없는 상태입니다.", "닫기[Close]", 2 );
        return;
      }

      if (this.betSlipList.filter(slip => slip.FixtureId == this.selectedGame.FixtureId).length == 2) return
      
      let betName;
      if (bet.Baseline1 !== undefined && bet.Baseline1 !== "") {
        betName = bet.Name1 + "(" + bet.Baseline1 + ") + " + bet.Name2 + "(" + bet.Baseline2 + ")";
      } else {
        betName = bet.Name1 + " + " + bet.Name2 + "(" + bet.Baseline2 + ")";
      }
      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.sportsType,
        SportId: this.selectedGame.Fixture.Sport.Id,
        FixtureId: this.selectedGame.FixtureId,
        MarketId: 0, // 0: 크로스, .. 해당 마켓 아이디가 들어감...
        BetId: bet.id, // MarketId=0 일때  CrossBet._id값이 들어간다.
        Bets: [
          {
            Id: bet.Bets[0].Id, // 배당 아이디
          },
          {
            Id: bet.Bets[1].Id, // 배당 아이디
          },
        ],
        LeagueName: this.selectedGame.Fixture.League.Name,
        HomeName: this.selectedGame.Fixture.Participants[0].Name,
        AwayName: this.selectedGame.Fixture.Participants[1].Name,
        BetName: betName,
        odds: this.processUserOdds(this.processUserOdds(bet.Price, this.userOdds), this.userOdds),
        Status: bet.Status,
      };
      let index = this.betSlipList.findIndex(
        (slip) => slip.FixtureId === this.selectedGame.FixtureId
      );
      if (index > -1) {
        if (
          this.betSlipList[index].MarketId != 0 &&
          this.betSlipList.findIndex((slip) => slip.MarketId === 0) > -1
        ) {
          this.showMessage( "알림메시지", "크로스는 한 폴더에 1개의 배팅만 허용됩니다.", "닫기[Close]", 2 );
          return;
        }
        if (this.betSlipList[index].BetId === data.BetId) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", index);
          return;
        }
        this.$store.commit("betslip/DELETE_BETSLIPONE", index);
      } else {
        if (this.betSlipList.findIndex((slip) => slip.MarketId === 0) > -1) {
          this.showMessage( "알림메시지", "크로스는 한 폴더에 1개의 배팅만 허용됩니다.", "닫기[Close]", 2 );
          return;
        }
      }

      this.$store.commit("betslip/SET_BETSLIPLIST", data);
    },
    // 탭선택
    onClickOddsCategoryTab(val, index) {
      this.oddsCategory = val;
      this.selectedOddsCategoryIndex = index;
    },
    // 마켓 콜랩스
    onCollapse(marketId) {
      let market = this.selectedGame.Markets[
        this.selectedGame.Markets.findIndex((market) => market.Id === marketId)
      ];
      let element = document.getElementById(
        "collapse-" + this.selectedGame.FixtureId + "-" + marketId
      );
      if (element.classList.contains("text-white")) {
        element.classList.remove("text-white");
        element.classList.remove("fa-chevron-up");
        if (this.themeType == "orange11") {
          element.classList.add("text-orange11");
        } else if (this.themeType == "orange13") {
          element.classList.add("text-orange13");
        } else if (this.themeType == "purple11") {
          element.classList.add("text-purple11");
        } else if (this.themeType == "red13") {
          element.classList.add("text-red13");
        } else if (this.themeType == "blue12") {
          element.classList.add("text-blue12");
        } else if (this.themeType == "yellow19") {
          element.classList.add("text-yellow19");
        } else if (this.themeType == "purple12") {
          element.classList.add("text-purple12");
        } else if (this.themeType == "blue16") {
          element.classList.add("text-blue16");
        } else if (this.themeType == "gold12") {
          element.classList.add("text-gold12");
        } else if (this.themeType == "blue17") {
          element.classList.add("text-blue17");
        } else if (this.themeType == "orange14") {
          element.classList.add("text-orange14");
        } else if (this.themeType == "yellow17") {
          element.classList.add("text-yellow17");
        } else if (this.themeType == "blue19") {
          element.classList.add("text-blue19");
        } else if (this.themeType == "blue11") {
          element.classList.add("text-blue11");
        } else if (this.themeType == "yellow13") {
          element.classList.add("text-yellow13-1");
        } else if (this.themeType == "red15") {
          element.classList.add("text-red15");
        } else if (this.themeType == "white") {
          element.classList.add("text-yellow-1");
        } else if (this.themeType == "red12") {
          element.classList.add("text-red12");
        } else if (this.themeType == "blue15") {
          element.classList.add("text-blue15");
        } else if (this.themeType == "red11") {
          element.classList.add("text-red11");
        } else if (this.themeType == "gold11") {
          element.classList.add("text-gold11");
        }
        element.classList.add("fa-chevron-down");
      } else {
        if (this.themeType == "orange11") {
          element.classList.remove("text-orange11");
        } else if (this.themeType == "orange13") {
          element.classList.remove("text-orange13");
        } else if (this.themeType == "purple11") {
          element.classList.remove("text-purple11");
        } else if (this.themeType == "red13") {
          element.classList.remove("text-red13");
        } else if (this.themeType == "blue12") {
          element.classList.remove("text-blue12");
        } else if (this.themeType == "yellow19") {
          element.classList.remove("text-yellow19");
        } else if (this.themeType == "purple12") {
          element.classList.remove("text-purple12");
        } else if (this.themeType == "blue16") {
          element.classList.remove("text-blue16");
        } else if (this.themeType == "gold12") {
          element.classList.remove("text-gold12");
        } else if (this.themeType == "blue17") {
          element.classList.remove("text-blue17");
        } else if (this.themeType == "orange14") {
          element.classList.remove("text-orange14");
        } else if (this.themeType == "yellow17") {
          element.classList.remove("text-yellow17");
        } else if (this.themeType == "blue19") {
          element.classList.remove("text-blue19");
        } else if (this.themeType == "blue11") {
          element.classList.remove("text-blue11");
        } else if (this.themeType == "yellow13") {
          element.classList.remove("text-yellow13-1");
        } else if (this.themeType == "red15") {
          element.classList.remove("text-red15");
        } else if (this.themeType == "white") {
          element.classList.remove("text-yellow-1");
        } else if (this.themeType == "red12") {
          element.classList.remove("text-red12");
        } else if (this.themeType == "blue15") {
          element.classList.remove("text-blue15");
        } else if (this.themeType == "red11") {
          element.classList.remove("text-red11");
        } else if (this.themeType == "gold11") {
          element.classList.remove("text-gold11");
        }
        element.classList.remove("fa-chevron-down");
        element.classList.add("text-white");
        element.classList.add("fa-chevron-up");
      }
    },
    // 메시지 모달
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type
      });
    },
  },
};
</script>
<template>
  <div>
    <!-- 타임필터 -->
    <el-row v-if="sportsType === 'prematch'"
      :class="[{'p-l-16 p-r-16': !isMobile && layoutType == 'layout1', 'bg-black27 p-8 b-r-6': isMobile && layoutType == 'layout2'}, layoutType == 'layout2' ? 'm-t-8' : 'm-t-11',]">
      <el-row v-if="isMobile" :class="{ 'm-b-5': layoutType != 'layout2' }">
        <div :class="[{ on: !sortType }, `button-sort-${themeType}`]" @click="onClickSortType(false)">
          인기순 정렬
        </div>
        <div :class="[{ on: sortType, 'm-l-5': !isMobile }, `button-sort-${themeType}`]" @click="onClickSortType(true)">
          시간대 정렬
        </div>
      </el-row>
      <el-row :class="[`sport-sort-${themeType}`, { 'display-none': !sortType && isMobile }]">
        <div v-if="!isMobile" class="float-left">
          <div :class="[{ on: !sortType }, `button-sort-${themeType}`]" @click="onClickSortType(false)">
            인기순 정렬
          </div>
          <div :class="[{ on: sortType }, { 'm-l-5': !isMobile }, `button-sort-${themeType}`]" @click="onClickSortType(true)">
            시간대 정렬
          </div>
        </div>
        <div v-if="sortType"
          :class="[
            isMobile ? 'width-full' : 'float-right',
            {
              'm-t-5': layoutType == 'layout1',
              'm-t-8 display-flex': isMobile && (layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'),
            },
          ]"
        >
          <div v-if="layoutType == 'layout1'" class="float-left m-r-15">
            <img v-if="categoryId > 1" :src="'/image/Sports/League/' + categoryId + '.png'" height="24" class="float-left" />
          </div>
          <div
            class="float-left cursor"
            :class="[
              timeType === 0 && layoutType != 'layout2' ? `border-bottom-2-${themeType}` : '',
              layoutType == 'layout2' ? 'm-r-4 button-sort-orange12' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `m-r-4 button-sort-${themeType}` : 'm-r-15 p-t-3 height-24',
              { on: timeType == 0 },
            ]"
            @click="onSelectTime(0)"
          >
            {{ layoutType == "layout2" || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? "24시간내" : "24시간내 경기" }}
          </div>
          <div
            class="float-left cursor"
            :class="[
              timeType === 1 && layoutType != 'layout2' ? `border-bottom-2-${themeType}` : '',
              layoutType == 'layout2' ? 'm-r-4 button-sort-orange12' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `m-r-4 button-sort-${themeType}` : 'm-r-15 p-t-3 height-24',
              { on: timeType == 1 },
            ]"
            @click="onSelectTime(1)"
          >
            내일 경기
          </div>
          <div
            class="float-left cursor"
            :class="[
              timeType === 2 && layoutType != 'layout2' ? `border-bottom-2-${themeType}` : '',
              layoutType == 'layout2' ? 'button-sort-orange12' : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `m-r-4 button-sort-${themeType}` : 'p-t-3 height-24',
              { on: timeType == 2 },
            ]"
            @click="onSelectTime(2)"
          >
            리그별
          </div>
        </div>
      </el-row>
    </el-row>
    <!-- 타임필터 끝 -->
    <el-row v-if="leagueList && leagueList.length > 0" class="p-0">
      <!-- 경기 -->
      <div v-for="(league, leagueIndex) in leagueList" :key="leagueIndex" v-if="league.Visible && league.games && league.games.length > 0"
        :style="layoutType == 'layout2' ? 'background: #141517; border-radius: 6px; margin-top: 8px;' : ''">
        <!-- 리그정보 -->
        <el-row>
          <el-row class="cursor" :class="`sport-league-info-${themeType}`" data-toggle="collapse" :data-target="'#league' + league.Id" aria-expanded="false" :aria-controls="'league' + league.Id">
            <div class="pull-left width-full height-full f-w-700 f-s-14" @click="onCollapse(league.Id)">
              <i
                class="fa m-l-20 float-left"
                :class="{
                  'text-orange11 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'orange11',
                  'text-white fa-chevron-down float-right': league.Collapse && themeType == 'orange12',
                  'text-purple11 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'purple11',
                  'text-red13 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'red13',
                  'text-blue12 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'blue12',
                  'text-yellow19 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'yellow19',
                  'text-purple12 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'purple12',
                  'text-gold11 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'gold11',
                  'text-orange14 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'orange14',
                  'text-orange13 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'orange13',
                  'text-yellow13-1 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'yellow13',
                  'text-red15 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'red15',
                  'text-yellow20 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow20',
                  'text-blue13 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'blue13',
                  'text-gold13 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'gold13',
                  'text-yellow11 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow11',
                  'text-yellow14 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow14',
                  'text-yellow18 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow18',
                  'text-yellow21 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow21',
                  'text-yellow16 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow16',
                  'text-yellow17 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'yellow17',
                  'text-blue19 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'blue19',
                  'text-blue11 fa-chevron-down m-t-12 m-r-16 float-right': league.Collapse && themeType == 'blue11',
                  'text-red14 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'red14',
                  'text-yellow12 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'yellow12',
                  'text-red12 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'red12',
                  'text-blue15 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'blue15',
                  'text-red11 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'red11',
                  'text-yellow901 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'blue14',
                  'text-blue16 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'blue16',
                  'text-gold12 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'gold12',
                  'text-blue17 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'blue17',
                  'text-orange14 fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'orange14',
                  'text-black fa-chevron-down m-t-12 m-r-10': league.Collapse && themeType == 'white',
                  'text-black fa-chevron-up m-t-12 m-r-10': !league.Collapse && themeType == 'white',
                }"
                :id="'collapseleague-' + league.Id"
              ></i>
              <img
                :src="sportsAPI ? '/image/Sports/flags/matrix/' + league.LocationId + '.png' : '/image/Sports/flags/' + league.LocationId + '.png'"
                height="12"
                class="float-left m-r-10"
                :class="{
                  'm-l-16': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6',
                  'm-t-2': layoutType == 'layout2',
                  'm-t-12': layoutType != 'layout2' && themeType != 'blue16',
                  'm-t-9': themeType == 'blue16'
                }"
              />
              <span class="float-left" :class="`league-info-name-${themeType}`">{{ league.LocationName }}</span>
              <i class="fa fa-angle-right float-left m-l-6 m-r-6" :class="`league-info-icon-${themeType}`"></i>
              <span class="float-left text-overflow" :class="`league-info-name-${themeType}`" :style="isMobile ? 'width: calc(100% - 220px)' : 'width: calc(100% - 310px)'">
                <span class="float-left">{{ league.Name }}</span>
              </span>
              <span v-if="!isMobile && layoutType == 'layout1'"
                class="float-right m-r-10 width-50" :class="`league-info-game-${themeType}`">{{ league.TodayCount }} 경기</span>
              <span v-if="!isMobile && layoutType == 'layout1'"
                class="float-right m-r-10" :class="`league-info-gameicon-${themeType}`">|</span>
              <img v-if="layoutType == 'layout1'" :src="'/image/Sports/League/' + league.SportId + '.png'" height="24" class="float-right m-r-10"
                :class="[themeType != 'blue16' ? 'm-t-6' : 'm-t-3']" />
              <img v-if="layoutType == 'layout2'" :src="`/image/Sports/Category/${themeType}/${league.SportId}_1.png`" class="float-right" />
              <img v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" :src="`/image/Sports/Category/${themeType}/${league.SportId}.png`" class="float-right m-t-8" width="22" />
            </div>
          </el-row>
          <img v-if="(themeType == 'blue16' || themeType == 'blue18' || themeType == 'yellow15') && sportsType === 'prematch'"
            :src="favorite.findIndex((fav) => fav.LeagueId === league.Id) > -1 ? `/image/Sports/${themeType}/FavoriteOn.png` : '/image/Sports/FavoriteOff.png'"
            class="league-favorite cursor" @click="onClickFavorite(league)" width="17" :style="layoutType == 'layout6' ? 'top: 30px; right: 30px;' : ''" />
        </el-row>
        <!-- 리그정보 끝 -->
        <el-row class="collapse" :class="{ show: league.Collapse === true }" aria-expanded="false" :id="'league' + league.Id">
          <el-row v-for="(game, gameIndex) in league.games" :key="gameIndex" :class="{'m-t-10': themeType == 'blue16' && sportsType == 'prematch'}">
            <!-- 경기 -->
            <el-row v-if="game.Visible && ((sportsType === 'inplay' && game.Fixture.Status != 1) || sportsType === 'prematch')"
              :class="{'p-l-16 p-r-16': !isMobile && layoutType == 'layout1', 'm-t-10': themeType == 'blue16'}">
              <div class="col-md-12 m-b-3 position-relative p-2" :class="getBackgrounClassOfGame(game.Fixture.Sport.Id, 0)">
                <!-- 헤더 -->
                <el-row v-if="sportsType == 'prematch' || (sportsType == 'inplay' && themeType != 'blue16')" class="f-s-11" :class="`sports2boxtop-${themeType}-${sportsType}`">
                  <el-row v-if="isMobile && layoutType == 'layout2'" class="text-white p-l-8" :style="sportsType == 'inplay' ? 'border-bottom: 1px solid #111314; margin-bottom: 8px' : ''">
                    <div class="float-left p-t-8">
                      <span v-if="sportsType === 'prematch'">{{ parseTime(game.Fixture.StartDate) }}</span>
                      <span v-else>
                        시간: {{ getInplayGameTime(game) }} / 상태:
                        <span :class="getTextColor(themeType, 1)">
                          {{game.Livescore ? game.Livescore.Scoreboard.StatusDescription : ""}}
                        </span>
                      </span>
                    </div>
                    <div v-if="game.TotalMarketCount > 0" class="btn btn-xs f-s-13 posrightbtnclass text-center float-right"
                      :class="[
                        { 'bg-black-darker1 p-b-2': layoutType != 'layout2', on: selectedFixtureId === game.FixtureId },
                        `show-detail-odds-${themeType}`,
                      ]"
                      @click="onClickDetailOdds(game.FixtureId)"
                    >
                      <center><span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span></center>
                    </div>
                    <div v-else class="btn btn-xs f-s-13 posrightbtnclass text-center"
                      :class="[`show-detail-no-odds-${themeType}`, { 'bg-black-darker1 p-b-2': layoutType != 'layout2' }]"
                      style="cursor: auto"
                    >
                      <center><span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span></center>
                    </div>
                  </el-row>
                  <div 
                    :class="{ 
                      'display-flex': layoutType == 'layout2', 
                      'p-b-8': layoutType == 'layout2' && sportsType == 'inplay', 
                      'p-t-8': layoutType == 'layout2' && sportsType == 'inplay' && !isMobile }">
                    <div v-if="layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)"
                      class="pull-left f-s-12"
                      :class="[
                        themeType != 'blue16' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' ? `sports2boxtopin-${themeType}` : layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'sports2boxtopin-blue-left',
                        themeType != 'white' ? 'text-white' : 'text-black',
                        layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout6' ? 'p-l-8 p-r-8' : 'p-2 p-l-12 p-r-12',
                        {
                          'width-110': sportsType == 'inplay' && layoutType == 'layout2',
                          'm-l-m-2': sportsType === 'prematch',
                          'm-l-1': sportsType === 'inplay' && layoutType != 'layout2',
                        },
                      ]">
                      <el-row class="float-left display-center-vertical height-full">
                        <span v-if="sportsType == 'prematch'" 
                          :class="{
                            'bg-black30': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6', 
                            'bg-black22': themeType == 'yellow18',
                            'bg-black51': themeType == 'yellow14' || themeType == 'yellow11',
                            'bg-black39': themeType == 'yellow16',
                            'bg-black50': themeType == 'gold13'}" 
                          :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'border-radius: 4px; margin-right: 8px; padding: 5px;' :''">
                          {{ parseTime(game.Fixture.StartDate) }}
                        </span>
                        <div v-if="sportsType == 'inplay' && layoutType != 'layout2'" :class="{'f-s-14': themeType == 'yellow15'}">
                          <div class="float-left" :class="{'bg-black30': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow11' && themeType != 'gold13') || layoutType == 'layout6', 'bg-black39': themeType == 'yellow16', 'bg-black50': themeType == 'gold13'}" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'border-radius: 4px; margin-right: 8px; padding: 5px;' :''">
                            시간: {{ getInplayGameTime(game) }} {{layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : '/'}}
                          </div>
                          <div class="float-left" :class="{'bg-black30': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow11' && themeType != 'gold13') || layoutType == 'layout6', 'bg-black39': themeType == 'yellow16', 'bg-black50': themeType == 'gold13'}" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'border-radius: 4px; padding: 5px;' :''"> 
                            상태:
                            <span :class="getTextColor(themeType, 1)">
                              {{game.Livescore ? game.Livescore.Scoreboard.StatusDescription : ""}}
                            </span>
                          </div>
                        </div>
                        <span v-if="sportsType == 'inplay' && layoutType == 'layout2' && (game.Fixture.Sport.Id == 6046 || game.Fixture.Sport.Id == 48242 || game.Fixture.Sport.Id == 35232)">
                          시간: {{ getInplayGameTime(game) }} <br />
                          상태:
                          <span :class="getTextColor(themeType, 1)">
                            {{game.Livescore ? game.Livescore.Scoreboard.StatusDescription : ""}}
                          </span>
                        </span>
                        <span v-if="sportsType == 'inplay' && layoutType == 'layout2' && (game.Fixture.Sport.Id != 6046 && game.Fixture.Sport.Id != 48242 && game.Fixture.Sport.Id != 35232)">
                          시작: {{ parseTime(game.Fixture.StartDate, '{h}:{i}') }} <br />
                          상태:
                          <span :class="getTextColor(themeType, 1)">
                            {{game.Livescore ? game.Livescore.Scoreboard.StatusDescription : ""}}
                          </span>
                        </span>
                      </el-row>
                    </div>
                    <div v-if="layoutType == 'layout2'" class="text-white float-left f-s-14 display-center" style="flex: 1 1">
                      <div
                        :style="isMobile ? 'width: calc(50% - 18px);' : !isMobile && sportsType == 'prematch' ? 'width: calc(50% - 36px);' : 'width: calc(50% - 51px);'"
                        class="text-right float-left"
                      >
                        <span v-if="sportsType == 'inplay'" style="float: right; width: 36px; text-align: center; background: #272b2e; border-radius: 2px; padding: 2px 6px; margin-left: 8px;">
                          {{game.Livescore && game.Livescore.Scoreboard ? game.Livescore.Scoreboard.Results[0].Value : 0}}
                        </span>
                      </div>
                      <div v-if="sportsType == 'inplay'" style="width: 36px" class="text-center float-left">
                        <img :src="`/image/Sports/${themeType}/vs1.png`" class="p-l-8 p-r-8" />
                      </div>
                      <div :style="isMobile ? 'width: calc(50% - 18px);' : !isMobile && sportsType == 'prematch' ? 'width: calc(50%);' : 'width: calc(50% + 15px);'"
                        class="text-left float-left"
                      >
                        <span v-if="sportsType == 'inplay'" style="float: left; width: 36px; text-align: center; background: #272b2e; border-radius: 2px; padding: 2px 6px; margin-right: 8px;">
                          {{game.Livescore && game.Livescore.Scoreboard ? game.Livescore.Scoreboard.Results[1].Value : 0}}
                        </span>
                      </div>
                    </div>
                    <div v-if="(layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)) && game.TotalMarketCount > 0"
                      class="p-0 pull-right"
                      :class="{
                        'sports2boxtopin-orange11 m-r-10': themeType != 'blue16' && layoutType == 'layout1',
                        'sports2boxtopin-blue-right': themeType == 'blue16',
                        'sports2boxtopin-orange12-right': themeType == 'orange12',
                        'sports2boxtopin-yellow20-right': themeType == 'yellow20',
                        'sports2boxtopin-blue13-right': themeType == 'blue13',
                        'sports2boxtopin-gold13-right': themeType == 'gold13',
                        'sports2boxtopin-yellow11-right': themeType == 'yellow11',
                        'sports2boxtopin-yellow14-right': themeType == 'yellow14',
                        'sports2boxtopin-yellow18-right': themeType == 'yellow18',
                        'sports2boxtopin-yellow21-right': themeType == 'yellow21',
                        'sports2boxtopin-yellow16-right': themeType == 'yellow16',
                        'sports2boxtopin-yellow17-right': themeType == 'yellow17',
                        'sports2boxtopin-blue19-right': themeType == 'blue19',
                        'sports2boxtopin-blue11-right': themeType == 'blue11',
                        'border-only-none bg-white': themeType == 'white',
                      }">
                      <div
                        class="btn btn-xs f-s-13 posrightbtnclass text-center"
                        :class="[
                          { 'bg-black-darker1 p-b-2': layoutType != 'layout2', on: selectedFixtureId === game.FixtureId, 'f-s-14': themeType == 'yellow15' },
                          `show-detail-odds-${themeType}`,
                        ]"
                        @click="onClickDetailOdds(game.FixtureId)"
                      >
                        <center><span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span></center>
                      </div>
                    </div>
                    <div v-if="(layoutType != 'layout2' || (layoutType == 'layout2' && !isMobile)) && game.TotalMarketCount == 0"
                      class="p-0 pull-right"
                      :class="{
                        'sports2boxtopin-orange11 m-r-10': themeType != 'blue16' && layoutType == 'layout1',
                        'sports2boxtopin-blue-right': themeType == 'blue16',
                        'sports2boxtopin-orange12-right': themeType == 'orange12',
                        'sports2boxtopin-yellow20-right': themeType == 'yellow20',
                        'sports2boxtopin-blue13-right': themeType == 'blue13',
                        'sports2boxtopin-gold13-right': themeType == 'gold13',
                        'sports2boxtopin-yellow11-right': themeType == 'yellow11',
                        'sports2boxtopin-yellow14-right': themeType == 'yellow14',
                        'sports2boxtopin-yellow18-right': themeType == 'yellow18',
                        'sports2boxtopin-yellow21-right': themeType == 'yellow21',
                        'sports2boxtopin-yellow16-right': themeType == 'yellow16',
                        'sports2boxtopin-yellow17-right': themeType == 'yellow17',
                        'sports2boxtopin-blue19-right': themeType == 'blue19',
                        'sports2boxtopin-blue11-right': themeType == 'blue11',
                        'border-only-none bg-white': themeType == 'white',
                      }">
                      <div
                        class="btn btn-xs f-s-13 posrightbtnclass text-center"
                        :class="[
                          `show-detail-no-odds-${themeType}`,
                          { 'bg-black-darker1 p-b-2': layoutType != 'layout2' },
                        ]"
                        style="cursor: auto"
                      >
                        <center><span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span></center>
                      </div>
                    </div>
                  </div>
                </el-row>
                <el-row v-else>
                  <div class="pull-left p-2 p-l-12 p-r-12 f-s-12 sports2boxtopin-blue-left-inplay">
                    <span class="text-white">
                      시간: {{ getInplayGameTime(game) }} / 상태:
                      <span>
                        {{game.Livescore ? game.Livescore.Scoreboard.StatusDescription : ""}}
                      </span>
                    </span>
                  </div>
                  <div v-if="game.TotalMarketCount > 0" class="p-0 pull-right"
                    :class="themeType != 'blue16' ? 'sports2boxtopin-orange11 m-r-10' : 'sports2boxtopin-blue-right'"
                  >
                    <div
                      class="btn btn-xs f-s-13 posrightbtnclass text-center bg-black-darker1 p-b-2 text-orange901"
                      :class="[{ on: selectedFixtureId === game.FixtureId }, `show-detail-odds-${themeType}`]"
                      @click="onClickDetailOdds(game.FixtureId)"
                    >
                      <center>
                        <span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span>
                      </center>
                    </div>
                  </div>
                  <div v-else class="p-0 pull-right"
                    :class="themeType != 'blue16' ? 'sports2boxtopin-orange11 m-r-10' : 'sports2boxtopin-blue-right'"
                  >
                    <div
                      class="btn btn-xs f-s-13 posrightbtnclass text-center bg-black-darker1 p-b-2"
                      :class="themeType != 'blue16' ? 'text-orange11' : 'text-blue-1 border-1-blue'"
                      style="cursor: auto"
                      :style="themeType != 'blue16' ? '' : 'border-radius: 0'"
                    >
                      <center>
                        <span class="hva-txt">{{getDetailOddsName(game.TotalMarketCount)}}</span>
                      </center>
                    </div>
                  </div>
                </el-row>
                <!-- 헤더 끝 -->
                <!-- 메인배당 -->
                <div class="col-md-12 p-0 m-b-1" :class="getBackgrounClassOfGame(game.Fixture.Sport.Id, 1)">
                  <div class="glist btn-group col-md-12 p-0 width-full" :class="{'p-t-3': layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'}">
                    <!-- 인플레이인 경우 경기정보 -->
                    <ul v-if="layoutType != 'layout2' && sportsType === 'inplay'"
                      class="list-box-g width-full f-s-20 f-w-700 p-b-9 height-52 p-t-10"
                      :class="[`text-contrast-${themeType}`, {'bg-black15': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'}]"
                    >
                      <li class="home-t width-40pro m-r-10" style="display: block">
                        <div :class="`border-1-${themeType}`" style="line-height: 35px" class="p-0 width-40 height-40 float-right m-l-20">
                          {{game.Livescore && game.Livescore.Scoreboard ? game.Livescore.Scoreboard.Results[0].Value : ""}}
                        </div>
                      </li>
                      <li class="vs-t width-20pro p-t-5 display-center">VS</li>
                      <li class="away-t width-40pro m-l-10" style="display: block">
                        <div :class="`border-1-${themeType}`" style="line-height: 35px" class="p-0 width-40 height-40 float-left m-r-20">
                          {{game.Livescore && game.Livescore.Scoreboard ? game.Livescore.Scoreboard.Results[1].Value : ""}}
                        </div>
                      </li>
                    </ul>
                    <!-- 인플레이인 경우 경기정보 끝 -->
                    <el-row v-if="(game.MainMarket && game.MainMarket.Bets) || (game.MainHandicap && game.MainHandicap.Bets) || (game.MainUnderOver && game.MainUnderOver.Bets)"
                      :style="layoutType == 'layout2' ? 'background: #181A1C; border-radius: 0px 0px 6px 6px; padding: 8px;' : ''"
                      :class="{
                        'bg-black30 p-t-6': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow11' && themeType != 'gold13' && themeType != 'yellow14') || layoutType == 'layout6', 
                        'bg-black39 p-t-6': themeType == 'yellow16', 
                        'bg-black15 p-t-6': themeType == 'yellow18', 
                        'bg-black50 p-t-6': themeType == 'gold13', 
                        'bg-black35 p-t-6': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
                        'bg-black41 p-t-6': themeType == 'yellow17', 
                        'bg-blue902 p-t-6': themeType == 'blue19', 
                        'bg-grey914 p-t-6': themeType == 'blue11'
                      }"
                    >
                      <!-- 승무패 -->
                      <ul v-if="game.MainMarket && game.MainMarket.Bets" class="list-box-g col-md-12 height-38">
                        <li v-if="(gameSettings.Sports.isUseExtendMainOdds && sportsType == 'prematch') || (gameSettings.Live.isUseExtendMainOdds && sportsType == 'inplay')"
                          class="width-60 height-40 display-center"
                          :class="`main-market-${themeType}`"
                        >
                          {{game.MainMarket.Id == 1 || game.MainMarket.Id == 50 ? "승무패" : "승패"}}
                        </li>
                        <li class="home-t">
                          <el-row class="width-full">
                            <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainMarket.Bets[0].Id) > -1,
                                },
                                { 
                                  'btn-sports-vs mob-odd-btn': isMobile,
                                  'btn-sports': !isMobile,
                                  'p-l-8 p-r-8': layoutType == 'layout2'
                                },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainMarket.Id, game.MainMarket.Name, game.MainMarket.Bets[0])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt main-odd-team">
                                  <div
                                    class="float-left text-overflow"
                                    :class="{
                                      'm-l-5': layoutType != 'layout2',
                                      'display-center-vertical': !isMobile
                                    }"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);'"
                                  >
                                    <img v-if="!isMobile && game.Fixture.Participants[0].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[0].ImageUrl)" class="m-r-5" width="15" />
                                    {{ game.Fixture.Participants[0].Name }}
                                  </div>
                                </li>
                                <li class="hva-txt main-odd-val float-left">
                                  <img v-if="!isMobile" :src="'/image/Sports/1x2.png'" style="margin-top: -2px" class="m-r-5" />
                                  <span id="oddsvalue" :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainMarket.Bets[0].Price, userOdds))}}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <img v-show="game.MainMarket.Bets[0].UpDown === 1" class="img-odds-up blinking" :src="'/image/Sports/odds-up-left.png'" style="left: calc(100% - 12px); top: 1px" />
                            <img v-show="game.MainMarket.Bets[0].UpDown === 2" class="img-odds-down blinking" :src="'/image/Sports/odds-down-left.png'" style="left: calc(100% - 12px); top: 26px" />
                            <div v-show="game.MainMarket.Bets[0].Status !== 1" :class="`left-home-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" 
                                :width="layoutType == 'layout2' ? 14 : 20" class="m-t-6" />
                            </div>
                          </el-row>
                        </li>
                        <li v-if="game.MainMarket.Bets.length === 2" class="vs-t">
                          <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn" :class="`btn-vs-${themeType}`">
                            <ul class="list-box-g col-md-12 display-center">
                              <li class="hva-txt">
                                <span>VS</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li v-else class="vs-t">
                          <el-row class="width-full">
                            <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => game.MainMarket.Bets[2] && slip.BetId == game.MainMarket.Bets[2].Id) > -1,
                                },
                                { 'btn-sports-vs mob-odd-btn': isMobile },
                                { 'btn-sports': !isMobile },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainMarket.Id, game.MainMarket.Name, game.MainMarket.Bets[2])"
                            >
                              <ul class="list-box-g col-md-12 display-center">
                                <li class="hva-txt">
                                  <span :class="{ 'f-w-900': themeType == 'gold11' }">
                                    {{game.MainMarket.Bets[2] ? filterOdds(processUserOdds(game.MainMarket.Bets[2].Price, userOdds)) : ""}}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <img v-show="game.MainMarket.Bets[2] && game.MainMarket.Bets[2].UpDown === 1"
                              class="img-odds-up blinking"
                              :src="'/image/Sports/odds-up-right.png'"
                              style="left: 0; top: 1px"
                            />
                            <img v-show="game.MainMarket.Bets[2] && game.MainMarket.Bets[2].UpDown === 2"
                              class="img-odds-down blinking"
                              :src="'/image/Sports/odds-down-left.png'"
                              style="left: calc(100% - 12px); top: 26px"
                            />
                            <div v-show="game.MainMarket.Bets[2] && game.MainMarket.Bets[2].Status !== 1" :class="`left-vs-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" class="m-t-6" />
                            </div>
                          </el-row>
                        </li>
                        <li class="away-t">
                          <el-row class="width-full">
                            <div v-if="game.MainMarket.Bets[1]" class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainMarket.Bets[1].Id) > -1,
                                },
                                {
                                  'p-l-8 p-r-8': layoutType == 'layout2',
                                  'btn-sports-vs mob-odd-btn': isMobile,
                                  'btn-sports': !isMobile 
                                },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainMarket.Id, game.MainMarket.Name, game.MainMarket.Bets[1])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt main-odd-val float-left text-left">
                                  <span :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainMarket.Bets[1].Price, userOdds))}}
                                  </span>
                                  <img v-if="!isMobile" :src="'/image/Sports/1x2.png'" style="margin-top: -2px" class="m-l-5" />
                                </li>
                                <li class="hva-txt main-odd-team float-right text-right">
                                  <div class="float-right text-overflow"
                                    :class="{
                                      'm-l-5': layoutType != 'layout2',
                                      'display-center-vertical': !isMobile
                                    }"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);justify-content: flex-end;'"
                                  >
                                    {{ game.Fixture.Participants[1].Name }}
                                    <img v-if="!isMobile && game.Fixture.Participants[1].ImageUrl"
                                      :src="filterTeamEmblem(game.Fixture.Participants[1].ImageUrl)"
                                      class="m-l-5"
                                      width="15"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <img v-show="game.MainMarket.Bets[1] && game.MainMarket.Bets[1].UpDown === 1"
                              class="img-odds-up blinking"
                              :src="'/image/Sports/odds-up-right.png'"
                              style="left: 0; top: 1px"
                            />
                            <img
                              v-show="game.MainMarket.Bets[1] && game.MainMarket.Bets[1].UpDown === 2"
                              class="img-odds-down blinking"
                              :src="'/image/Sports/odds-down-right.png'"
                              style="left: 0; top: 26px"
                            />
                            <div
                              v-show="game.MainMarket.Bets[1] && game.MainMarket.Bets[1].Status !== 1"
                              :class="`left-away-lock-${themeType}`"
                            >
                              <img :src="`/image/Sports/${themeType}/Lock1.png`"
                                :width="layoutType == 'layout2' ? 14 : 20"
                                class="m-t-6"
                              />
                            </div>
                          </el-row>
                        </li>
                      </ul>
                      <!-- 승무패 끝 -->
                      <!-- 핸디캡 -->
                      <ul
                        v-if="((gameSettings.Sports.isUseExtendMainOdds && sportsType == 'prematch') || (gameSettings.Live.isUseExtendMainOdds && sportsType == 'inplay')) && game.MainHandicap && game.MainHandicap.Bets"
                        class="list-box-g col-md-12 height-38 m-t-5"
                      >
                        <li class="width-60 height-40 display-center" :class="`main-market-${themeType}`">
                          핸디캡
                        </li>
                        <li class="home-t">
                          <el-row class="width-full">
                            <div
                              class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainHandicap.Bets[0].Id) > -1,
                                },
                                { 'btn-sports-vs mob-odd-btn': isMobile },
                                { 'btn-sports': !isMobile },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainHandicap.Id, game.MainHandicap.Name, game.MainHandicap.Bets[0])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt main-odd-team">
                                  <div class="float-left text-overflow m-l-5" :class="{'display-center-vertical': !isMobile}"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);'"
                                  >
                                    <img v-if="!isMobile && game.Fixture.Participants[0].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[0].ImageUrl)"
                                      class="m-r-5" width="15" />
                                    {{ game.Fixture.Participants[0].Name }}
                                  </div>
                                </li>
                                <li class="hva-txt float-left" :class="themeType == 'white' ? 'main-odd-val-white' : 'main-odd-val'">
                                  <img v-if="!isMobile || (isMobile && themeType == 'white')" :src="'/image/Sports/h.png'" style="margin-top: -2px" class="m-r-8" />
                                  <span id="oddsvalue" :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainHandicap.Bets[0].Price, userOdds))}}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <img
                              v-show="game.MainHandicap.Bets[0].UpDown === 1"
                              class="img-odds-up blinking"
                              :src="'/image/Sports/odds-up-left.png'"
                              style="left: calc(100% - 12px); top: 1px"
                            />
                            <img
                              v-show="game.MainHandicap.Bets[0].UpDown === 2"
                              class="img-odds-down blinking"
                              :src="'/image/Sports/odds-down-left.png'"
                              style="left: calc(100% - 12px); top: 26px"
                            />
                            <div v-show="game.MainHandicap.Bets[0].Status !== 1" :class="`left-home-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`"
                                :width="layoutType == 'layout2' ? 14 : 20"
                                class="m-t-6"
                              />
                            </div>
                          </el-row>
                        </li>
                        <li class="vs-t">
                          <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn" :class="`btn-vs-${themeType}`">
                            <ul class="list-box-g col-md-12 display-center">
                              <li class="hva-txt" :class="`odds-basic-${themeType}`">
                                <span>{{ game.MainHandicap.Bets[0].Line}}</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="away-t">
                          <el-row class="width-full">
                            <div
                              v-if="game.MainHandicap.Bets[1]"
                              class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainHandicap.Bets[1].Id) > -1,
                                },
                                { 'btn-sports-vs mob-odd-btn': isMobile },
                                { 'btn-sports': !isMobile },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainHandicap.Id, game.MainHandicap.Name, game.MainHandicap.Bets[1])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt float-left text-left" :class="themeType == 'white' ? 'main-odd-val-white' : 'main-odd-val'">
                                  <span :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainHandicap.Bets[1].Price, userOdds))}}
                                  </span>
                                  <img v-if="!isMobile || (isMobile && themeType == 'white')"
                                    :src="'/image/Sports/h.png'"
                                    style="margin-top: -2px"
                                    class="m-l-8"
                                  />
                                </li>
                                <li class="hva-txt main-odd-team float-right text-right">
                                  <div
                                    class="float-right text-overflow m-l-5"
                                    :class="{ 'display-center-vertical': !isMobile }"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);justify-content: flex-end;'"
                                  >
                                    {{ game.Fixture.Participants[1].Name }}
                                    <img v-if="!isMobile && game.Fixture.Participants[1].ImageUrl"
                                      :src="filterTeamEmblem(game.Fixture.Participants[1].ImageUrl)"
                                      class="m-l-5"
                                      width="15"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <img v-show="game.MainHandicap.Bets[1] && game.MainHandicap.Bets[1].UpDown === 1"
                              class="img-odds-up blinking"
                              :src="'/image/Sports/odds-up-right.png'"
                              style="left: 0; top: 1px"
                            />
                            <img v-show="game.MainHandicap.Bets[1] && game.MainHandicap.Bets[1].UpDown === 2"
                              class="img-odds-down blinking"
                              :src="'/image/Sports/odds-down-right.png'"
                              style="left: 0; top: 26px"
                            />
                            <div
                              v-show="game.MainHandicap.Bets[1] && game.MainHandicap.Bets[1].Status !== 1"
                              :class="`left-away-lock-${themeType}`"
                            >
                              <img :src="`/image/Sports/${themeType}/Lock1.png`"
                                :width="layoutType == 'layout2' ? 14 : 20"
                                class="m-t-6"
                              />
                            </div>
                          </el-row>
                        </li>
                      </ul>
                      <!-- 핸디캡 끝 -->
                      <!-- 언오버 -->
                      <ul v-if="((gameSettings.Sports.isUseExtendMainOdds && sportsType == 'prematch') || (gameSettings.Live.isUseExtendMainOdds && sportsType == 'inplay')) && game.MainUnderOver && game.MainUnderOver.Bets"
                        class="list-box-g col-md-12 height-38 m-t-5"
                      >
                        <li class="width-60 height-40 display-center" :class="`main-market-${themeType}`">
                          오버언더
                        </li>
                        <li class="home-t">
                          <el-row class="width-full">
                            <div class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainUnderOver.Bets[0].Id) > -1,
                                },
                                { 'btn-sports-vs mob-odd-btn': isMobile },
                                { 'btn-sports': !isMobile },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`,
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainUnderOver.Id, game.MainUnderOver.Name, game.MainUnderOver.Bets[0])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt main-odd-team">
                                  <div
                                    class="float-left text-overflow m-l-5"
                                    :class="{'display-center-vertical': !isMobile}"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);'"
                                  >
                                    <img v-if="!isMobile && game.Fixture.Participants[0].ImageUrl"
                                      :src="filterTeamEmblem(game.Fixture.Participants[0].ImageUrl)"
                                      class="m-r-5"
                                      width="15"
                                    />
                                    {{
                                      themeType == "white" ? game.Fixture.Participants[0].Name : "오버"
                                    }}
                                  </div>
                                </li>
                                <li class="hva-txt float-left" :class="themeType == 'white' ? 'main-odd-val-white' : 'main-odd-val'">
                                  <i v-if="!isMobile || (isMobile && themeType == 'white')" class="fa fa-arrow-up m-0 m-r-7 f-s-10 text-red905"></i>
                                  <span id="oddsvalue" :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainUnderOver.Bets[0].Price, userOdds))}}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <img
                              v-show="game.MainUnderOver.Bets[0].UpDown === 1"
                              class="img-odds-up blinking"
                              :src="'/image/Sports/odds-up-left.png'"
                              style="left: calc(100% - 12px); top: 1px"
                            />
                            <img
                              v-show="game.MainUnderOver.Bets[0].UpDown === 2"
                              class="img-odds-down blinking"
                              :src="'/image/Sports/odds-down-left.png'"
                              style="left: calc(100% - 12px); top: 26px"
                            />
                            <div v-show="game.MainUnderOver.Bets[0].Status !== 1" :class="`left-home-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" class="m-t-6" />
                            </div>
                          </el-row>
                        </li>
                        <li class="vs-t">
                          <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn" :class="`btn-vs-${themeType}`">
                            <ul class="list-box-g col-md-12 display-center">
                              <li class="hva-txt" :class="`odds-basic-${themeType}`">
                                <span>{{game.MainUnderOver.Bets[0].Line}}</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="away-t">
                          <el-row class="width-full">
                            <div
                              v-if="game.MainUnderOver.Bets[1]"
                              class="display-inlineblock btn btn-block f-s-12 btn-btn"
                              :class="[
                                {
                                  active: betSlipList.findIndex((slip) => slip.BetId == game.MainUnderOver.Bets[1].Id) > -1,
                                },
                                { 'btn-sports-vs mob-odd-btn': isMobile },
                                { 'btn-sports': !isMobile },
                                isMobile ? `btn-mobile-${themeType}` : `btn-${themeType}`
                              ]"
                              @click="onClickBetButton(game.FixtureId, game.MainUnderOver.Id, game.MainUnderOver.Name, game.MainUnderOver.Bets[1])"
                            >
                              <ul class="list-box-g col-md-12">
                                <li class="hva-txt float-left text-left" :class="themeType == 'white' ? 'main-odd-val-white' : 'main-odd-val'">
                                  <span :class="{'f-w-900': themeType == 'gold11'}">
                                    {{filterOdds(processUserOdds(game.MainUnderOver.Bets[1].Price, userOdds))}}
                                  </span>
                                  <i v-if="!isMobile || (isMobile && themeType == 'white')" class="fa fa-arrow-down m-0 m-l-7 f-s-10 text-blue902"></i>
                                </li>
                                <li class="hva-txt main-odd-team float-right text-right">
                                  <div class="float-right text-overflow m-l-5"
                                    :class="{'display-center-vertical': !isMobile}"
                                    :style="isMobile ? 'width: 100%' : 'width: calc(100% - 30px);justify-content: flex-end;'"
                                  >
                                    {{themeType == "white" ? game.Fixture.Participants[1].Name : "언더"}}
                                    <img v-if="!isMobile && game.Fixture.Participants[1].ImageUrl"
                                      :src="filterTeamEmblem(game.Fixture.Participants[1].ImageUrl)"
                                      class="m-l-5" width="15" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <img v-show="game.MainUnderOver.Bets[1] && game.MainUnderOver.Bets[1].UpDown === 1"
                              class="img-odds-up blinking" :src="'/image/Sports/odds-up-right.png'" style="left: 0; top: 1px" />
                            <img v-show="game.MainUnderOver.Bets[1] && game.MainUnderOver.Bets[1].UpDown === 2"
                              class="img-odds-down blinking" :src="'/image/Sports/odds-down-right.png'" style="left: 0; top: 26px" />
                            <div v-show="game.MainUnderOver.Bets[1] && game.MainUnderOver.Bets[1].Status !== 1" :class="`left-away-lock-${themeType}`">
                              <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" class="m-t-6" />
                            </div>
                          </el-row>
                        </li>
                      </ul>
                      <!-- 언오버 끝 -->
                    </el-row>
                    <ul v-else class="list-box-g col-md-12 height-38">
                      <li class="home-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn" :class="isMobile ? 'btn-sports-vs mob-odd-btn' : 'btn-sports'">
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-team">
                              <div class="float-left text-overflow m-l-5" style="width: calc(100% - 30px)">
                                {{ game.Fixture.Participants[0].Name }}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div :class="`left-home-lock-${themeType}`">
                          <img
                            :src="`/image/Sports/${themeType}/Lock1.png`"
                            :width="layoutType == 'layout2' ? 14 : 20"
                            class="m-t-6"
                          />
                        </div>
                      </li>
                      <li class="vs-t">
                        <div class="display-inlineblock btn btn-sports-vs btn-block f-s-12 btn-btn">
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt">
                              <span>VS</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="away-t">
                        <div class="display-inlineblock btn btn-block f-s-12 btn-btn" :class="isMobile ? 'btn-sports-vs mob-odd-btn' : 'btn-sports'">
                          <ul class="list-box-g col-md-12">
                            <li class="hva-txt main-odd-team float-right text-right">
                              <div class="float-right text-overflow m-l-5" style="width: calc(100% - 30px)">
                                {{ game.Fixture.Participants[1].Name }}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div :class="`left-away-lock-${themeType}`">
                          <img :src="`/image/Sports/${themeType}/Lock1.png`" :width="layoutType == 'layout2' ? 14 : 20" class="m-t-6" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 메인배당 끝 -->
              </div>
              <OddsPanel v-if="isShowMobile && detailGameIds.findIndex((id) => id === game.FixtureId) > -1"
                :sportsType="sportsType"
                :fixtureId="game.FixtureId"
                :isBetAvailable="isBetAvailable"
                :isShowMobile="isShowMobile"
              />
            </el-row>
            <!-- 경기 끝 -->
          </el-row>
        </el-row>
      </div>
      <!-- 경기 끝 -->
    </el-row>
    <!-- 진행예정경기 -->
    <el-row v-if="sportsType === 'inplay' && bookingLeagueList.length > 0" class="m-t-20">
      <el-row
        class="p-10 f-s-18 f-w-700 text-center text-white width-full"
        :class="{ 'bg-grey910': layoutType != 'layout2' }"
        >진행예정경기
      </el-row>
      <div v-for="(league, leagueIndex) in bookingLeagueList" :key="leagueIndex" v-if="league.Visible && league.games && league.games.length > 0">
        <!-- 리그정보 -->
        <el-row>
          <el-row
            class="m-t-20 cursor"
            :class="`sport-league-info-${themeType}`"
            data-toggle="collapse"
            :data-target="'#bookleague' + league.Id"
            aria-expanded="false"
            :aria-controls="'bookleague' + league.Id"
          >
            <div
              class="pull-left width-full height-full f-w-700"
              :class="{
                'text-gray':
                  themeType == 'orange11' ||
                  themeType == 'purple11' ||
                  themeType == 'red13' ||
                  themeType == 'blue12' ||
                  themeType == 'yellow19' ||
                  themeType == 'purple12' ||
                  themeType == 'yellow13' ||
                  themeType == 'red15' ||
                  themeType == 'gold12' ||
                  themeType == 'blue17' ||
                  themeType == 'orange14' ||
                  themeType == 'gold11' ||
                  themeType == 'orange13' ||
                  themeType == 'red14' ||
                  themeType == 'yellow12' ||
                  themeType == 'red12' ||
                  themeType == 'blue15' ||
                  themeType == 'red11' ||
                  themeType == 'blue14',
                'text-white': themeType == 'white'
              }"
              @click="onCollapse(league.Id)"
            >
              <i
                class="fa m-r-10 m-l-20 float-left"
                :class="{
                  'text-orange11 fa-chevron-down m-t-12': league.Collapse && themeType == 'orange11',
                  'text-white fa-chevron-down float-right': league.Collapse && themeType == 'orange12',
                  'text-purple11 fa-chevron-down m-t-12': league.Collapse && themeType == 'purple11',
                  'text-red13 fa-chevron-down m-t-12': league.Collapse && themeType == 'red13',
                  'text-blue12 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue12',
                  'text-yellow19 fa-chevron-down m-t-12': league.Collapse && themeType == 'yellow19',
                  'text-purple12 fa-chevron-down m-t-12': league.Collapse && themeType == 'purple12',
                  'text-gold12 fa-chevron-down m-t-12': league.Collapse && themeType == 'gold12',
                  'text-blue17 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue17',
                  'text-orange14 fa-chevron-down m-t-12': league.Collapse && themeType == 'orange14',
                  'text-yellow17 fa-chevron-down m-t-12': league.Collapse && themeType == 'yellow17',
                  'text-blue19 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue19',
                  'text-blue11 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue11',
                  'text-gold11 fa-chevron-down m-t-12': league.Collapse && themeType == 'gold11',
                  'text-orange13 fa-chevron-down m-t-12': league.Collapse && themeType == 'orange13',
                  'text-red14 fa-chevron-down m-t-12': league.Collapse && themeType == 'red14',
                  'text-yellow12 fa-chevron-down m-t-12': league.Collapse && themeType == 'yellow12',
                  'text-red12 fa-chevron-down m-t-12': league.Collapse && themeType == 'red12',
                  'text-blue15 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue15',
                  'text-red11 fa-chevron-down m-t-12': league.Collapse && themeType == 'red11',
                  'text-yellow901 fa-chevron-down m-t-12': league.Collapse && themeType == 'blue14',
                  'text-yellow13-1 fa-chevron-down m-t-12': league.Collapse && themeType == 'yellow13',
                  'text-red15 fa-chevron-down m-t-12': league.Collapse && themeType == 'red15',
                  'text-yellow20 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow20',
                  'text-blue13 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'blue13',
                  'text-gold13 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'gold13',
                  'text-yellow11 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow11',
                  'text-yellow14 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow14',
                  'text-yellow18 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow18',
                  'text-yellow21 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow21',
                  'text-yellow16 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow16',
                  'text-yellow17 fa-chevron-down m-t-12 float-right m-r-16': league.Collapse && themeType == 'yellow17',
                  'text-white fa-chevron-down m-t-9': league.Collapse && themeType == 'blue16',
                  'text-white fa-chevron-up m-t-9': !league.Collapse && themeType == 'blue16',
                  'text-black fa-chevron-down m-t-12': league.Collapse && themeType == 'white',
                  'text-black fa-chevron-up m-t-12': !league.Collapse && themeType == 'white',
                }"
                :id="'collapseleague-' + league.Id"
              ></i>
              <img
                :src="sportsAPI ? '/image/Sports/flags/matrix/' + league.LocationId + '.png' : '/image/Sports/flags/' + league.LocationId + '.png'"
                height="12"
                class="float-left m-r-10"
                :class="{
                  'm-t-12': themeType != 'blue16' && layoutType != 'layout2',
                  'm-t-9': themeType == 'blue16',
                  'm-t-2': layoutType == 'layout2',
                  'm-l-16': layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6',
                }"
              />
              <span class="float-left" :class="`league-info-name-${themeType}`">{{ league.LocationName }}</span>
              <i class="fa fa-angle-right float-left m-l-6 m-r-6" :class="`league-info-icon-${themeType}`"></i>
              <span class="float-left text-overflow" :class="`league-info-name-${themeType}`" :style="isMobile ? 'width: calc(100% - 220px)' : 'width: calc(100% - 310px)'">
                <span class="float-left">{{ league.Name }}</span>
              </span>
              <span v-if="!isMobile && layoutType == 'layout1'"
                class="float-right m-r-10 width-50"
                :class="`league-info-game-${themeType}`"
                >{{ league.TodayCount }} 경기</span
              >
              <span v-if="!isMobile && layoutType != 'layout2' && layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'"
                class="float-right m-r-10" :class="`league-info-gameicon-${themeType}`">|</span
              >
              <!-- <span v-if="sportsType === 'prematch'" class="float-right m-r-40 m-t-8">|</span> -->
              <img
                v-if="layoutType == 'layout1'"
                :src="'/image/Sports/League/' + league.SportId + '.png'"
                height="24"
                class="float-right m-r-10"
                :class="[
                  themeType != 'blue16' ? 'm-t-6' : 'm-t-3'
                ]"
              />
              <img v-if="layoutType == 'layout2'" :src="`/image/Sports/Category/${themeType}/${league.SportId}_1.png`" class="float-right" />
              <img v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" :src="`/image/Sports/Category/${themeType}/${league.SportId}.png`" class="float-right m-t-8" width="22" />
            </div>
          </el-row>
          <img
            v-if="(themeType == 'blue16') && sportsType === 'prematch'"
            :src="favorite.findIndex((fav) => fav.LeagueId === league.Id) > -1 ? '/image/Sports/blue18/FavoriteOn.png' : '/image/Sports/FavoriteOff.png'"
            class="league-favorite cursor"
            @click="onClickFavorite(league)"
            width="17"
          />
        </el-row>
        <!-- 리그정보 끝 -->
        <el-row
          class="collapse"
          :class="{ show: league.Collapse === true }"
          aria-expanded="false"
          :id="'bookleague' + league.Id"
          :style="layoutType == 'layout2' ? 'background: #141517; border-radius: 0px 0px 6px 6px; padding: 0 8px;' : ''"
        >
          <el-row v-for="(game, index) in league.games" :key="index" :class="{ 'p-l-16 p-r-16': !isMobile && layoutType == 'layout1' }">
            <div class="col-md-12 p-2 m-b-3 position-relative"
              :class="[getBackgrounClassOfGame(game.Fixture.Sport.Id, 2), layoutType == 'layout2' ? 'm-t-8 b-r-6' : 'm-t-22']"
              style="height: 92px"
              :style="layoutType == 'layout2' ? 'background: #1D1E21;' : ''">
              <div class="col-md-12 p-0 m-b-1">
                <div
                  v-if="layoutType != 'layout2'"
                  class="glist btn-group col-md-12 p-0 display-center"
                  style="height: 92px"
                >
                  <ul class="list-box-g col-md-12 text-center f-s-12 height-60" :class="`text-contrast-${themeType}`">
                    <el-col :span="8" class="height-60 display-center" style="flex-direction: column">
                      <el-row class="m-b-3">
                        <img v-if="game.Fixture.Participants[0].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[0].ImageUrl)" height="40" />
                      </el-row>
                      <el-row>{{ game.Fixture.Participants[0].Name }}</el-row>
                    </el-col>
                    <el-col :span="8">
                      <el-row :class="`sports-color-${themeType}`">{{ parseTime(game.Fixture.StartDate) }}</el-row>
                      <el-row class="f-s-20 f-w-700">VS</el-row>
                    </el-col>
                    <el-col :span="8" class="height-60 display-center" style="flex-direction: column">
                      <el-row class="m-b-3">
                        <img v-if="game.Fixture.Participants[1].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[1].ImageUrl)" height="40" />
                      </el-row>
                      <el-row>{{ game.Fixture.Participants[1].Name }}</el-row>
                    </el-col>
                  </ul>
                </div>
                <el-row v-if="layoutType == 'layout2'" class="p-t-16">
                  <el-row :class="`sports-color-${themeType}`" class="text-center">{{ parseTime(game.Fixture.StartDate) }}</el-row>
                  <el-row class="m-t-16">
                    <div style="width: 45%" class="text-right float-left text-ellipsis">
                      {{ game.Fixture.Participants[0].Name }}
                      <img v-if="game.Fixture.Participants[0].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[0].ImageUrl)" height="16" class="m-l-8" />
                    </div>
                    <div style="width: 10%" class="text-center float-left">
                      <img :src="`/image/Sports/${themeType}/vs1.png`" />
                    </div>
                    <div style="width: 45%" class="text-left float-left text-ellipsis">
                      <img v-if="game.Fixture.Participants[1].ImageUrl" :src="filterTeamEmblem(game.Fixture.Participants[1].ImageUrl)" height="16" class="m-r-8" />
                      {{ game.Fixture.Participants[1].Name }}
                    </div>
                  </el-row>
                </el-row>
              </div>
            </div>
          </el-row>
        </el-row>
      </div>
    </el-row>
    <!-- 진행예정경기 끝 -->
    <el-row v-if="(leagueList && leagueList.length > 0) || (bookingLeagueList && bookingLeagueList.length > 0)" class="m-t-15">
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
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
    <!-- 경기가 없을 경우 -->
    <el-row v-else-if="leagueList && leagueList.length < 1 && bookingLeagueList && bookingLeagueList.length < 1 && !listLoading" class="text-center p-t-102 f-s-12 f-w-700">
      해당 조건에 검색되는 경기가 없습니다.
    </el-row>
    <!-- 경기가 없을 경우 끝 -->
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import {
  parseTime,
  convertToKoreanTime,
  getMidnightKoreanTime,
  filterOdds,
  processUserOdds,
} from "~/assets/js/utils";
import { linkImage } from "~/assets/js/data/datamanagement.js";
import OddsPanel from "~/components/Sports/RightPanel/OddsPanel";
import { getTextColor } from "@/assets/js/data/uicommon";

const favoriteService = feathers.service("sportsFavorite");
const sportsGamesService = feathers.service("getSportsGameList");
const mainService = feathers.service("main");
favoriteService.timeout = 60000
sportsGamesService.timeout = 60000

export default {
  name: "GameList",
  components: {
    OddsPanel,
  },
  props: ["sportsType", "progressStatus", "isBetAvailable", "isShowMobile"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      queryList: "sports/getQueryList",
      isReloadGameList: "sports/getIsReloadGameList",
      selectedFixtureId: "sports/getSelectedFixtureId",
      sortType: "sports/getSortType",
      favorite: "sports/getFavorite",
      betSlipList: "betslip/getBetSlipList",
      isSearchToday: "sports/getIsSearchToday",
      categoryId: "sports/getCategoryId",
      isMobile: "getIsMobile",
      isChangeBetSlip: "sports/getIsChangeBetSlip",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      gameSettings: "getGameSettings",
      pageNum: "sports/getPage",
      sportsAPI: "getSportsAPI"
    }),
  },
  filters: {
    oddsChangeClassObject(upDown) {
      let className = "";
      if (upDown === 1) className += "fa-long-arrow-up text-blue902";
      else if (upDown === 2) className += "fa-long-arrow-down text-red905";
      return className;
    },
  },
  watch: {
    sortType(val) {
      if (val == true) this.timeType = 0;
      this.getGameList();
    },
    selectedFixtureId(val) {
      if (val != -1) {
        this.$emit("event", 2);
      } else {
        if (this.themeType == "blue18") {
          this.$emit("event", 1);
        } else {
          this.$emit("event", 0);
        }
      }
    },
    isReloadGameList(val) {
      if (this.queryList.selectedLeagueId !== -1) {
        this.timeType = 2;
      } else {
        this.timeType = 0;
      }
      this.getGameList();
    },
    isSearchToday(val) {
      if (val === 1) {
        this.timeType = 2;
      }
    },
  },
  created() {
    if (this.currentUser) {
      if (this.sportsType == "prematch") {
        let index = this.gameSettings.Sports.levelSetting.findIndex((setting) => setting.level == this.currentUser.level);
        if (index > -1) this.userOdds = this.gameSettings.Sports.levelSetting[index].userOdds;
      } else {
        let index = this.gameSettings.Live.levelSetting.findIndex((setting) => setting.level == this.currentUser.level);
        if (index > -1) this.userOdds = this.gameSettings.Live.levelSetting[index].userOdds;
      }
    }

    // 리그를 선택한 경기 리그별보기설정
    if (this.queryList.selectedLeagueId !== -1) this.timeType = 2;
    this.getGameList();
  },
  data() {
    return {
      gameList: [], // 경기 리스트
      bookingLeagueList: [], // 진행예정 경기 리스트
      total: 0, // 전체 경기갯수
      timeType: 0, // 0: 24시간내, 1: 내일, 2: 리그별
      leagueList: [], // 리그 리스트
      listQuery: {
        // 페이징 질의어
        page: 1,
        limit: 30,
      },
      detailGameIds: [], // 낮은 해상도에서 세부배팅옵션을 보여주기 위한 경기 아이디 리스트
      isProcessFavorite: false,
      userOdds: 0,
    };
  },
  mounted() {
    if (this.sportsType == "prematch") {
      // 경기 패치
      mainService.on("prematchPatched", (data) => { this.UpdateFixture(data); });
    } else {
      // 경기 패치
      mainService.on("inplayPatched", (data) => { this.UpdateFixture(data); });
    }

    // 리그 패치
    mainService.on("leaguePatched", (data) => { this.UpdateLeague(data); });

    // 프리매치 패치
    mainService.on("UpdatePrematch", (data) => { this.prematchUpdate(data); });

    // 실시간패치
    mainService.on("UpdateInplay", (data) => { this.inplayUpdate(data); });
  },
  methods: {
    parseTime,
    getTextColor,
    filterOdds,
    convertToKoreanTime,
    getMidnightKoreanTime,
    processUserOdds,
    filterTeamEmblem(filename) {
      if (this.sportsAPI) return filename
      return linkImage(filename);
    },
    // 24시간내, 내일, 3일선택
    onSelectTime(val) {
      if (val !== 2 && this.queryList.isSearchToday === 1) return;
      if (val === this.timeType) return;
      if (val !== 2) this.$store.commit("sports/SET_LEAGUEID", -1);
      this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
      this.timeType = val;
      this.getGameList();
    },
    // 배팅하기
    onClickBetButton(fixtureId, marketId, marketName, bet) {
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      if (!this.isBetAvailable) {
        this.showMessage("알림메시지", "배팅을 할수 없는 상태입니다.", "닫기[Close]", 2);
        return;
      }

      // 현재 회차정보를 얻지 못한 경우
      if (bet.Status !== 1) {
        this.showMessage("알림메시지", "배팅옵션이 배팅할수 없는 상태입니다.", "닫기[Close]", 2);
        return;
      }

      // 배팅슬립에 배팅정보 추가
      let betName;
      if (bet.Line !== undefined && bet.Line !== "") {
        betName = marketName + "(" + bet.Line + ") - " + bet.Name;
      } else {
        betName = marketName + " - " + bet.Name;
      }
      let selectedGame = this.gameList[this.gameList.findIndex((game) => game.FixtureId == fixtureId)];
      let data = {
        gameType: this.sportsType,
        SportId: selectedGame.Fixture.Sport.Id,
        FixtureId: selectedGame.FixtureId,
        MarketId: marketId, // 0: 크로스, .. 해당 마켓 아이디가 들어감...
        BetId: bet.Id, // MarketId=0 일때  CrossBet._id값이 들어간다.
        Bets: [
          {
            Id: bet.Id, // 배당 아이디
          },
        ],
        LeagueName: selectedGame.Fixture.League.Name,
        HomeName: selectedGame.Fixture.Participants[0].Name,
        AwayName: selectedGame.Fixture.Participants[1].Name,
        BetName: betName,
        odds: this.processUserOdds(bet.Price, this.userOdds),
        Status: bet.Status,
      };
      
      let index = this.betSlipList.findIndex((slip) => slip.FixtureId === selectedGame.FixtureId);
      if (index > -1) {
        let sameBetIndex = this.betSlipList.findIndex((slip) => slip.FixtureId == selectedGame.FixtureId && slip.BetId == data.BetId);
        if (sameBetIndex > -1) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", sameBetIndex);
          return;
        }
        if (this.gameSettings.Sports.isUseExtendMainOdds && this.sportsType == "prematch") {
          let sameMarketIndex = this.betSlipList.findIndex((slip) => slip.FixtureId === selectedGame.FixtureId && slip.MarketId == data.MarketId);
          if (sameMarketIndex > -1) {
            if (!this.gameSettings.Sports.cross.football.tie && data.BetName.indexOf("무승부") > -1 && 
              this.betSlipList.filter((slip) => slip.FixtureId === selectedGame.FixtureId).length == 2) {
              this.showMessage("알림메시지", "무승부 조합배팅은 불가합니다.", "닫기[Close]", 2);
              return;
            }
            data.SlipIndex = sameMarketIndex;
            this.$store.commit("betslip/UPDATE_BETSLIPONE", data);
          } else {
            let sameBetSlip = this.betSlipList.filter((slip) => slip.FixtureId === selectedGame.FixtureId);
            if (sameBetSlip.length == 1 && (
                (selectedGame.MainMarket && selectedGame.MainMarket.Bets.findIndex((bet) => bet.Id == sameBetSlip[0].BetId) > -1) ||
                (selectedGame.MainHandicap && selectedGame.MainHandicap.Bets.findIndex((bet) => bet.Id == sameBetSlip[0].BetId) > -1) ||
                (selectedGame.MainUnderOver && selectedGame.MainUnderOver.Bets.findIndex((bet) => bet.Id == sameBetSlip[0].BetId) > -1))
            ) {
              if (selectedGame.Fixture.Sport.Id == 6046) {
                // 축구
                if (this.gameSettings.Sports.cross.football.victory1 &&
                  (((sameBetSlip[0].MarketId == 1 || sameBetSlip[0].MarketId == 50) && (data.MarketId == 2 || data.MarketId == 28)) ||
                    ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 1 || data.MarketId == 50)))
                ) {
                  if (!this.gameSettings.Sports.cross.football.tie && (sameBetSlip[0].BetName.indexOf("무승부") > -1 || data.BetName.indexOf("무승부") > -1)) {
                    this.showMessage("알림메시지", "무승부 조합배팅은 불가합니다.", "닫기[Close]", 2);
                    return;
                  } else {
                    this.$store.commit("betslip/SET_BETSLIPLIST", data);
                    return;
                  }
                } else if (this.gameSettings.Sports.cross.football.victory2 &&
                  (((sameBetSlip[0].MarketId == 52 || sameBetSlip[0].MarketId == 226) && (data.MarketId == 2 || data.MarketId == 28)) || 
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 52 || data.MarketId == 226)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                } else if (this.gameSettings.Sports.cross.football.handicap && 
                  (((sameBetSlip[0].MarketId == 3 || sameBetSlip[0].MarketId == 342 || sameBetSlip[0].MarketId == 866) && (data.MarketId == 2 || data.MarketId == 28)) || 
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 3 || data.MarketId == 342 || data.MarketId == 866)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                }
              } else if (selectedGame.Fixture.Sport.Id == 48242) {
                // 농구
                if (this.gameSettings.Sports.cross.basketball.victory2 &&
                  (((sameBetSlip[0].MarketId == 52 || sameBetSlip[0].MarketId == 226) && (data.MarketId == 2 || data.MarketId == 28)) ||
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 52 || data.MarketId == 226)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                } else if (this.gameSettings.Sports.cross.basketball.handicap &&
                  (((sameBetSlip[0].MarketId == 3 || sameBetSlip[0].MarketId == 342 || sameBetSlip[0].MarketId == 866) && (data.MarketId == 2 || data.MarketId == 28)) ||
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 3 || data.MarketId == 342 || data.MarketId == 866)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                }
              } else if (selectedGame.Fixture.Sport.Id == 154914) {
                // 야구
                if (this.gameSettings.Sports.cross.baseball.victory2 && 
                  (((sameBetSlip[0].MarketId == 52 || sameBetSlip[0].MarketId == 226) && (data.MarketId == 2 || data.MarketId == 28)) ||
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 52 || data.MarketId == 226)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                } else if (this.gameSettings.Sports.cross.baseball.handicap && 
                  (((sameBetSlip[0].MarketId == 3 || sameBetSlip[0].MarketId == 342 || sameBetSlip[0].MarketId == 866) && (data.MarketId == 2 || data.MarketId == 28)) ||
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 3 || data.MarketId == 342 || data.MarketId == 866)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                }
              } else if (selectedGame.Fixture.Sport.Id == 154830) {
                // 배구
                if (this.gameSettings.Sports.cross.volleyball.victory2 && (((sameBetSlip[0].MarketId == 52 || sameBetSlip[0].MarketId == 226) && (data.MarketId == 2 || data.MarketId == 28)) ||
                    ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 52 || data.MarketId == 226)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                } else if (this.gameSettings.Sports.cross.volleyball.handicap &&
                  (((sameBetSlip[0].MarketId == 3 || sameBetSlip[0].MarketId == 342 || sameBetSlip[0].MarketId == 866) && (data.MarketId == 2 || data.MarketId == 28)) ||
                  ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 3 || data.MarketId == 342 || data.MarketId == 866)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                }
              } else if (selectedGame.Fixture.Sport.Id == 35232) {
                // 아이스하키
                if (this.gameSettings.Sports.cross.icehockey.victory1 &&
                  (((sameBetSlip[0].MarketId == 1 || sameBetSlip[0].MarketId == 50) && (data.MarketId == 2 || data.MarketId == 28)) ||
                    ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 1 || data.MarketId == 50)))
                ) {
                  if (!this.gameSettings.Sports.cross.icehockey.tie && (sameBetSlip[0].BetName.indexOf("무승부") > -1 || data.BetName.indexOf("무승부") > -1)) {
                    this.showMessage("알림메시지", "무승부 조합배팅은 불가합니다.", "닫기[Close]", 2);
                    return;
                  } else {
                    this.$store.commit("betslip/SET_BETSLIPLIST", data);
                    return;
                  }
                } else if (this.gameSettings.Sports.cross.icehockey.victory2 &&
                  (((sameBetSlip[0].MarketId == 52 || sameBetSlip[0].MarketId == 226) && (data.MarketId == 2 || data.MarketId == 28)) ||
                    ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 52 || data.MarketId == 226)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                } else if (this.gameSettings.Sports.cross.icehockey.handicap &&
                  (((sameBetSlip[0].MarketId == 3 || sameBetSlip[0].MarketId == 342 || sameBetSlip[0].MarketId == 866) && (data.MarketId == 2 || data.MarketId == 28)) ||
                    ((sameBetSlip[0].MarketId == 2 || sameBetSlip[0].MarketId == 28) && (data.MarketId == 3 || data.MarketId == 342 || data.MarketId == 866)))
                ) {
                  this.$store.commit("betslip/SET_BETSLIPLIST", data);
                  return;
                }
              }
              data.SlipIndex = index;
              this.$store.commit("betslip/UPDATE_BETSLIPONE", data);
            } else if (sameBetSlip.length == 0) {
              data.SlipIndex = index;
              this.$store.commit("betslip/UPDATE_BETSLIPONE", data);
            }
          }
        } else {
          data.SlipIndex = index;
          this.$store.commit("betslip/UPDATE_BETSLIPONE", data);
        }
      } else {
        this.$store.commit("betslip/SET_BETSLIPLIST", data);
      }
    },
    // 추가배팅옵션 라벨얻기
    getDetailOddsName(totalMarketCount) {
      if (totalMarketCount === 0) {
        if (this.layoutType == "layout2") return "+0";
        return "추가배팅옵션없음";
      }
      let label = totalMarketCount;
      if (this.layoutType != "layout2") label += " 추가 배팅옵션";
      return "+" + label;
    },
    // 프리매치 패치
    prematchUpdate(prematchData) {
      if (prematchData.type === 1) {
        this.AddGame(prematchData, "prematch");           // 경기추가
      } else if (prematchData.type === 2) {
        this.DeleteGame(prematchData, "prematch");        // 경기삭제
      } else if (prematchData.type === 3) {
        this.AddMarket(prematchData, "prematch");         // 마켓추가
      } else if (prematchData.type == 5) {
        this.UpdateMainMarket(prematchData, "prematch");  // 메인마켓변경
      } else if (prematchData.type === 8) {
        this.AddBet(prematchData);                        // 배당추가 (마켓을 다시 보냄)
      } else if (prematchData.type === 10) {
        this.UpdateCross(prematchData);                   // 크로스 전체 업뎃
      } else if (prematchData.type === 11) {
        this.DeleteCross(prematchData);                   // 크로스 삭제
      } else if (prematchData.type === 13) {
        this.DeleteCrossLine(prematchData);               // 크로스 라인 삭제
      } else if (prematchData.type === 14) {
        this.UpdateCrossBet(prematchData);                // 포함되있는 배당이 달라지면서 생기는 업뎃 - 아이디가 변한다.
      } else if (prematchData.type === 15) {
        this.UpdateCrossOdds(prematchData);               // 배당 변화
      }
    },
    // 인플레이 패치
    inplayUpdate(inplayData) {
      if (inplayData.type === 1) {
        this.AddGame(inplayData, "inplay");
      } else if (inplayData.type === 2) {
        this.DeleteGame(inplayData, "inplay");
      } else if (inplayData.type === 5) {
        this.UpdateLiveSocre(inplayData);
      } else if (inplayData.type === 6) {
        this.AddMarket(inplayData, "inplay");
      } else if (inplayData.type == 7) {
        this.UpdateMainMarket(inplayData, "inplay");
      } else if (inplayData.type === 8) {
        this.AddBet(inplayData);
      } else if (inplayData.type === 10) {
        this.UpdateCross(inplayData); // 크로스 전체 업뎃
      } else if (inplayData.type === 11) {
        this.DeleteCross(inplayData); // 크로스 삭제
      }
    },
    // 게임추가패치
    AddGame(patchData, type) {
      // 프리매치인 경우 경기추가 하지 않음
      if (this.sportsType == "prematch") return;

      // 인플레이인 경우 경기추가
      this.gameList.push(patchData.data);

      // 진행예정경기 추가
      if (this.sportsType === "inplay" && patchData.data.Fixture.Status === 1) {
        this.bookingLeagueList.push(patchData.data);
        return;
      }

      // 진행중 경기 추가
      let leagueIndex = this.leagueList.findIndex( (league) => league.Id === patchData.data.Fixture.League.Id );
      if (leagueIndex > -1) {
        // 리그가 존재하는 경우
        let game = patchData.data;
        this.leagueList[leagueIndex].games.push(game);
        let midNightTime = this.getMidnightKoreanTime();
        let koreanTime = this.convertToKoreanTime(patchData.data.Fixture.StartDate);
        if (koreanTime < midNightTime) this.leagueList[leagueIndex].TodayCount++;
        this.total++;
      } else {
        // 리그가 존재하지 않는 경우
        if (this.sportsType === "inplay") {
          let league = {
            Id: patchData.data.Fixture.League.Id,
            SportId: patchData.data.Fixture.Sport.Id,
            LocationId: patchData.data.Fixture.Location.Id,
            LocationName: patchData.data.Fixture.Location.Name,
            Name: patchData.data.Fixture.League.Name,
            Visible: patchData.data.Fixture.League.Visible,
            TodayCount: 0,
            Collapse: true,
            games: [],
          };
          let koreanTime = this.convertToKoreanTime(patchData.data.Fixture.StartDate);
          let midNightTime = this.getMidnightKoreanTime();
          if (koreanTime < midNightTime) league.TodayCount++;
          league.games.push(patchData.data);
          this.leagueList.push(league);
        }
      }
    },
    // 게임삭제패치
    DeleteGame(patchData, type) {
      if (this.sportsType === type) {
        // 진행중경기 삭제
        for (let leagueIndex = 0; leagueIndex < this.leagueList.length; leagueIndex++) {
          let gameIndex = this.leagueList[leagueIndex].games.findIndex((game) => game.FixtureId === patchData.data.FixtureId);
          if (gameIndex > -1) {
            // 오늘의 경기갯수 차감
            let midNightTime = this.getMidnightKoreanTime();
            let koreanTime = this.convertToKoreanTime(this.leagueList[leagueIndex].games[gameIndex].Fixture.StartDate);
            if (koreanTime < midNightTime) this.leagueList[leagueIndex].TodayCount--;
            this.total--;
            // 경기리스트에서 삭제
            this.leagueList[leagueIndex].games.splice(gameIndex, 1);
            break;
          }
        }
        // 진행예정경기 삭제
        let bookGameIndex = this.bookingLeagueList.findIndex((game) => game.FixtureId === patchData.data.FixtureId);
        if (bookGameIndex > -1) {
          this.bookingLeagueList.splice(bookGameIndex, 1);
        }
        // 오른쪽패널에 있는 경기삭제시
        if (this.selectedFixtureId === patchData.data.FixtureId)
          this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
      }

      // 배팅슬립에 있는 경기삭제시
      let index = this.betSlipList.findIndex((slip) => slip.FixtureId === patchData.data.FixtureId);
      if (index > -1) {
        this.$store.commit("betslip/DELETE_BETSLIPONE", index);
        this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
        this.showMessage("알림메시지", "선택된 배팅 중에 배팅이 불가능한 마켓이 포함되어 있습니다.", "닫기[Close]", 2);
      }
    },
    // 인플레이 라이브스코어패치
    UpdateLiveSocre(patchData) {
      let gameIndex = this.gameList.findIndex((game) => game.FixtureId === patchData.data.FixtureId);
      if (gameIndex > -1 && patchData.data.LiveScore) {
        if (!this.gameList[gameIndex].Livescore)
          this.gameList[gameIndex].Livescore = {};
        if (!this.gameList[gameIndex].Livescore.Scoreboard) {
          this.gameList[gameIndex].Livescore.Scoreboard = { Results: [{ Value: 0 }, { Value: 0 }] };
        }
        this.gameList[gameIndex].Livescore.Scoreboard.Time = patchData.data.LiveScore.Scoreboard.Time;
        this.gameList[gameIndex].Livescore.Scoreboard.StatusDescription = patchData.data.LiveScore.Scoreboard.StatusDescription;
        this.gameList[gameIndex].Livescore.Scoreboard.Results[0].Value = patchData.data.LiveScore.Scoreboard.Results[0].Value;
        this.gameList[gameIndex].Livescore.Scoreboard.Results[1].Value = patchData.data.LiveScore.Scoreboard.Results[1].Value;
      }
    },
    // 마켓추가패치
    AddMarket(patchData, type) {
      if (this.sportsType === type) {
        let gameIndex = this.gameList.findIndex((game) => game.FixtureId === patchData.data.FixtureId);
        if (gameIndex > -1) this.gameList[gameIndex].TotalMarketCount++;
      }
    },
    UpdateMainMarket(patchData, type) {
      if (this.sportsType === type) {
        let gameIndex = this.gameList.findIndex((game) => game.FixtureId == patchData.data.FixtureId);
        if (gameIndex > -1) {
          let game = this.gameList[gameIndex];
          if (game.MainMarket.Id == patchData.data.data.Id) {
            for (let betIndex = 0; betIndex < game.MainMarket.Bets.length; betIndex++) {
              game.MainMarket.Bets[betIndex].Price = patchData.data.data.Bets[betIndex].Price;
              game.MainMarket.Bets[betIndex].Status = patchData.data.data.Bets[betIndex].Status;
              game.MainMarket.Bets[betIndex].UpDown = patchData.data.data.Bets[betIndex].UpDown;
            }
            return;
          }
          if (game.MainHandicap && game.MainHandicap.Id == patchData.data.data.Id) {
            for (let betIndex = 0; betIndex < game.MainHandicap.Bets.length; betIndex++) {
              game.MainHandicap.Bets[betIndex].Price = patchData.data.data.Bets[betIndex].Price;
              game.MainHandicap.Bets[betIndex].Status = patchData.data.data.Bets[betIndex].Status;
              game.MainHandicap.Bets[betIndex].UpDown = patchData.data.data.Bets[betIndex].UpDown;
            }
            return;
          }
          if (game.MainUnderOver && game.MainUnderOver.Id == patchData.data.data.Id) {
            for (let betIndex = 0; betIndex < game.MainUnderOver.Bets.length; betIndex++) {
              game.MainUnderOver.Bets[betIndex].Price = patchData.data.data.Bets[betIndex].Price;
              game.MainUnderOver.Bets[betIndex].Status = patchData.data.data.Bets[betIndex].Status;
              game.MainUnderOver.Bets[betIndex].UpDown = patchData.data.data.Bets[betIndex].UpDown;
            }
            return;
          }
        }
      }
    },
    // 배팅옵션추가
    AddBet(patchData) {
      let index = this.betSlipList.findIndex((slip) => slip.FixtureId === patchData.data.FixtureId && slip.MarketId === patchData.data.data.Id);
      if (index > -1) {
        let isChangeOdds = false;
        for (let lineIndex = 0; lineIndex < patchData.data.data.BetLines.length; lineIndex++) {
          for (let betIndex = 0; betIndex < patchData.data.data.BetLines[lineIndex].Bets.length; betIndex++) {
            if (patchData.data.data.BetLines[lineIndex].Bets[betIndex] && this.betSlipList[index].BetId == patchData.data.data.BetLines[lineIndex].Bets[betIndex].Id) {
              if (this.betSlipList[index].odds !== patchData.data.data.BetLines[lineIndex].Bets[betIndex].Price || 
                this.betSlipList[index].Status !== patchData.data.data.BetLines[lineIndex].Bets[betIndex].Status) {
                this.$store.commit("betslip/UPDATE_BETSLIPBETVALUE", {
                  index: index,
                  status: patchData.data.data.BetLines[lineIndex].Bets[betIndex].Status,
                  price: this.processUserOdds(patchData.data.data.BetLines[lineIndex].Bets[betIndex].Price, this.userOdds),
                });
                isChangeOdds = true;
              }
            }
          }
        }
        if (isChangeOdds) {
          this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
          this.showMessage("알림메시지", "선택된 경기중 변경된 사항이 있습니다.", "닫기[Close]", 2);
        }
      }
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
    // 크로스 업뎃
    UpdateCross(patchData) {
      let index = this.betSlipList.findIndex((slip) => slip.FixtureId === patchData.data.FixtureId && slip.MarketId === 0);
      if (index > -1) {
        this.$store.commit("betslip/DELETE_BETSLIPONE", index);
        this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
        this.showMessage("알림메시지", "선택된 배팅 중에 배팅이 불가능한 마켓이 포함되어 있습니다.", "닫기[Close]", 2);
      }
    },
    // 크로스 삭제
    DeleteCross(patchData) {
      let index = this.betSlipList.findIndex((slip) => slip.FixtureId === patchData.data.FixtureId && slip.MarketId === 0);
      if (index > -1) {
        this.$store.commit("betslip/DELETE_BETSLIPONE", index);
        this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
        this.showMessage("알림메시지", "선택된 배팅 중에 배팅이 불가능한 마켓이 포함되어 있습니다.", "닫기[Close]", 2);
      }
    },
    // 리그 패치
    UpdateLeague(patchData) {
      let index = this.leagueList.findIndex((league) => league.Id === patchData.Id);
      if (index < 0) return

      this.leagueList[index].Visible = patchData.Visible;
      if (patchData.Visible === false) {
        // 배팅슬립에 있는 경기삭제
        for (let gameIndex = 0; gameIndex < this.leagueList[index].games.length; gameIndex++) {
          let slipIndex = this.betSlipList.findIndex((slip) => slip.FixtureId == this.leagueList[index].games[gameIndex].FixtureId);
          if (slipIndex > -1) {
            this.$store.commit("betslip/DELETE_BETSLIPONE", slipIndex);
            this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
            this.showMessage("알림메시지", "선택된 배팅 중에 배팅이 불가능한 마켓이 포함되어 있습니다.", "닫기[Close]", 2);
          }
        }
        // 오른쪽패널에 있는 경기삭제시
        let game = this.gameList[this.gameList.findIndex((game) => game.FixtureId === this.selectedFixtureId)];
        if (game && game.Fixture.League.Id === patchData.Id)
          this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
      }
    },
    // 경기 패치
    UpdateFixture(patchData) {
      let index = this.gameList.findIndex((game) => game.FixtureId === patchData.FixtureId);
      if (index > -1) {
        this.gameList[index].Visible = patchData.Visible;
        if (patchData.Visible === false) {
          // 배팅슬립에 있는 경기삭제 및 배팅중이면 차단
          let index = this.betSlipList.findIndex((slip) => slip.FixtureId === patchData.FixtureId);
          if (index > -1) {
            this.$store.commit("betslip/DELETE_BETSLIPONE", index);
            this.$store.commit("sports/SET_ISCHANGEDBETSLIP", !this.isChangeBetSlip);
            this.showMessage("알림메시지", "선택된 배팅 중에 배팅이 불가능한 마켓이 포함되어 있습니다.", "닫기[Close]", 2);
          }
          // 오른쪽패널에 있는 경기삭제시
          if (this.selectedFixtureId === patchData.FixtureId) this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
        }
      }

      index = this.bookingLeagueList.findIndex((game) => game.FixtureId === patchData.FixtureId);
      if (index > -1) this.bookingLeagueList[index].Visible = patchData.Visible;
    },
    // 추가배팅옵션클릭
    onClickDetailOdds(fixtureId) {
      let game = this.gameList[this.gameList.findIndex((g) => g.FixtureId === fixtureId)];
      if (game.TotalMarketCount == 0) return;
      // let count = game.MainMarket.Bets.filter(bet => bet.Status !== 1).length
      // if (this.sportsType === 'prematch' && (count === 2 || count === 3)) return

      if (this.isShowMobile) {
        let index = this.detailGameIds.findIndex((id) => id === fixtureId);
        if (index > -1) {
          this.detailGameIds.splice(index, 1);
        } else {
          this.detailGameIds.push(fixtureId);
        }
      } else {
        if (this.selectedFixtureId === fixtureId) {
          this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", -1);
        } else {
          this.$store.commit("sports/SET_SELECTED_FIXTURE_ID", game.FixtureId);
        }
      }
    },
    // 리그선택
    onSelectLeague(fixture) {
      this.$store.commit("sports/SET_QUERYLIST", {
        selectedSportsCategoryId: fixture.Sport.Id,
        selectedLocationId: fixture.Location.Id,
        selectedLeagueId: fixture.League.Id,
        searchKey: "",
        isSearchToday: 0,
      });
    },
    // 게임리스트 얻기
    getGameList() {
      this.listQuery.page = this.pageNum;
      this.$nuxt.$loading.start();
      this.gameList = [];

      this.listLoading = true;
      sportsGamesService.find({ query: {
        leagueid: this.queryList.selectedLeagueId,
        categoryid: this.queryList.selectedSportsCategoryId,
        locationid: this.queryList.selectedLocationId,
        sort: this.sortType,
        sportstype: this.sportsType,
        key: this.queryList.searchKey,
        issearchtoday: this.queryList.isSearchToday,
        timetype: this.timeType,
        limit: this.listQuery.limit,
        skip: this.listQuery.limit * (this.pageNum - 1)
      }})
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
            this.listLoading = false;
            this.$nuxt.$loading.finish();
            return
          }
          if (this.gameSettings.Sports.isFilterMarket && this.sportsType == "prematch") {
            for (let index = 0; index < res.data.data.length; index++) {
              let fixtureInfo = res.data.data[index]
              if (fixtureInfo.Fixture.Sport.Id == 6046 && fixtureInfo.TotalMarketCount <= 12) {
                continue;
              } else if (fixtureInfo.Fixture.Sport.Id == 35232 && fixtureInfo.TotalMarketCount <= 5) {
                continue;
              } else if (fixtureInfo.Fixture.Sport.Id == 687890 && fixtureInfo.TotalMarketCount <= 2) {
                continue;
              } else if (fixtureInfo.Fixture.Sport.Id == 54094 && fixtureInfo.TotalMarketCount <= 2) {
                continue;
              } else if (fixtureInfo.Fixture.Sport.Id == 35709 && fixtureInfo.TotalMarketCount <= 3) {
                continue;
              } else {
                this.gameList.push(fixtureInfo);
              }
            }
          } else {
            this.gameList = res.data.data;
          }
          this.total = res.data.total;
          this.getLeagueList();
          this.listLoading = false;
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.listLoading = false;
          this.$nuxt.$loading.finish();
        });
    },
    checkOdds(fixtureInfo) {
      if (fixtureInfo.MainMarket) {
        let index = fixtureInfo.MainMarket.Bets.findIndex(x => this.processUserOdds(x.Price, this.userOdds) < 1)
        if (index > -1) return false
      }
      if (fixtureInfo.MainHandicap) {
        let index = fixtureInfo.MainHandicap.Bets.findIndex(x => this.processUserOdds(x.Price, this.userOdds) < 1)
        if (index > -1) return false
      }
      if (fixtureInfo.MainUnderOver) {
        let index = fixtureInfo.MainUnderOver.Bets.findIndex(x => this.processUserOdds(x.Price, this.userOdds) < 1)
        if (index > -1) return false
      }
      return true
    },
    // 게임리스트로 부터 리그리스트얻기
    getLeagueList() {
      this.leagueList.splice(0, this.leagueList.length);
      this.bookingLeagueList.splice(0, this.bookingLeagueList.length);

      // 오늘경기갯수 계산을 위한 자정시간계산
      let midNightTime = this.getMidnightKoreanTime();
      for (let index = 0; index < this.gameList.length; index++) {
        let game = this.gameList[index];
        // 게임이 진행중이면서 마켓이 없는경우 추가하지 않음
        if (game.Fixture === undefined || (!game.MainMarket && game.Fixture.Status === 2)) continue;

        let tempLeagueList = this.leagueList;
        if (this.sportsType === "inplay" && game.Fixture.Status === 1) tempLeagueList = this.bookingLeagueList;
        if (this.sortType) {
          if (tempLeagueList.length > 0 && tempLeagueList[tempLeagueList.length - 1].Id == game.Fixture.League.Id) {
            // 이미 리그가 등록된 경우
            let koreanTime = this.convertToKoreanTime(game.Fixture.StartDate);
            if (koreanTime < midNightTime) {
              tempLeagueList[tempLeagueList.length - 1].TodayCount++;
            }
            tempLeagueList[tempLeagueList.length - 1].games.push(game);
          } else {
            // 리그가 등록되지 않은 경우
            let league = {
              Id: game.Fixture.League.Id,
              SportId: game.Fixture.Sport.Id,
              LocationId: game.Fixture.Location.Id,
              LocationName: game.Fixture.Location.Name,
              Name: game.Fixture.League.Name,
              Visible: game.Fixture.League.Visible,
              TodayCount: 0,
              Collapse: true,
              games: [],
            };

            let koreanTime = this.convertToKoreanTime(game.Fixture.StartDate);
            if (koreanTime < midNightTime) league.TodayCount++;
            league.games.push(game);
            tempLeagueList.push(league);
          }
        } else {
          let leagueIndex = tempLeagueList.findIndex((league) => league.Id === game.Fixture.League.Id);
          if (tempLeagueList.length > 0 && leagueIndex > -1) {
            // 이미 리그가 등록된 경우
            let koreanTime = this.convertToKoreanTime(game.Fixture.StartDate);
            if (koreanTime < midNightTime) tempLeagueList[leagueIndex].TodayCount++;
            tempLeagueList[leagueIndex].games.push(game);
          } else {
            // 리그가 등록되지 않은 경우
            let collapse = false;
            if (this.sortType == true || (tempLeagueList.length < 5 && this.timeType !== 2) || (this.timeType === 2 && this.queryList.selectedLeagueId !== -1)) {
              collapse = true;
            }
            let league = {
              Id: game.Fixture.League.Id,
              SportId: game.Fixture.Sport.Id,
              LocationId: game.Fixture.Location.Id,
              LocationName: game.Fixture.Location.Name,
              Name: game.Fixture.League.Name,
              Visible: game.Fixture.League.Visible,
              TodayCount: 0,
              Collapse: collapse,
              games: [],
            };
            let koreanTime = this.convertToKoreanTime(game.Fixture.StartDate);
            if (koreanTime < midNightTime) {
              league.TodayCount++;
            }
            league.games.push(game);
            tempLeagueList.push(league);
          }
        }
      }
    },
    // 추가배팅옵션 갯수얻기
    setTotalMarketCount(game) {
      // 마켓이 없는 경우 추가배팅옵션갯수를 0으로 설정
      if (!game.Markets) {
        game.TotalMarketCount = 0;
        return false;
      }
      // 추가배팅옵션 갯수 얻기
      let totalMarketCount = game.Markets.length;
      // 승무패 혹은 승패, 승패(연장포함) 배당얻기
      let mainMarketIndex = game.Markets.findIndex((market) => market.Id === 1);
      if (mainMarketIndex > -1) {
        let market = {};
        market = game.Markets[mainMarketIndex];
        if (this.sportsType === "prematch" && market.BetLines[0].Bets[0].Status !== 1)
          return false;
        game.Markets.splice(0, game.Markets.length);
        game.Markets.push(market);
        game.TotalMarketCount = totalMarketCount--;
        return true;
      }
      mainMarketIndex = game.Markets.findIndex((market) => market.Id === 52);
      if (mainMarketIndex > -1) {
        let market = {};
        market = game.Markets[mainMarketIndex];
        if (this.sportsType === "prematch" && market.BetLines[0].Bets[0].Status !== 1)
          return false;
        game.Markets.splice(0, game.Markets.length);
        game.Markets.push(market);
        game.TotalMarketCount = totalMarketCount--;
        return true;
      }
      mainMarketIndex = game.Markets.findIndex((market) => market.Id === 226);
      if (mainMarketIndex > -1) {
        let market = {};
        market = game.Markets[mainMarketIndex];
        if (this.sportsType === "prematch" && market.BetLines[0].Bets[0].Status !== 1)
          return false;
        game.Markets.splice(0, game.Markets.length);
        game.Markets.push(market);
        game.TotalMarketCount = totalMarketCount--;
        return true;
      }
      game.Markets.splice(0, game.Markets.length);
      game.TotalMarketCount = totalMarketCount;
      return false;
    },
    // 현재 페이지 변화
    handleCurrentChange(val) {
      this.$store.commit("sports/SET_PAGE", val);
      this.getGameList();
    },
    // 게임의 배경스타일얻기
    getBackgrounClassOfGame(sportsId, type) {
      if ((this.themeType != "blue16" && type == 1) || (this.themeType == "blue16" && type == 0))
        return "";

      if (this.sportsType == "prematch") {
        if (this.themeType == "blue16") {
          return "sports2box-blue16";
        } else if (this.layoutType == "layout2" || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
          return "sports2box-" + this.themeType;
        } else {
          return "p-t-15 m-t-26 sports2box-" + this.themeType;
        }
      } else {
        if (this.themeType != "blue16") {
          if (this.themeType == "white")
            return "p-t-10 m-t-26 bg-white-" + sportsId;
          if (this.layoutType == "layout2" || this.layoutType == 'layout3' || this.layoutType == 'layout5' || this.layoutType == 'layout6') {
            return "sports2box-" + this.themeType;
          }
          return "p-t-10 m-t-26 bg-" + sportsId;
        } else {
          return "p-t-0 bg-" + sportsId;
        }
      }
    },
    // 즐겨찾기추가 클릭
    async onClickFavorite(league) {
      if (this.currentUser === null) return;
      
      this.isProcessFavorite = true;
      let dataSet = {
        SportId: league.SportId,
        LocationId: league.LocationId,
        LeagueId: league.Id,
        Name: league.Name,
      };
      await favoriteService.create(dataSet).then((res) => {
        if (res.code == 2) {
          // 삭제
          this.$store.commit("sports/DELETE_FAVORITE", res.data);
        } else if (res.code == 1) {
          // 추가
          favoriteService.find().then((resList) => {
            if (resList.code != 1) {
              console.log(resList.message)
            } else {
              this.$store.commit("sports/SET_FAVORITE", resList.data.data);
            }
          });
        } else if (res.code == 0) {
          console.log(res.message)
        }
      });
    },
    // 인플레이 게임진행타임얻기
    getInplayGameTime(game) {
      if (game.Livescore && game.Livescore.Scoreboard.Time !== -1) {
        let min = parseInt(game.Livescore.Scoreboard.Time / 60);
        let sec = game.Livescore.Scoreboard.Time % 60;
        let strMin = String(min),
          strSec = String(sec);
        if (min < 10) {
          strMin = "0" + min;
        }
        if (sec < 10) {
          strSec = "0" + sec;
        }
        return strMin + ":" + strSec;
      }
      return "00:00";
    },
    // 리그 콜랩스
    onCollapse(leagueId) {
      if (this.isProcessFavorite) {
        this.isProcessFavorite = false;
        return;
      }
      let element = document.getElementById("collapseleague-" + leagueId);
      if (element.classList.contains("fa-chevron-up")) {
        if (this.themeType == "orange11") {
          element.classList.remove("text-white");
          element.classList.add("text-orange11");
        } else if (this.themeType == "orange13") {
          element.classList.remove("text-white");
          element.classList.add("text-orange13");
        } else if (this.themeType == "purple11") {
          element.classList.remove("text-white");
          element.classList.add("text-purple11");
        } else if (this.themeType == "red13") {
          element.classList.remove("text-white");
          element.classList.add("text-red13");
        } else if (this.themeType == "blue12") {
          element.classList.remove("text-white");
          element.classList.add("text-blue12");
        } else if (this.themeType == "yellow19") {
          element.classList.remove("text-white");
          element.classList.add("text-yellow19");
        } else if (this.themeType == "purple12") {
          element.classList.remove("text-white");
          element.classList.add("text-purple12");
        } else if (this.themeType == "yellow13") {
          element.classList.remove("text-white");
          element.classList.add("text-yellow13-1");
        } else if (this.themeType == "red15") {
          element.classList.remove("text-white");
          element.classList.add("text-red15");
        } else if (this.themeType == "red14") {
          element.classList.remove("text-white");
          element.classList.add("text-red14");
        } else if (this.themeType == "yellow12") {
          element.classList.remove("text-white");
          element.classList.add("text-yellow12");
        } else if (this.themeType == "red12") {
          element.classList.remove("text-white");
          element.classList.add("text-red12");
        } else if (this.themeType == "blue15") {
          element.classList.remove("text-white");
          element.classList.add("text-blue15");
        } else if (this.themeType == "red11") {
          element.classList.remove("text-white");
          element.classList.add("text-red11");
        } else if (this.themeType == "blue14") {
          element.classList.remove("text-white");
          element.classList.add("text-yellow901");
        } else if (this.themeType == "gold12") {
          element.classList.remove("text-white");
          element.classList.add("text-gold12");
        } else if (this.themeType == "gold12") {
          element.classList.remove("text-white");
          element.classList.add("text-gold12");
        } else if (this.themeType == "blue17") {
          element.classList.remove("text-white");
          element.classList.add("text-blue17");
        } else if (this.themeType == "orange14") {
          element.classList.remove("text-white");
          element.classList.add("text-orange14");
        } else if (this.themeType == "yellow17") {
          element.classList.remove("text-white");
          element.classList.add("text-yellow17");
        } else if (this.themeType == "blue19") {
          element.classList.remove("text-white");
          element.classList.add("text-blue19");
        } else if (this.themeType == "blue11") {
          element.classList.remove("text-white");
          element.classList.add("text-blue11");
        } else if (this.themeType == "gold11") {
          element.classList.remove("text-white");
          element.classList.add("text-gold11");
        }
        element.classList.remove("fa-chevron-up");
        element.classList.add("fa-chevron-down");
      } else {
        if (this.themeType == "orange11") {
          element.classList.remove("text-orange11");
          element.classList.add("text-white");
        } else if (this.themeType == "orange13") {
          element.classList.remove("text-orange13");
          element.classList.add("text-white");
        } else if (this.themeType == "purple11") {
          element.classList.remove("text-purple11");
          element.classList.add("text-white");
        } else if (this.themeType == "red13") {
          element.classList.remove("text-red13");
          element.classList.add("text-white");
        } else if (this.themeType == "blue12") {
          element.classList.remove("text-blue12");
          element.classList.add("text-white");
        } else if (this.themeType == "yellow19") {
          element.classList.remove("text-yellow19");
          element.classList.add("text-white");
        } else if (this.themeType == "purple12") {
          element.classList.remove("text-purple12");
          element.classList.add("text-white");
        } else if (this.themeType == "yellow13") {
          element.classList.remove("text-yellow13-1");
          element.classList.add("text-white");
        } else if (this.themeType == "red15") {
          element.classList.remove("text-red15");
          element.classList.add("text-white");
        } else if (this.themeType == "red14") {
          element.classList.remove("text-red14");
          element.classList.add("text-white");
        } else if (this.themeType == "yellow12") {
          element.classList.remove("text-yellow12");
          element.classList.add("text-white");
        } else if (this.themeType == "red12") {
          element.classList.remove("text-red12");
          element.classList.add("text-white");
        } else if (this.themeType == "blue15") {
          element.classList.remove("text-blue15");
          element.classList.add("text-white");
        } else if (this.themeType == "red11") {
          element.classList.remove("text-red11");
          element.classList.add("text-white");
        } else if (this.themeType == "blue14") {
          element.classList.remove("text-yellow901");
          element.classList.add("text-white");
        } else if (this.themeType == "gold12") {
          element.classList.remove("text-gold12");
          element.classList.add("text-white");
        } else if (this.themeType == "blue17") {
          element.classList.remove("text-blue17");
          element.classList.add("text-white");
        } else if (this.themeType == "orange14") {
          element.classList.remove("text-orange14");
          element.classList.add("text-white");
        } else if (this.themeType == "yellow17") {
          element.classList.remove("text-yellow17");
          element.classList.add("text-white");
        } else if (this.themeType == "blue19") {
          element.classList.remove("text-blue19");
          element.classList.add("text-white");
        } else if (this.themeType == "blue11") {
          element.classList.remove("text-blue11");
          element.classList.add("text-white");
        } else if (this.themeType == "gold11") {
          element.classList.remove("text-gold11");
          element.classList.add("text-white");
        }
        element.classList.remove("fa-chevron-down");
        element.classList.add("fa-chevron-up");
      }
    },
    // 정렬 타입 선택
    onClickSortType(type) {
      this.$store.commit("sports/SET_SORT_TYPE", type);
    },
  },
};
</script>
<template>
  <client-only>
    <div>
      <!-- begin #sidebar-right -->
      <div v-if="showRightPanel" id="sidebar-right" class="sidebar sidebar-right sidebar-grid" :class="`sidebar-right-${themeType}`">
        <!-- begin sidebar scrollbar -->
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
          <div data-scrollbar="true" data-height="100%" data-init="true" style="overflow: hidden; width: auto; height: 100%;"
            :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'width-full' : 'width-side'">
            <el-scrollbar style="height: 100%">
              <!-- right menu -->
              <div v-if="tabType == 0" id="rightmenu" :class="{'m-b-30' : !isMobile, 'p-16': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && !isMobile}">
								<LoginSide v-if="
                  themeType == 'orange11' || 
                  themeType == 'purple11' || 
                  themeType == 'red13' || 
                  themeType == 'blue12' || 
                  themeType == 'yellow19' || 
                  themeType == 'purple12' || 
                  themeType == 'blue16' || 
                  themeType == 'gold12' || 
                  themeType == 'blue17' || 
                  themeType == 'orange14' || 
                  themeType == 'gold11' || 
                  themeType == 'gold13' || 
                  themeType == 'orange13' || 
                  themeType == 'red15' || 
                  themeType == 'white' || 
                  themeType == 'red14' || 
                  themeType == 'yellow12' || 
                  themeType == 'red12' || 
                  themeType == 'blue15' || 
                  themeType == 'red11' || 
                  themeType == 'blue14' || 
                  themeType == 'yellow15' ||
                  (currentUser && (layoutType == 'layout2' || (layoutType == 'layout3' && themeType != 'blue13' && themeType != 'gold13' && themeType != 'yellow11' && themeType != 'yellow14')))" />
                <el-row v-if="themeType == 'blue18' || themeType == 'yellow15'" class="animated fadeInRightBig">
                  <div class="right-menu-tab" :class="tabType == 0 ? `on-${themeType}` : ''" @click="onClickTab(0)">배팅슬립</div>
                  <div class="right-menu-tab" :class="tabType == 1 ? `on-${themeType}` : ''" @click="onClickTab(1)">배팅내역</div>
                </el-row>
                <!-- 배팅카트 -->
                <div class="animated fadeInRightBig bettingbox m-b-9" :class="`bg-sidebar-right-${themeType}`">
                  <div v-if="isMobile && layoutType != 'layout2'" class="p-5" :class="getPageBackColor(themeType)">
                    <div class="f-s-15 f-w-700 p-10 p-t-5 p-b-5 text-white display-inlineblock cursor" style="background-color: rgba(0, 0, 0, 0.3); border-radius: 5px;" @click="onClickShowRightPanel()">
                      X
                    </div>
                  </div>
                  <!--|배팅헤더|-->
                  <div class="panel-heading" :class="`bg-betslip-header-${themeType}`">
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`bg-betslip-top-${themeType}`">
                      <tbody>
                        <tr>
                          <td class="col-md-5 m-0 text-left" 
                            :class="[
                              {
                                'text-white': themeType == 'orange12' || themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'red15' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'yellow13' || themeType == 'blue14' || themeType == 'red11' || themeType == 'orange13' || themeType == 'blue19' || themeType == 'blue11', 
                                'text-black': themeType == 'white'
                              }, 
                              layoutType != 'layout2' ? 'p-7' : 'p-0 f-s-16'
                            ]">
                            <span v-show="betSlipList.filter(slip => slip.FixtureId != -1).length > 0" style="font-family:arial; border-radius: 50%;"
                              class="alpha-90 cursor badge f-s-12 p-0 text-center width-22 height-22 f-w" 
                              :class="[`badge-${themeType}`, layoutType == 'layout2' ? 'p-t-4' : 'p-t-2']"
                            >{{betSlipList.filter(slip => slip.FixtureId != -1).length}}</span>
                            <strong class="m-t-5">{{layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '배팅슬립' : 'BETSLIP'}}</strong>
                          </td>
                          <td class="col-md-2 p-7 p-r-1 m-0 text-right">
                            <span id="cart_odd_auto_count" class="label label-inverse f-s-12 p-3 f-w-100 width-50 text-gray display-none">
                              <span class="text-primary m-r-2">1</span>sec
                            </span>
                          </td>
                          <td v-if="layoutType != 'layout2'" class="col-md-5 p-7 p-l-1 m-0 text-right cursor"
                            :class="{
                              'text-white': themeType == 'orange11' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'blue16' || themeType == 'yellow13' || themeType == 'blue14' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red11' || themeType == 'orange13' || themeType == 'blue19' || themeType == 'blue11', 
                              'text-black': themeType == 'white' || themeType == 'red15'
                            }"
                            @click="deleteAllBetSlip">
                            <span v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'">
                              <i class="fa fa-trash-o p-0 m-0" :class="`text-delete-${themeType}`"></i> Delete All
                            </span>
                            <span v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'">전체지우기</span>
                          </td>
                          <td v-else>
                            <img v-if="isMobile" class="m-l-24 float-right m-t-3" :src="'/image/multi.svg'" @click="onClickShowRightPanel()">
                            <div class="delete-all" @click="deleteAllBetSlip">
                              Clear all
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--|배팅금액|-->
                  <el-row :class="{'p-l-8 p-r-8': layoutType == 'layout2'}" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'border-radius: 0 0 6px 6px; overflow: hidden;' : ''">
                    <el-row v-if="layoutType != 'layout2' && layoutType != 'layout6'">
                      <el-row v-for="(betSlipOne, index) in betSlipList" :key="index" class="p-2 p-r-4" :class="`bg-slip-back-${themeType}`">
                        <div v-if="miniGameList.includes(betSlipOne.gameType) || (betSlipOne.gameType >= 1 && betSlipOne.gameType <= 5)"
                          class="betlistbox width-full" 
                          :class="(layoutType == 'layout3' && themeType != 'yellow16') || (layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11') ? 'bg-black32' : layoutType == 'layout5' && (themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11') ? 'bg-black41' : layoutType == 'layout3' && themeType == 'yellow16' ? 'bg-black39' : 'bg-black7'">
                          <div class="betlistcolor_a" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}">
                            {{betSlipOne.leagueName}}
                          </div>
                          <div class="betlistclose" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}" @click="deleteBetSlipOne(index)">
                            <i class="fa fa-times"></i>
                          </div>
                          <div class="betlistcolor_a m-t-0 f-w-700" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}">
                            {{betSlipOne.betTypeName}}
                          </div>
                          <div class="betlistcolor_b f-w-700" :class="getTeamTextColor()">
                            {{betSlipOne.betName}}
                          </div>
                          <div class="betlistcolor_b_odd" :class="[layoutType == 'layout3' || layoutType == 'layout5' ? `no-bg text-${themeType}` : getBackColor(themeType, 0), getTextColor(themeType, 2)]">
                            {{filterOdds(betSlipOne.odds)}}
                          </div>
                        </div>
                        <div v-else-if="sportsList.includes(betSlipOne.gameType)"
                          class="betlistbox width-full"
                          :class="(layoutType == 'layout3' && themeType != 'yellow16') || (layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19') ? 'bg-black32' : layoutType == 'layout5' && (themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11') ? 'bg-black41' : layoutType == 'layout3' && themeType == 'yellow16' ? 'bg-black39' : 'bg-black7'">
                          <div class="betlistcolor_a" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}">
                            {{betSlipOne.LeagueName}}
                          </div>
                          <div class="betlistcolor_a m-t-0 f-w-700" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}">
                            {{betSlipOne.FixtureId == -1 ? '' : betSlipOne.HomeName + ' vs ' + betSlipOne.AwayName}}
                          </div>
                          <div class="betlistcolor_b f-w-700" :class="getTeamTextColor()">
                            {{betSlipOne.BetName}}
                          </div>
                          <div class="betlistcolor_b_odd" :class="[layoutType == 'layout3' || layoutType == 'layout5' ? `no-bg text-${themeType}` : getBackColor(themeType, 0), getTextColor(themeType, 2)]">
                            {{filterOdds(betSlipOne.odds)}}
                          </div>
                          <div v-show="betSlipOne.Status != 1 && betSlipOne.FixtureId != -1" class="betslip-lock"></div>
                          <div class="betlistclose" @click="deleteBetSlipOne(index)" :class="{'text-white': layoutType == 'layout3' || layoutType == 'layout5'}">
                            <i class="fa fa-times"></i>
                          </div>
                        </div>
                      </el-row>
                    </el-row>
                    <el-row v-if="layoutType == 'layout6'">
                      <el-row v-for="(betSlipOne, index) in betSlipList" :key="index" class="p-2 p-r-4" :class="`bg-slip-back-${themeType}`">
                        <div v-if="miniGameList.includes(betSlipOne.gameType) || (betSlipOne.gameType >= 1 && betSlipOne.gameType <= 5)" class="betlistbox width-full bg-black32">
                          <div class="betlistcolor_a f-w-700 text-white">
                            {{betSlipOne.betName}}
                          </div>
                          <div class="betlistcolor_b_odd no-bg" :class="`text-${themeType}`" style="margin: 7px 30px 0 0;">
                            {{filterOdds(betSlipOne.odds)}}
                          </div>
                          <div class="betlistclose text-white" style="top: 3px; right: 0;" @click="deleteBetSlipOne(index)">
                            <i class="fa fa-times"></i>
                          </div>
                          <div class="betlistcolor_a m-t-0 f-w-700 text-white">
                            {{betSlipOne.betTypeName}}
                          </div>
                          <div class="betlistcolor_b f-w-700" :class="getTeamTextColor()">
                            {{betSlipOne.leagueName}}
                          </div>
                        </div>
                        <div v-else-if="sportsList.includes(betSlipOne.gameType)" class="betlistbox width-full bg-black32">
                          <div class="betlistcolor_a f-w-700 text-white">
                            {{betSlipOne.BetName}}
                          </div>
                          <div class="betlistcolor_b_odd no-bg" :class="`text-${themeType}`" style="margin: 7px 30px 0 0;">
                            {{ filterOdds(betSlipOne.odds)}}
                          </div>
                          <div class="betlistcolor_a m-t-0 f-w-700 text-white">
                            {{betSlipOne.FixtureId == -1 ? '' : betSlipOne.HomeName + ' vs ' + betSlipOne.AwayName}}
                          </div>
                          <div class="betlistcolor_b f-w-700 text-white">
                            {{betSlipOne.LeagueName}}
                          </div>
                          <div v-show="betSlipOne.Status != 1 && betSlipOne.FixtureId != -1" class="betslip-lock"></div>
                          <div class="betlistclose text-white" style="top: 3px; right: 0;" @click="deleteBetSlipOne(index)">
                            <i class="fa fa-times"></i>
                          </div>
                        </div>
                      </el-row>
                    </el-row>
                    <el-row v-if="layoutType == 'layout2'">
                      <el-row v-for="(betSlipOne, index) in betSlipList" :key="'betSlip' + index" :class="`bg-slip-back-${themeType}`" id="cart_game_list_pos">
                        <div v-if="miniGameList.includes(betSlipOne.gameType) || (betSlipOne.gameType >= 1 && betSlipOne.gameType <= 5)"
                          class="betlistbox height-115 width-full" :class="`bg-noslip-back-${themeType}`">
                          <div :class="`betlistcolor_a-${themeType}`">{{betSlipOne.leagueName}}</div>
                          <div :class="`betlistclose-${themeType}`" @click="deleteBetSlipOne(index)">
                            <img :src="'/image/multi.svg'">
                          </div>
                          <div class="text-white f-s-14 m-t-0" :class="`betlistcolor_a-${themeType}`">{{betSlipOne.betTypeName}}</div>
                          <div class="f-w-700" :class="[getTeamTextColor(), `betlistcolor_b-${themeType}`]">{{betSlipOne.betName}}</div>
                          <div :class="[getBackColor(themeType, 0), `betlistcolor_b_odd-${themeType}`, getTextColor(themeType, 2)]">
                            {{ filterOdds(betSlipOne.odds)}}
                          </div>
                        </div>
                        <div v-else class="betlistbox height-115 width-full" :class="`bg-noslip-back-${themeType}`">
                          <div :class="`betlistcolor_a-${themeType}`">{{betSlipOne.LeagueName}}</div>
                          <div class="text-white f-s-14 m-t-0" :class="[{'opacity-35': betSlipOne.Status !== 1 && betSlipOne.FixtureId != -1}, `betlistcolor_a-${themeType}`]">
                            {{betSlipOne.FixtureId == -1 ? '' : betSlipOne.HomeName + 'vs' + betSlipOne.AwayName}}
                          </div>
                          <div class="f-w-700" :class="[getTeamTextColor(), `betlistcolor_b-${themeType}`, {'opacity-35': betSlipOne.Status !== 1 && betSlipOne.FixtureId != -1}]">
                            {{betSlipOne.BetName}}
                          </div>
                          <div :class="`betlistcolor_b_odd-${themeType}`">
                            <el-row :class="[`betslip-lock-${themeType}`, {'on': betSlipOne.Status !== 1 && betSlipOne.FixtureId != -1}]">
                              <img v-if="betSlipOne.Status !== 1 && betSlipOne.FixtureId != -1" :src="`/image/Sidebar/${themeType}/Ic_lock.png`" class="float-left m-r-5">
                              <div class="float-left">{{ filterOdds(betSlipOne.odds)}}</div>
                            </el-row>
                          </div>
                          <div :class="`betlistclose-${themeType}`" @click="deleteBetSlipOne(index)">
                            <img :src="'/image/multi.svg'">
                          </div>
                        </div>
                      </el-row>
                    </el-row>
                    <el-row v-if="betSlipList.filter(slip => slip.FixtureId != -1).length == 0" :class="`bg-noslip-back-${themeType}`">
                      <el-row class="betlistbox width-full display-center" :class="{'height-115': layoutType == 'layout2'}">
                        <el-col :span="24" class="width-full text-center f-s-12 m-0" :class="`text-contrast-${themeType}`" :style="layoutType == 'layout2' ? 'width: auto !important;' : ''">
                          <el-row v-if="layoutType == 'layout2'">
                            <img :src="`/image/Sports/${themeType}/Ic_betslip_empty.png`" class="m-b-16">
                          </el-row>
                          선택된 배팅내역이 없습니다.
                        </el-col>
                      </el-row>
                    </el-row>
                  </el-row>
                  <div class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-bg-betinput-${themeType}`">
                    <el-row v-if="layoutType == 'layout2'" class="display-inlineblock width-full">
                      <el-row class="m-t-16" style="background-image: url(/image/Sidebar/orange12/header.svg); height: 10px; width: 100%;">
                      </el-row>
                      <el-row class="p-l-16 p-r-16 p-t-16 display-flex p-b-12" style="background: #1F2124;">
                        <div class="f-s-14 f-w-900 text-orange12 p-2 display-center" style="background: #25282B; border-radius: 6px;">
                          <div class="p-l-12 p-r-12">
                            배팅
                          </div>
                          <div class="betrefresh" @click="onClickBetMoney(0)">
                            <img :src="`/image/Sidebar/${themeType}/refresh.png`">
                          </div>
                        </div>
                        <div style="flex: 1 1; padding-left: 12px;">
                          <input
                            type="text"
                            id="bettingprice"
                            v-model="betMoney"
                            @click="onClickInputBetMoney"
                            v-on:keyup="onChangeBetMoney()"
                            :class="`betinputbox-${themeType}`"
                          />
                        </div>
                      </el-row>
                    </el-row>
                    <el-row v-else>
                      <el-col :span="6" class="m-0 text-center p-7">
                        <span
                          class="pull-left f-s-14 f-w-700 m-l-4"
                          :class="`text-betslip-${themeType}`"
                        >배팅</span>
                      </el-col>
                      <el-col :span="18" class="p-3 m-0 text-right" id="betinfobox">
                        <button type="button" class="btn btn-inverse btn-xs no-bg m-r-2 border-none f-s-18" :class="{'text-black': !isBlackMode}" @click="onClickBetMoney(0)">
                          <i class="fa fa-repeat"></i>
                        </button>
                        <input
                          type="text"
                          id="bettingprice"
                          v-model="betMoney"
                          @click="onClickInputBetMoney"
                          v-on:keyup="onChangeBetMoney()"
                          class="text-right"
                          :class="`betinputbox-${themeType}`"
                        />
                      </el-col>
                    </el-row>
                  </div>
                  <div :class="layoutType == 'layout2' ? 'p-l-16 p-r-16' : 'p-l-2'" :style="layoutType == 'layout2' ? 'background: #1F2124;' : ''">
                    <table class="table-td-valign-middle width-full" :class="[`sidebar-bg-betbutton-${themeType}`]">
                      <tbody>
                        <tr v-if="layoutType != 'layout2'">
                          <td v-if="themeType != 'gold11' && themeType != 'red15' && themeType != 'blue14' && themeType != 'gold12'" class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-xs m-r-2 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(5000)"
                            >오천</button>
                          </td>
                          <td class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-xs m-r-2 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(10000)"
                            >일만</button>
                          </td>
                          <td class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-2 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(50000)"
                            >오만</button>
                          </td>
                          <td class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-5 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(100000)"
                            >십만</button>
                          </td>
                          <td v-if="themeType == 'gold11' || themeType == 'gold12' || themeType == 'red15' || themeType == 'blue14'" class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-5 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(500000)"
                            >오십만</button>
                          </td>
                          <td class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-5 p-2 p-l-7 p-r-7 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(1000000)"
                            >백만</button>
                          </td>
                          <td class="p-0 p-t-1 p-b-2 p-r-2 m-0 text-center width-16pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm f-s-12 p-2 p-l-7 p-r-7 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney('max')"
                            >맥스</button>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="p-4 p-l-0 m-0 text-center width-20pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-xs m-r-2 p-8 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(5000)"
                            >오천</button>
                          </td>
                          <td class="p-4 m-0 text-center width-20pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-xs m-r-2 p-8 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(10000)"
                            >일만</button>
                          </td>
                          <td class="p-4 m-0 text-center width-20pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-2 p-8 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(50000)"
                            >오만</button>
                          </td>
                          <td class="p-4 m-0 p-r-0 text-center width-20pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-5 p-8 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney(100000)"
                            >십만</button>
                          </td>
                          <td class="p-4 m-0 p-r-0 text-center width-20pro">
                            <button
                              type="button"
                              class="btn btnstyle1 btnstyle1-sm m-r-5 p-8 f-s-12 width-full border-radius-5"
															:class="`btnstyle-${themeType}`"
                              @click="onClickBetMoney('max')"
                            >전액</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--|배팅리스트|-->
                  <!--|배팅금액안내|-->
                  <el-row
                    :class="{
                      'p-l-16 p-r-16 sidebar-total-bet-orange12': layoutType == 'layout2', 
                      'p-l-8 p-r-8 bg-black29': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow14' && themeType != 'yellow11' && themeType != 'gold13') || layoutType == 'layout6', 
                      'p-l-8 p-r-8 bg-black51': themeType == 'yellow14' || themeType == 'yellow11', 
                      'p-l-8 p-r-8 bg-black38': themeType == 'yellow16', 
                      'p-l-8 p-r-8 bg-blue903': themeType == 'gold13', 
                      'p-l-8 p-r-8 bg-black22': themeType == 'yellow18' || themeType == 'blue11', 
                      'p-l-8 p-r-8 bg-back-casino': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11',
                      'p-l-8 p-r-8 bg-black40': themeType == 'yellow17',
                      'p-l-8 p-r-8 bg-blue19': themeType == 'blue19'
                    }" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'border-radius: 6px 6px 0 0;' : ''">
                    <table
                      class="table-td-valign-middle width-full m-0 p-0"
                      :class="`sidebar-total-bet-${themeType}`"
                      :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #2E3136;' : ''"
                    >
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left" :class="`text-betslip-${themeType}`">총 배당:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right"
                              :class="[`side-icon-${themeType}`, layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10']"
                            >{{ filterOdds(totalOdds) }} 배</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-total-bet-${themeType}`" :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #2E3136;' : ''">
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left" :class="`text-betslip-${themeType}`">총 배당금액:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right" :class="[`side-icon-${themeType}`, layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10']">
                              {{ currencyFormat(totalOddsMoney, "") }} 원
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-limit-bet-${themeType}`" :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #2E3136;' : ''">
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left">최소 배팅금액:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right"
                              :class="[
                                `side-icon-${themeType}`, 
                                layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10', 
                                { 'text-black': !isBlackMode }
                              ]"
                            >{{ currencyFormat(minBetMoney, "") }} 원</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-limit-bet-${themeType}`" :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #2E3136;' : ''">
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left">최대 배팅금액:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right"
                              :class="[
                                `side-icon-${themeType}`, 
                                layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10', 
                                {'text-black': !isBlackMode}
                              ]"
                            >{{ currencyFormat(maxBetMoney, "") }} 원</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-limit-bet-${themeType}`" :style="layoutType == 'layout2' ? 'border-bottom: 1px solid #2E3136;' : ''">
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left">최대 당첨금액:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right"
                              :class="[
                                `side-icon-${themeType}`, 
                                layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10', 
                                {'text-black': !isBlackMode}
                              ]"
                            >{{ currencyFormat(maxWinMoney, "") }} 원</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-td-valign-middle width-full m-0 p-0" :class="`sidebar-limit-bet-${themeType}`">
                      <tbody>
                        <tr>
                          <td class="col-md-6 m-0 text-center" :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'p-8 p-l-0 p-r-0' : 'p-4 p-l-11'">
                            <span class="pull-left">최대 배팅배당:</span>
                          </td>
                          <td class="col-md-6 p-0 m-0 text-center">
                            <span class="pull-right" 
                              :class="[
                                `side-icon-${themeType}`, 
                                layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'm-r-10', 
                                {
                                  'text-black': !isBlackMode
                                }
                              ]">{{ maxOdds }} 배</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </el-row>
                  <!--|배팅액션버튼|-->
                  <div v-if="layoutType == 'layout1'" class="table-td-valign-middle width-full m-0 p-0">
                    <el-row>
                      <el-col :span="12" class="text-center p-4 p-l-0">
                        <button type="button"
                          class="width-full btn btnstyle2 btnstyle1-inverse btn-block text-danger f-s-14 height-45"
                          :class="{'btn-betting-gold' : themeType == 'gold12'}"
                          @click="onClickBetting">
                          <el-row>
                            <el-col :span="8">
															<img :src="'/image/banner/Bet.png'" class="float-right m-t-2" width="30" />
                            </el-col>
														<el-col :span="16">
                            	<span class="float-left m-l-5 m-t-6">배팅하기</span>
														</el-col>
                          </el-row>
                        </button>
                      </el-col>
                      <el-col :span="12" class="text-center p-4 p-r-0">
                        <button
                          type="button"
                          class="width-full btn btnstyle3 btnstyle1-inverse btn-block f-s-14 height-45"
                          :class="{'btn-cancel-gold' : themeType == 'gold12'}"
                          @click="deleteAllBetSlip"
                        >
                          <el-row>
                            <el-col :span="8">
                              <img :src="'/image/banner/Delete.png'" class="float-right m-t-1 m-r-4" />
                            </el-col>
                            <el-col :span="16">
                              <span class="float-left m-l-5 m-t-3">전체취소</span>
                            </el-col>
                          </el-row>
                        </button>
                      </el-col>
                    </el-row>
                  </div>
                  <div v-if="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" class="table-td-valign-middle width-full m-0 p-16" 
                    :class="{
                      'p-t-8 bg-grey921': layoutType == 'layout2', 
                      'bg-black29': (layoutType == 'layout3' && themeType != 'yellow16' && themeType != 'yellow18' && themeType != 'yellow14' && themeType != 'yellow11' && themeType != 'gold13') || layoutType == 'layout6', 
                      'bg-black51': themeType == 'yellow14' || themeType == 'yellow11', 
                      'bg-black38': themeType == 'yellow16', 
                      'bg-black22': themeType == 'yellow18' || themeType == 'blue11', 
                      'bg-back-casino': layoutType == 'layout5' && themeType != 'yellow17' && themeType != 'blue19' && themeType != 'blue11', 
                      'bg-black40': themeType == 'yellow17', 
                      'bg-blue19': themeType == 'blue19'
                    }" 
                    style="border-radius: 0px 0px 8px 8px;">
                    <button type="button" class="width-full btn btnstyle2 btnstyle1-inverse btn-block text-danger f-s-14 height-45"
                      :class="layoutType == 'layout5' ? `${themeType}1-button` : themeType == 'yellow16' ? `${themeType}1-button` : `${themeType}-button`"
                      @click="onClickBetting"
                    >배팅하기
                    </button>
                  </div>
                </div>
                <!-- 배팅카트 끝 -->
                <!-- 채팅 -->
                <div v-if="$router.currentRoute.name != 'index'" class="animated fadeInRightBig bettingbox m-b-9" style="background-color: #191919">
                  <Chat v-if="canChat" />
                </div>
                <!-- 채팅 끝 -->
                <!-- 배너 -->
                <div class="animated fadeInRightBig" 
                  :class="{
                    'bg-black-darker6': themeType == 'red14' || themeType == 'yellow12' || themeType == 'red12' || themeType == 'blue15' || themeType == 'blue14' || themeType == 'blue16' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19', 
                    'bg-black1': themeType == 'orange11' || themeType == 'yellow13', 
                    'bg-black25': themeType == 'purple12' || themeType == 'red11' || themeType == 'gold12' || themeType == 'orange13',
                    'bg-black-darker6 shadow': themeType == 'gold11', 
                    'bg-grey903 shadow': !isBlackMode}">
                  <div v-for="(banner, index) in banners" v-if="banner.type != -1" class="m-b-5 cursor">
                    <a v-if="banner.type == 0" :href="banner.url" target="_blank">
                      <img :src="banner.img | filterEmblem" width="100%" />
                    </a>
                    <a v-else :href="banner.url">
                      <img :src="banner.img | filterEmblem" width="100%" />
                    </a>
                  </div>
                  <el-row class="no-bg p-0 text-center f-s-12 p-t-30 p-b-30" :class="`text-contrast-${themeType}`">
                    <strong>Solution By</strong>
                    <br />
                    <br />
                    <a href="https://sportcoresolution.com" target="_blank">
                      <img :src="`/image/Home/${themeType}/Solution.png`" width="171" />
                    </a>
                  </el-row>
                </div>
                <!-- 배너 끝 -->
              </div>
              <div v-else id="rightmenu" :class="{'m-b-30' : !isMobile, 'p-16': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && !isMobile}">
                <el-row v-if="themeType == 'blue18' || themeType == 'yellow15'">
                  <div class="right-menu-tab" :class="tabType == 0 ? `on-${themeType}` : ''" @click="onClickTab(0)">배팅슬립</div>
                  <div class="right-menu-tab" :class="tabType == 1 ? `on-${themeType}` : ''" @click="onClickTab(1)">배팅내역</div>
                </el-row>
                <el-row class="bg-black29 b-r-6 p-12">
                  <el-row v-if="betLogs.length == 0">
                    배팅내역이 존재하지 않습니다.
                  </el-row>
                  <el-row v-if="gameType == 0 || gameType == 1">
                    <el-row v-for="(betLog, betLogIndex) in betLogs" :key="betLogIndex" class="m-t-16">
                      <el-row v-for="(log, logIndex) in betLog.BetLogs" :key="'log' + logIndex">
                        <el-row>
                          <el-col :span="8">경기시간</el-col>
                          <el-col :span="16" class="text-white">{{parseTime(log.Fixture.StartDate, '{y}-{m}-{d} {h}:{i}')}}</el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">배팅타입</el-col>
                          <el-col :span="16" class="text-white">
                            {{log.Fixture.Participants[0].Name}} VS<br>
                            {{log.Fixture.Participants[1].Name}}<br>
                            <span class="text-blue18">{{log.MarketName}}<br>
                            {{getBetName(log.MarketId, log.Bets)}} {{ filterOdds(log.Price) }}</span>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">경기결과</el-col>
                          <el-col :span="16" class="text-white">{{log.Fixture.Scoreboard && log.Fixture.Scoreboard.Results && log.Fixture.Scoreboard.Results.length > 1 ? log.Fixture.Scoreboard.Results[0].Value + ' : ' + log.Fixture.Scoreboard.Results[1].Value: '-'}}</el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">배팅결과</el-col>
                          <el-col :span="16" :style="betStatusStyle(log.Bets, log.MarketId)">{{filterBetStatus(log.Bets, log.MarketId, log.Fixture.Status)}}</el-col>
                        </el-row>
                      </el-row>
                      <el-row style="border-top: 1px solid #1f7aff; margin-top: 16px; padding-top: 6px;">
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">배팅시간</el-col>
                          <el-col :span="16" class="text-white">{{parseTime(betLog.createdAt)}}</el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">예상당첨금액</el-col>
                          <el-col :span="16" class="text-success">
                            (<span class="text-gray">배팅</span> {{currencyFormat(betLog.BetMoney)}} X <span class="text-gray">배당</span> {{filterOdds(getOdds(betLog.BetLogs))}}) = <span class="text-warning">{{currencyFormat(getOddsMoney(betLog.BetMoney, betLog.BetLogs), '')}}</span>원</el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">결과당첨금액</el-col>
                          <el-col :span="16" class="text-white"><span class="text-danger">{{currencyFormat(betLog.WinMoney, '')}}</span>원</el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">배팅결과</el-col>
                          <el-col :span="16" :class="statusClassObjectGrey(betLog.Status)">{{filterTotalBetStatus(betLog.Status)}}</el-col>
                        </el-row>
                      </el-row>
                    </el-row>
                  </el-row>
                  <el-row v-if="gameType == 2 || gameType == 3">
                    <el-row v-for="(betLog, betLogIndex) in betLogs" :key="betLogIndex" class="m-t-16">
                      <el-row>
                        <el-col :span="8">배팅타입</el-col>
                        <el-col :span="16" class="text-white">
                          {{getGameNameFromType(betLog.gameType)}} {{betLog.betInfo}}<br>
                          {{gameType == 2 ? filterBetType(betLog.gameType, betLog.betType) : filterBetGameBetType(betLog.betType)}}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="8">배팅결과</el-col>
                        <el-col :span="16" class="text-white">
                          {{gameType == 2 ? filterBetType(betLog.gameType, betLog.betResult) : filterBetGameBetType(betLog.betResult)}}
                        </el-col>
                      </el-row>
                      <el-row style="border-top: 1px solid #1f7aff; margin-top: 16px; padding-top: 6px;">
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">배팅시간</el-col>
                          <el-col :span="16" class="text-white">{{parseTime(betLog.createdAt)}}</el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">예상당첨금액</el-col>
                          <el-col :span="16" class="text-success">
                            (<span class="text-gray">배팅</span> {{betLog.betMoney | currencyFormat('')}} X <span class="text-gray">배당</span> {{betLog.odds | filterOdds()}}) = <span class="text-warning">{{betLog.betMoney * betLog.odds | currencyFormat('')}}</span>원
                          </el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">결과당첨금액</el-col>
                          <el-col :span="16" class="text-white"><span class="text-danger">{{currencyFormat(betLog.earnMoney, '')}}</span>원</el-col>
                        </el-row>
                        <el-row class="p-t-2 p-b-2">
                          <el-col :span="8">배팅결과</el-col>
                          <el-col :span="16" :style="getStyleFromStatus(betLog.status)">{{filterTotalBetStatus(betLog.status)}}</el-col>
                        </el-row>
                      </el-row>
                    </el-row>
                  </el-row>
                  <el-row v-if="gameType == 4">
                    <el-row v-for="(betLog, betLogIndex) in betLogs" :key="betLogIndex" class="m-t-16">
                      <el-row v-if="betLog.gameType == 1 || betLog.gameType == 4">
                        <el-row v-for="(log, logIndex) in betLog.BetLogs" :key="'log' + logIndex">
                          <el-row>
                            <el-col :span="8">회차</el-col>
                            <el-col :span="16" class="text-white">{{log.round}}</el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8">배팅타입</el-col>
                            <el-col :span="16" class="text-white">
                              {{log.betName.split('|')[1]}}<br>
                              <span class="text-blue18">{{log.betName.split('|')[0]}} {{filterOdds(log.odd)}}</span>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8">경기결과</el-col>
                            <el-col :span="16" class="text-white">{{log.result}}</el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8">배팅결과</el-col>
                            <el-col :span="16" :style="getStyleFromStatus(log.status)">{{log.status == 0 ? '진행중' :log.status == 1? '낙첨' : log.status == 2? '당첨' : '적특'}}</el-col>
                          </el-row>
                        </el-row>
                        <el-row style="border-top: 1px solid #1f7aff; margin-top: 16px; padding-top: 6px;">
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">배팅시간</el-col>
                            <el-col :span="16" class="text-white">{{parseTime(betLog.createdAt)}}</el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">예상당첨금액</el-col>
                            <el-col :span="16" class="text-success">
                              (<span class="text-gray">배팅</span> {{currencyFormat(betLog.betMoney)}} X <span class="text-gray">배당</span> {{filterOdds(betLog.odds)}}) = <span class="text-warning">{{currencyFormat(betLog.betMoney * betLog.odds, '')}}</span>원</el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">결과당첨금액</el-col>
                            <el-col :span="16" class="text-white"><span class="text-danger">{{currencyFormat(betLog.winMoney, '')}}</span>원</el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">배팅결과</el-col>
                            <el-col :span="16" :class="statusClassObjectGrey(betLog.Status)">{{filterTotalBetStatus(betLog.status)}}</el-col>
                          </el-row>
                        </el-row>
                      </el-row>
                      <el-row v-else>
                        <el-row>
                          <el-col :span="8">회차</el-col>
                          <el-col :span="16" class="text-white">
                            {{betLog.bets[0].round}}
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">배팅타입</el-col>
                          <el-col :span="16" class="text-white">
                            {{convertToKorean(betLog.bets[0].leagueName)}}<br>
                            <span class="text-blue18">{{betLog.bets[0].betName}} {{filterOdds(betLog.odd)}}</span>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">배팅결과</el-col>
                          <el-col :span="16" class="text-white">
                            {{betLog.bets[0].result}}
                          </el-col>
                        </el-row>
                        <el-row style="border-top: 1px solid #1f7aff; margin-top: 16px; padding-top: 6px;">
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">배팅시간</el-col>
                            <el-col :span="16" class="text-white">{{parseTime(betLog.createdAt)}}</el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">예상당첨금액</el-col>
                            <el-col :span="16" class="text-success">
                              (<span class="text-gray">배팅</span> {{betLog.betMoney | currencyFormat('')}} X <span class="text-gray">배당</span> {{filterOdds(betLog.odds)}}) = <span class="text-warning">{{betLog.betMoney * betLog.odds | currencyFormat('')}}</span>원
                            </el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">결과당첨금액</el-col>
                            <el-col :span="16" class="text-white"><span class="text-danger">{{currencyFormat(betLog.winMoney, '')}}</span>원</el-col>
                          </el-row>
                          <el-row class="p-t-2 p-b-2">
                            <el-col :span="8">배팅결과</el-col>
                            <el-col :span="16" :style="getStyleFromStatus(betLog.status)">{{filterTotalBetStatus(betLog.status)}}</el-col>
                          </el-row>
                        </el-row>
                      </el-row>
                    </el-row>
                  </el-row>
                  <el-row class="m-t-24">
                    *자세한 내역 및 취소요청은 배팅내역<br>페이지에서 확인 가능합니다.
                  </el-row>
                </el-row>
              </div>
            </el-scrollbar>
          </div>
        </div>
        <!-- end sidebar scrollbar -->
      </div>
      <div v-if="showRightPanel && isMobile"
        class="position-absolute width-full height-full"
        style="background-color: rgba(0, 0, 0, 0.6); z-index: 1030; left: 0; touch-action: none;"
        :style="layoutType == 'layout2' ? 'top: 64px;' : layoutType == 'layout6' ? 'top: 57px;' : themeType == 'red12' || themeType == 'gold11' ? 'top: 60px;' : 'top: 43px;'"
        @click="onClickShowRightPanel"
      ></div>
      <!-- end #sidebar-right -->
    </div>
  </client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { currencyFormat, parseTime, filterOdds, checkBetLogsStatus, toFixedDown, convertToKorean, getCurrentTime } from "@/assets/js/utils";
import { getTextColor, getBackColor, getPageBackColor, statusClassObjectGrey, betTypeClassObjectGrey } from "@/assets/js/data/uicommon"
import { filterBetType, filterBetGameBetType, getGameNameFromType, linkImage } from '~/assets/js/data/datamanagement.js'
import Chat from "~/components/Chat.vue";
import LoginSide from "~/components/Auth/LoginSide"
import Index from '~/pages/index.vue';

const miniGameBetService = feathers.service("miniBetting");
const sportBetService = feathers.service("sportsBetting");
const registerService = feathers.service("registerSportBetting")
const virtualBetService = feathers.service("virtualBetting");
const betLogService = feathers.service('client-betlog')
const mainService = feathers.service('main')

registerService.timeout = 60000
miniGameBetService.timeout = 60000
sportBetService.timeout = 60000
virtualBetService.timeout = 60000
betLogService.timeout = 60000;

export default {
  props: ["isVisibleLogin"],
  name: "login",
  components: {
		Chat,
    LoginSide,
    Index
  },
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      myIp: "getYourIp",
      isMobile: "getIsMobile",
      betSlipList: "betslip/getBetSlipList",
      minBetMoney: "betslip/getBetMinAmount",
      maxBetMoney: "betslip/getBetMaxAmount",
      maxWinMoney: "betslip/getMaxWinMoney",
      maxOdds: "betslip/getMaxBetOdds",
      totalOdds: "betslip/getTotalOdds",
      totalOddsMoney: "betslip/getTotalOddsMoney",
      isBetSlipLock: "betslip/isLock",
      showRightPanel: "getShowRightPanel",
      screenWidth: "getScreenWidth",
      isLogined: "auth/getIsLogined",
      isChangeBetSlip: "sports/getIsChangeBetSlip",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      canChat: "getCanChat",
      banners: "getBanners",
      lowOddsStandard: "getLowOddsStandard"
    }),
  },
  data() {
    return {
      betMoney: 0,
      isBetting: false,
      isLogining: false,
      autoOdds: false,
      sportsList: ["prematch", "inplay"],
      betLogs: [],
      currentTime: "",
      miniGameList: [
        "PowerBall",
        "NtryPLadder",
        "NtryKLadder",
        "NtrySpeedKeno",
        "EOSPowerBall1",
        "EOSPowerBall2",
        "EOSPowerBall3",
        "EOSPowerBall4",
        "EOSPowerBall5",
        "BetEastFootball",
        "NamedFX1",
        "NamedFX2",
        "NamedFX3",
        "NamedFX4",
        "NamedFX5",
        "NamedRacing",
        "NamedPowerBall3",
        "NamedPowerBall5",
        "NamedLadder3",
        "NamedLadder5",
        "NamedRedPowerBall",
        "NamedRedLadder",
        "SurePowerBall1",
        "SurePowerBall2",
        "SurePowerBall3",
        "SureLadder1",
        "SureLadder2",
        "SureLadder3",
        "SureRacing1",
        "SureRacing2",
        "SureRacing3",
        "CompanionSpeedKeno",
        "CompanionKenoLadder",
        "CompanionPowerBall",
        "CompanionPowerLadder",
        "TokenPowerBall",
        "TokenRoullete",
        "TokenHilo",
        "TokenHilo5",
        "TokenGraph",
        "TokenBaccarat",
        "TokenHorse",
        "TokenWheel",
        "TokenRacing3",
        "TokenRacing4",
        "LivescorePowerFreeKick",
        "LivescoreSpeedHomeRun",
        "LivescorePowerSpeedDunk",
        "BubblePowerBall",
        "BubbleLadder",
        "BoscoreLadder1",
        "BoscoreLadder2",
        "BoscoreLadder3",
        "BoscorePowerBall",
        "LotusBaccarat1",
        "LotusEvenOdd",
        "BetGameDiceDuel",
        "BetGameWheel",
        "BetGameLucky7",
        "BetGameLucky6",
        "BetGameLucky5",
        "BetGameBaccarat",
        "BetGamePoker",
        "BetGameBet",
        "MGMBaccarat1",
        "MGMBaccarat2",
        "MGMBaccarat3",
        "MGMEvenOdd",
        "MGMGoStop"
      ],
      isChangeBet: false,
      tabType: 0,
      gameType: 0
    };
  },
  watch: {
    betSlipList(val) {
      if (this.betSlipList && this.betSlipList.filter(slip => slip.FixtureId != -1).length > 0) {
        let gameType = this.betSlipList[0].gameType;
        if (this.miniGameList.includes(gameType) || gameType == 2 || gameType == 3 || gameType == 4) {
          this.$store.commit("SET_ISJUSTSHOWRIGHTPANEL", true);
        }
      }
    },
    screenWidth(width) {
      this.setSidebar();
    },
    isChangeBetSlip(val) {
      this.isChangeBet = true;
    },
  },
  mounted() {
    this.calculateTime = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    this.setSidebar()
    
    // 정산패치
    mainService.off("sportBetLogCreated"),
    mainService.on("sportBetLogCreated", (data) => {
      this.showMessage( "알림메시지", data.message, "닫기[Close]", data.code == 1 ? 1 : 0 );
      if (data.code == 1) this.initBetSlip();
      this.isBetting = false
    });
  },
  methods: {
    parseTime,
    filterOdds,
    checkBetLogsStatus,
    getTextColor,
    getBackColor,
    getPageBackColor,
    toFixedDown,
    currencyFormat,
    statusClassObjectGrey,
    betTypeClassObjectGrey,
    filterBetType,
    getGameNameFromType,
    filterBetGameBetType,
    convertToKorean,
    getCurrentTime,
    goToTV() {
      this.$router.push("/TV")
    },
    getTeamTextColor() {
      if (this.themeType == "orange11"){
        return 'text-orange11'
      } else if (this.themeType == 'purple11') {
        return 'text-purple11'
      } else if (this.themeType == 'red13') {
        return 'text-red13'
      } else if (this.themeType == 'blue12') {
        return 'text-blue12'
      } else if (this.themeType == 'yellow19') {
        return 'text-yellow19'
      } else if (this.themeType == "blue16") {
        return 'text-blue16'
      } else if (this.themeType == "yellow20"  || this.themeType == "blue13" || this.themeType == "gold13" || this.themeType == "yellow11" || this.themeType == "yellow14" || this.themeType == "yellow18" || this.themeType == 'yellow21' || this.themeType == 'yellow16' || this.themeType == 'yellow17' || this.themeType == 'blue19' || this.themeType == 'blue11') {
        return 'text-green901'
      } else if (this.themeType == 'white') {
        return 'text-red905'
      } else if (this.themeType == 'red14' || this.themeType == 'yellow12' || this.themeType == 'gold11' || this.themeType == 'red15') {
        return 'text-red903'
      } else if (this.themeType == 'orange14') {
        return 'text-red906'
      }
    },
    setSidebar() {
      if (this.layoutType != 'layout5' && this.screenWidth > 1080) {
        this.$store.commit("SET_SHOWRIGHTPANEL", true);
      } else if (this.layoutType == 'layout5' && (this.$router.currentRoute.name == 'Sports' || this.$router.currentRoute.name == 'LiveSports' || this.$router.currentRoute.name == "Mini-PowerBall" || 
        this.$router.currentRoute.name == "Mini-BetEast" || this.$router.currentRoute.name == "Mini-BoscoreLadder1" || this.$router.currentRoute.name == "Mini-BoscoreLadder2" || 
        this.$router.currentRoute.name == "Mini-BoscoreLadder3" || this.$router.currentRoute.name == "Mini-BoscorePowerBall" || this.$router.currentRoute.name == "Mini-BubbleLadder" || 
        this.$router.currentRoute.name == "Mini-BubblePowerBall" || this.$router.currentRoute.name == "Mini-Crash" || this.$router.currentRoute.name == "Mini-Dice" || this.$router.currentRoute.name == "Mini-Hillo" || this.$router.currentRoute.name == "Mini-EOSPowerBall1" || 
        this.$router.currentRoute.name == "Mini-EOSPowerBall2" || this.$router.currentRoute.name == "Mini-EOSPowerBall3" || this.$router.currentRoute.name == "Mini-EOSPowerBall4" || 
        this.$router.currentRoute.name == "Mini-EOSPowerBall5" || this.$router.currentRoute.name == "Mini-Fx" || this.$router.currentRoute.name == "Mini-KenoLadder" || 
        this.$router.currentRoute.name == "Mini-LivescorePowerFreeKick" || this.$router.currentRoute.name == "Mini-LivescorePowerSpeedDunk" || this.$router.currentRoute.name == "Mini-LivescoreSpeedHomeRun" || 
        this.$router.currentRoute.name == "Mini-NamedFX1" || this.$router.currentRoute.name == "Mini-NamedFX2" || this.$router.currentRoute.name == "Mini-NamedFX3" || 
        this.$router.currentRoute.name == "Mini-NamedFX4" || this.$router.currentRoute.name == "Mini-NamedFX5" || this.$router.currentRoute.name == "Mini-NamedRacing" || 
        this.$router.currentRoute.name == "Mini-NamedPowerBall3" || this.$router.currentRoute.name == "Mini-NamedPowerBall5" || this.$router.currentRoute.name == "Mini-NamedLadder3" || this.$router.currentRoute.name == "Mini-NamedRedPowerBall" || this.$router.currentRoute.name == "Mini-NamedRedLadder" || 
        this.$router.currentRoute.name == "Mini-NamedLadder5" || this.$router.currentRoute.name == "Mini-SurePowerBall1" || this.$router.currentRoute.name == "Mini-SurePowerBall2" || 
        this.$router.currentRoute.name == "Mini-SurePowerBall3" || this.$router.currentRoute.name == "Mini-SureLadder1" || this.$router.currentRoute.name == "Mini-SureLadder2" || this.$router.currentRoute.name == "Mini-SureLadder3" || this.$router.currentRoute.name == "Mini-SureRacing1" || this.$router.currentRoute.name == "Mini-SureRacing2" || this.$router.currentRoute.name == "Mini-SureRacing3" || 
        this.$router.currentRoute.name == "Mini-CompanionSpeedKeno" || this.$router.currentRoute.name == "Mini-CompanionKenoLadder" || this.$router.currentRoute.name == "Mini-CompanionPowerBall" || this.$router.currentRoute.name == "Mini-CompanionPowerLadder" || 
        this.$router.currentRoute.name == "Mini-TokenPowerBall" || this.$router.currentRoute.name == "Mini-TokenRoullete" || this.$router.currentRoute.name == "Mini-TokenHilo" || this.$router.currentRoute.name == "Mini-TokenHilo5" || this.$router.currentRoute.name == "Mini-TokenGraph" || 
        this.$router.currentRoute.name == "Mini-TokenBaccarat" || this.$router.currentRoute.name == "Mini-TokenHorse" || this.$router.currentRoute.name == "Mini-TokenWheel" || this.$router.currentRoute.name == "Mini-TokenRacing3" || this.$router.currentRoute.name == "Mini-TokenRacing4" || 
        this.$router.currentRoute.name == "Mini-PowerLadder" || this.$router.currentRoute.name == "Mini-SpeedKeno" || this.$router.currentRoute.name == "VirtualSports-Basketball" || 
        this.$router.currentRoute.name == "VirtualSports-Dog" || this.$router.currentRoute.name == "VirtualSports-Football" || this.$router.currentRoute.name == "VirtualSports-Horse" || this.$router.currentRoute.name == "VirtualSports-Baseball")) {
        if (this.screenWidth > 1080) {
          this.$store.commit("SET_SHOWRIGHTPANEL", true);
        } else {
          this.$store.commit("SET_SHOWRIGHTPANEL", false);
        }
      } else {
        this.$store.commit("SET_SHOWRIGHTPANEL", false);
      }
    },
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    onLogin() {
      this.$store.commit("SET_LOGINDIALOGVISIBLE")
      this.$store.commit("SET_LOGINSIDEVERIFY", false)
    },
    // 배팅하기 클릭
    onClickBetting() {
      if (this.isBetting) {
        this.showMessage( "알림메시지", "현재 배팅처리중입니다.|배팅처리 완료후 배팅해주세요.", "닫기[Close]", 2 );
        return;
      }
      this.isBetting = true;
      if (this.betSlipList.filter(slip => slip.FixtureId != -1).length <= 0) {
        this.showMessage( "알림메시지", "배팅옵션을 선택해주세요.", "닫기[Close]", 2 );
        this.isBetting = false;
        return;
      }
      let gameType = this.betSlipList[0].gameType;
      if (this.sportsList.includes(gameType)) {
        if (this.betSlipList.filter(slip => slip.odds >= this.lowOddsStandard).length < 2) {
          let modMessage = '스포츠는 ' + this.lowOddsStandard + ' 이상의 배당에 2경기(2폴더이상)선택하여 배팅하지 않을경우 단폴더로 롤링이 적용됩니다. 배팅을 하시겠습니까?';
          if (this.themeType == 'orange14') {
            modMessage = "해당 경기에 배팅을 하시겠습니까?"
          }
          this.$confirm(modMessage, '알림메시지', {
            confirmButtonText: '예',
            cancelButtonText: '아니오',
            type: 'warning'
          }).then(() => {
            this.processBetting()
          }).catch(() => {
            this.isBetting = false
          });
        } else {
          this.processBetting()
        }
      } else {
        this.processBetting()
      }
    },
    async processBetting() {
      if (this.currentUser == null) {
        this.isBetting = false
        return;
      }
      this.isChangeBet = false;

      let folderKorean = "";
      
      // 배팅금액을 입력하였는가 체크
      let money = parseInt(String(this.betMoney).replace(/,/gi, ""));
      if (money <= 0) {
        this.showMessage( "알림메시지", "배팅금액을 입력해주세요.", "닫기[Close]", 2 );
        this.isBetting = false;
        return;
      }
      
      // 잠금상태인 배팅옵션이 있는가
      if ( this.betSlipList.findIndex((slip) => slip.FixtureId != -1 && slip.Status && slip.Status !== 1) > -1 ) {
        this.showMessage( "알림메시지", "잠금상태인 배팅옵션이 존재합니다.", "닫기[Close]", 2 );
        this.isBetting = false;
        return;
      }

      // 미니배팅, 스포츠배팅, 가상스포츠배팅, 카지노배팅인가
      let gameType = this.betSlipList[0].gameType;
      if (this.miniGameList.includes(gameType)) gameType = "mini";
      else if (this.sportsList.includes(gameType)) gameType = "sports";
      else if (gameType == 1) gameType = "vsoccer";
      else if (gameType == 4) gameType = "vbasket";
      else if (gameType == 5) gameType = "vbaseball";
      else if (gameType == 2 || gameType == 3) gameType = "virtual";

      if ( gameType == "sports" && this.betSlipList.findIndex((slip) => slip.MarketId == 0) > -1 ) {
        if (this.themeType == 'orange12' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
          if (money > 3000000) {
            this.showMessage( "알림메시지", "크로스 단폴, 혹은 포함된 배팅은 최대 300만원까지만 배팅 가능합니다.", "닫기[Close]", 2 );
            this.isBetting = false;
            return;
          }
        } else if (this.themeType == 'orange14') {
          if (money > 1000000) {
            this.showMessage( "알림메시지", "크로스 단폴, 혹은 포함된 배팅은 최대 100만원까지만 배팅 가능합니다.", "닫기[Close]", 2 );
            this.isBetting = false;
            return;
          }
        } else if (this.themeType != 'orange13') {
          if (money > 300000) {
            this.showMessage( "알림메시지", "크로스 단폴, 혹은 포함된 배팅은 최대 30만원까지만 배팅 가능합니다.", "닫기[Close]", 2 );
            this.isBetting = false;
            return;
          }
        }
      }
      if (gameType == "sports" || gameType == "vsoccer" || gameType == "vbasket" || gameType == "vbaseball") {
        if (this.betSlipList.filter(slip => slip.FixtureId != -1).length == 1) {
          folderKorean = "단폴";
        } else if (this.betSlipList.filter(slip => slip.FixtureId != -1).length == 2) {
          folderKorean = "두폴";
        } else {
          folderKorean = "세폴/다폴";
        }
      }

      if (gameType == "mini") {
        // 미니게임 배팅처리
        let data = {
          betData: this.betSlipList[0],
          betMoney: money,
          leak: window.localStorage.getItem("leak-mini")
        };
        miniGameBetService
          .create(data)
          .then((response) => {
            window.localStorage.setItem("leak-mini", 0)
            if (response.code == 1) {
              let messageContent = "";
              if (this.betSlipList[0].times !== undefined) {
                messageContent = this.betSlipList[0].leagueName + " - " + this.betSlipList[0].round + " (" + this.betSlipList[0].times + ")회차 " + this.betSlipList[0].betName.replace("파워볼", "") + "|" + this.betMoney + "원 배팅접수가 완료되었습니다.";
              } else {
                messageContent = this.betSlipList[0].leagueName + " - " + this.betSlipList[0].round + "회차 " + this.betSlipList[0].betName.replace("파워볼", "") + "|" + this.betMoney + "원 배팅접수가 완료되었습니다.";
              }
              this.showMessage("알림메시지", messageContent, "배팅완료", 1);
              this.initBetSlip();
            } else {
              this.showMessage( "알림메시지", response.message, "닫기[Close]", response.code == 1 ? 1 : 0 );
            }
            this.isBetting = false;
          })
          .catch((err) => {
            window.localStorage.setItem("leak-mini", 1)
            if (err.message.indexOf("Timeout") > -1) {
              this.showMessage("알림메시지", `사이트에 Ddos 공격으로 인해 서버로부터 응답이 지연되고 있습니다.|지속적인 오류 발생 시 관리자에게 문의 바랍니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
            } else {
              this.showMessage("알림메시지", `세션이 끊겼습니다. 재로그인 후 이용 부탁드립니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
            }
            this.isBetting = false;
          });
      } else if (gameType == "sports") {
        let timeCount = 0;
        let isInplay = 0
        if (this.betSlipList.findIndex((x) => x.gameType == "inplay") > -1) {
          isInplay = 1
          for (let slipIndex = 0; slipIndex < this.betSlipList.length; slipIndex++) {
            if (this.betSlipList[slipIndex].gameType == "inplay") {
              let timeSettingIndex = this.gameSettings.Live.waitTimes.findIndex((setting) => setting.sportId == this.betSlipList[slipIndex].SportId);
              if (timeSettingIndex > -1) {
                timeCount = Math.max(timeCount, this.gameSettings.Live.waitTimes[timeSettingIndex].value);
              }
            }
          }
          this.$store.commit("sports/SET_ISBETCOUNTING", true);
          this.showMessage("알림메시지", timeCount, "배팅카운트", 1);
          await registerService.find({ query: {
              betData: this.betSlipList,
              betMoney: money,
              leak: window.localStorage.getItem("leak-sports")
          } })
        }
        setTimeout(
          function () {
            this.$store.commit("sports/SET_ISBETCOUNTING", false);
            if (this.isChangeBet || isInplay == 1) {
              this.isBetting = false;
              return;
            }
            // 스포츠 배팅처리
            let data = {
              betData: this.betSlipList,
              betMoney: money,
              leak: window.localStorage.getItem("leak-sports")
            };
            sportBetService
              .create(data)
              .then((response) => {
                window.localStorage.setItem("leak-sports", 0)
                if (response.code == 1) {
                  this.showMessage("알림메시지", response.message, "배팅완료", 1);
                  this.initBetSlip();
                } else {
                  this.showMessage( "알림메시지", response.message, "닫기[Close]", response.code == 1 ? 1 : 0 );
                }
                this.isBetting = false;
              })
              .catch((err) => {
                window.localStorage.setItem("leak-sports", 1)
                if (err.message.indexOf("Timeout") > -1) {
                  this.showMessage("알림메시지", `사이트에 Ddos 공격으로 인해 서버로부터 응답이 지연되고 있습니다.|지속적인 오류 발생 시 관리자에게 문의 바랍니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
                } else {
                  this.showMessage("알림메시지", `세션이 끊겼습니다. 재로그인 후 이용 부탁드립니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
                }
                this.isBetting = false;
              });
          }.bind(this),
          (timeCount + 1) * 1000
        );
      } else if (gameType == "vsoccer" || gameType == "vbasket" || gameType == "vbaseball" || gameType == "virtual") {
        // 스포츠 배팅처리
        let data = {
          betData: this.betSlipList,
          betMoney: money,
          leak: window.localStorage.getItem("leak-virtual")
        };
        virtualBetService
          .create(data)
          .then((response) => {
            window.localStorage.setItem("leak-virtual", 0)
            if (response.code == 1) {
              let messageContent = "";
              if (this.betSlipList.filter(slip => slip.FixtureId != -1).length == 1) {
                messageContent = "[배팅] " + this.betSlipList[0].leagueName + " / " + this.betSlipList[0].betTypeName + " / " + folderKorean + "|" + this.betMoney + "원 배팅접수가 완료되었습니다.";
              } else {
                messageContent = "[배팅] " + this.betSlipList[0].leagueName + " / " + this.betSlipList[0].betTypeName + " 외 " + folderKorean + "|" + this.betMoney + "원 배팅접수가 완료되었습니다.";
              }
              this.showMessage("알림메시지", messageContent, "배팅완료", 1);
              this.initBetSlip();
            } else {
              this.showMessage( "알림메시지", response.message, "닫기[Close]", response.code == 1 ? 1 : 0 );
            }
            this.isBetting = false;
          })
          .catch((err) => {
            window.localStorage.setItem("leak-virtual", 1)
            if (err.message.indexOf("Timeout") > -1) {
              this.showMessage("알림메시지", `사이트에 Ddos 공격으로 인해 서버로부터 응답이 지연되고 있습니다.|지속적인 오류 발생 시 관리자에게 문의 바랍니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
            } else {
              this.showMessage("알림메시지", `세션이 끊겼습니다. 재로그인 후 이용 부탁드립니다.|오류메시지: ${err.message}`,  "닫기[Close]",  0 );
            }
            this.isBetting = false;
          });
      }
    },
    initBetSlip() {
      this.deleteAllBetSlip();
      this.betMoney = 0;
      this.$store.commit("betslip/SET_BET_MONEY", this.betMoney);
    },
    // 배팅금액선택시
    onClickBetMoney(val) {
      // 로그인하지 않은 경우 리턴
      if (this.currentUser == null) {
        return;
      }
      let userMoney = this.currentUser.cash.sportsmoney;

      if (this.currentUser) {
        if (val == "max") {
          // 맥스버튼 누른 경우
          if (this.betSlipList.filter(slip => slip.FixtureId != -1).length <= 0) {
            // 배팅내역이 없는 경우 리턴
            return;
          } else {
            let maxAvail = this.maxWinMoney / this.totalOdds;
            if (maxAvail > userMoney) {
              maxAvail = userMoney;
            }
            if (maxAvail > this.maxBetMoney) {
              maxAvail = this.maxBetMoney;
            }
            this.betMoney = parseInt(maxAvail / 100) * 100;
          }
          this.betMoney = parseInt(this.betMoney / 100) * 100;
        } else if (val == 0) {
          // 초기화 버튼 누른 경우
          this.betMoney = 0;
          return;
        } else {
          // 금액 버튼 누른 경우
          let money = String(this.betMoney).replace(/,/gi, "");
          money = parseInt(money) + val;
          if (money < 0) money = 0
          if (this.betSlipList.filter(slip => slip.FixtureId != -1).length >= 0 && money > userMoney) {
            this.showMessage( "알림메시지", "보유 캐쉬가 부족합니다.", "닫기[Close]", 2 );
            return;
          } else if (this.betSlipList.filter(slip => slip.FixtureId != -1).length > 0) {
            let level = this.currentUser.level
            if (this.themeType == 'orange12' || this.themeType == 'blue13' || this.themeType == 'yellow11') {
              if (level >= 6 && level <= 10) {
                level -= 5
              }
              if (level >= 11 && level <= 15) {
                level -= 10
              }
            }
            if (this.themeType == 'blue16') {
              if (level >= 11 && level <= 16) {
                level -= 10
              }
            }
            if (this.totalOdds * money > this.maxWinMoney) {
              this.showMessage( "알림메시지", "레벨 " + level + " 최대 당첨금액은 " + this.currencyFormat(this.maxWinMoney, "") + "원입니다.|" + "최대 당첨금액을 초과할수 없습니다.", "닫기[Close]", 2 );
              return;
            } else if (money > this.maxBetMoney) {
              this.showMessage( "알림메시지", "레벨 " + level + " 최대 배팅금액은 " + this.currencyFormat(this.maxBetMoney, "") + "원입니다.|" + "최대 배팅금액을 초과할수 없습니다.", "닫기[Close]", 2 );
              return;
            }
          }
          this.betMoney = money;
        }
      }

      this.onChangeBetMoney();
    },
    // 전체 배팅삭제
    deleteAllBetSlip() {
      this.$store.commit("betslip/SET_BETSLIPLIST", []);
    },
    // 한개 배팅삭제
    deleteBetSlipOne(index) {
      this.$store.commit("betslip/DELETE_BETSLIPONE", index);
    },
    // 배팅머니 인풋 클릭시 배팅머니 초기화
    onClickInputBetMoney() {
      this.betMoney = "";
    },
    // 배팅머니 변경시 포맷
    onChangeBetMoney() {
      let val = this.currencyFormat(this.betMoney, "");
      val = val.substring(0, val.length - 1);
      //if (val == "0") val = "";
      this.betMoney = val;
      let money = parseInt(String(this.betMoney).replace(/,/gi, ""));
      this.$store.commit("betslip/SET_BET_MONEY", money);
    },
    onClickShowRightPanel() {
      this.$store.commit("SET_SHOWRIGHTPANEL", !this.showRightPanel);
    },
    async onClickTab(type) {
      try {
        this.betLogs = []
        this.tabType = type
        this.gameType = -1
        if (!this.currentUser) return
        if (type == 1) {
          if (this.$router.currentRoute.name == "Sports" || this.$router.currentRoute.name == "LiveSports") {
            this.gameType = this.$router.currentRoute.name == "Sports" ? 0 : 1
          } else if (this.$router.currentRoute.name == "Casino") {
            this.gameType = 5
          } else if (this.$router.currentRoute.name == "VirtualSports-Football" || this.$router.currentRoute.name == "VirtualSports-Basketball" || this.$router.currentRoute.name == "VirtualSports-Dog" || this.$router.currentRoute.name == "VirtualSports-Horse" || this.$router.currentRoute.name == "VirtualSports-Baseball") {
            this.gameType = 4
          } else if (this.$router.currentRoute.name == "BetGames-Baccarat" || this.$router.currentRoute.name == "BetGames-Bet" || this.$router.currentRoute.name == "BetGames-DiceDuel" ||
                     this.$router.currentRoute.name == "BetGames-Lucky5" || this.$router.currentRoute.name == "BetGames-Lucky6" || this.$router.currentRoute.name == "BetGames-Lucky7" ||
                     this.$router.currentRoute.name == "BetGames-Poker" || this.$router.currentRoute.name == "BetGames-Wheel") {
            this.gameType = 3
          } else if (this.$router.currentRoute.name == "Mini-BoscoreLadder1" || this.$router.currentRoute.name == "Mini-BoscoreLadder2" || this.$router.currentRoute.name == "Mini-BoscoreLadder3" ||
                     this.$router.currentRoute.name == "Mini-BoscorePowerBall" || this.$router.currentRoute.name == "Mini-BubbleLadder" || this.$router.currentRoute.name == "Mini-BubblePowerBall" ||
                     this.$router.currentRoute.name == "Mini-Crash" || this.$router.currentRoute.name == "Mini-Dice" || this.$router.currentRoute.name == "Mini-Hillo" || this.$router.currentRoute.name == "Mini-EOSPowerBall1" || 
                     this.$router.currentRoute.name == "Mini-EOSPowerBall2" || this.$router.currentRoute.name == "Mini-EOSPowerBall3" || this.$router.currentRoute.name == "Mini-EOSPowerBall4" || 
                     this.$router.currentRoute.name == "Mini-EOSPowerBall5" || this.$router.currentRoute.name == "Mini-Fx" || this.$router.currentRoute.name == "Mini-KenoLadder" ||
                     this.$router.currentRoute.name == "Mini-LivescorePowerFreeKick" || this.$router.currentRoute.name == "Mini-LivescorePowerSpeedDunk" || this.$router.currentRoute.name == "Mini-LivescoreSpeedHomeRun" || 
                     this.$router.currentRoute.name == "Mini-NamedFX1" || this.$router.currentRoute.name == "Mini-NamedFX2" || this.$router.currentRoute.name == "Mini-NamedFX3" || 
                     this.$router.currentRoute.name == "Mini-NamedFX4" || this.$router.currentRoute.name == "Mini-NamedFX5" || this.$router.currentRoute.name == "Mini-NamedRacing" || 
                     this.$router.currentRoute.name == "Mini-NamedPowerBall3" || this.$router.currentRoute.name == "Mini-NamedPowerBall5" || this.$router.currentRoute.name == "Mini-NamedLadder3" || this.$router.currentRoute.name == "Mini-NamedRedPowerBall" || this.$router.currentRoute.name == "Mini-NamedRedLadder" || 
                     this.$router.currentRoute.name == "Mini-NamedLadder5" || this.$router.currentRoute.name == "Mini-SurePowerBall1" || this.$router.currentRoute.name == "Mini-SurePowerBall2" || 
                     this.$router.currentRoute.name == "Mini-SurePowerBall3" || this.$router.currentRoute.name == "Mini-SureLadder1" || this.$router.currentRoute.name == "Mini-SureLadder2" || this.$router.currentRoute.name == "Mini-SureLadder3" || this.$router.currentRoute.name == "Mini-SureRacing1" || this.$router.currentRoute.name == "Mini-SureRacing2" || this.$router.currentRoute.name == "Mini-SureRacing3" || 
                     this.$router.currentRoute.name == "Mini-CompanionSpeedKeno" || this.$router.currentRoute.name == "Mini-CompanionKenoLadder" || this.$router.currentRoute.name == "Mini-CompanionPowerBall" || this.$router.currentRoute.name == "Mini-CompanionPowerLadder" || 
                     this.$router.currentRoute.name == "Mini-TokenPowerBall" || this.$router.currentRoute.name == "Mini-TokenRoullete" || this.$router.currentRoute.name == "Mini-TokenHilo" || this.$router.currentRoute.name == "Mini-TokenHilo5" || this.$router.currentRoute.name == "Mini-TokenGraph" || 
                     this.$router.currentRoute.name == "Mini-TokenBaccarat" || this.$router.currentRoute.name == "Mini-TokenHorse" || this.$router.currentRoute.name == "Mini-TokenWheel" || this.$router.currentRoute.name == "Mini-TokenRacing3" || this.$router.currentRoute.name == "Mini-TokenRacing4" || 
                     this.$router.currentRoute.name == "Mini-PowerBall" || this.$router.currentRoute.name == "Mini-PowerLadder" || this.$router.currentRoute.name == "Mini-SpeedKeno" ||
                     this.$router.currentRoute.name == "Lotus-Baccarat1" || this.$router.currentRoute.name == "Lotus-EvenOdd" || this.$router.currentRoute.name == "MGM-MGMBaccarat1" || this.$router.currentRoute.name == "MGM-MGMBaccarat2" || this.$router.currentRoute.name == "MGM-MGMBaccarat3" || this.$router.currentRoute.name == "MGM-MGMEvenOdd" || this.$router.currentRoute.name == "MGM-MGMGoStop") {
            this.gameType = 2
          }
          if (this.gameType != -1) {
            let res = await betLogService.find({ query: { gameType: this.gameType } })
            if (res.code != 1) {
              console.log(res.message)
            } else {
              this.betLogs = res.data.data;
            }
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    // 배팅타입명 얻기
    getBetName(marketId, bets, markets) {
      let betName = ''
      if (bets.length == 1) {
        if (bets[0].BaseLine && bets[0].BaseLine !== '') {
          betName =  bets[0].Name + ' (' + bets[0].BaseLine + ')'
        } else {
          betName = bets[0].Name
        }
      } else {
        if (bets[0].BaseLine && bets[0].BaseLine !== '') {
          betName = bets[0].Name + ' (' + bets[0].BaseLine + ') + ' + bets[1].Name + ' (' + bets[1].BaseLine + ')'
        } else {
          betName = bets[0].Name + ' + ' + bets[1].Name + ' (' + bets[1].BaseLine + ')'
        }
      }
      return betName
    },
    filterBetStatus(bets, marketId, fixtureStatus) {
      const status = this.checkBetLogsStatus(bets, marketId);
      let strLabel = "";

      switch (status) {
        case -1:
          strLabel += "대기중";
          break;
        case 0:
          if (fixtureStatus == 2)
            strLabel += "진행중";
          else
            strLabel += "대기중";
          break;
        case 1:
          strLabel += "낙첨";
          break;
        case 2:
          strLabel += "당첨";
          break;
        case 3:
          strLabel += "대기중";
          break;
        case 4:
          strLabel += "대기중";
          break;
        case 5:
          strLabel += "대기중";
          break;
        case 6:
          strLabel += "적특";
          break;
        case 7:
          strLabel += "대기중";
          break;
      }

      return strLabel;
    },
    filterTotalBetStatus(status) {
      let strLabel = "";
      switch (status) {
        case -1:
          strLabel += "대기중";
          break;
        case 0:
          strLabel += "정산대기중";
          break;
        case 1:
          strLabel += "낙첨";
          break;
        case 2:
          strLabel += "당첨";
          break;
        case 3:
          strLabel += "적특";
          break;
        case 4:
          strLabel += "절반낙첨";
          break;
        case 5:
          strLabel += "절반당첨";
          break;
        case 6:
          strLabel += "적특";
          break;
      }
      return strLabel;
    },
    betStatusStyle(bets, marketId) {
      const status = this.checkBetLogsStatus(bets, marketId);
      return this.getStyleFromStatus(status)
    },
    getStyleFromStatus(status) {
      let strLabel = "color: ";
      switch (status) {
        case -1:
          strLabel += "#FA6200";
          break;
        case 0:
          strLabel += "#FA6200";
          break;
        case 1:
          strLabel += "#DC3644";
          break;
        case 2:
          strLabel += "#1f7aff";
          break;
        case 3:
          strLabel += "#FA6200";
          break;
        case 4:
          strLabel += "#FA6200";
          break;
        case 5:
          strLabel += "#FA6200";
          break;
        case 6:
          strLabel += "#faaf44";
          break;
        case 7:
          strLabel += "#FA6200";
          break;
      }
      return strLabel
    },
    // 배당 얻기
    getOdds(betLogs) {
      const totalOdds = betLogs.reduce((a, b) => a * b.Price, 1);

      return this.toFixedDown(totalOdds);
    },
    // 당첨금액 얻기
    getOddsMoney(betmoney, betLogs) {
      const totalOdds = this.toFixedDown(betLogs.reduce((a, b) => a * b.Price, 1));
      const oddMoney = (betmoney * (totalOdds * 100)) / 100;
      return this.toFixedDown(oddMoney);
    },
  },
};
</script>
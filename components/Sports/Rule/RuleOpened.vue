<template>  
<client-only>
  <el-row class="display-inlineblock width-full p-t-15 p-l-13 p-r-13 p-b-25 f-s-11 word-keep" 
    :class="[`rule-bg-${themeType}`, `text-contrast-${themeType}`]" 
    :style="layoutType == 'layout1' ? 'border: 2px solid #25282b; border-radius: 3px' : 'border-radius: 6px;'">
    <!-- 단폴/두폴/다폴 배팅규정 안내 -->
    <el-row class="f-s-13 f-w-900">
      <div class="float-left m-r-7">
        <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
      </div>
      <div class="float-left m-t-2">
        단폴/두폴/다폴 배팅규정 안내
      </div>
    </el-row>
    <el-row v-if="sportsType === 'prematch' && themeType != 'blue16'" class="p-12 p-l-22">
      단폴 배팅 시에는 배당률 {{lowOddsStandard | filterOdds}} 이상만 시스템에서 허용되며 다른 규제는 없습니다.<br>
      두폴 이상의 경우 배당률 {{lowOddsStandard | filterOdds}} 이상의 한 폴더가 반드시 포함되어야 하며 포함되지 않을 경우<br>
      해당 배팅은 시스템에서 허용되지 않습니다.<br>
      다폴 구성 시 {{lowOddsStandard | filterOdds}} 이하 배당경기는 롤링 계산시 폴더 수에 포함되지 않습니다.
    </el-row>
    <el-row v-if="sportsType === 'inplay' && themeType == 'gold11'" class="p-12 p-l-22">
      두폴더 배팅시 1.00배 같은 저배당 같이 배팅시 당첨되었을때 원금제외 몰수처리되십니다.
    </el-row>
    <el-row v-if="sportsType === 'inplay' && themeType != 'blue16'" class="p-12 p-l-22">
      <div v-if="themeType != 'blue15' && themeType != 'red12' && themeType != 'gold11'">
      실시간 스포츠와 , 스포츠를 조합하여 배팅이 가능합니다.<br>
      </div>
      단폴 배팅 시에는 배당률 {{lowOddsStandard | filterOdds}} 이상만 시스템에서 허용되며 다른 규제는 없습니다.<br>
      두폴 이상의 경우 배당률 {{lowOddsStandard | filterOdds}} 이상의 한 폴더가 반드시 포함되어야 하며 포함되지 않을 경우<br>
      해당 배팅은 시스템에서 허용되지 않습니다.<br>
      다폴 구성 시 {{lowOddsStandard | filterOdds}} 이하 배당경기는 해당 배팅 폴더 수에 포함되지 않습니다.
    </el-row>
    <el-row v-if="themeType == 'blue16'" class="p-12 p-l-22">
      단폴 배팅은 시스템에서 허용되지않습니다.<br>
      두폴 이상의 경우 배당률 {{lowOddsStandard | filterOdds}} 이상 폴더가 반드시 포함되어야 하며 포함되지 않을 경우<br>
      해당 배팅은 시스템에서 허용되지 않습니다.<br>
      다폴 구성 시 {{lowOddsStandard | filterOdds}} 배당경기는 롤링 계산시 폴더 수에 포함되지 않습니다.
    </el-row>
    <el-row style="display: flex;" class="p-12 p-l-22" >
      <el-col v-if="themeType != 'blue16'" :span="isMobile ? 12 : 8" :offset="isMobile ? 6 : 0" :class="{'m-b-10' : isMobile}">
        <div class="text-center height-full" :class="!isBlackMode ? 'sports-rule-cat-white' : 'sports-rule-cat'">
          <el-row class="height-full" :class="`sports-rule-cat-in-${themeType}`">
            <el-row class="f-s-14">
              단폴
            </el-row>
            <el-row class="m-t-17" :class="getTextColor(themeType, 1)">
              배당률 {{lowOddsStandard | filterOdds}} 이상만 배팅 가능
            </el-row>
            <el-row class="text-red905 m-t-7">
              {{lowOddsStandard | filterOdds}} 이상은 허용되나 연속적인<br>
              단폴배팅은 제재대상이 될수 있음
            </el-row>
          </el-row>
        </div>
      </el-col>
      <el-col :span="isMobile ? 12 : 8" :offset="isMobile ? 6 : 0" :class="{'m-b-10' : isMobile}">
        <div class="text-center height-full" :class="!isBlackMode ? 'sports-rule-cat-white' : 'sports-rule-cat'">
          <el-row class="height-full" :class="`sports-rule-cat-in-${themeType}`">
            <el-row class="f-s-14">
              두폴/다폴
            </el-row>
            <el-row class="m-t-17" :class="getTextColor(themeType, 1)">
              Ex: A 경기({{lowOddsStandard - 0.2 | filterOdds}})+B경기({{lowOddsStandard - 0.15 | filterOdds}})
            </el-row>
            <el-row class="text-red905 m-t-7">
              폴더 구성에 {{lowOddsStandard | filterOdds}} 이상의 배당률이<br>
              없어 시스템에서 거절됨
            </el-row>
          </el-row>
        </div>
      </el-col>
      <el-col :span="isMobile ? 12 : 8" :offset="isMobile ? 6 : 0" :class="{'m-b-10' : isMobile}">
        <div class="text-center height-full" :class="!isBlackMode ? 'sports-rule-cat-white' : 'sports-rule-cat'">
          <el-row class="height-full" :class="`sports-rule-cat-in-${themeType}`">
            <el-row class="f-s-14">
              다폴
            </el-row>
            <el-row class="m-t-2" :class="getTextColor(themeType, 1)">
              Ex: A 경기(1.89)+<br>
              B 경기(1.70)+C 경기(1.15)
            </el-row>
            <el-row class="text-red905 m-t-7">
              C 경기는 {{lowOddsStandard | filterOdds}} 이하이므로<br>
              해당 배팅은 두폴로 간주됨
            </el-row>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="themeType == 'blue15' || themeType == 'red12' || themeType == 'gold11'" class="p-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
      종목과 상관없이 스포츠 + 실시간스포츠 는 배팅불가능한 배팅입니다.<br>
      해당유형 배팅시 당첨여부와 상관없이 적특처리됩니다.<br>
    </el-row>
    <!-- 단폴/두폴/다폴 배팅규정 안내 끝 -->
    <!-- 동일경기 조합배팅(크로스) 안내-->
    <el-row v-if="gameSettings.Sports.isUseCrossBasketball && gameSettings.Sports.isUseCrossBaseball">
      <el-row v-if="sportsType === 'prematch'" class="f-s-13 f-w-900">
        <div class="float-left m-r-7">
          <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
        </div>
        <div class="float-left m-t-2">
          크로스 배팅 [동일경기 조합배팅] 안내
        </div>
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-12 p-l-22">
        <span :class="getTextColor(themeType, 1)">야구와 농구경기에서 "추가배팅옵션"</span>을 클릭하면 아래 예시와 같은 크로스 옵션을 제공합니다.
      </el-row>
      <el-row v-if="sportsType === 'prematch'">
        <el-col :span="isMobile ? 12 : 12" :offset="isMobile ? 6 : 0" :class="{'m-b-10' : isMobile}">
          <div class="text-center" :class="!isBlackMode ? 'sports-rule-cat-white' : 'sports-rule-cat'">
            <el-row class="p-t-6" :class="`sports-rule-cat-in-${themeType}`">
              <el-row>
                <img :src="'/image/Sports/RuleBasket.png'" width="26">
              </el-row>
              <el-row class="f-s-14 f-w-700 m-t-3">
                농구
              </el-row>
              <el-row class="m-t-3" :class="getTextColor(themeType, 1)">
                승패 + 오버언더<br>
                핸디캡 + 오버언더
              </el-row>
            </el-row>
          </div>
        </el-col>
        <el-col :span="isMobile ? 12 : 12" :offset="isMobile ? 6 : 0" :class="{'m-b-10' : isMobile}">
          <div class="text-center" :class="!isBlackMode ? 'sports-rule-cat-white' : 'sports-rule-cat'">
            <el-row class="p-t-6" :class="`sports-rule-cat-in-${themeType}`">
              <el-row>
                <img :src="'/image/Sports/RuleBase.png'" width="26">
              </el-row>
              <el-row class="f-s-14 f-w-700 m-t-3">
                야구
              </el-row>
              <el-row class="m-t-3" :class="getTextColor(themeType, 1)">
                승패 + 오버언더<br>
                핸디캡 + 오버언더
              </el-row>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-12 p-l-22">
        <span :class="getTextColor(themeType, 1)">승패 + 오버언더 조합 / 핸디캡 + 오버언더 조합이</span> 야구와 농구 경기에서 아래와 같이 조합된 상태로 발매됩니다.
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-r-12">
        <ul class="col-md-12 width-full m-b-2 height-29 p-l-10 p-r-10 p-t-5 cursor">
          <i id="collapse-0" class="fa m-t-3 float-right fa-chevron-down" :class="getTextColor(themeType, 1)"></i>
          <span class="f-s-13" :class="getTextColor(themeType, 1)">크로스 [동일경기 조합]</span>
        </ul>
        <ul class="market-odds col-md-1 width-full m-0 p-0">
            <ul class="list-box-g2 col-md-12 width-full m-t-0">
              <li class="hva_bt_sub1">
                <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                  <div class="list-box-g2 col-md-12">
                      <div class="hva-txt col-md-9 text-left p-0">
                        <div class="el-row">
                            홈팀승 +
                        </div>
                        <div class="el-row">오버(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                      </div>
                      <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">7.86</div>
                  </div>
                </div>
              </li>
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">
                              원정승<!----> +
                          </div>
                          <div class="el-row">오버(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">2.11</div>
                    </div>
                  </div>
              </li>
            </ul>
            <ul class="list-box-g2 col-md-12 width-full m-t-0">
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">
                              홈팀승<!----> +
                          </div>
                          <div class="el-row">언더(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">7.86</div>
                    </div>
                  </div>
              </li>
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">
                              원정승<!----> +
                          </div>
                          <div class="el-row">언더(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">2.11</div>
                    </div>
                  </div>
              </li>
            </ul>
            <ul class="list-box-g2 col-md-12 width-full m-t-0">
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">홈팀 핸디캡<span>(<span :class="`odds-basic-${themeType}`">10.5</span>)</span> +</div>
                          <div class="el-row">오버(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">3.27</div>
                    </div>
                  </div>
              </li>
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">원정 핸디캡<span>(<span :class="`odds-basic-${themeType}`">-10.5</span>)</span> +</div>
                          <div class="el-row">오버(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">3.27</div>
                    </div>
                  </div>
              </li>
            </ul>
            <ul class="list-box-g2 col-md-12 width-full m-t-0">
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">홈팀 핸디캡<span>(<span :class="`odds-basic-${themeType}`">10.5</span>)</span> +</div>
                          <div class="el-row">언더(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">3.27</div>
                    </div>
                  </div>
              </li>
              <li class="hva_bt_sub1">
                  <div class="display-inlineblock btn btn-sports-rule btn-block f-s-12 btn-btn p-l-8 p-r-8">
                    <div class="list-box-g2 col-md-12">
                        <div class="hva-txt col-md-9 text-left p-0">
                          <div class="el-row">원정 핸디캡<span>(<span :class="`odds-basic-${themeType}`">-10.5</span>)</span> +</div>
                          <div class="el-row">언더(<span :class="`odds-basic-${themeType}`">132.5</span>)</div>
                        </div>
                        <div class="hva-txt col-md-3 text-right p-0 float-right p-t-7">3.27</div>
                    </div>
                  </div>
              </li>
            </ul>
        </ul>
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-12 p-l-22">
        <span :class="getTextColor(themeType, 1)">위의 이미지는 농구에서 발매되는 크로스배팅의 예시입니다.</span>
      </el-row>
      <el-row v-if="sportsType === 'prematch' && themeType != 'yellow14'" class="p-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
        <el-row v-if="themeType != 'orange13'">
          *크로스 배팅으로 단폴 다폴 구성시 {{themeType == 'yellow15' ? '등급' : '레벨'}}에 상관없이 <span :class="getTextColor(themeType, 1)">1회 최대 배팅한도는 {{themeType == 'orange14' ? 100 : 30}}만원입니다.</span><br>
          *크로스 배팅은 해당일자에 동일 리그의 경우 최대 1회까지만 배팅이 가능합니다.<span :class="getTextColor(themeType, 1)">(리그당 1일 1회)</span><br>
        </el-row>
        *다른 배팅 없이 지속적으로 크로스만 배팅하실 경우 회원자격을 정지할수 있습니다.<br>
        *다양한 배팅옵션 제공을 위해 발매하는 크로스 배팅은 위의 규정사항을 준수하시여 이용하셔야 합니다.
      </el-row>
    </el-row>
    <!-- 동일경기 조합배팅(크로스) 안내 끝 -->
    <!-- 축배팅/보험배팅 규정안내 -->
    <el-row v-if="gameSettings.Live.isUseCrossBasketball && sportsType === 'inplay'">
      <el-row class="f-s-13 f-w-900">
        <div class="float-left m-r-7">
          <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
        </div>
        <div class="float-left m-t-2">
          실시간에서 스페셜 및 크로스 지원안내
        </div>
      </el-row>
      <el-row class="p-t-12 p-r-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
        농구, 야구등에서는 이닝별 쿼터별 다양한 배팅옵션을 제공하고, 농구에 있어서는 쿼터별 승패, 언오버,<br>
        핸디캡의 크로스 조합 배팅옵션도 지원합니다.<br>
        {{solutionTitle}} SPORT만의 스페셜과 쿼터 이닝별 크로스등을 다양하게 제공합니다.<br><br>
        ※ 골 (or) PK , 장타와 홈런 등 특정 상황 시점에 시스템 '시간차 베팅' 은 적중특례 또는 몰수 처리됩니다.<br>
        *고의성이 확인 될 경우 또는 고의성이 없다고하시더라도 운영진 판단하에 시스템 악용을 이용한 베팅이라고 확인될 경우에는 본사에서 적특처리 및 회수처리 될 수 있으니 주의 바랍니다.<br><br>
        ※특정상황 1-2분 전 배팅은 취소 처리에 대한 권한은 본사가 가집니다.<br>
        배팅 후 2분 동안 배팅 내역 살펴보시기를 권유해드립니다.<br>
        * 배팅내역 확인 후 진행중에도 유불리와 상관 없이 모두 취소처리 될 수 있음을 알려드립니다.<br>
        * 실시간 배팅은 배팅시 시점이 아닌 경기결과 영향을 주는 이벤트 발생시 배당 급하락등 변동 시점에 취소처리 될수 있음을 안내 드립니다.<br>
        * 시간이 지난후(배팅시점) 에도 취소 될수 있으니 실시간 배팅시 수시로 배팅 확인 부탁드립니다.
      </el-row>
    </el-row>
    <!-- 축배팅/보험배팅 규정안내 끝 -->
    <!-- 축배팅/보험배팅 규정안내 -->
    <el-row v-if="!gameSettings.Sports.isUseSameBet">
      <el-row v-if="sportsType === 'prematch'" class="f-s-13 f-w-900">
        <div class="float-left m-r-7">
          <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
        </div>
        <div class="float-left m-t-2">
          축배팅/보험배팅 규정안내
        </div>
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-12 p-l-22">
        한 경기에 동일옵션이 다른 박스에 중복으로 배팅되는것은 시스템에서 허용되지 않습니다.<br>
        <span :class="getTextColor(themeType, 1)">ex) A팀승 배팅을 접수한후 다른 박스에 A팀승을 배팅할시 시스템에서 허용되지 않음.</span><br><br>
        스포츠의 경우 한 경기당 최대 3회까지 다른 옵션으로 배팅하는 것을 허용합니다.<br>
        단 금지되는 경우는 승패를 배팅한후 동일경기 플핸, 마핸 (핸디캡)등을 배팅할경우 규정위반 입니다.<br>
        <span :class="getTextColor(themeType, 1)">
          A팀승 배팅을 접수한후 동일경기 핸디캡을 제외한 모든 추가 배팅은 규정준수 입니다.<br>
          A팀승 + C팀무 배팅 접수후, A팀 플핸 + ...은 규정위반 입니다.
        </span>
      </el-row>
      <el-row v-if="sportsType === 'prematch'">
        <el-col :span="2" class="text-right p-r-5">
          예시:
        </el-col>
        <el-col :span="isMobile ? 22 : 11" :class="{'m-b-10' : isMobile}">
          <el-row class="f-s-13 f-w-700 p-l-10">
            A경기 승 + C경기 무 조합배팅 이후<br>
            A경기 플핸 + D경기 조합배팅 하는 경우
          </el-row>
          <el-row class="text-red905 f-s-13 f-w-700 m-t-3 p-l-10">
            X 축배팅 위반
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 22 : 11" :offset="isMobile ? 2 : 0" :class="{'p-l-10' : isMobile}">
          <el-row class="f-s-13 f-w-700">
            A경기 승 + C경기 무 배팅후<br>
            A경기 오버 + C경기 오버를 배팅하는 경우
          </el-row>
          <el-row class="text-green904 f-s-13 f-w-700 m-t-3">
            <img :src="'/image/Sports/Allow.png'" class="m-r-3" style="margin-top: -4px">규정준수 (배팅성립)
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="sportsType === 'prematch'" class="p-12 p-l-22 m-t-10" :class="getTextColor(themeType, 1)" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
        사전에 스포츠 배팅후 실시간스포츠에서 동일경기 보험배팅을 하는 경우는 규정위반입니다.
      </el-row>
    </el-row>
    <!-- 축배팅/보험배팅 규정안내 끝 -->
    <!-- 레벨 별 배팅 / 당첨 상한 -->
    <el-row class="f-s-13 f-w-900">
      <div class="float-left m-r-7">
        <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
      </div>
      <div class="float-left m-t-2">
        {{themeType == 'yellow15' ? '멤버십' : '레벨'}} 별 배팅 / 당첨 상한
      </div>
    </el-row>
    <el-row v-if="themeType == 'gold12'" class="p-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
      <el-row class="f-s-14 f-w-700" :class="getTextColor(themeType, 1)">레벨별 배팅금 및 당첨금 한도는 공지게시판 "배팅 상한 및 당첨 상한 안내" 에서 확인 부탁드립니다 .</el-row>
    </el-row>
    <el-row v-if="themeType != 'yellow14' && themeType != 'gold12'" class="p-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
      <el-row class="f-s-14 f-w-700" :class="getTextColor(themeType, 1)">
        {{themeType == 'yellow15' ? 'CLASSIC 멤버십 회원' : '레벨 1 배팅/당첨 상한'}}
      </el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[0].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[0].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[0].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[0].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[0].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[0].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[0].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[0].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">
        {{themeType == 'yellow15' ? 'SPECIAL, ROYAL 멤버십 회원' : '레벨 2 배팅/당첨 상한'}}
      </el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[1].max1FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[1].max1FWinMoney, '원')}}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[1].max3FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[1].max3FWinMoney, '원')}}</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[1].max1FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[1].max1FWinMoney, '원')}}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[1].max3FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[1].max3FWinMoney, '원')}}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">
        {{themeType == 'yellow15' ? 'VIP 멤버십 회원' : '레벨 3 배팅/당첨 상한'}}
      </el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[themeType == 'yellow15' ? 5 : 2].max1FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[themeType == 'yellow15' ? 5 : 2].max1FWinMoney, '원')}}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[themeType == 'yellow15' ? 5 : 2].max3FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Sports.levelSetting[themeType == 'yellow15' ? 5 : 2].max3FWinMoney, '원')}}</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" :style="themeType == 'yellow15' ? 'height: 1px;' : ''">{{themeType != 'yellow15' ? '단폴/두폴' : ''}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[themeType == 'yellow15' ? 5 : 2].max1FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[themeType == 'yellow15' ? 5 : 2].max1FWinMoney, '원')}}</el-col>
          </el-row>
          <el-row v-if="themeType != 'yellow15'" class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[themeType == 'yellow15' ? 5 : 2].max3FBetMoney, '원')}}</el-col>
            <el-col :span="8">{{currencyFormat(gameSettings.Live.levelSetting[themeType == 'yellow15' ? 5 : 2].max3FWinMoney, '원')}}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="themeType == 'yellow15'" class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">
        VVIP 멤버십 회원
      </el-row>
      <el-row v-if="themeType == 'yellow15'" class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" style="height: 1px;"></el-col>
            <el-col :span="8">50,000,000 원</el-col>
            <el-col :span="8">150,000,000 원</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8" style="height: 1px;"></el-col>
            <el-col :span="8">10,000,000 원</el-col>
            <el-col :span="8">30,000,000 원</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="themeType == 'blue18' || themeType == 'yellow21' || themeType == 'yellow18'" class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 4 배팅/당첨 상한</el-row>
      <el-row v-if="themeType == 'blue18' || themeType == 'yellow21' || themeType == 'yellow18'" class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[3].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[3].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[3].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[3].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[3].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[3].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[3].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[3].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="themeType == 'blue18' || themeType == 'yellow21' || themeType == 'yellow18'" class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 5 배팅/당첨 상한</el-row>
      <el-row v-if="themeType == 'blue18' || themeType == 'yellow21' || themeType == 'yellow18'" class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[4].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[4].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[4].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[4].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[4].max1FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[4].max1FWinMoney, '원') }}</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[4].max3FBetMoney, '원') }}</el-col>
            <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[4].max3FWinMoney, '원') }}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-if="themeType == 'yellow21'" v-for="(level, index) in levelList" :key="index">
        <el-row v-if="themeType == 'blue18' || themeType == 'yellow21'" class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 {{level}} 배팅/당첨 상한</el-row>
        <el-row v-if="themeType == 'blue18' || themeType == 'yellow21'" class="text-center f-s-12 f-w-700 m-t-7">
          <el-col :span="isMobile ? 24 : 12">
            <el-row>
              <el-col :span="8" class="display-center">
                <div class="display-center" :class="`level-setting-${themeType}`">
                  <div class="p-t-5">스포츠</div>
                </div>
              </el-col>
              <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
              <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8">단폴/두폴</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[level - 1].max1FBetMoney, '원') }}</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[level - 1].max1FWinMoney, '원') }}</el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8">다폴</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[level - 1].max3FBetMoney, '원') }}</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Sports.levelSetting[level - 1].max3FWinMoney, '원') }}</el-col>
            </el-row>
          </el-col>
          <el-col :span="isMobile ? 24 : 12">
            <el-row>
              <el-col :span="8" class="display-center">
                <div class="display-center" :class="`level-setting-${themeType}`">
                  <div class="p-t-5">실시간 스포츠</div>
                </div>
              </el-col>
              <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
              <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8">단폴/두폴</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[level - 1].max1FBetMoney, '원') }}</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[level - 1].max1FWinMoney, '원') }}</el-col>
            </el-row>
            <el-row class="m-t-10">
              <el-col :span="8">다폴</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[level - 1].max3FBetMoney, '원') }}</el-col>
              <el-col :span="8">{{ currencyFormat(gameSettings.Live.levelSetting[level - 1].max3FWinMoney, '원') }}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
    <el-row v-if="themeType == 'yellow14'" class="p-12 p-l-22" style="padding-bottom: 34px; margin-bottom: 30px; border-bottom: 1px solid #464646">
      <el-row class="f-s-14 f-w-700" :class="getTextColor(themeType, 1)">레벨 1,2,9,10,11,12 배팅/당첨 상한</el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">10,000,000원</el-col>
            <el-col :span="8">20,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">10,000,000원</el-col>
            <el-col :span="8">20,000,000원</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">3,000,000원</el-col>
            <el-col :span="8">9,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">3,000,000원</el-col>
            <el-col :span="8">9,000,000원</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 3,4,7 배팅/당첨 상한</el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">15,000,000원</el-col>
            <el-col :span="8">30,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">15,000,000원</el-col>
            <el-col :span="8">30,000,000원</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">3,000,000원</el-col>
            <el-col :span="8">9,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">3,000,000원</el-col>
            <el-col :span="8">9,000,000원</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 5,6,8 배팅/당첨 상한</el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">15,000,000원</el-col>
            <el-col :span="8">50,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">15,000,000원</el-col>
            <el-col :span="8">50,000,000원</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">5,000,000원</el-col>
            <el-col :span="8">15,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">5,000,000원</el-col>
            <el-col :span="8">15,000,000원</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="f-s-14 f-w-700 m-t-23" :class="getTextColor(themeType, 1)">레벨 15,16,17 배팅/당첨 상한</el-row>
      <el-row class="text-center f-s-12 f-w-700 m-t-7">
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">30,000,000원</el-col>
            <el-col :span="8">100,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">30,000,000원</el-col>
            <el-col :span="8">100,000,000원</el-col>
          </el-row>
        </el-col>
        <el-col :span="isMobile ? 24 : 12">
          <el-row>
            <el-col :span="8" class="display-center">
              <div class="display-center" :class="`level-setting-${themeType}`">
                <div class="p-t-5">실시간 스포츠</div>
              </div>
            </el-col>
            <el-col :span="8" class="height-34 display-center">배팅상한</el-col>
            <el-col :span="8" class="height-34 display-center">당첨상한</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">단폴/두폴</el-col>
            <el-col :span="8">10,000,000원</el-col>
            <el-col :span="8">20,000,000원</el-col>
          </el-row>
          <el-row class="m-t-10">
            <el-col :span="8">다폴</el-col>
            <el-col :span="8">10,000,000원</el-col>
            <el-col :span="8">20,000,000원</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 레벨 별 배팅 / 당첨 상한 끝 -->
    <!-- 강력 제재사항 -->
    <el-row class="f-s-13 f-w-900">
      <div class="float-left m-r-7">
        <img :src="`/image/Sports/${themeType}/down-arrow.png`" width="14">
      </div>
      <div class="float-left m-t-2">
        강력 제재사항
      </div>
    </el-row>
    <el-row v-if="themeType != 'blue18' && themeType != 'red15' && themeType != 'orange12' && themeType != 'blue13' && themeType != 'yellow11'" class="p-12 p-l-22 f-s-13">
      *오즈포탈 등을 활용하여 배당률 하락경기에만 배팅하는 경우<br>
      *스포츠 경기에서 보너스 엣지를 악용하여 양방 혹은 시간 차 양방 배팅하는 경우<br>
      *실시간 스포츠 농구/배구 경기에서  언/오버 핸디캡을 악용한 걸치기, 양방 배팅을 하는 경우<br>
      *운영진의 실수 및 프로그램 오류로 인해 발생된 비정상적인 경기에 배팅하는 경우<br>
    </el-row>
    <el-row v-if="themeType == 'orange12' || themeType == 'blue13' || themeType == 'yellow11'" class="p-12 p-l-22 f-s-13">
      ※ 오즈포탈 등을 활용하여 배당률 하락경기에만 배팅하는 경우<br>
      ※ 운영진의 실수 및 프로그램 오류로 인해 발생 된 비정상적인 경기에 배팅하는 경우<br>
      ※ 골이나 PK, 장타와 홈런 등 특정 상황 시점에 시스템 '시간차 베팅'은 적중특례 또는 몰수 처리됩니다. <br>
      ※ 운영진 판단하에 시스템 악용을 이용한 베팅이라고 확인 될 경우에는 본사에서 적특처리 및 회수처리 될 수 있으니 주의 바랍니다.<br>
      ※ 특정상황 1-2분 전 배팅은 취소 처리에 대한 권한을 본사가 가집니다.<br>
      ※ 실시간 배팅은 배팅 시점이 아닌 경기 결과에 영향을 주는 이벤트 발생,배당 급하락 등 변동 시점에 취소처리 될수 있음을 안내 드립니다.<br>
      ※ 배팅 후 2분 동안 배팅 내역 살펴보시기를 권유해드리며,시간이 지난 후(배팅시점) 에도 취소 될수 있으니 실시간 배팅 시 수시로 배팅 확인 부탁드립니다.<br>
    </el-row>
    <el-row v-if="themeType == 'blue18'" class="p-12 p-l-22 f-s-13">
      *스포츠 경기에서 양방 혹은 시간 차 양방 배팅하는 경우<br>
      *배당 확인 사이트를 활용하여 배당률 하락 경기를 주로 배팅하는 경우<br>
      *실시간 스포츠 경기 상황에 대한 언/오버 및 핸디캡 등 실시간 경기 상황을 악용하는 배팅을 하는 경우
    </el-row>
    <el-row v-if="themeType == 'red15'" class="p-12 p-l-22 f-s-13">
      ※ 오즈포탈 등을 활용하여 배당률 하락경기에만 배팅하는 경우<br>
      ※ 운영진의 실수 및 프로그램 오류로 인해 발생 된 비정상적인 경기에 배팅하는 경우<br>
      ※ 골이나 PK, 장타와 홈런 등 특정 상황 시점에 시스템 '시간차 베팅'은 적중특례 또는 몰수 처리됩니다.<br>
      ※ 운영진 판단하에 시스템 악용을 이용한 베팅이라고 확인 될 경우에는 본사에서 적특처리 및 회수처리 될 수 있으니 주의 바랍니다.<br>
      ※ 특정상황 1-2분 전 배팅은 취소 처리에 대한 권한을 본사가 가집니다.<br>
      ※ 실시간 배팅은 배팅 시점이 아닌 경기 결과에 영향을 주는 이벤트 발생,배당 급하락 등 변동 시점에 취소처리 될수 있음을 안내 드립니다.<br>
      ※ 배팅 후 2분 동안 배팅 내역 살펴보시기를 권유해드리며,시간이 지난 후(배팅시점) 에도 취소 될수 있으니 실시간 배팅 시 수시로 배팅 확인 부탁드립니다.
    </el-row>
    <el-row v-if="themeType != 'blue18' && themeType != 'red15' && sportsType === 'inplay'" class="p-12 p-l-22 f-s-12">
      <el-row v-if="themeType != 'purple11' && themeType != 'purple12' && themeType != 'yellow20' && themeType != 'yellow16' && themeType != 'yellow19' && themeType != 'red13'" class="p-10" :class="`border-1-${themeType}`">
        축구, 하키등의 경기의 경우 배팅한 시점으로 최대 30초이내에 득점발생시 적특처리 될수 있습니다.<br>
        30초이내에 득점이 발생한다고 하여 무조건 적특처리되는 것은 아니오나 실제 득점이 이뤄진 시간과 배팅한 
        시간의 오차를 확인하여 시스템상에서 오차가 있을경우에만 적특처리됩니다.<br><br>
        고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 
        회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
      </el-row>
      <el-row v-if="themeType == 'purple12'" class="p-10" :class="`border-1-${themeType}`">
        축구, 야구, 하키등의 경기의 경우 배팅한 시점으로 최대 1~2분이내에 득점발생시 적특처리 될수 있습니다.<br>
        1분~2분이내에 득점이 발생한다고 하여 무조건 적특처리되는 것은 아니오나 실제 득점이 이뤄진 시간과 배팅한 시간의 오차를 확인하여 시스템상에서 오차가 있을경우에만 적특처리됩니다.
      </el-row>
      <el-row v-if="themeType == 'yellow19'" class="p-10" :class="`border-1-${themeType}`">
        실시간 스포츠 경기의 경우 배팅한 시점으로 최대 60초이내에 득점발생시 적특처리 될수 있습니다.<br>
        60초이내에 득점이 발생한다고 하여 무조건 적특처리되는 것은 아니오나 실제 득점이 이뤄진 시간과 배팅한 
        시간의 오차를 확인하여 시스템상에서 오차가 있을경우에만 적특처리됩니다.<br><br>
        고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 
        회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
      </el-row>
      <el-row v-if="themeType == 'red13'" class="p-10" :class="`border-1-${themeType}`">
        축구, 야구, 하키등의 경기의 경우 배팅한 시점으로 최대 1~2분이내에 득점발생시 적특처리 될수 있습니다.<br>
        1분~2분이내에 득점이 발생한다고 하여 무조건 적특처리되는 것은 아니오나 실제 득점이 이뤄진 시간과 배팅한 시간의 오차를 확인하여 시스템상에서 오차가 있을경우에만 적특처리됩니다.<br><br>
        고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 
        회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
      </el-row>
      <el-row v-if="themeType == 'purple11' || themeType == 'yellow20' || themeType == 'yellow16'" class="p-10" :class="`border-1-${themeType}`">
        축구, 야구, 하키등의 경기의 경우 배팅한 시점으로 최대 1~2분 이내에 득점발생시 적특처리 될수 있습니다.<br>
        1~2분 이내에 득점이 발생한다고 하여 무조건 적특처리되는 것은 아니오나 실제 득점이 이뤄진 시간과 배팅한 시간의 오차를 확인하여 시스템상에서 오차가 있을경우에만 적특처리됩니다.<br><br>
        고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 
        회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
      </el-row>
    </el-row>
    <el-row v-else class="p-12 p-l-22 f-s-12">
      <el-row v-if="themeType != 'red15'" class="p-10" :class="`border-1-${themeType}`">
        야구, 배구 등 각종 경기의 경우 배팅한 시점으로 최대 1분 이내에 득점 발생시 적특처리 되실 수 있습니다.<br>
        <span class="m-l-5">* 1분이내에 득점이 발생한 모든 경기가 적특처리가 되는 것은 아니며,</span><br>
        <span class="m-l-15">실제 경기 상황과 배팅하신 피드의 시스템상 오차가 있는 경우에만 처리 되십니다.</span><br><br>
        데이터 송수신에 대한 시간차를 노려 라이브 배팅을 하시는 경우 강력 제재 처리 되십니다.
      </el-row>
      <el-row v-else class="p-10" :class="`border-1-${themeType}`">
        데이터 송수신에 대한 시간차를 노려 라이브 배팅을 하시는 경우 강력 제재 처리 되십니다.<br>
        고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
      </el-row>
    </el-row>
    <el-row v-if="sportsType === 'prematch' && (themeType == 'orange11' || themeType == 'orange12' || themeType == 'yellow20' || themeType == 'blue13' || themeType == 'yellow11' || themeType == 'yellow21' || themeType == 'yellow16' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15' || themeType == 'red15' || themeType == 'blue16')" class="p-12 p-l-22" :class="getTextColor(themeType, 1)">
      슈어맨 배너업체라는 점을 악용하여 양방 및 편법 배팅을 할 시에 <br>
      의도가 분명하고 악의적이라고 판단될 시에는 전액몰수 및 탈퇴처리되며 강력하게 응징할 것입니다.
    </el-row>
    <el-row v-if="themeType == 'blue18'" class="p-12 p-l-22" :class="getTextColor(themeType, 1)">
      양방 및 악용 배팅을 하시는 경우 저희 마추자에서는 강력히 제재를 취할 예정이며, <br>
      금액의 손실과 회원 자격이 박탈되는 문제가 생길 수 잇으니 이점 참고하시여 주의 부탁드립니다.
    </el-row>
    <el-row v-if="sportsType === 'inplay' && (themeType == 'orange11' || themeType == 'yellow20' || themeType == 'yellow21' || themeType == 'yellow16' || themeType == 'purple11' || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == 'purple12' || themeType == 'gold12' || themeType == 'blue17' || themeType == 'orange14' || themeType == 'gold11' || themeType == 'red12' || themeType == 'blue15' || themeType == 'blue16')" class="p-12 p-l-22" :class="getTextColor(themeType, 1)">
      실시간 스포츠는 한 경기당 횟수제한 없이 배팅을 하실수 있습니다. <br>
      의도가 분명하고 악의적이라고 판단될 시에는 전액몰수 및 탈퇴처리되며 강력하게 응징할 것입니다.
    </el-row>
    <el-row v-if="sportsType === 'inplay' && (themeType == 'orange12' || themeType == 'blue13' || themeType == 'yellow11')" class="p-12 p-l-22" :class="getTextColor(themeType, 1)">
      데이터 송수신에 대한 시간차를 노려 라이브 배팅을 하시는 경우 강력 제재 처리 되십니다.<br>
      고의적으로 경기직관등을 활용하여 득점이 발생하고 배당변화를 관찰하여 배팅하는 행위를 시도할시에는 회원자격을 박탈당할수 있으니 정정당당한 분석에 의한 실시간 이용을 부탁드립니다.
    </el-row>
    <!-- 강력 제재사항 끝 -->
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import { currencyFormat, filterOdds } from '@/assets/js/utils'
import { getTextColor } from "@/assets/js/data/uicommon"

export default {
	name: "RuleOpened",
  props: ["sportsType"],
  computed: {
    ...mapGetters({
      isMobile: 'getIsMobile',
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isBlackMode: 'getIsBlackMode',
      solutionTitle: 'getSolutionTitle',
      lowOddsStandard: "getLowOddsStandard",
    })
  },
  filters: {
    filterOdds
  },
  data() {
    return {
      levelList: [6, 7, 8, 9, 10, 11, 12, 15]
    }
  },
  methods: {
    getTextColor,
    currencyFormat
  }
}
</script>
<template>
  <client-only>
    <div>
      <!-- begin #sidebar-right -->
      <div v-if="showMiniTab && isMobile" id="sidebar-right" class="sidebar sidebar-right sidebar-grid width-full m-t-200">
        <!-- begin sidebar scrollbar -->
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
          <div data-scrollbar="true" data-height="100%" data-init="true" style="overflow: hidden; width: auto; height: 100%;">
            <el-scrollbar style="height: 100%">
              <el-row class="m-b-20">
                <img :src="`/image/Home/${themeType}/Close.png`" class="cursor m-r-10 float-right" @click="onClickShowMiniTab">
              </el-row>
              <el-row v-if="miniGameType == 0">
                <el-row>
                  <el-col v-if="gameSettings.PowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(0)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtryPLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(1)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtryKLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(2)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">키노사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtrySpeedKeno.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(3)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">스피드키노</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(20)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 1분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(21)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 2분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(22)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(23)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 4분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(24)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 5분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 1">
                <el-row>
                  <el-col v-if="gameSettings.NamedRacing.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(10)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">달팽이 레이싱</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedPowerBall3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(38)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 파워볼 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedPowerBall5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(39)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 파워볼 5분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedLadder3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(40)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 사다리 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedLadder5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(41)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 사다리 5분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedRedPowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(69)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 레드파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NamedRedLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(70)">
                      <el-row><img :src="`/image/mini/logo-named.png`" width="28"></el-row>
                      <el-row class="m-t-10">네임드 레드사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 2">
                <el-row>
                  <el-col v-if="gameSettings.LivescorePowerFreeKick.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(11)">
                      <el-row><img :src="`/image/mini/logo-livescore.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워프리킥</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.LivescoreSpeedHomeRun.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(12)">
                      <el-row><img :src="`/image/mini/logo-livescore.png`" width="28"></el-row>
                      <el-row class="m-t-10">스피드홈런</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.LivescorePowerSpeedDunk.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(13)">
                      <el-row><img :src="`/image/mini/logo-livescore.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워스피드덩크</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 3">
                <el-row>
                  <el-col v-if="gameSettings.BubblePowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(14)">
                      <el-row><img :src="`/image/mini/logo-bubble.png`" width="28"></el-row>
                      <el-row class="m-t-10">보글 파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BubbleLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(15)">
                      <el-row><img :src="`/image/mini/logo-bubble.png`" width="28"></el-row>
                      <el-row class="m-t-10">보글 사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 4">
                <el-row>
                  <el-col v-if="gameSettings.BoscoreLadder1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(16)">
                      <el-row><img :src="`/image/mini/logo-boscore.png`" width="28"></el-row>
                      <el-row class="m-t-10">1분 별다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BoscoreLadder2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(17)">
                      <el-row><img :src="`/image/mini/logo-boscore.png`" width="28"></el-row>
                      <el-row class="m-t-10">2분 별다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BoscoreLadder3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(18)">
                      <el-row><img :src="`/image/mini/logo-boscore.png`" width="28"></el-row>
                      <el-row class="m-t-10">3분 별다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BoscorePowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(19)">
                      <el-row><img :src="`/image/mini/logo-boscore.png`" width="28"></el-row>
                      <el-row class="m-t-10">1분 파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 5">
                <el-row>
                  <el-col v-if="gameSettings.LotusBaccarat1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(25)">
                      <el-row><img :src="`/image/mini/logo-lotus.png`" width="28"></el-row>
                      <el-row class="m-t-10">바카라1</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.LotusEvenOdd.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(26)">
                      <el-row><img :src="`/image/mini/logo-lotus.png`" width="28"></el-row>
                      <el-row class="m-t-10">홀짝</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 6">
                <el-row>
                  <el-col v-if="gameSettings.BetGameLucky7.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(32)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">럭키7</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameLucky6.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(33)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">럭키6</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameLucky5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(34)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">럭키5</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameWheel.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(30)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">행운의바퀴</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGamePoker.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(28)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">홀덤포커</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameBaccarat.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(27)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">바카라</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameBet.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(29)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">1:1벳</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.BetGameDiceDuel.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(31)">
                      <el-row><img :src="`/image/mini/logo-betgames.png`" width="28"></el-row>
                      <el-row class="m-t-10">주사위결투</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 7">
                <el-row>
                  <el-col v-if="gameSettings.CoreCrash.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(35)">
                      <el-row><img :src="`/image/mini/logo-core.png`" width="28"></el-row>
                      <el-row class="m-t-10">투더문</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CoreHillo.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(36)">
                      <el-row><img :src="`/image/mini/logo-core.png`" width="28"></el-row>
                      <el-row class="m-t-10">하이로우</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CoreDice.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(37)">
                      <el-row><img :src="`/image/mini/logo-core.png`" width="28"></el-row>
                      <el-row class="m-t-10">다이스</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CoreMHillo.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(50)">
                      <el-row><img :src="`/image/mini/logo-core.png`" width="28"></el-row>
                      <el-row class="m-t-10">멀티하이로우</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CoreMine.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(51)">
                      <el-row><img :src="`/image/mini/logo-core.png`" width="28"></el-row>
                      <el-row class="m-t-10">지뢰게임</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 8">
                <el-row>
                  <el-col v-if="gameSettings.PowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(0)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtryPLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(1)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">파워사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtryKLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(2)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">키노사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.NtrySpeedKeno.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(3)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">스피드키노</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 9">
                <el-row>
                  <el-col v-if="gameSettings.EOSPowerBall1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(20)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 1분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(21)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 2분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(22)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall4.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(23)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 4분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.EOSPowerBall5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(24)">
                      <el-row><img :src="`/image/mini/logo-ntry.png`" width="28"></el-row>
                      <el-row class="m-t-10">EOS 파워볼 5분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 10">
                <el-row>
                  <el-col v-if="gameSettings.SurePowerBall1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(42)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어파워볼 1분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SurePowerBall2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(43)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어파워볼 2분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SurePowerBall3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(44)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어파워볼 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureLadder1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(45)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어사다리 1분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureLadder2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(46)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어사다리 2분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureLadder3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(47)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어사다리 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureRacing1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(71)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어레이싱 1분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureRacing2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(72)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어레이싱 2분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.SureRacing3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(73)">
                      <el-row><img :src="`/image/mini/logo-sureman.png`" width="28"></el-row>
                      <el-row class="m-t-10">슈어레이싱 3분</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 11">
                <el-row>
                  <el-col v-if="gameSettings.CompanionSpeedKeno.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(48)">
                      <el-row><img :src="`/image/mini/logo-companion.png`" width="28"></el-row>
                      <el-row class="m-t-10">동행스피드키노</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CompanionKenoLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(49)">
                      <el-row><img :src="`/image/mini/logo-companion.png`" width="28"></el-row>
                      <el-row class="m-t-10">동행키노사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CompanionPowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(52)">
                      <el-row><img :src="`/image/mini/logo-companion.png`" width="28"></el-row>
                      <el-row class="m-t-10">동행파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.CompanionPowerLadder.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(53)">
                      <el-row><img :src="`/image/mini/logo-companion.png`" width="28"></el-row>
                      <el-row class="m-t-10">동행파워사다리</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 12">
                <el-row>
                  <el-col v-if="gameSettings.TokenPowerBall.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(54)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰파워볼</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenRoullete.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(55)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰룰렛</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenHilo.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(56)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰하이로우</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenHilo5.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(57)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰하이로우5</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenGraph.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(58)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰그래프</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenBaccarat.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(59)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰바카라</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenHorse.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(60)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰가상경마</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenWheel.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(61)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰휠</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenRacing3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(62)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰레이싱3</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.TokenRacing4.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(63)">
                      <el-row><img :src="`/image/mini/logo-token.png`" width="28"></el-row>
                      <el-row class="m-t-10">토큰레이싱4</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-if="miniGameType == 13">
                <el-row>
                  <el-col v-if="gameSettings.MGMBaccarat1.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(64)">
                      <el-row><img :src="`/image/mini/logo-mgm.png`" width="28"></el-row>
                      <el-row class="m-t-10">바카라1</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.MGMBaccarat2.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(65)">
                      <el-row><img :src="`/image/mini/logo-mgm.png`" width="28"></el-row>
                      <el-row class="m-t-10">바카라2</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.MGMBaccarat3.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(66)">
                      <el-row><img :src="`/image/mini/logo-mgm.png`" width="28"></el-row>
                      <el-row class="m-t-10">바카라3</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.MGMEvenOdd.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(67)">
                      <el-row><img :src="`/image/mini/logo-mgm.png`" width="28"></el-row>
                      <el-row class="m-t-10">홀짝</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                  <el-col v-if="gameSettings.MGMGoStop.isVisible" :span="12" class="p-l-20 p-r-20 m-t-10">
                    <div class="mini-mob-tab" @click="goToMiniGame(68)">
                      <el-row><img :src="`/image/mini/logo-mgm.png`" width="28"></el-row>
                      <el-row class="m-t-10">고스톱</el-row>
                      <el-row class="m-t-10">On</el-row>
                    </div>
                  </el-col>
                </el-row>
              </el-row>
            </el-scrollbar>
          </div>
        </div>
        <!-- end sidebar scrollbar -->
      </div>
      <div v-if="showMiniTab" class="position-absolute width-full height-full" :class="marginTop"
        style="background-color: rgba(0, 0, 0, 0.6); z-index: 1030; left: 0; touch-action: none;" @click="onClickShowMiniTab">
      </div>
      <!-- end #sidebar-right -->
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      showMiniTab: "getShowMiniTab",
      gameSettings: "getGameSettings",
      themeType: "getThemeType",
      miniGameType: "getMiniGameType",
      isUseNoteRead: "getIsUseNoteRead",
      noteCount: "getNoteCount"
    }),
  },
  data() {
    return {
      marginTop: "m-t-125"
    }
  },
  mounted() {
    let count = 0
    if (this.gameSettings?.Mini.ntry) count++
    if (this.gameSettings?.Mini.named) count++
    if (this.gameSettings?.Mini.livescore) count++
    if (this.gameSettings?.Mini.bubble) count++
    if (this.gameSettings?.Mini.boscore) count++
    if (count < 4) this.marginTop = "m-t-80"
  },
  methods: {
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
		},
    onClickShowMiniTab() {
      this.$store.commit("SET_SHOWMINITAB", !this.showMiniTab);
    },
    goToMiniGame(val, type) {
      if (this.isUseNoteRead && this.noteCount > 0) {
        this.showMessage('알림메시지', "읽지 않은 중요한 쪽지가 있어 페이지 이동이 불가합니다.", '닫기[Close]', 2)
        return
      }
      this.onClickShowMiniTab()
      switch (val) {
        case 0:
          this.$router.push("/Mini/PowerBall")
          break
        case 1:
          this.$router.push("/Mini/PowerLadder")
          break
        case 2:
          this.$router.push("/Mini/KenoLadder")
          break
        case 3:
          this.$router.push("/Mini/SpeedKeno")
          break
        case 4:
          this.$router.push("/Mini/Fx")
          break
        case 5:
          this.$router.push("/Mini/NamedFX1")
          break
        case 6:
          this.$router.push("/Mini/NamedFX2")
          break
        case 7:
          this.$router.push("/Mini/NamedFX3")
          break
        case 8:
          this.$router.push("/Mini/NamedFX4")
          break
        case 9:
          this.$router.push("/Mini/NamedFX5")
          break
        case 10:
          this.$router.push("/Mini/NamedRacing")
          break
        case 11:
          this.$router.push("/Mini/LivescorePowerFreeKick")
          break
        case 12:
          this.$router.push("/Mini/LivescoreSpeedHomeRun")
          break
        case 13:
          this.$router.push("/Mini/LivescorePowerSpeedDunk")
          break
        case 14:
          this.$router.push("/Mini/BubblePowerBall")
          break
        case 15:
          this.$router.push("/Mini/BubbleLadder")
          break
        case 16:
          this.$router.push("/Mini/BoscoreLadder1")
          break
        case 17:
          this.$router.push("/Mini/BoscoreLadder2")
          break
        case 18:
          this.$router.push("/Mini/BoscoreLadder3")
          break
        case 19:
          this.$router.push("/Mini/BoscorePowerBall")
          break
        case 20:
          this.$router.push("/Mini/EOSPowerBall1")
          break
        case 21:
          this.$router.push("/Mini/EOSPowerBall2")
          break
        case 22:
          this.$router.push("/Mini/EOSPowerBall3")
          break
        case 23:
          this.$router.push("/Mini/EOSPowerBall4")
          break
        case 24:
          this.$router.push("/Mini/EOSPowerBall5")
          break
        case 25:
          this.$router.push("/Lotus/Baccarat1")
          break
        case 26:
          this.$router.push("/Lotus/EvenOdd")
          break
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
        case 74: // 슈어레이싱 3분
          this.$router.push("/FuturesTrading");
          break;  
        case 75: // 슈어레이싱 3분
          this.$router.push("/InsightBets");
          break;  
      }
    }
  },
};
</script>

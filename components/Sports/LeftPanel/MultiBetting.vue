<template>  
<client-only>
  <el-row class="p-0" 
    :class="[
      isMobile || layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'p-l-16 p-r-16', 
      layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'm-b-8': ''
    ]">
    <el-row class="position-relative" :class="`multibetting-${themeType}`">
      <el-row class="f-s-11 p-0" 
        :class="layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? '' : 'position-absolute'" 
        :style="layoutType == 'layout1' ? 'left: 0; top: -15px;' : ''">
        <el-row class="pull-left p-r-10 p-l-14 p-r-14" :class="`multibetting-des-${themeType}`">
          <i v-if="layoutType == 'layout1'" class="fa fa-star text-red905"></i> 
          <img v-else class="m-r-10" :src="`/image/Sports/${themeType}/multibonus.png`">
          <font :color="'#fff'" id="game_bonus_title">다폴더 보너스 추가 배당</font> 
          <span v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'"> - </span>
          <span v-if="layoutType != 'layout2'">(3, 6, 9) 폴더 이상 조합시 지급</span>
          <img v-if="layoutType == 'layout2'" :src="`/image/Sidebar/${themeType}/down-arrow.svg`" class="float-right m-t-5">
        </el-row>
      </el-row>
      <el-row :class="layoutType == 'layout2' ? 'p-8 p-b-4 bg-black27 b-r-6' : 'p-t-10'">
        <el-row v-if="layoutType == 'layout2'" class="text-white p-l-16 p-b-4">(3, 6, 9) 폴더 이상 조합시 지급</el-row>
        <ul class="list-box-g col-md-12 btn-group text-ellipsis height-50">
          <li class="hva_bt_sub1">
            <button type="button" class="btn btn-block btnstyle1-inverse3 btn-btn-bonus p-t-4 p-b-4" 
              :class="`multibetting-button-${themeType}`" @click="onClickMutiBonus(0)">
              <ul class="list-box-mg">
                <div class="pull-left f-s-14" :class="layoutType == 'layout2' ? 'text-left' : 'p-t-6'">
                  <strong>
                    <i v-if="layoutType == 'layout1' || layoutType == 'layout6'" class="fa fa-star text-red905"></i> 
                    <span :class="`text-multibetting-${themeType}`">{{isMobile ? '3폴더' : '3폴더 이상'}}</span>
                  </strong>
                </div>
                <div class="pull-right rounded-corner f-s-13" :class="`multibetting-odd-${themeType}`"><strong>{{gameSettings.Sports.f3Odds}}</strong></div>
              </ul>
            </button>
          </li>
          <li class="hva_bt_sub1 p-l-5 p-r-5">
            <button type="button" class="btn btn-block btnstyle1-inverse3 btn-btn-bonus p-t-4 p-b-4" 
              :class="`multibetting-button-${themeType}`" @click="onClickMutiBonus(1)">
              <ul class="list-box-mg">
                <div class="pull-left f-s-14" :class="layoutType == 'layout2' ? 'text-left' : 'p-t-6'">
                  <strong>
                    <i v-if="layoutType == 'layout1' || layoutType == 'layout6'" class="fa fa-star text-red905"></i> 
                    <span :class="`text-multibetting-${themeType}`">{{isMobile ? '6폴더' : '6폴더 이상'}}</span>
                  </strong>
                </div>
                <div class="pull-right rounded-corner f-s-13" :class="`multibetting-odd-${themeType}`"><strong>{{gameSettings.Sports.f6Odds}}</strong></div>
              </ul>
            </button>
          </li>
          <li class="hva_bt_sub1">
            <button type="button" class="btn btn-block btnstyle1-inverse3 btn-btn-bonus p-t-4 p-b-4" 
              :class="`multibetting-button-${themeType}`" @click="onClickMutiBonus(2)">
              <ul class="list-box-mg">
                <div class="pull-left f-s-14" :class="layoutType == 'layout2' ? 'text-left' : 'p-t-6'">
                  <strong>
                    <i v-if="layoutType == 'layout1' || layoutType == 'layout6'" class="fa fa-star text-red905"></i> 
                    <span :class="`text-multibetting-${themeType}`">{{isMobile ? '9폴더' : '9폴더 이상'}}</span>
                  </strong>
                </div>
                <div class="pull-right rounded-corner f-s-13" :class="`multibetting-odd-${themeType}`"><strong>{{gameSettings.Sports.f9Odds}}</strong></div>
              </ul>
            </button>
          </li>
        </ul>
      </el-row>
    </el-row>
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["sportsType"],
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      isMobile: 'getIsMobile',
      gameSettings: "getGameSettings",
      betSlipList: "betslip/getBetSlipList"
    }),
  },
  methods: {
    // 메시지 모달
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type
      });
    },
    onClickMutiBonus(type) {
      // 로그인 하지 않은 경우 홈페이지로 이동
      if (this.currentUser === null) {
        this.showMessage("알림메시지", "로그인 후 이용할 수 있습니다.", "닫기[Close]", 2);
        return;
      }

      let foldernum = this.betSlipList.filter(bet => bet.FixtureId != -1).length

      if (type == 0 && foldernum < 3) {
        this.showMessage( "알림메시지", "3폴더 이상만 해당 보너스 선택이 가능합니다.", "닫기[Close]", 2 );
        return;
      }

      if (type == 1 && foldernum < 6) {
        this.showMessage( "알림메시지", "6폴더 이상만 해당 보너스 선택이 가능합니다.", "닫기[Close]", 2 );
        return;
      }

      if (type == 2 && foldernum < 9) {
        this.showMessage( "알림메시지", "9폴더 이상만 해당 보너스 선택이 가능합니다.", "닫기[Close]", 2 );
        return;
      }

      if (this.betSlipList.findIndex(slip => slip.odds < this.gameSettings.Sports.f369Odds) > -1) {
        this.showMessage( "알림메시지", "배당이 " + this.gameSettings.Sports.f369Odds + " 이하인 경우 보너스 선택이 불가합니다.", "닫기[Close]", 2 );
        return;
      }

      let odds = 1
      if (type == 0) {
        odds = this.gameSettings.Sports.f3Odds
      } else if ( type == 1) {
        odds = this.gameSettings.Sports.f6Odds
      } else if ( type == 2) {
        odds = this.gameSettings.Sports.f9Odds
      }

      // 배팅슬립에 배팅정보 추가
      let data = {
        gameType: this.sportsType,
        SportId: -1,
        FixtureId: -1,
        MarketId: -1, // 0: 크로스, .. 해당 마켓 아이디가 들어감...
        BetId: type, // MarketId=0 일때  CrossBet._id값이 들어간다.
        Bets: [
          {
            Id: type, // 배당 아이디
          },
        ],
        LeagueName: "",
        HomeName: "",
        AwayName: "",
        BetName: type * 3 + 3 + "폴더 보너스",
        odds: odds,
        Status: 2,
      };

      let index = this.betSlipList.findIndex( (slip) => slip.FixtureId === -1 );
      if (index > -1) {
        if (this.betSlipList[index].BetId === data.BetId) {
          this.$store.commit("betslip/DELETE_BETSLIPONE", index);
          return;
        }
        data.SlipIndex = index;
        this.$store.commit("betslip/UPDATE_BETSLIPONE", data);
      } else {
        this.$store.commit("betslip/SET_BETSLIPLIST", data);
      }
    }
  }
}
</script>
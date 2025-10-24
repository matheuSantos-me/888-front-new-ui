<template>
<client-only>
  <div>
    <el-dialog v-if="isShowDialog" :visible.sync="isShowDialog" class="popup-dialog" :width="'332px'">
      <el-row v-if="layoutType == 'layout2'" class="text-right p-16" :style="isMobile ? 'height: 64px; background: #101012;' : 'height: 56px; background: #101012;'">
        <img :src="'/image/multi.svg'" class="cursor i-multi" @click="onClickButton()" :style="isMobile ? 'position: absolute; top: 20px; right: 16px;' : 'position: absolute; top: 12px; right: 16px; width: 32px'">
      </el-row>
      <el-row v-else class="text-right p-16" style="height: 56px; background: #14161b;">
        <img :src="'/image/multi.svg'" class="cursor i-multi" @click="onClickButton()" :style="isMobile ? 'position: absolute; top: 20px; right: 16px;' : 'position: absolute; top: 12px; right: 16px; width: 32px'">
      </el-row>
      <el-row class="display-center p-t-10" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'background: #14161b;' : 'background: #101012;'">
        <img :src="`/image/Home/${themeType}/logo1.png`" :height="themeType == 'blue17' || themeType == 'blue18' || themeType == 'yellow15' || themeType == 'gold11' || themeType == 'orange14' ? 30 : 60">
      </el-row>
      <el-row v-if="state == 0" class="panel text-center p-t-24 p-b-24" style="color: #fff; border-radius: 0;" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'background: #14161b;' : 'background: #101012;'">
        <el-row class="display-center">
          <div class="ruleta-img" style="width: 300px; height: 300px; content:url('/image/Coupon/roullete.png'); transform: rotate(22.5deg);">
          </div>
        </el-row>
        <div class="contenedor-ruleta" style="position: absolute; left: 16px; top: 24px;"> <div class="ruleta"></div> </div>
        <img :src="`/image/Coupon/pin.png`" width="50px" style="position: absolute; left: calc(50% - 25px); top: 4px;"/>
        <el-row class="p-16">
          <el-button id="captcha" type="primary" class="width-full" :class="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? `login-button-${themeType}` : `${themeType}-button`" :loading="loading" @click.native.prevent="processCoupon">
            룰렛 돌리기
          </el-button>
        </el-row>
      </el-row>
      <el-row v-if="state == 1" class="panel text-center p-t-24 p-b-24 f-s-14" style="color: #fff; border-radius: 0;" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'background: #14161b;' : 'background: #101012;'">
        <el-row :class="getTextColor(themeType)" class="p-t-16 p-b-16 f-s-18 f-w-900">
          축하합니다!
        </el-row>
        <el-row class="p-b-16">
          {{roulleteIndex > 0 ? currencyFormat(roulleteMoney[roulleteIndex - 1], "원") : 0}} 보너스 쿠폰이 당첨되었습니다.
        </el-row>
        <el-row v-for="(data, index) in msgSuccess.split('|')" :key="index" class="p-b-16">
          {{data}}
        </el-row>
      </el-row>
      <el-row v-if="state == 2" class="panel text-center p-t-24 p-b-24 f-s-14" style="color: #fff; border-radius: 0;" :style="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6' ? 'background: #14161b;' : 'background: #101012;'">
        <el-row :class="getTextColor(themeType)" class="p-t-16 p-b-16 f-s-18 f-w-900">
          꽝!
        </el-row>
        <el-row v-for="(data, index) in msgError.split('|')" :key="index" class="p-b-16">
          {{data}}
        </el-row>
      </el-row>
    </el-dialog>
  </div>
</client-only>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from "vuex";
import { getBackColor, getTextColor } from "@/assets/js/data/uicommon";
import { currencyFormat } from "~/assets/js/utils";

const reqService = feathers.service("/client-request");

reqService.timeout = 60000;

export default {
  name: "login",
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      roulleteDialogVisible: 'getRoulleteDialogVisible',
      isMobile: 'getIsMobile',
			themeType: 'getThemeType',
      layoutType: 'getLayoutType',
      roulleteMoney: 'getRoulleteMoney',
      roulleteId: "getRoulleteId",
      roulleteIndex: "getRoulleteIndex",
      msgSuccess: "getCouponMsgSuccess",
      msgError: "getCouponMsgError"
    })
  },
  watch: {
    roulleteDialogVisible(val) {
      this.isShowDialog = true
      this.loading = false
      this.state = 0
      setTimeout(() => {
        this.initRoullete()
      }, 100)
    },
    roulleteIndex(val) {
      if (val <= 0) {
        this.loading = false
        return
      }
      this.processRoullete(this.roulleteIndex)
      setTimeout(() => {
        if (this.roulleteMoney[this.roulleteIndex - 1] > 0){
          this.state = 1
        } else {
          this.state = 2
        }
        this.loading = false
      }, 7000)
    }
  },
  data() {
    return {
      inplayTimeCount: 0,
      calculateTime: null,
      isShowDialog: false,
      isLogoutMessage: false,
      loading: false,
      state: 0
    }
  },
  methods: {
    getBackColor,
    getTextColor,
    currencyFormat,
    initRoullete() {
      var tamanyoRuleta = 300;
      var numeroCasillas = 8;
      var anguloCasillas = 360 / numeroCasillas;
      var grados = (180 - anguloCasillas) / 2;
      var alturaCasilla = Math.tan(grados * Math.PI / 180) * (tamanyoRuleta / 2);
      
      $(".ruleta").css({
        'width' : tamanyoRuleta + 'px',
        'height' : tamanyoRuleta + 'px'
      })

      $('head').append('<style id="afterNumero"></style>');
      
      for(var i=1; i<=numeroCasillas; i++){        
        $(".ruleta").append('<div class="opcion opcion-'+ i +'"></div>');
        var clasS = '.opcion-' + i;
        
        $(clasS).css({
          'transform' : 'rotate(' + anguloCasillas * i + 'deg)',
          // 'border-bottom-color' : getRandomColor()
        });
        
        let strContent = this.roulleteMoney[i-1] == 0 ? '꽝!' : this.currencyFormat(this.roulleteMoney[i-1], "")
        $('#afterNumero').append('.opcion-'+ i +'::before {content: "'+ strContent +'"}');
        
        $(".opcion")
          .attr('data-content', i)
          .attr('data-ancho', (tamanyoRuleta / 2) + 'px')
          .attr('data-line', (tamanyoRuleta / 2) + 'px');
      }
      
      $(".opcion").css({
        'border-bottom-width' : alturaCasilla + 'px',
        'border-right-width' : (tamanyoRuleta / 2) + 'px',
        'border-left-width' : (tamanyoRuleta / 2) + 'px'
      })
    },
    // 입금요청 처리
    async processCoupon() {
      try {
        if (!this.currentUser) {
          return;
        }
        if (this.loading) return

        this.loading = true
        this.$nuxt.$loading.start();
        let res = await reqService.patch(this.roulleteId, {id: this.roulleteId, requestType: 4})
        if (res.code != 1) {
          this.showMessage( "알림메시지", res.message, "닫기[Close]", 0 );
          this.loading = false
          this.$nuxt.$loading.finish();
        }
      } catch (err) {
        this.showMessage( "알림메시지", err.message,  "닫기[Close]", 0 );
        this.loading = false
        this.$nuxt.$loading.finish();
      }
    },
    processRoullete(num) {
      var numeroCasillas = 8;
      var anguloCasillas = 360 / numeroCasillas;
      var numID = 'number-' + num;
      var numID1 = 'number-1' + num;
      
      $('#animacionRuleta').remove();
      $('head').append('<style id="animacionRuleta">'+
        '#number-'+ num +' { animation-name: number-'+ num +'; } '+
        '@keyframes number-'+ num +' {'+
          'from { transform: rotate(0); } '+
          'to { transform: rotate('+ (360 * (numeroCasillas - 1) - anguloCasillas * num) +'deg); }'+
        '}'+
        '#number-1'+ num +' { animation-name: number-1'+ num +'; } '+
        '@keyframes number-1'+ num +' {'+
          'from { transform: rotate(0); } '+
          'to { transform: rotate(' + (22.5 + 360 * (numeroCasillas - 1) - anguloCasillas * num) +'deg); }'+
        '}'+
        '</style>'
      );
      
      $('.ruleta').removeAttr('id').attr('id', numID);
      $('.ruleta-img').removeAttr('id').attr('id', numID1);
    },
    // 메시지 보여주기
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
        type: type
			})
    },
    onClickButton() {
      this.isShowDialog = false
    }
  }
}
    
</script>
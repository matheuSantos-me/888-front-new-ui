<template>
<client-only>
  <div :style="isMobile ? '' : 'margin-top: 50px;'">
    <el-dialog v-if="isShowDialog" :visible.sync="isShowDialog" :width="isMobile ? '100%' : '80%'" top="0px" class="popup-dialog modal fade popuppan in" :custom-class="isMobile ? 'popup-dialog-mobile-general' : 'popup-dialog-general dialog-sign'" :before-close="handleClose" style="display: block">
      <RuleHeader :sportsType="sportsType" :isShowMobile="isShowMobile" />
      <RuleOpened :sportsType="sportsType" />
    </el-dialog>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import RuleOpened from '~/components/Sports/Rule/RuleOpened'
import RuleHeader from '~/components/Sports/Rule/RuleHeader'

export default { 
  props: ["isVisibleSignup", "isShowMobile", "sportsType"],
  name: 'popup',
  components: { RuleOpened, RuleHeader },
  computed: {
    ...mapGetters({ 
      currentUser: 'auth/currentUser',
      myIp: 'getYourIp'    ,
      isMobile: 'getIsMobile',
      showSportsRule: "getShowSportsRule"
    })
  },
  watch: {
    showSportsRule(val) {
      this.isShowDialog = !this.isShowDialog
    }
  },
  data() {
    return {
      isShowDialog: false,
    }
  },
  methods: {
    onClickPopupClose(type, popupIndex) {
      this.isShowDialog = false
    },
    handleClose() {}
  },
}
</script>
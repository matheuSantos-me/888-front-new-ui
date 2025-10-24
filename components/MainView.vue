<template>
<client-only>
    <div :class="`main-bg-logo-${themeType}`" @click="onClickBody">
        <common-view></common-view>
        <DialogTemplate/>
        <CasinoPageModal/>
        <ChatDialog v-if="canChat" />
        <SignUpPopup />
        <OrangeDialog />
        <Poker />
        <RoulleteDialog />
        <CasinoProvider v-if="layoutType == 'layout2' || themeType == 'yellow15'" />
        <EventDialog />

        <div :style="{
        // 'margin-left': contentMarginLeft,
        // 'margin-top': contentMarginTop, 
        // 'margin-right': contentMarginRight
        }" style="transition: all 0.5s ease-out 0s; margin: 0; padding: 0;">
            <nuxt/>
        </div>
    </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import CommonView from '~/components/Common.vue'
import DialogTemplate from '~/components/Dialog/DialogTemplate'
import CasinoPageModal from '~/components/Dialog/CasinoPageModal'
import {setSidePanel} from '~/assets/js/utils'
import ChatDialog from '~/components/Dialog/ChatDialog'
import SignUpPopup from '~/components/Dialog/SignUpPopup'
import OrangeDialog from '~/components/Dialog/OrangeDialog'
import Poker from '~/components/Dialog/Poker'
import RoulleteDialog from '~/components/Dialog/RoulleteDialog.vue'
import CasinoProvider from '~/components/Dialog/CasinoProvider'
import EventDialog from '~/components/Dialog/EventDialog'
// import BackToTop from 'vue-backtotop'

export default {
    components: {
        CommonView,
        DialogTemplate,
        CasinoPageModal,
        ChatDialog,
        SignUpPopup,
        OrangeDialog,
        Poker,
        RoulleteDialog,
        CasinoProvider,
        EventDialog
    },
    computed: {
        ...mapGetters({                         
            isMobile: 'getIsMobile',
            contentMarginTop: "getContentMarginTop",
            contentMarginLeft: "getContentMarginLeft",
            contentMarginRight: "getContentMarginRight",
            screenWidth: "getScreenWidth",
            isJustShowRightPanel: "getIsJustShowRightPanel",
            layoutType: "getLayoutType",
            themeType: "getThemeType",
            canChat: "getCanChat"
        }),
    }, 
    data() {
        return {
        }
    },
    methods: {
        setSidePanel,
        // 바디 클릭
        onClickBody() {
            this.setSidePanel(this.screenWidth, this.$router.currentRoute.name, this.themeType)
            if (this.isJustShowRightPanel) {
                this.$store.commit("SET_SHOWRIGHTPANEL", true)
                this.$store.commit("SET_ISJUSTSHOWRIGHTPANEL", false)
            }
        },
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.btn-to-top {    
    width: 40px;
    height: 40px;
    padding: 0px 0px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
    z-index: 1100;
    border-width: 0px;
    color: #409EFF;
    background-color: white;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    transition: 1s;
}
</style>
<template>
<client-only>
    <div>
        <el-dialog title="자동로그아웃안내" :visible.sync="autoLogoutDialogVisible"
            :custom-class="isMobile ? 'autologout-dialog-mobile-general' : 'autologout-dialog-general'"
            :close-on-click-modal="false" :close-on-press-escape="false" center :show-close="false">
            <div style="display: flex; align-items: center">
                <img :src="'/image/Logos/alarm.png'" class="avatar" style="width:80px; height:80px; border-radius: 50%; ">
                <div>
                    <div>
                        자동 로그아웃 남은시간: 
                    </div>                    
                    <div><span style="color: #67C23A; font-size: 20px;">{{getTTL}}</span>초</div>
                </div>
            </div>            
            <p><span><i style="font-size:20px" class="el-icon-service"></i> 고객님의 안전한 금융거래 보호를 위해 로그인후 약 20분동안 이용이 없어 자동로그아웃됩니다.</span></p>
            <p><span><i style="font-size:20px" class="el-icon-service"></i> 로그인 시간을 연장하시려면 로그인 연장버튼을 클릭하여 주십시요</span></p>
            <span slot="footer" class="dialog-footer">
                <el-button type="warning" size="mini" @click="keepLogin">로그인 연장하기</el-button>
                <el-button type="info" size="mini" @click="logoutNow">지금 로그아웃</el-button>
            </span>
        </el-dialog>
    </div>
</client-only>
</template>

<script>
/**@author Shadow
 * 이 콤포넌트는 자동로그아웃을 위한 콤포넌트이다.
 * 흐름은 유저가 어느 페이에서든지 작업을 하면 store의
 * initTimeLeft뮤테이션을 호출하여 TTL을 초기화 시킨다.
 * 그러면 매 페이지에 들어있는 숨어있는 콤포넌트인 이 AutoLogout콤포넌트가
 * 그 값을 감시하면서 유저가 조작을 진행한 3초후에
 * 백엔트에 토큰을 새로고침하여 expire를 초기화시킨다.
 * (그 부분은 store의 refreshToken액션이 담당한다.)
 * 아무 동작이 없이 19분이 지나면 자동적으로
 * 로그아웃한다는 다일로그를 뛰어 유저의 의사를 물어보며
 * 유저의 응답이 없이 1분이 지나면 자동으로 로그아웃된다.
 * 그리고 현재 유저가 관리측 페이지에 들어와 있는경우에
 * TTL이 100초 남으면 다시 refreshToken을 호출하여
 * 자동로그아웃이 되지 않도록 한다.
 */
import { mapGetters } from 'vuex'

export default {
    computed: {        
        ...mapGetters({
            checkTTL: 'checkTTL',
            getTTL: 'getTTL',
            isMobile: 'getIsMobile',
            getIPAddress: 'getYourIp',
            currentUser: 'auth/currentUser',
            isUseDoor: "getIsUseDoor"
        })
    }, 
    mounted() {
        this.StartThisSessionTimer()
    },
    data() {
        return { autoLogoutDialogVisible: false }
    },
    watch: {
        currentUser(val) {
            this.StartThisSessionTimer()
        },
        getTTL(val){
            if ( val == 1198) 
            {
                //this.$store.dispatch('refreshToken', window.localStorage.getItem('feathers-jwt'))
            }
            else if ( val <= 0) {
                this.$store.commit('clearTTLService');
                this.logoutNow();
                this.showMessage('알림메시지', '6시간 동안 회원님의 활동이 없어 자동로그아웃 되었습니다.', '닫기[Close]', 2)
                return;
            }
        },
        // checkTTL(val) {
        //     if ( val ) this.autoLogoutDialogVisible = true;
        //     else this.autoLogoutDialogVisible = false;
        // }
    },
    methods: {
        StartThisSessionTimer() {
            if (this.currentUser) {
                this.$store.commit('decreaseTimeLeft')
                this.$store.commit('clearTTLService')
                this.$store.commit('setTTLService', setTimeout( this.StartThisSessionTimer, 1000));
            }
        },
        beforeDestroy(){
            this.$store.commit('clearTTLService')
        },
        logoutNow() {
            this.$store.dispatch('auth/logout')
            if (this.isUseDoor) this.$router.push("/Auth/Login")
        },
        keepLogin() {
            this.autoLogoutDialogVisible = false
            this.$store.commit('initTimeLeft', true)
        },
        showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
                type: type
			})
		}
    }
}
</script>
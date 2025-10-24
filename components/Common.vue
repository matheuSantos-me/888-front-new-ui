<template>
<client-only>
    <div>
        <auto-logout></auto-logout>
    </div>
</client-only>
</template>

<script>
import feathers from '@/plugins/feathers'
import { mapGetters } from 'vuex'
import AutoLogout from '~/components/Auth/AutoLogout'

const mainService = feathers.service('main');

export default {
    components: { AutoLogout },
    computed: {
        ...mapGetters({
            currentUser: 'auth/currentUser'
        })
    }, 
    mounted() {
        mainService.off('tokenExpire')
        mainService.on('tokenExpire', async (data) => {
            if(!this.currentUser) return;
            var root = this;
            await feathers.logout().then(async (res) => {
                root.$store.commit('auth/SET_USER', null);
                this.$store.commit('auth/SET_ISLOGINED', false)
                root.$router.push('/')
                root.showMessage('알림메시지', '세션이 만료되었습니다. 재접속하여 이용해주시기 바랍니다.', '닫기[Close]', 2)
            })
        })
        mainService.off('C_login_duplicated')
        mainService.on('C_login_duplicated', async (data) => {
            if(!this.currentUser) return;
            var currentUserIp = data.ip
            var root = this;
            await feathers.logout()
            .then(async (res) => {
                root.$store.commit('auth/SET_USER', null);
                this.$store.commit('auth/SET_ISLOGINED', false)
                root.$router.push('/')
                root.showMessage('알림메시지', currentUserIp + '에서 중복로그인되어 로그아웃됩니다.', '닫기[Close]', 2)
            })
        })
    },
    destroyed() {
        mainService.off('C_login_duplicated')
    },
    methods: {
        // 메시지 모달
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
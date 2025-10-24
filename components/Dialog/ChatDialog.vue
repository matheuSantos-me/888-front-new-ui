<template>
<client-only>
  <div>
    <el-dialog :visible.sync="isShow" width="100%" class="main-dialog chat-dailog" :before-close="handleClose">
      <Chat />
    </el-dialog>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import Chat from '~/components/Chat.vue'

export default { 
  components: {
		Chat
	},
  computed: {
    ...mapGetters({ 
      currentUser: 'auth/currentUser',
      isMobile: 'getIsMobile',
      isShowChatDialog: "getIsShowChatDialog"
    })
  },
  watch: {
    isShowChatDialog(val) {
      this.isShow = true
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleClose() {this.isShow = false}
  },
}
</script>
<template>
<client-only>
  <div>
    <el-scrollbar :class="isMobile ? 'height-400' : 'height-250'" :style="themeType == 'orange11' ? 'border-top: 5px solid #fc6200;' : 'border-top: 5px solid #1f8fff;'" ref="chatScrollBar">
      <div v-for="(chat, index) in chatList" :key="index" class="p-5 text-white" :class="index % 2 == 0 ? 'bg-grey901' : 'bg-black-darker1'">
        <span :class="getTextColor(themeType, 0)">{{chat.userNickName}}:</span> {{ chat.content }}
      </div>
    </el-scrollbar>
    <el-row class="p-5">
      <input v-model="chatContent" class="p-5 float-left m-r-5 text-white" style="width: calc(100% - 37px); background-color: #121212; border: 1px solid #121212; height: 37px; resize: none;" 
        placeholder="채팅내용을 입력해주세요." @keyup.enter="onClickSendChat" />
      <img :src="`${themeType == 'orange11' ? '/image/chat-enter-orange.png' : '/image/chat-enter-blue.png'}`" class="float-left cursor" @click="onClickSendChat">
    </el-row>
  </div>
</client-only>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { getTextColor } from "@/assets/js/data/uicommon"

const chatService = feathers.service('client-chat')
const mainService = feathers.service('main')
chatService.timeout = 60000

export default {
	computed: {
		...mapGetters({
			currentUser: "auth/currentUser",
			isMobile: 'getIsMobile',
			themeType: "getThemeType"
		})
  },
  watch: {
    currentUser(val) {
      this.chatServicePatch()
    }
  },
  data() {
    return {
		chatContent: '',
		chatList: []
    }
  },
	mounted() {
    this.getChatList()

    if (this.currentUser) this.chatServicePatch()
    
		setTimeout(() => {
			this.scrollBottom()
		}, 1000)
	},
	destroyed() {
		mainService.off("chatCreated")
		mainService.off("chatRemoved")
	},
  methods: {
    getTextColor,
		// 채팅패치
    chatServicePatch() {
      mainService.off("chatCreated")
      mainService.on("chatCreated", data => {
        if (this.chatList.length > 30) this.chatList.splice(0, 1)
        this.chatList.push(data)
        setTimeout(() => {
          this.scrollBottom()
        }, 100)
			});
			mainService.off("chatRemoved")
      mainService.on("chatRemoved", data => {
				let index = this.chatList.findIndex(chat => chat.userNickName == data.userNickName && chat.chatCreatedAt == data.createdAt)
				if (index > -1) {
					this.chatList.splice(index, 1)
					setTimeout(() => {
						this.scrollBottom()
					}, 100)
				}
      });
    },
		// 채팅내역얻기
		async getChatList() {
			try {
				let res = await chatService.find()
				if (res.code != 1) {
					console.log(res.message)
				} else {
					this.chatList = res.data.reverse()
				}
			} catch (err) {
				console.log(err.message)
			}
		},
		// 아래로 스크롤
		scrollBottom() {
			let chatScrollBar = this.$refs.chatScrollBar;
      let bodyScrollBox = chatScrollBar.$el.querySelector(".el-scrollbar__wrap");
			bodyScrollBox.scrollTop = bodyScrollBox.scrollHeight;
    },
		// 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
				type: type
			})
		},
		// 채팅보내기
		async onClickSendChat() {
			try {
				if (!this.currentUser) {
					this.showMessage('알림메시지', "로그인후 이용해주세요.", '닫기[Close]', 2)
					return
				}
				this.chatContent = this.chatContent.trim()
				if (this.chatContent == '') {
					this.showMessage('알림메시지', "채팅내용을 입력해주세요.", '닫기[Close]', 2)
					return
				}
				let data = {
					content: this.chatContent
				}
				let res = await chatService.create(data)
				if (res.code != 1) {
					this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
				}
				this.chatContent = ''
			} catch (err) {
				this.showMessage( "알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0 );
			}
		}
  }
}
</script>
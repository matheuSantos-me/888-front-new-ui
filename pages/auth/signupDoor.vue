<template>
<client-only>
  <div class="animated fadeInUpBig panel panel-inverse">
		<div class="panel-heading p-4 width-full" style="background-color: #191e22">
      <el-row class="text-center f-s-16 f-w-700 p-5 m-b-5 m-t-5" :class="getTextColor(themeType, 1)" style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
        <div class="p-10" style="background-color: #171717; border-radius: 5px;">
          회원가입 MEMBER JOIN
          <img :src="`/image/Home/${themeType}/Close.png`" class="cursor float-right" @click="onClickCloseLogin" width="20px">
        </div>
      </el-row>
      <Signup />
		</div>
  </div>
</client-only>
</template>

<script>

import feathers from '@/plugins/feathers'
import { Message } from 'element-ui'
import { mapState, mapMutations, mapGetters } from 'vuex'
import Signup from '~/components/Auth/Signup'
import { getTextColor } from "@/assets/js/data/uicommon"

export default { 
  layout: ({ isBlock }) => isBlock ? 'block' : 'empty',
  middleware: ['block'],
  components: { Signup },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      themeType: 'getThemeType'
    })
  },
  created() {
    if (!this.isMobile) {
      this.$router.push("/Auth/Login")
    }
  },
  methods: {
    getTextColor,
    // 로그인가기
    onClickCloseLogin() {
      this.$router.push("/Auth/Login")
    }
  }
}
</script>
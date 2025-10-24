<template>
<client-only>
  <div class="animated fadeInUpBig panel panel-inverse">
		<div class="panel-heading p-4 width-full" :style="layoutType == 'layout2' ? 'background-color: #16171A' : !isBlackMode ? 'background-color: #fff' : 'background-color: #191e22'">
      <el-row v-if="layoutType != 'layout2'" class="text-center f-s-16 f-w-700 p-5 m-b-5 m-t-5" :class="getTextColor(themeType, 1)" style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
        <div class="p-10" :style="!isBlackMode ? 'background-color: #fff; box-shadow: 0 0 7px rgba(0,0,0,0.5);' : 'background-color: #171717;'" style="border-radius: 5px;">
          회원가입 MEMBER JOIN
        </div>
      </el-row>
      <Signup />
		</div>
  </div>
</client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import Signup from '~/components/Auth/Signup'
import { getTextColor } from "@/assets/js/data/uicommon"

export default { 
  layout: ({ isBlock }) => isBlock ? 'block' : 'client',
  middleware: ['block'],
  components: { Signup },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      isBlackMode: 'getIsBlackMode',
      themeType: 'getThemeType',
      layoutType: "getLayoutType"
    })
  },
  created() {
    if (!this.isMobile) {
      this.$router.push("/")
    }
  },
  methods: {
    getTextColor
  }
}
</script>
<template>
  <el-row class="height-full" :style="themeType == 'white' ? 'background: #fff;' : ''">
    <div id="app" :class="`door-background-${themeType}`">
      <el-scrollbar class="body-scroll" id="bodyScrollBarId" ref="bodyScrollBar">
        <el-row>
          <SignupDialog />
          <DialogTemplate/>
          <Recaptcha v-if="isUseLoginRecaptcha" />
          <el-col :span="24" id="mainBox" ref="mainBox">
            <nuxt/>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import SignupDialog from '~/components/Auth/SignupDialog'
import DialogTemplate from '~/components/Dialog/DialogTemplate'
import Recaptcha from '~/components/Auth/Recaptcha'

export default {
  components: {
    SignupDialog, DialogTemplate, Recaptcha
  },
  computed: {
    ...mapGetters({
      themeType: 'getThemeType',
      isUseLoginRecaptcha: 'getIsUseLoginRecaptcha'
    })
  },
  mounted() {
    document.body.classList.add('game-layout');
  },
  beforeDestroy() {
    document.body.classList.remove('game-layout');
  },
  mounted() {
    window.addEventListener('resize', this.myResizeFunc);
    this.myResizeFunc()
  },
  methods: {
    myResizeFunc() {
      this.$store.commit('SET_CLIENT_SCREENWIDTH', this.$refs.mainBox.$el.clientWidth)
      if (this.$refs.mainBox.$el.clientWidth <= 768) {
        this.$store.commit('SET_ISMOBILE', true)
        if (this.currentUser) {
          this.$store.commit("SET_CONTENTMARGINTOP", "37px")
        } else {
          this.$store.commit("SET_CONTENTMARGINTOP", "52px")
        }
      } else {
        this.$store.commit('SET_ISMOBILE', false)
        this.$store.commit("SET_CONTENTMARGINTOP", "41px")
      }

      if (this.$router.currentRoute.name === 'Sports' || this.$router.currentRoute.name === 'LiveSports') {
        if (this.$refs.mainBox.$el.clientWidth >= 1860 || (this.$refs.mainBox.$el.clientWidth < 1600 && this.$refs.mainBox.$el.clientWidth > 1280)) {
          this.$store.commit("SET_CONTENTMARGINLEFT", "299px")
        } else if (this.$refs.mainBox.$el.clientWidth < 768) {
          this.$store.commit("SET_CONTENTMARGINLEFT", "0px")
        } else {
          this.$store.commit("SET_CONTENTMARGINLEFT", "50px")
        }
      } else {
        if (this.$refs.mainBox.$el.clientWidth >= 1860 || (this.$refs.mainBox.$el.clientWidth < 1440 && this.$refs.mainBox.$el.clientWidth > 1280)) {
          this.$store.commit("SET_CONTENTMARGINLEFT", "299px")
        } else if (this.$refs.mainBox.$el.clientWidth < 768) {
          this.$store.commit("SET_CONTENTMARGINLEFT", "0px")
        } else {
          this.$store.commit("SET_CONTENTMARGINLEFT", "50px")
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
html,
body.game-layout,
body.game-layout #__nuxt,
body.game-layout #__layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

<template>
  <client-only>
    <el-dialog :visible.sync="dialogFormVisible" class="main-dialog"
      :width="isMobile ? '100%' : layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' ? '576px' : layoutType == 'layout6' ? '976px' : '650px'"
      :class="[`dialog-${themeType}`, { 'dialog-signup-orange12': layoutType == 'layout2' && isMobile }]" :before-close="handleClose">
      <img v-if="layoutType == 'layout2' && !isMobile" :src="`/image/login/signup-${themeType}.png`" ref="signupImage" :class="`${themeType}-signup-img`" />
      <Signup />
    </el-dialog>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";
import Signup from "~/components/Auth/Signup";

export default {
  props: ["isVisibleSignup"],
  name: "signup",
  components: { Signup },
  computed: {
    ...mapGetters({
      isMobile: "getIsMobile",
      signupDialogVisible: "getSignupDialogVisible",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
    }),
  },
  watch: {
    signupDialogVisible(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      if (this.dialogFormVisible) {
        setTimeout(() => {
          this.$refs.signupImage.classList.add("signup-img-ani");
        }, 500);
      } else {
        this.$refs.signupImage.classList.remove("signup-img-ani");
      }
      // if (this.layoutType == "layout2" && !this.isMobile) {
      // }
    },
  },
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    handleClose() {},
  },
};
</script>
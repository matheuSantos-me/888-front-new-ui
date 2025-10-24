<template>
  <div class="panel-heading width-full" :class="[!isMobile ? 'p-2' : 'p-0', getPageBackColor(themeType)]">
    <div class="alert alert-info fade in text-left display-inlineblock width-100-pro-10" :class="[!isMobile ? 'm-5' : 'm-0 m-b-5', `bg-page-header-${themeType}`]">
      <img class="float-left" :src="`/image/BettingHistory/${themeType}/Clock.png`">
      <div class="float-left m-l-10 m-t-2 f-w-900">
        배팅내역
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPageBackColor } from "@/assets/js/data/uicommon"

export default {
  computed: {
    ...mapGetters({
      isMobile: 'getIsMobile',
      layoutType: "getLayoutType",
      themeType: "getThemeType"
    })
  },
  methods: {
    getPageBackColor
  }
}
</script>
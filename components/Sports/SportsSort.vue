<template>  
<client-only>
  <el-row class="p-l-50 p-r-15 position-absolute" style="left: 0; top: -15px; z-index: 1000;" :style="isShowMobile ? 'width: 100%' : 'width: 50%'">
    <el-col :span="24">
      <div class="float-left bg-grey911 p-2 m-r-7" style="border-radius: 2px;">
        <el-checkbox class="float-left sports-sort" v-model="isSortBetType" @change="onChangeSortType(false)">인기순정렬</el-checkbox>
      </div>
      <div class="float-left bg-grey911 p-2 m-l-5" style="border-radius: 2px;">
        <el-checkbox class="float-left sports-sort" v-model="isSortTimeType" @change="onChangeSortType(true)">시간대정렬</el-checkbox>
      </div>
    </el-col>
  </el-row>
</client-only>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "SportsSort",
  props: ["sportsType", "isShowMobile"],
  computed: {
    ...mapGetters({
      sortType: "sports/getSortType",
    })
  },
  data() {
    return {
      isSortTimeType: true,
      isSortBetType: false,
    }
  },
  methods: {
    onChangeSortType(type) {
      this.$store.commit("sports/SET_SORT_TYPE", type)
      this.isSortTimeType = type
      this.isSortBetType = !type
    },
  }
}
</script>
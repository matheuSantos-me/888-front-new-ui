<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" class="main-dialog provider-dialog" width="100%" :before-close="handleClose">
      <el-row style="background: #191A1C; color: #fff;">
        <el-row style="background: #1F2124; padding: 16px;">
          게임사
          <img :src="'/image/multi.svg'" class="cursor i-multi float-right" @click="onClose()">
        </el-row>
        <el-row class="p-16">
          <div v-for="item in gameList" :key="item.Id" style="padding: 12px 16px; background: #1F2124; border-radius: 6px; margin-bottom: 16px;" :style="selectedGames == item.Id ? 'background: #272B2E;' : ''" @click="onSelectProvider(item.Id)">
            {{item.Game}}
            <img v-if="selectedGames == item.Id" :src="`/image/Casino/orange12/select.png`" class="float-right m-t-3">
          </div>
        </el-row>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from 'vuex'

const casinoGameService = feathers.service('getCasinoGames')
casinoGameService.timeout = 60000;

export default {
  props: [""],
  computed: {
    ...mapGetters({ 
      providerDialogVisible: "getProviderDialogVisible"
    })
  },
  watch: {
    providerDialogVisible() {
      this.dialogFormVisible = true
    }
  },
  data() {
    return {
      selectedGames: [],                        // 슬롯게임을 위한 선택된 게임사 아이디
      gameList: [],                             // 게임사 리스트
      dialogFormVisible: false
    }
  },
  mounted() {
    this.getGameList()
  },
  methods: {
    handleClose() {},
    onClose() {
      this.dialogFormVisible = false
    },
    // 게임사 리스트 얻기 (라이브, 슬롯)
    getGameList() {
      casinoGameService.find({query: {slot: true}}).then(res => {
        if (res.code != 1) {
          console.log(res.message)
          return
        }
        for(let i = 0; i < res.data.length; i++) {
          let game = {
            Id: res.data[i].thirdPartyCode,
            Game: res.data[i].nameKo,
            status: res.data[i].status
          }
          this.gameList.push(game)
        }
        let all = {
          Id: 0,
          Game: '모든 게임사',
          status: 0
        }
        this.gameList.unshift(all)
        this.selectedGames = this.gameList[0].Id
      })
    },
    onSelectProvider(id) {
      this.selectedGames = id
      this.$store.commit('SET_SELECTEDPROVIDER', id)
      this.onClose()
    }
  }
}
</script>
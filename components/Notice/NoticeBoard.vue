<template>
  <div>
    <el-row v-if="currentUser && noticeBoardIsUse" class="text-white" :class="{ 'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile }">
      <el-row :class="`text-${themeType}`" class="f-s-14 f-w-900 text-center p-16 b-r-6 m-b-8" style="background: #17171A;">
        {{noticeBoardTitle}}
      </el-row>
      <el-row class="m-b-20">
        <div :class="`table-history-${themeType}`" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="table-header">
            <div v-if="!isMobile" class="text-center width-100">번호</div>
            <div class="text-center table-history-flex-field">
              제목
            </div>
            <div class="text-center" :class="isMobile ? 'width-80' : 'width-130'">
              등록일
            </div>
          </div>
          <el-row v-for="(notice, index) in notices" :key="index" role="tab">
            <el-row class="table-history-tr" :class="{ on: (layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6' && showId.findIndex((x) => x == notice._id) > -1) || ((layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1) }">
              <div v-if="!isMobile" class="text-center width-100 table-history-td-first" :class="{'p-t-8 p-b-8': themeType == 'orange12'}">
                {{ index + 1 }}
              </div>
              <div class="cursor text-left table-history-flex-field table-history-td" :class="{'p-t-8 p-b-8': themeType == 'orange12'}" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" :data-target="'#notice' + index" :aria-controls="notice._id"
                @click="onShowContent(notice._id)">
                {{ notice.title }}
              </div>
              <div class="display-center table-history-td" :class="[isMobile ? 'width-80' : 'width-130', {'p-t-8 p-b-8': themeType == 'orange12'}]">
                {{ parseTime(notice.createdAt, '{y}-{m}-{d}')}}
              </div>
            </el-row>
            <el-row>
              <div class="p-0 m-0" :class="themeType == 'gold12' ? 'text-center' : 'text-left'">
                <el-row class="accordion-collapse collapse table-history-content" :id="'notice' + index">
                  <div class="p-20 width-full">
                    <p v-if="notice.imageUrl && notice.imageUrl != ''">
                      <img :src="notice.imageUrl | filterEmblem" :class="{ 'width-full': isMobile }" />
                    </p>
                    <p v-html="notice.content"></p>
                  </div>
                  <el-row v-if="notice.isVote && notice.editMode" class="p-l-16 p-r-16">
                    <el-row class="text-center p-t-8 p-b-8">
                      {{parseTime(notice.createdAt, '{y}-{m}-{d} {h}:{i}')}} ~ {{parseTime((new Date(notice.createdAt)).getTime() + notice.period * 3600000, '{y}-{m}-{d} {h}:{i}')}} 투표하시면 결과가 보입니다.
                    </el-row>
                    <el-row v-if="!isMobile" class="m-b-8">
                      <div v-for="(cItem, cIndex) in notice.votes" :key="`cIndex-${cIndex}`" :class="notice.voteShowMode == 1 ? 'width-50pro' : notice.voteShowMode == 2 ? 'width-33pro' : notice.voteShowMode == 3 ? 'width-25pro' : 'width-full'" class="m-t-8 float-left">
                        <el-checkbox v-model="notice.svotes[cIndex]" @change="onChangeVote(notice._id, cIndex)">{{cItem.content}}</el-checkbox>
                      </div>
                    </el-row>
                    <el-row v-else class="m-b-8">
                      <div v-for="(cItem, cIndex) in notice.votes" :key="`cIndex-${cIndex}`" class="m-t-8 width-full">
                        <el-checkbox v-model="notice.svotes[cIndex]" @change="onChangeVote(notice._id, cIndex)">{{cItem.content}}</el-checkbox>
                      </div>
                    </el-row>
                    <el-row class="m-t-16 display-center">
                      <el-button type="primary" :class="`${themeType}-button`" @click="addVote(notice._id)">투표하기</el-button>
                    </el-row>
                  </el-row>
                  <el-row v-if="notice.isVote && !notice.editMode" class="p-l-16 p-r-16">
                    <el-row class="text-center p-t-8 p-b-8">
                      {{parseTime(notice.createdAt, '{y}-{m}-{d} {h}:{i}')}} ~ {{parseTime((new Date(notice.createdAt)).getTime() + notice.period * 3600000, '{y}-{m}-{d} {h}:{i}')}} ({{notice.voteTotal}}명 참여)
                    </el-row>
                    <el-row v-for="(cItem, cIndex) in notice.votes" :key="`cIndex-${cIndex}`" class="m-b-8">
                      <el-row>
                        {{cItem.content}}
                      </el-row>
                      <el-row class="m-t-4 m-b-4">
                        <span class="float-left">{{ cItem.userList.length + cItem.count }}명</span>
                        <span class="float-right">{{ parseInt((cItem.userList.length + cItem.count) / notice.voteTotal * 100) }}%</span>
                      </el-row>
                      <el-row class="bg-black15 b-r-6">
                        <el-row class="p-18 p-t-7 p-b-7" :class="[getBackColor(themeType, 1), getTextColor(themeType, 2),]" style="border-radius: 10px; min-width: 150px" :style="{ width: parseInt((cItem.userList.length + cItem.count) / notice.voteTotal * 100) + '%' }">                        
                        </el-row>
                      </el-row>
                    </el-row>
                    <el-row class="m-t-16 display-center">
                      <el-button type="primary" :class="`${themeType}-button`" :disabled="!notice.isCancel" @click="deleteVote(notice._id)">투표취소</el-button>
                    </el-row>
                  </el-row>
                  <el-row v-if="notice.voteLevel[currentUser.level - 1].isUse" class="p-16 display-flex">
                    <input type="text" placeholder= "댓글내용을 입력해주세요" v-model="notice.answer" class="m-r-16" :class="`pay-input-${themeType}`">
                    <el-button type="primary" :class="`${themeType}-button`" @click="addAnswer(notice._id, notice.answer, index)">댓글등록</el-button>
                  </el-row>
                  <el-row v-if="notice.answers && notice.answers.length > 0" class="m-t-16 p-16">
                    <el-row v-for="(item, nindex) in notice.answers" :key="`answer-${index}-${nindex}`" style="background: #1C1F21; border-bottom: 1px solid #242424; padding: 8px;">
                      <el-row v-if="item">
                        <el-row>
                          <img :src="getLevelImage()" width="20" class="float-left" />
                          <span class="m-l-8 m-r-8">{{item.nickname}}</span>
                          <span class="text-grey901">{{parseTime(item.createdAt, '{y}-{m}-{d} {h}:{i}')}}</span>
                        </el-row>
                        <el-row class="m-t-8">
                          {{item.content}}
                        </el-row>
                      </el-row>
                    </el-row>
                  </el-row>
                  <el-row v-if="notice.answers && notice.answers.length > 0 && notice.answerTotal > 0" class="display-inlineblock width-full">
                    <el-col :span="24">
                      <div class="block">
                        <el-pagination 
                          :class="`bet-history-paging-${themeType}`" 
                          align="center" 
                          :page-sizes="[5,10,20,30,50]"
                          :page-size="notice.limit" 
                          :current-page.sync="notice.page" 
                          :pager-count="isMobile ? 5 : 9"
                          background 
                          layout="prev, pager, next" 
                          :total="notice.answerTotal" 
                          @current-change="handleCurrentChangeAnswer(notice._id)">
                        </el-pagination>
                      </div>
                    </el-col>
                  </el-row>
                </el-row>
              </div>
            </el-row>
          </el-row>
        </div>
      </el-row>
      <el-row v-if="!isLoading && (!notices || total > 0)" class="display-inlineblock width-full">
        <el-col :span="24">
          <div class="block">
            <el-pagination 
              :class="`bet-history-paging-${themeType}`" 
              align="center" 
              :page-sizes="[5,10,20,30,50]"
              :page-size="listQuery.limit" 
              :current-page.sync="listQuery.page" 
              :pager-count="isMobile ? 5 : 9"
              background 
              layout="prev, pager, next" 
              :total="total" 
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="!isLoading && (!notices || notices.length == 0)" class="width-full display-center">
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          게시판이 존재하지 않습니다.
        </el-row>
      </el-row>
    </el-row>
    <Preview v-show="!currentUser"/>
    <Check v-if="currentUser && !noticeBoardIsUse" :themeType="themeType" />
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import { linkImage } from "~/assets/js/data/datamanagement.js";
import { getTextColor, getBackColor } from "~/assets/js/data/uicommon.js";
import { parseTime } from '~/assets/js/utils'
import Preview from '~/components/Auth/Preview.vue'
import Check from '~/components/Auth/Check.vue'

const noticeService = feathers.service("/client-noticeBoardList");
const noticeAnswerService = feathers.service("/client-noticeBoardAnswerList");
const mainService = feathers.service('main')

noticeService.timeout = 60000;

export default {
  components: { Preview, Check },
  filters: {
    filterEmblem(filename) {
      return linkImage(filename);
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      noticeSettings: "getNoticeSettings",
      noticeBoardTitle: "getNoticeBoardTitle",
      noticeBoardIsUse: "getNoticeBoardIsUse"
    }),
  },
  data() {
    return {
      notices: [],
      total: 0,
      isLoading: true,
      showId: [],
      listQuery: {
        page: 1,
        limit: 20
      }
    };
  },
  mounted() {
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.$store.commit("SET_LEFTSIDEMENUTYPE", 1);

    this.getList();

    if (this.themeType == 'orange12') {
      this.listQuery.limit = 5
    }
    
    // 입출금내역 패치
    mainService.off('noticeBoardUpdated')
    mainService.on('noticeBoardUpdated', (patchData) => {
      let index = this.notices.findIndex(log => log._id == patchData.id)
      if (index > -1) {
        this.notices[index].votes = patchData.votes
        for (let i = 0; i < this.notices[index].votes.length; i++) {
          if (this.notices[index].votes[i].userList.findIndex(vote => vote.userLoginId == this.currentUser.userLoginId) > -1) {
            this.notices[index].svotes.push(true)
          } else {
            this.notices[index].svotes.push(false)
          }
          this.notices[index].voteTotal += this.notices[index].votes[i].userList.length + this.notices[index].votes[i].count
        }
      }
    })
    
    // 입출금내역 패치
    mainService.off('noticeBoardAnswerUpdated')
    mainService.on('noticeBoardAnswerUpdated', (patchData) => {
      let index = this.notices.findIndex(log => log._id == patchData.noteId)
      if (index > -1) {
        this.notices[index].answers.push(patchData)
        this.$forceUpdate();
      }
    })
  },
  methods: {
    getBackColor,
    getTextColor,
    parseTime,
    // 현재 페이지 선택
    getLevelImage() {
      if (this.themeType == 'orange11' || 
          this.themeType == 'orange12' || 
          this.themeType == 'yellow20' || 
          this.themeType == 'yellow21' || 
          this.themeType == 'yellow16' || 
          this.themeType == 'yellow17' || 
          this.themeType == 'yellow19' || 
          this.themeType == 'blue19' || 
          this.themeType == 'blue11' || 
          this.themeType == 'blue12' || 
          this.themeType == 'red13' || 
          this.themeType == 'purple11' || 
          this.themeType == 'purple12') {
        return `/image/level/orange11/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level % 5}.png`
      } else if (this.themeType == 'blue18') {
        let level = this.currentUser.level
        if (level == 8) level = 2
        if (level == 10) level = 11
        return `/image/level/blue/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level}.png`
      } else if (this.themeType == 'yellow18') {
        return `/image/level/grey/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level}.png`
      } else if (
        this.themeType == 'blue17' ||
        this.themeType == 'blue15' ||
        this.themeType == 'blue13' ||
        this.themeType == 'gold11' ||
        this.themeType == 'gold12' ||
        this.themeType == 'gold13' ||
        this.themeType == 'red15' ||
        this.themeType == 'yellow11' ||
        this.themeType == 'yellow14' ||
        this.themeType == 'blue14' ||
        this.themeType == 'blue16' ||
        this.themeType == 'orange13' ||
        this.themeType == 'orange14' ||
        this.themeType == 'red12' ||
        this.themeType == 'red11' ||
        this.themeType == 'yellow12') {
        return `/image/level/yellow/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level}.png`
      } else if (this.themeType == 'yellow13') {
        return `/image/level/yellow13/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level}.png`
      } else if (this.themeType == 'red14') {
        return `/image/level/red/img-${this.currentUser.level < 10 ? '0' : ''}${this.currentUser.level}.png`
      }
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    // 현재 페이지 선택
    handleCurrentChangeAnswer(id) {
      this.getAnswer(id);
    },
    async onShowContent(id) {
      let index = this.showId.findIndex((x) => x == id);
      if (index > -1) {
        this.showId.splice(index);
      } else {
        this.showId.push(id);
      }
      let nIndex = this.notices.findIndex(x => x._id == id)
      if (nIndex > -1) {
        this.notices[nIndex].svotes = []
        this.notices[nIndex].voteTotal = 0
        for (let i = 0; i < this.notices[nIndex].votes.length; i++) {
          if (this.notices[nIndex].votes[i].userList.findIndex(vote => vote.userLoginId == this.currentUser.userLoginId) > -1) {
            this.notices[nIndex].svotes.push(true)
          } else {
            this.notices[nIndex].svotes.push(false)
          }
          this.notices[nIndex].voteTotal += this.notices[nIndex].votes[i].userList.length + this.notices[nIndex].votes[i].count
        }
        if (this.notices[nIndex].votes.length == 0) {
          this.notices[nIndex].isVote = false
        } else {
          this.notices[nIndex].isVote = true
        }
        if (this.notices[nIndex].svotes.findIndex(x => x == true) > -1) {
          this.notices[nIndex].editMode = false
        } else {
          this.notices[nIndex].editMode = true
        }
      }
      this.getAnswer(id)
    },
    async getAnswer(id) {
      let nIndex = this.notices.findIndex(x => x._id == id)
      this.$nuxt.$loading.start();
      let res = await noticeAnswerService.find({ query: {
        id: id,
        page: this.notices[nIndex].page,
        limit: this.notices[nIndex].limit
      }})
      this.notices[nIndex].answers = []
      res.data.data.forEach(data => {
        this.notices[nIndex].answers.push(data)
      });
      this.notices[nIndex].answerTotal = res.data.total
      this.$forceUpdate();
      this.$nuxt.$loading.finish();
    },
    // 공지사항 리스트
    async getList() {
      if (!this.currentUser) return;
      this.$nuxt.$loading.start();
      this.isLoading = true;
      this.notices = [];
      await noticeService
        .find({query: this.listQuery})
        .then((res) => {
          if (res.code != 1) {
            console.log(res.message)
          } else {
            this.notices = res.data.data;
            this.total = res.data.total
            this.notices.forEach(data => {
              data.answer = ""
              data.page = 1
              data.limit = 10
            });
          }
          this.isLoading = false;
          this.$nuxt.$loading.finish();
        })
        .catch((err) => {
          console.log(err.message);
          this.isLoading = false;
          this.$nuxt.$loading.finish();
        });
    },
    async addVote(id) {
      let nIndex = this.notices.findIndex(x => x._id == id)
      if (nIndex == -1) {
        return
      }
      let res = await noticeAnswerService.create({
        id: id,
        votes: this.notices[nIndex].svotes,
        state: 1
      })
      this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      if (res.code == 1) {
        this.notices[nIndex].editMode = false
        this.$forceUpdate();
      }
    },
    deleteVote(id) {
      let nIndex = this.notices.findIndex(x => x._id == id)
      if (nIndex == -1) {
        return
      }
      if (!this.notices[nIndex].isCancel) {
        this.showMessage( "알림메시지", "투표 취소가 불가합니다.", "닫기[Close]", 0 );
        return
      }
      for (let k = 0; k < this.notices[nIndex].svotes.length; k++) {
        this.notices[nIndex].svotes[k] = false
      }

      for (let i = 0; i < this.notices[nIndex].votes.length; i++) {
        let vIndex = this.notices[nIndex].votes[i].userList.findIndex(x => x.userLoginId == this.currentUser.userLoginId)
        if (vIndex > -1) {
          this.notices[nIndex].votes[i].userList.splice(vIndex)
        }
      }
      this.notices[nIndex].editMode = true
    },
    onChangeVote(id, index) {
      let nIndex = this.notices.findIndex(x => x._id == id)
      if (nIndex == -1) {
        return
      }
      if (!this.notices[nIndex].isMultiSelect) {
        for (let i = 0; i < this.notices[nIndex].svotes.length; i++) {
          if (i != index) this.notices[nIndex].svotes[i] = false
        }
      }
      this.$forceUpdate();
    },
    async addAnswer(id, answer, index) {
      this.$nuxt.$loading.start();
      if(answer == "" || answer == null) {
        this.showMessage( "알림메시지", "댓글을 입력해주세요", "닫기[Close]", 0 );
        return;
      }
      let res = await noticeService.create({
        id: id,
        content: answer
      })
      if (res.code != 1) {
        this.showMessage( "알림메시지", res.message, "닫기[Close]", res.code == 1 ? 1 : 0 );
      } else {
        let nIndex = this.notices.findIndex(x => x._id == id)
        this.notices[nIndex].answer = ""
        this.$forceUpdate();
      }
      this.$nuxt.$loading.finish();
    },
		// 메시지 모달
		showMessage(title, content, button, type) {
			this.$store.commit("dialog/SET_DIALOG_DATA", {
				title: title,
				content: content,
				buttonValue: button,
				type: type
			})
		}
  },
};
</script>
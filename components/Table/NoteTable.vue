<template>
  <div>
    <el-row :class="{'p-24': layoutType == 'layout2' && !isMobile, 'p-8 p-t-16': layoutType == 'layout2' && isMobile}">
      <el-row v-if="layoutType != 'layout3' && layoutType != 'layout5' && layoutType != 'layout6'" :class="`note-comment-${themeType}`">
        <div v-if="!isMobile" class="float-left f-w-700" :class="layoutType == 'layout2' ? 'f-s-14 p-t-9' : 'f-s-16 p-t-8'">
          쪽지 리스트
        </div>
        <div class="gametype-button-orange11 float-right m-0" :class="layoutType == 'layout2' ? 'btnstyle-orange12 p-8' : 'red-button1'" @click="onClickDeleteAll">
          <div class="float-left">
            <img v-if="layoutType != 'layout2'" :src="'/image/Money/Delete.png'" :width="isMobile ? '15px' : '20px'" />
            <img v-if="layoutType == 'layout2'" :src="'/image/Money/Ic_delete.png'" />
          </div>
          <div class="float-left p-t-3" :class="layoutType == 'layout2' ? 'm-l-12' : 'm-l-10'">전체삭제</div>
        </div>
        <div class="gametype-button-orange11 float-right m-0 m-r-8 height-42" :class="layoutType == 'layout2' ? 'btnstyle-orange12 p-8' : 'red-button1'" @click="onClickReadAll">
         <div class="float-left p-t-3">전체읽음</div>
        </div>
      </el-row>
      <el-row v-if="layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6'" :class="`note-comment-${themeType}`">
        <div v-if="!isMobile" class="f-w-700 width-full f-s-14 text-center" :class="`text-${themeType}`">
          쪽지함
        </div>
        <div class="gametype-button-orange11 float-right m-0" :class="`${themeType}-button`" style="position: absolute; top: 6px; right: 8px; padding: 7px 10px;" @click="onClickDeleteAll">
          <div class="float-left">
            <img :src="'/image/Money/Ic_delete_other.png'" />
          </div>
          <div class="float-left p-t-3 m-l-12">전체삭제</div>
        </div>
        <div class="gametype-button-orange11 float-right m-0 height-40" :class="`${themeType}-button`" style="position: absolute; top: 6px; right: 125px; padding: 7px 10px;" @click="onClickReadAll">
          <div class="float-left p-t-3">전체읽음</div>
        </div>
      </el-row>
      <el-row class="col-md-12 p-0">
        <div :class="`table-board-${themeType}`">
          <div class="table-header">
            <div class="text-center" :style="isMobile ? 'width: 90px' : 'width: 240px'">
              전달시간
            </div>
            <div class="text-center table-board-flex-field">내용</div>
            <div class="text-center" :style="isMobile ? 'width: 60px' : 'width: 180px'">
              상태
            </div>
            <div
              class="text-center"
              :style="isMobile ? 'width: 60px' : 'width: 100px'"
            ></div>
          </div>
          <el-row v-for="(note, index) in notes" :key="index">
            <el-row class="table-board-tr" :class="{'on': (layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && index % 2 == 1}">
              <div
                class="text-center table-board-td-first"
                :style="isMobile ? 'width: 90px' : 'width: 240px'"
              >
                {{ note.createdAt | parseTime }}
              </div>
              <div
                class="text-left table-board-td table-board-flex-field cursor"
                data-toggle="collapse"
                :data-target="'#note' + index"
                aria-expanded="false"
                :aria-controls="'note' + index"
                @click="setNoteReadStatus(note._id, index)"
              >
                {{ note.title }}
              </div>
              <div class="text-white table-board-td display-center" :style="isMobile ? 'width: 60px' : 'width: 180px'">
                <div :class="note.notestatuses && (note.notestatuses.length != 0) | statusCustomerClassObject(themeType)">
                  {{ note.notestatuses && note.notestatuses.length == 0 ? "대기" : "읽음" }}
                </div>
              </div>
              <div class="table-board-td display-center" :style="isMobile ? 'width: 60px' : 'width: 100px'">
                <div
                  v-if="layoutType == 'layout1' && new Date(note.createdAt).getTime() < threeDayBefore.getTime()"
                  class="red-button1 width-50 p-t-3 p-b-3 cursor"
                  style="margin: 0 auto"
                  @click="onDeleteNote(note._id, index)"
                >
                  <img :src="'/image/Money/Delete.png'" :width="isMobile ? '12px' : '20px'" />
                </div>
                <img v-if="(layoutType == 'layout2' || layoutType == 'layout3' || layoutType == 'layout5' || layoutType == 'layout6') && new Date(note.createdAt).getTime() < threeDayBefore.getTime()"
                  :src="layoutType == 'layout2' ? '/image/Money/Ic_delete.png' : '/image/Money/Ic_delete_other.png'" class="cursor" @click="onDeleteNote(note._id, index)" />
              </div>
            </el-row>
            <el-row>
              <div class="collapse width-full table-board-content" :id="'note' + index">
                <el-row class="p-10 work-keep">
                  <p style="white-space: pre-line" v-html="note.content" :class="{'text-yellow902': themeType == 'orange14'}"></p>
                </el-row>
              </div>
            </el-row>
          </el-row>
        </div>
      </el-row>
      <el-row v-if="!notes || notes.length === 0" class="width-full display-center">
        <el-row class="p-t-24 p-b-48">
          <el-row v-if="layoutType == 'layout2'" class="text-center">
            <img :src="`/image/Home/${themeType}/logo3.png`" class="m-b-24" />
          </el-row>
          쪽지가 존재하지 않습니다.
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import feathers from "@/plugins/feathers";
import { mapGetters } from "vuex";
import {
  statusCustomerClassObject
} from "~/assets/js/data/uicommon.js";
import { parseTime } from "~/assets/js/utils";

const noteClientService = feathers.service("client_note");
noteClientService.timeout = 60000

export default {
  filters: {
    parseTime: parseTime,
    statusCustomerClassObject: statusCustomerClassObject,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isMobile: "getIsMobile",
      noteCount: "getNoteCount",
      themeType: "getThemeType",
      layoutType: 'getLayoutType',
      newNote: "getNewNote"
    }),
  },
  watch: {
    newNote(val) {
      if (val) {
        this.getList();
        this.$store.commit("SET_NEWNOTE", null);
      }
    },
  },
  data() {
    return {
      notes: null,
      loadingDelete: false,
      threeDayBefore: new Date(),
    };
  },
  mounted() {
    this.getList();
    this.$store.commit("betslip/SET_BETSLIPLIST", []);
    this.threeDayBefore.setDate(this.threeDayBefore.getDate() - 3);
  },
  methods: {
    // 쪽지리스트
    async getList() {
      try {
        if (!this.currentUser) return;
        this.$nuxt.$loading.start();
        this.notes = [];

        let res = await noteClientService.find({ query: { type: 0 } });
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.notes = res.data;
        }
        this.$nuxt.$loading.finish();
      } catch (err) {
        console.log(err.message);
        this.$nuxt.$loading.finish();
      }
    },
    // 쪽지읽음패치
    async setNoteReadStatus(id, index) {
      if (!this.currentUser) return;
      if (this.notes[index].status === 0) {
        let readRes = await noteClientService.patch(id, { status: 1 });
        if (readRes.code != 1) {
          console.log(readRes.message)
        }
      }
      noteClientService.create({ noteId: id }).then((res) => {
        if (res.code == 1) {
          if (this.noteCount > 0)
            this.$store.commit("SET_NOTECOUNT", this.noteCount - 1);
          if (this.notes[index].notestatuses == null || this.notes[index].notestatuses == undefined) {
            this.notes[index].notestatuses = []
          }
          this.notes[index].notestatuses.push(res.data);
        }
      });
    },
    // 쪽지삭제
    onDeleteNote(id, index) {
      if (this.loadingDelete || !this.currentUser) return
      
      this.loadingDelete = true
      noteClientService.remove(id).then((res) => {
        if (res.code != 1) {
          console.log(res.message)
        } else {
          this.notes.splice(index, 1);
        }
        this.loadingDelete = false
      }).catch(err => {
        console.log(err.message)
        this.loadingDelete = false
      })
    },
    // 쪽지전체삭제
    async onClickDeleteAll() {
      try {
        if (this.loadingDelete || !this.currentUser) return

        this.loadingDelete = true
        this.$nuxt.$loading.start();
        let res = await noteClientService.find({ query: { type: 1 } });
        if (res.code != 1) {
          this.loadingDelete = false
          this.$nuxt.$loading.finish();
          return;
        }
        for (let index = 0; index < res.data.length; index++) {
          await noteClientService.remove(res.data[index]._id);
        }

        this.notes.splice(0, this.notes.length);
        this.$store.commit("SET_NOTECOUNT", 0);
        this.showMessage("알림메시지", "쪽지함의 쪽지들이 삭제되었습니다.", "닫기[Close]", 1);
        this.loadingDelete = false
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
        this.loadingDelete = false
        this.$nuxt.$loading.finish();
      }
    },
    // 쪽지전체읽음
    async onClickReadAll() {
      try {
        if (this.loadingDelete || !this.currentUser) return

        this.loadingDelete = true
        this.$nuxt.$loading.start();
        let res = await noteClientService.find({ query: { type: 2 } });
        if (res.code != 1) {
          this.loadingDelete = false
          this.$nuxt.$loading.finish();
          return;
        }
        for (let index = 0; index < res.data.length; index++) {
          let readRes = await noteClientService.create({ noteId: res.data[index]._id });
          if (this.notes[index] == null || this.notes[index] == undefined) break;
          if (this.notes[index].notestatuses == null || this.notes[index].notestatuses == undefined) {
            this.notes[index].notestatuses = []
          }
          this.notes[index].notestatuses.push(readRes.data);
        }

        this.$store.commit("SET_NOTECOUNT", 0);
        this.loadingDelete = false
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.showMessage("알림메시지", `[오류메시지]: ${err.message}`, "닫기[Close]", 0);
        this.loadingDelete = false
        this.$nuxt.$loading.finish();
      }
    },
    // 모달
    showMessage(title, content, button, type) {
      this.$store.commit("dialog/SET_DIALOG_DATA", {
        title: title,
        content: content,
        buttonValue: button,
        type: type,
      });
    },
  },
};
</script>
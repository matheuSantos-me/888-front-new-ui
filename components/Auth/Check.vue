<template>
<client-only>
  <div class="position-absolute position-absolute-zindex-100 top-0 left-0 width-full height-full p-0 m-0" data-height="100%">
    <div class="position-absolute position-absolute-zindex-1 bg-black-darker2 alpha-30 width-full height-full p-0 m-0"></div>
    <div class="position-absolute position-absolute-zindex-10 width-full height-full p-0 m-0">
      <table align="center">
        <tbody>
          <tr>
            <td>
              <center>
                <div class="col-md-3 col-sm-6 width-250 m-t-150 p-t-15">
                  <div v-if="themeType != 'orange12'" class="widget widget-stats p-0">
                    <img :src="'/image/Lock.png'" width="100%">
                  </div>
                  <div v-else class="display-center text-white f-s-16 f-w-900 word-keep">
                    <el-row>
                      <el-row>
                        <img :src="'/image/Mini/Ic_lock.png'" class="m-b-20">
                      </el-row>
                      현재 점검중으로 이용이 불가능합니다.
                    </el-row>
                  </div>
                </div>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</client-only>
</template>

<script>
export default {
  props: ["themeType"]
}
</script>
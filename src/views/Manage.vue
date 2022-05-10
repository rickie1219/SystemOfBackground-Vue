<template>
  <div class="content-manage" style="height: 100%">
    <el-container style="height: 100%">
      <Aside :width="sideWith + 'px'"
             :logoTextShow="isAsideTextShow"
             @asideEvent="receivedAsideMsg">
      </Aside>
      <el-container>
        <el-header style="background-color: antiquewhite; padding: 0 0px;">
          <Header :sendParam="sendToHeader" @headerEvent="receivedHeaderMsg" />
        </el-header>
        <el-main style="background-color: cadetblue; padding: 0px">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
// @ is an alias to /src

import Aside from "../components/Aside";
import Header from "../components/Header";

export default {
  name: 'Manage',
  components: {
    Aside,
    Header
  },
  data () {
    return {
      // 父组件传给子组件的值
      isAsideTextShow: false,
      sideWith: 200,
      sendToHeader: '首页'
    }
  },
  methods:{
    receivedHeaderMsg(val) {
      // 点击收缩按钮触发折叠展开，收到的消息
      //console.log('【折叠 false 还是 展开 true】 《===》 val = ' + val)
      if (val) {
        //console.log('1111 == 展开 true ')
        this.isAsideTextShow = true
        this.sideWith = 64
      } else {
        //console.log('2222 == 折叠 false ')
        this.isAsideTextShow = false
        this.sideWith = 200
      }
    },
    receivedAsideMsg(msg) {
      console.log("receive msg = " + msg)
      this.sendToHeader = msg
    }
  },
  return: {

  }
}
</script>

<style>

</style>



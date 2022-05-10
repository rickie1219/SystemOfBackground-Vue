<template>
  <el-header>
    <!-- 左侧 展开/收缩 导航栏的按钮 -->
    <div class="nav-btn-expand" style="color: #F8F8FF; flex: 1; font-size: 25px; display: inline-block; float: left">
      <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
      <!-- 页签 -->
      <el-breadcrumb class="nav-title-name" separator="/" style="color: #F8F8FF; display: inline-block; font-size: 20px; margin-left: 10px">
        <!-- :to="{ path: '/' }" 设置路由 -->
        <el-breadcrumb-item class="header-nav-title">{{ sendParam }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右侧 用户的信息 -->
    <el-dropdown style="width: 80px; cursor: pointer; display: inline-block; float: right;">
      <span style="color: #F8F8FF;">王小虎</span>
      <i class="el-icon-arrow-down" style="color: #F8F8FF; margin-left: 5px"></i>
      <el-dropdown-menu slot="dropdown" style="text-align: center; width: 100px">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  props: {
    sendParam: String
  },
  data() {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isUnfold: false
    }
  },
  methods: {
    collapse() {
      // 点击收缩按钮触发是否折叠
      this.isUnfold = !this.isUnfold;
      //console.log('this.isCollapse = ' + this.isUnfold);
      if (this.isUnfold) {
        //console.log('展开');
        this.collapseBtnClass = 'el-icon-s-unfold'
      } else {
        //console.log('折叠');
        this.collapseBtnClass = 'el-icon-s-fold'
      }
      this.$emit('headerEvent', this.isUnfold);
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #7B685E;
  color: #F8F8FF;
  line-height: 60px;
  display: flex;
}
.header-nav-title:first-child {
  color: #F8F8FF;
}
.el-breadcrumb-item:first-child {
  color: #F8F8FF;
}

</style>
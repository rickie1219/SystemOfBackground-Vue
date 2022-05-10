<template>
  <el-aside :width="sideWith + 'px'" >
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             :collapse="logoTextShow"
             background-color="#483D8B"
             text-color="#fff"
             :collapse-transition="false"
             style="height: 100%"
             active-text-color="#ffd04b">
      <div style="height: 60px; line-height: 60px; text-align: center" @click="clickManage">
        <img style="width: 20px;
            position: relative;
            top: 5px;
            margin-right: 4px" src="@/assets/logo.png">
        <b style="color: white" v-show="!logoTextShow">后台管理系统</b>
      </div>
      <router-link class="nav-link " to="/home">
        <el-menu-item index="1" @click="clickHome">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">系统管理</span>
        </template>
        <router-link class="nav-link " to="/user">
          <el-menu-item index="2-1" @click="clickUserManage">用户管理</el-menu-item>
        </router-link>
        <router-link class="nav-link " to="/book">
          <el-menu-item index="2-2" @click="clickBookManage">书籍管理</el-menu-item>
        </router-link>
        <router-link class="nav-link " to="/hobby">
          <el-menu-item index="2-3" @click="clickHobbyManage">爱好管理</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link class="nav-link " to="/file">
        <el-menu-item index="3" @click="clickFileManage">
          <i class="el-icon-document"></i>
          <span slot="title">文件管理</span>
        </el-menu-item>
      </router-link>
      <router-link class="nav-link " to="/setting">
        <el-menu-item index="4" @click="clickSettingManage">
          <i class="el-icon-setting"></i>
          <span slot="title">设置管理</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  props: {
    logoTextShow: Boolean,
    sideWith: String
  },
  data () {
    return {

    }
  },
  methods: {
    clickManage() {
      // 点击的顶部 logo 的时候，返回到首页
      const redirect = decodeURIComponent(this.$route.query.redirect || '/manage')
      this.$router.push({path: redirect})
    },
    clickHome() {
      this.$emit('asideEvent', "首页");
    },
    clickUserManage() {
      this.$emit('asideEvent', "用户管理");
    },
    clickBookManage() {
      this.$emit('asideEvent', "书籍管理");
    },
    clickHobbyManage() {
      this.$emit('asideEvent', "爱好管理");
    },
    clickFileManage() {
      this.$emit('asideEvent', "文件管理");
    },
    clickSettingManage() {
      this.$emit('asideEvent', "设置管理");
    }
  },
  return: {

  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-aside {
  color: #333;
}
.el-menu {
  border-right: 0px #e6e6e6;
}
.router-link-active {
  /*点击时，去掉下划线*/
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
<template>
  <div class="content-login" style="height: 100%">
    <el-container style="height: 100%;">
      <el-header style="width: 100%; height: 60px; background-color: lightsalmon">
        <div style="text-align: center; height: 60px; line-height: 60px">
          这是网站头部
        </div>
      </el-header>
      <el-main style="flex: 1; padding: 0; height: 100%">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" align="middle" style="height: 100%">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div style="text-align: center">后台管理系统</div>
              <img style="text-align: center" src="@/assets/logo.png">
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div>账号：</div>
              <el-input
                  placeholder="请输入账号"
                  v-model="inputAccount"
                  clearable>
              </el-input>
              <div>验证码：</div>
              <el-input
                  placeholder="请输入验证码"
                  v-model="inputCode"
                  clearable>
              </el-input>
              <el-button type="primary" round @click="changeCaptcha">发送验证码</el-button>
<!--              <img class="login-captcha" alt="" src="/assets/captcha?t=1652684520591">-->
              <img alt="" src="" @click="changeCaptcha"/>
              <div>密码：</div>
              <el-input
                  placeholder="请输入密码"
                  v-model="inputPassword"
                  clearable
                  show-password>
              </el-input>

              <el-button type="primary" round @click="handleLogin" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
              <el-button type="warning" round @click="handleRegister">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer style="width: 100%; height: 60px; background-color: darkcyan">
        <div style="text-align: center; height: 60px; line-height: 60px">
          这是网站版权说明
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Login",
  data() {
    return {
      inputAccount: '',
      inputCode: '',
      inputPassword: '',
      fullscreenLoading: false
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      var url = '/login/getCaptcha'
      request(url, {
        method: 'get'
      }).then(res => {
        console.log('11111111')
        console.log(res)
      })
    },
    changeCaptcha(url) {
      this.getCaptcha()
      url = "/login/getCaptcha" + "?t" + (new Date()).getTime()
    },
    handleSendCode() {
      console.log('发送验证码')
      console.log('输入的验证码是： ' + this.inputCode)
      // 判空 账号是否为空，是否合法
      if (this.inputAccount == null || this.inputAccount == '') {
        console.log('账号为空，请输入账号')
      }
    },
    handleLogin() {
      console.log('请求登录')
      console.log('输入的验证码是： ' + this.inputCode)
      console.log('输入的账号是： ' + this.inputAccount)
      console.log('输入的密码是： ' + this.inputPassword)

      this.fullscreenLoading = true;

      // 判断 账号是否合法，验证码是否合法，密码是否合法
      var url = '/login/login'
      request(url, {
        data: {
          email: this.inputAccount,
          password: this.inputPassword,
        },
        method: 'post'
      }).then(res => {
        if (res.code == 0) {
          // 登录成功
          console.log('登录成功 = ' + res)
          const redirect = decodeURIComponent(this.$route.query.redirect || '/manage')
          this.$router.push({path: redirect})
        } else {
          // 登录失败
          console.log('登录失败 = ' + res)
        }
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      })
    },
    handleRegister() {
      console.log('请求注册')
      console.log('输入的验证码是： ' + this.inputCode)
      console.log('输入的账号是： ' + this.inputAccount)
      console.log('输入的密码是： ' + this.inputPassword)
      this.fullscreenLoading = true;
      var url = '/login/register'
      request(url, {
        data: {
          accountEmail: this.inputAccount,
          password: this.inputPassword,
          code: this.inputCode
        },
        method: 'post'
      }).then(res => {
        console.log('注册成功 = ' + res)
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      })
    }
  }
}
</script>

<style scoped>
.bg-purple {
  background: #d3dce6;
}
</style>
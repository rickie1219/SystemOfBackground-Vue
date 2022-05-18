<template>
  <div class="content-login-new">
    <form class="login-form">
      <h1>用户登录</h1>
      <el-input
          class="login-account"
          placeholder="请输入手机号"
          prefix-icon="el-icon-search"
          v-model="input1">
      </el-input>

      <el-input
          class="login-password"
          placeholder="请输入密码"
          prefix-icon="el-icon-search"
          v-model="input2">
      </el-input>

      <div class="captcha-area">
        <el-input
            class="login-captcha"
            placeholder="请输入验证码"
            prefix-icon="el-icon-search"
            v-model="input3">
        </el-input>
        <img src="@/assets/icon-login.png" style="width: 100px; height: 50px">
      </div>

      <!-- `checked` 为 true 或 false -->
      <el-checkbox v-model="checked">记住我</el-checkbox>
      <el-button type="primary">登录</el-button>
      <el-button type="text" style="color: darkgray">忘记密码？</el-button>
      <el-button type="text" style="color: lightsalmon">注册账号</el-button>

    </form>
  </div>
</template>

<script>
export default {
  name: "LoginNew",
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      checked: false
    }
  }
}
</script>

<style scoped>

.content-login-new:before {
  content: "";
  background-color: rgba(0, 0, 0, .2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login-form {
  padding: 25px 30px;
  background-color: #fff;
  box-shadow: 0 3px 6px -1px rgb(0 0 0 / 19%);
  box-sizing: border-box;
  border-radius: 4px;
}
h2 {
  color: #333;
  font-size: 18px;
  text-align: center;
  margin-bottom: 25px;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.login-account {
  margin-bottom: 25px;
}
.login-password {
  margin-bottom: 25px;
}
.login-captcha {
  margin-bottom: 25px;
}


</style>
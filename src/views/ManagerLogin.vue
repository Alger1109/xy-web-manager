<template>
  <div class="login-page">
    <div class="loginbody">
      <div class="logintext">
        <h1>Hello!欢迎登录后台</h1>
      </div>
      <div class="formdata">
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="100px"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="butt">
          <div class="autologin">
            <el-checkbox v-model="checked">下次自动登陆</el-checkbox>
          </div>
          <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
      rules: {
        account: [{ required: true }],
        password: [{ required: true }],
      },
      checked: false,
    };
  },
  methods: {
    submitForm(loginForm) {
      console.log(loginForm);
    },
  },
};
</script>
<style lang="scss">
.login-page {
  .loginbody {
    width: 450px;
    height: 550px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(42, 42, 42);
    .logintext {
      line-height: 150px;
      text-align: center;
      color: #fff;
    }
    .formdata {
      .el-form-item {
        .el-form-item__label {
          color: white;
        }
        .el-input {
          width: 280px;
        }
      }
      .butt {
        width: 450px;
        margin-top: 50px;
        text-align: center;
        .autologin {
          margin-right: 140px;
          margin-bottom: 20px;
          .el-checkbox {
            color: #fff;
          }
        }
        .el-button {
          margin-left: 28px;
          padding: 15px 125px;
        }
      }
    }
  }
}
</style>

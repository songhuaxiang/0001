<template>
  <div class="login-bg">
    <h1>安全隐患数据管理系统</h1>
    <div class="demo-input-suffix">
      <!-- <el-input
        v-model="username"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        class="input1"
      >
      </el-input>
      <el-input
        class="input2"
        v-model="password"
        placeholder="请输入密码"
        type="password"
        prefix-icon="el-icon-lock"
      ></el-input>
      <el-button @click="btnLogin" class="btn1">登录</el-button>
      <el-button @click="reset" class="btn2">重置</el-button>
      <div class="newUser_forgetPsd">
        <span>用户注册</span>
        <span>|</span>
        <span>忘记密码</span> -->
      <!-- </div> -->
    </div>
    <div class="input">
      <el-input
        v-model="username"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        class="input1"
      >
      </el-input>
      <el-input
        class="input2"
        v-model="password"
        placeholder="请输入密码"
        type="password"
        prefix-icon="el-icon-lock"
      ></el-input>
      <el-button @click="btnLogin" class="btn1">登录</el-button>
      <el-button @click="reset" class="btn2">重置</el-button>
      <div class="newUser_forgetPsd">
        <span>用户注册</span>
        <span>|</span>
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    async btnLogin() {
      if (this.username == "") {
        this.$message.error("输入");
      }
      if (this.password == "") {
        this.$message.error("密码");
      }
      let res = await this.$store.dispatch("a_getuserinfo", {
        username: this.username,
        password: this.password,
      });
      if (res.data.code == 0) {
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        this.$router.push({
          path: "/",
        });
        this.$message.success(res.data.data);
      } else {
        this.$message.error(res.data.data);
      }
    },
    reset() {
      (this.username = ""), (this.password = "");
    },
  },
  created() {
    let user = localStorage.getItem("userinfo");
    if (user == null) {
      return;
    } else {
      this.$router.push({
        path: "/",
      });
    }
  },
};
</script>

<style lang="less" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  background: url(../assets/6.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    position: absolute;
    top: 10%;
    left: 20.05%;
    font-family: KaiTi;
    font-size: 80px;
    text-shadow: 20px 20px 5px rgb(253, 253, 253);
    color: rgb(4, 109, 74);
  }
  .demo-input-suffix {
    width: 30%;
    height: 50%;
    margin-top: 10%;
    background: rgb(243, 241, 241);
    border-radius: 3%;
    opacity: 0.5;
    // .input1 {
    //   margin-top: 5%;
    // }
    // .input2 {
    //   margin-top: 3%;
    // }
    // .btn1 {
    //   margin-top: 5%;
    //   margin-left: 28%;
    // }
    // .btn2 {
    //   margin-top: 5%;
    //   margin-left: 10%;
    // }
    // .newUser_forgetPsd {
    //   font-size: 14px;
    //   width: 32%;
    //   margin-top: 30%;
    //   margin-left: 37%;
    // }
  }
  .input {
    width: 30%;
    height: 50%;
    position: absolute;
    bottom: 15%;
    .input1 {
      margin-top: 5%;
    }
    .input2 {
      margin-top: 3%;
    }
    .btn1 {
      margin-top: 5%;
      margin-left: 28%;
    }
    .btn2 {
      margin-top: 5%;
      margin-left: 10%;
    }
    .newUser_forgetPsd {
      font-size: 14px;
      width: 32%;
      margin-top: 30%;
      margin-left: 37%;
    }
  }
}
</style>
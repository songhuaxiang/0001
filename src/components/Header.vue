<template>
  <div class="header">
    <div class="logo"><img src="../assets/logo3.jpg" /></div>
    <div class="header-menu"><h2>安全隐患管理系统</h2></div>
    <div class="userinfo">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="username">{{ username1 }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <p style="cursor: pointer" @click="back">退出登录</p>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username1: "",
      token: "",
    };
  },
  methods: {
    getinfo(param) {
      if (param == "") {
        let user = JSON.parse(localStorage.getItem("userinfo"));
        this.username1 = user.username;
      }
    },
    async back() {
      let resClear = await this.$store.dispatch("a_clearuserinfo", {
        username: JSON.parse(localStorage.getItem("userinfo")).token,
      });
      if (resClear.data.code == 0) {
        localStorage.clear();
        this.$router.push({
          path: "/login",
        });
        this.$message.success(resClear.data.data);
        this.username1 = "未登录";
      } else {
        this.$message.error(resClear.data.data);
      }
    },
  },
  created() {},
  mounted() {
    let user = JSON.parse(localStorage.getItem("userinfo"));
    if (user.code == 0) {
      this.username1 = user.username;
    }
  },
};
</script>

<style scoped lang="less">
.header {
  // height: 10%;
  display: flex;
  .logo {
    flex: 3;
    // background: rgb(229, 3, 236);
    height: 10vh;
    img {
      height: 12vh;
      width: 20vh;
    }
  }
  .header-menu {
    flex: 11;
    background: rgb(4, 109, 74);
    height: 10vh;
    font-size: 30px;
    line-height: 10vh;
    color: rgb(253, 253, 253);
    padding-left: 1%;
    // text-shadow: 50px 5px 5px;
  }
  .userinfo {
    flex: 2;
    // background: rgb(236, 174, 3);
    text-align: center;
    padding-top: 1.5%;
    height: 6.9vh;
    .el-dropdown-link {
      cursor: pointer;
      color: rgb(4, 109, 74);
      font-weight: 600;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>

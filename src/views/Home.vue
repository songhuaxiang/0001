<template>
  <div class="home">
    <div class="up-header">
      <Header ref="son" />
    </div>
    <div class="down">
      <Menu class="menu" />
      <router-view class="content" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  data() {
    return {
      userinfo: "",
    };
  },
  components: {
    Header,
    Menu,
  },
  mounted() {
    this.$refs.son.getinfo(this.userinfo);
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .up-header {
    flex: 1;
  }
  .down {
    flex: 9;
    // background: green;
    display: flex;
    .menu {
      flex: 3;
      background: rgb(4, 109, 74);
    }
    .content {
      flex: 13;
      // background: greenyellow;
    }
  }
}
</style>

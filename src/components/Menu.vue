<template>
  <div class="menu">
    <el-menu class="el-menu-vertical-demo" router :unique-opened="true">
      <div v-for="item in menuFather" :key="item.index">
        <el-menu-item
          :index="item.index"
          v-if="item.children == void 0"
          :route="{ path: item.path }"
        >
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu :index="item.index" v-if="item.children">
          <template slot="title">
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="itemSon in item.children"
            :key="itemSon.index"
            :index="itemSon.index"
            :route="{ path: itemSon.path }"
            >{{ itemSon.name }}</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuFather: [
        {
          index: "6",
          name: "首页",
          path: "/DefaultPage",
        },
        {
          index: "1",
          name: "综合业务管理",
          path: "/comprehensive-Institutions",
          children: [
            {
              index: "1-1",
              name: "法规制度管理",
              path: "/comprehensive-Institutions",
            },
            {
              index: "1-2",
              name: "文件通知管理",
              path: "/comprehensive-notice",
            },
            {
              index: "1-3",
              name: "简报及报送管理",
              path: "/comprehensive-bulletin",
            },
            {
              index: "1-4",
              name: "组织机构",
              path: "/comprehensive-organization",
            },
            {
              index: "1-5",
              name: "通讯录",
              path: "/comprehensive-addressBook",
            },
          ],
        },
        {
          index: "2",
          name: "安全统计分析",
          path: "/statistical-event",
          children: [
            {
              index: "2-1",
              name: "安全事件报告",
              path: "/statistical-event",
            },
            {
              index: "2-2",
              name: "安全工作报表",
              path: "/statistical-statement",
            },
            {
              index: "2-3",
              name: "事故系统分析",
              path: "/statistical-analyze",
            },
            {
              index: "2-4",
              name: "安全天数管理",
              path: "/statistical-days",
            },
          ],
        },
        {
          index: "3",
          name: "安全监督管理",
          path: "/supervision-work",
          children: [
            {
              index: "3-1",
              name: "到岗到位管理",
              path: "/supervision-work",
            },
            {
              index: "3-2",
              name: "反违章管理",
              path: "/supervision-illegal",
            },
            {
              index: "3-3",
              name: "安全措施管理",
              path: "/supervision-measures",
            },
            {
              index: "3-4",
              name: "监督检查管理",
              path: "/supervision-inspector",
            },
          ],
        },
        {
          index: "4",
          name: "安全隐患管理",
          path: "/Hidden-process",
          children: [
            {
              index: "4-1",
              name: "隐患流程管理",
              path: "/Hidden-process",
            },
            {
              index: "4-2",
              name: "定期/专项排查",
              path: "/Hidden-screening",
            },
            {
              index: "4-3",
              name: "隐患系统分析",
              path: "/Hidden-analyze",
            },
          ],
        },
        {
          index: "5",
          name: "系统管理",
          path: "/system-organization",
          children: [
            {
              index: "5-1",
              name: "组织机构管理",
              path: "/system-organization",
            },
            {
              index: "5-2",
              name: "权限管理",
              path: "/system-permissions",
            },
            {
              index: "5-3",
              name: "用户问题反馈",
              path: "/system-feedback",
            },
          ],
        },
      ],
    };
  },
  // computed: {
  //   hasChildren() {
  //     return this.menuFather.filter(function (item) {
  //       return item.children;
  //     });
  //   },
  // },
};
</script>

<style lang="less" scoped>
.menu {
  // width: 50%;
  .el-menu-vertical-demo {
    width: 100%;
    border: none;
  }
}
</style>
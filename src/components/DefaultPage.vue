<template>
  <div class="default-page">
    <div class="default-page-up">
      <div class="bigImg">
        <div class="bigImg-size">
          <el-carousel trigger="click" height="47vh">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3 class="small">{{ item }}</h3> -->
              <div class="img-title"></div>
              <div class="title-2">公司党组传达贯彻国务院常务会议精神</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="imporNews">
        <div class="imporNews-title">要闻公告</div>
        <div class="imporNews-content">
          <ul>
            <li :key="item.index" v-for="item in news">
              <a href="">{{ item.title }}</a>
              <span @click="getDate">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="default-page-down">
      <div class="toDo">
        <div class="toDo-title">我的待办</div>
        <div class="toDo-content">
          <ul :key="item.index" v-for="item in todo">
            <li>{{ item.name }} {{ item.num }}</li>
          </ul>
        </div>
      </div>
      <div class="file">
        <div class="file-title">文件通知</div>
        <div class="file-content">
          <ul>
            <li :key="item.index" v-for="item in file">
              <a href="">{{ item.title }}</a>
              <span @click="getDate">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          date: "2021-01-13",
          title: "公司党组传达贯彻国务院常务会议精神",
        },
        {
          date: "2021-01-13",
          title: "新疆电网负荷创新高",
        },
        {
          date: "2021-01-13",
          title: "辽电铁军战寒防疫保群众供电无忧",
        },
        {
          date: "2021-01-13",
          title: "国家电网4个工作室获全总命名",
        },
        {
          date: "2021-01-13",
          title: "寒冬里电足暖意浓",
        },
        {
          date: "2021-01-13",
          title: "北京持续极寒天气电力保障供应可靠",
        },
        {
          date: "2021-01-13",
          title: "认真学习贯彻安全生产电视电话会议精神",
        },
        {
          date: "2021-01-13",
          title: "国家电网用电负荷创历史新高",
        },
        {
          date: "2021-01-13",
          title: "2021年国家电网有限公司新年贺词",
        },
      ],
      todo: [
        {
          name: "隐患排查汇报",
          num: "(5)",
        },
        {
          name: "到岗到位",
          num: "(3)",
        },
        {
          name: "简报及报送",
          num: "(7)",
        },
      ],
      file: [
        {
          date: "2021-01-13",
          title: "公司党组传达贯彻国务院常务会议精神",
        },
        {
          date: "2021-01-13",
          title: "新疆电网负荷创新高",
        },
        {
          date: "2021-01-13",
          title: "辽电铁军战寒防疫保群众供电无忧",
        },
        {
          date: "2021-01-13",
          title: "国家电网4个工作室获全总命名",
        },
      ],
    };
  },
  methods: {
    getDate() {
      let date = new Date();
      let year = date.getFullYear();
      let mounth = date.getMonth() + 1;
      let day = date.getDate();
      this.date = year + "-" + mounth + "-" + day;
    },
  },
};
</script>

<style lang="less" scoped>
.default-page {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  .default-page-up {
    flex: 6;
    // background: rgb(226, 9, 9);
    display: flex;
    .bigImg {
      flex: 7;
      margin-left: 1%;
      // background: rgb(147, 233, 144);
      .bigImg-size {
        width: 100vh;
        height: 47vh;
        // background: rgb(207, 52, 52);
        margin-top: 1.75%;
        position: relative;
        .img-title {
          width: 100%;
          height: 10%;
          background: rgb(216, 215, 215);
          text-align: center;
          padding-top: 2%;
          opacity: 0.5;
        }
        .title-2 {
          position: absolute;
          top: 4%;
          left: 30%;
          font-weight: 600;
        }
        .el-carousel__item:nth-child(2n) {
          background: url(../assets/3.png) no-repeat;
          background-size: 100% 100%;
        }
        .el-carousel__item:nth-child(2n + 1) {
          background: url(../assets/5.jpg) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .imporNews {
      flex: 4;
      // background: rgb(216, 188, 188);
      width: 10vh;
      .imporNews-title {
        width: 93%;
        height: 6%;
        // background: rgb(214, 117, 117);
        border-bottom: 3px solid rgb(4, 109, 74);
        margin-top: 3%;
        padding-left: 2%;
      }
      .imporNews-content {
        width: 93%;
        height: 80%;
        // background: rgb(167, 238, 167);
        font-size: 14px;
        position: relative;
        padding-left: 2%;
        ul {
          li {
            padding-top: 4%;
            span {
              position: absolute;
              right: 5%;
              font-size: 12px;
              color: rgb(164, 164, 165);
            }
          }
        }
      }
    }
  }
  .default-page-down {
    flex: 4;
    // background: rgb(241, 205, 4);
    display: flex;
    .toDo {
      flex: 4;
      // background: rgb(216, 188, 188);
      .toDo-title {
        width: 93%;
        height: 9%;
        // background: rgb(236, 199, 199);
        border-bottom: 3px solid rgb(4, 109, 74);
        margin-left: 2%;
        padding-left: 2%;
      }
      .toDo-content {
        width: 97%;
        height: 80%;
        // background: rgb(138, 124, 221);
        margin-top: 2%;
        ul {
          li {
            padding-top: 4%;
            padding-left: 4%;
          }
        }
      }
    }
    .file {
      flex: 6;
      // background: rgb(217, 231, 90);
      .file-title {
        width: 94%;
        height: 9%;
        // background: rgb(185, 240, 221);
        border-bottom: 3px solid rgb(4, 109, 74);
        margin-left: 2%;
        padding-left: 1%;
      }
      .file-content {
        width: 93%;
        height: 80%;
        // background: rgb(138, 124, 221);
        // margin-top: 1%;
        margin-left: 2%;
        font-size: 14px;
        position: relative;
        padding-left: 1%;
        ul {
          li {
            padding-top: 4%;
            span {
              position: absolute;
              right: 2%;
              font-size: 12px;
              color: rgb(164, 164, 165);
            }
          }
        }
      }
    }
  }
}
</style>
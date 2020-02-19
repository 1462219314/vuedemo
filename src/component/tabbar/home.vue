<template>
  <div>
    <!-- 轮播图区域 -->

    <mt-swipe :auto="4000" v-if="lunbotuList.length > 0">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <a :href="item.url">
            <img :src="item.img" alt="加载中。。" :onerror="defaultImg" />
            <!-- :onerror 图片加载不出来就使用 onerror 中的路径 -->
          </a>
        </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="4000" v-else>
        <mt-swipe-item >
          
            <img src="awgwa" alt="加载中。。" :onerror="defaultImg" />
           
        </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//导入sweetalert2组件
import swal from "sweetalert2";

export default {
  data() {
    return {
      defaultImg: "this.src = '/image/test.jpg'",
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo1").then(
        result => {
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message || [];
            // this.$swal.fire({
            //   icon: "error",
            //   title: "Oops...",
            //   text: "Something went wrong!"
            // })
          } else {
            this.$swal.fire({
              icon: "error",
              title: "错误！！",
              text: "Something went wrong!"
            });
          }
        },
        error => {
          console.log(error);
          this.$swal.fire({
            icon: "error",
            title: "出现错误了！！",
            text: error.status + error.statusText
          });
        }
      );
    }
  }
};
</script>

<style scoped lang='scss'>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: rgba(221, 41, 41, 0.884);
    }
    &:nth-child(2) {
      background-color: rgb(19, 173, 194);
    }
    &:nth-child(3) {
      background-color: rgb(108, 46, 189);
    }
  }
}
</style>
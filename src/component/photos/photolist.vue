<template>
  <div>
    <!-- 头部滚动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in cates"
            :key="item.id"
            :class="['mui-control-item' , item.id == 0 ? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片加载区 -->
    <ul class="phtot-list">
      <router-link  v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/'+ item.id" tag='li'>
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [], //图片分类数组
      imgList: [] //图片列表
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0001
    });
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      //获取所有图片的分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(cateid) {
      //根据分类id 获取图片列表
      this.$http.get("api/getimages/" + cateid).then(result => {
        if (result.body.status === 0) {
          this.imgList = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.phtot-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  margin-bottom: 10;
  li {
    background-color: #ccc;
    text-align: center;

    margin-bottom: 10px;
    box-shadow: 0 0 10px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.4);
      height: 84px;
      
      .info-title {
       
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
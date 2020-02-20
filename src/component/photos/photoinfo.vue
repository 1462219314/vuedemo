<template>
  <div class="photo-container">
    <h3>{{ photoInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dataFormat }}</span>
      <span>点击：{{ photoInfo.click}}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->

    <!-- 图片内容区域 -->

    <div class="content" v-html="photoInfo.content"></div>

    <!-- 评论子组件 -->

    <cmt-box :id = 'id'></cmt-box>
  </div>
</template>

<script>
import comment from '../subcomponent/comment.vue';
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {
        //图片详情
      }
    };
  },
  created() {
    this.getPhotoInfo();
  },
  components:{
      'cmt-box' : comment
  },
  methods: {
    getPhotoInfo() {
      //获取图片详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoInfo = result.body.message[0];
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-container {
  padding: 5px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
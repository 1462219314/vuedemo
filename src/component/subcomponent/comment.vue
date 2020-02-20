<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="commentContext"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item , index) in comments" :key="item.comments">
        <div
          class="cmt-title"
        >第{{index + 1}}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat}}</div>
        <div class="cmt-body">{{ item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore" v-if="commentMore">加载更多</mt-button>
    <mt-button type="default" size="large" disabled v-else>没有更多评论了</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1, //默认展示第一页数据
      comments: [], //评论列表
      commentMore: true,
      commentContext: "" //评论内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            //  this.comments = result.body.message
            if (result.body.message.length === 0) {
              this.commentMore = false;
            }
            //拼接评论列表
            this.comments = this.comments.concat(result.body.message);
          } else {
            this.$swal.fire({
              icon: "error",
              title: "错误！！",
              text: "Something went wrong!"
            });
          }
        });
    },
    getMore() {
      //加载更多评论
      this.pageindex++;
      this.getComments();
    },
    postComment() {
      //发表评论
      if (this.commentContext.trim().length === 0) {
        return this.$swal.fire({
          icon: "warning",
          title: "警告！！！",
          text: "评论内容不能为空!"
        });
      }
      this.$http
        .post("api/postcomment/" + this.id, {
          content: this.commentContext.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.commentContext
            };
            this.comments.unshift(cmt);
            this.commentContext = "";
            this.$swal.fire({
              icon: "success",
              //   title: "错误！！！",
              text: result.body.message
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: "错误！！！",
              text: result.body.message
            });
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style scoped lang='scss'>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0px;
  }
  .cmt-list {
    margin: 6px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        border-radius: 5px;
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
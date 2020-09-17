<template>
  <div class="container-remark-activity">
    <div class="user-info">
      <img :src="comment.avatar" alt="error">
      <span>{{ comment.nickname }}</span>
    </div>
    <div class="comment-text">
      <p>{{ comment.commentText }}</p>
    </div>

    <div class="user-background"></div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.container-remark-activity {
  position: relative;
  min-height: 80px;
  width: 90%;

  display: flex;
  flex-direction: row;

  box-shadow: 0 0 5px #dddddd;
}

.user-info {
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 70px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    z-index: inherit;
  }

  span {
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-family: 'Lineto-Brown-Regular';

    margin-left: 5px;
    z-index: inherit;
  }
}

.user-background {
  width: 0;
  height: 0;

  position: absolute;
  top: 0;
  left: 0;

  border-style: solid;
  border-width: 70px 20px 10px 80px;
  border-color: #99cc99 transparent transparent #99cc99;
}

.comment-text {
  margin-left: 30px;
  padding: 10px;

  p {
    margin: 0;
    word-wrap: break-word;
  }
}
</style>

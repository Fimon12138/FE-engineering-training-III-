<template>
  <div class="container-activity">
    <img :src="logo" alt="error" class="logo">
    <div class="info">
      <p class="date">{{ date }}</p>
      <p class="name">{{ name }}</p>
      <div class="divider"></div>
      <p class="location bottom">{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    location: String,
    date: String
  }
}
</script>

<style lang="less" scoped>
.container-activity {
  padding: 10px 20px;
  width: 335px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 7px #dddddd;
}
.logo {
  width: 75px;
  height: 100px;
}
.info {
  margin-left: 20px;
  height: 100px;
  position: relative;
  p {
    margin: 0;
  }
  .date {
    color: #dbb283;
    font-family: 'BalooTammudu-SemiBold';
    font-size: 17px;
    margin-top: 10px;
  }
  .name {
    font-family: 'Lineto-Brown-Bold';
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
  }
  .location {
    font-size: 13px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .bottom {
    position: absolute;
    bottom: 0px;
  }
}
</style>

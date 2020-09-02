<template>
  <div>
    <!-- header section -->
    <div class="header">
      <md-toolbar class="md-large md-transparent toolbar">
        <!-- the first line, including image, search input, two buttons and an icon -->
        <div class="md-toolbar-row">
          <!-- left: img & input -->
          <div class="md-toolbar-section-start">
            <img src="../assets/img/logo.png" alt="loading failed" class="logo-image">
            <md-field class="search-area">
              <md-icon :md-src="require('../assets/svg/search.svg')"></md-icon>
              <md-input v-model="searchPattern" placeholder="搜索活动"></md-input>
            </md-field>
          </div>

          <!-- right: two buttons & icon -->
          <div class="md-toolbar-section-end">
            <span class="small-button-text" style="margin-right: 30px">我的票</span>
            <div style="display: flex">
              <span class="small-button-text" style="margin-right: 5px; line-height: 30px">登录</span>
              <md-icon :md-src="require('../assets/svg/account_circle.svg')" style="width: 30px; height: 30px"></md-icon>
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPattern: ''
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar {
  padding-top: 20px;
  padding-left: 15%;
  padding-right: 15%;
}
.logo-image {
  width: 120px;
}
.search-area {
  margin-left: 20px;
  width: 300px;
}
.small-button-text {
  font-size: 15px;
  font-weight: bold;
}
</style>
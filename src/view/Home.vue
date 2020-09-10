<template>
  <div style="overflow: auto">
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
            <div v-if="isLogin" style="display: flex" @click="login">
              <span class="small-button-text" style="margin-right: 5px; line-height: 30px">登录</span>
              <md-icon :md-src="require('../assets/svg/account_circle.svg')" style="width: 30px; height: 30px"></md-icon>
            </div>
            <div v-else style="display: flex" @click="profile">
              <span class="small-button-text" style="margin-right: 5px; line-height: 30px">{{ userName }}</span>
              <md-icon :md-src="require('../assets/svg/account_circle.svg')" style="width: 30px; height: 30px"></md-icon>
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
    <!-- body -->
    <div class="main">
      <CarouselWithArrow
        :itemList="recommendations"
        class="carousel"
      ></CarouselWithArrow>
    </div>
  </div>
</template>

<script>
import pic1 from '../assets/img/event_cover_3.png'
import pic2 from '../assets/img/event_cover_6.png'
import pic3 from '../assets/img/logo.png'
import CarouselWithArrow from '../components/CarouselWithArrow'

export default {
  data () {
    return {
      searchPattern: '',
      isLogin: true,
      userName: '',
      recommendations: [pic1, pic2, pic3]
    }
  },
  components: {
    CarouselWithArrow
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  },
  created () {
    this.userName = window.sessionStorage.getItem('name')
    if (this.userName) {
      this.isLogin = false
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
  font-family: 'Quicksand-Bold';
  cursor: pointer;
}
.small-button-text:hover {
  color: #1bb1ba;
}
.carousel {
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
}
</style>

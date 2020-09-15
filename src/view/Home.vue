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
              <md-input v-model="searchPattern" placeholder="Search"></md-input>
            </md-field>
          </div>

          <!-- right: two buttons & icon -->
          <div class="md-toolbar-section-end">
            <span class="small-button-text" style="margin-right: 30px">My Tickets</span>
            <div v-if="isLogin" style="display: flex" @click="login">
              <span class="small-button-text" style="margin-right: 5px; line-height: 30px">Log in</span>
              <md-icon :md-src="require('../assets/svg/account_circle.svg')" style="width: 30px; height: 30px"></md-icon>
            </div>
            <div v-else style="display: flex" @click="profile">
              <span class="small-button-text user-name" style="margin-right: 5px; line-height: 30px">{{ userName }}</span>
              <md-icon :md-src="require('../assets/svg/account_circle.svg')" style="width: 30px; height: 30px"></md-icon>
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
    <!-- body -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pic1 from '../assets/img/event_cover_3.png'
import pic2 from '../assets/img/event_cover_6.png'
import pic3 from '../assets/img/logo.png'
import logo from '../assets/img/vue-logo.png'

export default {
  data () {
    return {
      searchPattern: '',
      isLogin: true,
      userName: '',
      recommendations: [pic1, pic2, pic3],
      categories: [
        {
          title: 'Concerts',
          main: {
            imgUrl: logo,
            name: 'Liu Bo\'s Personal Concert - Wuhan Station',
            location: 'Wuhan Center',
            date: '2020-1-1 19:00'
          },
          sub: [
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            },
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            },
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            },
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            },
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            },
            {
              logo,
              name: 'Liu Bo\'s Personal Concert - Wuhan Station',
              location: 'Wuhan Center',
              date: '2020-1-1 19:00'
            }
          ]
        }
      ]
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    profile () {
      this.$router.push('/profile/')
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
.main {
  margin-bottom: 50px;
}
.user-name {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<template>
  <el-container>
    <el-header height="100px">
      <img src="../assets/img/logo-profile.png" alt="loading failed" style="width: 100px">
    </el-header>
    <el-container>
      <el-aside width="200px">
        <img :src="pic" alt="error">
        <span class="user-name">{{ userName }}</span>
        <el-divider></el-divider>
        <ul>
          <li v-for="item in listItems" :key="item.label"
            @click="item.onClick" :class="{'select-item': item.select}">
            {{ item.label }}
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div class="title">
          {{ activeFunction }}
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import pic from '../assets/img/vue-logo.png'

export default {
  data () {
    return {
      userName: window.sessionStorage.getItem('name') || 'Yihang LU',
      pic,
      listItems: [
        {
          label: 'My Tickets',
          select: true,
          onClick: () => {
            this.activeFunction = 'Tickets'
            this.handleActive('My Tickets')
            this.$router.push('/tickets')
          }
        },
        {
          label: 'My Orders',
          select: false,
          onClick: () => {
            this.activeFunction = 'Orders'
            this.handleActive('My Orders')
            this.$router.push('/orders')
          }
        },
        {
          label: 'My ZJ-Pay',
          select: false,
          onClick: () => {
            this.activeFunction = 'ZJ Pay'
            this.handleActive('My ZJ-Pay')
            this.$router.push('/zjpay')
          }
        },
        {
          label: 'Personal Info',
          select: false,
          onClick: () => {
            this.activeFunction = 'Personal Info'
            this.handleActive('Personal Info')
            this.$router.push('/personalinfo')
          }
        }
      ],
      activeFunction: ''
    }
  },
  methods: {
    handleActive (selectItem) {
      for (const item of this.listItems) {
        item.select = selectItem === item.label
      }
    }
  },
  created () {
    this.activeFunction = 'Tickets'
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding-left: 10%;
  background-color: white;
  line-height: 100px;
  background-color: #260354;
}
.el-aside {
  width: 20%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  background: url('../assets/img/aside.png') left bottom no-repeat;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 7px #dddddd;
    margin-left: 30px;
  }
  span {
    font-weight: bold;
    font-size: 25px;
    min-height: 30px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 15px 30px;
      font-family: 'Lineto-Brown-Bold';
      font-size: 16px;
    }
    li:hover {
      background-color: #d9f4f4;
    }
  }
}
.select-item {
  border-left: 5px solid #00b5b5;
  background-color: #d9f4f4;
}
.title {
  font-family: 'Lineto-Brown-Bold';
  font-size: 50px;
  margin-left: 20px;
  margin-top: 50px;
}
.user-name {
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

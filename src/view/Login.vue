<template>
  <div>
    <div class="header">
      <img src="../assets/img/logo.png" alt="loading failed" class="logo-image">
      <span class="text">会员登录</span>
    </div>
    <div class="main">
      <md-card class="card ">
        <div class="form-area">
          <md-field>
            <label>用户名</label>
            <md-input v-model="formData.name"></md-input>
          </md-field>
          <md-field>
            <label>密码</label>
            <md-input v-model="formData.password"></md-input>
          </md-field>
        </div>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20%;
  background-color: white;
}
.logo-image {
  width: 170px;
}
.text {
  font-size: 20px;
  font-weight: 700;
}
.main {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 100px;
  background-color: #5982c4;
}
.card {
  background-color: white;
}
</style>
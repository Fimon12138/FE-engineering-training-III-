<template>
  <div>
    <div class="header">
      <img src="../assets/img/logo.png" alt="loading failed" class="logo-image">
      <span class="text">会员登录</span>
    </div>
    <div class="main">
      <md-card  class="card">
        <div class="form-area">
          <md-field md-clearable>
            <md-icon :md-src="require('../assets/svg/account_circle_grey.svg')"></md-icon>
            <label>用户名</label>
            <md-input v-model="formData.name"></md-input>
          </md-field>
          <md-field>
            <md-icon :md-src="require('../assets/svg/lock.svg')"></md-icon>
            <label>密码</label>
            <md-input v-model="formData.password" type="password"></md-input>
          </md-field>
        </div>
        <md-button class="signin-button">登录</md-button>
        <br>
        <span>还不是会员？ <a href="/">注册</a></span>
      </md-card>
    </div>
    <div class="footer">
      <span>或者，现在作为商家入驻票客</span>
      <md-button class="md-raised md-primary">跳转至商家版</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
  height: 100px;
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
  position: absolute;
  top: 100px;
  bottom: 200px;
  left: 0;
  right: 0;
  padding-right: 200px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.card {
  width: 400px;
  height: 300px;
  padding: 30px 20px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  .signin-button {
    background-color: #5eb85c;
    padding: 10px 50px;
    border-radius: 7px;
    margin-top: 20px;
    font-size: 17px;
  }
  span {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    font-size: 15px;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  span {
    font-size: 30px;
    font-weight: 700;
  }
  .md-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 15px;
  }
}
</style>

<template>
  <div>
    <div class="header">
      <img src="../assets/img/logo.png" alt="loading failed" class="logo-image">
      <span class="text">会员登录</span>
    </div>
    <div class="main">
      <el-card>
        <el-form ref="formRef" :model="formData" label-position="top"
          :rules="rules">
          <el-form-item v-for="item in formSchema" :key="item.label"
            :prop="item.data.field">
            <FormItemExtend useIcon :iconUrl="item.iconUrl"
              :label="item.label" :renderData="{ schema: item.data, form: formData }"
              disableNote @input="modifyForm"
            ></FormItemExtend>
          </el-form-item>
        </el-form>
        <el-button type="success" class="login-button" @click="login">登录</el-button>
        <div class="signup">
          还没有账号？ <a href="/#/signup">注册</a>
        </div>
      </el-card>
    </div>
    <div class="footer">
      <span>或者，现在作为商家入驻票客</span>
      <el-button type="primary">跳转至商家版</el-button>
    </div>
  </div>
</template>

<script>
import FormItemExtend from '../components/FormItemExtend'
import accountSvg from '../assets/svg/account_circle_grey.svg'
import lockSvg from '../assets/svg/lock.svg'

export default {
  data () {
    return {
      formData: {
        name: '',
        password: ''
      },
      formSchema: [
        {
          iconUrl: accountSvg,
          label: '用户名',
          data: {
            field: 'name',
            type: 'input'
          }
        },
        {
          iconUrl: lockSvg,
          label: '密码',
          data: {
            field: 'password',
            type: 'input',
            attrs: {
              'show-password': true
            }
          }
        }
      ],
      rules: {
        name: [
          {
            validator: (rules, value, callback) => {
              if (value === '') {
                return callback(new Error('This field is required!'))
              }
              callback()
            }
          }
        ],
        password: [
          {
            validator: (rules, value, callback) => {
              if (value === '') {
                return callback(new Error('This field is required!'))
              }
              callback()
            }
          }
        ]
      }
    }
  },
  components: {
    FormItemExtend
  },
  methods: {
    modifyForm (field, value) {
      this.$set(this.formData, field, value)
    },
    login () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // alert('敬请期待')
          window.sessionStorage.setItem('name', this.formData.name)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  padding-left: 10%;
  background-color: white;
  line-height: 100px;
}
.logo-image {
  width: 170px;
}
.text {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
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
  background-image: url('../assets/img/event_cover_6.png');
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
  .el-button {
    border-radius: 7px;
    padding: 10px, 20px;
    margin-top: 20px;
  }
}
.login-button {
  border-radius: 7px;
  padding: 10px, 20px;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
}
.signup {
  text-align: center;
  margin-top: 25px;
  font-weight: 400;
}
.el-card {
  width: 25%;
}
</style>

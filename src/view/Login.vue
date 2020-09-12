<template>
  <div>
    <div class="header">
      <img src="../assets/img/logo.png" alt="loading failed" class="logo-image">
      <span class="text">Buyer Login</span>
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
        <el-button type="success" class="login-button" @click="login">Log in</el-button>
        <div class="signup">
          Do not have an account？ <a href="/#/signup">Sign up</a>
        </div>
      </el-card>
    </div>
    <div class="footer">
      <span>Or, Join us now as a seller</span>
      <el-button type="primary">Go to seller version</el-button>
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
          label: 'User Name',
          data: {
            field: 'name',
            type: 'input',
            attrs: {
              clearable: true
            },
            on: {
              focus: () => this.clearValidation('name')
            }
          }
        },
        {
          iconUrl: lockSvg,
          label: 'Password',
          data: {
            field: 'password',
            type: 'input',
            attrs: {
              'show-password': true,
              clearable: true
            },
            on: {
              focus: () => this.clearValidation('password')
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
            },
            trigger: 'never'
          }
        ],
        password: [
          {
            validator: (rules, value, callback) => {
              if (value === '') {
                return callback(new Error('This field is required!'))
              }
              callback()
            },
            trigger: 'never'
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
    clearValidation (field) {
      this.$refs.formRef.clearValidate(field)
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
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
  font-family: 'BalooTammudu-SemiBold';
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
    font-family: 'Lineto-Brown-Bold';
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

<template>
  <div class="container-confirm-order">
    <span class="title">Confirm Your Order</span>

    <div class="info-area">
      <div v-for="(item, index) in list" :key="index" class="info-item">
        <md-icon :md-src="yes"></md-icon>
        <span class="label">{{ item.label }}:</span>
        <span class="value">{{ item.value }}</span>
      </div>
      <div ref="loadingContainer" class="animation"></div>
    </div>

    <div v-show="showButton">
      <el-button class="button" type="danger">Confirm and Pay</el-button>
      <span class="note">Powered by ZJPay</span>
      <img :src="ZJPay" alt="error" class="zjpay-logo">
    </div>
  </div>
</template>

<script>
import yes from '../assets/svg/check_circle_green.svg'
import lottie from 'lottie-web'
import loadingJSON from '../assets/lottie_json/loading.json'
import ZJPay from '../assets/img/zjpay.png'

export default {
  data () {
    return {
      orderParams: [],
      list: [],
      yes,
      animation: undefined,
      ZJPay,
      showButton: false
    }
  },
  methods: {
    addItem (index) {
      // console.log(index)
      this.list.push(this.orderParams[index])
      if (index + 1 < this.orderParams.length) {
        const func = this.addItem
        setTimeout(function () {
          func(index + 1)
        }, 1000)
      }
      if (index === this.orderParams.length - 1) {
        const param = this.animation
        setTimeout(function () {
          param.destroy()
        }, 700)
        this.showButton = true
      }
    }
  },
  created () {
    const params = this.$route.query
    console.log(params)
    this.orderParams = Object.keys(params).map(item => {
      return {
        label: item,
        value: params[item]
      }
    })
    console.log(this.orderParams)
  },
  mounted () {
    this.$nextTick(() => {
      this.animation = lottie.loadAnimation({
        container: this.$refs.loadingContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loadingJSON
      })
      this.animation.setSpeed(0.7)

      this.addItem(0)
    })
  }
}
</script>

<style lang="less" scoped>
.container-confirm-order {
  width: 75%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  padding-top: 50px;

  font-family: 'Lineto-Brown-Bold';
}
.title {
  font-size: 30px;
}

.info-area {
  display: flex;
  flex-direction: column;

  margin-top: 20px;
}

.info-item {
  display: flex;
  flex-direction: row;
  padding: 10px 40px;
  border-radius: 5px;

  margin: 10px 0;
  background-color: #ecf3fe;

  .md-icon {
    margin: 0;
  }

  .label {
    margin-left: 10px;
    font-size: 20px;
    padding-top: 3px;
  }

  .value {
    margin-left: 20px;
    padding-top: 9px;

    font-family: 'BalooTammudu-SemiBold';
    font-size: 18px;
    color: #ff2d79;
  }
}

.animation {
  width: 24px;
  height: 24px;
}

.button {
  width: 200px;
  font-size: 16px;
  margin-left: 60px;
}

.zjpay-logo {
  height: 30px;
  margin-left: 5px;
}
.note {
  font-size: 12px;
  color: grey;
  margin-left: 30px;
}
</style>

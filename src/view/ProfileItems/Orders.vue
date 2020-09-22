<template>
  <div class="container-orders">
    <Order
      v-for="(order, index) in OrderList" :key="index"
      :order="order"
      :class="{ 'distanceTop': index > 0 }"
    ></Order>
  </div>
</template>

<script>
import Order from '../../components/Order'

export default {
  data () {
    return {
      OrderList: [
        {
          name: 'Liu Bo\'s Personal Concert - Wuhan Station',
          id: '0021',
          price: '30',
          createTime: '2020-1-1',
          state: 'processing'
        },
        {
          name: 'Liu Bo\'s Personal Concert - Wuhan Station',
          id: '0021',
          price: '30',
          createTime: '2020-1-1',
          state: 'finished'
        }
      ]
    }
  },
  components: {
    Order
  }
}
</script>

<style lang="less" scoped>
.container-orders {
  margin-top: 40px;
}

.distanceTop {
  margin-top: 30px;
}
</style>

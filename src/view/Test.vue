<template>
  <div class="outer">
    <Ticket
      :logo="logo"
      :name="name"
      :location="location"
      :date="date"
    >
    </Ticket>
    <Activity
      :logo="logo"
      :name="name"
      location="Wuhan Center, Hongshan District, Wuhan, China"
      date="1 Jan, 2020"
      style="margin-top: 30px"
    ></Activity>
    <MainActivity
      :imgUrl="logo"
      :name="name"
      location="Wuhan Center, Hongshan District, Wuhan, China"
      date="1 Jan, 2020"
      style="margin-top: 30px"
    ></MainActivity>
  </div>
</template>

<script>
import Ticket from '../components/Ticket'
import Activity from '../components/Activity'
import MainActivity from '../components/MainActivity'
import logo from '../assets/img/vue-logo.png'

export default {
  data () {
    return {
      logo,
      name: 'Liu Bo\'s Personal Concert - Wuhan Station',
      location: 'Wuhan Center',
      date: '2020-1-1 19:00'
    }
  },
  components: {
    Ticket,
    Activity,
    MainActivity
  }
}
</script>

<style lang="less" scoped>
.outer {
  padding-top: 50px;
  padding-left: 30px;
}
</style>

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
    <ActivityCategory
      category="Concerts"
      :main="main"
      :sub="sub"
      style="margin-top: 30px;"
    ></ActivityCategory>

    <Order
      :order="order"
      style="margin-top: 30px"
    ></Order>

    <RemarkActivity
      :comment="comment"
      :index="0"
      style="margin-top: 30px"
    ></RemarkActivity>

    <RemarkActivity
      :comment="comment"
      :index="1"
      style="margin-top: 30px"
    ></RemarkActivity>

    <RemarkProfile
      :comment="commentP"
      style="margin-top: 30px"
    ></RemarkProfile>
  </div>
</template>

<script>
import Ticket from '../components/Ticket'
import Activity from '../components/Activity'
import MainActivity from '../components/MainActivity'
import ActivityCategory from '../components/ActivityCategory'
import Order from '../components/Order'
import RemarkActivity from '../components/RemarkActivity'
import RemarkProfile from '../components/RemarkProfile'

import logo from '../assets/img/vue-logo.png'
import activityPic from '../assets/img/activity.png'

export default {
  data () {
    return {
      logo,
      name: 'Liu Bo\'s Personal Concert - Wuhan Station',
      location: 'Wuhan Center',
      date: '2020-1-1 19:00',
      order: {
        name: 'Liu Bo\'s Personal Concert - Wuhan Station',
        id: '0021',
        price: '30',
        createTime: '2020-1-1',
        state: 'processing'
      },
      comment: {
        avatar: logo,
        nickname: 'yihang lu',
        commentText: 'Test '.repeat(20)
      },
      commentP: {
        logo: activityPic,
        name: 'Liu Bo\'s Personal Concert - Wuhan Station',
        commentText: 'Test '.repeat(20)
      },
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
  },
  components: {
    Ticket,
    Activity,
    MainActivity,
    ActivityCategory,
    Order,
    RemarkActivity,
    RemarkProfile
  }
}
</script>

<style lang="less" scoped>
.outer {
  padding-top: 50px;
  padding-left: 30px;
  padding-bottom: 500px;
}
</style>

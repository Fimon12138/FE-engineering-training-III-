<template>
  <div class="container">
    <div class="tool">
      <div :class="{ 'tab': true, 'select-item': activePart === 'upcoming' }"
        @click="activePart = 'upcoming'">Upcoming</div>
      <div :class="{ 'tab': true, 'select-item': activePart === 'past' }"
        style="margin-left: 5px" @click="activePart = 'past'">Past</div>
    </div>
    <div class="main">
      <Ticket
        v-for="(ticket, index) in ticketList" :key="index"
        :logo="ticket.logo"
        :name="ticket.name"
        :location="ticket.location"
        :date="ticket.date"
        class="ticket"
      ></Ticket>
    </div>
  </div>
</template>

<script>
import Ticket from '../../components/Ticket'
import logo from '../../assets/img/vue-logo.png'

export default {
  data () {
    return {
      activePart: 'upcoming',
      ticketList: [
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
    Ticket
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-top: 60px;
}
.tool {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  .tab {
    text-align: center;
    width: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: 'Lineto-Brown-Bold';
    font-size: 17px;
    background-color: #e6e9eb;
  }
  .tab:hover {
    background-color: #cfd4d9;
  }
}
.select-item {
  border-bottom: 2px solid #00b5b5;
  background-color: white !important;
}
.main {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 30px;
}
.ticket {
  margin: 10px 20px;
}
.ticket:hover {
  box-shadow: 0 0 10px #dddddd;
  margin-top: 5px;
  margin-bottom: 15px;
  -webkit-transition-property: margin-top, margin-bottom;
  transition-property: margin-top, margin-bottom;
  transition-duration: .3s;
  -webkit-transition-duration: .3s;
}
</style>

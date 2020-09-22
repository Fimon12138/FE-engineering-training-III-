<template>
  <div class="container-all-activities">
    <ActivityForMore
      v-for="(activity, index) in activityList" :key="index"
      :activity="activity"
    ></ActivityForMore>
  </div>
</template>

<script>
import ActivityForMore from '../components/ActivityForMore'

export default {
  data () {
    return {
      activityList: []
    }
  },
  components: {
    ActivityForMore
  },
  created () {
    this.$http.get('https://run.mocky.io/v3/0e0b47c6-6310-4b81-b6f1-ebf11968b751').then(res => {
      const activity = {
        logo: res.data.imageColumn,
        name: res.data.ticketName,
        location: res.data.location,
        date: res.data.startTime
      }

      // console.log(this.activity)

      for (let i = 0; i < 5; i++) {
        this.activityList.push(activity)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
.container-all-activities {
  width: 1350px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 30px;
}
</style>

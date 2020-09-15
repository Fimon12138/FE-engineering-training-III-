<template>
  <div class="container-index-page">
    <CarouselWithArrow
      :itemList="recommendations"
      class="carousel"
    ></CarouselWithArrow>
    <div class="activities-area">
      <ActivityCategory
        v-for="(category, index) in categories" :key="index"
        :category="category.title"
        :main="category.main"
        :sub="category.sub"
      ></ActivityCategory>
    </div>
  </div>
</template>

<script>
import CarouselWithArrow from '../components/CarouselWithArrow'
import ActivityCategory from '../components/ActivityCategory'

import pic1 from '../assets/img/event_cover_3.png'
import pic2 from '../assets/img/event_cover_6.png'
import pic3 from '../assets/img/logo.png'
import logo from '../assets/img/vue-logo.png'

export default {
  data () {
    return {
      recommendations: [pic1, pic2, pic3],
      categories: [
        {
          title: 'Concerts',
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
      ]
    }
  },
  components: {
    CarouselWithArrow,
    ActivityCategory
  }
}
</script>

<style lang="less" scoped>
.carousel {
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
}
.activities-area {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div>
    <CarouselWithArrow
      :itemList="items"
      class="test"
    ></CarouselWithArrow>
  </div>
</template>

<script>
import CarouselWithArrow from '../components/CarouselWithArrow'
import pic1 from '../assets/img/event_cover_3.png'
import pic2 from '../assets/img/event_cover_6.png'
import pic3 from '../assets/img/logo.png'

export default {
  data () {
    return {
      items: [pic1, pic2, pic3]
    }
  },
  components: {
    CarouselWithArrow
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>

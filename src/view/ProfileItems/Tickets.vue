<template>
  <div class="container">
    <div class="tool">
      <div :class="{ 'tab': true, 'select-item': activePart === 'upcoming' }"
        @click="activePart = 'upcoming'">Upcoming</div>
      <div :class="{ 'tab': true, 'select-item': activePart === 'past' }"
        style="margin-left: 5px" @click="activePart = 'past'">Past</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activePart: 'upcoming'
    }
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
</style>

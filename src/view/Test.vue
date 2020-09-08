<template>
  <el-tooltip effect="dark" content="" placement="right">
    <el-input style="width: 200px; margin-top: 100px"></el-input>
  </el-tooltip>
</template>

<script>
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
console.log(emailReg.test('yihang.lu@shopee.com'))
</script>

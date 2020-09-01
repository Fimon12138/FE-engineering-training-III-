<template>
  <el-container>
<!--    顶部菜单栏  -->
    <el-header class="top-part">
      <div>
        <div class="right-part">
          <span class="small-button-text" style="margin-right: 30px">我的票</span>
          <div class="button-img-group">
            <span class="small-button-text" style="margin-right: 5px;">登陆</span>
            <md-icon :md-src="require('../assets/svg/account_circle.svg')" class="icon"></md-icon>
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      Main
    </el-main>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<style lang="less" scoped>
  .top-part {
    display: flex;
    justify-content: flex-end;
  }
  .small-button-text {
    font-size: 15px;
    font-weight: bold;
  }
  .button-img-group {
    display: flex;
    .small-button-text {
      vertical-align: middle;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  .right-part {
    display: flex;
  }
</style>

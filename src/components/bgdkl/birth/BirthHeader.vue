<template>
  <div class="birth-header">
    <el-button type="primary" icon="el-icon-arrow-left"></el-button>
    <div class="header-text-div"><span class="header-text">在线办理</span></div>
  </div>
</template>
<script>
    export default {
        name: "BirthHeader"
    }
</script>

<style scoped>
  .birth-header{
    height: 80px;
    width: 650px;
    background: #409EFF;
    margin: 0 auto;
  }
  .el-button{
    float: left;
    font-size: 40px;
    margin-top: 5px;
  }
  .header-text-div{
    margin-top: 20px;
  }
  .header-text{
    float: right;
    margin-top: 20px;
    margin-right: 270px;
    font-size: 30px;
  }
</style>

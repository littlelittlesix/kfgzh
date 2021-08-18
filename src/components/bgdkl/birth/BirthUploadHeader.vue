<template>
  <div>
    <div class="birth-header">
    <el-button type="primary" icon="el-icon-arrow-left" @click="toBirth"></el-button>
    <span class="header-text">在线办理</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "BirthUploadHeader",
        methods: {
            toBirth() {
                this.$router.push('/BirthProveDeclare');
            }
        }
    }
</script>

<style scoped>
  .birth-header{
    height: 100px;
    width: 650px;
    background: #409EFF;
    margin: 0 auto;
  }
  .el-button{
    float: left;
    font-size: 50px;
    margin-top: 10px;
  }
  .header-text{
    margin-right: 90px;
    font-size: 60px;
  }
</style>

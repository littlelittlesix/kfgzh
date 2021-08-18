<template>
  <el-container style="height: 850px; width: 650px;border: 1px solid #eee; margin: 0 auto">
    <el-main>
    <div class="birth-main">
      <div class="main-header">
        <h1 class="bm-h1">出生办理公证须知:</h1>
      </div>
      <div class="main-main">
        <h3 class="bm-h2">1、公证申请人身份证明</h3>
        　　现居住国内的人员提供:<br>
        　　(1)身份证<br>
        　　(2)户口簿<br>
        　　现居住境外的港澳台人员提供:<br>
        　　(1)身份证和通行证;<br>
        　　(2)大陆注销户口证明(原户籍在大陆)<br>
        　　境外的人员提供:<br>
        　　(1)护照 (有效签证页勿漏);<br>
        　　(2)国内注销户口证明(原为中国公民);<br>
        <h3 class="bm-h2">2、父母身份证件</h3>
        　　☆父母一方或双方健在的提供材料如上述身份证明;<br>
        　　☆父母一方或双方故世的提供父母死亡证明(死亡证或注销户口证明)<br>
        <h3 class="bm-h2">3、父母结婚证</h3>
        　　如父母离婚的,提供:<br>
        　　(1)民政局登记的《离婚证》和离婚协议书或<br>
        　　(2)法院调解书（法院判决书）和生效证明书<br>
        <h3 class="bm-h2">4、出生证/独生子女证</h3>
        <h3 class="bm-h2">5、亲属关系证明</h3>
        　　由本人或父母单位人事部门或者街道办事处出具证明或派出所出具<br>
        　　(如上述3~4均齐备则不需提供)<br>
        <h3 class="bm-h2">6、非婚生子女和婚后没有达到足月生产的子女</h3>
        　　须提供《亲子鉴定报告》<br>
        <h3 class="bm-h2">7、照片:</h3>
        　　所需张数依所需要公证份数+1张提供,为同底版两寸彩色证件照片<br>
        <h3 class="bm-h2">8、如非本人办理,还应提供:</h3>
        　　委托书和代理人的身份证件<br>
        <h3 class="bm-h2">9、公证员核查上述材料或询问后认为需补充的其他材料</h3>
      </div>
      <div class="main-footer">
        <span class="main-footer-h">温馨提示:</span>
        <span>本处尽可能的向您列明办理此项公证所需证明资料,但不排除承办公证员根据此公证事项的具体情况要求提供的其他证明材料,不明之处请向承办公证员咨询,并以承办公证员要求提供的为准。</span>
      </div>
      <div class="birth-footer">
        <el-button class="bf-btn" type="primary">上一步</el-button>
        <el-button class="bf-btn" type="primary" @click="toUpload">下一步</el-button>
        <p>本服务由桂林市公证处提供</p>
        <p style="color: gray">桂林市骏泰有限公司提供技术支持</p>
      </div>
    </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "BirthMain",
        methods:{
            toUpload(){
                this.$router.push('/BirthUpload');
            }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .birth-main{
    width: 580px;
    margin: 0 auto;
  }
  .bm-h1{
    margin-right: 360px;
    color: brown;
  }
  .bm-h2{
  }
  .main-main{
    text-align: left;
    border: 1px solid black;
    margin-bottom: 5px;
  }
  .main-footer{
    text-align: left;
    width: 580px;
    height: 80px;
    border: 1px solid black;
  }
  .main-footer-h{
    color: red;
    font-size: 20px;
  }
  .birth-footer{
    width: 580px;
    margin: 0 auto;
    margin-top: 10px;
  }
.bf-btn{
  width: 150px;
  height: 50px;
}
</style>

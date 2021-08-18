<template xmlns="http://www.w3.org/1999/html">
  <div class="Outer">
    <div class="head">
      <label>在线办理</label>
    </div>
    <div class="title">
      <h2>提存公证</h2>
    </div>
    <el-container class="el-container">
      <el-main>
        <div class="content">
            <p class="p-title">一、当事人应提交的材料和证明:</p>
            <p class="p-content">
              1、申请人的身份证、户口本，法人的法人资格证明和法定代表人身份证明，委托办理的，还
              应提供授权委托书和代办人的身份证明。
            </p>
          <p class="p-content">2、债之依据，如合同书、欠债凭证、司法文书等。</p>
          <p class="p-content">
            3、如是债权人拒绝受领或查找不到债权人的，应提供相关证明，如要
            求债权人领取提存物的电函、通知等;还需提供有明确的债权人不接受提存款的事实或材料。
          </p>
          <p class="p-content">4、提存受领人的姓名、地址、联系电话等。</p>
          <p class="p-content">5、提存款的银行转账凭证。</p>
          <p class="p-content">6、公证员核查上述材料或询问后认为需补充的其他材料。</p>
          <p class="p-title">二、申请办理提存公证应注意以下问题:</p>
          <p class="p-content">1、当事人办理提存公证，应向债务履行地公证处申请。</p>
          <p class="p-content">2、提存物在提存期间所产生的孳息归提存受领人所有。提存人取回提存物的,孳息归提存人所有。</p>
          <p class="p-content">3、提存人可以凭法院生效的判决、裁定或提存之债已清偿的公证证明取回提存物。提存物取回视为未提存。</p>
        </div>
      </el-main>
    </el-container>
    <div class="point">
        <p class="p-content">
          <label class="point-word">温馨提示:</label>本处尽可能的向您列明办理此项公证所需证明资料，
          但不排除承办公证员根据此公证事项的具体情况要求提供的其他证明材料，
          不明之处请向承办公证员咨询，并以承办公证员要求提供的为准。</p>
    </div>
    <div class="checkbox">
      <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
    </div>
    <div class="button">
      <el-button type="primary" round style="width: 600px;letter-spacing: 4px;">立即申办</el-button>
    </div>
    <div>
      <p class="p-1">本服务由广西桂林市桂林公正处提供</p>
      <p class="p-2">桂林市骏泰科技有限公司提供技术支持</p>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: false
            };
        }
    };
</script>
<style>
  .Outer {
    width: 650px;
    height: 950px;
    /*background-color: #42b983;*/
    margin: 0 auto;
  }

  .head {
    width: 100%;
    height: 50px;
    background-color: cornflowerblue;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: red;
    letter-spacing: 4px;
  }
  .el-container{
    width: 620px;
    height: 520px;
    border: 1px solid #eee;
    margin: 0 auto;
  }
  .content {
    width: 580px;
    /*margin: 0 auto;*/
    /*border-width: 2px;*/
    /*border-style: solid;*/
    /*border-color: darkgrey;*/
  }
  .p-title{
    text-align: left;
    text-indent: 2em;
    font-weight: 900;
  }
  .p-content{
    text-align: left;
    text-indent: 2em;
    line-height: 200%;
  }
  .point{
    width: 620px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: plum;
  }
  .point-word{
    color: blue;
    font-weight: 700;
  }
  .checkbox{
    width: 620px;
    margin: 0 auto;
    text-align: left;
  }
  .button{
    margin-top: 10px;
  }
  .p-1{
   font-size: 16px;
    color: dodgerblue;
    letter-spacing: 1px;
  }
  .p-2{
    font-size: 14px;
  }
</style>

<template>
    <div class="main" >
        <el-container style="height: 850px; border: 1px solid #fff">
             <!-- <el-header style="text-align:conter;font-size: 12px">
                 在线申办平台告知书
             </el-header> -->
            <el-main class="main-text-header">
                <div class="header-3">
                    <p class="header-3-text">在线申办平台告知书</p>
                </div>
                <div class="main-text" style="line-height:25px">
                    <div style="margin:10px;font-size:15px" >
                    尊敬的公证申请人:<br>
                    欢迎您使用我处的在线申办平台!为了能让您顺利地申办公证事项,请仔细阅读以下内容:<br><br>
                    一、申请人向本处申办公证,提交的证明材料应真实、合法、充分。根据《中华人民共和国公证法》的规定，申请人虚构、隐瞒事实,或者提供虚假证明材料的，应承担相应的法律责任，直至依法追究刑事责任。如申请人提供虚假材料骗取公证书的，申请人提交的相关证明材料可能会被没收，申请公证的相关费用也不予退还。<br><br>
                    二、目前开通在线申办的公证事项包括:新冠疫苗接种记录、无犯罪、学历证书、学位证书、成绩单、身份证、户口本(省内)、曾用名、结婚证(省内)、离婚证(省内)、护照（中国)、存款证明（流水)、个人纳税证明、不动产权证书（深圳)、驾驶证、营业执照(省内)，申办其他事项的请进行在线预约或现场申办。<br><br>
                    三、在线申办的主要流程:发起申办→公证处审核→网上支付→赴公证处提交材料原件→领取公证书。在线申办的每个阶段，我处将以手机短息或微信的形式向您推送通知，请密切留意通知的内容，如需补充材料、网上支付的，请及时进行有关操作。<br><br>
                    <img src="imges/2.jpg"><br>
                    四、在线申办的领证时间为:涉外公证事项需五个工作日、国内公证事项需三个工作日，从提交申办的第二日起算;未能及时补充资料或网上支付，领证时间将相应后延。<br><br>
                    五、我处提供涉外公证事项的英文、法文、西班牙文的代译服务,如需其他语种代译,请在审核通过后自行联系与我处对接的翻译公司。
                    </div>
                </div><br>
                <div style="text-align: left;">
                    <el-checkbox v-model="checked" class="mi" @change="handleCheckedCitiesChange">我阅读并同意</el-checkbox>
                </div>
                <br>
                <div>
                    <el-button type="primary"  class="next" id="next"@click="next()">下一步</el-button>
                </div><br><br>
                <div class="footer">
                    <br>
                    <div class="foot-text">
                        <p class="foot-text-2" >温馨提示:</p>
                        <p class="foot-text-1"> 本处尽可能的向您列明办理此项公证所需证明资料，但不排除承办公证员根据此公证事项的具体情况要求提供的其他证明材料，不明之处请向承办公证员咨询，并以承办公证员要求提供的为准。</p>
                    </div>
                </div><br>
                <p>本服务由桂林市桂林公证处提供</p><br>
                <p style="color:#cccccc">桂林市骏泰有限公司提供技术支持</p>
            </el-main>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'first',
    data() {
        return {
            checked: false
        };
    },
    methods: {
        handleCheckedCitiesChange(value){
            let checkedCount = value;
        },
        next(){
            this.$router.push({path:'/degreeMain/next'})
        }
    }
}

</script>

<style>
    .main{
        height: 100%;
        width: 100%;
        background-color: #fff;
    }
    .header-3{
        margin: 0px auto;
        height: 50px;
        width: 100%;
        background-color: #fff;
    }
    .header-3-text{
        margin-top: 0px;
        font-size: 17px;
    }
    .main-text{
        height: 1550px;
        width: 100%;
        border: black 1px solid;
        text-align: left;
    }
    .next{
        font-size: 20px;
        height: 45px;
        width: 480px;
    }
    .mi{
        font-size: 25px;
    }
    .footer{
        height: 150px;
        width: 550px;
        background-color: #FFC1C1;
        margin-left: 20px;
    }
    .foot-text{
        margin: 10px;
    }
    .foot-text-2{
        color: #FF3E96;
        text-indent:32.4px;
        text-align: left;
        font-weight:bold;
    }
    .foot-text-1{
       text-align: left;
       text-indent:32.4px;
    }

</style>

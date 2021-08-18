<template>
    <div class="shengcun">
         <div class="head">
              <img src="../../../assets/cha.png" class="cha">
              <h1>在线办理</h1>
           <el-divider class="hr1"></el-divider>
            <div class="bottom">
              <img src="../../../assets/fanhui.png" class="back">
              <h2>在线办理</h2>
            </div>
         </div>
         <el-divider class="hr2"></el-divider>
              <div class="body">

                <el-scrollbar style="height: 100%" class="el-scrollbar__wrap">
                  <h3 class="text1">生存证明</h3>
                  <h4 class="text11">身份证件(正面)</h4>
                  <h4 class="text12">身份证件(反面)</h4>
                  <el-upload class="img1"
                             action="https://jsonplaceholder.typicode.com/posts/"
                             list-type="picture-card"
                             :on-preview="handlePictureCardPreview"
                             :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-upload class="img9"
                             action="https://jsonplaceholder.typicode.com/posts/"
                             list-type="picture-card"
                             :on-preview="handlePictureCardPreview"
                             :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
            <el-divider class="hr3"></el-divider>
                  <h4 class="text3">户口簿</h4>
                  <h4 class="text4">港澳台人员(不需上传户口簿)</h4>
            <el-upload class="img2"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
                  <el-upload class="img3"
                             action="https://jsonplaceholder.typicode.com/posts/"
                             list-type="picture-card"
                             :on-preview="handlePictureCardPreview"
                             :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>

            <el-divider class="hr4"></el-divider>
            <h4 class="text5">境外人员(只需上传护照)</h4>

            <el-upload class="img4"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>

              <div class="hidden">

              </div>

              <el-button type="primary" class="btn1">上一步</el-button>
              <el-button type="primary" class="btn2" @click="next()">下一步</el-button>
            </el-scrollbar>
           </div>
           <div class="foot">
                <img src="../../../assets/left.png" class="leftImg">
                <img src="../../../assets/right.png" class="rightImg">

           </div>
    </div>
</template>

<script>
    export default {
        methods:{
            next(){
                this.$router.push({path:"/sign"})
            }
        }
    }
</script>

<style scoped>
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .shengcun{
    height: 950px;
    width: 653px;
    background-color: white;
    left: 28%;
    position: absolute;
    top: 0px;
    margin: 0px;
    padding: 0px;
    border: 1px solid black ;
    border-left: none;
    border-right: none;
  }
  .head{
     position: absolute;
     width: 651px;
     height: 160px;
     background-color: white;
     border: 1px solid black;
     /*border-right: none;*/
     /*border-left: none;*/
  }
  .cha{
    position: absolute;
    height: 50px;
    width: 50px;
    left: 30px;
    top: 10px;
  }
  .hr1{
     background-color: black;
     position: absolute;
     bottom: 20px;
     width: 651px;
  }
  .hr2{
    background-color: black;
    position: absolute;
    top: 155px;
    width: 652px;
  }
  .hr3{
    position: absolute;
    background-color: black;
    top: 270px;
    width: 651px;
  }
  .hr4{
    position: absolute;
    background-color: black;
    top: 550px;
    width: 651px;
  }

  .back{
    position: absolute;
    height: 50px;
    width: 50px;
    left: 30px;
    top: 20px;
  }
  .bottom{
    background-color: #02A7F0;
    position: absolute;
    width: 651px;
    height: 46%;
    border: 1px solid black;
    border-right: none;
    border-left: none;
  }
  .body{
    position: absolute;
    background-color: white;
    width: 651px;
    top: 180px;
    height: 800px;
    border: 1px  solid black;
    border-right: none;

  ;
  }
  .text1{
    position: absolute;
    left: 30px;
  }
  .text11{
    position: absolute;
    top: 30px;
    left: 50px;
  }
  .text12{
    position: absolute;
    top: 30px;
    right: 80px;
     }

  .text3{
    position: absolute;
    top: 300px;
    left: 70px;
  }
  .text4{
    position: absolute;
    top: 300px;
    right: 30px;
  }
  .text5{
    position: absolute;
    top: 560px;
    left: 30px;
  }

  .img1{
    position: absolute;
    left: 30px;
    top: 100px;
  }
  .img9{
    position: absolute;
    right: 50px;
    top: 100px;
  }
  .img2{
    position: absolute;
    left: 30px;
    top: 380px;
  }
  .img3{
    position: absolute;
    right: 50px;
    top: 380px;
  }
  .img4{
    position: absolute;
    left: 30px;
    top: 620px;
  }

  .hidden{
    position: absolute;
    background-color: white;
    top: 780px;
    width: 100%;
    height: 20px;
  }
  .btn1{
    position: absolute;
    top: 800px;
    left: 50px;
    width: 30%;
  }
  .btn2{
    position: absolute;
    top: 800px;
    right: 50px;
    width: 30%;
  }
  .foot{
    position: absolute;
    top: 980px;
    width: 100%;
    height: 60px;
    background-color: white;
    border: 1px solid black;
    border-right: none;
    border-left: none;
  }
  .leftImg{
    height: 50px;
    width: 50px;
    position: absolute;
    left: 200px;
  }
  .rightImg{
    height: 50px;
    width: 50px;
    position: absolute;
    right: 200px;
  }

</style>

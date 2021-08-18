<template>
  <div>
    <el-container style="height: 850px; width: 650px;border: 1px solid #eee; margin: 0 auto">
      <el-main>
        <div class="birth-main">
          <div class="main-header">
            <p class="main-header-title">温馨提示!</p>
            <p class="main-header-text">所上传的材料最好为原图且内容清晰，手机拍摄最好将文件置于A4白色纸背景上，且必须按照办证须知上传相应材料!</p>
            <p>—————————————————————————————————————</p>
          </div>
          <h3>1、申请人身份证明（身份证，户口本，或护照）</h3>
          <p>根据申请人身份，上传相应材料！！！</p>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>2、申请人父母身份证件</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>3、父母结婚证（如离婚则按要求上传）</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>4、出生证（或独生子女证）</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>5、照片</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>6、申请人父母身份证件</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>*7、亲属关系证明（4、5均具备则不需提供）</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <p>—————————————————————————————————————</p>
          <h3>*8、委托书及代理人身份证件（非本人办理需提供）</h3>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div class="birth-footer">
          <el-button class="bf-btn" type="primary" @click="toBirth">上一步</el-button>
          <el-button class="bf-btn" type="primary">下一步</el-button>
          <p>本服务由桂林市公证处提供</p>
          <p style="color: gray">桂林市骏泰有限公司提供技术支持</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "BirthUploadMain",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            toBirth(){
              this.$router.push('/BirthProveDeclare');
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .main-header{
    width: 580px;
    text-align: left;
    margin: 0 auto;
  }
  .main-header-title{
    color: red;
  }
  .birth-main{
    width: 580px;
    text-align: left;
    margin: 0 auto;
  }
  .birth-footer{
    width: 580px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .bf-btn{
    width: 150px;
    height: 50px;
    margin-top: 50px;
  }
</style>

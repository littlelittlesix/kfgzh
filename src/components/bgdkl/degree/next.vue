<template>
    <div class="main-next">
        <el-container style="height: 850px; border: 1px solid #fff">
            <el-main>
                <div class="header-text-H">
                    <p class="header-text-1">温馨提示！</p>
                    <p class="header-text-2">所上传的材料最好为原图且内容清晰，手机拍摄最好将文件置于A4白色纸背景上</p>
                </div><br>
                <div>
                  <i @click="drawer = true" type="primary"
                     style="width: 100%;height: 100%;text-align: left;background-color: transparent;color: black;border: transparent;margin-left: -35px">
                    请选择户口类型:
                    <span   style="display: inline-block">{{ checkedNames }}</span>
                    <i class="el-icon-arrow-right" @click="drawer = true"></i>
                  </i>
                  <el-drawer
                    title="请选择户口类型："
                    :visible.sync="drawer"
                    :direction="direction"
                  >
                    <input type="radio" id="sqr1" value="国内户口" v-model="checkedNames" v-show="false">
                    <label for="sqr1" >国内户口</label><br>
                    <input type="radio" id="sqr2" value="港澳台户口" v-model="checkedNames" v-show="false">
                    <label for="sqr2" >港澳台户口</label><br>
                    <input type="radio" id="sqr3" value="法港澳台户口（原籍大陆）" v-model="checkedNames" v-show="false">
                    <label for="sqr3" >港澳台户口（原籍大陆）</label><br>
                    <input type="radio" id="sqr4" value="境外户口" v-model="checkedNames" v-show="false">
                    <label for="sqr4" >境外户口</label><br>
                    <input type="radio" id="sqr5" value="境外户口（原籍大陆）" v-model="checkedNames" v-show="false">
                    <label for="sqr5" >境外户口（原籍大陆）</label><br>

                  </el-drawer>
                </div>
              <br>
                <div class="main">
                    <el-row :gutter="20">
                        <el-col :span="16"><div class="main-text">申办人的身份证（正反面）</div></el-col>
                        <el-col :span="8"><div class="main-imges"><el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog></div></el-col>
                    </el-row>
                </div>
                <div class="main">
                    <el-row :gutter="20">
                        <el-col :span="16"><div class="main-text">申办人的户口本</div></el-col>
                        <el-col :span="8"><div class="main-imges"><el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog></div></el-col>
                    </el-row>
                </div>
              <br>
              <div>
                <i @click="drawer1 = true" type="primary"
                   style="width: 100%;height: 100%;text-align: left;background-color: transparent;color: black;border: transparent;margin-left: -35px">
                  请选择公证类型:
                  <span style="display: inline-block">{{ checkedNames1 }}</span>
                  <i class="el-icon-arrow-right" @click="drawer1 = true"></i>
                </i>
                <el-drawer
                  title="请选择公证类型："
                  :visible.sync="drawer1"
                  :direction="direction1"
                >
                  <input type="radio" id="sqr6" value="学历公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr6" >学历公证</label><br>
                  <input type="radio" id="sqr7" value="学位公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr7" >学位公证</label><br>
                  <input type="radio" id="sqr8" value="成绩单公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr8" >成绩单公证</label><br>
                  <input type="radio" id="sqr9" value="结婚证公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr9" >结婚证公证</label><br>
                  <input type="radio" id="sqr10" value="户口本公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr10" >户口本公证</label><br>
                  <input type="radio" id="sqr11" value="产权证公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr11" >产权证公证</label><br>
                  <input type="radio" id="sqr12" value="驾驶证公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr12" >驾驶证公证</label><br>
                  <input type="radio" id="sqr13" value="存款证明公证" v-model="checkedNames1" v-show="false">
                  <label for="sqr13" >存款证明公证</label><br>

                </el-drawer>
              </div>
              <br>
              <br>
                <div class="main">
                    <el-row :gutter="20">
                        <el-col :span="16"><div class="main-text">
                          学历公证相关材料</div></el-col>
                        <el-col :span="8"><div class="main-imges"><el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog></div></el-col>
                    </el-row>
                </div>
                <div class="main">
                    <el-row :gutter="20">
                        <el-col :span="16"><div class="main-text">其他补充材料</div></el-col>
                        <el-col :span="8"><div class="main-imges"><el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog></div></el-col>
                    </el-row>
                </div>
              <br>
              <el-button type="primary"  class="next" id="next">提交公证</el-button>
              <br><br>
              <p>本服务由桂林市桂林公证处提供</p><br>
              <p style="color:#cccccc">桂林市骏泰有限公司提供技术支持</p>
            </el-main>
        </el-container>
      <component v-bind:is="who"></component>
    </div>
</template>

<script>
export default {
    name:'next',
    data() {
        return {
            drawer: false,
            drawer1: false,
            direction: 'btt',
            direction1: 'btt',
            dialogImageUrl: '',
            dialogVisible: false,
            msg: '',
            who:"",
            checkedNames:'请选择',
            checkedNames1:'请选择',
        };
    },
    watch:{
        checkedNames:function(newVal){

        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
    methods:{
        //
    }
}
</script>

<style>
  .next{
    font-size: 20px;
    height: 45px;
    width: 280px;
  }
.main-next{
        height: 850px;
        width: 650px;
        background-color: #fff;
    }
.header-text-H{
    margin: 0 auto;
}
.header-text-1{
    color: #ff0000;
    text-indent:32.4px;
    text-align: left;
    font-family:楷体;
    font-size:18px
}
.header-text-2{
    color: #b6b6b6;
    text-indent:32.4px;
    text-align: left;
    font-family:楷体;
    font-size:18px
}
.main{
    height: 220px;
    width: 100%;
    border: black 1px solid;
}
.main-text {
  color: #b6b6b6;
  margin-top: 100px;
  text-align: left;
  font-family: 楷体;
  font-size: 20px;
  text-indent: 32.4px;
}
  .main-imges{
    margin-top: 30px;
    margin-right: 30px;
  }
</style>

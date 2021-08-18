<template>
    <div class="header">
        <div class="header-1">
            <el-row>
                <el-col :span="2"><img src="imges/叉.png" class="cha"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="22"><div class="grid-content bg-purple-light"><h2 class="header-text">在线办理</h2></div></el-col>

            </el-row>
        </div>
        <div class="header-2">
            <el-row>
                <el-col :span="2"><div class="bg-purple"><el-button type="primary" icon="el-icon-arrow-left" class="el-button–primary"></el-button></div></el-col>
                <el-col :span="22"><p class="header-2-text">在线办理</p><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name:'degreeHeader'
}
</script>

<style>
    .header-1{
        height: 50px;
        background-color:rgb(255, 255, 255);
        border:1px solid black;

    }
    .header-text{
        margin-top: 8px;
        margin-left: -70px;
    }
    .cha{
        height: 30px;
        width: 30px;
        margin-top: 8px;
    }
    .header-2{
        height: 50px;
        background-color:#3399ff;
        border:1px solid black;
    }
    .header-2-text{
        margin-top: 8px;
        margin-left: -70px;
        font-size: 20px;
    }
    .el-button–primary{
        margin-top: 5px;
        color: #fff;
        background-color: #3399ff;
        border-color: #3399ff;
        font-size: 20px;
    }
    /* .bg-purple{
        height: 40px;
        width: 40px;
    } */
</style>

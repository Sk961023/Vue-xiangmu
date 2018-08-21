<template>
    <div class="topNav">
        <el-breadcrumb class="crumbs" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="rigthNav">
            <div class="input">
                <el-input
                placeholder="请输入要搜索的内容"
                v-model="input10"
                clearable>
                </el-input>
            </div>
            <div class="Navsearch">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <router-link to="/" class="user">
                <div class="userImg">
                    <img src="../Img/timg.jpg" alt="" srcset="">
                </div>
                <span>风里来</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input10: ''
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
    height: 50px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    box-shadow: 2px 0px 4px #ccc;
}
.crumbs{
    line-height: 50px;
    margin-left: 20px;
}
.rigthNav{
    width: 500px;
    /* background-color: blue; */
    height: 50px;
    float: right;
}
.input{
    display: inline-block;
    width: 40%;
    margin-top: 7px;
}
.user{
    float: right;
    margin-right: 20px;
}
.user div{
    display: inline-block;
}
.user span{
    display: block;
    margin-top: -29px;
    margin-left: 40px;
    font-size: 16px;
    color: #000010;
}
.userImg{
    margin-top: 10px;
    border-radius:30px; 
    width: 30px;
    height: 30px;
    overflow: hidden;
}
.userImg img{
    height: 100%;
}
.Navsearch{
    display: inline-block;
}
.Navsearch button{
    border: 1px solid #409EFF;
    padding: 9px 10px;
}
</style>

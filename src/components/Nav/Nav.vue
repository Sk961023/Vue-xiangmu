<template>
    <el-col>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo nav"
        text-color='#fff'
        active-text-color="#fff"
        >
        <h3 class="nav-title">博客后台管理系统</h3>
        <div class="user-title">
            <div>
                <div>
                    <div class="userImg"><img src="../Img/timg.jpg" alt=""></div>
                    <span>风里来雨里去</span>
                </div>
            </div>
        </div>
        <router-link to="/">
            <el-menu-item index="1">
                <i class="icon iconfont icon-panel font"></i>
                <span slot="title">仪表盘</span>
            </el-menu-item>
        </router-link>

        <router-link to="/tage/myinfo">
            <el-menu-item index="2">
                <i class="icon iconfont icon-yonghu-copy font"></i>
                <span slot="title">我的信息</span>
            </el-menu-item>
        </router-link>

        <router-link to="/tage/classlist">
            <el-menu-item index="3">
                <i class="icon iconfont icon-category font"></i>
                <span slot="title">分类管理</span>
            </el-menu-item>
        </router-link>

        <el-submenu index="4" class="user">
            <template slot="title">
                <i class="icon iconfont icon-wenzhangguanlixuanzhongzhuangtai font"></i>
                <span>文章管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/tage/newarticle">
                    <el-menu-item index="4-1">新建文章</el-menu-item>
                </router-link>
                <router-link to="/tage/tagelist">
                    <el-menu-item index="4-2">文章列表</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-submenu>

        <router-link to="/tage/comment">
            <el-menu-item index="5">
                <i class="icon iconfont icon-pinglun font"></i>
                <span slot="title">评论</span>
            </el-menu-item>
        </router-link>

        <router-link to="/tage/drafts">
            <el-menu-item index="6">
                <i class="icon iconfont icon-caogao1 font"></i>
                <span slot="title">草稿箱</span>
            </el-menu-item>
        </router-link>

        <router-link to="/tage/recycle">
            <el-menu-item index="7">
                <i class="icon iconfont icon-huishouzhan font"></i>
                <span slot="title">回收站</span>
            </el-menu-item>
        </router-link>

        <el-menu-item index="8">
            <i class="icon iconfont icon-shezhi font"></i>
            <span slot="title">设置</span>
        </el-menu-item>
        
        </el-menu>
    </el-col>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    height: 100vh;
    background-position: 937px ;
    background-size:1700px ;
    background-color: #409eff;
}
.nav-title{
    text-align: center;
    font-weight:500;
    font-size: 18px;
    margin: 14px 0;
    color: #fff;
}
/* 用户昵称 */
.user-title{
    width: 100%;
    margin-bottom: 2px;
}
.user-title > div{
    height: 50px;
    padding: 0 6px;
}
.user-title > div > div{
    border-top:1px solid #fff;
    border-bottom: 1px solid #fff; 
    overflow:hidden;
}
.user-title > div > div > span{
    display: inline;
    float: left;
    line-height: 50px;
    color: #fff;
}
.userImg{
    float: left;
    border-radius: 30px;
    margin: 10px 20px;
    width: 30px;
    overflow: hidden;
    height: 30px;
    display: inline-block;
}
.userImg img{
    float: left;
    height: 100%;
}
</style>
